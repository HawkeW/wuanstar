(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-media-media","pages-media-media-item"],{1417:function(t,e,i){"use strict";i.r(e);var n=i("4b01"),a=i("303e");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d76a");var r,c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"1e8f4453",null,!1,n["a"],r);e["default"]=l.exports},"1de5":function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"29e1":function(t,e,i){var n=i("8101");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("4e9223fb",n,!0,{sourceMap:!1,shadowMode:!1})},"2c0f":function(t,e,i){"use strict";i("99af"),i("c975"),i("ac1f"),i("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("ce35"),a=i("c7d5"),o={name:"mediaitem",props:{options:{type:Object,default:function(t){return{}}}},data:function(){return{mainImg:""}},computed:{time:function(){new Date,new Date(this.options.publishDate);return n.dateUtils.format(this.options.publishDate)}},created:function(){this.handleImage()},methods:{click:function(){this.$emit("click")},close:function(t){this.$emit("close")},handleImage:function(){var t=this.options.image.replace(/&amp;/g,"&");-1!=t.indexOf("//")?this.mainImg=t:this.mainImg="".concat(a.baseUrl,"/file?fileName=").concat(t,"&type=image")}}};e.default=o},"303e":function(t,e,i){"use strict";i.r(e);var n=i("d191"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"428c":function(t,e,i){"use strict";i.r(e);var n=i("bd83"),a=i("ab3f");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9d9e");var r,c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"b6a492c2",null,!1,n["a"],r);e["default"]=l.exports},"4b01":function(t,e,i){"use strict";var n={uniLoadMore:i("1da2").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"media"},[i("meta-card",{staticClass:"card",attrs:{img:t.mediaIcon,description:t.mediaNumber,title:t.mediaName,active:t.followed,checking:t.checking},nativeOn:{click:function(e){return t.follow(e)}}}),i("v-uni-view",{staticClass:"view"},[i("v-uni-scroll-view",{staticClass:"scroll-v list",style:{"max-height":t.vHeight+"px"},attrs:{enableBackToTop:"true","scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[t._l(t.mediaList,(function(e,n){return i("v-uni-view",{key:e.id},[i("media-item",{attrs:{options:e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e.newsId)}}})],1)})),i("uni-load-more",{staticClass:"loading-more",attrs:{status:t.isLoading?"loading":t.pages>=t.currentPage?"more":"nomore",showIcon:!0},on:{clickLoadMore:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}})],2)],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"4e8b":function(t,e,i){"use strict";i.r(e);var n=i("a29e"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"50dd":function(t,e,i){"use strict";var n=i("29e1"),a=i.n(n);a.a},"51b7":function(t,e,i){"use strict";i.r(e);var n=i("2c0f"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"6bfe":function(t,e,i){"use strict";var n=i("7215"),a=i.n(n);a.a},7215:function(t,e,i){var n=i("7da6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("10054f82",n,!0,{sourceMap:!1,shadowMode:!1})},7909:function(t,e,i){"use strict";i.r(e);var n=i("bda2"),a=i("4e8b");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("6bfe");var r,c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"a445d080",null,!1,n["a"],r);e["default"]=l.exports},"7da6":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"\nuni-button[data-v-a445d080]{padding:%?0?%;border-radius:10px;width:%?146?%}\n.card[data-v-a445d080]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\nheight:%?130?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding-left:%?18?%;padding-right:%?25?%;background-color:#fff}.meta[data-v-a445d080]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:%?360?%;margin-left:%?36?%}.title[data-v-a445d080]{margin-top:%?23?%;font-size:20px;font-weight:700;color:#262727}.description[data-v-a445d080]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\r\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;font-size:12px;color:#bbb;margin-top:%?24?%}.focused[data-v-a445d080]{color:#0079ff;font-size:12px}.light[data-v-a445d080]{color:#bbb;font-size:12px}.img[data-v-a445d080]{height:%?130?%;width:%?130?%;border-radius:%?130?%}.button[data-v-a445d080]{border-radius:%?10?%;width:%?146?%;height:%?58?%;line-height:%?58?%;margin-top:%?36?%;box-sizing:border-box;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#007aff}.button-text[data-v-a445d080]{font-size:14px;color:#fff}.active-button[data-v-a445d080]{background-color:#fff;border-width:1px;border-style:solid;border-color:#ccc}.active-checking[data-v-a445d080]{background-color:#8c8c8c}.active-text[data-v-a445d080]{color:#bcbcbc}",""]),t.exports=e},8101:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"\nuni-image[data-v-21c511fa]{width:unset;height:%?188?%}\n.view[data-v-21c511fa]{font-size:%?32?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flex-row[data-v-21c511fa]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.flex-col[data-v-21c511fa]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.list-cell[data-v-21c511fa]{\n  /* width: 750rpx; */padding:0 %?30?%}.uni-list-cell-hover[data-v-21c511fa]{background-color:#eee}.media-item[data-v-21c511fa]{\n  /* height: 320rpx; */position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n  /* border-bottom-width: 1rpx;\n\t\tborder-bottom-style: solid;\n\t\tborder-bottom-color: #ebebeb; */padding-top:%?32?%;padding-left:%?32?%;padding-right:%?32?%}.media-item-hover[data-v-21c511fa]{background-color:#eee}.item-time[data-v-21c511fa]{font-size:%?24?%;margin-top:%?24?%;margin-bottom:%?15?%}.media-item-line[data-v-21c511fa]{position:absolute;left:%?30?%;right:%?30?%;bottom:0;height:1px;background-color:#ebebeb}.over[data-v-21c511fa]{overflow:hidden;text-overflow:ellipsis;\ndisplay:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;\n}.content-img[data-v-21c511fa]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.content-flex[data-v-21c511fa]{width:%?430?%}.media-title[data-v-21c511fa]{overflow:hidden;text-overflow:ellipsis;font-size:%?34?%;font-weight:700;\n/*  flex: 1; */lines:2;\n  /* height: 98rpx; */line-height:%?48?%;margin-bottom:%?16?%}.media-sum[data-v-21c511fa]{color:#747474;font-size:%?32?%;\n  /* height: 90rpx; */line-height:%?44?%}.main-img[data-v-21c511fa]{margin-left:%?16?%;height:%?188?%;width:%?188?%;overflow:hidden}.media-info[data-v-21c511fa]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.info-text[data-v-21c511fa]{margin-right:%?20?%;color:#999;font-size:%?24?%}.media-foot[data-v-21c511fa]{margin-top:%?25?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.close-l[data-v-21c511fa]{position:absolute;width:%?18?%;height:%?1?%;background-color:#aaa}.close-h[data-v-21c511fa]{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close-v[data-v-21c511fa]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}",""]),t.exports=e},"81a1":function(t,e,i){var n=i("a17f");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3b208ffc",n,!0,{sourceMap:!1,shadowMode:!1})},"9d9e":function(t,e,i){"use strict";var n=i("81a1"),a=i.n(n);a.a},a17f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-fav[data-v-b6a492c2]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:60px;height:25px;line-height:25px;text-align:center;border-radius:3px}.uni-fav--circle[data-v-b6a492c2]{border-radius:30px}.uni-fav-star[data-v-b6a492c2]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nheight:25px;line-height:24px;margin-right:3px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-fav-text[data-v-b6a492c2]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nheight:25px;line-height:25px;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}",""]),t.exports=e},a29e:function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("89cb")),o={components:{cacheImage:a.default},props:{img:{type:String,default:""},title:{type:String,default:"标题"},description:{type:String,default:"描述"},button:{type:String,default:"关注"},buttonCancel:{type:String,default:"取消关注"},active:{type:Boolean,default:!0},checking:{type:Boolean,default:!0}}};e.default=o},ab3f:function(t,e,i){"use strict";i.r(e);var n=i("d5fd"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},b16b:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.options.title?i("v-uni-view",{staticClass:"media-item view",attrs:{"hover-class":"media-item-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t.options.image?i("v-uni-view",{staticClass:"media-content view content-img"},[i("v-uni-view",{staticClass:"content content-flex"},[i("v-uni-text",{staticClass:"media-title over"},[t._v(t._s(t.options.title))]),i("v-uni-text",{staticClass:"media-sum over"},[t._v(t._s(t.options.summary))])],1),i("v-uni-view",{staticClass:"main-img",staticStyle:{"text-align":"center",width:"188rpx",height:"188rpx"}},[i("v-uni-image",{staticStyle:{height:"188rpx",width:"188rpx"},attrs:{src:t.mainImg,mode:"aspectFill"},on:{error:function(e){arguments[0]=e=t.$handleEvent(e)}}})],1)],1):i("v-uni-view",{staticClass:"media-content view"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"media-title over"},[t._v(t._s(t.options.title))]),i("v-uni-text",{staticClass:"media-sum over"},[t._v(t._s(t.options.summary))])],1)],1),i("v-uni-text",{staticClass:"item-time"},[t._v(t._s(t.time))]),i("v-uni-view",{staticClass:"media-item-line",staticStyle:{position:"absolute"}})],1):t._e()},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},b441:function(t,e,i){var n=i("db6d");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("56f194fe",n,!0,{sourceMap:!1,shadowMode:!1})},b658:function(t,e,i){"use strict";i.r(e);var n=i("b16b"),a=i("51b7");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("50dd");var r,c=i("f0c5"),l=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"21c511fa",null,!1,n["a"],r);e["default"]=l.exports},bd83:function(t,e,i){"use strict";var n={uniIcons:i("735b").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-fav",class:[!0===t.circle||"true"===t.circle?"uni-fav--circle":""],style:[{backgroundColor:t.checked?t.bgColorChecked:t.bgColor}],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.checked||!0!==t.star&&"true"!==t.star?t._e():i("uni-icons",{staticClass:"uni-fav-star",style:{color:t.checked?t.fgColorChecked:t.fgColor},attrs:{color:t.fgColor,size:"14",type:"star-filled"}}),i("v-uni-text",{staticClass:"uni-fav-text",style:{color:t.checked?t.fgColorChecked:t.fgColor}},[t._v(t._s(t.checked?t.contentText.contentFav:t.contentText.contentDefault))])],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},bda2:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"card"},[i("cache-image",{attrs:{iconUrl:t.img,size:130}}),i("v-uni-view",{staticClass:"meta"},[i("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))]),i("v-uni-view",{staticClass:"description"},[i("v-uni-text",{staticClass:"focused"},[t._v(t._s(t.description))]),i("v-uni-text",{staticClass:"light"},[t._v("人关注")])],1)],1),i("v-uni-button",{staticClass:"button",class:t.active?t.checking?"active-checking":"active-button":"",attrs:{type:"default",loading:t.checking}},[i("v-uni-text",{staticClass:"button-text",class:{"active-text":t.active}},[t._v(t._s(t.active?t.checking?"取消":t.buttonCancel:t.button))])],1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},d191:function(t,e,i){"use strict";(function(t){var n=i("ee27");i("99af"),i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("f3f3")),o=i("e9b7"),r=n(i("7909")),c=n(i("428c")),l=n(i("3d64")),d=n(i("fb48")),s=n(i("b658")),f=(n(i("1da2")),i("2f62")),u=(i("c7d5"),{components:{mediaItem:s.default,uniNavBar:d.default,uniFav:c.default,uniIcons:l.default,metaCard:r.default},computed:(0,a.default)({},(0,f.mapState)(["hasLogin","user","auth"]),{loadingText:function(){return this.isLoading?"正在加载...":this.mediaList.length===this.total?"没有更多了":"上拉加载更多"}}),data:function(){return{status:!0,followed:!1,checking:!1,checkingIcon:"&#xe61d;",mediaList:[],mediaId:"",mediaNumber:"0",mediaIcon:"",mediaName:"",pages:0,currentPage:1,total:0,isLoading:!0,vHeight:0,refreshing:!1,refreshFlag:!1,refreshIcon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg=="}},methods:{initMedia:function(t){var e=this;this.mediaId=t.id,this.mediaName=t.name,this.mediaIcon=t.icon,this.mediaNumber=t.followNum,this.checkFollow(t.id),this.getScreenHeight(),this.isLoading=!0,this.getList().then((function(t){e.isLoading=!1})).catch((function(t){e.status=!1,e.isLoading=!1}))},navigateBack:function(){uni.navigateBack({delta:1})},checkFollow:function(){var e,i,n=this;this.hasLogin&&(t("log",this.auth," at pages/media/media.nvue:122"),this.checking=!0,(0,o.getFollowStatus)({mediaId:this.mediaId},{ContentType:"application/x-www-form-urlencoded",token:this.auth}).then((function(a){t("log",a," at pages/media/media.nvue:132"),e=a.msg,i=a.status,"200"==i&&(n.followed=!0,n.checking=!1),n.checking=!1})).catch((function(t){uni.showModal({content:e,showCancel:!1}),n.checking=!1})))},follow:function(){var t=this;this.checking||(this.checking=!0,this.hasLogin?this.followed?(0,o.unsubscribeMedia)({mediaId:this.mediaId},{ContentType:"application/json",token:this.auth}).then((function(e){"200"===e.status&&setTimeout((function(){t.followed=!1,t.checking=!1}),1e3)})):(0,o.subscribeMedia)({mediaId:this.mediaId},{ContentType:"application/json",token:this.auth}).then((function(e){"200"===e.status&&setTimeout((function(){t.checking=!1,t.followed=!0}),1e3)})):uni.showModal({content:"您尚未登录，是否登录？",success:function(e){e.confirm?uni.navigateTo({url:"../inputphone/inputphone"}):e.cancel&&(t.checking=!1)}}))},onrefresh:function(){},loadMore:function(){var t=this;void 0===this.currentPage||this.mediaList===this.total||this.isLoading||(this.isLoading=!0,this.getList().then((function(e){t.isLoading=!1})).catch((function(e){t.isLoading=!1,uni.showToast({title:"加载失败，请稍候重试",icon:"none"})})))},getList:function(){var t=this,e=new Promise((function(e,i){(0,o.getNewsList)({media:t.mediaName,pageNum:t.currentPage,pageSize:20}).then((function(n){var a=n.data,o=(n.msg,n.status);if("200"==o&&null!==a.records){var r=[];r=a.records,t.currentPage++,t.mediaList=t.mediaList.concat(r),t.total=a.total,t.pages=a.pages,e("ok")}else i(n)})).catch((function(t){i(t)}))}));return e},goDetail:function(t){uni.navigateTo({url:"../detail/detail?id="+t})},getScreenHeight:function(){var t=this;uni.getSystemInfo({success:function(e){t.vHeight=e.screenHeight-160}})}},onLoad:function(t){this.initMedia(t)},onReachBottom:function(){this.mediaList!==this.total&&this.loadMore()}});e.default=u}).call(this,i("0de9")["log"])},d439:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB4klEQVQ4T7VVPW8TQRB9cy5siQKJCP4ChRu0cw5tqBCfQiJBpAstDVBAOhx3CRTQUEMHIhEpwoeoSAu+WdG4oKEHFCQ6N9ZDY+1ZlhNjjohrTrc7+3bezJt3ghlPjPEyyfsi8hXAdgjh+Z+OyORmt9tdqNVqbZKfVfWOmT0BcDPFvVLVq2a2ISLzg8Gg02q1dscx9gGa2TaAKynoRno/Lb9FpE9ymCXJt3meX5gF2Aaw5kEicj6E8C7GeLxerw+azebPGOM5B0oga6ra2QfoNLMsuwXAaXbMrC0iX0IILw6qV4zxOsmTZSyAUyTX8zz/OKQcY/xAcmHardOa4BePsdkNIZwZAprZIwC3E83laZlNApvZRQA7af2xN3HUFDNbEZFvXrNZUhrfL4piSUSOqOqzYUJJZ2cBdMvFKoCJ4QqAloi8FzMrAGiieyKE8KMKoCuA5Pd0xjzDlySXfKHRaMy5NKoA9nq9Y/1+fy8ltOmAyyQXvbiHpHxJRLZGTXFtAfhVtSkudABHS2WUstkAcK+qbJLAS7N4oKqr/0fYPnoicldEPo2Nk6nq678ZPZLzJB+68xzkNqNxInktz/PNyuYwofw37jJlPUk2APy7fRVFcTrLsnWSTn/10AY7WbOqv4DfKrMs5ufZC24AAAAASUVORK5CYII="},d5fd:function(t,e,i){"use strict";var n=i("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("735b")),o={name:"UniFav",components:{uniIcons:a.default},props:{star:{type:[Boolean,String],default:!0},bgColor:{type:String,default:"#eeeeee"},fgColor:{type:String,default:"#666666"},bgColorChecked:{type:String,default:"#007aff"},fgColorChecked:{type:String,default:"#FFFFFF"},circle:{type:[Boolean,String],default:!1},checked:{type:Boolean,default:!1},contentText:{type:Object,default:function(){return{contentDefault:"收藏",contentFav:"已收藏"}}}},watch:{checked:function(){uni.report&&(this.checked?uni.report("收藏","收藏"):uni.report("取消收藏","取消收藏"))}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},d76a:function(t,e,i){"use strict";var n=i("b441"),a=i.n(n);a.a},db6d:function(t,e,i){var n=i("24fb"),a=i("1de5"),o=i("d439");e=n(!1);var r=a(o);e.push([t.i,"\nuni-page-body[data-v-1e8f4453]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-1e8f4453]{font-size:14px;line-height:inherit}.example[data-v-1e8f4453]{padding:0 15px 15px}.example-info[data-v-1e8f4453]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-1e8f4453]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.media[data-v-1e8f4453]{margin-left:%?30?%;margin-right:%?30?%;margin-top:%?24?%;background-color:#fff}.card[data-v-1e8f4453]{margin-top:%?36?%;margin-bottom:%?30?%}.follow-status[data-v-1e8f4453]{font-size:%?34?%;margin-right:%?10?%;color:#fff;-webkit-transition-duration:1s;transition-duration:1s}.scroll-v[data-v-1e8f4453]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n\n    /* width: 750rpx; */-webkit-box-align:center;-webkit-align-items:center;align-items:center}.example-body[data-v-1e8f4453]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n    /* padding: 15px; */background-color:#fff}.example-body-fullWidth[data-v-1e8f4453]{\n    /* padding: 32rpx 0; */}.view[data-v-1e8f4453]{font-size:%?32?%;\n    /* width: 750rpx; */-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.scroll-h[data-v-1e8f4453]{\n    /* width: 750rpx; */height:%?80?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\nwhite-space:nowrap\n\n    /* flex-wrap: nowrap; */\n    /* border-color: #cccccc;\n\t\t\tborder-bottom-style: solid;\n\t\t\tborder-bottom-width: 1px; */}.refresh[data-v-1e8f4453]{width:%?750?%;height:64px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.refresh-view[data-v-1e8f4453]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.refresh-icon[data-v-1e8f4453]{width:30px;height:30px;-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:15px 15px;transform-origin:15px 15px}.refresh-icon-active[data-v-1e8f4453]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.loading-icon[data-v-1e8f4453]{width:20px;height:20px;margin-right:5px;color:#999}.loading-text[data-v-1e8f4453]{margin-left:2px;font-size:16px;color:#999}.loading-more[data-v-1e8f4453]{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-top:10px;padding-bottom:10px;text-align:center}.loading[data-v-1e8f4453]{background-image:url("+r+");width:%?30?%;height:%?30?%}.loading-more-text[data-v-1e8f4453]{font-size:%?28?%;color:#999}.indicator-text[data-v-1e8f4453]{color:#888;font-size:16px;text-align:center}.loading[data-v-1e8f4453]{width:%?750?%;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?80?%}.error[data-v-1e8f4453]{height:%?500?%;margin-top:%?100?%}body.?%PAGE?%[data-v-1e8f4453]{background-color:#efeff4}",""]),t.exports=e}}]);