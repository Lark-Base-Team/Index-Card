import { iconStyleList, icons, momOrYoyCalcMethodList } from '@/common/constant';
import { DashboardState, FilterDuration, IDataCondition, IDataRange, dashboard } from "@lark-base-open/js-sdk";
import { DateRangeType, IConfig, IMomYoyList, IRenderData, IconColor, IconStyleId, MomOrYoyCalcMethod, MomOrYoyCalcType, MyFilterDuration, NumberFormat } from '@/common/type'
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import { t } from 'i18next';
dayjs.extend(quarterOfYear) // 季度插件

/**
 * 数字字符串转为千分位字符串
*/
export const numberToMillennials = (numberString: string) => {
  return numberString.replace(/\B(?=(\d{3})+$)/g, ',')
}

export const getIcon = (iconName: string, iconSize?: string) => {
  const Icon = icons[iconName as keyof typeof icons];
  return iconSize ? <Icon style={{ fontSize: iconSize }} /> : <Icon size='small' />
}

export const indexNumberFormatter = (index: number, formatterType: NumberFormat, decimal: number) => {
  if (formatterType === 'numberMillennials') { //数字千分位
    const indexStringArr = index.toFixed(decimal).split('.');
    const str1 = numberToMillennials(indexStringArr[0]);
    return indexStringArr.length > 1 ? `${str1}.${indexStringArr[1]}` : str1
  } else if (formatterType === 'number') { //数字
    return index.toFixed(decimal)
  } else if (formatterType === 'percentage') { //数字百分比
    return (index * 100).toFixed(decimal) + '%'
  } else { //数字千分比
    return (index * 1000).toFixed(decimal) + '‰'
  }
}

/**
 * 获取同比环比列表，在某些情况下需要禁用部分选项
*/
export const getNewMomOrYoyCalcMethodList = (dateRange: DateRangeType) => {
  // 全部选项可用
  const allAvailable = [FilterDuration.Today, FilterDuration.Yesterday] as any[]
  if (allAvailable.includes(dateRange)) {
    return momOrYoyCalcMethodList
  }

  // 只有环比可用
  const onlyMomAvailable = [FilterDuration.CurrentWeek, FilterDuration.LastWeek, FilterDuration.TheLastWeek, MyFilterDuration.Last14Days, FilterDuration.TheLastMonth, MyFilterDuration.Last365Days, MyFilterDuration.Last3Months, MyFilterDuration.Last6Months]
  if (onlyMomAvailable.includes(dateRange)) {
    return momOrYoyCalcMethodList.map(item => ({
      ...item,
      disabled: !(item.value === 'mom')
    }))
  }

  // 环比、年同比可用
  const momAndYoyByYearAvailable = [MyFilterDuration.CurrentQuarter, MyFilterDuration.LastQuarter, MyFilterDuration.CurrentYear, MyFilterDuration.LastYear] as any[]
  if (momAndYoyByYearAvailable.includes(dateRange)) {
    return momOrYoyCalcMethodList.map(item => ({
      ...item,
      disabled: item.value === 'yoyByWeek' || item.value === 'yoyByMonth'
    }))
  }

  // 只有周同比不可用
  const onlyYoyDisabled = [FilterDuration.CurrentMonth, FilterDuration.LastMonth] as any[]
  if (onlyYoyDisabled.includes(dateRange)) {
    return momOrYoyCalcMethodList.map(item => ({
      ...item,
      disabled: item.value === 'yoyByWeek'
    }))
  }

  return []
}

/**
 * 把时间范围枚举获得对应的时间戳范围
*/
export const getDateRangeTimestamp = (dateTypeRange: DateRangeType) => {
  type DateTypeRangeMap = {
    [key in DateRangeType]: () => {
      startTime: number;
      endTime: number;
    }
  }
  const dateTypeRangeMap: DateTypeRangeMap = {
    [FilterDuration.Today]: () => {
      const startTime = dayjs().startOf('day').valueOf()
      const endTime = dayjs().valueOf()
      return { startTime, endTime }
    },
    [FilterDuration.Yesterday]: () => {
      const startTime = dayjs().subtract(1, 'day').startOf('day').valueOf()
      const endTime = dayjs().subtract(1, 'day').endOf('day').valueOf()
      return { startTime, endTime }
    },
    [FilterDuration.CurrentWeek]: () => {
      const startTime = dayjs().startOf('week').valueOf()
      const endTime = dayjs().valueOf()
      return { startTime, endTime }
    },
    [FilterDuration.LastWeek]: () => {
      const startTime = dayjs().startOf('week').subtract(1, 'week').valueOf()
      const endTime = dayjs().endOf('week').subtract(1, 'week').valueOf()
      return { startTime, endTime }
    },
    [FilterDuration.CurrentMonth]: () => {
      const startTime = dayjs().startOf('month').valueOf()
      const endTime = dayjs().valueOf()
      return { startTime, endTime }
    },
    [FilterDuration.LastMonth]: () => {
      const startTime = dayjs().startOf('month').subtract(1, 'month').valueOf()
      const endTime = dayjs().endOf('month').subtract(1, 'month').valueOf()
      return { startTime, endTime }
    },
    [MyFilterDuration.CurrentQuarter]: () => {
      const startTime = dayjs().startOf('quarter').valueOf()
      const endTime = dayjs().valueOf()
      return { startTime, endTime }
    },
    [MyFilterDuration.LastQuarter]: () => {
      const startTime = dayjs().startOf('quarter').subtract(1, 'quarter').valueOf()
      const endTime = dayjs().endOf('quarter').subtract(1, 'quarter').valueOf()
      return { startTime, endTime }
    },
    [MyFilterDuration.CurrentYear]: () => {
      const startTime = dayjs().startOf('year').valueOf()
      const endTime = dayjs().valueOf()
      return { startTime, endTime }
    },
    [MyFilterDuration.LastYear]: () => {
      const startTime = dayjs().startOf('year').subtract(1, 'year').valueOf()
      const endTime = dayjs().endOf('year').subtract(1, 'year').valueOf()
      return { startTime, endTime }
    },
    [FilterDuration.TheLastWeek]: () => {
      const startTime = dayjs().subtract(7, 'day').valueOf()
      const endTime = dayjs().valueOf()
      return { startTime, endTime }
    },
    [MyFilterDuration.Last14Days]: () => {
      const startTime = dayjs().subtract(14, 'day').valueOf()
      const endTime = dayjs().valueOf()
      return { startTime, endTime }
    },
    [FilterDuration.TheLastMonth]: () => {
      const startTime = dayjs().subtract(30, 'day').valueOf()
      const endTime = dayjs().valueOf()
      return { startTime, endTime }
    },
    [MyFilterDuration.Last365Days]: () => {
      const startTime = dayjs().subtract(365, 'day').valueOf()
      const endTime = dayjs().valueOf()
      return { startTime, endTime }
    },
    [MyFilterDuration.Last3Months]: () => {
      const startTime = dayjs().subtract(3, 'month').valueOf()
      const endTime = dayjs().valueOf()
      return { startTime, endTime }
    },
    [MyFilterDuration.Last6Months]: () => {
      const startTime = dayjs().subtract(6, 'month').valueOf()
      const endTime = dayjs().valueOf()
      return { startTime, endTime }
    },
  }
  return dateTypeRangeMap[dateTypeRange]()
}

/**
 * 根据时间范围枚举和环同比类型获取dayjs的subtract参数value
*/
export const getSubtractParamsValue = (dateTypeRange: DateRangeType) => {
  let value = 1;
  const valueBy1 = [FilterDuration.Today, FilterDuration.Yesterday, FilterDuration.CurrentWeek, FilterDuration.LastWeek, FilterDuration.CurrentMonth, FilterDuration.LastMonth, MyFilterDuration.CurrentQuarter, MyFilterDuration.LastQuarter, MyFilterDuration.CurrentYear, MyFilterDuration.LastYear];
  if (valueBy1.includes(dateTypeRange)) {
    value = 1;
  }
  if (dateTypeRange === FilterDuration.TheLastWeek) {
    value = 7;
  }
  if (dateTypeRange === MyFilterDuration.Last14Days) {
    value = 14;
  }
  if (dateTypeRange === FilterDuration.TheLastMonth) {
    value = 30;
  }
  if (dateTypeRange === MyFilterDuration.Last365Days) {
    value = 365;
  }
  if (dateTypeRange === MyFilterDuration.Last3Months) {
    value = 3;
  }
  if (dateTypeRange === MyFilterDuration.Last6Months) {
    value = 6;
  }
  return value
}

/**
 * 根据时间范围枚举和环同比类型获取dayjs的subtract参数unit
*/
export const getSubtractParamsUnit = (dateTypeRange: DateRangeType, momYoyCalcMethod: MomOrYoyCalcMethod) => {
  type Unit = 'day' | 'week' | 'month' | 'quarter' | 'year';
  let unit: Unit = 'day';

  const arr1 = [FilterDuration.Today, FilterDuration.Yesterday, FilterDuration.TheLastWeek, MyFilterDuration.Last14Days, FilterDuration.TheLastMonth, MyFilterDuration.Last365Days];
  if (arr1.includes(dateTypeRange) && momYoyCalcMethod === 'mom') {
    unit = 'day';
  }

  const arr2 = [FilterDuration.CurrentWeek, FilterDuration.LastWeek];
  const arr3 = [FilterDuration.Today, FilterDuration.Yesterday];
  if ((arr2.includes(dateTypeRange as any) && momYoyCalcMethod === 'mom') || (arr3.includes(dateTypeRange as any) && momYoyCalcMethod === 'yoyByWeek')) {
    unit = 'week';
  }

  const arr4 = [FilterDuration.CurrentMonth, FilterDuration.LastMonth, MyFilterDuration.Last3Months, MyFilterDuration.Last6Months]
  const arr5 = [FilterDuration.Today, FilterDuration.Yesterday, FilterDuration.CurrentMonth, FilterDuration.LastMonth];
  if ((arr4.includes(dateTypeRange) && momYoyCalcMethod === 'mom') || (arr5.includes(dateTypeRange as any) && momYoyCalcMethod === 'yoyByMonth')) {
    unit = 'month';
  }

  const arr6 = [MyFilterDuration.CurrentQuarter, MyFilterDuration.LastQuarter]
  if (arr6.includes(dateTypeRange as any) && momYoyCalcMethod === 'mom') {
    unit = 'quarter';
  }

  const arr7 = [MyFilterDuration.CurrentYear, MyFilterDuration.LastYear]
  const arr8 = [FilterDuration.Today, FilterDuration.Yesterday, FilterDuration.CurrentMonth, FilterDuration.LastMonth, MyFilterDuration.CurrentQuarter, MyFilterDuration.LastQuarter, MyFilterDuration.CurrentYear, MyFilterDuration.LastYear]
  if ((arr7.includes(dateTypeRange as any) && momYoyCalcMethod === 'mom') || (arr8.includes(dateTypeRange as any) && momYoyCalcMethod === 'yoyByYear')) {
    unit = 'year';
  }
  return unit
}

/**
 * 根据时间范围枚举和环同比类型获取对应开始时间和结束时间
*/
export const getMomYoyDateRange = (dateTypeRange: DateRangeType, momYoyCalcMethod: MomOrYoyCalcMethod) => {
  const value = getSubtractParamsValue(dateTypeRange);
  const unit = getSubtractParamsUnit(dateTypeRange, momYoyCalcMethod);
  console.log(value, unit);
  const { startTime, endTime } = getDateRangeTimestamp(dateTypeRange);
  console.log(dayjs(startTime).format('YYYY-MM-DD HH:mm:ss'), dayjs(endTime).format('YYYY-MM-DD HH:mm:ss'));
  const timeStart = dayjs(startTime).subtract(value, unit as any).format('YYYY-MM-DD HH:mm:ss')
  const timeEnd = dayjs(endTime).subtract(value, unit as any).format('YYYY-MM-DD HH:mm:ss')
  return { startTime: timeStart, endTime: timeEnd }
}


/**
 * 根据环同比的指标获取对应的图标和颜色
*/
export const getIconStyleObj = (iconStyleId: IconStyleId, nowValue: number, targetValue: number) => {
  type Result = {
    icon: keyof typeof icons;
    color: IconColor;
  }
  const result = {} as Result
  type IconStyleItem = typeof iconStyleList[number]
  const iconObj = iconStyleList.find((item) => item.id === iconStyleId) as IconStyleItem;

  if (nowValue === targetValue) {
    result.icon = iconObj.constIcon
    result.color = iconObj.constIconColor
  }
  else if (nowValue < targetValue) {
    result.icon = iconObj.downIcon
    result.color = iconObj.downIconColor
  }
  else {
    result.icon = iconObj.upIcon
    result.color = iconObj.upIconColor
  }
  return result
}

/**
 * 根据环同比的指标获取对应的指标计算结果
*/
export const getMomYoyCalcResult = (calcType: MomOrYoyCalcType, nowValue: number, targetValue: number) => {
  let result = '';
  if (calcType === 'differenceRate') { // 差异率
    result = `${((Math.abs((nowValue - targetValue) / targetValue)) * 100).toFixed(0)}%`
  } else if (calcType === 'differenceValue') { // 差异值
    result = `${nowValue - targetValue}`

  } else { // 原始值
    result = `${nowValue}`
  }
  return result
}

/**
 * 根据环同比的指标获取对应的指标描述
*/
export const getMomYoyDesc = (calcMethod: MomOrYoyCalcMethod, calcType: MomOrYoyCalcType) => {
  let methodStringObj = {
    mom: t('mom'),
    yoyByWeek: t('weekYoy'),
    yoyByMonth: t('monthYoy'),
    yoyByYear: t('yearYoy'),
  };
  let typeStringObj = {
    differenceRate: '增长率',
    differenceValue: '增长值',
    originalValue: t('originalValue'),
  };
  return `${methodStringObj[calcMethod]}${typeStringObj[calcType]}`
}

export const getConfig = async () => {
  const res = await dashboard.getConfig()
  const config = res.customConfig as unknown as IConfig;
  return config
}


export const configFormatter = (config: IConfig) => {
  const dataRange: IDataRange = {
    ...config.tableRange,
    // filterInfo: {
    //   conjunction: FilterConjunction.Or,
    //   conditions: [{
    //     fieldId: config.dateTypeFieldId,
    //     value: config.dateRange,
    //     operator: FilterOperator.Is,
    //   }]
    // }
  }
  const dataCondition: IDataCondition = {
    tableId: config.tableId,
    dataRange,
    series: [
      {
        fieldId: config.numberOrCurrencyFieldId,
        rollup: config.statisticalCalcType
      }
    ],
  }
  return dataCondition
}

export const getPreviewData = async (previewConfig: IDataCondition) => {
  console.log('previewConfig', previewConfig);
  const data = await dashboard.getPreviewData(previewConfig);
  console.log('>>>>>>>>>>>>>>', data);
  return data[1].map(item => item.value as number);
}

export const getData = async () => {
  console.log('getData');
  const data = await dashboard.getData();
  console.log('>>>>>>>>>>>>>>', data);
  return data[1].map(item => item.value as number);
}

export const getRenderData = async (configObj: IConfig, value: number[]) => {
  const renderDataNumber = value[0];
  const momYoyListNumber = value.splice(1, value.length - 1);
  const momYoyList: IMomYoyList[] = configObj.momOrYoy.map((item, index) => {
    const targetValue = momYoyListNumber[index];
    const iconStyleObj = getIconStyleObj(configObj.iconStyleId, renderDataNumber, targetValue)
    return {
      desc: item.momOrYoyDesc,
      calcType: item.momOrYoyCalcType,
      value: getMomYoyCalcResult(item.momOrYoyCalcType, renderDataNumber, targetValue),
      color: iconStyleObj.color,
      icon: iconStyleObj.icon,

    }
  })
  const renderData: IRenderData = {
    color: configObj.color,
    value: indexNumberFormatter(renderDataNumber, configObj.numberFormat, configObj.decimal),
    prefix: configObj.prefix,
    suffix: configObj.suffix,
    momYoyList,
  }
  return renderData;
}

export const renderMainContentData = async (config: IConfig, value: number[], setRenderData: (data: IRenderData) => void) => {
  const data = await getRenderData(config, [23603.12345, 110]);
  setRenderData(data);
}