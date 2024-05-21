import { IconMinus, IconTriangleUp, IconTriangleDown, IconFilledArrowUp, IconFilledArrowDown, IconArrowUpRight, IconArrowDownRight } from '@douyinfe/semi-icons';
import { FieldType } from "@lark-base-open/js-sdk";
import { t } from 'i18next';

export const dateTypeList = [
  {
    name: t('date'),
    value: FieldType.DateTime,
  },
  {
    name: t('createDate'),
    value: FieldType.CreatedTime,
  },
  {
    name: t('ModifyDate'),
    value: FieldType.ModifiedTime,
  },
] as const;

export const dateRangeList = [
  {
    name: t('today'),
    value: 'Today',
  },
  {
    name: t('yesterday'),
    value: 'Yesterday',
  },
  {
    name: t('currentWeek'),
    value: 'CurrentWeek',
  },
  {
    name: t('lastWeek'),
    value: 'LastWeek',
  },
  {
    name: t('currentMonth'),
    value: 'CurrentMonth',
  },
  {
    name: t('lastMonth'),
    value: 'LastMonth',
  },
  {
    name: t('currentQuarter'),
    value: 'CurrentQuarter',
  },
  {
    name: t('lastQuarter'),
    value: 'LastQuarter',
  },
  {
    name: t('currentYear'),
    value: 'CurrentYear',
  },
  {
    name: t('lastYear'),
    value: 'LastYear',
  },
  {
    name: t('last7Days'),
    value: 'Last7Days',
  },
  {
    name: t('last14Days'),
    value: 'Last14Days',
  },
  {
    name: t('last30Days'),
    value: 'Last30Days',
  },
  {
    name: t('last365Days'),
    value: 'Last365Days',
  },
  {
    name: t('last3Months'),
    value: 'Last3Months',
  },
  {
    name: t('last6Months'),
    value: 'Last6Months',
  },
] as const;

export const statisticalTypeList = [
  {
    name: t('recordsTotal'),
    value: 'total',
  },
  {
    name: t('fieldValue'),
    value: 'number',
  },
] as const;

export const statisticalByNumberList = [
  {
    name: t('number'),
    value: 'number',
  },
  {
    name: t('currency'),
    value: 'currency',
  },
] as const;

export const calculationList = [
  {
    name: t('sum'),
    value: 'SUM',
  },
  {
    name: t('average'),
    value: 'AVERAGE',
  },
  {
    name: t('max'),
    value: 'MAX',
  },
  {
    name: t('min'),
    value: 'MIN',
  }
] as const;

export const momOrYoyCalcMethodList = [
  {
    name: t('mom'),
    value: 'mom',
  },
  {
    name: t('weekYoy'),
    value: 'yoyByWeek',
  },
  {
    name: t('monthYoy'),
    value: 'yoyByMonth',
  },
  {
    name: t('yearYoy'),
    value: 'yoyByYear',
  },
] as const;

export const momOrYoyCalcTypeList = [
  {
    name: t('differenceRate'),
    value: 'differenceRate',
  },
  {
    name: t('differenceValue'),
    value: 'differenceValue',
  },
  {
    name: t('originalValue'),
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
    name: t('numberMillennials'),
    value: 'numberMillennials',
  },
  {
    name: t('number'),
    value: 'number',
  },
  {
    name: t('percentage'),
    value: 'percentage',
  },
  {
    name: t('millageRate'),
    value: 'millageRate',
  },
] as const;