(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-follow-follow"],{"0b8c":function(t,e,o){"use strict";o.r(e);var i=o("f86f"),n=o.n(i);for(var a in i)"default"!==a&&function(t){o.d(e,t,(function(){return i[t]}))}(a);e["default"]=n.a},"10a7":function(t,e,o){"use strict";o.r(e);var i=o("9750"),n=o("0b8c");for(var a in n)"default"!==a&&function(t){o.d(e,t,(function(){return n[t]}))}(a);o("cb54");var s,l=o("f0c5"),r=Object(l["a"])(n["default"],i["b"],i["c"],!1,null,"9fd8f89e",null,!1,i["a"],s);e["default"]=r.exports},"8b1f":function(t,e,o){var i=o("bbc6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=o("4f06").default;n("1426da56",i,!0,{sourceMap:!1,shadowMode:!1})},9750:function(t,e,o){"use strict";var i={uniLoadMore:o("d446").default},n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"view"},[o("v-uni-scroll-view",{staticClass:"scroll-v list",style:{height:t.vHeight+"px"},attrs:{enableBackToTop:"true","scroll-top":t.scrollTop,"scroll-y":"true","scroll-with-animation":"true"},on:{scroll:function(e){arguments[0]=e=t.$handleEvent(e),t.scroll.apply(void 0,arguments)},scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore()}}},[t._l(t.followedList,(function(t,e){return o("v-uni-view",{key:t.id},[o("news-item",{attrs:{options:t}})],1)})),o("uni-load-more",{staticClass:"loading-more",attrs:{status:t.isLoading?"loading":t.total>t.followedList.length?"more":"nomore",showIcon:!0}})],2)],1)},a=[];o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return a})),o.d(e,"a",(function(){return i}))},bbc6:function(t,e,o){var i=o("24fb");e=i(!1),e.push([t.i,"\nuni-image[data-v-9fd8f89e]{width:unset;height:%?210?%}\n.view[data-v-9fd8f89e]{font-size:%?32?%;width:%?750?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.scroll-v[data-v-9fd8f89e]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\n\r\n\r\n\r\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\r\nwidth:%?750?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.news-item[data-v-9fd8f89e]{height:%?320?%;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\r\n  /* border-bottom-width: 1rpx;\r\n\t\tborder-bottom-style: solid;\r\n\t\tborder-bottom-color: #ebebeb; */padding-left:%?32?%;padding-right:%?32?%}.loading-more[data-v-9fd8f89e]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:10px;padding-bottom:10px;text-align:center}.loading-more-text[data-v-9fd8f89e]{font-size:%?28?%;color:#999}",""]),t.exports=e},cb54:function(t,e,o){"use strict";var i=o("8b1f"),n=o.n(i);n.a},f86f:function(t,e,o){"use strict";var i=o("ee27");o("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(o("f3f3")),a=o("2f62"),s=o("c4d0"),l=i(o("ee9e")),r={data:function(){return{followedList:[],pages:0,currentPage:1,total:0,refreshing:!1,refreshFlag:!1,pulling:!1,vHeight:0,refreshText:"正在加载",isLoading:!1,scrollTop:0,old:{scrollTop:0}}},components:{newsItem:l.default},computed:(0,n.default)({},(0,a.mapState)(["auth","user","hasLogin","lastTab"])),methods:(0,n.default)({},(0,a.mapMutations)(["setAuth","login","setLastTab"]),{loadMore:function(){var t=this;void 0!==this.currentPage&&(this.isLoading=!0,setTimeout((function(){t.getList()}),500))},onrefresh:function(){},onpullingdown:function(){},scroll:function(t){this.old.scrollTop=t.detail.scrollTop},goTop:function(){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0}))},getList:function(){var t=this;uni.request({url:s.baseUrl+"/news/follow",method:"GET",header:{Auth:this.auth},data:{pageNum:this.currentPage,pageSize:20},success:function(e){if("200"==e.data.status){var o=[];o=e.data.data.records,t.currentPage++,t.followedList=t.followedList.concat(o),t.total=e.data.data.total,t.pages=e.data.data.pages}else uni.navigateTo({url:"../login/login"});setTimeout((function(){t.isLoading=!1}),1e3)},fail:function(t){console.log(t.data)}})},getScreenHeight:function(){var t=this;uni.getSystemInfo({success:function(e){t.vHeight=e.screenHeight-84}})}}),onLoad:function(){console.log("onload");try{var t=uni.getStorageSync("user");t?this.login(t):this.logout();var e=uni.getStorageSync("auth");e?this.setAuth(e):this.setAuth("")}catch(o){uni.navigateTo({url:"../login/login"})}this.hasLogin&&this.auth&&this.user&&""==this.followedList&&!this.isLoading?(uni.startPullDownRefresh(),this.getScreenHeight()):uni.navigateTo({url:"../login/login"})},onPullDownRefresh:function(){this.isLoading=!0,this.followedList=[],this.getList(),uni.stopPullDownRefresh()},onTabItemTap:function(t){1==t.index&&1==this.lastTab&&this.goTop(),this.setLastTab(t.index),console.log(this.isLoading),""==this.followedList&&this.auth&&this.user&&!this.isLoading&&(console.log("没有数据"),uni.startPullDownRefresh()),this.user&&this.auth&&this.hasLogin||uni.redirectTo({url:"../login/login"})},onNavigationBarButtonTap:function(t){1==t.index&&this.goTop()},onReachBottom:function(){var t=this;this.followedList.length>=this.total?this.loadingText="没有更多数据了!":(this.isLoading=!0,setTimeout((function(){t.loadMore()}),300))}};e.default=r}}]);