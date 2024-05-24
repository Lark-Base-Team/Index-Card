import { icons, momOrYoyCalcMethodList } from '@/common/constant';
import { FilterDuration } from "@lark-base-open/js-sdk";
import { MyFilterDuration } from '@/common/type'
import dayjs from 'dayjs';
import quarterOfYear from 'dayjs/plugin/quarterOfYear'

export const getIcon = (iconName: string, iconSize?: string) => {
  const Icon = icons[iconName as keyof typeof icons];
  return iconSize ? <Icon style={{ fontSize: iconSize }} /> : <Icon size='small' />
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