import './index.scss'
import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@douyinfe/semi-ui';
import { dashboard, DashboardState, base, SourceType, FieldType, FilterConjunction, FilterOperator } from "@lark-base-open/js-sdk";
import type { IDataCondition, IDataRange, ICategory, IFilterInfo, FilterInfoCondition, } from '@lark-base-open/js-sdk';
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import PanelTypeAndData from './PanelTypeAndData';
import PanelCustomStyle from './PanelCustomStyle';
import type { IConfig, IMomYoyList, IRenderData, ITableItem } from '@/common/type';
import { useConfig } from '@/hooks';
import { defaultConfig, iconStyleList } from '@/common/constant';
import { configFormatter, getConfig, getIconStyleObj, getMomYoyCalcResult, getPreviewData, renderMainContentData } from '@/utils';

export default function MainConfigPanel({ setRenderData }: { setRenderData: (data: IRenderData) => void }) {
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
  ]

  // create时的默认配置
  const [config, setConfig] = useState<IConfig>(defaultConfig)

  useConfig(setConfig);

  /**保存配置 */
  const onSaveConfig = () => {
    dashboard.saveConfig({
      customConfig: config,
      dataConditions: configFormatter(config),
    } as any)
  }

  const [tableList, setTableList] = useState<ITableItem[]>([]);
  const [tableRangeList, setTableRangeList] = useState<IDataRange[]>([{ type: SourceType.ALL }]);
  const [dateTypeList, setDateTypeList] = useState<ICategory[]>([]);
  const [numberOrCurrencyList, setNumberOrCurrencyList] = useState<ICategory[]>([]);

  const getTableList = useCallback(async () => {
    const baseTableList = await base.getTableList()
    const resultList: ITableItem[] = []

    for (const item of baseTableList) {
      const name = await item.getName();
      resultList.push({ id: item.id, label: name });
    }

    return resultList;
  }, []);

  const getTableRange = useCallback((tableId: string) => {
    return dashboard.getTableDataRange(tableId);
  }, []);

  const getCategories = useCallback(async (tableId: string) => {
    const categories = await dashboard.getCategories(tableId);
    const FieldTypes = [FieldType.DateTime, FieldType.CreatedTime, FieldType.ModifiedTime]
    const dateTypeList = categories.filter(item => FieldTypes.includes(item.fieldType)) || [];
    const numberOrCurrencyTypes = [FieldType.Number, FieldType.Currency]
    const numberOrCurrencyList = categories.filter(item => numberOrCurrencyTypes.includes(item.fieldType)) || [];
    return {
      dateTypeList,
      numberOrCurrencyList,
    };
  }, [])

  const resetData = async (config: IConfig) => {
    const rangeList = await getTableRange(config.tableId);
    setTableRangeList(rangeList);
    const { dateTypeList, numberOrCurrencyList } = await getCategories(config.tableId);
    setDateTypeList(dateTypeList);
    setNumberOrCurrencyList(numberOrCurrencyList);
    config.dateTypeFieldId = dateTypeList[0].fieldId || '';
    if (numberOrCurrencyList.length > 0) {
      config.statisticalType = 'number';
      config.numberOrCurrencyFieldId = numberOrCurrencyList[0].fieldId
    } else {
      config.statisticalType = 'total';
    }
    setConfig({ ...config });
  }

  const initData = async () => {
    console.log('initData');
    const tableList = await getTableList();
    setTableList(tableList);
    let configObj = {} as IConfig;
    if (dashboard.state === DashboardState.Create) {
      // 创建状态，无任务配置
      configObj = { ...config }
      configObj.tableId = tableList[0]?.id;
    } else {
      // config 初始化获取配置
      configObj = await getConfig()
    }
    resetData(configObj);
  }

  useEffect(() => {
    initData()
  }, [getTableList, getTableRange, getCategories])

  const renderMain = async () => {
    if (config.tableId) {
      const dataCondition = configFormatter(config);
      const value = await getPreviewData(dataCondition);
      renderMainContentData(config, value, setRenderData);
    }

  }

  // 每次配置变化，重新获取指标数据
  useEffect(() => {
    renderMain()
  }, [config])

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
                  getTableRange={getTableRange}
                  setTableRangeList={setTableRangeList}
                  dateTypeList={dateTypeList}
                  setDateTypeList={setDateTypeList}
                  getCategories={getCategories}
                  numberOrCurrencyList={numberOrCurrencyList}
                  setNumberOrCurrencyList={setNumberOrCurrencyList}
                  resetData={resetData}
                />
              )}
              {item.key === '2' && <PanelCustomStyle config={config} setConfig={setConfig} />}
            </TabPane>
          ))}
        </Tabs>
      </div>

      <Button
        className='btn'
        theme='solid'
        onClick={onSaveConfig}
      >
        {t('confirm')}
      </Button>
    </div >
  )
}