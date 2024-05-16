import './index.scss'
import { useState, useEffect } from 'react';
import { useConfig } from '@/hooks';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next/typescript/t';
import { Button, Input, Select } from '@douyinfe/semi-ui';
import { dashboard, DashboardState } from "@lark-base-open/js-sdk";
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { ColorPicker } from '../ColorPicker';


interface ICountDownConfig {
  color: string;
  /** 毫秒级时间戳 */
  target: number;
  units: string[];
  othersConfig: string[],
  title: string,
}

const defaultOthersConfig = ['showTitle']
const defaultUnits = ['sec', 'min', 'hour', 'day']

export default function MainContent() {

  const { t, i18n } = useTranslation();

  // create时的默认配置
  const [config, setConfig] = useState<ICountDownConfig>({
    target: new Date().getTime(),
    color: 'var(--ccm-chart-N700',
    units: defaultUnits,
    title: t('target.remain'),
    othersConfig: defaultOthersConfig
  })

  /** 配置用户配置 */
  const updateConfig = (res: any) => {
    console.log(res);
    const { customConfig } = res;
    if (customConfig) {
      setConfig(customConfig as any);
      setTimeout(() => {
        // 预留3s给浏览器进行渲染，3s后告知服务端可以进行截图了
        dashboard.setRendered();
      }, 3000);
    }

  }

  useConfig(updateConfig)


  const colorChange = (color: string) => {
    setConfig({
      ...config,
      color,
    })
  }


  /**保存配置 */
  const onSaveConfig = () => {
    dashboard.saveConfig({
      customConfig: config,
      dataConditions: [],
    } as any)
  }

  return (
    <div className='main-config-panel'>
      <div className='form'>
        <Tabs>
          <TabPane className='tabs-pane' tab="类型与数据" itemKey="1">
            <div className="form-main">
              <div className="form-title">数据源</div>
              <div className='form-item'>
                <Select value='operate'>
                  <Select.Option value="operate">运营</Select.Option>
                  <Select.Option value="rd">开发</Select.Option>
                  <Select.Option value="pm">产品</Select.Option>
                  <Select.Option value="ued">设计</Select.Option>
                </Select>
              </div>
              <div className="form-title">数据范围</div>
              <div className='form-item'>
                <Select value='operate'>
                  <Select.Option value="operate">运营</Select.Option>
                  <Select.Option value="rd">开发</Select.Option>
                  <Select.Option value="pm">产品</Select.Option>
                  <Select.Option value="ued">设计</Select.Option>
                </Select>
              </div>
              <div className="form-title">日期筛选</div>
              <div className='form-item'>
                <div className='form-subTitle'>依据</div>
                <Select value='operate'>
                  <Select.Option value="operate">运营</Select.Option>
                  <Select.Option value="rd">开发</Select.Option>
                  <Select.Option value="pm">产品</Select.Option>
                  <Select.Option value="ued">设计</Select.Option>
                </Select>
                <div className='form-item'>
                  <div className='form-subTitle'>范围</div>
                  <Select value='operate'>
                    <Select.Option value="operate">运营</Select.Option>
                    <Select.Option value="rd">开发</Select.Option>
                    <Select.Option value="pm">产品</Select.Option>
                    <Select.Option value="ued">设计</Select.Option>
                  </Select>
                </div>
              </div>
              <div className="form-title">统计方式</div>
              <div className='form-item'>
                <Select value='operate'>
                  <Select.Option value="operate">运营</Select.Option>
                  <Select.Option value="rd">开发</Select.Option>
                  <Select.Option value="pm">产品</Select.Option>
                  <Select.Option value="ued">设计</Select.Option>
                </Select>
                <Input value='数字' />
              </div>
              <div className="form-title">环同比<Button>添加环同比</Button></div>
              <div className='form-item'>
                <div className='form-subTitle'>描述</div>
                <Input value='环比增长率' />
                <div className='form-subTitle'>计算方式</div>
                <Select value='operate'>
                  <Select.Option value="operate">运营</Select.Option>
                  <Select.Option value="rd">开发</Select.Option>
                  <Select.Option value="pm">产品</Select.Option>
                  <Select.Option value="ued">设计</Select.Option>
                </Select>
                <div className='form-subTitle'>计算差异</div>
                <Select value='operate'>
                  <Select.Option value="operate">运营</Select.Option>
                  <Select.Option value="rd">开发</Select.Option>
                  <Select.Option value="pm">产品</Select.Option>
                  <Select.Option value="ued">设计</Select.Option>
                </Select>
              </div>
            </div>
          </TabPane>
          <TabPane className='tabs-pane' tab="自定义样式" itemKey="2">
            <div className="form-main">
              <div className="form-title">颜色</div>
              <div className='form-item'>
                <ColorPicker onChange={colorChange} value={config.color} />
              </div>
              <div className='form-title'>图标与样式</div>
              <div className='form-item'>
                <Select value='operate'>
                  <Select.Option value="operate">运营</Select.Option>
                  <Select.Option value="rd">开发</Select.Option>
                  <Select.Option value="pm">产品</Select.Option>
                  <Select.Option value="ued">设计</Select.Option>
                </Select>
              </div>
              <div className='form-title'>指标数据格式</div>
              <div className='form-item'>
                <div className='form-subTitle'>小数位与格式</div>
                <Select value='operate'>
                  <Select.Option value="operate">运营</Select.Option>
                  <Select.Option value="rd">开发</Select.Option>
                  <Select.Option value="pm">产品</Select.Option>
                  <Select.Option value="ued">设计</Select.Option>
                </Select>
              </div>
              <div>
                <div className='form-item'>
                  <div className='form-subTitle'>前缀</div>
                  <Input value='operate' />
                </div>
                <div className='form-item'>
                  <div className='form-subTitle'>后缀</div>
                  <Input value='operate' />
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>

      <Button
        className='btn'
        theme='solid'
        onClick={onSaveConfig}
      >
        {t('confirm')}
      </Button>
    </div >
  )
}