import './index.scss'
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Select } from '@douyinfe/semi-ui';
import { IconPlus, IconDelete } from '@douyinfe/semi-icons';
import { dashboard, DashboardState, base } from "@lark-base-open/js-sdk";
import type { IView } from '@lark-base-open/js-sdk';
import { Divider } from '@douyinfe/semi-ui';
import { IConfig, IViewItem, ITableItem, MomOrYoy } from '@/common/type';
import { calculationList, dateRangeList, dateTypeList, momOrYoyCalcMethodList, momOrYoyCalcTypeList, statisticalByNumberList, statisticalTypeList } from '@/common/constant';

interface IProps {
  config: IConfig;
  setConfig: (data: IConfig) => void
}

export default function PanelTypeAndData({ config, setConfig }: IProps) {
  const { t } = useTranslation();
  const [tableList, setTableList] = useState<ITableItem[]>([]);
  const [tableViewList, setTableViewList] = useState<IViewItem[]>([{ name: t('allData'), id: 'all' }]);



  const getTableList = async () => {
    if (dashboard.state === DashboardState.Config) {
      const baseTableList = await base.getTableList()
      const resultList: ITableItem[] = []

      for (const item of baseTableList) {
        const name = await item.getName();
        const viewList = await item.getViewList();
        resultList.push({ id: item.id, name, viewList });
      }

      return resultList;
    }
    return [];
  }

  const getTableViewList = async (viewListSource: IView[] | undefined) => {
    const resultList: IViewItem[] = [{ name: t('allData'), id: 'all' }];
    if (!viewListSource) {
      return resultList;
    }
    for (const item of viewListSource) {
      const name = await item.getName();
      resultList.push({ name, id: item.id });
    }

    return resultList;
  }

  const tableChange = async (tableId: any) => {
    setConfig({
      ...config,
      tableId,
      tableViewId: 'all',
    })
    const viewListSource = tableList.find(item => item.id === tableId)?.viewList;
    const tableViewList = await getTableViewList(viewListSource)
    setTableViewList(tableViewList)
  }

  const tableViewChange = async (tableViewId: any) => {
    setConfig({
      ...config,
      tableViewId,
    })
  }

  const dateTypeChange = (dateType: any) => {
    setConfig({
      ...config,
      dateType,
    })
  }

  const dateRangeChange = (dateRange: any) => {
    setConfig({
      ...config,
      dateRange,
    })
  }

  const statisticalTypeChange = (statisticalType: any) => {
    setConfig({
      ...config,
      statisticalType,
    })
  }

  const statisticalCalcTypeChange = (statisticalCalcType: any) => {
    setConfig({
      ...config,
      statisticalCalcType,
    })
  }

  const statisticalByNumberChange = (statisticalByNumber: any) => {
    setConfig({
      ...config,
      statisticalByNumber,
    })
  }

  const momOrYoyDescChange = (momOrYoyItem: MomOrYoy, momOrYoyDesc: any, index: number) => {
    momOrYoyItem.momOrYoyDesc = momOrYoyDesc;
    config.momOrYoy[index] = momOrYoyItem
    setConfig({ ...config })
  }

  const momOrYoyCalcMethodChange = (momOrYoyItem: MomOrYoy, momOrYoyCalcMethod: any, index: number) => {
    momOrYoyItem.momOrYoyCalcMethod = momOrYoyCalcMethod;
    config.momOrYoy[index] = momOrYoyItem
    setConfig({ ...config })
  }

  const momOrYoyCalcTypeChange = (momOrYoyItem: MomOrYoy, momOrYoyCalcType: any, index: number) => {
    momOrYoyItem.momOrYoyCalcType = momOrYoyCalcType;
    config.momOrYoy[index] = momOrYoyItem
    setConfig({ ...config })
  }

  const scrollToBottomRef = useRef<HTMLDivElement>(null)
  const addMomOrYoyItem = () => {
    const item: MomOrYoy = {
      momOrYoyDesc: t('momGrowthRate'),
      momOrYoyCalcMethod: 'mom',
      momOrYoyCalcType: 'differenceRate',
    }
    config.momOrYoy.push(item);
    setConfig({ ...config });
    setTimeout(() => {
      scrollToBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }

  const deleteMomOrYoyItem = (index: number) => {
    config.momOrYoy.splice(index, 1);
    setConfig({ ...config })
  }


  const initData = async () => {
    const tableList = await getTableList();
    const viewListSource = tableList.find(item => item.id === config.tableId)?.viewList;
    const tableViewList = await getTableViewList(viewListSource)
    setTableList(tableList)
    setTableViewList(tableViewList)
  }

  useEffect(() => {
    initData();
  })

  return (
    <div className="form-main">
      <div className="form-title">{t('dataSource')}</div>
      <div className='form-item'>
        <Select value={config.tableId} onChange={tableChange}>
          {tableList.map((item) =>
            (<Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>))
          }
        </Select>
      </div>
      <div className="form-title">{t('dataRange')}</div>
      <div className='form-item'>
        <Select value={config.tableViewId} onChange={tableViewChange}>
          {tableViewList.map((item) =>
            (<Select.Option value={item.id} key={item.id}>{item.name}</Select.Option>))
          }
        </Select>
      </div>
      <Divider style={{ borderColor: 'var(--divider)', marginTop: '12px' }} />
      <div className="form-title">{t('dateFiltering')}</div>
      <div className='form-item'>
        <div className='form-subTitle'>{t('basis')}</div>
        <Select value={config.dateType} onChange={dateTypeChange}>
          {dateTypeList.map((item) =>
            (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
          }
        </Select>
        <div className='form-item'>
          <div className='form-subTitle'>{t('range')}</div>
          <Select value={config.dateRange} onChange={dateRangeChange}>
            {dateRangeList.map((item) =>
              (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
            }
          </Select>
        </div>
      </div>
      <div className="form-title">{t('statisticalMethods')}</div>
      <div className='form-item'>
        <Select value={config.statisticalType} onChange={statisticalTypeChange}>
          {statisticalTypeList.map((item) =>
            (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
          }
        </Select>
      </div>
      <div className='form-item'>
        <Select value={config.statisticalCalcType} onChange={statisticalCalcTypeChange}>
          {calculationList.map((item) =>
            (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
          }
        </Select>
      </div>
      <div className='form-item'>
        <Select value={config.statisticalByNumber} onChange={statisticalByNumberChange}>
          {statisticalByNumberList.map((item) =>
            (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
          }
        </Select>
      </div>
      <Divider style={{ borderColor: 'var(--divider)', margin: '12px 0 20px 0' }} />
      <div className="form-title">
        <span>{t('mom_yoy')}</span>
        <Button
          theme='borderless'
          icon={<IconPlus size='small' />}
          style={{ fontWeight: 'normal' }}
          onClick={addMomOrYoyItem}>
          添加环同比
        </Button>
      </div>
      {
        config.momOrYoy && config.momOrYoy.map((item, index) => (
          <div className='form-item bg-grey' key={index}>
            <div className='icon-delete' onClick={() => { deleteMomOrYoyItem(index) }}>
              <IconDelete size='small' />
            </div>
            <div className='form-subTitle'>{t('description')}</div>
            <Input value={item.momOrYoyDesc} onChange={(momOrYoyDesc) => { momOrYoyDescChange(item, momOrYoyDesc, index) }} />
            <div className='form-subTitle'>{t('calculation')}</div>
            <Select value={item.momOrYoyCalcMethod} onChange={(momOrYoyCalcMethod) => momOrYoyCalcMethodChange(item, momOrYoyCalcMethod, index)}>
              {momOrYoyCalcMethodList.map((item) =>
                (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
              }
            </Select>
            <div className='form-subTitle'>{t('calculationType')}</div>
            <Select value={item.momOrYoyCalcType} onChange={(momOrYoyCalcType) => { momOrYoyCalcTypeChange(item, momOrYoyCalcType, index) }}>
              {momOrYoyCalcTypeList.map((item) =>
                (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
              }
            </Select>
            <div ref={scrollToBottomRef}></div>
          </div>
        ))
      }
    </div>
  )
}