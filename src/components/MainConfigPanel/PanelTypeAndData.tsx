import './index.scss'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Select } from '@douyinfe/semi-ui';
import { IconPlus } from '@douyinfe/semi-icons';
import { dashboard, DashboardState, base } from "@lark-base-open/js-sdk";
import type { IView } from '@lark-base-open/js-sdk';
import { Divider } from '@douyinfe/semi-ui';
import { IConfig, IViewItem, ITableItem } from '@/common/type';
import { calculationList, dateRangeList, dateTypeList, momOrYoyCalcMethodList, momOrYoyCalcTypeList, statisticalByNumberList, statisticalTypeList } from '@/common/constant';

export default function PanelTypeAndData({ config, setConfig }: { config: IConfig; setConfig: (data: IConfig) => void }) {

  const { t, i18n } = useTranslation();
  const [tableList, setTableList] = useState<ITableItem[]>([]);
  const [tableViewList, setTableViewList] = useState<IViewItem[]>([{ name: '全部数据', id: 'all' }]);


  const getTableList = async () => {
    if (tableList.length === 0 && dashboard.state === DashboardState.Config) {
      const baseTablist = await base.getTableList()
      const resultList: ITableItem[] = []

      for (const item of baseTablist) {
        const name = await item.getName();
        const viewList = await item.getViewList();
        resultList.push({ id: item.id, name, viewList });
      }

      if (resultList.length > 0) {
        const tableViewList = await getViewList(resultList[0].viewList)
        setTableViewList(tableViewList)
        setConfig({
          ...config,
          tableId: resultList[0].id,
        })
      }

      return resultList;
    }
  }

  const getViewList = async (viewListSource: IView[]) => {
    const resultList: IViewItem[] = [{ name: t('allData'), id: 'all' }];
    for (const item of viewListSource) {
      const name = await item.getName();
      resultList.push({ name, id: item.id });
    }

    return resultList;
  }

  useEffect(() => {
    getTableList().then(res => {
      res && setTableList(res)
    });
  }, [])

  return (
    <div className="form-main">
      <div className="form-title">数据源</div>
      <div className='form-item'>
        <Select value={config.tableId}>
          {tableList.map((item) =>
            (<Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>))
          }
        </Select>
      </div>
      <div className="form-title">数据范围</div>
      <div className='form-item'>
        <Select value={config.tableViewId}>
          {tableViewList.map((item) =>
            (<Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>))
          }
        </Select>
      </div>
      <Divider style={{ borderColor: 'var(--divider)', marginTop: '12px' }} />
      <div className="form-title">日期筛选</div>
      <div className='form-item'>
        <div className='form-subTitle'>依据</div>
        <Select value={config.dateType}>
          {dateTypeList.map((item) =>
            (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
          }
        </Select>
        <div className='form-item'>
          <div className='form-subTitle'>范围</div>
          <Select value={config.dateRange}>
            {dateRangeList.map((item) =>
              (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
            }
          </Select>
        </div>
      </div>
      <div className="form-title">统计方式</div>
      <div className='form-item'>
        <Select value={config.statisticalType}>
          {statisticalTypeList.map((item) =>
            (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
          }
        </Select>
      </div>
      <div className='form-item'>
        <Select value={config.statisticalCalcType}>
          {calculationList.map((item) =>
            (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
          }
        </Select>
      </div>
      <div className='form-item'>
        <Select value={config.statisticalByNumber}>
          {statisticalByNumberList.map((item) =>
            (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
          }
        </Select>
      </div>
      <Divider style={{ borderColor: 'var(--divider)', margin: '12px 0 20px 0' }} />
      <div className="form-title">
        <span>环同比</span>
        <Button theme='borderless' icon={<IconPlus size='small' />} style={{ fontWeight: 'normal' }}>添加环同比</Button>
      </div>
      <div className='form-item'>
        <div className='form-subTitle'>描述</div>
        <Input value={config.momOrYoyDesc} />
        <div className='form-subTitle'>计算方式</div>
        <Select value={config.momOrYoyCalcMethod}>
          {momOrYoyCalcMethodList.map((item) =>
            (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
          }
        </Select>
        <div className='form-subTitle'>计算差异</div>
        <Select value={config.momOrYoyCalcType}>
          {momOrYoyCalcTypeList.map((item) =>
            (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
          }
        </Select>
      </div>
    </div>
  )
}