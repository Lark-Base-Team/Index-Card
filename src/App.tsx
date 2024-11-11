import '@lark-base-open/js-sdk/dist/style/dashboard.css';
import './App.scss';
import { dashboard, DashboardState } from "@lark-base-open/js-sdk";
import './locales/i18n';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import { useSetDayjsLocale, useTheme } from './hooks';
import classnames from 'classnames'
import MainContent from './components/MainContent';
import MainConfigPanel from './components/MainConfigPanel';
import { useState, useEffect, useRef } from 'react';
import type { IRenderData } from '@/common/type';
import { dataConditionFormatter, getConfig, getPreviewData, renderMainContentData } from './utils';

export default function App() {
    const { bgColor} = useTheme();

    /** 是否配置/创建模式下 */
    const isConfig = dashboard.state === DashboardState.Config || dashboard.state === DashboardState.Create;

    const [renderData, setRenderData] = useState<IRenderData>({
        color: 'primary', // 指标颜色
        value: '', // 指标数据
        prefix: '', // 前缀 
        suffix: '', // 前缀
        momYoyList: [], // 同比、环比
    });

    const mainDomRef = useRef<HTMLDivElement>(null);

    const renderMain = async () => {
        const { dataCondition, customConfig } = await getConfig();
        const newCustomConfig = dataConditionFormatter(dataCondition, customConfig);
        const value = await getPreviewData(newCustomConfig);
        renderMainContentData(newCustomConfig, value, setRenderData);
    }

    const dataChangeHandler = async () => {
        renderMain()
    }

    const { i18nLanguage, setDayjsLocale } = useSetDayjsLocale();

    // 展示态
    useEffect(() => {
        setDayjsLocale();
        if (dashboard.state === DashboardState.View || dashboard.state === DashboardState.FullScreen) {
            renderMain();
            dashboard.onDataChange(dataChangeHandler);
        }
    }, [i18nLanguage]);

    return (
        <main 
        className={classnames(isConfig ? 'top-border' : '', 'main')}
        style={{backgroundColor: bgColor}}
        ref={mainDomRef}>
            <MainContent renderData={renderData} mainDomRef={mainDomRef} />
            {isConfig && <MainConfigPanel setRenderData={setRenderData} />}
        </main>
    )
}
