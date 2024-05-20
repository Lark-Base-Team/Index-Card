import { IconMinus, IconTriangleUp, IconTriangleDown, IconFilledArrowUp, IconFilledArrowDown, IconArrowUpRight, IconArrowDownRight } from '@douyinfe/semi-icons';
import { FieldType } from "@lark-base-open/js-sdk";

export const dateTypeList = [
  {
    name: '日期',
    value: FieldType.DateTime,
  },
  {
    name: '创建时间',
    value: FieldType.CreatedTime,
  },
  {
    name: '更新时间',
    value: FieldType.ModifiedTime,
  },
] as const;

export const dateRangeList = [
  {
    name: '今天',
    value: 'Today',
  },
  {
    name: '昨天',
    value: 'Yesterday',
  },
  {
    name: '本周',
    value: 'CurrentWeek',
  },
  {
    name: '上周',
    value: 'LastWeek',
  },
  {
    name: '本月',
    value: 'CurrentMonth',
  },
  {
    name: '上月',
    value: 'LastMonth',
  },
  {
    name: '本季度',
    value: 'CurrentQuarter',
  },
  {
    name: '上季度',
    value: 'LastQuarter',
  },
  {
    name: '今年',
    value: 'CurrentYear',
  },
  {
    name: '去年',
    value: 'LastYear',
  },
  {
    name: '最近7天',
    value: 'Last7Days',
  },
  {
    name: '最近14天',
    value: 'Last14Days',
  },
  {
    name: '最近30天',
    value: 'Last30Days',
  },
  {
    name: '最近365天',
    value: 'Last365Days',
  },
  {
    name: '最近3个月',
    value: 'Last3Months',
  },
  {
    name: '最近6个月',
    value: 'Last6Months',
  },
] as const;

export const statisticalTypeList = [
  {
    name: '统计记录总数',
    value: 'total',
  },
  {
    name: '统计记录数值',
    value: 'number',
  },
] as const;

export const statisticalByNumberList = [
  {
    name: '数字',
    value: 'number',
  },
  {
    name: '货币',
    value: 'currency',
  },
] as const;

export const calculationList = [
  {
    name: '求和',
    value: 'SUM',
  },
  {
    name: '平均值',
    value: 'AVERAGE',
  },
  {
    name: '最大值',
    value: 'MAX',
  },
  {
    name: '最小值',
    value: 'MIN',
  }
] as const;

export const momOrYoyCalcMethodList = [
  {
    name: '环比',
    value: 'mom',
  },
  {
    name: '周同比',
    value: 'yoyByWeek',
  },
  {
    name: '月同比',
    value: 'yoyByMonth',
  },
  {
    name: '年同比',
    value: 'yoyByYear',
  },
] as const;

export const momOrYoyCalcTypeList = [
  {
    name: '差异率',
    value: 'differenceRate',
  },
  {
    name: '差异率',
    value: 'differenceValue',
  },
  {
    name: '原始值',
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
    name: '数字（千分位）',
    value: 'numberMillennials',
  },
  {
    name: '数字',
    value: 'number',
  },
  {
    name: '百分比',
    value: 'percentage',
  },
  {
    name: '千分位比',
    value: 'millageRate',
  },
] as const;