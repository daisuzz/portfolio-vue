(function(t){function e(e){for(var i,o,l=e[0],s=e[1],c=e[2],u=0,m=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);v&&v(e);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,l=1;l<a.length;l++){var s=a[l];0!==n[s]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var v=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"08a9":function(t,e,a){t.exports=a.p+"img/icon.67e0ee4e.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("HeaderItem"),a("v-content",[a("AboutItem"),a("v-divider"),a("ExperienceItem"),a("v-divider"),a("SkillItem"),a("v-divider"),a("CertificateItem")],1),a("FooterItem")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{color:"blue darken-4",dark:!0}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",{staticClass:"font-weight-regular"},[t._v("daisuzz's portfolio")])]),a("v-spacer"),a("v-btn",{attrs:{icon:"",href:"https://github.com/daisuzz",target:"_blank"}},[a("v-icon",{attrs:{"x-large":""}},[t._v(t._s(t.gitHubSvgPath))])],1),a("v-btn",{attrs:{icon:"",href:"https://twitter.com/daisuzz",target:"_blank"}},[a("v-icon",{attrs:{"x-large":""}},[t._v(t._s(t.twitterSvgPath))])],1),a("v-btn",{attrs:{icon:"",href:"https://www.linkedin.com/in/daisaku-suzuki-1a37aa161/",target:"_blank"}},[a("v-icon",{attrs:{"x-large":""}},[t._v(t._s(t.linkedinSvgPath))])],1),a("v-btn",{attrs:{icon:"",href:"https://iikanji.hatenablog.jp",target:"_blank"}},[a("v-icon",{attrs:{"x-large":""}},[t._v(t._s(t.textSvgPath))])],1)],1)],1)},l=[],s=a("94ed"),c={name:"HeaderItem",data:()=>({twitterSvgPath:s["d"],gitHubSvgPath:s["a"],linkedinSvgPath:s["b"],textSvgPath:s["c"]})},v=c,u=a("2877"),m=a("6544"),d=a.n(m),p=a("40dc"),f=a("8336"),g=a("132d"),h=a("2fa4"),b=a("2a7f"),_=Object(u["a"])(v,o,l,!1,null,"2a379c96",null),x=_.exports;d()(_,{VAppBar:p["a"],VBtn:f["a"],VIcon:g["a"],VSpacer:h["a"],VToolbarTitle:b["a"]});var w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",{staticClass:"mx-10 py-10"},[i("v-row",{attrs:{justify:"space-around"}},[i("v-col",{attrs:{xl:"6",lg:"6",md:"6",sm:"6",cols:"12"}},[i("v-avatar",{staticClass:"profile",attrs:{size:"180"}},[i("img",{attrs:{src:a("08a9"),alt:"daisuzz"}})])],1),i("v-col",{attrs:{xl:"6",lg:"6",md:"6",sm:"6",cols:"12"}},[i("h1",{staticClass:"font-italic font-weight-medium"},[t._v("Suzuki Daisaku")]),i("p",[t._v(" 東京でソフトウェアエンジニアとして働いています。"),i("br"),t._v(" アプリケーションの品質を改善したり、開発生産性を向上させるための取り組みや技術が好きです。"),i("br"),t._v(" Software engineer working at Tokyo, Japan. "),i("br"),t._v(" I'm interested in design pattern, software architecture, and agile development."),i("br")])])],1)],1)},y=[],C={name:"AboutItem"},k=C,I=a("8212"),S=a("62ad"),V=a("a75b"),j=a("0fd9"),P=Object(u["a"])(k,w,y,!1,null,null,null),O=P.exports;d()(P,{VAvatar:I["a"],VCol:S["a"],VContent:V["a"],VRow:j["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",{staticClass:"mx-10 py-10"},[a("h1",{staticClass:"font-italic font-weight-medium"},[t._v("Experience")]),a("v-timeline",{attrs:{"align-top":"",dense:""}},t._l(t.experiences,(function(e){return a("v-timeline-item",{key:e,attrs:{color:"blue darken-4",small:""}},[a("v-row",[a("v-col",{attrs:{cols:"3"}},[a("strong",[t._v(t._s(e.term))])]),a("v-col",[a("strong",[t._v(t._s(e.title))]),a("div",{},[t._v(t._s(e.text))])])],1)],1)})),1)],1)},E=[],z={name:"ExperienceItem",data:function(){return{experiences:[{title:"working at Recruit Lifestyle Co., Ltd.",text:"Develop BtoC web services as a Server-side engineer.",term:"2020/5 ~ "},{title:"worked at Yahoo JAPAN Corporation",text:"Developed platform applications as a corporate engineer and a scrum master.\n          I developed with Java, Spring, Kotlin, Node.js, Nuxt.js, etc.",term:"2017/4 ~ 2020/4"},{title:"finished Master's degree in Chiba University.",text:"Graduate School of Advanced Integration Science, Department Information Science.",term:"2015/4 ~ 2017/3"}]}}},T=z,J=a("8414"),$=a("1e06"),M=Object(u["a"])(T,A,E,!1,null,"0f0100e2",null),B=M.exports;d()(M,{VCol:S["a"],VContent:V["a"],VRow:j["a"],VTimeline:J["a"],VTimelineItem:$["a"]});var D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",{staticClass:"mx-10 py-10"},[a("h1",{staticClass:"font-italic font-weight-medium"},[t._v("Skill")]),a("div",{staticClass:"text-center"},t._l(1,(function(e){return a("v-row",{key:e},t._l(3,(function(i){return a("v-col",{key:i,attrs:{xl:"4",lg:"4",md:"4",cols:"12"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[a("v-card-title",{staticClass:"justify-center"},[t._v(t._s(t.skills[e-1][i-1].item)+" ")]),a("v-rating",{attrs:{"background-color":"indigo lighten-3",color:"indigo",value:t.skills[e-1][i-1].rating,readonly:"",large:""}}),a("v-card-text",[t._v(t._s(t.skills[e-1][i-1].text))])],1)],1)})),1)})),1)])},L=[],H={name:"DSkill",data:()=>({skills:[[{item:"Java/SpringBoot, Thymeleaf",rating:3,text:"権限管理システム, 社員情報連携バッチシステム 入稿システム, BtoCアプリケーションの実装"},{item:"Kotlin (Server-side)/SpringBoot",rating:4,text:"権限管理システムの実装, 社員情報連携バッチシステムの実装, コンパイラ/アセンブラの実装"},{item:"Node.js/Express.js/Vue.js",rating:2,text:"マスタ管理アプリケーションの実装"}]]})},R=H,F=a("b0af"),N=a("99d9"),K=a("1d4d"),G=Object(u["a"])(R,D,L,!1,null,"f6deece2",null),U=G.exports;d()(G,{VCard:F["a"],VCardText:N["a"],VCardTitle:N["b"],VCol:S["a"],VContent:V["a"],VRating:K["a"],VRow:j["a"]});var Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{color:"white"}},[a("div",{staticClass:"flex-grow-1"})])},q=[],Q={name:"FooterItem"},W=Q,X=a("553a"),Z=Object(u["a"])(W,Y,q,!1,null,"700697d9",null),tt=Z.exports;d()(Z,{VFooter:X["a"]});var et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mx-10 py-10"},[a("h1",{staticClass:"font-italic font-weight-medium"},[t._v("Certificate")]),a("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v("Applied Information Technology Engineer Examination")]),a("v-list-item-subtitle",[t._v("応用情報技術者試験")]),a("v-list-item-subtitle",[t._v("IPA: Information-technology Promotion Agency, Japan")])],1)],1),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v("Information Security Specialist Examination")]),a("v-list-item-subtitle",[t._v("情報セキュリティスペシャリスト試験")]),a("v-list-item-subtitle",[t._v("IPA: Information-technology Promotion Agency, Japan")])],1)],1),a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",[t._v("Certified ScrumMaster(CSM)")]),a("v-list-item-subtitle",[t._v("認定スクラムマスター")]),a("v-list-item-subtitle",[a("a",{attrs:{href:"https://bcert.me/bc/html/show-badge.html?b=mtyhtttd",target:"_blank"}},[t._v(" https://bcert.me/bc/html/show-badge.html?b=mtyhtttd ")])])],1)],1)],1)],1)},at=[],it={name:"CertificateItem"},nt=it,rt=a("a523"),ot=a("da13"),lt=a("5d23"),st=Object(u["a"])(nt,et,at,!1,null,"0a4b95d0",null),ct=st.exports;d()(st,{VCard:F["a"],VContainer:rt["a"],VListItem:ot["a"],VListItemContent:lt["a"],VListItemSubtitle:lt["b"],VListItemTitle:lt["c"]});var vt={name:"App",components:{HeaderItem:x,AboutItem:O,ExperienceItem:B,SkillItem:U,CertificateItem:ct,FooterItem:tt},mounted(){document.title="daisuzz's portfolio"}},ut=vt,mt=a("7496"),dt=a("ce7e"),pt=Object(u["a"])(ut,n,r,!1,null,null,null),ft=pt.exports;d()(pt,{VApp:mt["a"],VContent:V["a"],VDivider:dt["a"]});var gt=a("f309");a("5363");i["a"].use(gt["a"]);var ht=new gt["a"]({icons:{iconfont:"mdi"}});i["a"].config.productionTip=!1,new i["a"]({vuetify:ht,render:t=>t(ft)}).$mount("#app")}});
//# sourceMappingURL=app.696524f4.js.map