(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-index"],{"07a2":function(t,e,i){"use strict";var a={uniNavBar:i("fb48").default,uniLoadMore:i("1da2").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tabs"},[i("uni-nav-bar",{attrs:{"status-bar":!0,color:"#007AFF",title:"午安"}}),i("tabbar-top",{attrs:{datas:t.tabBars,tabIndex:t.tabIndex},on:{tabtap:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabtap.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"line-h"}),i("v-uni-swiper",{staticClass:"swiper-box",staticStyle:{flex:"1"},attrs:{current:t.tabIndex,duration:300},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.ontabchange.apply(void 0,arguments)}}},t._l(t.newsList,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"swiper-item"},[t.status[a]||e.isLoading?i("v-uni-scroll-view",{staticClass:"scroll-v list",style:{"max-height":t.vHeight+"px"},attrs:{enableBackToTop:"true","scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore(a)}}},[t._l(e.data,(function(e,a){return i("v-uni-view",{key:a},[i("media-card",{staticClass:"media-card",attrs:{title:e.name,icon:e.icon,datas:e.newsList},nativeOn:{click:function(i){return t.toMedia(e)}}})],1)})),i("uni-load-more",{staticClass:"loading-more",attrs:{status:t.loading?"loading":e.total>e.data.length?"more":"nomore",showIcon:!0}})],2):i("v-uni-view",{staticClass:"loading"},[i("v-uni-text",{staticClass:"indicator-text"},[t._v("数据加载失败，请稍候重试")])],1)],1)})),1)],1)},o=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}))},"2e39":function(t,e,i){"use strict";i.r(e);var a=i("07a2"),n=i("4b8f");for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("c005");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"cf9bd2ba",null,!1,a["a"],r);e["default"]=c.exports},"4b8f":function(t,e,i){"use strict";i.r(e);var a=i("5f05"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"5f05":function(t,e,i){"use strict";(function(t){var a=i("ee27");i("99af"),i("4160"),i("c975"),i("a434"),i("d3b7"),i("acd8"),i("25f0"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("f3f3")),o=i("e9b7"),r=a(i("09a8")),s=a(i("1a0d")),c=a(i("c1e6")),l=a(i("7aa5")),d=a(i("1da2")),f=i("2f62"),u=10,b=100,g={components:{newsItem:l.default,uniLoadMore:d.default,tabbarTop:s.default,listCard:r.default,mediaCard:c.default},computed:(0,n.default)({},(0,f.mapState)(["lastTab"]),{isRefreshing:function(){return function(t){return!!this.newsList[t].refreshing}},refreshText:function(){return function(t){return this.newsList[t].refreshText}}}),data:function(){return{newsList:[],status:[],tabIndex:0,tabBars:[],cacheTab:[],scrollInto:"",refreshing:!1,pulling:!1,loading:!1,isLoading:!1,vHeight:0}},onLoad:function(){this.getScreenHeight(),this.init()},methods:(0,n.default)({},(0,f.mapMutations)(["setLastTab","setHasLogin","setUser","setAuth"]),{getList:function(t){var e=this,i=this.newsList[t],a=new Promise((function(a,n){(0,o.getMediaList)({pageNum:i.currentPage,pageSize:20,category:0===t?"":e.tabBars[t].name}).then((function(t){t.msg;var e=t.status,o=t.data;if("200"==e){null===o.dataOnThisPage[0]&&n("数据加载异常");var r=[];r=o.dataOnThisPage,i.currentPage++,i.total=o.total,i.pages=o.pages,i.data=i.data.concat(r),a()}n("请求失败")})).catch((function(t){n(t)}))}));return a},getCategory:function(){var e=this,i=new Promise((function(i,a){(0,o.getMediaCategory)({pageNum:1,pageSize:20}).then((function(n){var o=n.msg,r=n.status,s=n.data;switch(r){case"200":e.tabBars=[{categoryId:"",id:0,name:"首页"}].concat(s.dataOnThisPage),i();break;case"500":a(),t("log",o," at pages/home/index.nvue:182");break}a()}))}));return i},init:function(){var t=this;this.getCategory().then((function(){t.tabBars.forEach((function(e){t.newsList.push({data:[],total:0,pages:0,currentPage:1,pulling:!1,refreshFlag:!1,isLoading:!1,refreshText:"",loadingText:"加载更多..."}),t.status.push(!0)})),t.loading=!0,setTimeout((function(){t.getList(0).then((function(){setTimeout((function(){t.loading=!1}),1e3)})).catch((function(){setTimeout((function(){t.status[0]=!1,t.loading=!1}),1e3)}))}),1e3)}))},toMedia:function(e){t("log",e," at pages/home/index.nvue:222"),uni.navigateTo({url:"../media/media?id=".concat(e.mediaId,"&name=").concat(e.name,"&icon=").concat(e.icon,"&followNum=").concat(e.followNum)})},ontabtap:function(t){var e=t;this.switchTab(e)},ontabchange:function(t){var e=t.target.current||t.detail.current;this.switchTab(e)},loadMore:function(e){var i=this,a=this.newsList[e];a.isLoading||void 0!==a.currentPage&&a.total!==a.data.length&&(t("log","loadmore"," at pages/home/index.nvue:249"),this.loading=!0,a.isLoading=!0,this.getList(e).then((function(){setTimeout((function(){a.isLoading=!1,i.loading=!1}),1e3)})).catch((function(){setTimeout((function(){a.isLoading=!1,i.loading=!1}),1e3)})))},switchTab:function(e){var i=this;if(this.tabIndex!==e){this.tabIndex=e;var a=this.newsList[e];if(!a.isLoading){if(0===a.data.length||null===a.data[0]?(t("log","无数据，加载"," at pages/home/index.nvue:277"),this.loading=!0,a.isLoading=!0,this.getList(e).then((function(){i.loading=!1,a.isLoading=!1})).catch((function(t){i.status[e]=!1,i.loading=!1,a.isLoading=!1}))):t("log","有数据，暂不加载"," at pages/home/index.nvue:289"),this.newsList[e].data.length>b){var n=this.cacheTab.indexOf(e);n<0&&this.cacheTab.push(e)}if(this.scrollInto=this.tabBars[e].id,this.cacheTab.length>u){var o=this.cacheTab[0];this.clearTabData(o),this.cacheTab.splice(0,1)}}}},clearTabData:function(t){this.newsList[t].data.length=0,this.newsList[t].loadingText="加载更多...",this.newsList[t]={data:[],total:0,pages:0,currentPage:1,refreshing:!1,refreshFlag:!1,isLoading:!1,refreshText:"",loadingText:"加载更多..."}},refreshData:function(e){var i=this;t("log","refresh"," at pages/home/index.nvue:327"),this.clearTabData(e),this.refreshState(e,!0).then((function(a){return t("log","设置刷新"," at pages/home/index.nvue:331"),t("log",a," at pages/home/index.nvue:332"),i.getList(e)})).then((function(t){return i.refreshState(e,!1)})).then((function(e){t("log","关闭刷新"," at pages/home/index.nvue:337"),t("log",e," at pages/home/index.nvue:338")})).catch((function(){t("log","error"," at pages/home/index.nvue:340"),i.refreshState(e,!1)}))},onrefresh:function(e){var i=this,a=this.newsList[e];a.refreshFlag&&(a.refreshText="正在刷新……",this.pulling=!0,a.refreshing=!0,t("log","pulling"+this.pulling," at pages/home/index.nvue:355"),setTimeout((function(){i.pulling=!1,a.refreshing=!1,i.refreshData(e),t("log","pulling"+i.pulling," at pages/home/index.nvue:361")}),2e3))},onpullingdown:function(e){t("log","pull down"," at pages/home/index.nvue:366");var i=this.newsList[this.tabIndex];i.refreshing||this.pulling||(Math.abs(e.pullingDistance)>Math.abs(e.viewHeight)?(t("log","释放刷新"," at pages/home/index.nvue:373"),i.refreshFlag=!0,i.refreshText="释放立即刷新"):(i.refreshFlag=!1,i.refreshText="下拉可以刷新"))},getScreenHeight:function(){var t=this;uni.getSystemInfo({success:function(e){t.vHeight=e.screenHeight-140}})},refreshState:function(t,e){var i=this.newsList[t],a=new Promise((function(a,n){"NaN"==parseFloat(t).toString()&&n("index需为数值"),e?(i.refreshing=!0,i.refreshText="正在刷新...",i.currentPage=1):(i.refreshing=!1,i.refreshText=""),a(i)}));return a}})};e.default=g}).call(this,i("0de9")["log"])},"7e4f":function(t,e,i){var a=i("ca33");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("57b946a9",a,!0,{sourceMap:!1,shadowMode:!1})},c005:function(t,e,i){"use strict";var a=i("7e4f"),n=i.n(a);n.a},ca33:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"\nuni-page-body[data-v-cf9bd2ba]{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:flex}\n.tabs[data-v-cf9bd2ba]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden;background-color:#fff;\n}.scroll-h[data-v-cf9bd2ba]{width:%?750?%;height:%?80?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nwhite-space:nowrap\n\n    /* flex-wrap: nowrap; */\n    /* border-color: #cccccc;\n\t\tborder-bottom-style: solid;\n\t\tborder-bottom-width: 1px; */}.line-b[data-v-cf9bd2ba]{position:absolute;-webkit-transition-duration:1.5s;transition-duration:1.5s;\n    /* transition-property: all; */left:0;bottom:0;background-color:#007aff;height:%?8?%;\n    /* border-style: solid; */width:%?135?%}.line-h[data-v-cf9bd2ba]{height:%?1?%;background-color:#ccc}.uni-tab-item[data-v-cf9bd2ba]{\ndisplay:inline-block;\n-webkit-flex-wrap:nowrap;flex-wrap:nowrap}.scroll-v[data-v-cf9bd2ba]{\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.swiper-item[data-v-cf9bd2ba]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#f6f6f6}.swiper-box[data-v-cf9bd2ba]{-webkit-box-flex:1;-webkit-flex:1;flex:1;background-color:#f6f6f6}.media-card[data-v-cf9bd2ba]{margin-top:%?25?%;width:%?690?%;margin-left:%?30?%;margin-right:%?30?%}.uni-tab-item-title[data-v-cf9bd2ba]{color:#555;font-size:%?30?%;height:%?80?%;line-height:%?80?%;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;\nwhite-space:nowrap\n}.uni-tab-item-title-active[data-v-cf9bd2ba]{color:#007aff}.update-tips[data-v-cf9bd2ba]{position:absolute;left:0;top:41px;right:0;padding-top:5px;padding-bottom:5px;background-color:#fddd9b;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.update-tips-text[data-v-cf9bd2ba]{font-size:14px;color:#fff}.refresh[data-v-cf9bd2ba]{width:%?750?%;height:64px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.refresh-view[data-v-cf9bd2ba]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.refresh-icon[data-v-cf9bd2ba]{width:30px;height:30px;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:15px 15px;transform-origin:15px 15px}.refresh-icon-active[data-v-cf9bd2ba]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.loading[data-v-cf9bd2ba]{width:%?750?%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-top:%?40?%;height:%?80?%}.refresh[data-v-cf9bd2ba]{width:%?750?%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}.loading-icon[data-v-cf9bd2ba]{width:20px;height:20px;margin-right:5px;color:#999}.loading-text[data-v-cf9bd2ba]{margin-left:2px;font-size:16px;color:#999}.indicator-text[data-v-cf9bd2ba]{color:#888;font-size:16px;text-align:center}.indicator[data-v-cf9bd2ba]{margin-top:16px;height:%?40?%;width:%?40?%;color:#00f}.loading-more[data-v-cf9bd2ba]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:10px;padding-bottom:10px;text-align:center}.loading-more-text[data-v-cf9bd2ba]{font-size:%?28?%;color:#999}",""]),t.exports=e}}]);