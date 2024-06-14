import './index.scss'
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input, Select } from '@douyinfe/semi-ui';
import Icon, { IconPlus, IconDeleteStroked } from '@douyinfe/semi-icons';
import { SourceType } from "@lark-base-open/js-sdk";
import type { IDataRange, ViewDataRange, ICategory } from '@lark-base-open/js-sdk';
import { Divider } from '@douyinfe/semi-ui';
import { DateType, ICustomConfig, ITableItem, MomOrYoy, Mutable } from '@/common/type';
import { calculationList, dateRangeList, momOrYoyCalcTypeList, statisticalTypeList } from '@/common/constant';
import { getMomYoyDesc, getNewMomOrYoyCalcMethodList } from '@/utils';
import IconTable from '@/assets/icon_table.svg?react';
import IconNumber from '@/assets/icon_number.svg?react';
import IconCalendar from '@/assets/icon_calendar.svg?react';
import IconCalendarChat from '@/assets/icon_calendar_chat.svg?react';

interface IProps {
  config: ICustomConfig;
  setConfig: (data: ICustomConfig) => void;
  tableList: ITableItem[];
  dateTypeList: ICategory[];
  numberOrCurrencyList: ICategory[];
  setData: (config: ICustomConfig) => void;
}

export default function PanelTypeAndData({ config, setConfig, tableList, dateTypeList, numberOrCurrencyList, setData }: IProps) {
  const { t } = useTranslation();

  const [newMomOrYoyCalcMethodList, setNewMomOrYoyCalcMethodList] = useState(getNewMomOrYoyCalcMethodList(config.dateRange));

  const tableChange = async (tableId: any) => {
    config.tableId = tableId;
    setData(config);
  }

  const handlerChange = (key: string, value: any) => {
    if (key === 'dateTypeFieldId') {
      const dateTypeFieldType = dateTypeList.find((item) => item.fieldId === value)?.fieldType as DateType;
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
      <Divider style={{ borderColor: 'var(--divider)', marginTop: '12px' }} />
      <div className="form-title">{t('dateFiltering')}</div>
      <div className='form-item'>
        <div className='form-subTitle'>{t('basis')}</div>
        <Select
          placeholder={t('dataPlaceholder')}
          prefix={<Icon svg={<IconCalendar />} />}
          value={config.dateTypeFieldId}
          onChange={(value) => { handlerChange('dateTypeFieldId', value) }}>
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
          onChange={(value) => { handlerChange('statisticalType', value) }}>
        </Select>
      </div>
      {config.statisticalType === 'number' && (
        <>
          <div className='form-item noBorder'>
            <Select
              optionList={calculationList as Mutable<typeof calculationList>}
              value={config.statisticalCalcType}
              onChange={(value) => handlerChange('statisticalCalcType', value)}>
            </Select>
          </div>
          <div className='form-item'>
            <Select
              prefix={<Icon svg={<IconNumber />} />}
              value={config.numberOrCurrencyFieldId}
              onChange={(value) => { handlerChange('numberOrCurrencyFieldId', value) }}>
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
          disabled={config.momOrYoy.length >= 4}
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