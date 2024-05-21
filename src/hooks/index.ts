import { DashboardState, bitable, dashboard, base } from "@lark-base-open/js-sdk";
import { useLayoutEffect, useEffect } from "react";
import { IConfig, ITableItem } from '@/common/type';

function updateTheme(theme: string) {
  document.body.setAttribute('theme-mode', theme);
}

/** 跟随主题色变化 */
export function useTheme() {
  useLayoutEffect(() => {
    bitable.bridge.getTheme().then((theme: string) => {
      updateTheme(theme.toLocaleLowerCase())
    })

    bitable.bridge.onThemeChange((e) => {
      updateTheme(e.data.theme.toLocaleLowerCase())
    })
  }, [])
}

/** 配置用户配置 */
const updateConfig = (config: IConfig, setConfig: (config: IConfig) => void) => {
  if (config) {
    setConfig(config as IConfig);
    setTimeout(() => {
      // 预留3s给浏览器进行渲染，3s后告知服务端可以进行截图了
      dashboard.setRendered();
    }, 3000);
  }
}

/** 初始化、更新config */
export async function useConfig(setConfig: (config: IConfig) => void) {
  const isCreate = dashboard.state === DashboardState.Create
  useEffect(() => {
    if (isCreate) {
      return
    }
    // 初始化获取配置
    dashboard.getConfig().then((res) => {
      const config = res.customConfig as unknown as IConfig;
      updateConfig(config, setConfig)
    });
  }, []);


  useEffect(() => {
    const offConfigChange = dashboard.onConfigChange((res) => {
      // 监听配置变化，协同修改配置
      const config = res.data.customConfig as unknown as IConfig;
      updateConfig(config, setConfig);
    });
    return () => {
      offConfigChange();
    }
  }, []);
}