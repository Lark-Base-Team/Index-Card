import './index.scss'
import classnames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Input, Select, InputNumber } from '@douyinfe/semi-ui';
import { ColorPicker } from '../ColorPicker';
import { ICustomConfig } from '@/common/type';
import { dataFormatList, iconStyleList, } from '@/common/constant';
import { getIcon } from '@/utils';
import { IconMinus } from '@douyinfe/semi-icons';

export default function PanelCustomStyle({ config, setConfig }: { config: ICustomConfig; setConfig: (data: ICustomConfig) => void }) {

  const { t } = useTranslation();

  const handlerChange = (key: string, value: any) => {
    setConfig({ ...config, [key]: value });
  }

  const formatterToNumber = (value: any) => {
    return `${value}`.replace(/\D/g, '');
  }

  return (
    <div className="form-main">
      <div className="form-title">{t('color')}</div>
      <div className='form-item' style={{ margin: '6px 0 18px 0' }}>
        <ColorPicker onChange={(value) => { handlerChange('color', value) }} name={config.color} />
      </div>
      <div className='form-title'>{t('iconStyle')}</div>
      <div className='form-item'>
        <Select value={config.iconStyleId} onChange={(value) => { handlerChange('iconStyleId', value) }}>
          {iconStyleList.map((item) =>
          (<Select.Option value={item.id} key={item.id}>
            <div className='index-icon'>
              <div className={classnames('index-icon-item', item.upIconColor)} >
                {getIcon(item.upIcon)}
                <div className='number'>10</div>
              </div>
              <div className={classnames('index-icon-item', item.constIconColor)}>
                <IconMinus size='small' />
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
            onNumberChange={(value) => { handlerChange('decimal', value) }}
            min={0}
            max={5}
          />
          <Select
            value={config.numberFormat}
            style={{ flex: 1 }}
            onChange={(value) => { handlerChange('numberFormat', value) }}>
            {dataFormatList.map((item) =>
              (<Select.Option value={item.value} key={item.value}>{item.label}</Select.Option>))
            }
          </Select>
        </div>
      </div>
      <div className='flex-between'>
        <div className='form-item' style={{ marginRight: '10px' }}>
          <div className='form-subTitle'>{t('prefix')}</div>
          <Input
            value={config.prefix}
            placeholder={t('prefixPlaceholder')}
            onChange={(value) => { handlerChange('prefix', value) }} />
        </div>
        <div className='form-item'>
          <div className='form-subTitle'>{t('suffix')}</div>
          <Input
            value={config.suffix}
            placeholder={t('suffixPlaceholder')}
            onChange={(value) => { handlerChange('suffix', value) }} />
        </div>
      </div>
    </div>
  )
}