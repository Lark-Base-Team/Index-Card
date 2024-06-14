import { IconMinus, IconTriangleUp, IconTriangleDown, IconFilledArrowUp, IconFilledArrowDown, IconArrowUpRight, IconArrowDownRight } from '@douyinfe/semi-icons';
import { FilterDuration, SourceType, Rollup, FieldType } from "@lark-base-open/js-sdk";
import { t } from 'i18next';
import type { ICustomConfig } from '@/common/type'
import { MyFilterDurationEnum } from '@/common/type'

export const dateRangeList = [
  {
    label: t('today'),
    value: FilterDuration.Today,
  },
  {
    label: t('yesterday'),
    value: FilterDuration.Yesterday,
  },
  {
    label: t('currentWeek'),
    value: FilterDuration.CurrentWeek,
  },
  {
    label: t('lastWeek'),
    value: FilterDuration.LastWeek,
  },
  {
    label: t('currentMonth'),
    value: FilterDuration.CurrentMonth,
  },
  {
    label: t('lastMonth'),
    value: FilterDuration.LastMonth,
  },
  {
    label: t('currentQuarter'),
    value: MyFilterDurationEnum.CurrentQuarter,
  },
  {
    label: t('lastQuarter'),
    value: MyFilterDurationEnum.LastQuarter,
  },
  {
    label: t('currentYear'),
    value: MyFilterDurationEnum.CurrentYear,
  },
  {
    label: t('lastYear'),
    value: MyFilterDurationEnum.LastYear,
  },
  {
    label: t('last7Days'),
    value: FilterDuration.TheLastWeek,
  },
  {
    label: t('last14Days'),
    value: MyFilterDurationEnum.Last14Days,
  },
  {
    label: t('last30Days'),
    value: FilterDuration.TheLastMonth,
  },
  {
    label: t('last365Days'),
    value: MyFilterDurationEnum.Last365Days,
  },
  {
    label: t('last3Months'),
    value: MyFilterDurationEnum.Last3Months,
  },
  {
    label: t('last6Months'),
    value: MyFilterDurationEnum.Last6Months,
  },
] as const;

export const statisticalTypeList = [
  {
    label: t('recordsTotal'),
    value: 'total',
  },
  {
    label: t('fieldValue'),
    value: 'number',
  },
] as const;

export const calculationList = [
  {
    label: t('sum'),
    value: 'SUM',
  },
  {
    label: t('average'),
    value: 'AVERAGE',
  },
  {
    label: t('max'),
    value: 'MAX',
  },
  {
    label: t('min'),
    value: 'MIN',
  }
] as const;

export const momOrYoyCalcMethodList = [
  {
    label: t('mom'),
    value: 'mom',
    disabled: false,
  },
  {
    label: t('weekYoy'),
    value: 'yoyByWeek',
    disabled: false,
  },
  {
    label: t('monthYoy'),
    value: 'yoyByMonth',
    disabled: false,
  },
  {
    label: t('yearYoy'),
    value: 'yoyByYear',
    disabled: false,
  },
] as const;

export const momOrYoyCalcTypeList = [
  {
    label: t('differenceRate'),
    value: 'differenceRate',
  },
  {
    label: t('differenceValue'),
    value: 'differenceValue',
  },
  {
    label: t('originalValue'),
    value: 'originalValue',
  }
] as const;

export const iconStyleList = [
  {
    id: '1',
    upIcon: 'IconTriangleUp',
    upIconColor: 'green',
    downIcon: 'IconTriangleDown',
    downIconColor: 'red',
    constIcon: 'IconMinus',
    constIconColor: 'black',
  },
  {
    id: '2',
    upIcon: 'IconFilledArrowUp',
    upIconColor: 'green',
    downIcon: 'IconFilledArrowDown',
    downIconColor: 'red',
    constIcon: 'IconMinus',
    constIconColor: 'black',
  },
  {
    id: '3',
    upIcon: 'IconArrowUpRight',
    upIconColor: 'green',
    downIcon: 'IconArrowDownRight',
    downIconColor: 'red',
    constIcon: 'IconMinus',
    constIconColor: 'black',
  },
  {
    id: '4',
    upIcon: 'IconTriangleUp',
    upIconColor: 'red',
    downIcon: 'IconTriangleDown',
    downIconColor: 'green',
    constIcon: 'IconMinus',
    constIconColor: 'black',
  },
  {
    id: '5',
    upIcon: 'IconFilledArrowUp',
    upIconColor: 'red',
    downIcon: 'IconFilledArrowDown',
    downIconColor: 'green',
    constIcon: 'IconMinus',
    constIconColor: 'black',
  },
  {
    id: '6',
    upIcon: 'IconArrowUpRight',
    upIconColor: 'red',
    downIcon: 'IconArrowDownRight',
    downIconColor: 'green',
    constIcon: 'IconMinus',
    constIconColor: 'black',
  },
] as const;

export const icons = {
  IconMinus,
  IconTriangleUp,
  IconTriangleDown,
  IconFilledArrowUp,
  IconFilledArrowDown,
  IconArrowUpRight,
  IconArrowDownRight
} as const;

export const dataFormatList = [
  {
    label: t('numberMillennials'),
    value: 'numberMillennials',
  },
  {
    label: t('number'),
    value: 'number',
  },
  {
    label: t('percentage'),
    value: 'percentage',
  },
  {
    label: t('millageRate'),
    value: 'millageRate',
  },
] as const;

export const defaultConfig: ICustomConfig = {
  tableId: '',
  dateTypeFieldId: '',
  dateTypeFieldType: FieldType.DateTime,
  dateRange: FilterDuration.Today,
  statisticalType: 'total',
  numberOrCurrencyFieldId: '',
  statisticalCalcType: Rollup.SUM,
  momOrYoy: [
    {
      momOrYoyDesc: t('momGrowthRate'),
      manualSetDesc: false,
      momOrYoyCalcMethod: 'mom',
      momOrYoyCalcType: 'differenceRate',
    }
  ],
  color: 'primary',
  iconStyleId: '1',
  decimal: 0,
  numberFormat: 'number',
  prefix: '',
  suffix: '',
}