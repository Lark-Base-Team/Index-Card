import './index.scss'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@douyinfe/semi-ui';
import { dashboard, DashboardState, base, FieldType } from "@lark-base-open/js-sdk";
import type { FilterDuration, Rollup } from '@lark-base-open/js-sdk';
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { IConfig } from '@/common/type';
import PanelTypeAndData from './PanelTypeAndData';
import PanelCustomStyle from './PanelCustomStyle';
import type { IContentData } from '@/common/type';
import { useConfig } from '@/hooks';

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
  const [config, setConfig] = useState<IConfig>({
    tableId: '',
    tableViewId: 'all',
    dateType: FieldType.DateTime,
    dateRange: 'Today',
    statisticalType: 'total',
    statisticalByNumber: 'number',
    statisticalCalcType: 'SUM',
    momOrYoy: [
      {
        momOrYoyDesc: t('momGrowthRate'),
        momOrYoyCalcMethod: 'mom',
        momOrYoyCalcType: 'differenceRate',
      }
    ],
    color: 'primary',
    iconStyle: '1',
    decimal: 0,
    numberFormat: 'number',
    prefix: '$',
    suffix: '',
  })

  useConfig(setConfig);

  /**保存配置 */
  const onSaveConfig = () => {
    dashboard.saveConfig({
      customConfig: config,
      dataConditions: [],
    } as any)
  }

  return (
    <div className='main-config-panel left-border'>
      <div className='form'>
        <Tabs defaultActiveKey='1'>
          {tabList.map((item) => (
            <TabPane tab={item.tab} itemKey={item.key} key={item.key}>
              {item.key === '1' && <PanelTypeAndData config={config} setConfig={setConfig} />}
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