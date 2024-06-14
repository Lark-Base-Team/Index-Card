import './index.scss'
import classnames from 'classnames';
import type { IRenderData } from '@/common/type'
import { getIcon } from '@/utils';
import { colors } from '@/components/ColorPicker'
import { DashboardState, dashboard } from '@lark-base-open/js-sdk';
import { useEffect, useRef } from 'react';

interface IProps {
  renderData: IRenderData;
  numberFontSize: number;
}
export default function MainContent({ renderData, numberFontSize }: IProps) {
  const isConfig = dashboard.state === DashboardState.Config || dashboard.state === DashboardState.Create;

  const numberContentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (numberContentRef.current) {
      numberContentRef.current.style.fontSize = `${numberFontSize}vmax`;
    }
  }, [numberFontSize]);

  return (
    <div className='main-content'>
      <div className={classnames({ 'main-content-warp': true, 'is-config': isConfig })}>
        <div
          ref={numberContentRef}
          className='main-content-number text-hidden'
          style={{ color: colors.find(item => item.name === renderData.color)?.value }}>
          {`${renderData.prefix}${renderData.value}${renderData.suffix}`}
        </div>
        {
          renderData.momYoyList.map((item, index) => (
            <div className='main-content-description text-hidden' key={index}>
              <div className="description-text">{item.desc}</div>
              <div className={classnames('description-index', item.color)}>
                {item.calcType === 'originalValue' ? null : getIcon(item.icon, '1.8vmax', item.value ? undefined : '0')}
                <div className='description-index-number'>
                  {item.value}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}