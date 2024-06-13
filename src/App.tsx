import './App.scss';
import { dashboard, DashboardState, IDataCondition } from "@lark-base-open/js-sdk";
import './locales/i18n';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import { useTheme } from './hooks';
import classnames from 'classnames'
import MainContent from './components/MainContent';
import MainConfigPanel from './components/MainConfigPanel';
import { useState } from 'react';
import type { IRenderData } from '@/common/type';
import { useEffect } from 'react';
import { dataConditionFormatter, getConfig, getPreviewData, renderMainContentData } from './utils';



export default function App() {
    useTheme();

    /** 是否配置/创建模式下 */
    const isConfig = dashboard.state === DashboardState.Config || dashboard.state === DashboardState.Create;

    const [renderData, setRenderData] = useState<IRenderData>({
        color: 'primary', // 指标颜色
        value: '', // 指标数据
        prefix: '', // 前缀 
        suffix: '', // 前缀
        momYoyList: [], // 同比、环比
    });

    // 因接口限制，需要手动拼接多次saveConfig和getData会触发多次configChange事件
    // 又因为configChange事件不是立即触发，需要设置延时，在延时范围内不触发change事件，暂定3000毫秒
    // let delayedTime = 3000;
    // let dataChangeFlag = false;

    // const renderMain = async () => {
    //     const time = new Date().getTime();
    //     dataChangeFlag = true;
    //     const { dataCondition, customConfig } = await getConfig();
    //     const newCustomConfig = dataConditionFormatter(dataCondition, customConfig);
    //     const value = await getData(dataCondition, customConfig);
    //     renderMainContentData(newCustomConfig, value, setRenderData);
    //     console.log((new Date().getTime() - time) / 1000);
    //     setTimeout(() => {
    //         dataChangeFlag = false;
    //     }, delayedTime)
    // }

    // const dataChangeHandle = async () => {
    //     if (!dataChangeFlag) {
    //         renderMain()
    //     }
    // }

    const renderMain = async () => {
        const { dataCondition, customConfig } = await getConfig();
        const newCustomConfig = dataConditionFormatter(dataCondition, customConfig);
        const value = await getPreviewData(newCustomConfig);
        renderMainContentData(newCustomConfig, value, setRenderData);
    }

    const dataChangeHandle = async () => {
        renderMain()
    }

    // 展示态
    useEffect(() => {
        if (dashboard.state === DashboardState.View || dashboard.state === DashboardState.FullScreen) {
            renderMain();
            dashboard.onDataChange(dataChangeHandle);
        }
    }, []);

    return (
        <main className={classnames(isConfig ? 'top-border' : '', 'main')}>
            <MainContent renderData={renderData} />
            {isConfig && <MainConfigPanel setRenderData={setRenderData} />}
        </main>
    )
}
