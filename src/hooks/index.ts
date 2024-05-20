import { DashboardState, bitable, dashboard } from "@lark-base-open/js-sdk";
import { useLayoutEffect, useEffect } from "react";

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



/** 初始化、更新config */
export function useConfig(updateConfig: (data: any) => void) {

  const isCreate = dashboard.state === DashboardState.Create
  useEffect(() => {
    if (isCreate) {
      return
    }
    // 初始化获取配置
    dashboard.getConfig().then(updateConfig);
  }, []);


  useEffect(() => {
    const offConfigChange = dashboard.onConfigChange((r) => {
      // 监听配置变化，协同修改配置
      updateConfig(r.data);
    });
    return () => {
      offConfigChange();
    }
  }, []);
}