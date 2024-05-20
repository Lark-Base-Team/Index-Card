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

  const { t, i18n } = useTranslation();

  const colorChange = (color: ColorName) => {
    setConfig({
      ...config,
      color,
    })
  }

  return (
    <div className="form-main">
      <div className="form-title">颜色</div>
      <div className='form-item' style={{ margin: '6px 0 18px 0' }}>
        <ColorPicker onChange={colorChange} name={config.color} />
      </div>
      <div className='form-title'>图标样式</div>
      <div className='form-item'>
        <Select value={config.iconStyle}>
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
      <div className='form-title'>指标数据格式</div>
      <div className='form-item'>
        <div className='form-subTitle'>小数位与格式</div>
        <div className='flex-between'>
          <InputNumber style={{ marginRight: '10px', flex: 1 }} value={config.decimal} />
          <Select value={config.numberFormat} style={{ flex: 1 }}>
            {dataFormatList.map((item) =>
              (<Select.Option value={item.value} key={item.value}>{item.name}</Select.Option>))
            }
          </Select>
        </div>
      </div>
      <div className='flex-between'>
        <div className='form-item' style={{ marginRight: '10px' }}>
          <div className='form-subTitle'>前缀</div>
          <Input value={config.prefix} placeholder='请输入前缀' />
        </div>
        <div className='form-item'>
          <div className='form-subTitle'>后缀</div>
          <Input value={config.suffix} placeholder='请输入前缀' />
        </div>
      </div>
    </div>
  )
}