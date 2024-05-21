import './index.scss'
import classnames from 'classnames';
import type { IContentData } from '@/common/type'
import { getIcon } from '@/utils';
import { colors } from '@/components/ColorPicker'


export default function MainContent({ isConfig, contentData }: { isConfig: boolean, contentData: IContentData }) {
  const iconSize = isConfig ? '20px' : '10px';

  return (
    <div className='main-content'>
      <div className={classnames({
        'main-content-warp': true,
        'is-config': isConfig,
      })}>
        <div className='main-content-number' style={{ color: colors.find(item => item.name === contentData.color)?.value }}>
          <span>{contentData.prefix}</span>
          <span>{contentData.number}</span>
          <span>{contentData.suffix}</span>
        </div>
        {
          contentData.momYoyList.map((item, index) => (
            <div className='main-content-description' key={index}>
              <div className="description-text">{item.desc}</div>
              <div className={classnames('description-index', item.color)}>
                {getIcon(item.icon, iconSize)}
                <div className='description-index-number'>{item.value}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}