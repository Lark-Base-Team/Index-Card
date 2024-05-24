import './index.scss'
import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@douyinfe/semi-ui';
import { dashboard, DashboardState, base, SourceType, FieldType, FilterConjunction, FilterOperator } from "@lark-base-open/js-sdk";
import type { IDataCondition, IDataRange, ICategory, IFilterInfo, FilterInfoCondition, } from '@lark-base-open/js-sdk';
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import PanelTypeAndData from './PanelTypeAndData';
import PanelCustomStyle from './PanelCustomStyle';
import type { IConfig, IContentData, ITableItem } from '@/common/type';
import { useConfig } from '@/hooks';
import { defaultConfig } from '@/common/constant';

export default function MainConfigPanel({ setContentData }: { setContentData: (data: IContentData) => void }) {
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
    // dashboard.saveConfig({
    //   customConfig: config,
    //   dataConditions: [],
    // } as any)
    // console.log(config);
    getPreviewData(config)
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

  const initData = async () => {
    if (dashboard.state === DashboardState.Config || dashboard.state === DashboardState.Create) {
      const tableList = await getTableList();
      setTableList(tableList);
      let configObj = { ...config } as IConfig;
      if (dashboard.state === DashboardState.Create) {
        // 创建状态，无任务配置
        configObj.tableId = tableList[0]?.id;
      } else {
        // config 初始化获取配置
        const res = await dashboard.getConfig()
        configObj = res.customConfig as unknown as IConfig;
      }
      const rangeList = await getTableRange(configObj.tableId);
      setTableRangeList(rangeList);
      const { dateTypeList, numberOrCurrencyList } = await getCategories(configObj.tableId);
      setDateTypeList(dateTypeList);
      setNumberOrCurrencyList(numberOrCurrencyList);
      if (dashboard.state === DashboardState.Create) {
        if (numberOrCurrencyList.length > 0) {
          configObj.statisticalType = 'number';
          configObj.numberOrCurrencyFieldId = numberOrCurrencyList[0].fieldId
        } else {
          configObj.statisticalType = 'total';
        }
      }
      setConfig({ ...configObj })
      getPreviewData(configObj)
    }
  }

  const getPreviewData = async (configObj: IConfig) => {
    const dataRange: IDataRange = {
      ...configObj.tableRange,
      // filterInfo: {
      //   conjunction: FilterConjunction.Or,
      //   conditions: [{
      //     fieldId: configObj.dateTypeFieldId,
      //     value: configObj.dateRange,
      //     fieldType: 5,
      //     operator: FilterOperator.Is,
      //   }]
      // }
    }
    const previewConfig = {
      tableId: configObj.tableId,
      dataRange,
      series: [
        {
          fieldId: configObj.numberOrCurrencyFieldId,
          rollup: configObj.statisticalCalcType
        }
      ],
    }
    console.log('previewConfig', previewConfig);
    const data = await dashboard.getPreviewData(previewConfig);
    console.log('>>>>>>>>>>>>>>', data);
  }

  useEffect(() => {
    initData()
  }, [getTableList, getTableRange, getCategories])

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