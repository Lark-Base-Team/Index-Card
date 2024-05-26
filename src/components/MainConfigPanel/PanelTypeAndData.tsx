import './index.scss'
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Select } from '@douyinfe/semi-ui';
import { IconPlus, IconDelete } from '@douyinfe/semi-icons';
import { SourceType } from "@lark-base-open/js-sdk";
import type { IView, IDataRange, ViewDataRange, ICategory } from '@lark-base-open/js-sdk';
import { Divider } from '@douyinfe/semi-ui';
import { IConfig, ITableItem, MomOrYoy } from '@/common/type';
import { calculationList, dateRangeList, momOrYoyCalcTypeList, statisticalTypeList } from '@/common/constant';
import { getMomYoyDesc, getNewMomOrYoyCalcMethodList } from '@/utils';

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

interface IProps {
  config: IConfig;
  setConfig: (data: IConfig) => void;
  tableList: ITableItem[];
  tableRangeList: IDataRange[];
  getTableRange: (tableId: string) => Promise<IDataRange[]>;
  setTableRangeList: (data: IDataRange[]) => void;
  dateTypeList: ICategory[];
  setDateTypeList: (data: ICategory[]) => void;
  getCategories: (tableId: string) => Promise<{ dateTypeList: ICategory[]; numberOrCurrencyList: ICategory[]; }>;
  numberOrCurrencyList: ICategory[];
  setNumberOrCurrencyList: (data: ICategory[]) => void;
  resetData: (config: IConfig) => void;
}

export default function PanelTypeAndData({ config, setConfig, tableList, tableRangeList, getTableRange, setTableRangeList, dateTypeList, setDateTypeList, getCategories, numberOrCurrencyList, setNumberOrCurrencyList, resetData }: IProps) {
  const { t } = useTranslation();

  const defaultViewId = config.tableRange.type === SourceType.ALL ? 'ALL' : config.tableRange.viewId;
  const [tableRangeViewId, setTableRangeViewId] = useState<string>(defaultViewId);
  const [newMomOrYoyCalcMethodList, setNewMomOrYoyCalcMethodList] = useState(getNewMomOrYoyCalcMethodList(config.dateRange))

  const tableChange = async (tableId: any) => {
    config.tableId = tableId;
    config.tableRange = { type: SourceType.ALL };
    setTableRangeViewId('ALL');
    resetData(config);
  }

  const tableRangeChange = async (viewId: any) => {
    setTableRangeViewId(viewId);
    let tableRange: IDataRange;
    if (tableRangeViewId === 'ALL') {
      tableRange = { type: SourceType.ALL };
    } else {
      tableRange = tableRangeList.find((item) => (item as ViewDataRange).viewId === tableRangeViewId) as IDataRange;
    }
    setConfig({ ...config, tableRange, })
  }

  const dateTypeChange = (dateTypeFieldId: any) => {
    setConfig({ ...config, dateTypeFieldId })
  }

  const dateRangeChange = (dateRange: any) => {
    setNewMomOrYoyCalcMethodList(getNewMomOrYoyCalcMethodList(dateRange));
    const momOrYoy = config.momOrYoy.map((item) => {
      item.momOrYoyCalcMethod = 'mom'
      return item;
    })
    setConfig({ ...config, dateRange, momOrYoy });
  }

  const statisticalTypeChange = (statisticalType: any) => {
    setConfig({ ...config, statisticalType })
  }

  const statisticalCalcTypeChange = (statisticalCalcType: any) => {
    setConfig({ ...config, statisticalCalcType })
  }

  const numberOrCurrencyFieldIdChange = (numberOrCurrencyFieldId: any) => {
    setConfig({ ...config, numberOrCurrencyFieldId, })
  }

  const momOrYoyDescChange = (momOrYoyItem: MomOrYoy, momOrYoyDesc: any, index: number) => {
    momOrYoyItem.momOrYoyDesc = momOrYoyDesc;
    momOrYoyItem.manualSetDesc = true;
    config.momOrYoy[index] = momOrYoyItem;
    setConfig({ ...config })
  }

  const momOrYoyCalcMethodChange = (momOrYoyItem: MomOrYoy, momOrYoyCalcMethod: any, index: number) => {
    momOrYoyItem.momOrYoyCalcMethod = momOrYoyCalcMethod;
    if (!momOrYoyItem.manualSetDesc) {
      momOrYoyItem.momOrYoyDesc = getMomYoyDesc(momOrYoyCalcMethod, momOrYoyItem.momOrYoyCalcType)
    }
    config.momOrYoy[index] = momOrYoyItem
    setConfig({ ...config })
  }

  const momOrYoyCalcTypeChange = (momOrYoyItem: MomOrYoy, momOrYoyCalcType: any, index: number) => {
    momOrYoyItem.momOrYoyCalcType = momOrYoyCalcType;
    if (!momOrYoyItem.manualSetDesc) {
      momOrYoyItem.momOrYoyDesc = getMomYoyDesc(momOrYoyItem.momOrYoyCalcMethod, momOrYoyCalcType)
    }
    config.momOrYoy[index] = momOrYoyItem
    setConfig({ ...config })
  }

  const scrollToBottomRef = useRef<HTMLDivElement>(null)
  const addMomOrYoyItem = () => {
    const item: MomOrYoy = {
      momOrYoyDesc: t('momGrowthRate'),
      manualSetDesc: false,
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

  return (
    <div className="form-main">
      <div className="form-title">{t('dataSource')}</div>
      <div className='form-item'>
        <Select value={config.tableId} onChange={tableChange}>
          {tableList.map((item) =>
            (<Select.Option value={item.id} key={item.id}>{item.label}</Select.Option>))
          }
        </Select>
      </div>
      <div className="form-title">{t('dataRange')}</div>
      <div className='form-item'>
        <Select value={tableRangeViewId} onChange={tableRangeChange}>
          {
            tableRangeList.map(item => {
              let newItem = { ...item } as ViewDataRange;
              if (item.type === SourceType.ALL) {
                newItem.viewName = t('allData');
                newItem.viewId = 'ALL';
              }
              return newItem
            }).map(item => (<Select.Option value={item.viewId} key={item.viewId}>{item.viewName}</Select.Option>))
          }
        </Select>
      </div>
      <Divider style={{ borderColor: 'var(--divider)', marginTop: '12px' }} />
      <div className="form-title">{t('dateFiltering')}</div>
      <div className='form-item'>
        <div className='form-subTitle'>{t('basis')}</div>
        <Select value={config.dateTypeFieldId} onChange={dateTypeChange}>
          {dateTypeList.map((item) =>
            (<Select.Option value={item.fieldId} key={item.fieldId}>{item.fieldName}</Select.Option>))
          }
        </Select>
        <div className='form-item'>
          <div className='form-subTitle'>{t('range')}</div>
          <Select value={config.dateRange} onChange={dateRangeChange}>
            {dateRangeList.map((item) =>
              (<Select.Option value={item.value} key={item.value}>{item.label}</Select.Option>))
            }
          </Select>
        </div>
      </div>
      <div className="form-title">{t('statisticalMethods')}</div>
      <div className='form-item'>
        <Select value={config.statisticalType} onChange={statisticalTypeChange}>
          {statisticalTypeList.map((item) =>
            (<Select.Option value={item.value} key={item.value}>{item.label}</Select.Option>))
          }
        </Select>
      </div>
      {config.statisticalType === 'number' && (
        <>
          <div className='form-item'>
            <Select value={config.numberOrCurrencyFieldId} onChange={numberOrCurrencyFieldIdChange}>
              {numberOrCurrencyList.map((item) =>
                (<Select.Option value={item.fieldId} key={item.fieldId}>{item.fieldName}</Select.Option>))
              }
            </Select>
          </div>
          <div className='form-item'>
            <Select value={config.statisticalCalcType} onChange={statisticalCalcTypeChange}>
              {calculationList.map((item) =>
                (<Select.Option value={item.value} key={item.value}>{item.label}</Select.Option>))
              }
            </Select>
          </div>
        </>
      )}
      <Divider style={{ borderColor: 'var(--divider)', margin: '12px 0 20px 0' }} />
      <div className="form-title">
        <span>{t('mom_yoy')}</span>
        <Button
          disabled={config.momOrYoy.length >= 6}
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
            {config.momOrYoy.length > 1 && (
              <div className='icon-delete' onClick={() => { deleteMomOrYoyItem(index) }}>
                <IconDelete size='small' />
              </div>
            )}
            <div className='form-subTitle'>{t('description')}</div>
            <Input value={item.momOrYoyDesc} onChange={(momOrYoyDesc) => { momOrYoyDescChange(item, momOrYoyDesc, index) }} />
            <div className='form-subTitle'>{t('calculation')}</div>
            <Select
              optionList={newMomOrYoyCalcMethodList as Mutable<typeof newMomOrYoyCalcMethodList>}
              value={item.momOrYoyCalcMethod}
              onChange={(momOrYoyCalcMethod) => momOrYoyCalcMethodChange(item, momOrYoyCalcMethod, index)}>
            </Select>
            <div className='form-subTitle'>{t('calculationType')}</div>
            <Select value={item.momOrYoyCalcType} onChange={(momOrYoyCalcType) => { momOrYoyCalcTypeChange(item, momOrYoyCalcType, index) }}>
              {momOrYoyCalcTypeList.map((item) =>
                (<Select.Option value={item.value} key={item.value}>{item.label}</Select.Option>))
              }
            </Select>
            <div ref={scrollToBottomRef}></div>
          </div>
        ))
      }
    </div>
  )
}