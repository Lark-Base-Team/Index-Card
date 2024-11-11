import { dashboard } from "@lark-base-open/js-sdk";
import { useLayoutEffect, useEffect, useState } from "react";
import { ICustomConfig } from '@/common/type';
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

function updateTheme(theme: string) {
  document.body.setAttribute('theme-mode', theme);
}

export function useTheme() {
  const [bgColor, setBgColor] = useState('#ffffff');
  useLayoutEffect(() => {
    dashboard.getTheme().then((res) => {
      setBgColor(res.chartBgColor);
      updateTheme(res.theme.toLocaleLowerCase());
    })

    dashboard.onThemeChange((res) => {
      setBgColor(res.data.chartBgColor);
      updateTheme(res.data.theme.toLocaleLowerCase());
    })
  }, []);

  return {
    bgColor
  }
}

/** 配置用户配置 */
const updateConfig = (config: ICustomConfig, setConfig: (config: ICustomConfig) => void) => {
  if (config) {
    setConfig(config as ICustomConfig);
    setTimeout(() => {
      // 预留3s给浏览器进行渲染，3s后告知服务端可以进行截图了
      dashboard.setRendered();
    }, 3000);
  }
}

/** 初始化、更新config */
export async function useConfig(setConfig: (config: ICustomConfig) => void) {
  useEffect(() => {
    const offConfigChange = dashboard.onConfigChange((res) => {
      // 监听配置变化，协同修改配置
      const config = res.data.customConfig as unknown as ICustomConfig;
      updateConfig(config, setConfig);
    });
    return () => {
      offConfigChange();
    }
  }, []);
}


export function useSetDayjsLocale() {
  const { i18n } = useTranslation();
  const setDayjsLocale = () => {
    if (i18n.language === 'zh') {
      dayjs.locale('zh-cn');
    } else {
      dayjs.locale('en-us');
    }
  };
  setDayjsLocale()

  return {
    i18nLanguage: i18n.language,
    setDayjsLocale
  }
}
