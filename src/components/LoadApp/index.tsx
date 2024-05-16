import { ReactElement, useEffect, useState } from "react"
import { bitable } from "@lark-base-open/js-sdk"
import './style.css'
import '../../locales/i18n';
import { LocaleProvider } from '@douyinfe/semi-ui';
import dayjs from 'dayjs';
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';
import en_US from '@douyinfe/semi-ui/lib/es/locale/source/en_US';

dayjs.locale('en-us');

export default function LoadApp(props: { neverShowBanner?: boolean, children: ReactElement }): ReactElement {
  const [loadErr, setLoadErr] = useState(false);
  const [locale, setLocale] = useState(en_US);

  const TopBanner = <div>
    <div className='errTop'>
      After running the project, please get the webview address and paste it into the Base table "Extended Script" for use. See:&nbsp;
      <a target='_blank' href='https://bytedance.larkoffice.com/docx/IahqdOrCto2xAKxPV7Oc8gyenfg'>Development Guide</a>
    </div>
  </div>

  useEffect(() => {
    if (props.neverShowBanner) return;
    const timer = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(false)
      }, 3000)
    })
    Promise.race([bitable.bridge.getLanguage(), timer]).then((v) => {
      if (v === 'zh') {
        setLocale(zh_CN);
        dayjs.locale('zh-cn');
      }
      setLoadErr(false)
    }).catch(() => {
      setLoadErr(true)
    })
  }, [])


  if (props.neverShowBanner) {
    return props.children || null
  }

  return <div>
    {loadErr && TopBanner}
    <LocaleProvider locale={locale}>
      {props.children}
    </LocaleProvider>
  </div>
}

