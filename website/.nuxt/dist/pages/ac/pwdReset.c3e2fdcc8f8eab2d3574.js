webpackJsonp([20],{"/myT":function(t,e,n){"use strict";var a=n("V8bM"),r=n("y8ae");n("9oAv");e.a={props:["user"],data:function(){return{q:"",userData:this.user}},methods:{onSearch:function(){var t="http://zhannei.baidu.com/cse/search?s=2990237584871814305&entry=1&q="+encodeURIComponent(this.q);window.open(t)},onSignin:function(){location.href="/signin?ref="+encodeURIComponent(location.href)},onSignout:function(){var t=this;a.a.logout().then(function(e){e.errNo===r.a.SUCCESS&&(t.userData=null,window.location.href="/signin")}).catch(function(t){console.log(t)})}},mounted:function(){}}},"17iU":function(t,e,n){t.exports=n.p+"img/round_check_fill.df1f30b.png"},"1zF1":function(t,e,n){var a=n("J5qy");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("3d0b3a19",a,!0)},"9oAv":function(t,e,n){"use strict";var a=n("FhoZ"),r=n.n(a);if(r.a.bdStatEnable&&"undefined"!=typeof window){!function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?"+r.a.bdStatSI;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}()}},Bv19:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"golang-top-header"},[n("div",{staticClass:"golang-top-box"},[n("div",{staticClass:"golang-top-header-left"},[t._m(0),n("div",{staticClass:"golang-header-search"},[n("form",{staticClass:"golang-top-search",attrs:{action:"",target:"_blank",method:"get"},on:{submit:function(e){e.preventDefault(),t.onSearch(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"golang-top-input",attrs:{type:"text",name:"topSearch"},domProps:{value:t.q},on:{input:function(e){e.target.composing||(t.q=e.target.value)}}})])])]),t._m(1),n("div",{staticClass:"golang-top-header-right"},[n("ul",[t._m(2),t._m(3),t.userData?[n("li",[n("Tooltip",{attrs:{trigger:"hover",title:"提示标题",placement:"bottom"}},[n("a",{staticClass:"header-usre-box",attrs:{href:"/user/"+t.user.id}},[n("span",{staticClass:"header-avatar"},[n("img",{attrs:{src:t.user.avatarURL,alt:""}})]),n("span",{staticClass:"header-user-name"},[t._v(t._s(t.user.name))])]),n("ul",{staticClass:"header-user-box",attrs:{slot:"content"},slot:"content"},[n("li",[n("a",{attrs:{href:"/user/"+t.user.id}},[t._v("个人首页")])]),n("li",[n("a",{attrs:{href:"/ac/pwdModify"}},[t._v("修改密码")])]),n("li",{on:{click:t.onSignout}},[t._v("退  出")])])])],1)]:[n("a",{on:{click:t.onSignin}},[n("li",[t._v("登录")])]),t._m(4)]],2)])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"golang-logo-container"},[n("a",{attrs:{href:"/"}},[t._v("Golang123")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"golang-top-header-nav"},[n("ul",[n("li",[n("a",{attrs:{href:"/"}},[t._v("首页")])]),n("li",[n("a",{attrs:{href:"/vote"}},[t._v("投票")])]),n("li",[n("a",{attrs:{href:"/timeline"}},[t._v("成长历史")])]),n("li",[n("a",{attrs:{href:"/about"}},[t._v("关于")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[t._v("golang123源码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"/signup"}},[n("li",[t._v("注册")])])}],s={render:a,staticRenderFns:r};e.a=s},ExDO:function(t,e,n){"use strict";function a(t){n("jrUy")}Object.defineProperty(e,"__esModule",{value:!0});var r=n("xfTB"),s=n("I986"),o=n("VU/8"),i=a,c=o(r.a,s.a,!1,i,null,null);e.default=c.exports},I986:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("go-header",{attrs:{user:t.user}}),a("div",{staticClass:"golang-forget-container"},[a("h1",[t._v("账号安全中心")]),a("p",{staticClass:"golang-forget-title"},[t._v("忘记密码")]),a("div",{staticClass:"golang-forget-form",attrs:{id:"reset"}},[a("Row",{staticClass:"golang-forget-form"},[t.success?t._e():a("div",[a("Form",{ref:"formCustom",attrs:{model:t.formCustom,rules:t.ruleCustom,action:"javascript:void(0)"}},[a("Form-item",{attrs:{prop:"email"}},[a("i-input",{attrs:{size:"large",placeholder:"请输入邮箱"},on:{"on-blur":function(e){t.blur("formCustom.email")}},nativeOn:{keyup:function(e){t.handleKeyUp(e)}},model:{value:t.formCustom.email,callback:function(e){t.formCustom.email=e},expression:"formCustom.email"}})],1)],1),a("i-button",{staticClass:"forget-button",attrs:{type:"primary",size:"large"},on:{click:function(e){t.handleSubmit("formCustom")}}},[t._v("发送邮件")])],1),t.success?a("div",[a("p",{staticClass:"forget-success-icon"},[a("img",{attrs:{src:n("17iU"),alt:""}})]),a("p",{staticClass:"forget-success-info"},[t._v("验证邮件已发送至您的邮箱，请注意查收!")]),a("p",{staticClass:"forget-success-info"},[t._v("没收到邮件？"),t.times>0?a("span",[t._v(t._s(t.times)+"秒后")]):t._e(),a("span",{class:t.times>0?"not-resend":"forget-resend",on:{click:t.reSend}},[t._v("重新发送")])])]):t._e()])],1)])],1)},r=[],s={render:a,staticRenderFns:r};e.a=s},IgDG:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r});var a=function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},r=function(t,e){var n=t.split("."),r=e,s=n.length-1,o=n[s];n.map(function(t,e){e!==s&&(r=r[t])}),r[o]=a(r[o])}},J3Se:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"golang-footer"},[n("div",{staticClass:"golang-footer-page-link"},[n("a",{attrs:{href:"https://github.com/shen100/golang123",target:"_blank"}},[n("div",{staticClass:"golang-footer-github"},[n("Icon",{staticStyle:{"margin-right":"1px"},attrs:{type:"social-github"}})],1),n("span",{staticStyle:{"margin-left":"2px"}},[t._v("Github")])]),n("span",[t._v("  | ")]),n("a",{attrs:{href:"https://github.com/shen100/golang123/issues",target:"_blank"}},[t._v("问题反馈")]),n("span",[t._v("  |  ")]),n("a",{attrs:{href:"/vote"}},[t._v("投票")]),n("span",[t._v("  |  ")]),n("a",{attrs:{href:"/rank"}},[t._v("积分榜")]),n("span",[t._v("  |  ")]),n("a",{attrs:{href:"/links"}},[t._v("友情链接")]),n("span",[t._v("  |  ")]),n("a",{attrs:{href:"/timeline"}},[t._v("成长历史")]),n("span",[t._v("  |  ")]),n("a",{attrs:{href:"/about"}},[t._v("关于我们")])]),t._m(0)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"golang-footer-copyright"},[n("span",[t._v("© 2017 "),n("a",{attrs:{href:"/"}},[t._v("golang中文社区")]),t._v(" "),n("a",{attrs:{href:"/"}},[t._v("golang123.com")]),t._v(" 版权所有")]),n("span",[t._v(" | ")]),n("span",[t._v("京ICP备12045181号-2")])])}],s={render:a,staticRenderFns:r};e.a=s},J5qy:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"",""])},"YXP+":function(t,e,n){"use strict";function a(t){n("1zF1")}var r=n("/myT"),s=n("Bv19"),o=n("VU/8"),i=a,c=o(r.a,s.a,!1,i,null,null);e.a=c.exports},jrUy:function(t,e,n){var a=n("wL3e");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("4a7fd591",a,!0)},wL3e:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"body{background-color:#e1e1e1}.golang-footer{position:fixed;bottom:0;width:100%}.golang-forget-container{width:1200px;margin:0 auto;height:560px;margin-top:20px;background-color:#fff;padding:20px}.golang-forget-container h1{font-size:24px}.golang-forget-title{height:30px;line-height:30px;background-color:#80bd01;color:#fff;font-size:14px;margin-top:15px;padding-left:10px}.golang-forget-form{width:400px;margin:0 auto;margin-top:60px}.forget-button{width:400px}.reset-pwd-button{margin-left:80px;width:300px}.forget-success-icon{text-align:center}.forget-success-icon img{widows:80px;height:80px}.forget-success-info{text-align:center;font-size:16px;font-weight:700;margin-top:30px}.reset-container{padding-top:20px}.reset-form{width:380px;margin:0 auto}.signup-input{width:300px}.forget-resend{color:#007fff;margin-left:10px;cursor:pointer}.forget-resend:hover{color:#007fff;text-decoration:none;text-decoration:underline}.not-resend{color:#9e9e9e;margin-left:10px;cursor:not-allowed}",""])},xfTB:function(t,e,n){"use strict";var a=n("YXP+"),r=n("yqLL"),s=n("y8ae"),o=n("V8bM"),i=n("IgDG");e.a={data:function(){return{loading:!1,formCustom:{email:""},times:0,success:!1,ruleCustom:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请填写正确的邮箱",trigger:"blur"}]}}},asyncData:function(t){return{user:t.user}},head:function(){return{title:"忘记密码"}},middleware:"userInfo",methods:{handleKeyUp:function(t){if(13===t.keyCode)return this.handleSubmit("formCustom")},handleSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(t){if(e.loading)return;e.loading=!0,o.a.sendEmailPwd({body:{email:Object(i.a)(e.formCustom.email)}}).then(function(t){e.loading=!1,t.errNo===s.a.SUCCESS?(e.success=!0,e.times=60):e.$Message.error(t.msg)}).catch(function(t){e.loading=!1,e.$Message.error(t.message)})}})},reSend:function(){var t=this;0!==this.times||this.loading||o.a.sendEmailPwd({body:{email:this.formCustom.email}}).then(function(e){t.loading=!1,e.errNo===s.a.SUCCESS?(t.success=!0,t.times=60):t.$Message.error(e.msg)}).catch(function(e){t.loading=!1,t.$Message.error(e.msg)})},blur:function(t){Object(i.b)(t,this)}},mounted:function(){var t=this;this.count=setInterval(function(){t.times>0&&t.times--},1e3)},destroyed:function(){clearInterval(this.count)},components:{"go-header":a.a,"go-footer":r.a}}},yqLL:function(t,e,n){"use strict";var a=n("J3Se"),r=n("VU/8"),s=r(null,a.a,!1,null,null,null);e.a=s.exports}});
//# sourceMappingURL=pwdReset.c3e2fdcc8f8eab2d3574.js.map