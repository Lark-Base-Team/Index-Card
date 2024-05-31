import './index.scss'
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Select } from '@douyinfe/semi-ui';
import Icon, { IconPlus, IconDeleteStroked } from '@douyinfe/semi-icons';
import { SourceType } from "@lark-base-open/js-sdk";
import type { IDataRange, ViewDataRange, ICategory } from '@lark-base-open/js-sdk';
import { Divider } from '@douyinfe/semi-ui';
import { DateTypeFieldType, IConfig, ITableItem, MomOrYoy, Mutable } from '@/common/type';
import { calculationList, dateRangeList, momOrYoyCalcTypeList, statisticalTypeList } from '@/common/constant';
import { getMomYoyDesc, getNewMomOrYoyCalcMethodList } from '@/utils';
import IconTable from '@/assets/icon_table.svg?react';
import IconNumber from '@/assets/icon_number.svg?react';
import IconCalendar from '@/assets/icon_calendar.svg?react';
import IconCalendarChat from '@/assets/icon_calendar_chat.svg?react';

interface IProps {
  config: IConfig;
  setConfig: (data: IConfig) => void;
  tableList: ITableItem[];
  tableRangeList: IDataRange[];
  dateTypeList: ICategory[];
  numberOrCurrencyList: ICategory[];
  setData: (config: IConfig) => void;
}

export default function PanelTypeAndData({ config, setConfig, tableList, tableRangeList, dateTypeList, numberOrCurrencyList, setData }: IProps) {
  const { t } = useTranslation();

  const defaultViewId = config.tableRange.type === SourceType.ALL ? 'ALL' : config.tableRange.viewId;
  const [tableRangeViewId, setTableRangeViewId] = useState<string>(defaultViewId);
  const [newMomOrYoyCalcMethodList, setNewMomOrYoyCalcMethodList] = useState(getNewMomOrYoyCalcMethodList(config.dateRange));

  const tableChange = async (tableId: any) => {
    config.tableId = tableId;
    config.tableRange = { type: SourceType.ALL };
    setTableRangeViewId('ALL');
    setData(config);
  }

  const tableRangeChange = async (viewId: any) => {
    setTableRangeViewId(viewId);
    let tableRange: IDataRange;
    if (tableRangeViewId === 'ALL') {
      tableRange = { type: SourceType.ALL };
    } else {
      tableRange = tableRangeList.find((item) => (item as ViewDataRange).viewId === tableRangeViewId) as IDataRange;
    }
    setConfig({ ...config, tableRange, });
  }

  const handleChange = (key: string, value: any) => {
    if (key === 'dateTypeFieldId') {
      const dateTypeFieldType = dateTypeList.find((item) => item.fieldId === value)?.fieldType as unknown as DateTypeFieldType;
      setConfig({ ...config, [key]: value, dateTypeFieldType });
    }
    setConfig({ ...config, [key]: value });
  }

  const dateRangeChange = (dateRange: any) => {
    setNewMomOrYoyCalcMethodList(getNewMomOrYoyCalcMethodList(dateRange));
    const momOrYoy = config.momOrYoy.map((item) => {
      item.momOrYoyCalcMethod = 'mom';
      return item;
    })
    setConfig({ ...config, dateRange, momOrYoy });
  }

  const momOrYoyItemChange = (item: MomOrYoy, key: string, value: any, index: number) => {
    item = { ...item, [key]: value };
    if (key === 'momOrYoyDesc') {
      item.manualSetDesc = true;
    }
    const { manualSetDesc, momOrYoyCalcMethod, momOrYoyCalcType } = item;
    if (!manualSetDesc) {
      item.momOrYoyDesc = getMomYoyDesc(momOrYoyCalcMethod, momOrYoyCalcType);
    }
    config.momOrYoy[index] = item;
    setConfig({ ...config });
  }

  const scrollToBottomRef = useRef<HTMLDivElement>(null);
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
    setConfig({ ...config });
  }

  return (
    <div className="form-main">
      <div className="form-title">{t('dataSource')}</div>
      <div className='form-item'>
        <Select
          prefix={<Icon svg={<IconTable />} />}
          optionList={tableList as Mutable<typeof tableList>}
          value={config.tableId} onChange={tableChange}>
        </Select>
      </div>
      <div className="form-title">{t('dataRange')}</div>
      <div className='form-item'>
        <Select prefix={<Icon svg={<IconTable />} />} value={tableRangeViewId} onChange={tableRangeChange}>
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
        <Select
          placeholder={t('dataPlaceholder')}
          prefix={<Icon svg={<IconCalendar />} />}
          value={config.dateTypeFieldId}
          onChange={(value) => { handleChange('dateTypeFieldId', value) }}>
          {dateTypeList.map((item) =>
            (<Select.Option value={item.fieldId} key={item.fieldId}>{item.fieldName}</Select.Option>))
          }
        </Select>
        <div className='form-item'>
          <div className='form-subTitle'>{t('range')}</div>
          <Select
            optionList={dateRangeList as Mutable<typeof dateRangeList>}
            prefix={<Icon svg={<IconCalendarChat />} />}
            value={config.dateRange} onChange={dateRangeChange}>
          </Select>
        </div>
      </div>
      <div className="form-title">{t('statisticalMethods')}</div>
      <div className='form-item'>
        <Select
          optionList={statisticalTypeList as Mutable<typeof statisticalTypeList>}
          value={config.statisticalType}
          onChange={(value) => { handleChange('statisticalType', value) }}>
        </Select>
      </div>
      {config.statisticalType === 'number' && (
        <>
          <div className='form-item noBorder'>
            <Select
              optionList={calculationList as Mutable<typeof calculationList>}
              value={config.statisticalCalcType}
              onChange={(value) => handleChange('statisticalCalcType', value)}>
            </Select>
          </div>
          <div className='form-item'>
            <Select
              prefix={<Icon svg={<IconNumber />} />}
              value={config.numberOrCurrencyFieldId}
              onChange={(value) => { handleChange('numberOrCurrencyFieldId', value) }}>
              {numberOrCurrencyList.map((item) =>
                (<Select.Option value={item.fieldId} key={item.fieldId}>{item.fieldName}</Select.Option>))
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
          {t('addMom_Yoy')}
        </Button>
      </div>
      {
        config.momOrYoy && config.momOrYoy.map((item, index) => (
          <div className='form-item bg-grey' key={index}>
            {config.momOrYoy.length > 1 && (
              <div className='icon-delete' onClick={() => { deleteMomOrYoyItem(index) }}>
                <IconDeleteStroked size='small' />
              </div>
            )}
            <div className='form-subTitle'>{t('description')}</div>
            <Input
              value={item.momOrYoyDesc}
              onChange={(value) => { momOrYoyItemChange(item, 'momOrYoyDesc', value, index) }} />
            <div className='form-subTitle'>{t('calculation')}</div>
            <Select
              position='top'
              optionList={newMomOrYoyCalcMethodList as Mutable<typeof newMomOrYoyCalcMethodList>}
              value={item.momOrYoyCalcMethod}
              onChange={(value) => momOrYoyItemChange(item, 'momOrYoyCalcMethod', value, index)}>
            </Select>
            <div className='form-subTitle'>{t('calculationType')}</div>
            <Select
              position='top'
              optionList={momOrYoyCalcTypeList as Mutable<typeof momOrYoyCalcTypeList>}
              value={item.momOrYoyCalcType}
              onChange={(value) => momOrYoyItemChange(item, 'momOrYoyCalcType', value, index)}>
            </Select>
            <div ref={scrollToBottomRef}></div>
          </div>
        ))
      }
    </div>
  )
}