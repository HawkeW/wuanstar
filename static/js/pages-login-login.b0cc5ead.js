(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"2a46":function(n,t,e){"use strict";var a,i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",{staticClass:"content"},[e("v-uni-text",{staticClass:"header"},[n._v("欢迎回来!")]),e("v-uni-form",{on:{submit:function(t){arguments[0]=t=n.$handleEvent(t),n.submit.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"input-wrapper"},[n.user.email?n._e():e("v-uni-text",{staticClass:"placeholder"},[n._v("请输入电子邮箱")]),e("v-uni-input",{staticClass:"input",attrs:{type:"text",maxlength:"30"},model:{value:n.user.email,callback:function(t){n.$set(n.user,"email",t)},expression:"user.email"}}),1==n.emailStatus?e("v-uni-text",{staticClass:"error"},[n._v("电子邮箱格式错误")]):n._e(),2==n.emailStatus?e("v-uni-text",{staticClass:"error"},[n._v("电子邮箱未注册")]):n._e()],1),e("v-uni-view",{staticClass:"input-wrapper"},[n.user.password?n._e():e("v-uni-text",{staticClass:"placeholder"},[n._v("请输入登录密码")]),e("v-uni-input",{staticClass:"input",attrs:{type:"password",maxlength:"24"},model:{value:n.user.password,callback:function(t){n.$set(n.user,"password",t)},expression:"user.password"}}),n.pwdStatus?n._e():e("v-uni-text",{staticClass:"error"},[n._v("密码错误")])],1),e("v-uni-view",{staticClass:"reset-wrapper"},[e("v-uni-navigator",{attrs:{url:"./reset"}},[e("v-uni-text",{staticClass:"reset"},[n._v("忘记密码 ？")])],1)],1),e("v-uni-button",{staticClass:"button",attrs:{"form-type":"submit",type:"primary"}},[n._v("登录")]),e("v-uni-navigator",{attrs:{url:"./register"}},[e("v-uni-button",{staticClass:"button",attrs:{type:"primary",plain:"true"}},[n._v("注册")])],1)],1)],1)},s=[];e.d(t,"b",function(){return i}),e.d(t,"c",function(){return s}),e.d(t,"a",function(){return a})},"2f37d":function(n,t,e){"use strict";var a=e("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("4917"),e("6b54");var i=a(e("cebc")),s=e("c7d5"),r=e("2f62"),o={data:function(){return{user:{email:"",password:""},emailStatus:0,pwdStatus:!0}},computed:(0,i.default)({},(0,r.mapState)(["auth"])),methods:(0,i.default)({},(0,r.mapMutations)(["login","setAuth"]),{submit:function(){var n=this,t=this.validateForm(this.user);t&&uni.request({url:s.baseUrl+"/user/token",method:"POST",data:{email:this.user.email,pwd:this.user.password},success:function(t){if("200"!==t.data.status.toString()){if("密码错误"==t.data.message)return void(n.pwdStatus=!1);if("电子邮箱未注册"==t.data.message)return void(n.emailStatus=2);uni.showModal({content:t.data.message,showCancel:!1})}else{n.setAuth(t.data.data.Auth);var e={email:n.user.email,name:t.data.data.userInfo.nickname,id:t.data.data.userInfo.userId};if(n.login(e),getCurrentPages().length>1){var a=getCurrentPages().length-2,i=getCurrentPages()[a].$page;console.log(i),i.meta.isTabBar?uni.switchTab({url:i.path}):uni.redirectTo({url:i.path})}else uni.switchTab({url:"../home/home"})}},fail:function(n){uni.showModal({content:n.data.message,showCancel:!1})}})},validateForm:function(n){var t="^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$";return""==n.email||""==n.password?(uni.showToast({title:"信息填写不完整",icon:"none"}),!1):!!n.email.match(t)||(this.emailStatus=1,!1)}})};t.default=o},"3bbe":function(n,t,e){"use strict";var a=e("6c82"),i=e.n(a);i.a},6973:function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\tuni-button[data-v-6496447c]{border-radius:0}uni-button[data-v-6496447c]::hover{background-color:#1577fe}\n\t.content[data-v-6496447c]{width:%?750?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header[data-v-6496447c]{margin-top:%?24?%;margin-bottom:%?88?%;color:#1577fe;text-align:center;font-size:%?52?%;font-weight:700}.input-wrapper[data-v-6496447c]{width:%?686?%;height:%?92?%;border-width:%?2?%;border-color:#e5e5e5;margin-bottom:%?32?%}.input[data-v-6496447c]{height:%?92?%;width:%?686?%;padding-left:%?32?%}.placeholder[data-v-6496447c]{position:absolute;top:%?24?%;left:%?32?%;color:#8d8d8d;font-size:%?32?%}.reset-wrapper[data-v-6496447c]{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;margin-bottom:%?248?%}.reset[data-v-6496447c]{margin-top:%?16?%;font-size:%?28?%}.button[data-v-6496447c]{width:%?686?%;margin-bottom:%?38?%;font-size:%?36?%;font-weight:700}.error[data-v-6496447c]{position:absolute;right:0;top:%?90?%;font-size:%?10?%;color:#dd524d}",""])},"6c82":function(n,t,e){var a=e("6973");"string"===typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);var i=e("4f06").default;i("9d45e9de",a,!0,{sourceMap:!1,shadowMode:!1})},aee8:function(n,t,e){"use strict";e.r(t);var a=e("2a46"),i=e("e39d");for(var s in i)"default"!==s&&function(n){e.d(t,n,function(){return i[n]})}(s);e("3bbe");var r,o=e("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"6496447c",null,!1,a["a"],r);t["default"]=u.exports},e39d:function(n,t,e){"use strict";e.r(t);var a=e("2f37d"),i=e.n(a);for(var s in a)"default"!==s&&function(n){e.d(t,n,function(){return a[n]})}(s);t["default"]=i.a}}]);