import './index.scss'
import classnames from 'classnames';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Input, Select, InputNumber } from '@douyinfe/semi-ui';
import { ColorPicker } from '../ColorPicker';
import type { ColorName } from '../ColorPicker';
import { IConfig } from '@/common/type';
import { dataFormatList, iconStyleList, } from '@/common/constant';
import { getIcon } from '@/utils';

export default function PanelCustomStyle({ config, setConfig }: { config: IConfig; setConfig: (data: IConfig) => void }) {

  const { t } = useTranslation();

  const colorChange = (color: ColorName) => {
    setConfig({
      ...config,
      color,
    })
  }

  const iconStyleChange = (iconStyle: any) => {
    setConfig({
      ...config,
      iconStyle,
    })
  }

  const formatterToNumber = (value: any) => {
    return `${value}`.replace(/\D/g, '')
  }

  const decimalChange = (decimal: any) => {
    setConfig({
      ...config,
      decimal,
    })
  }

  const numberFormatChange = (numberFormat: any) => {
    setConfig({
      ...config,
      numberFormat,
    })
  }

  const prefixChange = (prefix: any) => {
    setConfig({
      ...config,
      prefix,
    })
  }

  const suffixChange = (suffix: any) => {
    setConfig({
      ...config,
      suffix,
    })
  }

  return (
    <div className="form-main">
      <div className="form-title">{t('color')}</div>
      <div className='form-item' style={{ margin: '6px 0 18px 0' }}>
        <ColorPicker onChange={colorChange} name={config.color} />
      </div>
      <div className='form-title'>{t('iconStyle')}</div>
      <div className='form-item'>
        <Select value={config.iconStyle} onChange={iconStyleChange}>
          {iconStyleList.map((item) =>
          (<Select.Option value={item.id} key={item.id}>
            <div className='index-icon'>
              <div className={classnames('index-icon-item', item.upIconColor)} >
                {getIcon(item.upIcon)}
                <div className='number'>10</div>
              </div>
              <div className={classnames('index-icon-item', item.constIconColor)}>
                {getIcon(item.constIcon)}
                <div className='number'>0</div>
              </div>
              <div className={classnames('index-icon-item', item.downIconColor)}>
                {getIcon(item.downIcon)}
                <div className='number'>10</div>
              </div>
            </div>
          </Select.Option>))
          }
        </Select>
      </div>
      <div className='form-title'>{t('indexDataFormat')}</div>
      <div className='form-item'>
        <div className='form-subTitle'>{t('decimalPlaces_Format')}</div>
        <div className='flex-between'>
          <InputNumber
            style={{ marginRight: '10px', flex: 1 }}
            value={config.decimal}
            formatter={formatterToNumber}
            onNumberChange={number => decimalChange(number)}
            min={0}
            max={Number.MAX_SAFE_INTEGER}
          />
          <Select value={config.numberFormat} style={{ flex: 1 }} onChange={numberFormatChange}>
            {dataFormatList.map((item) =>
              (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
            }
          </Select>
        </div>
      </div>
      <div className='flex-between'>
        <div className='form-item' style={{ marginRight: '10px' }}>
          <div className='form-subTitle'>{t('prefix')}</div>
          <Input value={config.prefix} placeholder={t('prefixPlaceholder')} onChange={prefixChange} />
        </div>
        <div className='form-item'>
          <div className='form-subTitle'>{t('suffix')}</div>
          <Input value={config.suffix} placeholder={t('suffixPlaceholder')} onChange={suffixChange} />
        </div>
      </div>
    </div>
  )
}