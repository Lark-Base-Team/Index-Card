import{i as W,B as le,a as ce,p as H,r as y,b as v,t as d,c,Z as O,G as I,Q as ie,I as J,d as de,e as ue,f as me,g as ye,h as he,j as fe,k as m,q as Ce,l as t,m as pe,u as Z,s as D,n as V,o as B,S as p,v as R,D as U,w as X,x as ve,y as ge,F as E,z as be,A as xe,C as we,T as Ye,E as Me,H as Le,J as $e,K as Te,L as Ie,M as Oe,N as De,O as Ve,R as je}from"./vendor-CaXK23aT.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function o(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(l){if(l.ep)return;l.ep=!0;const r=o(l);fetch(l.href,r)}})();const Re="Type & Data",ke="Data Source",Ne="Data Range",Se="Date Filtering",Ge="Date",He="Create Date",Ae="Modify Date",Fe="Basis",Pe="Range",We="Today",Ee="Yesterday",Qe="Current Week",Be="Last Week",_e="Current Month",Ze="Last Month",Ue="Current Quarter",qe="Last Quarter",ze="Current Year",Ke="Last Year",Je="Last 7 Days",Xe="Last 14 Days",et="Last 30 Days",tt="Last 365 Days",at="Last 3 Months",ot="Last 6 Months",nt="Statistical Methods",st="Total Records Count",rt="Field Value Count",lt="Number",ct="Currency",it="Sum",dt="Average",ut="Max",mt="Min",yt="MoM & YoY",ht="Add MoM & YoY",ft="Description",Ct="Calculation Method",pt="MoM",vt="Week YoY",gt="Month YoY",bt="Year YoY",xt="Calculation Type",wt="MoM Growth Rate",Yt="MoM Growth Value",Mt="MoM Original Value",Lt="Week YoY Growth Value",$t="Month YoY Growth Value",Tt="Year YoY Growth Value",It="Week YoY Original Value",Ot="Month YoY Original Value",Dt="Year YoY Original Value",Vt="Week YoY Growth Rate",jt="Month YoY Growth Rate",Rt="Year YoY Growth Rate",kt="Growth Value",Nt="Growth Rate",St="Difference Rate",Gt="Difference Value",Ht="Original Value",At="Custom Style",Ft="Color",Pt="Icon Style",Wt="Index Data Format",Et="Decimal Places & Format",Qt="Number (Thousands Separator)",Bt="Percentage",_t="Per Mille",Zt="Prefix",Ut="Suffix",qt="Please enter a prefix",zt="Please enter a suffix",Kt="Please select a date field",Jt="Only positive integers are allowed",Xt="All Data",ea="Confirm",ta={type_Date:Re,dataSource:ke,dataRange:Ne,dateFiltering:Se,date:Ge,createDate:He,ModifyDate:Ae,basis:Fe,range:Pe,today:We,yesterday:Ee,currentWeek:Qe,lastWeek:Be,currentMonth:_e,lastMonth:Ze,currentQuarter:Ue,lastQuarter:qe,currentYear:ze,lastYear:Ke,last7Days:Je,last14Days:Xe,last30Days:et,last365Days:tt,last3Months:at,last6Months:ot,statisticalMethods:nt,recordsTotal:st,fieldValue:rt,number:lt,currency:ct,sum:it,average:dt,max:ut,min:mt,mom_yoy:yt,addMom_Yoy:ht,description:ft,calculation:Ct,mom:pt,weekYoy:vt,monthYoy:gt,yearYoy:bt,calculationType:xt,momGrowthRate:wt,momGrowthValue:Yt,momOriginalValue:Mt,weekYoyGrowthValue:Lt,monthYoyGrowthValue:$t,yearYoyGrowthValue:Tt,weekYoyOriginalValue:It,monthYoyOriginalValue:Ot,yearYoyOriginalValue:Dt,weekYoyGrowthRate:Vt,monthYoyGrowthRate:jt,yearYoyGrowthRate:Rt,growthValue:kt,growthRate:Nt,differenceRate:St,differenceValue:Gt,originalValue:Ht,customStyle:At,color:Ft,iconStyle:Pt,indexDataFormat:Wt,decimalPlaces_Format:Et,numberMillennials:Qt,percentage:Bt,millageRate:_t,prefix:Zt,suffix:Ut,prefixPlaceholder:qt,suffixPlaceholder:zt,dataPlaceholder:Kt,formatErrorMessage:Jt,allData:Xt,confirm:ea},aa="类型与数据",oa="数据源",na="数据范围",sa="日期筛选",ra="日期",la="创建日期",ca="修改日期",ia="依据",da="范围",ua="今天",ma="昨天",ya="本周",ha="上周",fa="本月",Ca="上月",pa="本季度",va="上季度",ga="今年",ba="去年",xa="最近7天",wa="最近14天",Ya="最近30天",Ma="最近365天",La="最近3个月",$a="最近6个月",Ta="统计方式",Ia="统计记录总数",Oa="统计字段数值",Da="数字",Va="货币",ja="求和",Ra="平均值",ka="最大值",Na="最小值",Sa="环同比",Ga="添加环同比",Ha="描述",Aa="计算方式",Fa="环比",Pa="周同比",Wa="月同比",Ea="年同比",Qa="计算类型",Ba="环比增长率",_a="环比增长值",Za="环比原始值",Ua="周同比增长值",qa="月同比增长值",za="年同比增长值",Ka="周同比原始值",Ja="月同比原始值",Xa="年同比原始值",eo="周同比增长率",to="月同比增长率",ao="年同比增长率",oo="增长值",no="增长率",so="差异率",ro="差异值",lo="原始值",co="自定义样式",io="颜色",uo="图标样式",mo="指标数据格式",yo="小数位与格式",ho="数字（千分位）",fo="百分比",Co="千分比",po="前缀",vo="后缀",go="请输入前缀",bo="请输入后缀",xo="请选择日期字段",wo="仅允许输入大于零的整数",Yo="全部数据",Mo="确定",Lo={type_Date:aa,dataSource:oa,dataRange:na,dateFiltering:sa,date:ra,createDate:la,ModifyDate:ca,basis:ia,range:da,today:ua,yesterday:ma,currentWeek:ya,lastWeek:ha,currentMonth:fa,lastMonth:Ca,currentQuarter:pa,lastQuarter:va,currentYear:ga,lastYear:ba,last7Days:xa,last14Days:wa,last30Days:Ya,last365Days:Ma,last3Months:La,last6Months:$a,statisticalMethods:Ta,recordsTotal:Ia,fieldValue:Oa,number:Da,currency:Va,sum:ja,average:Ra,max:ka,min:Na,mom_yoy:Sa,addMom_Yoy:Ga,description:Ha,calculation:Aa,mom:Fa,weekYoy:Pa,monthYoy:Wa,yearYoy:Ea,calculationType:Qa,momGrowthRate:Ba,momGrowthValue:_a,momOriginalValue:Za,weekYoyGrowthValue:Ua,monthYoyGrowthValue:qa,yearYoyGrowthValue:za,weekYoyOriginalValue:Ka,monthYoyOriginalValue:Ja,yearYoyOriginalValue:Xa,weekYoyGrowthRate:eo,monthYoyGrowthRate:to,yearYoyGrowthRate:ao,growthValue:oo,growthRate:no,differenceRate:so,differenceValue:ro,originalValue:lo,customStyle:co,color:io,iconStyle:uo,indexDataFormat:mo,decimalPlaces_Format:yo,numberMillennials:ho,percentage:fo,millageRate:Co,prefix:po,suffix:vo,prefixPlaceholder:go,suffixPlaceholder:bo,dataPlaceholder:xo,formatErrorMessage:wo,allData:Yo,confirm:Mo},$o="タイプとデータ",To="データソース",Io="データ範囲",Oo="日付フィルタリング",Do="日付",Vo="作成日",jo="更新日",Ro="根拠",ko="範囲",No="今日",So="昨日",Go="今週",Ho="先週",Ao="今月",Fo="先月",Po="今四半期",Wo="前四半期",Eo="今年",Qo="去年",Bo="過去7日間",_o="過去14日間",Zo="過去30日間",Uo="過去365日間",qo="過去3ヶ月",zo="過去6ヶ月",Ko="統計手法",Jo="総レコード数",Xo="フィールド数値の集計",en="数字",tn="通貨",an="合計",on="平均値",nn="最大値",sn="最小値",rn="環境比と同期比",ln="追加環境比と同期比",cn="説明",dn="計算方法",un="環境比",mn="週同期比",yn="月同期比",hn="年同期比",fn="計算タイプ",Cn="環境比成長率",pn="環境比成長値",vn="環境比原始値",gn="週同期比成長値",bn="月同期比成長値",xn="年同期比成長値",wn="週同期比原始値",Yn="月同期比原始値",Mn="年同期比原始値",Ln="週同期比成長率",$n="月同期比成長率",Tn="年同期比成長率",In="成長値",On="成長率",Dn="差異率",Vn="差異値",jn="原始値",Rn="カスタムスタイル",kn="色",Nn="アイコンスタイル",Sn="指標データフォーマット",Gn="小数点以下の桁数とフォーマット",Hn="数字（千分位）",An="パーセンテージ",Fn="パーミレ（千分率）",Pn="接頭辞",Wn="接尾辞",En="接頭辞を入力してください",Qn="接尾辞を入力してください",Bn="日付フィールドを選択してください",_n="正の整数のみが許可されます",Zn="全てのデータ",Un="確定",qn={type_Date:$o,dataSource:To,dataRange:Io,dateFiltering:Oo,date:Do,createDate:Vo,ModifyDate:jo,basis:Ro,range:ko,today:No,yesterday:So,currentWeek:Go,lastWeek:Ho,currentMonth:Ao,lastMonth:Fo,currentQuarter:Po,lastQuarter:Wo,currentYear:Eo,lastYear:Qo,last7Days:Bo,last14Days:_o,last30Days:Zo,last365Days:Uo,last3Months:qo,last6Months:zo,statisticalMethods:Ko,recordsTotal:Jo,fieldValue:Xo,number:en,currency:tn,sum:an,average:on,max:nn,min:sn,mom_yoy:rn,addMom_Yoy:ln,description:cn,calculation:dn,mom:un,weekYoy:mn,monthYoy:yn,yearYoy:hn,calculationType:fn,momGrowthRate:Cn,momGrowthValue:pn,momOriginalValue:vn,weekYoyGrowthValue:gn,monthYoyGrowthValue:bn,yearYoyGrowthValue:xn,weekYoyOriginalValue:wn,monthYoyOriginalValue:Yn,yearYoyOriginalValue:Mn,weekYoyGrowthRate:Ln,monthYoyGrowthRate:$n,yearYoyGrowthRate:Tn,growthValue:In,growthRate:On,differenceRate:Dn,differenceValue:Vn,originalValue:jn,customStyle:Rn,color:kn,iconStyle:Nn,indexDataFormat:Sn,decimalPlaces_Format:Gn,numberMillennials:Hn,percentage:An,millageRate:Fn,prefix:Pn,suffix:Wn,prefixPlaceholder:En,suffixPlaceholder:Qn,dataPlaceholder:Bn,formatErrorMessage:_n,allData:Zn,confirm:Un},zn={zh:{translation:Lo},en:{translation:ta},ja:{translation:qn}};W.use(le).use(ce).init({resources:zn,fallbackLng:"en",interpolation:{escapeValue:!1}});H.bridge.getLanguage().then(e=>{W.language!==e&&W.changeLanguage(e)});function q(e){document.body.setAttribute("theme-mode",e)}function Kn(){y.useLayoutEffect(()=>{H.bridge.getTheme().then(e=>{q(e.toLocaleLowerCase())}),H.bridge.onThemeChange(e=>{q(e.data.theme.toLocaleLowerCase())})},[])}const Jn=(e,n)=>{e&&(n(e),setTimeout(()=>{v.setRendered()},3e3))};async function Xn(e){y.useEffect(()=>{const n=v.onConfigChange(o=>{const a=o.data.customConfig;Jn(a,e)});return()=>{n()}},[])}var i=(e=>(e.CurrentQuarter="CurrentQuarter",e.LastQuarter="LastQuarter",e.CurrentYear="CurrentYear",e.LastYear="LastYear",e.Last14Days="Last14Days",e.Last365Days="Last365Days",e.Last3Months="Last3Months",e.Last6Months="Last6Months",e))(i||{});const es=[{label:d("today"),value:c.Today},{label:d("yesterday"),value:c.Yesterday},{label:d("currentWeek"),value:c.CurrentWeek},{label:d("lastWeek"),value:c.LastWeek},{label:d("currentMonth"),value:c.CurrentMonth},{label:d("lastMonth"),value:c.LastMonth},{label:d("currentQuarter"),value:i.CurrentQuarter},{label:d("lastQuarter"),value:i.LastQuarter},{label:d("currentYear"),value:i.CurrentYear},{label:d("lastYear"),value:i.LastYear},{label:d("last7Days"),value:c.TheLastWeek},{label:d("last14Days"),value:i.Last14Days},{label:d("last30Days"),value:c.TheLastMonth},{label:d("last365Days"),value:i.Last365Days},{label:d("last3Months"),value:i.Last3Months},{label:d("last6Months"),value:i.Last6Months}],ts=[{label:d("recordsTotal"),value:"total"},{label:d("fieldValue"),value:"number"}],as=[{label:d("sum"),value:"SUM"},{label:d("average"),value:"AVERAGE"},{label:d("max"),value:"MAX"},{label:d("min"),value:"MIN"}],G=[{label:d("mom"),value:"mom",disabled:!1},{label:d("weekYoy"),value:"yoyByWeek",disabled:!1},{label:d("monthYoy"),value:"yoyByMonth",disabled:!1},{label:d("yearYoy"),value:"yoyByYear",disabled:!1}],os=[{label:d("differenceRate"),value:"differenceRate"},{label:d("differenceValue"),value:"differenceValue"},{label:d("originalValue"),value:"originalValue"}],ee=[{id:"1",upIcon:"IconTriangleUp",upIconColor:"green",downIcon:"IconTriangleDown",downIconColor:"red",constIcon:"IconMinus",constIconColor:"black"},{id:"2",upIcon:"IconFilledArrowUp",upIconColor:"green",downIcon:"IconFilledArrowDown",downIconColor:"red",constIcon:"IconMinus",constIconColor:"black"},{id:"3",upIcon:"IconArrowUpRight",upIconColor:"green",downIcon:"IconArrowDownRight",downIconColor:"red",constIcon:"IconMinus",constIconColor:"black"},{id:"4",upIcon:"IconTriangleUp",upIconColor:"red",downIcon:"IconTriangleDown",downIconColor:"green",constIcon:"IconMinus",constIconColor:"black"},{id:"5",upIcon:"IconFilledArrowUp",upIconColor:"red",downIcon:"IconFilledArrowDown",downIconColor:"green",constIcon:"IconMinus",constIconColor:"black"},{id:"6",upIcon:"IconArrowUpRight",upIconColor:"red",downIcon:"IconArrowDownRight",downIconColor:"green",constIcon:"IconMinus",constIconColor:"black"}],ns={IconMinus:J,IconTriangleUp:de,IconTriangleDown:ue,IconFilledArrowUp:me,IconFilledArrowDown:ye,IconArrowUpRight:he,IconArrowDownRight:fe},ss=[{label:d("numberMillennials"),value:"numberMillennials"},{label:d("number"),value:"number"},{label:d("percentage"),value:"percentage"},{label:d("millageRate"),value:"millageRate"}],rs={tableId:"",tableRange:{type:O.ALL},dateTypeFieldId:"",dateTypeFieldType:I.DateTime,dateRange:c.Today,statisticalType:"total",numberOrCurrencyFieldId:"",statisticalCalcType:ie.SUM,momOrYoy:[{momOrYoyDesc:d("momGrowthRate"),manualSetDesc:!1,momOrYoyCalcMethod:"mom",momOrYoyCalcType:"differenceRate"}],color:"primary",iconStyleId:"1",decimal:0,numberFormat:"number",prefix:"",suffix:""};m.extend(Ce);const ls=e=>e.replace(/\B(?=(\d{3})+$)/g,","),Q=(e,n,o="0.8vmax")=>{const a=ns[e];return n?t.jsx(a,{style:{fontSize:n,marginRight:o}}):t.jsx(a,{size:"small",style:{marginRight:o}})},cs=(e,n,o)=>{if(n==="numberMillennials"){const a=e.toFixed(o).split("."),l=ls(a[0]);return a.length>1?`${l}.${a[1]}`:l}else return n==="number"?e.toFixed(o):n==="percentage"?(e*100).toFixed(o)+"%":(e*1e3).toFixed(o)+"‰"},z=e=>[c.Today,c.Yesterday].includes(e)?G:[c.CurrentWeek,c.LastWeek,c.TheLastWeek,i.Last14Days,c.TheLastMonth,i.Last365Days,i.Last3Months,i.Last6Months].includes(e)?G.map(r=>({...r,disabled:r.value!=="mom"})):[i.CurrentQuarter,i.LastQuarter,i.CurrentYear,i.LastYear].includes(e)?G.map(r=>({...r,disabled:r.value==="yoyByWeek"||r.value==="yoyByMonth"})):[c.CurrentMonth,c.LastMonth].includes(e)?G.map(r=>({...r,disabled:r.value==="yoyByWeek"})):[],te=e=>({[c.Today]:()=>{const o=m().startOf("day").valueOf(),a=m().endOf("day").valueOf();return{startTime:o,endTime:a}},[c.Yesterday]:()=>{const o=m().subtract(1,"day").startOf("day").valueOf(),a=m().subtract(1,"day").endOf("day").valueOf();return{startTime:o,endTime:a}},[c.CurrentWeek]:()=>{const o=m().startOf("week").valueOf(),a=m().endOf("week").valueOf();return{startTime:o,endTime:a}},[c.LastWeek]:()=>{const o=m().startOf("week").subtract(1,"week").valueOf(),a=m().endOf("week").subtract(1,"week").valueOf();return{startTime:o,endTime:a}},[c.CurrentMonth]:()=>{const o=m().startOf("month").valueOf(),a=m().endOf("month").valueOf();return{startTime:o,endTime:a}},[c.LastMonth]:()=>{const o=m().startOf("month").subtract(1,"month").valueOf(),a=m().endOf("month").subtract(1,"month").valueOf();return{startTime:o,endTime:a}},[i.CurrentQuarter]:()=>{const o=m().startOf("quarter").valueOf(),a=m().endOf("quarter").valueOf();return{startTime:o,endTime:a}},[i.LastQuarter]:()=>{const o=m().startOf("quarter").subtract(1,"quarter").valueOf(),a=m().endOf("quarter").subtract(1,"quarter").valueOf();return{startTime:o,endTime:a}},[i.CurrentYear]:()=>{const o=m().startOf("year").valueOf(),a=m().endOf("year").valueOf();return{startTime:o,endTime:a}},[i.LastYear]:()=>{const o=m().startOf("year").subtract(1,"year").valueOf(),a=m().endOf("year").subtract(1,"year").valueOf();return{startTime:o,endTime:a}},[c.TheLastWeek]:()=>{const o=m().subtract(7,"day").valueOf(),a=m().endOf("day").valueOf();return{startTime:o,endTime:a}},[i.Last14Days]:()=>{const o=m().subtract(14,"day").valueOf(),a=m().endOf("day").valueOf();return{startTime:o,endTime:a}},[c.TheLastMonth]:()=>{const o=m().subtract(30,"day").valueOf(),a=m().endOf("day").valueOf();return{startTime:o,endTime:a}},[i.Last365Days]:()=>{const o=m().subtract(365,"day").valueOf(),a=m().endOf("day").valueOf();return{startTime:o,endTime:a}},[i.Last3Months]:()=>{const o=m().subtract(3,"month").valueOf(),a=m().endOf("day").valueOf();return{startTime:o,endTime:a}},[i.Last6Months]:()=>{const o=m().subtract(6,"month").valueOf(),a=m().endOf("day").valueOf();return{startTime:o,endTime:a}}})[e](),is=e=>{let n=1;return[c.Today,c.Yesterday,c.CurrentWeek,c.LastWeek,c.CurrentMonth,c.LastMonth,i.CurrentQuarter,i.LastQuarter,i.CurrentYear,i.LastYear].includes(e)&&(n=1),e===c.TheLastWeek&&(n=7),e===i.Last14Days&&(n=14),e===c.TheLastMonth&&(n=30),e===i.Last365Days&&(n=365),e===i.Last3Months&&(n=3),e===i.Last6Months&&(n=6),n},ds=(e,n)=>{let o="day";[c.Today,c.Yesterday,c.TheLastWeek,i.Last14Days,c.TheLastMonth,i.Last365Days].includes(e)&&n==="mom"&&(o="day");const l=[c.CurrentWeek,c.LastWeek],r=[c.Today,c.Yesterday];(l.includes(e)&&n==="mom"||r.includes(e)&&n==="yoyByWeek")&&(o="week");const h=[c.CurrentMonth,c.LastMonth,i.Last3Months,i.Last6Months],f=[c.Today,c.Yesterday,c.CurrentMonth,c.LastMonth];(h.includes(e)&&n==="mom"||f.includes(e)&&n==="yoyByMonth")&&(o="month"),[i.CurrentQuarter,i.LastQuarter].includes(e)&&n==="mom"&&(o="quarter");const b=[i.CurrentYear,i.LastYear],x=[c.Today,c.Yesterday,c.CurrentMonth,c.LastMonth,i.CurrentQuarter,i.LastQuarter,i.CurrentYear,i.LastYear];return(b.includes(e)&&n==="mom"||x.includes(e)&&n==="yoyByYear")&&(o="year"),o},us=(e,n)=>{const o=is(e),a=ds(e,n),{startTime:l,endTime:r}=te(e),h=m(l).subtract(o,a).valueOf(),f=m(r).subtract(o,a).valueOf();return{startTime:h,endTime:f}},ms=(e,n,o,a)=>{const l={},r=ee.find(h=>h.id===e);return a===0&&n==="differenceRate"||o===a?(l.icon=r.constIcon,l.color=r.constIconColor):o<a?(l.icon=r.downIcon,l.color=r.downIconColor):(l.icon=r.upIcon,l.color=r.upIconColor),l},ys=(e,n,o)=>{let a="";if(e==="differenceRate"){const l=Math.abs((n-o)/o)*100;a=o!==0?`${l.toFixed(0)}%`:""}else if(e==="differenceValue"){const l=Math.abs(n-o);a=l?`${l}`:""}else a=`${o}`;return a},ae=async()=>(await v.getConfig()).customConfig,oe=e=>{const o=[{dateRange:e.dateRange},...e.momOrYoy].map((r,h)=>{let f,g;if(h===0){const x=te(e.dateRange);f=x.startTime,g=x.endTime}else{const x={...r},$=us(e.dateRange,x.momOrYoyCalcMethod);f=$.startTime,g=$.endTime}return g=m(g).add(1,"day").startOf("day").valueOf(),{...e.tableRange,filterInfo:{conjunction:pe.And,conditions:[{fieldId:e.dateTypeFieldId,value:f,fieldType:e.dateTypeFieldType,operator:Z.IsGreater},{fieldId:e.dateTypeFieldId,value:g,fieldType:e.dateTypeFieldType,operator:Z.IsLess}]}}}),a=[{fieldId:e.numberOrCurrencyFieldId,rollup:e.statisticalCalcType}];return o.map(r=>({tableId:e.tableId,dataRange:r,series:e.statisticalType==="number"?a:"COUNTA"}))},ne=async e=>{var a;const n=oe(e),o=[];for(const l of n){const h=(a=(await v.getPreviewData(l))[1])==null?void 0:a.map(f=>f.value);o.push(h!=null&&h.length?h[0]:0)}return o},hs=(e,n)=>{let o={mom:d("mom"),yoyByWeek:d("weekYoy"),yoyByMonth:d("monthYoy"),yoyByYear:d("yearYoy")},a={differenceRate:d("growthRate"),differenceValue:d("growthValue"),originalValue:d("originalValue")};return`${o[e]}${a[n]}`},fs=async(e,n)=>{const o=n[0],a=n.splice(1,n.length-1),l=e.momOrYoy.map((h,f)=>{const g=a[f],b=ms(e.iconStyleId,h.momOrYoyCalcType,o,g);return{desc:h.momOrYoyDesc,calcType:h.momOrYoyCalcType,value:ys(h.momOrYoyCalcType,o,g),color:b.color,icon:b.icon}});return{color:e.color,value:cs(o,e.numberFormat,e.decimal),prefix:e.prefix,suffix:e.suffix,momYoyList:l}},se=async(e,n,o)=>{if(n.length<1)return;const a=await fs(e,n);o(a)},re=[{name:"primary",value:"var(--ccm-chart-N700)"},{name:"blue",value:"var(--ccm-chart-B500)"},{name:"Purple",value:"var(--ccm-chart-I500)"},{name:"green",value:"var(--ccm-chart-G500)"},{name:"cyan",value:"var(--ccm-chart-W500)"},{name:"yellow",value:"var(--ccm-chart-Y500)"},{name:"orange",value:"var(--ccm-chart-O500)"},{name:"red",value:"var(--ccm-chart-R400)"}];function Cs(e){return t.jsx("div",{className:"color-picker",children:re.map(({name:n,value:o})=>t.jsx("div",{onClick:()=>{e.onChange(n)},style:{borderColor:e.name===n?o:"transparent"},className:"color-picker-color-container",children:t.jsx("div",{style:{backgroundColor:o},className:"color-picker-color",children:e.name===n?t.jsx("div",{className:"selected-icon-container"}):null})},n))})}function ps({renderData:e}){var o;const n=v.state===D.Config||v.state===D.Create;return t.jsx("div",{className:"main-content",children:t.jsxs("div",{className:V({"main-content-warp":!0,"is-config":n}),children:[t.jsx("div",{className:"main-content-number text-hidden",style:{color:(o=re.find(a=>a.name===e.color))==null?void 0:o.value},children:`${e.prefix}${e.value}${e.suffix}`}),e.momYoyList.map((a,l)=>t.jsxs("div",{className:"main-content-description text-hidden",children:[t.jsx("div",{className:"description-text",children:a.desc}),t.jsxs("div",{className:V("description-index",a.color),children:[a.calcType==="originalValue"?null:Q(a.icon,"1.8vmax",a.value?void 0:"0"),t.jsx("div",{className:"description-index-number",children:a.value})]})]},l))]})})}const K=e=>y.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M1.33203 2.66634C1.33203 1.92996 1.92898 1.33301 2.66536 1.33301H13.332C14.0684 1.33301 14.6654 1.92996 14.6654 2.66634V13.333C14.6654 14.0694 14.0684 14.6663 13.332 14.6663H2.66536C1.92899 14.6663 1.33203 14.0694 1.33203 13.333V2.66634ZM2.66536 2.66634V13.333H13.332V2.66634H2.66536Z",fill:"#646A73"}),y.createElement("path",{d:"M8.33203 4.66634C7.96384 4.66634 7.66536 4.96482 7.66536 5.33301C7.66536 5.7012 7.96384 5.99967 8.33203 5.99967H11.332C11.7002 5.99967 11.9987 5.7012 11.9987 5.33301C11.9987 4.96482 11.7002 4.66634 11.332 4.66634H8.33203Z",fill:"#646A73"}),y.createElement("path",{d:"M3.9987 5.33301C3.9987 4.96482 4.29718 4.66634 4.66536 4.66634H5.9987C6.36689 4.66634 6.66536 4.96482 6.66536 5.33301C6.66536 5.7012 6.36689 5.99967 5.9987 5.99967H4.66536C4.29717 5.99967 3.9987 5.7012 3.9987 5.33301Z",fill:"#646A73"}),y.createElement("path",{d:"M8.33203 7.33301C7.96384 7.33301 7.66536 7.63148 7.66536 7.99967C7.66536 8.36786 7.96384 8.66634 8.33203 8.66634H11.332C11.7002 8.66634 11.9987 8.36786 11.9987 7.99967C11.9987 7.63148 11.7002 7.33301 11.332 7.33301H8.33203Z",fill:"#646A73"}),y.createElement("path",{d:"M3.9987 7.99967C3.9987 7.63148 4.29718 7.33301 4.66536 7.33301H5.9987C6.36689 7.33301 6.66536 7.63148 6.66536 7.99967C6.66536 8.36786 6.36689 8.66634 5.9987 8.66634H4.66536C4.29717 8.66634 3.9987 8.36786 3.9987 7.99967Z",fill:"#646A73"}),y.createElement("path",{d:"M8.33203 9.99967C7.96384 9.99967 7.66536 10.2982 7.66536 10.6663C7.66536 11.0345 7.96384 11.333 8.33203 11.333H11.332C11.7002 11.333 11.9987 11.0345 11.9987 10.6663C11.9987 10.2982 11.7002 9.99967 11.332 9.99967H8.33203Z",fill:"#646A73"}),y.createElement("path",{d:"M3.9987 10.6663C3.9987 10.2982 4.29718 9.99967 4.66536 9.99967H5.9987C6.36689 9.99967 6.66536 10.2982 6.66536 10.6663C6.66536 11.0345 6.36689 11.333 5.9987 11.333H4.66536C4.29717 11.333 3.9987 11.0345 3.9987 10.6663Z",fill:"#646A73"})),vs=e=>y.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M5.85044 1.42649C6.21505 1.47773 6.46908 1.81485 6.41784 2.17945L6.16192 4.00039H10.8155L11.0975 1.99389C11.1487 1.62928 11.4858 1.37525 11.8504 1.42649C12.215 1.47773 12.4691 1.81485 12.4178 2.17945L12.1619 4.00039H14.668C15.0362 4.00039 15.3346 4.29887 15.3346 4.66706C15.3346 5.03525 15.0362 5.33373 14.668 5.33373H11.9745L11.3187 10.0004H13.3346C13.7028 10.0004 14.0013 10.2989 14.0013 10.6671C14.0013 11.0353 13.7028 11.3337 13.3346 11.3337H11.1313L10.7478 14.0627C10.6965 14.4273 10.3594 14.6813 9.9948 14.6301C9.63019 14.5788 9.37616 14.2417 9.4274 13.8771L9.78485 11.3337H5.13129L4.74776 14.0627C4.69652 14.4273 4.35941 14.6813 3.9948 14.6301C3.63019 14.5788 3.37616 14.2417 3.4274 13.8771L3.78485 11.3337H1.33464C0.966446 11.3337 0.667969 11.0353 0.667969 10.6671C0.667969 10.2989 0.966446 10.0004 1.33464 10.0004H3.97224L4.6281 5.33373H2.66797C2.29978 5.33373 2.0013 5.03525 2.0013 4.66706C2.0013 4.29887 2.29978 4.00039 2.66797 4.00039H4.81548L5.09748 1.99389C5.14872 1.62928 5.48583 1.37525 5.85044 1.42649ZM9.97224 10.0004L10.6281 5.33373H5.97453L5.31868 10.0004H9.97224Z",fill:"#646A73"})),gs=e=>y.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M4.66536 1.3335C5.03355 1.3335 5.33203 1.63197 5.33203 2.00016H10.6654C10.6654 1.63197 10.9638 1.3335 11.332 1.3335C11.7002 1.3335 11.9987 1.63197 11.9987 2.00016C12.2748 2.00016 12.8119 2.00016 13.3321 2.00016C14.0684 2.00016 14.6654 2.59712 14.6654 3.3335V13.3335C14.6654 14.0699 14.0684 14.6668 13.332 14.6668H2.66536C1.92899 14.6668 1.33203 14.0699 1.33203 13.3335L1.33203 3.3335C1.33203 2.59712 1.92896 2.00016 2.66534 2.00016C3.18554 2.00016 3.72257 2.00016 3.9987 2.00016C3.9987 1.63197 4.29717 1.3335 4.66536 1.3335ZM10.6654 3.3335H5.33203C5.33203 3.70169 5.03355 4.00016 4.66536 4.00016C4.29717 4.00016 3.9987 3.70169 3.9987 3.3335H2.66536V13.3335H13.332V3.3335H11.9987C11.9987 3.70169 11.7002 4.00016 11.332 4.00016C10.9638 4.00016 10.6654 3.70169 10.6654 3.3335ZM5.9987 10.0002C5.9987 9.63197 5.70022 9.3335 5.33203 9.3335H4.66536C4.29717 9.3335 3.9987 9.63197 3.9987 10.0002V10.6668C3.9987 11.035 4.29717 11.3335 4.66536 11.3335H5.33203C5.70022 11.3335 5.9987 11.035 5.9987 10.6668V10.0002ZM6.9987 6.66683C6.9987 6.29864 7.29718 6.00016 7.66536 6.00016H8.33203C8.70022 6.00016 8.9987 6.29864 8.9987 6.66683V7.3335C8.9987 7.70169 8.70022 8.00016 8.33203 8.00016H7.66536C7.29717 8.00016 6.9987 7.70169 6.9987 7.3335V6.66683ZM8.9987 10.0002C8.9987 9.63197 8.70022 9.3335 8.33203 9.3335H7.66536C7.29717 9.3335 6.9987 9.63197 6.9987 10.0002V10.6668C6.9987 11.035 7.29718 11.3335 7.66536 11.3335H8.33203C8.70022 11.3335 8.9987 11.035 8.9987 10.6668V10.0002ZM9.9987 10.0002C9.9987 9.63197 10.2972 9.3335 10.6654 9.3335H11.332C11.7002 9.3335 11.9987 9.63197 11.9987 10.0002V10.6668C11.9987 11.035 11.7002 11.3335 11.332 11.3335H10.6654C10.2972 11.3335 9.9987 11.035 9.9987 10.6668V10.0002ZM11.9987 6.66683C11.9987 6.29864 11.7002 6.00016 11.332 6.00016H10.6654C10.2972 6.00016 9.9987 6.29864 9.9987 6.66683V7.3335C9.9987 7.70169 10.2972 8.00016 10.6654 8.00016H11.332C11.7002 8.00016 11.9987 7.70169 11.9987 7.3335V6.66683Z",fill:"#646A73"})),bs=e=>y.createElement("svg",{width:16,height:17,viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},y.createElement("path",{d:"M5.33203 2.49967C5.33203 2.13148 5.03355 1.83301 4.66536 1.83301C4.29717 1.83301 3.9987 2.13148 3.9987 2.49967H2.66534C1.92896 2.49967 1.33203 3.09663 1.33203 3.83301V13.833C1.33203 14.5694 1.92899 15.1663 2.66536 15.1663H7.83512C7.51362 14.7653 7.24887 14.3168 7.05304 13.833H2.66536V3.83301H3.9987C3.9987 4.2012 4.29717 4.49967 4.66536 4.49967C5.03355 4.49967 5.33203 4.2012 5.33203 3.83301H10.6654C10.6654 4.2012 10.9638 4.49967 11.332 4.49967C11.7002 4.49967 11.9987 4.2012 11.9987 3.83301H13.332V6.6677C13.8051 6.78945 14.2527 6.97446 14.6654 7.21318V3.83301C14.6654 3.09663 14.0684 2.49967 13.3321 2.49967H11.9987C11.9987 2.13148 11.7002 1.83301 11.332 1.83301C10.9638 1.83301 10.6654 2.13148 10.6654 2.49967H5.33203Z",fill:"#646A73"}),y.createElement("path",{d:"M5.33203 9.16634C5.70022 9.16634 5.9987 9.46482 5.9987 9.83301V10.4997C5.9987 10.8679 5.70022 11.1663 5.33203 11.1663H4.66536C4.29717 11.1663 3.9987 10.8679 3.9987 10.4997V9.83301C3.9987 9.46482 4.29717 9.16634 4.66536 9.16634H5.33203Z",fill:"#646A73"}),y.createElement("path",{d:"M4.66536 5.83301C4.29718 5.83301 3.9987 6.13148 3.9987 6.49967V7.16634C3.9987 7.53453 4.29717 7.83301 4.66536 7.83301H5.33203C5.70022 7.83301 5.9987 7.53453 5.9987 7.16634V6.49967C5.9987 6.13148 5.70022 5.83301 5.33203 5.83301H4.66536Z",fill:"#646A73"}),y.createElement("path",{d:"M11.332 10.4997C11.332 10.1315 11.6305 9.83301 11.9987 9.83301C12.3669 9.83301 12.6654 10.1315 12.6654 10.4997V11.1663H13.332C13.7002 11.1663 13.9987 11.4648 13.9987 11.833C13.9987 12.2012 13.7002 12.4997 13.332 12.4997H11.9987C11.6305 12.4997 11.332 12.2012 11.332 11.833V10.4997Z",fill:"#646A73"}),y.createElement("path",{d:"M11.9987 15.833C14.2078 15.833 15.9987 14.0421 15.9987 11.833C15.9987 9.62387 14.2078 7.83301 11.9987 7.83301C9.78956 7.83301 7.9987 9.62387 7.9987 11.833C7.9987 14.0421 9.78956 15.833 11.9987 15.833ZM11.9987 14.4997C10.5259 14.4997 9.33203 13.3058 9.33203 11.833C9.33203 10.3602 10.5259 9.16634 11.9987 9.16634C13.4715 9.16634 14.6654 10.3602 14.6654 11.833C14.6654 13.3058 13.4715 14.4997 11.9987 14.4997Z",fill:"#646A73"}),y.createElement("path",{d:"M9.33203 6.49967C9.33203 6.13148 9.03355 5.83301 8.66536 5.83301H7.9987C7.63051 5.83301 7.33203 6.13148 7.33203 6.49967V7.16634C7.33203 7.53453 7.63051 7.83301 7.9987 7.83301H8.66536C9.03356 7.83301 9.33203 7.53453 9.33203 7.16634V6.49967Z",fill:"#646A73"}));function xs({config:e,setConfig:n,tableList:o,tableRangeList:a,dateTypeList:l,numberOrCurrencyList:r,setData:h}){const{t:f}=B(),g=e.tableRange.type===O.ALL?"ALL":e.tableRange.viewId,[b,x]=y.useState(g),[$,A]=y.useState(z(e.dateRange)),F=async s=>{e.tableId=s,e.tableRange={type:O.ALL},x("ALL"),h(e)},k=async s=>{x(s);let u;b==="ALL"?u={type:O.ALL}:u=a.find(C=>C.viewId===b),n({...e,tableRange:u})},M=(s,u)=>{var C;if(s==="dateTypeFieldId"){const w=(C=l.find(Y=>Y.fieldId===u))==null?void 0:C.fieldType;n({...e,[s]:u,dateTypeFieldType:w})}n({...e,[s]:u})},N=s=>{A(z(s));const u=e.momOrYoy.map(C=>(C.momOrYoyCalcMethod="mom",C));n({...e,dateRange:s,momOrYoy:u})},L=(s,u,C,w)=>{s={...s,[u]:C},u==="momOrYoyDesc"&&(s.manualSetDesc=!0);const{manualSetDesc:Y,momOrYoyCalcMethod:T,momOrYoyCalcType:j}=s;Y||(s.momOrYoyDesc=hs(T,j)),e.momOrYoy[w]=s,n({...e})},S=y.useRef(null),_=()=>{const s={momOrYoyDesc:f("momGrowthRate"),manualSetDesc:!1,momOrYoyCalcMethod:"mom",momOrYoyCalcType:"differenceRate"};e.momOrYoy.push(s),n({...e}),setTimeout(()=>{var u;(u=S.current)==null||u.scrollIntoView({behavior:"smooth"})},0)},P=s=>{e.momOrYoy.splice(s,1),n({...e})};return t.jsxs("div",{className:"form-main",children:[t.jsx("div",{className:"form-title",children:f("dataSource")}),t.jsx("div",{className:"form-item",children:t.jsx(p,{prefix:t.jsx(R,{svg:t.jsx(K,{})}),optionList:o,value:e.tableId,onChange:F})}),t.jsx("div",{className:"form-title",children:f("dataRange")}),t.jsx("div",{className:"form-item",children:t.jsx(p,{prefix:t.jsx(R,{svg:t.jsx(K,{})}),value:b,onChange:k,children:a.map(s=>{let u={...s};return s.type===O.ALL&&(u.viewName=f("allData"),u.viewId="ALL"),u}).map(s=>t.jsx(p.Option,{value:s.viewId,children:s.viewName},s.viewId))})}),t.jsx(U,{style:{borderColor:"var(--divider)",marginTop:"12px"}}),t.jsx("div",{className:"form-title",children:f("dateFiltering")}),t.jsxs("div",{className:"form-item",children:[t.jsx("div",{className:"form-subTitle",children:f("basis")}),t.jsx(p,{placeholder:f("dataPlaceholder"),prefix:t.jsx(R,{svg:t.jsx(gs,{})}),value:e.dateTypeFieldId,onChange:s=>{M("dateTypeFieldId",s)},children:l.map(s=>t.jsx(p.Option,{value:s.fieldId,children:s.fieldName},s.fieldId))}),t.jsxs("div",{className:"form-item",children:[t.jsx("div",{className:"form-subTitle",children:f("range")}),t.jsx(p,{optionList:es,prefix:t.jsx(R,{svg:t.jsx(bs,{})}),value:e.dateRange,onChange:N})]})]}),t.jsx("div",{className:"form-title",children:f("statisticalMethods")}),t.jsx("div",{className:"form-item",children:t.jsx(p,{optionList:ts,value:e.statisticalType,onChange:s=>{M("statisticalType",s)}})}),e.statisticalType==="number"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-item noBorder",children:t.jsx(p,{optionList:as,value:e.statisticalCalcType,onChange:s=>M("statisticalCalcType",s)})}),t.jsx("div",{className:"form-item",children:t.jsx(p,{prefix:t.jsx(R,{svg:t.jsx(vs,{})}),value:e.numberOrCurrencyFieldId,onChange:s=>{M("numberOrCurrencyFieldId",s)},children:r.map(s=>t.jsx(p.Option,{value:s.fieldId,children:s.fieldName},s.fieldId))})})]}),t.jsx(U,{style:{borderColor:"var(--divider)",margin:"12px 0 20px 0"}}),t.jsxs("div",{className:"form-title",children:[t.jsx("span",{children:f("mom_yoy")}),t.jsx(X,{disabled:e.momOrYoy.length>=4,theme:"borderless",icon:t.jsx(ve,{size:"small"}),style:{fontWeight:"normal"},onClick:_,children:f("addMom_Yoy")})]}),e.momOrYoy&&e.momOrYoy.map((s,u)=>t.jsxs("div",{className:"form-item bg-grey",children:[e.momOrYoy.length>1&&t.jsx("div",{className:"icon-delete",onClick:()=>{P(u)},children:t.jsx(ge,{size:"small"})}),t.jsx("div",{className:"form-subTitle",children:f("description")}),t.jsx(E,{value:s.momOrYoyDesc,onChange:C=>{L(s,"momOrYoyDesc",C,u)}}),t.jsx("div",{className:"form-subTitle",children:f("calculation")}),t.jsx(p,{position:"top",optionList:$,value:s.momOrYoyCalcMethod,onChange:C=>L(s,"momOrYoyCalcMethod",C,u)}),t.jsx("div",{className:"form-subTitle",children:f("calculationType")}),t.jsx(p,{position:"top",optionList:os,value:s.momOrYoyCalcType,onChange:C=>L(s,"momOrYoyCalcType",C,u)}),t.jsx("div",{ref:S})]},u))]})}function ws({config:e,setConfig:n}){const{t:o}=B(),a=(r,h)=>{n({...e,[r]:h})},l=r=>`${r}`.replace(/\D/g,"");return t.jsxs("div",{className:"form-main",children:[t.jsx("div",{className:"form-title",children:o("color")}),t.jsx("div",{className:"form-item",style:{margin:"6px 0 18px 0"},children:t.jsx(Cs,{onChange:r=>{a("color",r)},name:e.color})}),t.jsx("div",{className:"form-title",children:o("iconStyle")}),t.jsx("div",{className:"form-item",children:t.jsx(p,{value:e.iconStyleId,onChange:r=>{a("iconStyleId",r)},children:ee.map(r=>t.jsx(p.Option,{value:r.id,children:t.jsxs("div",{className:"index-icon",children:[t.jsxs("div",{className:V("index-icon-item",r.upIconColor),children:[Q(r.upIcon),t.jsx("div",{className:"number",children:"10"})]}),t.jsxs("div",{className:V("index-icon-item",r.constIconColor),children:[t.jsx(J,{size:"small"}),t.jsx("div",{className:"number",children:"0"})]}),t.jsxs("div",{className:V("index-icon-item",r.downIconColor),children:[Q(r.downIcon),t.jsx("div",{className:"number",children:"10"})]})]})},r.id))})}),t.jsx("div",{className:"form-title",children:o("indexDataFormat")}),t.jsxs("div",{className:"form-item",children:[t.jsx("div",{className:"form-subTitle",children:o("decimalPlaces_Format")}),t.jsxs("div",{className:"flex-between",children:[t.jsx(be,{style:{marginRight:"10px",flex:1},value:e.decimal,formatter:l,onNumberChange:r=>{a("decimal",r)},min:0,max:5}),t.jsx(p,{value:e.numberFormat,style:{flex:1},onChange:r=>{a("numberFormat",r)},children:ss.map(r=>t.jsx(p.Option,{value:r.value,children:r.label},r.value))})]})]}),t.jsxs("div",{className:"flex-between",children:[t.jsxs("div",{className:"form-item",style:{marginRight:"10px"},children:[t.jsx("div",{className:"form-subTitle",children:o("prefix")}),t.jsx(E,{value:e.prefix,placeholder:o("prefixPlaceholder"),onChange:r=>{a("prefix",r)}})]}),t.jsxs("div",{className:"form-item",children:[t.jsx("div",{className:"form-subTitle",children:o("suffix")}),t.jsx(E,{value:e.suffix,placeholder:o("suffixPlaceholder"),onChange:r=>{a("suffix",r)}})]})]})]})}function Ys({setRenderData:e}){const{t:n}=B(),o=[{key:"1",tab:n("type_Date")},{key:"2",tab:n("customStyle")}],[a,l]=y.useState(rs);Xn(l);const r=()=>{if(!a.dateTypeFieldId){Le.error(n("dataPlaceholder"));return}const s=oe(a)[0];v.saveConfig({customConfig:a,dataConditions:s})},[h,f]=y.useState([]),[g,b]=y.useState([{type:O.ALL}]),[x,$]=y.useState([]),[A,F]=y.useState([]),k=y.useCallback(async()=>{const s=await xe.getTableList(),u=[];for(const C of s){const w=await C.getName();u.push({value:C.id,label:w})}return u},[]),M=y.useCallback(s=>v.getTableDataRange(s),[]),N=y.useCallback(async s=>{const u=await v.getCategories(s),C=[I.DateTime,I.CreatedTime,I.ModifiedTime],w=u.filter(j=>C.includes(j.fieldType))||[],Y=[I.Number,I.Currency],T=u.filter(j=>Y.includes(j.fieldType))||[];return{dateTypeList:w,numberOrCurrencyList:T}},[]),L=async(s,u=!0)=>{const C=await M(s.tableId);b(C);const{dateTypeList:w,numberOrCurrencyList:Y}=await N(s.tableId);if($(w),F(Y),u){s.dateTypeFieldId=w[0].fieldId||"";const T=Y.length>0;s.statisticalType=T?"number":"total",T&&(s.numberOrCurrencyFieldId=Y[0].fieldId)}l({...s})},S=async()=>{var C;const s=await k();f(s);let u={};v.state===D.Create?(u={...a},u.tableId=(C=s[0])==null?void 0:C.value,L(u)):(u=await ae(),L(u,!1))};y.useEffect(()=>{S()},[k,M,N]);const P=we(async()=>{if(a.tableId){const s=await ne(a);se(a,s,e)}},200);return y.useEffect(()=>{P()},[a]),t.jsxs("div",{className:"main-config-panel left-border",children:[t.jsx("div",{className:"form",children:t.jsx(Ye,{defaultActiveKey:"1",children:o.map(s=>t.jsxs(Me,{tab:s.tab,itemKey:s.key,children:[s.key==="1"&&t.jsx(xs,{config:a,setConfig:l,tableList:h,tableRangeList:g,dateTypeList:x,numberOrCurrencyList:A,setData:L}),s.key==="2"&&t.jsx(ws,{config:a,setConfig:l})]},s.key))})}),t.jsx(X,{className:"btn",theme:"solid",onClick:r,children:n("confirm")})]})}function Ms(){Kn();const e=v.state===D.Config||v.state===D.Create,[n,o]=y.useState({color:"primary",value:"",prefix:"",suffix:"",momYoyList:[]}),a=async()=>{const l=await ae(),r=await ne(l);se(l,r,o)};return y.useEffect(()=>{v.state===D.View&&(a(),v.onDataChange(async l=>{a()}))},[]),t.jsxs("main",{className:V(e?"top-border":"","main"),children:[t.jsx(ps,{renderData:n}),e&&t.jsx(Ys,{setRenderData:o})]})}m.locale("en-us");function Ls(e){const[n,o]=y.useState($e);return y.useEffect(()=>{if(e.neverShowBanner)return;const a=new Promise((l,r)=>{setTimeout(()=>{r(!1)},3e3)});Promise.race([H.bridge.getLanguage(),a]).then(l=>{l==="zh"&&(o(Te),m.locale("zh-cn")),l==="ja"&&o(Ie)}).catch(l=>{console.error(l)})},[]),e.neverShowBanner?e.children||null:t.jsx("div",{children:t.jsx(Oe,{locale:n,children:e.children})})}const $s=De([{path:"/",element:t.jsx(Ms,{})}]),Ts=Ve.createRoot(document.getElementById("root"));Ts.render(t.jsx(Ls,{children:t.jsx(je,{router:$s})}));
