(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-media-media","pages-media-media-item"],{1417:function(t,e,i){"use strict";i.r(e);var o=i("5e28"),a=i("303e");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("842e");var r,d=i("f0c5"),l=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,"0e291d83",null,!1,o["a"],r);e["default"]=l.exports},"2c0f":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("ce35"),a=(i("c7d5"),{name:"mediaitem",props:{options:{type:Object,default:function(t){return{}}}},computed:{time:function(){new Date,new Date(this.options.publishDate);return o.dateUtils.format(this.options.publishDate)}},methods:{click:function(){this.$emit("click")},close:function(t){this.$emit("close")}}});e.default=a},"303e":function(t,e,i){"use strict";i.r(e);var o=i("d191"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);e["default"]=a.a},"3c05":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".scroll-v[data-v-0e291d83]{height:%?1360?%}.loading-more[data-v-0e291d83]{padding-top:%?40?%;padding-bottom:%?40?%}.loading-text[data-v-0e291d83]{color:#919191;font-size:%?32?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;text-align:center}.loading-more-text[data-v-0e291d83]{color:#919191;font-size:%?32?%;text-align:center}",""])},"51b7":function(t,e,i){"use strict";i.r(e);var o=i("2c0f"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);e["default"]=a.a},"5b4b":function(t,e,i){var o=i("8b02");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("ea8715ba",o,!0,{sourceMap:!1,shadowMode:!1})},"5e28":function(t,e,i){"use strict";var o={"uni-load-more":i("1da2").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-scroll-view",{staticClass:"scroll-v list",attrs:{enableBackToTop:"true","scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[t._l(t.mediaList,function(e,o){return i("v-uni-view",{key:e.id},[i("media-item",{attrs:{options:e},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e.newsId)}}})],1)}),i("uni-load-more",{staticClass:"loading-more",attrs:{status:t.isLoading?"loading":t.pages>=t.currentPage?"more":"nomore",showIcon:!0},on:{clickLoadMore:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}})],2)],1)},n=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return n}),i.d(e,"a",function(){return o})},"615d":function(t,e,i){"use strict";var o=i("5b4b"),a=i.n(o);a.a},"842e":function(t,e,i){"use strict";var o=i("9672"),a=i.n(o);a.a},"8b02":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-image[data-v-53db021e]{width:unset;height:%?210?%}.view[data-v-53db021e]{font-size:%?32?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.flex-row[data-v-53db021e]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.flex-col[data-v-53db021e]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.list-cell[data-v-53db021e]{width:%?750?%;padding:0 %?30?%}.uni-list-cell-hover[data-v-53db021e]{background-color:#eee}.media-item[data-v-53db021e]{height:%?320?%;position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\n  /* border-bottom-width: 1rpx;\n\t\tborder-bottom-style: solid;\n\t\tborder-bottom-color: #ebebeb; */padding-top:%?32?%;padding-left:%?32?%;padding-right:%?32?%}.media-item-hover[data-v-53db021e]{background-color:#eee}.item-time[data-v-53db021e]{font-size:%?24?%;margin-top:%?24?%}.media-item-line[data-v-53db021e]{position:absolute;left:%?30?%;right:%?30?%;bottom:0;height:%?1?%;background-color:#ebebeb}.over[data-v-53db021e]{overflow:hidden;text-overflow:ellipsis;\ndisplay:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;\n\n}.content-img[data-v-53db021e]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.content-flex[data-v-53db021e]{width:%?460?%}.media-title[data-v-53db021e]{font-size:%?36?%;font-weight:700;-webkit-box-flex:1;-webkit-flex:1;flex:1;lines:2;\n  /* height: 98rpx; */line-height:%?48?%;margin-bottom:%?16?%}.media-sum[data-v-53db021e]{color:#747474;font-size:%?32?%;height:%?90?%;line-height:%?44?%}.main-img[data-v-53db021e]{margin-left:%?16?%;height:%?210?%;width:%?210?%;overflow:hidden}.media-info[data-v-53db021e]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.info-text[data-v-53db021e]{margin-right:%?20?%;color:#999;font-size:%?24?%}.media-foot[data-v-53db021e]{margin-top:%?25?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.close-l[data-v-53db021e]{position:absolute;width:%?18?%;height:%?1?%;background-color:#aaa}.close-h[data-v-53db021e]{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.close-v[data-v-53db021e]{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}",""])},9672:function(t,e,i){var o=i("3c05");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("2f75adf9",o,!0,{sourceMap:!1,shadowMode:!1})},af83:function(t,e,i){"use strict";var o,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.options.title?i("v-uni-view",{staticClass:"media-item view",attrs:{"hover-class":"media-item-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t.options.image?i("v-uni-view",{staticClass:"media-content view content-img"},[i("v-uni-view",{staticClass:"content content-flex"},[i("v-uni-text",{staticClass:"media-title over"},[t._v(t._s(t.options.title))]),i("v-uni-text",{staticClass:"media-sum over"},[t._v(t._s(t.options.summary))])],1),i("v-uni-view",{staticClass:"main-img"},[i("v-uni-image",{staticStyle:{width:"210rpx"},attrs:{src:t.options.image,mode:"aspectFill"}})],1)],1):i("v-uni-view",{staticClass:"media-content view"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-text",{staticClass:"media-title over"},[t._v(t._s(t.options.title))]),i("v-uni-text",{staticClass:"media-sum over"},[t._v(t._s(t.options.summary))])],1)],1),i("v-uni-text",{staticClass:"item-time"},[t._v(t._s(t.time))]),i("v-uni-view",{staticClass:"media-item-line",staticStyle:{position:"absolute"}})],1):t._e()},n=[];i.d(e,"b",function(){return a}),i.d(e,"c",function(){return n}),i.d(e,"a",function(){return o})},b658:function(t,e,i){"use strict";i.r(e);var o=i("af83"),a=i("51b7");for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);i("615d");var r,d=i("f0c5"),l=Object(d["a"])(a["default"],o["b"],o["c"],!1,null,"53db021e",null,!1,o["a"],r);e["default"]=l.exports},d191:function(t,e,i){"use strict";var o=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(i("b658")),n=(o(i("1da2")),i("c7d5")),r={components:{mediaItem:a.default},data:function(){return{mediaList:[],mediaId:"",mediaName:"",pages:0,currentPage:0,total:0,isLoading:!1,loadingText:"加载更多"}},methods:{test:function(){console.log("scrolltolower")},loadMore:function(){var t=this;void 0!==this.currentPage&&(this.isLoading=!0,setTimeout(function(){t.currentPage++,t.getList()},500))},getList:function(){var t=this;uni.request({url:n.baseUrl+"/news",method:"GET",data:{media:this.mediaName,pageNum:this.currentPage,pageSize:20},success:function(e){if("200"==e.data.status){var i=[];i=e.data.data.records,t.mediaList=t.mediaList.concat(i),t.total=e.data.data.total,t.pages=e.data.data.pages,t.isLoading=!1}else uni.showModal({showCancel:!1,content:e.data.message})}})},goDetail:function(t){uni.navigateTo({url:"../detail/detail?id="+t})}},onLoad:function(t){var e=t.name;uni.setNavigationBarTitle({title:e}),this.mediaName=e,this.loadMore()}};e.default=r}}]);