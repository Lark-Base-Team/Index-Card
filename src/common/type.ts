import { FieldType } from "@lark-base-open/js-sdk";
import type { IView } from '@lark-base-open/js-sdk';
import type { ColorName } from '@/components/ColorPicker';
import { dateRangeList, statisticalTypeList, statisticalByNumberList, calculationList, momOrYoyCalcMethodList, momOrYoyCalcTypeList, iconStyleList, dataFormatList, icons } from '@/common/constant';

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
export type DateRange = typeof dateRangeList[number]['value'];
export type StatisticalType = typeof statisticalTypeList[number]['value'];
export type StatisticalByNumber = typeof statisticalByNumberList[number]['value'];
export type StatisticalCalcType = typeof calculationList[number]['value'];
export type MomOrYoyCalcMethod = typeof momOrYoyCalcMethodList[number]['value'];
export type MomOrYoyCalcType = typeof momOrYoyCalcTypeList[number]['value'];
export type IconStyle = typeof iconStyleList[number]['id'];
export type NumberFormat = typeof dataFormatList[number]['value'];
export type MomOrYoy = {
  momOrYoyDesc: string; // 环比/同比描述
  momOrYoyCalcMethod: MomOrYoyCalcMethod; // 环比/同比计算方式
  momOrYoyCalcType: MomOrYoyCalcType; // 环比/同比计算类型
};
export interface IConfig {
  tableId: string; // 数据源
  tableViewId: string; //数据范围
  dateType: DateType; // 日期类型å
  dateRange: DateRange; // 日期范围
  statisticalType: StatisticalType; // 统计方式
  statisticalByNumber: StatisticalByNumber; // 统计数值字段类型
  statisticalCalcType: StatisticalCalcType; // 统计计算类型
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
  name: string;
  viewList: IView[];
}

export interface IViewItem {
  id: string;
  name: string;
}