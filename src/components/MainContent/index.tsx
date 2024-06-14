import './index.scss'
import classnames from 'classnames';
import type { IRenderData } from '@/common/type'
import { getDomTextFontSize, getIcon } from '@/utils';
import { colors } from '@/components/ColorPicker'
import { DashboardState, dashboard } from '@lark-base-open/js-sdk';
import { RefObject, useEffect, useRef } from 'react';
import { debounce } from 'lodash-es';

interface IProps {
  renderData: IRenderData; // 标数据
  mainDomRef: RefObject<HTMLDivElement>; // 最外层的容器dom
}
export default function MainContent({ renderData, mainDomRef }: IProps) {
  const isConfig = dashboard.state === DashboardState.Config || dashboard.state === DashboardState.Create;

  const mainContentRef = useRef<HTMLDivElement>(null); // 主数据容器dom
  const numberContentRef = useRef<HTMLDivElement>(null); // 文字容器dom

  // 设置文字大小
  const setFontSizeDebounce = debounce(() => {
    const text = `${renderData.prefix}${renderData.value}${renderData.suffix}`;
    let fontSize = 26;
    if (isConfig) {
      // 创建状态和配置状态时，使用主数据容器宽度计算文字大小
      const defaultFontSize = 26;
      const mainContentWidth = mainContentRef.current?.offsetWidth || 0;
      fontSize = getDomTextFontSize(mainContentWidth, text, defaultFontSize);
    } else {
      // 否则使用最外层容器宽度计算文字大小
      const defaultFontSize = 26;
      const mainDomWidth = mainDomRef.current?.offsetWidth || 0;
      fontSize = getDomTextFontSize(mainDomWidth, text, defaultFontSize);
    }
    numberContentRef.current && (numberContentRef.current.style.fontSize = `${fontSize}vmax`);
  }, 200);

  const resizeHandler = () => {
    setFontSizeDebounce();
  }

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    }
  }, [renderData]);


  return (
    <div className='main-content' ref={mainContentRef}>
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