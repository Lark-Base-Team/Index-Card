import './index.scss';

export const colors = [
  {
    name: 'primary', // 基本色
    value: 'var(--ccm-chart-N700)',
  },
  {
    name: 'blue', // 蓝色
    value: 'var(--ccm-chart-B500)',
  },
  {
    name: 'Purple', // 紫色
    value: 'var(--ccm-chart-I500)',
  },
  {
    name: 'green', //绿色
    value: 'var(--ccm-chart-G500)'
  },
  {
    name: 'cyan', // 青色
    value: 'var(--ccm-chart-W500)'
  },
  {
    name: 'yellow', // 黄色
    value: 'var(--ccm-chart-Y500)'
  },
  {
    name: 'orange', // 橙色
    value: 'var(--ccm-chart-O500)'
  },
  {
    name: 'red', // 红色
    value: 'var(--ccm-chart-R400)'
  },
] as const

export type ColorName = typeof colors[number]['name'];

export function ColorPicker(props: { onChange: (name: ColorName) => void, name: ColorName }) {
  return <div className="color-picker">
    {colors.map(({ name, value }) => <div
      onClick={() => { props.onChange(name) }}
      key={name}
      style={{ borderColor: props.name === name ? value : 'transparent' }}
      className="color-picker-color-container">
      <div style={{ backgroundColor: value }} className="color-picker-color">
        {props.name === name ? <div className="selected-icon-container"></div> : null}
      </div>
    </div>)}
  </div>

}