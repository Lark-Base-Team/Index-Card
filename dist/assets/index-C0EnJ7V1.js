import{i as _,B as ue,a as me,p as F,r as u,b,t as d,c,Z as j,G as V,Q as ye,I as oe,d as he,e as fe,f as Ce,g as pe,h as ve,j as ge,k as m,q as be,l as t,m as xe,u as K,s as T,n as R,o as z,S as g,v as N,D as J,w as ne,x as we,y as Ye,F as Z,z as Me,A as Le,C as X,T as $e,E as Te,H as Ie,J as Oe,K as De,L as Ve,M as je,N as Re,O as ke,R as Ne}from"./vendor-CaXK23aT.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const Se="Type & Data",Ae="Data Source",Ge="Data Range",Fe="Date Filtering",He="Date",Pe="Create Date",We="Modify Date",Ee="Basis",Qe="Range",Be="Today",_e="Yesterday",Ze="Current Week",Ue="Last Week",qe="Current Month",ze="Last Month",Ke="Current Quarter",Je="Last Quarter",Xe="Current Year",et="Last Year",tt="Last 7 Days",at="Last 14 Days",ot="Last 30 Days",nt="Last 365 Days",st="Last 3 Months",rt="Last 6 Months",lt="Statistical Methods",ct="Total Records Count",it="Field Value Count",dt="Number",ut="Currency",mt="Sum",yt="Average",ht="Max",ft="Min",Ct="MoM & YoY",pt="Add MoM & YoY",vt="Description",gt="Calculation Method",bt="MoM",xt="Week YoY",wt="Month YoY",Yt="Year YoY",Mt="Calculation Type",Lt="MoM Growth Rate",$t="MoM Growth Value",Tt="MoM Original Value",It="Week YoY Growth Value",Ot="Month YoY Growth Value",Dt="Year YoY Growth Value",Vt="Week YoY Original Value",jt="Month YoY Original Value",Rt="Year YoY Original Value",kt="Week YoY Growth Rate",Nt="Month YoY Growth Rate",St="Year YoY Growth Rate",At="Growth Value",Gt="Growth Rate",Ft="Difference Rate",Ht="Difference Value",Pt="Original Value",Wt="Custom Style",Et="Color",Qt="Icon Style",Bt="Index Data Format",_t="Decimal Places & Format",Zt="Number (Thousands Separator)",Ut="Percentage",qt="Per Mille",zt="Prefix",Kt="Suffix",Jt="Please enter a prefix",Xt="Please enter a suffix",ea="Please select a date field",ta="Only positive integers are allowed",aa="All Data",oa="Confirm",na={type_Date:Se,dataSource:Ae,dataRange:Ge,dateFiltering:Fe,date:He,createDate:Pe,ModifyDate:We,basis:Ee,range:Qe,today:Be,yesterday:_e,currentWeek:Ze,lastWeek:Ue,currentMonth:qe,lastMonth:ze,currentQuarter:Ke,lastQuarter:Je,currentYear:Xe,lastYear:et,last7Days:tt,last14Days:at,last30Days:ot,last365Days:nt,last3Months:st,last6Months:rt,statisticalMethods:lt,recordsTotal:ct,fieldValue:it,number:dt,currency:ut,sum:mt,average:yt,max:ht,min:ft,mom_yoy:Ct,addMom_Yoy:pt,description:vt,calculation:gt,mom:bt,weekYoy:xt,monthYoy:wt,yearYoy:Yt,calculationType:Mt,momGrowthRate:Lt,momGrowthValue:$t,momOriginalValue:Tt,weekYoyGrowthValue:It,monthYoyGrowthValue:Ot,yearYoyGrowthValue:Dt,weekYoyOriginalValue:Vt,monthYoyOriginalValue:jt,yearYoyOriginalValue:Rt,weekYoyGrowthRate:kt,monthYoyGrowthRate:Nt,yearYoyGrowthRate:St,growthValue:At,growthRate:Gt,differenceRate:Ft,differenceValue:Ht,originalValue:Pt,customStyle:Wt,color:Et,iconStyle:Qt,indexDataFormat:Bt,decimalPlaces_Format:_t,numberMillennials:Zt,percentage:Ut,millageRate:qt,prefix:zt,suffix:Kt,prefixPlaceholder:Jt,suffixPlaceholder:Xt,dataPlaceholder:ea,formatErrorMessage:ta,allData:aa,confirm:oa},sa="类型与数据",ra="数据源",la="数据范围",ca="日期筛选",ia="日期",da="创建日期",ua="修改日期",ma="依据",ya="范围",ha="今天",fa="昨天",Ca="本周",pa="上周",va="本月",ga="上月",ba="本季度",xa="上季度",wa="今年",Ya="去年",Ma="最近7天",La="最近14天",$a="最近30天",Ta="最近365天",Ia="最近3个月",Oa="最近6个月",Da="统计方式",Va="统计记录总数",ja="统计字段数值",Ra="数字",ka="货币",Na="求和",Sa="平均值",Aa="最大值",Ga="最小值",Fa="环同比",Ha="添加环同比",Pa="描述",Wa="计算方式",Ea="环比",Qa="周同比",Ba="月同比",_a="年同比",Za="计算类型",Ua="环比增长率",qa="环比增长值",za="环比原始值",Ka="周同比增长值",Ja="月同比增长值",Xa="年同比增长值",eo="周同比原始值",to="月同比原始值",ao="年同比原始值",oo="周同比增长率",no="月同比增长率",so="年同比增长率",ro="增长值",lo="增长率",co="差异率",io="差异值",uo="原始值",mo="自定义样式",yo="颜色",ho="图标样式",fo="指标数据格式",Co="小数位与格式",po="数字（千分位）",vo="百分比",go="千分比",bo="前缀",xo="后缀",wo="请输入前缀",Yo="请输入后缀",Mo="请选择日期字段",Lo="仅允许输入大于零的整数",$o="全部数据",To="确定",Io={type_Date:sa,dataSource:ra,dataRange:la,dateFiltering:ca,date:ia,createDate:da,ModifyDate:ua,basis:ma,range:ya,today:ha,yesterday:fa,currentWeek:Ca,lastWeek:pa,currentMonth:va,lastMonth:ga,currentQuarter:ba,lastQuarter:xa,currentYear:wa,lastYear:Ya,last7Days:Ma,last14Days:La,last30Days:$a,last365Days:Ta,last3Months:Ia,last6Months:Oa,statisticalMethods:Da,recordsTotal:Va,fieldValue:ja,number:Ra,currency:ka,sum:Na,average:Sa,max:Aa,min:Ga,mom_yoy:Fa,addMom_Yoy:Ha,description:Pa,calculation:Wa,mom:Ea,weekYoy:Qa,monthYoy:Ba,yearYoy:_a,calculationType:Za,momGrowthRate:Ua,momGrowthValue:qa,momOriginalValue:za,weekYoyGrowthValue:Ka,monthYoyGrowthValue:Ja,yearYoyGrowthValue:Xa,weekYoyOriginalValue:eo,monthYoyOriginalValue:to,yearYoyOriginalValue:ao,weekYoyGrowthRate:oo,monthYoyGrowthRate:no,yearYoyGrowthRate:so,growthValue:ro,growthRate:lo,differenceRate:co,differenceValue:io,originalValue:uo,customStyle:mo,color:yo,iconStyle:ho,indexDataFormat:fo,decimalPlaces_Format:Co,numberMillennials:po,percentage:vo,millageRate:go,prefix:bo,suffix:xo,prefixPlaceholder:wo,suffixPlaceholder:Yo,dataPlaceholder:Mo,formatErrorMessage:Lo,allData:$o,confirm:To},Oo="タイプとデータ",Do="データソース",Vo="データ範囲",jo="日付フィルタリング",Ro="日付",ko="作成日",No="更新日",So="根拠",Ao="範囲",Go="今日",Fo="昨日",Ho="今週",Po="先週",Wo="今月",Eo="先月",Qo="今四半期",Bo="前四半期",_o="今年",Zo="去年",Uo="過去7日間",qo="過去14日間",zo="過去30日間",Ko="過去365日間",Jo="過去3ヶ月",Xo="過去6ヶ月",en="統計手法",tn="総レコード数",an="フィールド数値の集計",on="数字",nn="通貨",sn="合計",rn="平均値",ln="最大値",cn="最小値",dn="環境比と同期比",un="追加環境比と同期比",mn="説明",yn="計算方法",hn="環境比",fn="週同期比",Cn="月同期比",pn="年同期比",vn="計算タイプ",gn="環境比成長率",bn="環境比成長値",xn="環境比原始値",wn="週同期比成長値",Yn="月同期比成長値",Mn="年同期比成長値",Ln="週同期比原始値",$n="月同期比原始値",Tn="年同期比原始値",In="週同期比成長率",On="月同期比成長率",Dn="年同期比成長率",Vn="成長値",jn="成長率",Rn="差異率",kn="差異値",Nn="原始値",Sn="カスタムスタイル",An="色",Gn="アイコンスタイル",Fn="指標データフォーマット",Hn="小数点以下の桁数とフォーマット",Pn="数字（千分位）",Wn="パーセンテージ",En="パーミレ（千分率）",Qn="接頭辞",Bn="接尾辞",_n="接頭辞を入力してください",Zn="接尾辞を入力してください",Un="日付フィールドを選択してください",qn="正の整数のみが許可されます",zn="全てのデータ",Kn="確定",Jn={type_Date:Oo,dataSource:Do,dataRange:Vo,dateFiltering:jo,date:Ro,createDate:ko,ModifyDate:No,basis:So,range:Ao,today:Go,yesterday:Fo,currentWeek:Ho,lastWeek:Po,currentMonth:Wo,lastMonth:Eo,currentQuarter:Qo,lastQuarter:Bo,currentYear:_o,lastYear:Zo,last7Days:Uo,last14Days:qo,last30Days:zo,last365Days:Ko,last3Months:Jo,last6Months:Xo,statisticalMethods:en,recordsTotal:tn,fieldValue:an,number:on,currency:nn,sum:sn,average:rn,max:ln,min:cn,mom_yoy:dn,addMom_Yoy:un,description:mn,calculation:yn,mom:hn,weekYoy:fn,monthYoy:Cn,yearYoy:pn,calculationType:vn,momGrowthRate:gn,momGrowthValue:bn,momOriginalValue:xn,weekYoyGrowthValue:wn,monthYoyGrowthValue:Yn,yearYoyGrowthValue:Mn,weekYoyOriginalValue:Ln,monthYoyOriginalValue:$n,yearYoyOriginalValue:Tn,weekYoyGrowthRate:In,monthYoyGrowthRate:On,yearYoyGrowthRate:Dn,growthValue:Vn,growthRate:jn,differenceRate:Rn,differenceValue:kn,originalValue:Nn,customStyle:Sn,color:An,iconStyle:Gn,indexDataFormat:Fn,decimalPlaces_Format:Hn,numberMillennials:Pn,percentage:Wn,millageRate:En,prefix:Qn,suffix:Bn,prefixPlaceholder:_n,suffixPlaceholder:Zn,dataPlaceholder:Un,formatErrorMessage:qn,allData:zn,confirm:Kn},Xn={zh:{translation:Io},en:{translation:na},ja:{translation:Jn}};_.use(ue).use(me).init({resources:Xn,fallbackLng:"en",interpolation:{escapeValue:!1}});F.bridge.getLanguage().then(e=>{_.language!==e&&_.changeLanguage(e)});function ee(e){document.body.setAttribute("theme-mode",e)}function es(){u.useLayoutEffect(()=>{F.bridge.getTheme().then(e=>{ee(e.toLocaleLowerCase())}),F.bridge.onThemeChange(e=>{ee(e.data.theme.toLocaleLowerCase())})},[])}const ts=(e,s)=>{e&&(s(e),setTimeout(()=>{b.setRendered()},3e3))};async function as(e){u.useEffect(()=>{const s=b.onConfigChange(a=>{const o=a.data.customConfig;ts(o,e)});return()=>{s()}},[])}var i=(e=>(e.CurrentQuarter="CurrentQuarter",e.LastQuarter="LastQuarter",e.CurrentYear="CurrentYear",e.LastYear="LastYear",e.Last14Days="Last14Days",e.Last365Days="Last365Days",e.Last3Months="Last3Months",e.Last6Months="Last6Months",e))(i||{});const os=[{label:d("today"),value:c.Today},{label:d("yesterday"),value:c.Yesterday},{label:d("currentWeek"),value:c.CurrentWeek},{label:d("lastWeek"),value:c.LastWeek},{label:d("currentMonth"),value:c.CurrentMonth},{label:d("lastMonth"),value:c.LastMonth},{label:d("currentQuarter"),value:i.CurrentQuarter},{label:d("lastQuarter"),value:i.LastQuarter},{label:d("currentYear"),value:i.CurrentYear},{label:d("lastYear"),value:i.LastYear},{label:d("last7Days"),value:c.TheLastWeek},{label:d("last14Days"),value:i.Last14Days},{label:d("last30Days"),value:c.TheLastMonth},{label:d("last365Days"),value:i.Last365Days},{label:d("last3Months"),value:i.Last3Months},{label:d("last6Months"),value:i.Last6Months}],ns=[{label:d("recordsTotal"),value:"total"},{label:d("fieldValue"),value:"number"}],ss=[{label:d("sum"),value:"SUM"},{label:d("average"),value:"AVERAGE"},{label:d("max"),value:"MAX"},{label:d("min"),value:"MIN"}],G=[{label:d("mom"),value:"mom",disabled:!1},{label:d("weekYoy"),value:"yoyByWeek",disabled:!1},{label:d("monthYoy"),value:"yoyByMonth",disabled:!1},{label:d("yearYoy"),value:"yoyByYear",disabled:!1}],rs=[{label:d("differenceRate"),value:"differenceRate"},{label:d("differenceValue"),value:"differenceValue"},{label:d("originalValue"),value:"originalValue"}],se=[{id:"1",upIcon:"IconTriangleUp",upIconColor:"green",downIcon:"IconTriangleDown",downIconColor:"red",constIcon:"IconMinus",constIconColor:"black"},{id:"2",upIcon:"IconFilledArrowUp",upIconColor:"green",downIcon:"IconFilledArrowDown",downIconColor:"red",constIcon:"IconMinus",constIconColor:"black"},{id:"3",upIcon:"IconArrowUpRight",upIconColor:"green",downIcon:"IconArrowDownRight",downIconColor:"red",constIcon:"IconMinus",constIconColor:"black"},{id:"4",upIcon:"IconTriangleUp",upIconColor:"red",downIcon:"IconTriangleDown",downIconColor:"green",constIcon:"IconMinus",constIconColor:"black"},{id:"5",upIcon:"IconFilledArrowUp",upIconColor:"red",downIcon:"IconFilledArrowDown",downIconColor:"green",constIcon:"IconMinus",constIconColor:"black"},{id:"6",upIcon:"IconArrowUpRight",upIconColor:"red",downIcon:"IconArrowDownRight",downIconColor:"green",constIcon:"IconMinus",constIconColor:"black"}],ls={IconMinus:oe,IconTriangleUp:he,IconTriangleDown:fe,IconFilledArrowUp:Ce,IconFilledArrowDown:pe,IconArrowUpRight:ve,IconArrowDownRight:ge},cs=[{label:d("numberMillennials"),value:"numberMillennials"},{label:d("number"),value:"number"},{label:d("percentage"),value:"percentage"},{label:d("millageRate"),value:"millageRate"}],is={tableId:"",tableRange:{type:j.ALL},dateTypeFieldId:"",dateTypeFieldType:V.DateTime,dateRange:c.Today,statisticalType:"total",numberOrCurrencyFieldId:"",statisticalCalcType:ye.SUM,momOrYoy:[{momOrYoyDesc:d("momGrowthRate"),manualSetDesc:!1,momOrYoyCalcMethod:"mom",momOrYoyCalcType:"differenceRate"}],color:"primary",iconStyleId:"1",decimal:0,numberFormat:"number",prefix:"",suffix:""};m.extend(be);const ds=e=>e.replace(/\B(?=(\d{3})+$)/g,","),U=(e,s,a="0.8vmax")=>{const o=ls[e];return s?t.jsx(o,{style:{fontSize:s,marginRight:a}}):t.jsx(o,{size:"small",style:{marginRight:a}})},us=(e,s,a)=>{if(s==="numberMillennials"){const o=e.toFixed(a).split("."),n=ds(o[0]);return o.length>1?`${n}.${o[1]}`:n}else return s==="number"?e.toFixed(a):s==="percentage"?(e*100).toFixed(a)+"%":(e*1e3).toFixed(a)+"‰"},te=e=>[c.Today,c.Yesterday].includes(e)?G:[c.CurrentWeek,c.LastWeek,c.TheLastWeek,i.Last14Days,c.TheLastMonth,i.Last365Days,i.Last3Months,i.Last6Months].includes(e)?G.map(r=>({...r,disabled:r.value!=="mom"})):[i.CurrentQuarter,i.LastQuarter,i.CurrentYear,i.LastYear].includes(e)?G.map(r=>({...r,disabled:r.value==="yoyByWeek"||r.value==="yoyByMonth"})):[c.CurrentMonth,c.LastMonth].includes(e)?G.map(r=>({...r,disabled:r.value==="yoyByWeek"})):[],re=e=>({[c.Today]:()=>{const a=m().startOf("day").valueOf(),o=m().endOf("day").valueOf();return{startTime:a,endTime:o}},[c.Yesterday]:()=>{const a=m().subtract(1,"day").startOf("day").valueOf(),o=m().subtract(1,"day").endOf("day").valueOf();return{startTime:a,endTime:o}},[c.CurrentWeek]:()=>{const a=m().startOf("week").valueOf(),o=m().endOf("week").valueOf();return{startTime:a,endTime:o}},[c.LastWeek]:()=>{const a=m().startOf("week").subtract(1,"week").valueOf(),o=m().endOf("week").subtract(1,"week").valueOf();return{startTime:a,endTime:o}},[c.CurrentMonth]:()=>{const a=m().startOf("month").valueOf(),o=m().endOf("month").valueOf();return{startTime:a,endTime:o}},[c.LastMonth]:()=>{const a=m().startOf("month").subtract(1,"month").valueOf(),o=m().endOf("month").subtract(1,"month").valueOf();return{startTime:a,endTime:o}},[i.CurrentQuarter]:()=>{const a=m().startOf("quarter").valueOf(),o=m().endOf("quarter").valueOf();return{startTime:a,endTime:o}},[i.LastQuarter]:()=>{const a=m().startOf("quarter").subtract(1,"quarter").valueOf(),o=m().endOf("quarter").subtract(1,"quarter").valueOf();return{startTime:a,endTime:o}},[i.CurrentYear]:()=>{const a=m().startOf("year").valueOf(),o=m().endOf("year").valueOf();return{startTime:a,endTime:o}},[i.LastYear]:()=>{const a=m().startOf("year").subtract(1,"year").valueOf(),o=m().endOf("year").subtract(1,"year").valueOf();return{startTime:a,endTime:o}},[c.TheLastWeek]:()=>{const a=m().endOf("day").subtract(7,"day").valueOf(),o=m().endOf("day").valueOf();return{startTime:a,endTime:o}},[i.Last14Days]:()=>{const a=m().endOf("day").subtract(14,"day").valueOf(),o=m().endOf("day").valueOf();return{startTime:a,endTime:o}},[c.TheLastMonth]:()=>{const a=m().endOf("day").subtract(30,"day").valueOf(),o=m().endOf("day").valueOf();return{startTime:a,endTime:o}},[i.Last365Days]:()=>{const a=m().endOf("day").subtract(365,"day").valueOf(),o=m().endOf("day").valueOf();return{startTime:a,endTime:o}},[i.Last3Months]:()=>{const a=m().endOf("day").subtract(3,"month").valueOf(),o=m().endOf("day").valueOf();return{startTime:a,endTime:o}},[i.Last6Months]:()=>{const a=m().endOf("day").subtract(6,"month").valueOf(),o=m().endOf("day").valueOf();return{startTime:a,endTime:o}}})[e](),ms=e=>{let s=1;return[c.Today,c.Yesterday,c.CurrentWeek,c.LastWeek,c.CurrentMonth,c.LastMonth,i.CurrentQuarter,i.LastQuarter,i.CurrentYear,i.LastYear].includes(e)&&(s=1),e===c.TheLastWeek&&(s=7),e===i.Last14Days&&(s=14),e===c.TheLastMonth&&(s=30),e===i.Last365Days&&(s=365),e===i.Last3Months&&(s=3),e===i.Last6Months&&(s=6),s},ys=(e,s)=>{let a="day";[c.Today,c.Yesterday,c.TheLastWeek,i.Last14Days,c.TheLastMonth,i.Last365Days].includes(e)&&s==="mom"&&(a="day");const n=[c.CurrentWeek,c.LastWeek],r=[c.Today,c.Yesterday];(n.includes(e)&&s==="mom"||r.includes(e)&&s==="yoyByWeek")&&(a="week");const f=[c.CurrentMonth,c.LastMonth,i.Last3Months,i.Last6Months],y=[c.Today,c.Yesterday,c.CurrentMonth,c.LastMonth];(f.includes(e)&&s==="mom"||y.includes(e)&&s==="yoyByMonth")&&(a="month"),[i.CurrentQuarter,i.LastQuarter].includes(e)&&s==="mom"&&(a="quarter");const w=[i.CurrentYear,i.LastYear],Y=[c.Today,c.Yesterday,c.CurrentMonth,c.LastMonth,i.CurrentQuarter,i.LastQuarter,i.CurrentYear,i.LastYear];return(w.includes(e)&&s==="mom"||Y.includes(e)&&s==="yoyByYear")&&(a="year"),a},hs=(e,s)=>{const a=ms(e),o=ys(e,s),{startTime:n,endTime:r}=re(e),f=m(n).subtract(a,o).valueOf(),y=m(r).subtract(a,o).valueOf();return{startTime:f,endTime:y}},fs=(e,s,a,o)=>{const n={},r=se.find(f=>f.id===e);return o===0&&s==="differenceRate"||a===o?(n.icon=r.constIcon,n.color=r.constIconColor):a<o?(n.icon=r.downIcon,n.color=r.downIconColor):(n.icon=r.upIcon,n.color=r.upIconColor),n},Cs=(e,s,a)=>{let o="";if(e==="differenceRate"){const n=Math.abs((s-a)/a)*100;o=a!==0?`${n.toFixed(0)}%`:""}else if(e==="differenceValue"){const n=Math.abs(s-a);o=n?`${n}`:""}else o=`${a}`;return o},le=async()=>(await b.getConfig()).customConfig,ce=e=>{const a=[{dateRange:e.dateRange},...e.momOrYoy].map((r,f)=>{let y,x;if(f===0){const Y=re(e.dateRange);y=Y.startTime,x=Y.endTime}else{const Y={...r},I=hs(e.dateRange,Y.momOrYoyCalcMethod);y=I.startTime,x=I.endTime}return y=y-1,x=x+1,{...e.tableRange,filterInfo:{conjunction:xe.And,conditions:[{fieldId:e.dateTypeFieldId,value:y,fieldType:e.dateTypeFieldType,operator:K.IsGreater},{fieldId:e.dateTypeFieldId,value:x,fieldType:e.dateTypeFieldType,operator:K.IsLess}]}}}),o=[{fieldId:e.numberOrCurrencyFieldId,rollup:e.statisticalCalcType}];return a.map(r=>({tableId:e.tableId,dataRange:r,series:e.statisticalType==="number"?o:"COUNTA"}))},ie=async e=>{var o;const s=ce(e),a=[];for(const n of s){const f=(o=(await b.getPreviewData(n))[1])==null?void 0:o.map(y=>y.value);a.push(f!=null&&f.length?f[0]:0)}return a},ps=(e,s)=>{let a={mom:d("mom"),yoyByWeek:d("weekYoy"),yoyByMonth:d("monthYoy"),yoyByYear:d("yearYoy")},o={differenceRate:d("growthRate"),differenceValue:d("growthValue"),originalValue:d("originalValue")};return`${a[e]}${o[s]}`},vs=async(e,s)=>{const a=s[0],o=s.slice(1),n=e.momOrYoy.map((f,y)=>{const x=o[y],w=fs(e.iconStyleId,f.momOrYoyCalcType,a,x);return{desc:f.momOrYoyDesc,calcType:f.momOrYoyCalcType,value:Cs(f.momOrYoyCalcType,a,x),color:w.color,icon:w.icon}});return{color:e.color,value:us(a,e.numberFormat,e.decimal),prefix:e.prefix,suffix:e.suffix,momYoyList:n}},q=async(e,s,a)=>{if(s.filter(n=>n!==void 0).length<=1)return;const o=await vs(e,s);a(o)},de=[{name:"primary",value:"var(--ccm-chart-N700)"},{name:"blue",value:"var(--ccm-chart-B500)"},{name:"Purple",value:"var(--ccm-chart-I500)"},{name:"green",value:"var(--ccm-chart-G500)"},{name:"cyan",value:"var(--ccm-chart-W500)"},{name:"yellow",value:"var(--ccm-chart-Y500)"},{name:"orange",value:"var(--ccm-chart-O500)"},{name:"red",value:"var(--ccm-chart-R400)"}];function gs(e){return t.jsx("div",{className:"color-picker",children:de.map(({name:s,value:a})=>t.jsx("div",{onClick:()=>{e.onChange(s)},style:{borderColor:e.name===s?a:"transparent"},className:"color-picker-color-container",children:t.jsx("div",{style:{backgroundColor:a},className:"color-picker-color",children:e.name===s?t.jsx("div",{className:"selected-icon-container"}):null})},s))})}function bs({renderData:e}){var a;const s=b.state===T.Config||b.state===T.Create;return t.jsx("div",{className:"main-content",children:t.jsxs("div",{className:R({"main-content-warp":!0,"is-config":s}),children:[t.jsx("div",{className:"main-content-number text-hidden",style:{color:(a=de.find(o=>o.name===e.color))==null?void 0:a.value},children:`${e.prefix}${e.value}${e.suffix}`}),e.momYoyList.map((o,n)=>t.jsxs("div",{className:"main-content-description text-hidden",children:[t.jsx("div",{className:"description-text",children:o.desc}),t.jsxs("div",{className:R("description-index",o.color),children:[o.calcType==="originalValue"?null:U(o.icon,"1.8vmax",o.value?void 0:"0"),t.jsx("div",{className:"description-index-number",children:o.value})]})]},n))]})})}const ae=e=>u.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u.createElement("path",{d:"M1.33203 2.66634C1.33203 1.92996 1.92898 1.33301 2.66536 1.33301H13.332C14.0684 1.33301 14.6654 1.92996 14.6654 2.66634V13.333C14.6654 14.0694 14.0684 14.6663 13.332 14.6663H2.66536C1.92899 14.6663 1.33203 14.0694 1.33203 13.333V2.66634ZM2.66536 2.66634V13.333H13.332V2.66634H2.66536Z",fill:"#646A73"}),u.createElement("path",{d:"M8.33203 4.66634C7.96384 4.66634 7.66536 4.96482 7.66536 5.33301C7.66536 5.7012 7.96384 5.99967 8.33203 5.99967H11.332C11.7002 5.99967 11.9987 5.7012 11.9987 5.33301C11.9987 4.96482 11.7002 4.66634 11.332 4.66634H8.33203Z",fill:"#646A73"}),u.createElement("path",{d:"M3.9987 5.33301C3.9987 4.96482 4.29718 4.66634 4.66536 4.66634H5.9987C6.36689 4.66634 6.66536 4.96482 6.66536 5.33301C6.66536 5.7012 6.36689 5.99967 5.9987 5.99967H4.66536C4.29717 5.99967 3.9987 5.7012 3.9987 5.33301Z",fill:"#646A73"}),u.createElement("path",{d:"M8.33203 7.33301C7.96384 7.33301 7.66536 7.63148 7.66536 7.99967C7.66536 8.36786 7.96384 8.66634 8.33203 8.66634H11.332C11.7002 8.66634 11.9987 8.36786 11.9987 7.99967C11.9987 7.63148 11.7002 7.33301 11.332 7.33301H8.33203Z",fill:"#646A73"}),u.createElement("path",{d:"M3.9987 7.99967C3.9987 7.63148 4.29718 7.33301 4.66536 7.33301H5.9987C6.36689 7.33301 6.66536 7.63148 6.66536 7.99967C6.66536 8.36786 6.36689 8.66634 5.9987 8.66634H4.66536C4.29717 8.66634 3.9987 8.36786 3.9987 7.99967Z",fill:"#646A73"}),u.createElement("path",{d:"M8.33203 9.99967C7.96384 9.99967 7.66536 10.2982 7.66536 10.6663C7.66536 11.0345 7.96384 11.333 8.33203 11.333H11.332C11.7002 11.333 11.9987 11.0345 11.9987 10.6663C11.9987 10.2982 11.7002 9.99967 11.332 9.99967H8.33203Z",fill:"#646A73"}),u.createElement("path",{d:"M3.9987 10.6663C3.9987 10.2982 4.29718 9.99967 4.66536 9.99967H5.9987C6.36689 9.99967 6.66536 10.2982 6.66536 10.6663C6.66536 11.0345 6.36689 11.333 5.9987 11.333H4.66536C4.29717 11.333 3.9987 11.0345 3.9987 10.6663Z",fill:"#646A73"})),xs=e=>u.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u.createElement("path",{d:"M5.85044 1.42649C6.21505 1.47773 6.46908 1.81485 6.41784 2.17945L6.16192 4.00039H10.8155L11.0975 1.99389C11.1487 1.62928 11.4858 1.37525 11.8504 1.42649C12.215 1.47773 12.4691 1.81485 12.4178 2.17945L12.1619 4.00039H14.668C15.0362 4.00039 15.3346 4.29887 15.3346 4.66706C15.3346 5.03525 15.0362 5.33373 14.668 5.33373H11.9745L11.3187 10.0004H13.3346C13.7028 10.0004 14.0013 10.2989 14.0013 10.6671C14.0013 11.0353 13.7028 11.3337 13.3346 11.3337H11.1313L10.7478 14.0627C10.6965 14.4273 10.3594 14.6813 9.9948 14.6301C9.63019 14.5788 9.37616 14.2417 9.4274 13.8771L9.78485 11.3337H5.13129L4.74776 14.0627C4.69652 14.4273 4.35941 14.6813 3.9948 14.6301C3.63019 14.5788 3.37616 14.2417 3.4274 13.8771L3.78485 11.3337H1.33464C0.966446 11.3337 0.667969 11.0353 0.667969 10.6671C0.667969 10.2989 0.966446 10.0004 1.33464 10.0004H3.97224L4.6281 5.33373H2.66797C2.29978 5.33373 2.0013 5.03525 2.0013 4.66706C2.0013 4.29887 2.29978 4.00039 2.66797 4.00039H4.81548L5.09748 1.99389C5.14872 1.62928 5.48583 1.37525 5.85044 1.42649ZM9.97224 10.0004L10.6281 5.33373H5.97453L5.31868 10.0004H9.97224Z",fill:"#646A73"})),ws=e=>u.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u.createElement("path",{d:"M4.66536 1.3335C5.03355 1.3335 5.33203 1.63197 5.33203 2.00016H10.6654C10.6654 1.63197 10.9638 1.3335 11.332 1.3335C11.7002 1.3335 11.9987 1.63197 11.9987 2.00016C12.2748 2.00016 12.8119 2.00016 13.3321 2.00016C14.0684 2.00016 14.6654 2.59712 14.6654 3.3335V13.3335C14.6654 14.0699 14.0684 14.6668 13.332 14.6668H2.66536C1.92899 14.6668 1.33203 14.0699 1.33203 13.3335L1.33203 3.3335C1.33203 2.59712 1.92896 2.00016 2.66534 2.00016C3.18554 2.00016 3.72257 2.00016 3.9987 2.00016C3.9987 1.63197 4.29717 1.3335 4.66536 1.3335ZM10.6654 3.3335H5.33203C5.33203 3.70169 5.03355 4.00016 4.66536 4.00016C4.29717 4.00016 3.9987 3.70169 3.9987 3.3335H2.66536V13.3335H13.332V3.3335H11.9987C11.9987 3.70169 11.7002 4.00016 11.332 4.00016C10.9638 4.00016 10.6654 3.70169 10.6654 3.3335ZM5.9987 10.0002C5.9987 9.63197 5.70022 9.3335 5.33203 9.3335H4.66536C4.29717 9.3335 3.9987 9.63197 3.9987 10.0002V10.6668C3.9987 11.035 4.29717 11.3335 4.66536 11.3335H5.33203C5.70022 11.3335 5.9987 11.035 5.9987 10.6668V10.0002ZM6.9987 6.66683C6.9987 6.29864 7.29718 6.00016 7.66536 6.00016H8.33203C8.70022 6.00016 8.9987 6.29864 8.9987 6.66683V7.3335C8.9987 7.70169 8.70022 8.00016 8.33203 8.00016H7.66536C7.29717 8.00016 6.9987 7.70169 6.9987 7.3335V6.66683ZM8.9987 10.0002C8.9987 9.63197 8.70022 9.3335 8.33203 9.3335H7.66536C7.29717 9.3335 6.9987 9.63197 6.9987 10.0002V10.6668C6.9987 11.035 7.29718 11.3335 7.66536 11.3335H8.33203C8.70022 11.3335 8.9987 11.035 8.9987 10.6668V10.0002ZM9.9987 10.0002C9.9987 9.63197 10.2972 9.3335 10.6654 9.3335H11.332C11.7002 9.3335 11.9987 9.63197 11.9987 10.0002V10.6668C11.9987 11.035 11.7002 11.3335 11.332 11.3335H10.6654C10.2972 11.3335 9.9987 11.035 9.9987 10.6668V10.0002ZM11.9987 6.66683C11.9987 6.29864 11.7002 6.00016 11.332 6.00016H10.6654C10.2972 6.00016 9.9987 6.29864 9.9987 6.66683V7.3335C9.9987 7.70169 10.2972 8.00016 10.6654 8.00016H11.332C11.7002 8.00016 11.9987 7.70169 11.9987 7.3335V6.66683Z",fill:"#646A73"})),Ys=e=>u.createElement("svg",{width:16,height:17,viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u.createElement("path",{d:"M5.33203 2.49967C5.33203 2.13148 5.03355 1.83301 4.66536 1.83301C4.29717 1.83301 3.9987 2.13148 3.9987 2.49967H2.66534C1.92896 2.49967 1.33203 3.09663 1.33203 3.83301V13.833C1.33203 14.5694 1.92899 15.1663 2.66536 15.1663H7.83512C7.51362 14.7653 7.24887 14.3168 7.05304 13.833H2.66536V3.83301H3.9987C3.9987 4.2012 4.29717 4.49967 4.66536 4.49967C5.03355 4.49967 5.33203 4.2012 5.33203 3.83301H10.6654C10.6654 4.2012 10.9638 4.49967 11.332 4.49967C11.7002 4.49967 11.9987 4.2012 11.9987 3.83301H13.332V6.6677C13.8051 6.78945 14.2527 6.97446 14.6654 7.21318V3.83301C14.6654 3.09663 14.0684 2.49967 13.3321 2.49967H11.9987C11.9987 2.13148 11.7002 1.83301 11.332 1.83301C10.9638 1.83301 10.6654 2.13148 10.6654 2.49967H5.33203Z",fill:"#646A73"}),u.createElement("path",{d:"M5.33203 9.16634C5.70022 9.16634 5.9987 9.46482 5.9987 9.83301V10.4997C5.9987 10.8679 5.70022 11.1663 5.33203 11.1663H4.66536C4.29717 11.1663 3.9987 10.8679 3.9987 10.4997V9.83301C3.9987 9.46482 4.29717 9.16634 4.66536 9.16634H5.33203Z",fill:"#646A73"}),u.createElement("path",{d:"M4.66536 5.83301C4.29718 5.83301 3.9987 6.13148 3.9987 6.49967V7.16634C3.9987 7.53453 4.29717 7.83301 4.66536 7.83301H5.33203C5.70022 7.83301 5.9987 7.53453 5.9987 7.16634V6.49967C5.9987 6.13148 5.70022 5.83301 5.33203 5.83301H4.66536Z",fill:"#646A73"}),u.createElement("path",{d:"M11.332 10.4997C11.332 10.1315 11.6305 9.83301 11.9987 9.83301C12.3669 9.83301 12.6654 10.1315 12.6654 10.4997V11.1663H13.332C13.7002 11.1663 13.9987 11.4648 13.9987 11.833C13.9987 12.2012 13.7002 12.4997 13.332 12.4997H11.9987C11.6305 12.4997 11.332 12.2012 11.332 11.833V10.4997Z",fill:"#646A73"}),u.createElement("path",{d:"M11.9987 15.833C14.2078 15.833 15.9987 14.0421 15.9987 11.833C15.9987 9.62387 14.2078 7.83301 11.9987 7.83301C9.78956 7.83301 7.9987 9.62387 7.9987 11.833C7.9987 14.0421 9.78956 15.833 11.9987 15.833ZM11.9987 14.4997C10.5259 14.4997 9.33203 13.3058 9.33203 11.833C9.33203 10.3602 10.5259 9.16634 11.9987 9.16634C13.4715 9.16634 14.6654 10.3602 14.6654 11.833C14.6654 13.3058 13.4715 14.4997 11.9987 14.4997Z",fill:"#646A73"}),u.createElement("path",{d:"M9.33203 6.49967C9.33203 6.13148 9.03355 5.83301 8.66536 5.83301H7.9987C7.63051 5.83301 7.33203 6.13148 7.33203 6.49967V7.16634C7.33203 7.53453 7.63051 7.83301 7.9987 7.83301H8.66536C9.03356 7.83301 9.33203 7.53453 9.33203 7.16634V6.49967Z",fill:"#646A73"}));function Ms({config:e,setConfig:s,tableList:a,tableRangeList:o,dateTypeList:n,numberOrCurrencyList:r,setData:f}){const{t:y}=z(),x=e.tableRange.type===j.ALL?"ALL":e.tableRange.viewId,[w,Y]=u.useState(x),[I,H]=u.useState(te(e.dateRange)),P=async l=>{e.tableId=l,e.tableRange={type:j.ALL},Y("ALL"),f(e)},W=async l=>{Y(l);let C;w==="ALL"?C={type:j.ALL}:C=o.find(p=>p.viewId===w),s({...e,tableRange:C})},$=(l,C)=>{var p;if(l==="dateTypeFieldId"){const h=(p=n.find(v=>v.fieldId===C))==null?void 0:p.fieldType;s({...e,[l]:C,dateTypeFieldType:h})}s({...e,[l]:C})},S=l=>{H(te(l));const C=e.momOrYoy.map(p=>(p.momOrYoyCalcMethod="mom",p));s({...e,dateRange:l,momOrYoy:C})},O=(l,C,p,h)=>{l={...l,[C]:p},C==="momOrYoyDesc"&&(l.manualSetDesc=!0);const{manualSetDesc:v,momOrYoyCalcMethod:M,momOrYoyCalcType:L}=l;v||(l.momOrYoyDesc=ps(M,L)),e.momOrYoy[h]=l,s({...e})},D=u.useRef(null),E=()=>{const l={momOrYoyDesc:y("momGrowthRate"),manualSetDesc:!1,momOrYoyCalcMethod:"mom",momOrYoyCalcType:"differenceRate"};e.momOrYoy.push(l),s({...e}),setTimeout(()=>{var C;(C=D.current)==null||C.scrollIntoView({behavior:"smooth"})},0)},Q=l=>{e.momOrYoy.splice(l,1),s({...e})};return t.jsxs("div",{className:"form-main",children:[t.jsx("div",{className:"form-title",children:y("dataSource")}),t.jsx("div",{className:"form-item",children:t.jsx(g,{prefix:t.jsx(N,{svg:t.jsx(ae,{})}),optionList:a,value:e.tableId,onChange:P})}),t.jsx("div",{className:"form-title",children:y("dataRange")}),t.jsx("div",{className:"form-item",children:t.jsx(g,{prefix:t.jsx(N,{svg:t.jsx(ae,{})}),value:w,onChange:W,children:o.map(l=>{let C={...l};return l.type===j.ALL&&(C.viewName=y("allData"),C.viewId="ALL"),C}).map(l=>t.jsx(g.Option,{value:l.viewId,children:l.viewName},l.viewId))})}),t.jsx(J,{style:{borderColor:"var(--divider)",marginTop:"12px"}}),t.jsx("div",{className:"form-title",children:y("dateFiltering")}),t.jsxs("div",{className:"form-item",children:[t.jsx("div",{className:"form-subTitle",children:y("basis")}),t.jsx(g,{placeholder:y("dataPlaceholder"),prefix:t.jsx(N,{svg:t.jsx(ws,{})}),value:e.dateTypeFieldId,onChange:l=>{$("dateTypeFieldId",l)},children:n.map(l=>t.jsx(g.Option,{value:l.fieldId,children:l.fieldName},l.fieldId))}),t.jsxs("div",{className:"form-item",children:[t.jsx("div",{className:"form-subTitle",children:y("range")}),t.jsx(g,{optionList:os,prefix:t.jsx(N,{svg:t.jsx(Ys,{})}),value:e.dateRange,onChange:S})]})]}),t.jsx("div",{className:"form-title",children:y("statisticalMethods")}),t.jsx("div",{className:"form-item",children:t.jsx(g,{optionList:ns,value:e.statisticalType,onChange:l=>{$("statisticalType",l)}})}),e.statisticalType==="number"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-item noBorder",children:t.jsx(g,{optionList:ss,value:e.statisticalCalcType,onChange:l=>$("statisticalCalcType",l)})}),t.jsx("div",{className:"form-item",children:t.jsx(g,{prefix:t.jsx(N,{svg:t.jsx(xs,{})}),value:e.numberOrCurrencyFieldId,onChange:l=>{$("numberOrCurrencyFieldId",l)},children:r.map(l=>t.jsx(g.Option,{value:l.fieldId,children:l.fieldName},l.fieldId))})})]}),t.jsx(J,{style:{borderColor:"var(--divider)",margin:"12px 0 20px 0"}}),t.jsxs("div",{className:"form-title",children:[t.jsx("span",{children:y("mom_yoy")}),t.jsx(ne,{disabled:e.momOrYoy.length>=4,theme:"borderless",icon:t.jsx(we,{size:"small"}),style:{fontWeight:"normal"},onClick:E,children:y("addMom_Yoy")})]}),e.momOrYoy&&e.momOrYoy.map((l,C)=>t.jsxs("div",{className:"form-item bg-grey",children:[e.momOrYoy.length>1&&t.jsx("div",{className:"icon-delete",onClick:()=>{Q(C)},children:t.jsx(Ye,{size:"small"})}),t.jsx("div",{className:"form-subTitle",children:y("description")}),t.jsx(Z,{value:l.momOrYoyDesc,onChange:p=>{O(l,"momOrYoyDesc",p,C)}}),t.jsx("div",{className:"form-subTitle",children:y("calculation")}),t.jsx(g,{position:"top",optionList:I,value:l.momOrYoyCalcMethod,onChange:p=>O(l,"momOrYoyCalcMethod",p,C)}),t.jsx("div",{className:"form-subTitle",children:y("calculationType")}),t.jsx(g,{position:"top",optionList:rs,value:l.momOrYoyCalcType,onChange:p=>O(l,"momOrYoyCalcType",p,C)}),t.jsx("div",{ref:D})]},C))]})}function Ls({config:e,setConfig:s}){const{t:a}=z(),o=(r,f)=>{s({...e,[r]:f})},n=r=>`${r}`.replace(/\D/g,"");return t.jsxs("div",{className:"form-main",children:[t.jsx("div",{className:"form-title",children:a("color")}),t.jsx("div",{className:"form-item",style:{margin:"6px 0 18px 0"},children:t.jsx(gs,{onChange:r=>{o("color",r)},name:e.color})}),t.jsx("div",{className:"form-title",children:a("iconStyle")}),t.jsx("div",{className:"form-item",children:t.jsx(g,{value:e.iconStyleId,onChange:r=>{o("iconStyleId",r)},children:se.map(r=>t.jsx(g.Option,{value:r.id,children:t.jsxs("div",{className:"index-icon",children:[t.jsxs("div",{className:R("index-icon-item",r.upIconColor),children:[U(r.upIcon),t.jsx("div",{className:"number",children:"10"})]}),t.jsxs("div",{className:R("index-icon-item",r.constIconColor),children:[t.jsx(oe,{size:"small"}),t.jsx("div",{className:"number",children:"0"})]}),t.jsxs("div",{className:R("index-icon-item",r.downIconColor),children:[U(r.downIcon),t.jsx("div",{className:"number",children:"10"})]})]})},r.id))})}),t.jsx("div",{className:"form-title",children:a("indexDataFormat")}),t.jsxs("div",{className:"form-item",children:[t.jsx("div",{className:"form-subTitle",children:a("decimalPlaces_Format")}),t.jsxs("div",{className:"flex-between",children:[t.jsx(Me,{style:{marginRight:"10px",flex:1},value:e.decimal,formatter:n,onNumberChange:r=>{o("decimal",r)},min:0,max:5}),t.jsx(g,{value:e.numberFormat,style:{flex:1},onChange:r=>{o("numberFormat",r)},children:cs.map(r=>t.jsx(g.Option,{value:r.value,children:r.label},r.value))})]})]}),t.jsxs("div",{className:"flex-between",children:[t.jsxs("div",{className:"form-item",style:{marginRight:"10px"},children:[t.jsx("div",{className:"form-subTitle",children:a("prefix")}),t.jsx(Z,{value:e.prefix,placeholder:a("prefixPlaceholder"),onChange:r=>{o("prefix",r)}})]}),t.jsxs("div",{className:"form-item",children:[t.jsx("div",{className:"form-subTitle",children:a("suffix")}),t.jsx(Z,{value:e.suffix,placeholder:a("suffixPlaceholder"),onChange:r=>{o("suffix",r)}})]})]})]})}function $s({renderData:e,setRenderData:s}){const{t:a}=z(),o=[{key:"1",tab:a("type_Date")},{key:"2",tab:a("customStyle")}],[n,r]=u.useState(is);as(r);const f=()=>{if(!n.dateTypeFieldId){Ie.error(a("dataPlaceholder"));return}const h=ce(n)[0];b.saveConfig({customConfig:n,dataConditions:h})},[y,x]=u.useState([]),[w,Y]=u.useState([{type:j.ALL}]),[I,H]=u.useState([]),[P,W]=u.useState([]),$=u.useCallback(async()=>{const h=await Le.getTableList(),v=[];for(const M of h){const L=await M.getName();v.push({value:M.id,label:L})}return v},[]),S=u.useCallback(h=>b.getTableDataRange(h),[]),O=u.useCallback(async h=>{const v=await b.getCategories(h),M=[V.DateTime,V.CreatedTime,V.ModifiedTime],L=v.filter(B=>M.includes(B.fieldType))||[],k=[V.Number,V.Currency],A=v.filter(B=>k.includes(B.fieldType))||[];return{dateTypeList:L,numberOrCurrencyList:A}},[]),D=async(h,v=!0)=>{const M=await S(h.tableId);Y(M);const{dateTypeList:L,numberOrCurrencyList:k}=await O(h.tableId);if(H(L),W(k),v){h.dateTypeFieldId=L[0].fieldId||"";const A=k.length>0;h.statisticalType=A?"number":"total",A&&(h.numberOrCurrencyFieldId=k[0].fieldId)}r({...h})},E=async()=>{var M;const h=await $();x(h);let v={};b.state===T.Create?(v={...n},v.tableId=(M=h[0])==null?void 0:M.value,D(v)):(v=await le(),D(v,!1))};u.useEffect(()=>{E()},[$,S,O]);const[Q,l]=u.useState([]),C=X(async()=>{if(!n.tableId)return;const h=await ie(n);l(h),q(n,h,s)},200);u.useEffect(()=>{C()},[n.tableId,n.tableRange,n.dateTypeFieldId,n.dateTypeFieldType,n.dateRange,n.statisticalType,n.numberOrCurrencyFieldId,n.statisticalCalcType,n.momOrYoy]);const p=X(()=>{n.tableId&&q(n,Q,s)},200);return u.useEffect(()=>{p()},[n.color,n.iconStyleId,n.decimal,n.numberFormat,n.prefix,n.suffix]),t.jsxs("div",{className:"main-config-panel left-border",children:[t.jsx("div",{className:"form",children:t.jsx($e,{defaultActiveKey:"1",children:o.map(h=>t.jsxs(Te,{tab:h.tab,itemKey:h.key,children:[h.key==="1"&&t.jsx(Ms,{config:n,setConfig:r,tableList:y,tableRangeList:w,dateTypeList:I,numberOrCurrencyList:P,setData:D}),h.key==="2"&&t.jsx(Ls,{config:n,setConfig:r})]},h.key))})}),t.jsx(ne,{className:"btn",theme:"solid",onClick:f,children:a("confirm")})]})}function Ts(){es();const e=b.state===T.Config||b.state===T.Create,[s,a]=u.useState({color:"primary",value:"",prefix:"",suffix:"",momYoyList:[]}),o=async()=>{const n=await le(),r=await ie(n);q(n,r,a)};return u.useEffect(()=>{(b.state===T.View||b.state===T.FullScreen)&&(o(),b.onDataChange(async n=>{o()}))},[]),t.jsxs("main",{className:R(e?"top-border":"","main"),children:[t.jsx(bs,{renderData:s}),e&&t.jsx($s,{renderData:s,setRenderData:a})]})}m.locale("en-us");function Is(e){const[s,a]=u.useState(Oe);return u.useEffect(()=>{if(e.neverShowBanner)return;const o=new Promise((n,r)=>{setTimeout(()=>{r(!1)},3e3)});Promise.race([F.bridge.getLanguage(),o]).then(n=>{n==="zh"&&(a(De),m.locale("zh-cn")),n==="ja"&&a(Ve)}).catch(n=>{console.error(n)})},[]),e.neverShowBanner?e.children||null:t.jsx("div",{children:t.jsx(je,{locale:s,children:e.children})})}const Os=Re([{path:"/",element:t.jsx(Ts,{})}]),Ds=ke.createRoot(document.getElementById("root"));Ds.render(t.jsx(Is,{children:t.jsx(Ne,{router:Os})}));