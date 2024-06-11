import './App.scss';
import { dashboard, DashboardState } from "@lark-base-open/js-sdk";
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
import { getConfig, getPreviewData, renderMainContentData } from './utils';

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

    const renderMain = async () => {
        const config = await getConfig();
        const value = await getPreviewData(config);
        renderMainContentData(config, value, setRenderData);
    }

    // 展示态
    useEffect(() => {
        if (dashboard.state === DashboardState.View || dashboard.state === DashboardState.FullScreen) {
            renderMain();
            dashboard.onDataChange(async (data) => {
                renderMain()
            })
        }
    }, []);

    return (
        <main className={classnames(isConfig ? 'top-border' : '', 'main')}>
            <MainContent renderData={renderData} />
            {isConfig && <MainConfigPanel renderData={renderData} setRenderData={setRenderData} />}
        </main>
    )
}
