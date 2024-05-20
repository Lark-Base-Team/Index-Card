import './index.scss'
import { useState, useEffect } from 'react';
import { useConfig } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { Button } from '@douyinfe/semi-ui';
import { dashboard, DashboardState, base, FieldType } from "@lark-base-open/js-sdk";
import type { IView, FilterDuration, Rollup } from '@lark-base-open/js-sdk';
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import type { ColorName } from '../ColorPicker';
import { IConfig, IViewItem, ITableItem } from '@/common/type';
import PanelTypeAndData from './PanelTypeAndData';
import PanelCustomStyle from './PanelCustomStyle';
import type { IContentData } from '@/common/type';

export default function MainConfigPanel({ setContentData }: { setContentData: (data: IContentData) => void }) {
  const { t, i18n } = useTranslation();
  // create时的默认配置
  const [config, setConfig] = useState<IConfig>({
    tableId: '',
    tableViewId: 'all',
    dateType: FieldType.DateTime,
    dateRange: 'Today',
    statisticalType: 'total',
    statisticalByNumber: 'number',
    statisticalCalcType: 'SUM',
    momOrYoyDesc: t('statisticalMethods.momGrowthRate'),
    momOrYoyCalcMethod: 'mom',
    momOrYoyCalcType: 'differenceRate',
    color: 'primary',
    iconStyle: '1',
    decimal: 0,
    numberFormat: 'number',
    prefix: '',
    suffix: '',

  })

  /** 配置用户配置 */
  const updateConfig = (res: any) => {
    const { customConfig } = res;
    if (customConfig) {
      setConfig(customConfig as any);
      setTimeout(() => {
        // 预留3s给浏览器进行渲染，3s后告知服务端可以进行截图了
        dashboard.setRendered();
      }, 3000);
    }

  }
  useConfig(updateConfig)

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

  const [tabKey, setTabKey] = useState('1');
  const tabChange = (key: string) => {
    setTabKey(key);
  }

  const colorChange = (color: ColorName) => {
    setConfig({
      ...config,
      color,
    })
  }


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
        <Tabs activeKey={tabKey} onChange={tabChange}>
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