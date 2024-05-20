import './index.scss'
import { IconMinus, IconTriangleUp, IconTriangleDown, IconFilledArrowUp, IconFilledArrowDown, IconArrowUpRight, IconArrowDownRight } from '@douyinfe/semi-icons';
import classnames from 'classnames';
import type { IContentData } from '@/common/type'
import { getIcon } from '@/utils';


export default function MainContent({ isConfig, contentData }: { isConfig: boolean, contentData: IContentData }) {
  const iconSize = isConfig ? '20px' : '10px'

  return (
    <div className='main-content'>
      <div className={classnames({
        'main-content-warp': true,
        'is-config': isConfig,
      })}>
        <div className='main-content-number'>
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
                {/* <IconTriangleDown /> */}
                <div className='description-index-number'>{item.value}</div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}