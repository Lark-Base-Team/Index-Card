import { FieldType } from "@lark-base-open/js-sdk";
import type { IView } from '@lark-base-open/js-sdk';
import type { ColorName } from '@/components/ColorPicker';
import { dateRangeList, statisticalTypeList, statisticalByNumberList, calculationList, momOrYoyCalcMethodList, momOrYoyCalcTypeList, iconStyleList, dataFormatList } from '@/common/constant';
import { icons } from '@/common/constant';

export interface IMomYoyList {
  desc: string;
  value: string;
  color: 'red' | 'black' | 'green';
  icon: keyof typeof icons;
}

export interface IContentData {
  number: string; // 指标数据
  prefix: string; // 前缀 
  suffix: string; // 前缀
  momYoyList: IMomYoyList[], // 环同比数据
}

export interface IConfig {
  tableId: string; // 数据源
  tableViewId: string; //数据范围
  dateType: FieldType.DateTime | FieldType.CreatedTime | FieldType.ModifiedTime; // 日期类型
  dateRange: typeof dateRangeList[number]['value']; // 日期范围
  statisticalType: typeof statisticalTypeList[number]['value']; // 统计方式
  statisticalByNumber: typeof statisticalByNumberList[number]['value']; // 统计数值字段类型
  statisticalCalcType: typeof calculationList[number]['value']; // 统计计算类型
  momOrYoyDesc: string; // 环比/同比描述
  momOrYoyCalcMethod: typeof momOrYoyCalcMethodList[number]['value']; // 环比/同比计算方式
  momOrYoyCalcType: typeof momOrYoyCalcTypeList[number]['value']; // 环比/同比计算类型
  color: ColorName; // 颜色
  iconStyle: typeof iconStyleList[number]['id']; // 图标样式
  decimal: number;  // 小数位数
  numberFormat: typeof dataFormatList[number]['value']; // 数字格式
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