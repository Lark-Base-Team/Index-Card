import { FieldType } from "@lark-base-open/js-sdk";
import type { IDataRange, Rollup, FilterDuration } from '@lark-base-open/js-sdk';
import type { ColorName } from '@/components/ColorPicker';
import { statisticalTypeList, momOrYoyCalcMethodList, momOrYoyCalcTypeList, iconStyleList, dataFormatList, icons } from '@/common/constant';

export interface IMomYoyList {
  desc: string;
  value: string;
  color: 'red' | 'black' | 'green';
  icon: keyof typeof icons;
}

export interface IContentData {
  color: ColorName; // 颜色
  number: string; // 指标数据
  prefix: string; // 前缀 
  suffix: string; // 前缀
  momYoyList: IMomYoyList[], // 环同比数据
}

export type DateType = FieldType.DateTime | FieldType.CreatedTime | FieldType.ModifiedTime;
export type StatisticalType = typeof statisticalTypeList[number]['value'];
export type MomOrYoyCalcMethod = typeof momOrYoyCalcMethodList[number]['value'];
export type MomOrYoyCalcType = typeof momOrYoyCalcTypeList[number]['value'];
export type IconStyle = typeof iconStyleList[number]['id'];
export type NumberFormat = typeof dataFormatList[number]['value'];
export type MomOrYoy = {
  momOrYoyDesc: string; // 环比/同比描述
  momOrYoyCalcMethod: MomOrYoyCalcMethod; // 环比/同比计算方式
  momOrYoyCalcType: MomOrYoyCalcType; // 环比/同比计算类型
};
export enum MyFilterDuration {
  /** 本季度 */
  CurrentQuarter = 'CurrentQuarter',
  /** 上季度 */
  LastQuarter = 'LastQuarter',
  /** 今年 */
  CurrentYear = 'CurrentYear',
  /** 去年 */
  LastYear = 'LastYear',
  /** 最近14天 */
  Last14Days = 'Last14Days',
  /** 最近365天 */
  Last365Days = 'Last365Days',
  /** 最近3个月 */
  Last3Months = 'Last3Months',
  /** 最近6个月 */
  Last6Months = 'Last6Months',
}
export interface IConfig {
  tableId: string; // 数据源
  tableRange: IDataRange; //数据范围
  dateTypeFieldId: string; // 日期类型字段的Id
  dateRange: FilterDuration; // 日期范围
  statisticalType: StatisticalType; // 统计方式
  numberOrCurrencyFieldId: string; // 统计数值字段类型
  statisticalCalcType: Rollup; // 统计计算类型
  momOrYoy: MomOrYoy[]; // 环同比
  color: ColorName; // 颜色
  iconStyle: IconStyle; // 图标样式
  decimal: number;  // 小数位数
  numberFormat: NumberFormat; // 数字格式
  prefix: string; // 前缀
  suffix: string; // 后缀
}

export interface ITableItem {
  id: string;
  label: string;
}