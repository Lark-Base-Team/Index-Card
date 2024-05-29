import './index.scss'
import classnames from 'classnames';
import type { IRenderData } from '@/common/type'
import { getIcon } from '@/utils';
import { colors } from '@/components/ColorPicker'
import { DashboardState, dashboard } from '@lark-base-open/js-sdk';


export default function MainContent({ renderData }: { renderData: IRenderData }) {
  const isConfig = dashboard.state === DashboardState.Config || dashboard.state === DashboardState.Create;
  const iconSize = isConfig ? '20px' : '10px';

  return (
    <div className='main-content'>
      <div className={classnames({
        'main-content-warp': true,
        'is-config': isConfig,
      })}>
        <div className='main-content-number' style={{ color: colors.find(item => item.name === renderData.color)?.value }}>
          <span>{renderData.prefix}</span>
          <span>{renderData.value}</span>
          <span>{renderData.suffix}</span>
        </div>
        {
          renderData.momYoyList.map((item, index) => (
            <div className='main-content-description' key={index}>
              <div className="description-text">{item.desc}</div>
              <div className={classnames('description-index', item.color)}>
                {item.calcType === 'originalValue' ? null : getIcon(item.icon, iconSize)}
                <div className={classnames('description-index-number', item.value ? '' : 'no-margin-left')}>
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