import './index.scss'
import { IconMinus, IconTriangleUp, IconTriangleDown, IconFilledArrowUp, IconFilledArrowDown, IconArrowUpRight, IconArrowDownRight } from '@douyinfe/semi-icons';

const iconSize = '3.5vmin'

export default function MainContent() {

  return (
    <div className='main-content'>
      <div className="main-content-warp">
        <div className='main-content-number'>$323</div>
        <div className='main-content-description'>
          <div className="description-text">环比增长率</div>
          <div className="description-index">
            <IconTriangleUp style={{ fontSize: iconSize }} />
            {/* <IconTriangleDown /> */}
            <div className='description-index-number'>31%</div>
          </div>
        </div>
        <div className='main-content-description'>
          <div className="description-text">环比增长值</div>
          <div className="description-index">
            {/* <IconArrowUpRight style={{ fontSize: iconSize }} /> */}
            <IconMinus style={{ fontSize: iconSize }} />
            {/* <IconArrowDownRight /> */}
            <div className='description-index-number'>0</div>
          </div>
        </div>
        <div className='main-content-description'>
          <div className="description-text">环比增长值</div>
          <div className="description-index">
            <IconFilledArrowUp style={{ fontSize: iconSize }} />
            {/* <IconFilledArrowDown /> */}
            <div className='description-index-number'>24</div>
          </div>
        </div>
      </div>
    </div>
  )
}