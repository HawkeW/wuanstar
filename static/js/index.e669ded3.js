(function(e){function n(n){for(var o,i,s=n[0],u=n[1],c=n[2],d=0,g=[];d<s.length;d++)i=s[d],a[i]&&g.push(a[i][0]),a[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);l&&l(n);while(g.length)g.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,i=1;i<t.length;i++){var u=t[i];0!==a[u]&&(o=!1)}o&&(r.splice(n--,1),e=s(s.s=t[0]))}return e}var o={},a={index:0},r=[];function i(e){return s.p+"static/js/"+({"pages-detail-uWebView":"pages-detail-uWebView","pages-home-home":"pages-home-home","pages-detail-detail":"pages-detail-detail","pages-follow-follow":"pages-follow-follow","pages-home-index":"pages-home-index","pages-login-login":"pages-login-login","pages-login-register":"pages-login-register","pages-media-media":"pages-media-media","pages-media-media-item":"pages-media-media-item","pages-media-media-item-two":"pages-media-media-item-two","pages-search-search":"pages-search-search","pages-search-searchResult":"pages-search-searchResult","pages-inputcode-inputcode":"pages-inputcode-inputcode","pages-inputphone-inputphone":"pages-inputphone-inputphone","pages-login-reset":"pages-login-reset","pages-setinfo-setinfo":"pages-setinfo-setinfo","pages-user-logout":"pages-user-logout","pages-user-user":"pages-user-user"}[e]||e)+"."+{"pages-detail-uWebView":"a530a09f","pages-home-home":"99f4fdd9","pages-detail-detail":"caa7ab48","pages-follow-follow":"92231c0e","pages-home-index":"aacb1d99","pages-login-login":"464becc9","pages-login-register":"5705bed9","pages-media-media":"58c41f05","pages-media-media-item":"241111d4","pages-media-media-item-two":"0cd7711e","pages-search-search":"052c9558","pages-search-searchResult":"6b4ec39a","pages-inputcode-inputcode":"9254d652","pages-inputphone-inputphone":"d0470c91","pages-login-reset":"c39cb53b","pages-setinfo-setinfo":"2295738f","pages-user-logout":"bf6af54a","pages-user-user":"0a5dbd28"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t=a[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=a[e]=[n,o]}));n.push(t[2]=o);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e),r=function(n){u.onerror=u.onload=null,clearTimeout(c);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,t[1](i)}a[e]=void 0}};var c=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(t,o,function(n){return e[n]}.bind(null,o));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/wuanstar/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var l=c;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("929d")},"0a22":function(e,n,t){"use strict";(function(e){var o=t("ee27");t("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.config=n.globalInterceptor=void 0;var a=o(t("31fd")),r=(o(t("88ad")),{request:new a.default,response:new a.default});n.globalInterceptor=r;var i={baseURL:"http://13.231.142.162",header:{contentType:"application/x-www-form-urlencoded"}};n.config=i,r.request.use((function(n){return e("log","is global request interceptor"," at js_sdk/pocky-request/pocky-request-v.2.0.4/config.js:36"),n}),(function(n){return e("error","is global fail request interceptor: ",n," at js_sdk/pocky-request/pocky-request-v.2.0.4/config.js:41"),!1})),r.response.use((function(e,n){return e}),(function(n,t){return e("error","is global response fail interceptor"," at js_sdk/pocky-request/pocky-request-v.2.0.4/config.js:63"),e("error","err: ",n," at js_sdk/pocky-request/pocky-request-v.2.0.4/config.js:64"),e("error","config: ",t," at js_sdk/pocky-request/pocky-request-v.2.0.4/config.js:65"),Promise.reject(n)}))}).call(this,t("0de9")["log"])},"0a54":function(e,n,t){"use strict";var o=t("3b52"),a=t.n(o);a.a},"0ced":function(e,n,t){"use strict";var o=t("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.getCode=i,n.validateCode=s,n.validateNickName=u,n.setUserInfo=c,n.getAppVersion=d;var a=o(t("5ae2")),r=o(t("6a02"));function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.default.instance("/user/login/sendCaptcha","post",e,{ContentType:"application/x-www-form-urlencoded"})}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.default.instance("/user/login/checkCaptcha","post",e,{ContentType:"application/x-www-form-urlencoded"})}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.default.instance("/user/check/nickname","get",e,{ContentType:"application/x-www-form-urlencoded",token:r.default.state.user.token||""})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.default.instance("/user/set/userInfo","post",e,{ContentType:"application/x-www-form-urlencoded",token:r.default.state.user.token||""})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.default.instance("/appVersion/check","get",e,{ContentType:"application/x-www-form-urlencoded",token:r.default.state.user.token||""})}},1152:function(e,n,t){"use strict";t.r(n);var o=t("d8d7"),a=t("e215");for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);t("0a54");var i,s=t("f0c5"),u=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);n["default"]=u.exports},"11d8":function(e,n,t){"use strict";var o=t("4a46"),a=t("ee27");t("4160"),t("caad"),t("4fad"),t("d3b7"),t("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("d0af")),i=a(t("31fd")),s=a(t("fe6f")),u=a(t("9d33")),c=o(t("8706")),d=t("0a22");function l(){this.defaultConfig=d.config,this.interceptors={scoped:{request:new i.default,response:new i.default},global:d.globalInterceptor}}l.prototype.request=function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};"string"===typeof n&&(n=arguments[1]||{},n.url=arguments[0]),n.method||this.defaultConfig.method||(n.method="get");var t=n.method=n.method.toLowerCase(),o=(0,s.default)(this.defaultConfig,n),a=["upload","download"].includes(t)?t:"xhr",i=[],d=Promise.resolve(o);return this.interceptors.global.request.forEach((function(e){i.push({then:e.fulfilled},{catch:e.rejected})})),this.interceptors.scoped.request.forEach((function(e){i.push({then:e.fulfilled},{catch:e.rejected})})),i.push({then:c[a]}),this.interceptors.global.response.forEach((function(e){i.push({then:e.fulfilled},{catch:e.rejected})})),this.interceptors.scoped.response.forEach((function(e){i.push({then:e.fulfilled},{catch:e.rejected})})),i.forEach((function(t){var o=Object.entries(t),a=(0,r.default)(o,1),i=(0,r.default)(a[0],2),c=i[0],l=i[1];if("function"!==typeof l)return!0;d=d[c]((function(t){var o=(0,s.default)(e.defaultConfig,n),a=l(t,o);return!1===a?u.default.breakPromise():u.default.isType("Object",a)||u.default.isType("Promise",a)?a:void 0}))})),d},["get","post","put","delete","connect","head","options","trace","upload","download"].forEach((function(e){l.prototype[e]=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=u.default.deepCopy(t,{url:n,method:e});return this.request(o)}})),l.prototype.abort=function(e){try{e.example.abort()}catch(n){}};var g=l;n.default=g},"31fd":function(e,n,t){"use strict";var o=t("ee27");t("4160"),t("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("276c")),r=o(t("e954")),i=function(){function e(){(0,a.default)(this,e),this.handlers=[]}return(0,r.default)(e,[{key:"use",value:function(e,n){return this.handlers.push({fulfilled:e,rejected:n}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"forEach",value:function(e){this.handlers.forEach((function(n){n&&e(n)}))}}]),e}(),s=i;n.default=s},"3b52":function(e,n,t){var o=t("cbb6");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=t("4f06").default;a("6695444c",o,!0,{sourceMap:!1,shadowMode:!1})},"5ae2":function(e,n,t){"use strict";(function(e){var o=t("ee27");t("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("f3f3")),r=o(t("88ad")),i=o(t("6a02")),s={instance:function(n,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},u=(0,r.default)(),c=(u.interceptors.scoped.request.use((function(n){return e("log","is scoped request"," at common/api/index.js:9"),n}),(function(n){return e("error","scoped request: ",n," at common/api/index.js:15"),!1})),u.interceptors.scoped.response.use((function(n,t){if(e("log","is scoped response",n," at common/api/index.js:23"),n.data){var o=n.data,a=o.msg,r=o.status,s=(o.data,a);switch(r){case"200":break;case"400":s="错误的token";break;case"401":s="未授权";break;case"402":s="用户未登录";break;case"403":s="禁止访问";break;case"404":s="token已过期";break;case"405":s="解析jwt异常";break;case"406":s="角色不存在";break;case"407":s="权限不存在";break;case"500":s="服务器错误";break;default:break}return"404"===r||"402"===r?(i.default.commit("setHasLogin",!1),i.default.commit("setUser",{}),i.default.commit("setAuth","")):"200"!==r&&"201"!==r&&"您未关注该媒体"!==a&&uni.showToast({title:s,icon:"none",success:function(n){e("log","成功显示"," at common/api/index.js:74")},fail:function(n){e("log","提示失败"," at common/api/index.js:76")},complete:function(){e("log","调用"," at common/api/index.js:78")}}),n.data}}),(function(n){return e("error","scoped response: ",n," at common/api/index.js:90"),Promise.reject(n)})),{url:n,method:t,header:(0,a.default)({ContentType:"application/json"},s)});"get"===t?c.params=o:c.data=o,e("log",c," at common/api/index.js:108");var d=u.request(c);return setTimeout((function(){u.abort(d)}),15e3),d}};n.default=s}).call(this,t("0de9")["log"])},"6a02":function(e,n,t){"use strict";(function(e){var o=t("ee27");t("a434"),t("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("96cf");var a=o(t("c964")),r=o(t("f3f3")),i=o(t("e143")),s=o(t("2f62"));i.default.use(s.default);var u=new s.default.Store({state:{hasLogin:!1,user:{},auth:"",imageTasks:[],triedImage:[],lastTab:0},mutations:{login:function(e,n){e.hasLogin=!0,e.user=n,uni.setStorage({key:"user",data:n,success:function(e){}})},logout:function(e){e.hasLogin=!1,e.user={},uni.removeStorage({key:"user"})},addImageTasks:function(e,n){e.imageTasks.push(n)},removeImageTasks:function(e,n){e.imageTasks.splice(n,1)},setTriedImage:function(e,n){e.triedImage.push(n)},setAuth:function(e,n){e.auth=n,uni.setStorage({key:"auth",data:n})},setLastTab:function(e,n){e.lastTab=n},setPhone:function(e,n){e.user=(0,r.default)({},e.user,{phone:n}),uni.setStorage({key:"user",data:e.user})},setUser:function(e,n){e.user=(0,r.default)({},e.user,{},n),uni.setStorage({key:"user",data:e.user})},setHasLogin:function(e,n){e.hasLogin=n}},getters:{},actions:{getUserOpenId:function(){var n=(0,a.default)(regeneratorRuntime.mark((function n(t){var o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return o=t.commit,a=t.state,n.next=3,new Promise((function(n,t){a.openid?n(a.openid):uni.login({success:function(t){o("login"),setTimeout((function(){var t="123456789";e("log","uni.request mock openid["+t+"]"," at store/index.js:96"),o("setOpenid",t),n(t)}),1e3)},fail:function(n){e("log","uni.login 接口调用失败，将无法正常使用开放接口等服务",n," at store/index.js:102"),t(n)}})}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})));function t(e){return n.apply(this,arguments)}return t}()}}),c=u;n.default=c}).call(this,t("0de9")["log"])},8706:function(e,n,t){"use strict";var o=t("ee27");t("4160"),t("f4b3"),t("d3b7"),t("bf19"),Object.defineProperty(n,"__esModule",{value:!0}),n.download=n.upload=n.xhr=void 0;var a=o(t("f3f3")),r=o(t("9d33")),i=function(e){var n,t;return n=new Promise((function(n,o){t=uni.request((0,a.default)({},e,{success:n,fail:o}))})),n.__proto__.example=t,n};n.xhr=i;var s=function(e){var n,t;return n=new Promise((function(n,o){t=uni.uploadFile((0,a.default)({},e,{success:function(e){e.data=r.default.toJSON(e.data),n(e)},fail:o})),c(e,t)})),n.__proto__.example=t,n};n.upload=s;var u=function(e){var n,t;return n=new Promise((function(n,o){t=uni.downloadFile((0,a.default)({},e,{success:n,fail:o})),c(e,t)})),n.__proto__.example=t,n};function c(e,n){var t=["onProgressUpdate","onHeadersReceived","offProgressUpdate","offHeadersReceived"];t.forEach((function(t){var o=e[t];"function"===typeof o&&n[t](o)}))}n.download=u},"88ad":function(e,n,t){"use strict";var o=t("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("11d8")),r=o(t("9d33"));function i(){var e,n=new a.default;return e=a.default.prototype.request.bind(n),e=r.default.extend(e,a.default.prototype,n),e=r.default.extend(e,n),e}function s(){return i()}var u=s;n.default=u},"929d":function(e,n,t){"use strict";var o=t("ee27"),a=o(t("f3f3"));t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("ff21"),t("1c31");var r=o(t("e143")),i=o(t("1152")),s=o(t("6a02"));r.default.prototype.$store=s.default,r.default.config.productionTip=!1,i.default.mpType="app";var u=new r.default((0,a.default)({store:s.default},i.default));u.$mount()},"99c9":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t("0ced"),a="900",r={onLaunch:function(){(0,o.getAppVersion)({versionNumber:a,type:uni.getSystemInfoSync().platform}).then((function(e){var n=e.status,t=e.data;switch(n){case"200":uni.showModal({title:"通知",content:"发现新版本：".concat(t.versionCode),cancelText:"稍后提示",confirmText:"立即更新",success:function(e){e.confirm&&plus.runtime.openURL(t.downloadAddress)}});break}}))},onShow:function(){},onHide:function(){}};n.default=r},"9d33":function(e,n,t){"use strict";var o=t("ee27");t("99af"),t("4160"),t("caad"),t("c975"),t("4fad"),t("b64b"),t("d3b7"),t("ac1f"),t("25f0"),t("5319"),t("159b"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("d0af")),r={isType:function(e,n){return Object.prototype.toString.call(n)==="[object ".concat(e,"]")},deepCopy:function(){for(var e={},n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return t.forEach((function(n){for(var t in n)e=i(t,n[t],e,r.deepCopy)})),e}},i=function(e,n,t,o){var a=r.isType("Object",t[e]),i=r.isType("Object",n);return t[e]=a&&i?o(t[e],n):i?o({},n):n,t};r.extend=function(e,n,t){for(var o in n){var a=n[o];t&&r.isType("Function",a)?e[o]=a.bind(t):e[o]=a}return e},r.getFullURL=function(e,n){return e&&!u(n)?s(e,n):n};var s=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},u=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)};r.paramsToURL=function(e){var n=e.url,t=e.method,o=e.data,r=e.params,i=r,s=n+(~n.indexOf("?")?"&":"?");"get"===t.toLowerCase()&&(i=o||r);for(var u=0,c=Object.entries(i||{});u<c.length;u++){var d=(0,a.default)(c[u],2),l=d[0],g=d[1];s+="".concat(l,"=").concat(g,"&")}return s.substring(0,s.length-1)},r.adapterContentType=function(){for(var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,a=["content-type","Content-type","Content-Type","contentType","ContentType"],i=r.deepCopy(o),s=0,u=Object.keys(n);s<u.length;s++){var c=u[s];if(a.includes(c)){e=n[c],delete i[c];break}}for(var d=0,l=Object.keys(t);d<l.length;d++){var g=l[d];if(a.includes(g)){e=t[g],delete i[g];break}}return e&&(i["content-type"]=e),i},r.breakPromise=function(){return new Promise((function(){}))},r.toJSON=function(e){try{return JSON.parse(e)}catch(n){return e}};var c=r;n.default=c},cbb6:function(e,n,t){var o=t("24fb");n=o(!1),n.push([e.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*每个页面公共css */\r\n/* @import '@/components/feng-parse/parse.css'; */.input-border{border-left-color:#dcdcdc;border-left-width:%?2?%;border-left-style:solid;border-right-color:#dcdcdc;border-right-width:%?2?%;border-right-style:solid;border-top-color:#dcdcdc;border-top-width:%?2?%;border-top-style:solid;border-bottom-color:#dcdcdc;border-bottom-width:%?2?%;border-bottom-style:solid}.default-radius{border-top-left-radius:%?10?%;border-top-right-radius:%?10?%;border-bottom-left-radius:%?10?%;border-bottom-right-radius:%?10?%}",""]),e.exports=n},d8d7:function(e,n,t){"use strict";var o,a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},r=[];t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return o}))},e215:function(e,n,t){"use strict";t.r(n);var o=t("99c9"),a=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=a.a},fe6f:function(e,n,t){"use strict";var o=t("ee27");t("99af"),t("4de4"),t("4160"),t("caad"),t("b64b"),t("d3b7"),t("6062"),t("2532"),t("3ca3"),t("159b"),t("ddb0"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("d0ff")),r=o(t("9d33"));function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=["url","method","data","dataType","responseType","params"],o=["header"],i=["baseURL"],s=[].concat(t,o,i),u=(0,a.default)(new Set([].concat((0,a.default)(Object.keys(n)),(0,a.default)(Object.keys(e))))),c=u.filter((function(e){return!s.includes(e)})),d={};return t.forEach((function(t){var o=n[t]||e[t];!r.default.isType("Undefined",o)&&(d[t]=o)})),o.forEach((function(t){var o=e[t],a=n[t];r.default.isType("Object",a)?d[t]=r.default.deepCopy(o,a):r.default.isType("Object",o)&&(d[t]=r.default.deepCopy(o))})),i.forEach((function(n){var t=e[n];r.default.isType("Undefined",t)||(d[n]=e[n])})),c.forEach((function(t){var o=e[t],a=n[t];r.default.isType("Undefined",a)?r.default.isType("Undefined",o)||(d[t]=o):d[t]=a})),d.instanceURL=n.url,d.url=r.default.getFullURL(d.baseURL,d.url),d.url=r.default.paramsToURL(d),d.header=r.default.adapterContentType(e.header,n.header,d.header),"upload"===d.method&&delete d.header["content-type"],d}var s=i;n.default=s},ff21:function(e,n,t){"use strict";(function(e){var n=t("ee27"),o=n(t("e143"));e["____29807D5____"]=!0,delete e["____29807D5____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"午安",navigationBarShadow:{colorType:"grey"},navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#FFFFFF"},tabBar:{color:"#7A7E83",selectedColor:"#007AFF",borderStyle:"black",backgroundColor:"#F8F8F8",list:[{pagePath:"pages/home/index",iconPath:"static/home.png",selectedIconPath:"static/homeHL.png",text:"首页",redDot:!1,badge:""},{pagePath:"pages/follow/follow",iconPath:"static/follow.png",selectedIconPath:"static/followHL.png",text:"关注",redDot:!1,badge:""},{pagePath:"pages/user/user",iconPath:"static/user.png",selectedIconPath:"static/userHL.png",text:"我的",redDot:!1,badge:""}]}},e.__uniConfig.router={mode:"history",base:"/wuanstar/"},e.__uniConfig.publicPath="/wuanstar/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=t.e,o.default.component("pages-home-index",(function(e){var n={component:Promise.all([t.e("pages-home-home"),t.e("pages-home-index")]).then(function(){return e(t("2e39"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-home-home",(function(e){var n={component:t.e("pages-home-home").then(function(){return e(t("c7d5"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-follow-follow",(function(e){var n={component:Promise.all([t.e("pages-home-home"),t.e("pages-follow-follow")]).then(function(){return e(t("1b1d"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-user-user",(function(e){var n={component:t.e("pages-user-user").then(function(){return e(t("bb2c"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-user-logout",(function(e){var n={component:t.e("pages-user-logout").then(function(){return e(t("fe43"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-login-login",(function(e){var n={component:Promise.all([t.e("pages-home-home"),t.e("pages-login-login")]).then(function(){return e(t("aee8"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-login-register",(function(e){var n={component:Promise.all([t.e("pages-home-home"),t.e("pages-login-register")]).then(function(){return e(t("3e81"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-login-reset",(function(e){var n={component:t.e("pages-login-reset").then(function(){return e(t("ac77"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-detail-detail",(function(e){var n={component:Promise.all([t.e("pages-home-home"),t.e("pages-detail-detail")]).then(function(){return e(t("3d22"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-media-media",(function(e){var n={component:Promise.all([t.e("pages-home-home"),t.e("pages-media-media")]).then(function(){return e(t("1417"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-media-media-item",(function(e){var n={component:Promise.all([t.e("pages-home-home"),t.e("pages-media-media-item")]).then(function(){return e(t("b658"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-detail-uWebView",(function(e){var n={component:t.e("pages-detail-uWebView").then(function(){return e(t("54d7"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-search-search",(function(e){var n={component:Promise.all([t.e("pages-home-home"),t.e("pages-search-search")]).then(function(){return e(t("8141"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-search-searchResult",(function(e){var n={component:Promise.all([t.e("pages-home-home"),t.e("pages-search-searchResult")]).then(function(){return e(t("6ba1"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-media-media-item-two",(function(e){var n={component:Promise.all([t.e("pages-home-home"),t.e("pages-media-media-item-two")]).then(function(){return e(t("5d60"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-inputphone-inputphone",(function(e){var n={component:t.e("pages-inputphone-inputphone").then(function(){return e(t("a719"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-inputcode-inputcode",(function(e){var n={component:t.e("pages-inputcode-inputcode").then(function(){return e(t("7793"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),o.default.component("pages-setinfo-setinfo",(function(e){var n={component:t.e("pages-setinfo-setinfo").then(function(){return e(t("ec27"))}.bind(null,t)).catch(t.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/home/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"午安",navigationStyle:"custom"})},[e("pages-home-index",{slot:"page"})])}},meta:{id:1,name:"pages-home-index",isNVue:!0,pagePath:"pages/home/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:0}},{path:"/pages/home/home",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"午安",navigationStyle:"custom"})},[e("pages-home-home",{slot:"page"})])}},meta:{name:"pages-home-home",isNVue:!0,pagePath:"pages/home/home",windowTop:0}},{path:"/pages/follow/follow",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarShadow:{colorType:"grey"},backgroundColor:"#f6f6f6"})},[e("pages-follow-follow",{slot:"page"})])}},meta:{id:2,name:"pages-follow-follow",isNVue:!0,pagePath:"pages/follow/follow",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/user/user",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"我的",navigationStyle:"custom"})},[e("pages-user-user",{slot:"page"})])}},meta:{id:3,name:"pages-user-user",isNVue:!0,pagePath:"pages/user/user",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:0}},{path:"/pages/user/logout",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"我的"})},[e("pages-user-logout",{slot:"page"})])}},meta:{name:"pages-user-logout",isNVue:!0,pagePath:"pages/user/logout",windowTop:44}},{path:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",navigationBarBackgroundColor:"#FFFFFF",backgroundColor:"#FFFFFF"})},[e("pages-login-login",{slot:"page"})])}},meta:{name:"pages-login-login",isNVue:!0,pagePath:"pages/login/login",windowTop:44}},{path:"/pages/login/register",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-login-register",{slot:"page"})])}},meta:{name:"pages-login-register",isNVue:!0,pagePath:"pages/login/register",windowTop:44}},{path:"/pages/login/reset",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-login-reset",{slot:"page"})])}},meta:{name:"pages-login-reset",isNVue:!0,pagePath:"pages/login/reset",windowTop:44}},{path:"/pages/detail/detail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"内容详情"})},[e("pages-detail-detail",{slot:"page"})])}},meta:{name:"pages-detail-detail",isNVue:!0,pagePath:"pages/detail/detail",windowTop:44}},{path:"/pages/media/media",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"午安",backgroundColor:"#FFFFFF"})},[e("pages-media-media",{slot:"page"})])}},meta:{name:"pages-media-media",isNVue:!0,pagePath:"pages/media/media",windowTop:44}},{path:"/pages/media/media-item",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-media-media-item",{slot:"page"})])}},meta:{name:"pages-media-media-item",isNVue:!0,pagePath:"pages/media/media-item",windowTop:44}},{path:"/pages/detail/uWebView",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-detail-uWebView",{slot:"page"})])}},meta:{name:"pages-detail-uWebView",isNVue:!0,pagePath:"pages/detail/uWebView",windowTop:44}},{path:"/pages/search/search",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{titleNView:{backgroundColor:"#1577FE",type:"default",searchInput:{autoFocus:!0,backgroundColor:"#fff",borderRadius:"4px",placeholder:"",fontSize:"14px",align:"left",disabled:!1},buttons:[{text:"  搜索",fontSize:"14px",width:"68px"}]}})},[e("pages-search-search",{slot:"page"})])}},meta:{name:"pages-search-search",isNVue:!0,pagePath:"pages/search/search",windowTop:44}},{path:"/pages/search/searchResult",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{titleNView:{backgroundColor:"#1577FE",type:"default",searchInput:{autoFocus:!0,backgroundColor:"#fff",fontSize:"14px",borderRadius:"4px",placeholder:"",align:"left",disabled:!0}}})},[e("pages-search-searchResult",{slot:"page"})])}},meta:{name:"pages-search-searchResult",isNVue:!0,pagePath:"pages/search/searchResult",windowTop:44}},{path:"/pages/media/media-item-two",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-media-media-item-two",{slot:"page"})])}},meta:{name:"pages-media-media-item-two",isNVue:!0,pagePath:"pages/media/media-item-two",windowTop:44}},{path:"/pages/inputphone/inputphone",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"登录"})},[e("pages-inputphone-inputphone",{slot:"page"})])}},meta:{name:"pages-inputphone-inputphone",isNVue:!0,pagePath:"pages/inputphone/inputphone",windowTop:44}},{path:"/pages/inputcode/inputcode",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"登录"})},[e("pages-inputcode-inputcode",{slot:"page"})])}},meta:{name:"pages-inputcode-inputcode",isNVue:!0,pagePath:"pages/inputcode/inputcode",windowTop:44}},{path:"/pages/setinfo/setinfo",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"设置资料"})},[e("pages-setinfo-setinfo",{slot:"page"})])}},meta:{name:"pages-setinfo-setinfo",isNVue:!0,pagePath:"pages/setinfo/setinfo",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,t("c8ba"))}});