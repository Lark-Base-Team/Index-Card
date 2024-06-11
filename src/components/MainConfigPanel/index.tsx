import './index.scss'
import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Toast } from '@douyinfe/semi-ui';
import { dashboard, DashboardState, base, SourceType, FieldType } from "@lark-base-open/js-sdk";
import type { IDataRange, ICategory } from '@lark-base-open/js-sdk';
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import PanelTypeAndData from './PanelTypeAndData';
import PanelCustomStyle from './PanelCustomStyle';
import type { IConfig, IRenderData, ITableItem } from '@/common/type';
import { useConfig } from '@/hooks';
import { defaultConfig } from '@/common/constant';
import { configFormatter, getConfig, getPreviewData, renderMainContentData } from '@/utils';
import { debounce } from 'lodash-es';

interface IProps {
  renderData: IRenderData;
  setRenderData: (data: IRenderData) => void;
}
export default function MainConfigPanel({ renderData, setRenderData }: IProps) {
  const { t } = useTranslation();
  const tabList = [
    {
      key: '1',
      tab: t('type_Date'),
    },
    {
      key: '2',
      tab: t('customStyle'),
    }
  ];

  // create时的默认配置
  const [config, setConfig] = useState<IConfig>(defaultConfig);

  useConfig(setConfig);

  /**保存配置 */
  const onSaveConfig = () => {
    if (!config.dateTypeFieldId) {
      Toast.error(t('dataPlaceholder'));
      return;
    }
    // 目前只持存保存一份查询配置
    const dataCondition = configFormatter(config)[0];
    dashboard.saveConfig({
      customConfig: config,
      dataConditions: dataCondition,
    } as any);
  }

  const [tableList, setTableList] = useState<ITableItem[]>([]);
  const [tableRangeList, setTableRangeList] = useState<IDataRange[]>([{ type: SourceType.ALL }]);
  const [dateTypeList, setDateTypeList] = useState<ICategory[]>([]);
  const [numberOrCurrencyList, setNumberOrCurrencyList] = useState<ICategory[]>([]);

  const getTableList = useCallback(async () => {
    const baseTableList = await base.getTableList();
    const resultList: ITableItem[] = [];

    for (const item of baseTableList) {
      const name = await item.getName();
      resultList.push({ value: item.id, label: name });
    }

    return resultList;
  }, []);

  const getTableRange = useCallback((tableId: string) => {
    return dashboard.getTableDataRange(tableId);
  }, []);

  const getCategories = useCallback(async (tableId: string) => {
    const categories = await dashboard.getCategories(tableId);
    const FieldTypes = [FieldType.DateTime, FieldType.CreatedTime, FieldType.ModifiedTime];
    const dateTypeList = categories.filter(item => FieldTypes.includes(item.fieldType)) || [];
    const numberOrCurrencyTypes = [FieldType.Number, FieldType.Currency];
    const numberOrCurrencyList = categories.filter(item => numberOrCurrencyTypes.includes(item.fieldType)) || [];
    return {
      dateTypeList,
      numberOrCurrencyList,
    };
  }, []);

  /**
   * 当tableID变化后，需要根据config的配置重新设置所有依赖数据
  */
  const setData = async (configObj: IConfig, tableIdChange: boolean = true) => {
    const rangeList = await getTableRange(configObj.tableId);
    setTableRangeList(rangeList);
    const { dateTypeList, numberOrCurrencyList } = await getCategories(configObj.tableId);
    setDateTypeList(dateTypeList);
    setNumberOrCurrencyList(numberOrCurrencyList);
    if (tableIdChange) {
      configObj.dateTypeFieldId = dateTypeList[0].fieldId || '';
      const isChange = numberOrCurrencyList.length > 0;
      configObj.statisticalType = isChange ? 'number' : 'total';
      isChange && (configObj.numberOrCurrencyFieldId = numberOrCurrencyList[0].fieldId);
    }
    setConfig({ ...configObj });
  }

  const initData = async () => {
    const tableList = await getTableList();
    setTableList(tableList);
    let configObj = {} as IConfig;
    if (dashboard.state === DashboardState.Create) {
      // 创建状态，无任务配置
      configObj = { ...config };
      configObj.tableId = tableList[0]?.value;
      setData(configObj);
    } else {
      // config 初始化获取配置
      configObj = await getConfig();
      setData(configObj, false);
    }
  }

  useEffect(() => {
    initData();
  }, [getTableList, getTableRange, getCategories]);

  const renderMain = async () => {
    const value = await getPreviewData(config);
    renderMainContentData(config, value, setRenderData);
  }
  const renderMainDebounce = debounce(renderMain, 200);

  // 类型与数据面板变化，依赖base SDK接口的数据计算，重新获取指标数据
  useEffect(() => {
    if (config.tableId) {
      return
    }
    renderMainDebounce();
  }, [config.tableId, config.tableRange, config.dateTypeFieldId, config.dateTypeFieldType, config.dateRange, config.statisticalType, config.numberOrCurrencyFieldId, config.statisticalCalcType, config.momOrYoy]);


  // 自定义样式面板变化，重新设置主面板的显示样式与格式
  useEffect(() => {
    if (config.tableId) {
      return
    }
    const value = [renderData.value, ...renderData.momYoyList.map(item => item.value)].map(item => Number(item))
    renderMainContentData(config, value, setRenderData);
  }, [config.color, config.iconStyleId, config.decimal, config.numberFormat, config.prefix, config.suffix, config]);

  return (
    <div className='main-config-panel left-border'>
      <div className='form'>
        <Tabs defaultActiveKey='1'>
          {tabList.map((item) => (
            <TabPane tab={item.tab} itemKey={item.key} key={item.key}>
              {item.key === '1' && (
                <PanelTypeAndData
                  config={config}
                  setConfig={setConfig}
                  tableList={tableList}
                  tableRangeList={tableRangeList}
                  dateTypeList={dateTypeList}
                  numberOrCurrencyList={numberOrCurrencyList}
                  setData={setData}
                />
              )}
              {item.key === '2' && <PanelCustomStyle config={config} setConfig={setConfig} />}
            </TabPane>
          ))}
        </Tabs>
      </div>

      <Button className='btn' theme='solid' onClick={onSaveConfig}>
        {t('confirm')}
      </Button>
    </div >
  )
}