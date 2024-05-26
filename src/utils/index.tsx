import { iconStyleList, icons, momOrYoyCalcMethodList } from '@/common/constant';
import { DashboardState, FilterDuration, IDataCondition, IDataRange, dashboard } from "@lark-base-open/js-sdk";
import { IConfig, IMomYoyList, IRenderData, IconColor, IconStyleId, MomOrYoyCalcMethod, MomOrYoyCalcType, MyFilterDuration, NumberFormat } from '@/common/type'
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import { t } from 'i18next';

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
export const getNewMomOrYoyCalcMethodList = (dateRange: FilterDuration) => {
  // 都可用
  if (dateRange === FilterDuration.Today || dateRange === FilterDuration.Yesterday) {
    return momOrYoyCalcMethodList
  }
  // 只有环比可用
  if (dateRange === FilterDuration.CurrentWeek || dateRange === FilterDuration.LastWeek || dateRange === FilterDuration.TheLastWeek || dateRange === FilterDuration.TheLastMonth) {
    return momOrYoyCalcMethodList.map(item => ({
      ...item,
      disabled: !(item.value === 'mom')
    }))
  }
  // 环比、月同比、周同比可用
  if (dateRange === FilterDuration.CurrentMonth || dateRange === FilterDuration.LastMonth) {
    return momOrYoyCalcMethodList.map(item => ({
      ...item,
      disabled: item.value === 'yoyByWeek'
    }))
  }

  return []
}

/**
 * 部分SDK不支持的时间类型需要转换成时间戳
*/
export const dateTypeFormatter = (dateType: FilterDuration | MyFilterDuration) => {
  if (dateType in FilterDuration) {
    return dateType
  }

  type DateTypeMap = {
    [key in MyFilterDuration]: () => any;
  }
  const dateTypeMap: DateTypeMap = {
    [MyFilterDuration.CurrentQuarter]: () => {
      dayjs.extend(quarterOfYear)
      const startOfQuarter = dayjs().startOf('quarter').valueOf()
      const endOfQuarter = dayjs().valueOf()
      return {
        start: startOfQuarter,
        end: endOfQuarter,
      }
    },
    [MyFilterDuration.LastQuarter]: () => { },
    [MyFilterDuration.CurrentYear]: () => { },
    [MyFilterDuration.LastYear]: () => { },
    [MyFilterDuration.Last14Days]: () => { },
    [MyFilterDuration.Last365Days]: () => { },
    [MyFilterDuration.Last3Months]: () => { },
    [MyFilterDuration.Last6Months]: () => { },
  }
  return dateTypeMap[dateType as MyFilterDuration]()
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