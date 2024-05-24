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
import type { IContentData } from '@/common/type';
import { useEffect } from 'react';

export default function App() {
    useTheme();

    const isCreate = dashboard.state === DashboardState.Create

    /** 是否配置/创建模式下 */
    const isConfig = dashboard.state === DashboardState.Config || isCreate;

    const [contentData, setContentData] = useState<IContentData>({
        color: 'primary', // 指标颜色
        number: '123', // 指标数据
        prefix: '$', // 前缀 
        suffix: '', // 前缀
        momYoyList: [
            {
                desc: '环比增长率',
                value: '10%',
                color: 'green',
                icon: 'IconTriangleUp',
            },
            {
                desc: '环比增长率',
                value: '-10%',
                color: 'red',
                icon: 'IconTriangleDown',
            },
            {
                desc: '周同比增长值',
                value: '0',
                color: 'black',
                icon: 'IconMinus',
            }
        ], // 同比、环比
    });

    // 展示态
    useEffect(() => {
        if (dashboard.state === DashboardState.View) {
            dashboard.getData().then(data => {
                // console.log(data, '<<<<<<<<111');
            });

            dashboard.onDataChange((data) => {
                // console.log(data, '<<<<<<<<222');
            })
        }
    }, [])

    return (
        <main className={classnames({
            'top-border': isConfig,
            'main': true,
        })}>
            <MainContent isConfig={isConfig} contentData={contentData} />
            {
                isConfig && <MainConfigPanel setContentData={setContentData} />
            }
        </main>
    )
}
