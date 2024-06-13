import{i as B,B as ue,a as me,p as G,r as m,b,t as u,c,Z as V,G as D,Q as ye,I as ae,d as he,e as fe,f as Ce,g as pe,h as ve,j as ge,k as y,q as be,l as o,m as xe,u as z,s as T,n as j,o as q,S as p,v as R,D as K,w as oe,x as we,y as Ye,F as _,z as Me,A as Oe,C as J,T as Le,E as $e,H as Te,J as Ie,K as De,L as Ve,M as je,N as Re,O as ke,R as Ne}from"./vendor-CaXK23aT.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&t(f)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}})();const Se="Type & Data",Fe="Data Source",Ae="Data Range",Ge="Date Filtering",He="Date",Pe="Create Date",We="Modify Date",Ee="Basis",Qe="Range",Be="Today",_e="Yesterday",Ze="Current Week",Ue="Last Week",qe="Current Month",ze="Last Month",Ke="Current Quarter",Je="Last Quarter",Xe="Current Year",et="Last Year",tt="Last 7 Days",at="Last 14 Days",ot="Last 30 Days",nt="Last 365 Days",st="Last 3 Months",rt="Last 6 Months",lt="Statistical Methods",ct="Total Records Count",it="Field Value Count",dt="Number",ut="Currency",mt="Sum",yt="Average",ht="Max",ft="Min",Ct="MoM & YoY",pt="Add MoM & YoY",vt="Description",gt="Calculation Method",bt="MoM",xt="Week YoY",wt="Month YoY",Yt="Year YoY",Mt="Calculation Type",Ot="MoM Growth Rate",Lt="MoM Growth Value",$t="MoM Original Value",Tt="Week YoY Growth Value",It="Month YoY Growth Value",Dt="Year YoY Growth Value",Vt="Week YoY Original Value",jt="Month YoY Original Value",Rt="Year YoY Original Value",kt="Week YoY Growth Rate",Nt="Month YoY Growth Rate",St="Year YoY Growth Rate",Ft="Growth Value",At="Growth Rate",Gt="Difference Rate",Ht="Difference Value",Pt="Original Value",Wt="Custom Style",Et="Color",Qt="Icon Style",Bt="Index Data Format",_t="Decimal Places & Format",Zt="Number (Thousands Separator)",Ut="Percentage",qt="Per Mille",zt="Prefix",Kt="Suffix",Jt="Please enter a prefix",Xt="Please enter a suffix",ea="Please select a date field",ta="Only positive integers are allowed",aa="All Data",oa="Confirm",na={type_Date:Se,dataSource:Fe,dataRange:Ae,dateFiltering:Ge,date:He,createDate:Pe,ModifyDate:We,basis:Ee,range:Qe,today:Be,yesterday:_e,currentWeek:Ze,lastWeek:Ue,currentMonth:qe,lastMonth:ze,currentQuarter:Ke,lastQuarter:Je,currentYear:Xe,lastYear:et,last7Days:tt,last14Days:at,last30Days:ot,last365Days:nt,last3Months:st,last6Months:rt,statisticalMethods:lt,recordsTotal:ct,fieldValue:it,number:dt,currency:ut,sum:mt,average:yt,max:ht,min:ft,mom_yoy:Ct,addMom_Yoy:pt,description:vt,calculation:gt,mom:bt,weekYoy:xt,monthYoy:wt,yearYoy:Yt,calculationType:Mt,momGrowthRate:Ot,momGrowthValue:Lt,momOriginalValue:$t,weekYoyGrowthValue:Tt,monthYoyGrowthValue:It,yearYoyGrowthValue:Dt,weekYoyOriginalValue:Vt,monthYoyOriginalValue:jt,yearYoyOriginalValue:Rt,weekYoyGrowthRate:kt,monthYoyGrowthRate:Nt,yearYoyGrowthRate:St,growthValue:Ft,growthRate:At,differenceRate:Gt,differenceValue:Ht,originalValue:Pt,customStyle:Wt,color:Et,iconStyle:Qt,indexDataFormat:Bt,decimalPlaces_Format:_t,numberMillennials:Zt,percentage:Ut,millageRate:qt,prefix:zt,suffix:Kt,prefixPlaceholder:Jt,suffixPlaceholder:Xt,dataPlaceholder:ea,formatErrorMessage:ta,allData:aa,confirm:oa},sa="类型与数据",ra="数据源",la="数据范围",ca="日期筛选",ia="日期",da="创建日期",ua="修改日期",ma="依据",ya="范围",ha="今天",fa="昨天",Ca="本周",pa="上周",va="本月",ga="上月",ba="本季度",xa="上季度",wa="今年",Ya="去年",Ma="最近7天",Oa="最近14天",La="最近30天",$a="最近365天",Ta="最近3个月",Ia="最近6个月",Da="统计方式",Va="统计记录总数",ja="统计字段数值",Ra="数字",ka="货币",Na="求和",Sa="平均值",Fa="最大值",Aa="最小值",Ga="环同比",Ha="添加环同比",Pa="描述",Wa="计算方式",Ea="环比",Qa="周同比",Ba="月同比",_a="年同比",Za="计算类型",Ua="环比增长率",qa="环比增长值",za="环比原始值",Ka="周同比增长值",Ja="月同比增长值",Xa="年同比增长值",eo="周同比原始值",to="月同比原始值",ao="年同比原始值",oo="周同比增长率",no="月同比增长率",so="年同比增长率",ro="增长值",lo="增长率",co="差异率",io="差异值",uo="原始值",mo="自定义样式",yo="颜色",ho="图标样式",fo="指标数据格式",Co="小数位与格式",po="数字（千分位）",vo="百分比",go="千分比",bo="前缀",xo="后缀",wo="请输入前缀",Yo="请输入后缀",Mo="请选择日期字段",Oo="仅允许输入大于零的整数",Lo="全部数据",$o="确定",To={type_Date:sa,dataSource:ra,dataRange:la,dateFiltering:ca,date:ia,createDate:da,ModifyDate:ua,basis:ma,range:ya,today:ha,yesterday:fa,currentWeek:Ca,lastWeek:pa,currentMonth:va,lastMonth:ga,currentQuarter:ba,lastQuarter:xa,currentYear:wa,lastYear:Ya,last7Days:Ma,last14Days:Oa,last30Days:La,last365Days:$a,last3Months:Ta,last6Months:Ia,statisticalMethods:Da,recordsTotal:Va,fieldValue:ja,number:Ra,currency:ka,sum:Na,average:Sa,max:Fa,min:Aa,mom_yoy:Ga,addMom_Yoy:Ha,description:Pa,calculation:Wa,mom:Ea,weekYoy:Qa,monthYoy:Ba,yearYoy:_a,calculationType:Za,momGrowthRate:Ua,momGrowthValue:qa,momOriginalValue:za,weekYoyGrowthValue:Ka,monthYoyGrowthValue:Ja,yearYoyGrowthValue:Xa,weekYoyOriginalValue:eo,monthYoyOriginalValue:to,yearYoyOriginalValue:ao,weekYoyGrowthRate:oo,monthYoyGrowthRate:no,yearYoyGrowthRate:so,growthValue:ro,growthRate:lo,differenceRate:co,differenceValue:io,originalValue:uo,customStyle:mo,color:yo,iconStyle:ho,indexDataFormat:fo,decimalPlaces_Format:Co,numberMillennials:po,percentage:vo,millageRate:go,prefix:bo,suffix:xo,prefixPlaceholder:wo,suffixPlaceholder:Yo,dataPlaceholder:Mo,formatErrorMessage:Oo,allData:Lo,confirm:$o},Io="タイプとデータ",Do="データソース",Vo="データ範囲",jo="日付フィルタリング",Ro="日付",ko="作成日",No="更新日",So="根拠",Fo="範囲",Ao="今日",Go="昨日",Ho="今週",Po="先週",Wo="今月",Eo="先月",Qo="今四半期",Bo="前四半期",_o="今年",Zo="去年",Uo="過去7日間",qo="過去14日間",zo="過去30日間",Ko="過去365日間",Jo="過去3ヶ月",Xo="過去6ヶ月",en="統計手法",tn="総レコード数",an="フィールド数値の集計",on="数字",nn="通貨",sn="合計",rn="平均値",ln="最大値",cn="最小値",dn="環境比と同期比",un="追加環境比と同期比",mn="説明",yn="計算方法",hn="環境比",fn="週同期比",Cn="月同期比",pn="年同期比",vn="計算タイプ",gn="環境比成長率",bn="環境比成長値",xn="環境比原始値",wn="週同期比成長値",Yn="月同期比成長値",Mn="年同期比成長値",On="週同期比原始値",Ln="月同期比原始値",$n="年同期比原始値",Tn="週同期比成長率",In="月同期比成長率",Dn="年同期比成長率",Vn="成長値",jn="成長率",Rn="差異率",kn="差異値",Nn="原始値",Sn="カスタムスタイル",Fn="色",An="アイコンスタイル",Gn="指標データフォーマット",Hn="小数点以下の桁数とフォーマット",Pn="数字（千分位）",Wn="パーセンテージ",En="パーミレ（千分率）",Qn="接頭辞",Bn="接尾辞",_n="接頭辞を入力してください",Zn="接尾辞を入力してください",Un="日付フィールドを選択してください",qn="正の整数のみが許可されます",zn="全てのデータ",Kn="確定",Jn={type_Date:Io,dataSource:Do,dataRange:Vo,dateFiltering:jo,date:Ro,createDate:ko,ModifyDate:No,basis:So,range:Fo,today:Ao,yesterday:Go,currentWeek:Ho,lastWeek:Po,currentMonth:Wo,lastMonth:Eo,currentQuarter:Qo,lastQuarter:Bo,currentYear:_o,lastYear:Zo,last7Days:Uo,last14Days:qo,last30Days:zo,last365Days:Ko,last3Months:Jo,last6Months:Xo,statisticalMethods:en,recordsTotal:tn,fieldValue:an,number:on,currency:nn,sum:sn,average:rn,max:ln,min:cn,mom_yoy:dn,addMom_Yoy:un,description:mn,calculation:yn,mom:hn,weekYoy:fn,monthYoy:Cn,yearYoy:pn,calculationType:vn,momGrowthRate:gn,momGrowthValue:bn,momOriginalValue:xn,weekYoyGrowthValue:wn,monthYoyGrowthValue:Yn,yearYoyGrowthValue:Mn,weekYoyOriginalValue:On,monthYoyOriginalValue:Ln,yearYoyOriginalValue:$n,weekYoyGrowthRate:Tn,monthYoyGrowthRate:In,yearYoyGrowthRate:Dn,growthValue:Vn,growthRate:jn,differenceRate:Rn,differenceValue:kn,originalValue:Nn,customStyle:Sn,color:Fn,iconStyle:An,indexDataFormat:Gn,decimalPlaces_Format:Hn,numberMillennials:Pn,percentage:Wn,millageRate:En,prefix:Qn,suffix:Bn,prefixPlaceholder:_n,suffixPlaceholder:Zn,dataPlaceholder:Un,formatErrorMessage:qn,allData:zn,confirm:Kn},Xn={zh:{translation:To},en:{translation:na},ja:{translation:Jn}};B.use(ue).use(me).init({resources:Xn,fallbackLng:"en",interpolation:{escapeValue:!1}});G.bridge.getLanguage().then(e=>{B.language!==e&&B.changeLanguage(e)});function X(e){document.body.setAttribute("theme-mode",e)}function es(){m.useLayoutEffect(()=>{G.bridge.getTheme().then(e=>{X(e.toLocaleLowerCase())}),G.bridge.onThemeChange(e=>{X(e.data.theme.toLocaleLowerCase())})},[])}const ts=(e,n)=>{e&&(n(e),setTimeout(()=>{b.setRendered()},3e3))};async function as(e){m.useEffect(()=>{const n=b.onConfigChange(a=>{const t=a.data.customConfig;ts(t,e)});return()=>{n()}},[])}var i=(e=>(e.CurrentQuarter="CurrentQuarter",e.LastQuarter="LastQuarter",e.CurrentYear="CurrentYear",e.LastYear="LastYear",e.Last14Days="Last14Days",e.Last365Days="Last365Days",e.Last3Months="Last3Months",e.Last6Months="Last6Months",e))(i||{});const os=[{label:u("today"),value:c.Today},{label:u("yesterday"),value:c.Yesterday},{label:u("currentWeek"),value:c.CurrentWeek},{label:u("lastWeek"),value:c.LastWeek},{label:u("currentMonth"),value:c.CurrentMonth},{label:u("lastMonth"),value:c.LastMonth},{label:u("currentQuarter"),value:i.CurrentQuarter},{label:u("lastQuarter"),value:i.LastQuarter},{label:u("currentYear"),value:i.CurrentYear},{label:u("lastYear"),value:i.LastYear},{label:u("last7Days"),value:c.TheLastWeek},{label:u("last14Days"),value:i.Last14Days},{label:u("last30Days"),value:c.TheLastMonth},{label:u("last365Days"),value:i.Last365Days},{label:u("last3Months"),value:i.Last3Months},{label:u("last6Months"),value:i.Last6Months}],ns=[{label:u("recordsTotal"),value:"total"},{label:u("fieldValue"),value:"number"}],ss=[{label:u("sum"),value:"SUM"},{label:u("average"),value:"AVERAGE"},{label:u("max"),value:"MAX"},{label:u("min"),value:"MIN"}],A=[{label:u("mom"),value:"mom",disabled:!1},{label:u("weekYoy"),value:"yoyByWeek",disabled:!1},{label:u("monthYoy"),value:"yoyByMonth",disabled:!1},{label:u("yearYoy"),value:"yoyByYear",disabled:!1}],rs=[{label:u("differenceRate"),value:"differenceRate"},{label:u("differenceValue"),value:"differenceValue"},{label:u("originalValue"),value:"originalValue"}],ne=[{id:"1",upIcon:"IconTriangleUp",upIconColor:"green",downIcon:"IconTriangleDown",downIconColor:"red",constIcon:"IconMinus",constIconColor:"black"},{id:"2",upIcon:"IconFilledArrowUp",upIconColor:"green",downIcon:"IconFilledArrowDown",downIconColor:"red",constIcon:"IconMinus",constIconColor:"black"},{id:"3",upIcon:"IconArrowUpRight",upIconColor:"green",downIcon:"IconArrowDownRight",downIconColor:"red",constIcon:"IconMinus",constIconColor:"black"},{id:"4",upIcon:"IconTriangleUp",upIconColor:"red",downIcon:"IconTriangleDown",downIconColor:"green",constIcon:"IconMinus",constIconColor:"black"},{id:"5",upIcon:"IconFilledArrowUp",upIconColor:"red",downIcon:"IconFilledArrowDown",downIconColor:"green",constIcon:"IconMinus",constIconColor:"black"},{id:"6",upIcon:"IconArrowUpRight",upIconColor:"red",downIcon:"IconArrowDownRight",downIconColor:"green",constIcon:"IconMinus",constIconColor:"black"}],ls={IconMinus:ae,IconTriangleUp:he,IconTriangleDown:fe,IconFilledArrowUp:Ce,IconFilledArrowDown:pe,IconArrowUpRight:ve,IconArrowDownRight:ge},cs=[{label:u("numberMillennials"),value:"numberMillennials"},{label:u("number"),value:"number"},{label:u("percentage"),value:"percentage"},{label:u("millageRate"),value:"millageRate"}],is={tableId:"",tableRange:{type:V.ALL},dateTypeFieldId:"",dateTypeFieldType:D.DateTime,dateRange:c.Today,statisticalType:"total",numberOrCurrencyFieldId:"",statisticalCalcType:ye.SUM,momOrYoy:[{momOrYoyDesc:u("momGrowthRate"),manualSetDesc:!1,momOrYoyCalcMethod:"mom",momOrYoyCalcType:"differenceRate"}],color:"primary",iconStyleId:"1",decimal:0,numberFormat:"number",prefix:"",suffix:""};y.extend(be);const ds=e=>e.replace(/\B(?=(\d{3})+$)/g,","),Z=(e,n,a="0.8vmax")=>{const t=ls[e];return n?o.jsx(t,{style:{fontSize:n,marginRight:a}}):o.jsx(t,{size:"small",style:{marginRight:a}})},us=(e,n,a)=>{if(n==="numberMillennials"){const t=e.toFixed(a).split("."),r=ds(t[0]);return t.length>1?`${r}.${t[1]}`:r}else return n==="number"?e.toFixed(a):n==="percentage"?(e*100).toFixed(a)+"%":(e*1e3).toFixed(a)+"‰"},ee=e=>[c.Today,c.Yesterday].includes(e)?A:[c.CurrentWeek,c.LastWeek,c.TheLastWeek,i.Last14Days,c.TheLastMonth,i.Last365Days,i.Last3Months,i.Last6Months].includes(e)?A.map(s=>({...s,disabled:s.value!=="mom"})):[i.CurrentQuarter,i.LastQuarter,i.CurrentYear,i.LastYear].includes(e)?A.map(s=>({...s,disabled:s.value==="yoyByWeek"||s.value==="yoyByMonth"})):[c.CurrentMonth,c.LastMonth].includes(e)?A.map(s=>({...s,disabled:s.value==="yoyByWeek"})):[],se=e=>({[c.Today]:()=>{const a=y().startOf("day").valueOf(),t=y().endOf("day").valueOf();return{startTime:a,endTime:t}},[c.Yesterday]:()=>{const a=y().subtract(1,"day").startOf("day").valueOf(),t=y().subtract(1,"day").endOf("day").valueOf();return{startTime:a,endTime:t}},[c.CurrentWeek]:()=>{const a=y().startOf("week").valueOf(),t=y().endOf("week").valueOf();return{startTime:a,endTime:t}},[c.LastWeek]:()=>{const a=y().startOf("week").subtract(1,"week").valueOf(),t=y().endOf("week").subtract(1,"week").valueOf();return{startTime:a,endTime:t}},[c.CurrentMonth]:()=>{const a=y().startOf("month").valueOf(),t=y().endOf("month").valueOf();return{startTime:a,endTime:t}},[c.LastMonth]:()=>{const a=y().startOf("month").subtract(1,"month").valueOf(),t=y().endOf("month").subtract(1,"month").valueOf();return{startTime:a,endTime:t}},[i.CurrentQuarter]:()=>{const a=y().startOf("quarter").valueOf(),t=y().endOf("quarter").valueOf();return{startTime:a,endTime:t}},[i.LastQuarter]:()=>{const a=y().startOf("quarter").subtract(1,"quarter").valueOf(),t=y().endOf("quarter").subtract(1,"quarter").valueOf();return{startTime:a,endTime:t}},[i.CurrentYear]:()=>{const a=y().startOf("year").valueOf(),t=y().endOf("year").valueOf();return{startTime:a,endTime:t}},[i.LastYear]:()=>{const a=y().startOf("year").subtract(1,"year").valueOf(),t=y().endOf("year").subtract(1,"year").valueOf();return{startTime:a,endTime:t}},[c.TheLastWeek]:()=>{const a=y().endOf("day").subtract(7,"day").valueOf(),t=y().endOf("day").valueOf();return{startTime:a,endTime:t}},[i.Last14Days]:()=>{const a=y().endOf("day").subtract(14,"day").valueOf(),t=y().endOf("day").valueOf();return{startTime:a,endTime:t}},[c.TheLastMonth]:()=>{const a=y().endOf("day").subtract(30,"day").valueOf(),t=y().endOf("day").valueOf();return{startTime:a,endTime:t}},[i.Last365Days]:()=>{const a=y().endOf("day").subtract(365,"day").valueOf(),t=y().endOf("day").valueOf();return{startTime:a,endTime:t}},[i.Last3Months]:()=>{const a=y().endOf("day").subtract(3,"month").valueOf(),t=y().endOf("day").valueOf();return{startTime:a,endTime:t}},[i.Last6Months]:()=>{const a=y().endOf("day").subtract(6,"month").valueOf(),t=y().endOf("day").valueOf();return{startTime:a,endTime:t}}})[e](),ms=e=>{let n=1;return[c.Today,c.Yesterday,c.CurrentWeek,c.LastWeek,c.CurrentMonth,c.LastMonth,i.CurrentQuarter,i.LastQuarter,i.CurrentYear,i.LastYear].includes(e)&&(n=1),e===c.TheLastWeek&&(n=7),e===i.Last14Days&&(n=14),e===c.TheLastMonth&&(n=30),e===i.Last365Days&&(n=365),e===i.Last3Months&&(n=3),e===i.Last6Months&&(n=6),n},ys=(e,n)=>{let a="day";[c.Today,c.Yesterday,c.TheLastWeek,i.Last14Days,c.TheLastMonth,i.Last365Days].includes(e)&&n==="mom"&&(a="day");const r=[c.CurrentWeek,c.LastWeek],s=[c.Today,c.Yesterday];(r.includes(e)&&n==="mom"||s.includes(e)&&n==="yoyByWeek")&&(a="week");const f=[c.CurrentMonth,c.LastMonth,i.Last3Months,i.Last6Months],h=[c.Today,c.Yesterday,c.CurrentMonth,c.LastMonth];(f.includes(e)&&n==="mom"||h.includes(e)&&n==="yoyByMonth")&&(a="month"),[i.CurrentQuarter,i.LastQuarter].includes(e)&&n==="mom"&&(a="quarter");const M=[i.CurrentYear,i.LastYear],w=[c.Today,c.Yesterday,c.CurrentMonth,c.LastMonth,i.CurrentQuarter,i.LastQuarter,i.CurrentYear,i.LastYear];return(M.includes(e)&&n==="mom"||w.includes(e)&&n==="yoyByYear")&&(a="year"),a},hs=(e,n)=>{const a=ms(e),t=ys(e,n),{startTime:r,endTime:s}=se(e),f=y(r).subtract(a,t).valueOf(),h=y(s).subtract(a,t).valueOf();return{startTime:f,endTime:h}},fs=(e,n,a,t)=>{const r={},s=ne.find(f=>f.id===e);return t===0&&n==="differenceRate"||a===t?(r.icon=s.constIcon,r.color=s.constIconColor):a<t?(r.icon=s.downIcon,r.color=s.downIconColor):(r.icon=s.upIcon,r.color=s.upIconColor),r},Cs=(e,n,a)=>{let t="";if(e==="differenceRate"){const r=Math.abs((n-a)/a)*100;t=a!==0?`${r.toFixed(0)}%`:""}else if(e==="differenceValue"){const r=Math.abs(n-a);t=r?`${r}`:""}else t=`${a}`;return t},re=async()=>{const e=await b.getConfig(),n=e.dataConditions[0],a=e.customConfig;return{dataCondition:n,customConfig:a}},le=e=>{const a=[{dateRange:e.dateRange},...e.momOrYoy].map((s,f)=>{let h,v;if(f===0){const w=se(e.dateRange);h=w.startTime,v=w.endTime}else{const w={...s},I=hs(e.dateRange,w.momOrYoyCalcMethod);h=I.startTime,v=I.endTime}return v=y(v).add(1,"day").startOf("day").valueOf(),{...e.tableRange,filterInfo:{conjunction:xe.And,conditions:[{fieldId:e.dateTypeFieldId,value:h,fieldType:e.dateTypeFieldType,operator:z.IsGreater},{fieldId:e.dateTypeFieldId,value:v,fieldType:e.dateTypeFieldType,operator:z.IsLess}]}}}),t=[{fieldId:e.numberOrCurrencyFieldId,rollup:e.statisticalCalcType}];return a.map(s=>({tableId:e.tableId,dataRange:s,series:e.statisticalType==="number"?t:"COUNTA"}))},ce=(e,n)=>{const a={...n};if(a.tableId=e.tableId,a.tableRange=e.dataRange,a.statisticalType==="number"){const t=e.series;a.numberOrCurrencyFieldId=t[0].fieldId,a.statisticalCalcType=t[0].rollup}return a},ie=async e=>{var t;const n=le(e),a=[];for(const r of n){const f=(t=(await b.getPreviewData(r))[1])==null?void 0:t.map(h=>h.value);a.push(f!=null&&f.length?f[0]:0)}return a},ps=(e,n)=>{let a={mom:u("mom"),yoyByWeek:u("weekYoy"),yoyByMonth:u("monthYoy"),yoyByYear:u("yearYoy")},t={differenceRate:u("growthRate"),differenceValue:u("growthValue"),originalValue:u("originalValue")};return`${a[e]}${t[n]}`},vs=async(e,n)=>{const a=n[0],t=n.slice(1),r=e.momOrYoy.map((f,h)=>{const v=t[h],M=fs(e.iconStyleId,f.momOrYoyCalcType,a,v);return{desc:f.momOrYoyDesc,calcType:f.momOrYoyCalcType,value:Cs(f.momOrYoyCalcType,a,v),color:M.color,icon:M.icon}});return{color:e.color,value:us(a,e.numberFormat,e.decimal),prefix:e.prefix,suffix:e.suffix,momYoyList:r}},U=async(e,n,a)=>{if(n.filter(r=>r!==void 0).length<=1)return;const t=await vs(e,n);a(t)},de=[{name:"primary",value:"var(--ccm-chart-N700)"},{name:"blue",value:"var(--ccm-chart-B500)"},{name:"Purple",value:"var(--ccm-chart-I500)"},{name:"green",value:"var(--ccm-chart-G500)"},{name:"cyan",value:"var(--ccm-chart-W500)"},{name:"yellow",value:"var(--ccm-chart-Y500)"},{name:"orange",value:"var(--ccm-chart-O500)"},{name:"red",value:"var(--ccm-chart-R400)"}];function gs(e){return o.jsx("div",{className:"color-picker",children:de.map(({name:n,value:a})=>o.jsx("div",{onClick:()=>{e.onChange(n)},style:{borderColor:e.name===n?a:"transparent"},className:"color-picker-color-container",children:o.jsx("div",{style:{backgroundColor:a},className:"color-picker-color",children:e.name===n?o.jsx("div",{className:"selected-icon-container"}):null})},n))})}function bs({renderData:e}){var a;const n=b.state===T.Config||b.state===T.Create;return o.jsx("div",{className:"main-content",children:o.jsxs("div",{className:j({"main-content-warp":!0,"is-config":n}),children:[o.jsx("div",{className:"main-content-number text-hidden",style:{color:(a=de.find(t=>t.name===e.color))==null?void 0:a.value},children:`${e.prefix}${e.value}${e.suffix}`}),e.momYoyList.map((t,r)=>o.jsxs("div",{className:"main-content-description text-hidden",children:[o.jsx("div",{className:"description-text",children:t.desc}),o.jsxs("div",{className:j("description-index",t.color),children:[t.calcType==="originalValue"?null:Z(t.icon,"1.8vmax",t.value?void 0:"0"),o.jsx("div",{className:"description-index-number",children:t.value})]})]},r))]})})}const te=e=>m.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M1.33203 2.66634C1.33203 1.92996 1.92898 1.33301 2.66536 1.33301H13.332C14.0684 1.33301 14.6654 1.92996 14.6654 2.66634V13.333C14.6654 14.0694 14.0684 14.6663 13.332 14.6663H2.66536C1.92899 14.6663 1.33203 14.0694 1.33203 13.333V2.66634ZM2.66536 2.66634V13.333H13.332V2.66634H2.66536Z",fill:"#646A73"}),m.createElement("path",{d:"M8.33203 4.66634C7.96384 4.66634 7.66536 4.96482 7.66536 5.33301C7.66536 5.7012 7.96384 5.99967 8.33203 5.99967H11.332C11.7002 5.99967 11.9987 5.7012 11.9987 5.33301C11.9987 4.96482 11.7002 4.66634 11.332 4.66634H8.33203Z",fill:"#646A73"}),m.createElement("path",{d:"M3.9987 5.33301C3.9987 4.96482 4.29718 4.66634 4.66536 4.66634H5.9987C6.36689 4.66634 6.66536 4.96482 6.66536 5.33301C6.66536 5.7012 6.36689 5.99967 5.9987 5.99967H4.66536C4.29717 5.99967 3.9987 5.7012 3.9987 5.33301Z",fill:"#646A73"}),m.createElement("path",{d:"M8.33203 7.33301C7.96384 7.33301 7.66536 7.63148 7.66536 7.99967C7.66536 8.36786 7.96384 8.66634 8.33203 8.66634H11.332C11.7002 8.66634 11.9987 8.36786 11.9987 7.99967C11.9987 7.63148 11.7002 7.33301 11.332 7.33301H8.33203Z",fill:"#646A73"}),m.createElement("path",{d:"M3.9987 7.99967C3.9987 7.63148 4.29718 7.33301 4.66536 7.33301H5.9987C6.36689 7.33301 6.66536 7.63148 6.66536 7.99967C6.66536 8.36786 6.36689 8.66634 5.9987 8.66634H4.66536C4.29717 8.66634 3.9987 8.36786 3.9987 7.99967Z",fill:"#646A73"}),m.createElement("path",{d:"M8.33203 9.99967C7.96384 9.99967 7.66536 10.2982 7.66536 10.6663C7.66536 11.0345 7.96384 11.333 8.33203 11.333H11.332C11.7002 11.333 11.9987 11.0345 11.9987 10.6663C11.9987 10.2982 11.7002 9.99967 11.332 9.99967H8.33203Z",fill:"#646A73"}),m.createElement("path",{d:"M3.9987 10.6663C3.9987 10.2982 4.29718 9.99967 4.66536 9.99967H5.9987C6.36689 9.99967 6.66536 10.2982 6.66536 10.6663C6.66536 11.0345 6.36689 11.333 5.9987 11.333H4.66536C4.29717 11.333 3.9987 11.0345 3.9987 10.6663Z",fill:"#646A73"})),xs=e=>m.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M5.85044 1.42649C6.21505 1.47773 6.46908 1.81485 6.41784 2.17945L6.16192 4.00039H10.8155L11.0975 1.99389C11.1487 1.62928 11.4858 1.37525 11.8504 1.42649C12.215 1.47773 12.4691 1.81485 12.4178 2.17945L12.1619 4.00039H14.668C15.0362 4.00039 15.3346 4.29887 15.3346 4.66706C15.3346 5.03525 15.0362 5.33373 14.668 5.33373H11.9745L11.3187 10.0004H13.3346C13.7028 10.0004 14.0013 10.2989 14.0013 10.6671C14.0013 11.0353 13.7028 11.3337 13.3346 11.3337H11.1313L10.7478 14.0627C10.6965 14.4273 10.3594 14.6813 9.9948 14.6301C9.63019 14.5788 9.37616 14.2417 9.4274 13.8771L9.78485 11.3337H5.13129L4.74776 14.0627C4.69652 14.4273 4.35941 14.6813 3.9948 14.6301C3.63019 14.5788 3.37616 14.2417 3.4274 13.8771L3.78485 11.3337H1.33464C0.966446 11.3337 0.667969 11.0353 0.667969 10.6671C0.667969 10.2989 0.966446 10.0004 1.33464 10.0004H3.97224L4.6281 5.33373H2.66797C2.29978 5.33373 2.0013 5.03525 2.0013 4.66706C2.0013 4.29887 2.29978 4.00039 2.66797 4.00039H4.81548L5.09748 1.99389C5.14872 1.62928 5.48583 1.37525 5.85044 1.42649ZM9.97224 10.0004L10.6281 5.33373H5.97453L5.31868 10.0004H9.97224Z",fill:"#646A73"})),ws=e=>m.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M4.66536 1.3335C5.03355 1.3335 5.33203 1.63197 5.33203 2.00016H10.6654C10.6654 1.63197 10.9638 1.3335 11.332 1.3335C11.7002 1.3335 11.9987 1.63197 11.9987 2.00016C12.2748 2.00016 12.8119 2.00016 13.3321 2.00016C14.0684 2.00016 14.6654 2.59712 14.6654 3.3335V13.3335C14.6654 14.0699 14.0684 14.6668 13.332 14.6668H2.66536C1.92899 14.6668 1.33203 14.0699 1.33203 13.3335L1.33203 3.3335C1.33203 2.59712 1.92896 2.00016 2.66534 2.00016C3.18554 2.00016 3.72257 2.00016 3.9987 2.00016C3.9987 1.63197 4.29717 1.3335 4.66536 1.3335ZM10.6654 3.3335H5.33203C5.33203 3.70169 5.03355 4.00016 4.66536 4.00016C4.29717 4.00016 3.9987 3.70169 3.9987 3.3335H2.66536V13.3335H13.332V3.3335H11.9987C11.9987 3.70169 11.7002 4.00016 11.332 4.00016C10.9638 4.00016 10.6654 3.70169 10.6654 3.3335ZM5.9987 10.0002C5.9987 9.63197 5.70022 9.3335 5.33203 9.3335H4.66536C4.29717 9.3335 3.9987 9.63197 3.9987 10.0002V10.6668C3.9987 11.035 4.29717 11.3335 4.66536 11.3335H5.33203C5.70022 11.3335 5.9987 11.035 5.9987 10.6668V10.0002ZM6.9987 6.66683C6.9987 6.29864 7.29718 6.00016 7.66536 6.00016H8.33203C8.70022 6.00016 8.9987 6.29864 8.9987 6.66683V7.3335C8.9987 7.70169 8.70022 8.00016 8.33203 8.00016H7.66536C7.29717 8.00016 6.9987 7.70169 6.9987 7.3335V6.66683ZM8.9987 10.0002C8.9987 9.63197 8.70022 9.3335 8.33203 9.3335H7.66536C7.29717 9.3335 6.9987 9.63197 6.9987 10.0002V10.6668C6.9987 11.035 7.29718 11.3335 7.66536 11.3335H8.33203C8.70022 11.3335 8.9987 11.035 8.9987 10.6668V10.0002ZM9.9987 10.0002C9.9987 9.63197 10.2972 9.3335 10.6654 9.3335H11.332C11.7002 9.3335 11.9987 9.63197 11.9987 10.0002V10.6668C11.9987 11.035 11.7002 11.3335 11.332 11.3335H10.6654C10.2972 11.3335 9.9987 11.035 9.9987 10.6668V10.0002ZM11.9987 6.66683C11.9987 6.29864 11.7002 6.00016 11.332 6.00016H10.6654C10.2972 6.00016 9.9987 6.29864 9.9987 6.66683V7.3335C9.9987 7.70169 10.2972 8.00016 10.6654 8.00016H11.332C11.7002 8.00016 11.9987 7.70169 11.9987 7.3335V6.66683Z",fill:"#646A73"})),Ys=e=>m.createElement("svg",{width:16,height:17,viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},m.createElement("path",{d:"M5.33203 2.49967C5.33203 2.13148 5.03355 1.83301 4.66536 1.83301C4.29717 1.83301 3.9987 2.13148 3.9987 2.49967H2.66534C1.92896 2.49967 1.33203 3.09663 1.33203 3.83301V13.833C1.33203 14.5694 1.92899 15.1663 2.66536 15.1663H7.83512C7.51362 14.7653 7.24887 14.3168 7.05304 13.833H2.66536V3.83301H3.9987C3.9987 4.2012 4.29717 4.49967 4.66536 4.49967C5.03355 4.49967 5.33203 4.2012 5.33203 3.83301H10.6654C10.6654 4.2012 10.9638 4.49967 11.332 4.49967C11.7002 4.49967 11.9987 4.2012 11.9987 3.83301H13.332V6.6677C13.8051 6.78945 14.2527 6.97446 14.6654 7.21318V3.83301C14.6654 3.09663 14.0684 2.49967 13.3321 2.49967H11.9987C11.9987 2.13148 11.7002 1.83301 11.332 1.83301C10.9638 1.83301 10.6654 2.13148 10.6654 2.49967H5.33203Z",fill:"#646A73"}),m.createElement("path",{d:"M5.33203 9.16634C5.70022 9.16634 5.9987 9.46482 5.9987 9.83301V10.4997C5.9987 10.8679 5.70022 11.1663 5.33203 11.1663H4.66536C4.29717 11.1663 3.9987 10.8679 3.9987 10.4997V9.83301C3.9987 9.46482 4.29717 9.16634 4.66536 9.16634H5.33203Z",fill:"#646A73"}),m.createElement("path",{d:"M4.66536 5.83301C4.29718 5.83301 3.9987 6.13148 3.9987 6.49967V7.16634C3.9987 7.53453 4.29717 7.83301 4.66536 7.83301H5.33203C5.70022 7.83301 5.9987 7.53453 5.9987 7.16634V6.49967C5.9987 6.13148 5.70022 5.83301 5.33203 5.83301H4.66536Z",fill:"#646A73"}),m.createElement("path",{d:"M11.332 10.4997C11.332 10.1315 11.6305 9.83301 11.9987 9.83301C12.3669 9.83301 12.6654 10.1315 12.6654 10.4997V11.1663H13.332C13.7002 11.1663 13.9987 11.4648 13.9987 11.833C13.9987 12.2012 13.7002 12.4997 13.332 12.4997H11.9987C11.6305 12.4997 11.332 12.2012 11.332 11.833V10.4997Z",fill:"#646A73"}),m.createElement("path",{d:"M11.9987 15.833C14.2078 15.833 15.9987 14.0421 15.9987 11.833C15.9987 9.62387 14.2078 7.83301 11.9987 7.83301C9.78956 7.83301 7.9987 9.62387 7.9987 11.833C7.9987 14.0421 9.78956 15.833 11.9987 15.833ZM11.9987 14.4997C10.5259 14.4997 9.33203 13.3058 9.33203 11.833C9.33203 10.3602 10.5259 9.16634 11.9987 9.16634C13.4715 9.16634 14.6654 10.3602 14.6654 11.833C14.6654 13.3058 13.4715 14.4997 11.9987 14.4997Z",fill:"#646A73"}),m.createElement("path",{d:"M9.33203 6.49967C9.33203 6.13148 9.03355 5.83301 8.66536 5.83301H7.9987C7.63051 5.83301 7.33203 6.13148 7.33203 6.49967V7.16634C7.33203 7.53453 7.63051 7.83301 7.9987 7.83301H8.66536C9.03356 7.83301 9.33203 7.53453 9.33203 7.16634V6.49967Z",fill:"#646A73"}));function Ms({config:e,setConfig:n,tableList:a,tableRangeList:t,dateTypeList:r,numberOrCurrencyList:s,setData:f}){const{t:h}=q(),v=e.tableRange.type===V.ALL?"ALL":e.tableRange.viewId,[M,w]=m.useState(v),[I,H]=m.useState(ee(e.dateRange)),P=async l=>{e.tableId=l,e.tableRange={type:V.ALL},w("ALL"),f(e)},k=async l=>{w(l);let C;l==="ALL"?C={type:V.ALL}:C=t.find(d=>d.viewId===l),n({...e,tableRange:C})},L=(l,C)=>{var d;if(l==="dateTypeFieldId"){const x=(d=r.find(g=>g.fieldId===C))==null?void 0:d.fieldType;n({...e,[l]:C,dateTypeFieldType:x})}n({...e,[l]:C})},N=l=>{H(ee(l));const C=e.momOrYoy.map(d=>(d.momOrYoyCalcMethod="mom",d));n({...e,dateRange:l,momOrYoy:C})},$=(l,C,d,x)=>{l={...l,[C]:d},C==="momOrYoyDesc"&&(l.manualSetDesc=!0);const{manualSetDesc:g,momOrYoyCalcMethod:Y,momOrYoyCalcType:O}=l;g||(l.momOrYoyDesc=ps(Y,O)),e.momOrYoy[x]=l,n({...e})},S=m.useRef(null),W=()=>{const l={momOrYoyDesc:h("momGrowthRate"),manualSetDesc:!1,momOrYoyCalcMethod:"mom",momOrYoyCalcType:"differenceRate"};e.momOrYoy.push(l),n({...e}),setTimeout(()=>{var C;(C=S.current)==null||C.scrollIntoView({behavior:"smooth"})},0)},E=l=>{e.momOrYoy.splice(l,1),n({...e})};return o.jsxs("div",{className:"form-main",children:[o.jsx("div",{className:"form-title",children:h("dataSource")}),o.jsx("div",{className:"form-item",children:o.jsx(p,{prefix:o.jsx(R,{svg:o.jsx(te,{})}),optionList:a,value:e.tableId,onChange:P})}),o.jsx("div",{className:"form-title",children:h("dataRange")}),o.jsx("div",{className:"form-item",children:o.jsx(p,{prefix:o.jsx(R,{svg:o.jsx(te,{})}),value:M,onChange:k,children:t.map(l=>{let C={...l};return l.type===V.ALL&&(C.viewName=h("allData"),C.viewId="ALL"),C}).map(l=>o.jsx(p.Option,{value:l.viewId,children:l.viewName},l.viewId))})}),o.jsx(K,{style:{borderColor:"var(--divider)",marginTop:"12px"}}),o.jsx("div",{className:"form-title",children:h("dateFiltering")}),o.jsxs("div",{className:"form-item",children:[o.jsx("div",{className:"form-subTitle",children:h("basis")}),o.jsx(p,{placeholder:h("dataPlaceholder"),prefix:o.jsx(R,{svg:o.jsx(ws,{})}),value:e.dateTypeFieldId,onChange:l=>{L("dateTypeFieldId",l)},children:r.map(l=>o.jsx(p.Option,{value:l.fieldId,children:l.fieldName},l.fieldId))}),o.jsxs("div",{className:"form-item",children:[o.jsx("div",{className:"form-subTitle",children:h("range")}),o.jsx(p,{optionList:os,prefix:o.jsx(R,{svg:o.jsx(Ys,{})}),value:e.dateRange,onChange:N})]})]}),o.jsx("div",{className:"form-title",children:h("statisticalMethods")}),o.jsx("div",{className:"form-item",children:o.jsx(p,{optionList:ns,value:e.statisticalType,onChange:l=>{L("statisticalType",l)}})}),e.statisticalType==="number"&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"form-item noBorder",children:o.jsx(p,{optionList:ss,value:e.statisticalCalcType,onChange:l=>L("statisticalCalcType",l)})}),o.jsx("div",{className:"form-item",children:o.jsx(p,{prefix:o.jsx(R,{svg:o.jsx(xs,{})}),value:e.numberOrCurrencyFieldId,onChange:l=>{L("numberOrCurrencyFieldId",l)},children:s.map(l=>o.jsx(p.Option,{value:l.fieldId,children:l.fieldName},l.fieldId))})})]}),o.jsx(K,{style:{borderColor:"var(--divider)",margin:"12px 0 20px 0"}}),o.jsxs("div",{className:"form-title",children:[o.jsx("span",{children:h("mom_yoy")}),o.jsx(oe,{disabled:e.momOrYoy.length>=4,theme:"borderless",icon:o.jsx(we,{size:"small"}),style:{fontWeight:"normal"},onClick:W,children:h("addMom_Yoy")})]}),e.momOrYoy&&e.momOrYoy.map((l,C)=>o.jsxs("div",{className:"form-item bg-grey",children:[e.momOrYoy.length>1&&o.jsx("div",{className:"icon-delete",onClick:()=>{E(C)},children:o.jsx(Ye,{size:"small"})}),o.jsx("div",{className:"form-subTitle",children:h("description")}),o.jsx(_,{value:l.momOrYoyDesc,onChange:d=>{$(l,"momOrYoyDesc",d,C)}}),o.jsx("div",{className:"form-subTitle",children:h("calculation")}),o.jsx(p,{position:"top",optionList:I,value:l.momOrYoyCalcMethod,onChange:d=>$(l,"momOrYoyCalcMethod",d,C)}),o.jsx("div",{className:"form-subTitle",children:h("calculationType")}),o.jsx(p,{position:"top",optionList:rs,value:l.momOrYoyCalcType,onChange:d=>$(l,"momOrYoyCalcType",d,C)}),o.jsx("div",{ref:S})]},C))]})}function Os({config:e,setConfig:n}){const{t:a}=q(),t=(s,f)=>{n({...e,[s]:f})},r=s=>`${s}`.replace(/\D/g,"");return o.jsxs("div",{className:"form-main",children:[o.jsx("div",{className:"form-title",children:a("color")}),o.jsx("div",{className:"form-item",style:{margin:"6px 0 18px 0"},children:o.jsx(gs,{onChange:s=>{t("color",s)},name:e.color})}),o.jsx("div",{className:"form-title",children:a("iconStyle")}),o.jsx("div",{className:"form-item",children:o.jsx(p,{value:e.iconStyleId,onChange:s=>{t("iconStyleId",s)},children:ne.map(s=>o.jsx(p.Option,{value:s.id,children:o.jsxs("div",{className:"index-icon",children:[o.jsxs("div",{className:j("index-icon-item",s.upIconColor),children:[Z(s.upIcon),o.jsx("div",{className:"number",children:"10"})]}),o.jsxs("div",{className:j("index-icon-item",s.constIconColor),children:[o.jsx(ae,{size:"small"}),o.jsx("div",{className:"number",children:"0"})]}),o.jsxs("div",{className:j("index-icon-item",s.downIconColor),children:[Z(s.downIcon),o.jsx("div",{className:"number",children:"10"})]})]})},s.id))})}),o.jsx("div",{className:"form-title",children:a("indexDataFormat")}),o.jsxs("div",{className:"form-item",children:[o.jsx("div",{className:"form-subTitle",children:a("decimalPlaces_Format")}),o.jsxs("div",{className:"flex-between",children:[o.jsx(Me,{style:{marginRight:"10px",flex:1},value:e.decimal,formatter:r,onNumberChange:s=>{t("decimal",s)},min:0,max:5}),o.jsx(p,{value:e.numberFormat,style:{flex:1},onChange:s=>{t("numberFormat",s)},children:cs.map(s=>o.jsx(p.Option,{value:s.value,children:s.label},s.value))})]})]}),o.jsxs("div",{className:"flex-between",children:[o.jsxs("div",{className:"form-item",style:{marginRight:"10px"},children:[o.jsx("div",{className:"form-subTitle",children:a("prefix")}),o.jsx(_,{value:e.prefix,placeholder:a("prefixPlaceholder"),onChange:s=>{t("prefix",s)}})]}),o.jsxs("div",{className:"form-item",children:[o.jsx("div",{className:"form-subTitle",children:a("suffix")}),o.jsx(_,{value:e.suffix,placeholder:a("suffixPlaceholder"),onChange:s=>{t("suffix",s)}})]})]})]})}function Ls({setRenderData:e}){const{t:n}=q(),a=[{key:"1",tab:n("type_Date")},{key:"2",tab:n("customStyle")}],[t,r]=m.useState(is);as(r);const s=()=>{if(!t.dateTypeFieldId){Te.error(n("dataPlaceholder"));return}const d=le(t)[0];b.saveConfig({customConfig:t,dataConditions:d})},[f,h]=m.useState([]),[v,M]=m.useState([{type:V.ALL}]),[w,I]=m.useState([]),[H,P]=m.useState([]),k=m.useCallback(async()=>{const d=await Oe.getTableList(),x=[];for(const g of d){const Y=await g.getName();x.push({value:g.id,label:Y})}return x},[]),L=m.useCallback(d=>b.getTableDataRange(d),[]),N=m.useCallback(async d=>{const x=await b.getCategories(d),g=[D.DateTime,D.CreatedTime,D.ModifiedTime],Y=x.filter(Q=>g.includes(Q.fieldType))||[],O=[D.Number,D.Currency],F=x.filter(Q=>O.includes(Q.fieldType))||[];return{dateTypeList:Y,numberOrCurrencyList:F}},[]),$=async(d,x=!0)=>{const g=await L(d.tableId);M(g);const{dateTypeList:Y,numberOrCurrencyList:O}=await N(d.tableId);if(I(Y),P(O),x){d.dateTypeFieldId=Y[0].fieldId||"";const F=O.length>0;d.statisticalType=F?"number":"total",F&&(d.numberOrCurrencyFieldId=O[0].fieldId)}r({...d})},S=async()=>{var x;const d=await k();if(h(d),b.state===T.Create){const g={...t};g.tableId=(x=d[0])==null?void 0:x.value,$(g)}else{const{dataCondition:g,customConfig:Y}=await re(),O=ce(g,Y);$(O,!1)}};m.useEffect(()=>{S()},[k,L,N]);const[W,E]=m.useState([]),l=J(async()=>{if(!t.tableId)return;const d=await ie(t);E(d),U(t,d,e)},200);m.useEffect(()=>{l()},[t.tableId,t.tableRange,t.dateTypeFieldId,t.dateTypeFieldType,t.dateRange,t.statisticalType,t.numberOrCurrencyFieldId,t.statisticalCalcType,JSON.stringify(t.momOrYoy)]);const C=J(()=>{t.tableId&&U(t,W,e)},200);return m.useEffect(()=>{C()},[t.color,t.iconStyleId,t.decimal,t.numberFormat,t.prefix,t.suffix]),o.jsxs("div",{className:"main-config-panel left-border",children:[o.jsx("div",{className:"form",children:o.jsx(Le,{defaultActiveKey:"1",children:a.map(d=>o.jsxs($e,{tab:d.tab,itemKey:d.key,children:[d.key==="1"&&o.jsx(Ms,{config:t,setConfig:r,tableList:f,tableRangeList:v,dateTypeList:w,numberOrCurrencyList:H,setData:$}),d.key==="2"&&o.jsx(Os,{config:t,setConfig:r})]},d.key))})}),o.jsx(oe,{className:"btn",theme:"solid",onClick:s,children:n("confirm")})]})}function $s(){es();const e=b.state===T.Config||b.state===T.Create,[n,a]=m.useState({color:"primary",value:"",prefix:"",suffix:"",momYoyList:[]}),t=async()=>{const{dataCondition:s,customConfig:f}=await re(),h=ce(s,f),v=await ie(h);U(h,v,a)},r=async()=>{t()};return m.useEffect(()=>{(b.state===T.View||b.state===T.FullScreen)&&(t(),b.onDataChange(r))},[]),o.jsxs("main",{className:j(e?"top-border":"","main"),children:[o.jsx(bs,{renderData:n}),e&&o.jsx(Ls,{setRenderData:a})]})}y.locale("en-us");function Ts(e){const[n,a]=m.useState(Ie);return m.useEffect(()=>{if(e.neverShowBanner)return;const t=new Promise((r,s)=>{setTimeout(()=>{s(!1)},3e3)});Promise.race([G.bridge.getLanguage(),t]).then(r=>{r==="zh"&&(a(De),y.locale("zh-cn")),r==="ja"&&a(Ve)}).catch(r=>{console.error(r)})},[]),e.neverShowBanner?e.children||null:o.jsx("div",{children:o.jsx(je,{locale:n,children:e.children})})}const Is=Re([{path:"/",element:o.jsx($s,{})}]),Ds=ke.createRoot(document.getElementById("root"));Ds.render(o.jsx(Ts,{children:o.jsx(Ne,{router:Is})}));
