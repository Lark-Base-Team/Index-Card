import './App.css';
import { dashboard, DashboardState } from "@lark-base-open/js-sdk";
import './locales/i18n';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/en';
import { useTheme } from './hooks';
import classnames from 'classnames'
import MainContent from './components/MainContent';
import MainConfigPanel from './components/MainConfigPanel';

export default function App() {
    useTheme();

    const isCreate = dashboard.state === DashboardState.Create

    /** 是否配置/创建模式下 */
    const isConfig = dashboard.state === DashboardState.Config || isCreate;

    return (
        <main className={classnames({
            'main-top-border': isConfig,
            'main': true,
        })}>
            <MainContent />
            {
                isConfig && <MainConfigPanel />
            }
        </main>
    )
}
