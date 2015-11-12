webpackJsonp([0,1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/* scss文件也要通过引入才能进行编译*/
	
	/*
	 * 注意, webpack会把引入的scss文件全部都打包到一起，我估计被重复用到的内容它会单独打包到一个文件中
	 * 并且把scss编译为css 文件的命名方式应该是根据脚本的名字吧（猜测 这一点有待于测试）。。。。。
	 */
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	/* 上面这两句最终会编译成index.css 文件 */
	/* js 引入 */
	__webpack_require__(4);
	/* 因为我们使用了动画模块 */
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(10);
	__webpack_require__(11);
	
	
	//我们把controller 部分，directive部分， service部分 分别分开引入进来
	var myApp = angular.module('myApp', ['appService', 'ngAnimate', 'ngRoute', 'appControllers', 'appDirective']);
	
	myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	    //设置路由模式为H5模式
	    $locationProvider.html5Mode(true);
	    //content/index 页面根据导航tab进行切换,tab 包括阅读,视听,发现三个功能
	    $routeProvider
	        .when('/public/content', {
	            template: '<h1>{{title}}</h1><section-dir ng-repeat="item in sectionArr"></section-dir>',
	            controller: 'contentControl'
	        })
	        .when('/public/read', {
	            template: '<h1>{{title}}</h1><section-dir ng-repeat="item in sectionArr"></section-dir>',
	            controller: 'contentControl'
	        })
	        .when('/public/video', {
	            template: '<h1>{{title}}</h1><video-dir ng-repeat="item in videoArr"></video-dir>',
	            controller: 'contentControl'
	        })
	        .when('/public/find', {
	            template: '<h1>{{title}}</h1><find-dir ng-repeat="item in findArr"></find-dir>',
	            controller: 'contentControl'
	        });
	}]);
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.5.0-beta.1
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	 */
	(function(K,V,x){'use strict';function z(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.5.0-beta.1/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Da(b){if(null==b||Za(b))return!1;var a="length"in Object(b)&&
	    b.length;return b.nodeType===na&&a?!0:J(b)||G(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function m(b,a,c){var d,e;if(b)if(A(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(G(b)||Da(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==m)b.forEach(a,c,b);else if(mc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
	a.call(c,b[d],d,b);else for(d in b)sa.call(b,d)&&a.call(c,b[d],d,b);return b}function nc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function oc(b){return function(a,c){b(c,a)}}function Vd(){return++nb}function pc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Mb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(C(g)||A(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var n=h[l],p=g[n];c&&C(p)?da(p)?b[n]=new Date(p.valueOf()):Na(p)?
	    b[n]=new RegExp(p):(C(b[n])||(b[n]=G(p)?[]:{}),Mb(b[n],[p],!0)):b[n]=p}}pc(b,d);return b}function L(b){return Mb(b,ta.call(arguments,1),!1)}function Wd(b){return Mb(b,ta.call(arguments,1),!0)}function Z(b){return parseInt(b,10)}function Nb(b,a){return L(Object.create(b),a)}function s(){}function $a(b){return b}function oa(b){return function(){return b}}function qc(b){return A(b.toString)&&b.toString!==Object.prototype.toString}function v(b){return"undefined"===typeof b}function y(b){return"undefined"!==
	    typeof b}function C(b){return null!==b&&"object"===typeof b}function mc(b){return null!==b&&"object"===typeof b&&!rc(b)}function J(b){return"string"===typeof b}function U(b){return"number"===typeof b}function da(b){return"[object Date]"===ua.call(b)}function A(b){return"function"===typeof b}function Na(b){return"[object RegExp]"===ua.call(b)}function Za(b){return b&&b.window===b}function ab(b){return b&&b.$evalAsync&&b.$watch}function bb(b){return"boolean"===typeof b}function sc(b){return!(!b||!(b.nodeName||
	b.prop&&b.attr&&b.find))}function Xd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function va(b){return I(b.nodeName||b[0]&&b[0].nodeName)}function cb(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function ea(b,a,c,d){if(Za(b)||ab(b))throw Ea("cpws");if(tc.test(ua.call(a)))throw Ea("cpta");if(a){if(b===a)throw Ea("cpi");c=c||[];d=d||[];C(b)&&(c.push(b),d.push(a));var e;if(G(b))for(e=a.length=0;e<b.length;e++)a.push(ea(b[e],null,c,d));else{var f=a.$$hashKey;G(a)?
	    a.length=0:m(a,function(b,c){delete a[c]});if(mc(b))for(e in b)a[e]=ea(b[e],null,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&(a[e]=ea(b[e],null,c,d));else for(e in b)sa.call(b,e)&&(a[e]=ea(b[e],null,c,d));pc(a,f)}}else if(a=b,C(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(G(b))return ea(b,[],c,d);if(tc.test(ua.call(b)))a=new b.constructor(b);else if(da(b))a=new Date(b.getTime());else if(Na(b))a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=
	    b.lastIndex;else if(A(b.cloneNode))a=b.cloneNode(!0);else return e=Object.create(rc(b)),ea(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ia(b,a){if(G(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}else if(C(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function la(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(G(b)){if(!G(a))return!1;if((c=b.length)==a.length){for(d=0;d<
	c;d++)if(!la(b[d],a[d]))return!1;return!0}}else{if(da(b))return da(a)?la(b.getTime(),a.getTime()):!1;if(Na(b))return Na(a)?b.toString()==a.toString():!1;if(ab(b)||ab(a)||Za(b)||Za(a)||G(a)||da(a)||Na(a))return!1;c=ga();for(d in b)if("$"!==d.charAt(0)&&!A(b[d])){if(!la(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c)&&"$"!==d.charAt(0)&&y(a[d])&&!A(a[d]))return!1;return!0}return!1}function db(b,a,c){return b.concat(ta.call(a,c))}function uc(b,a){var c=2<arguments.length?ta.call(arguments,2):[];
	  return!A(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,db(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Yd(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=x:Za(a)?c="$WINDOW":a&&V===a?c="$DOCUMENT":ab(a)&&(c="$SCOPE");return c}function eb(b,a){if("undefined"===typeof b)return x;U(a)||(a=a?2:null);return JSON.stringify(b,Yd,a)}function vc(b){return J(b)?JSON.parse(b):b}function wc(b,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Ob(b,a,c){c=c?-1:1;var d=wc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function wa(b){b=F(b).clone();try{b.empty()}catch(a){}var c=F("<div>").append(b).html();try{return b[0].nodeType===Oa?I(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+I(b)})}catch(d){return I(c)}}function xc(b){try{return decodeURIComponent(b)}catch(a){}}
	  function yc(b){var a={};m((b||"").split("&"),function(b){var d,e,f;b&&(e=b=b.replace(/\+/g,"%20"),d=b.indexOf("="),-1!==d&&(e=b.substring(0,d),f=b.substring(d+1)),e=xc(e),y(e)&&(f=y(f)?xc(f):!0,sa.call(a,e)?G(a[e])?a[e].push(f):a[e]=[a[e],f]:a[e]=f))});return a}function Pb(b){var a=[];m(b,function(b,d){G(b)?m(b,function(b){a.push(ja(d,!0)+(!0===b?"":"="+ja(b,!0)))}):a.push(ja(d,!0)+(!0===b?"":"="+ja(b,!0)))});return a.length?a.join("&"):""}function ob(b){return ja(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,
	      "=").replace(/%2B/gi,"+")}function ja(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Zd(b,a){var c,d,e=Pa.length;for(d=0;d<e;++d)if(c=Pa[d]+a,J(c=b.getAttribute(c)))return c;return null}function $d(b,a){var c,d,e={};m(Pa,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});m(Pa,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":",
	          "\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Zd(c,"strict-di"),a(c,d?[d]:[],e))}function zc(b,a,c){C(c)||(c={});c=L({strictDi:!1},c);var d=function(){b=F(b);if(b.injector()){var d=b[0]===V?"document":wa(b);throw Ea("btstrpd",d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=fb(a,c.strictDi);d.invoke(["$rootScope",
	    "$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;K&&e.test(K.name)&&(c.debugInfoEnabled=!0,K.name=K.name.replace(e,""));if(K&&!f.test(K.name))return d();K.name=K.name.replace(f,"");$.resumeBootstrap=function(b){m(b,function(b){a.push(b)});return d()};A($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function ae(){K.name="NG_ENABLE_DEBUG_INFO!"+K.name;K.location.reload()}
	  function be(b){b=$.element(b).injector();if(!b)throw Ea("test");return b.get("$$testability")}function Ac(b,a){a=a||"_";return b.replace(ce,function(b,d){return(d?a:"")+b.toLowerCase()})}function de(){var b;if(!Bc){var a=pb();(pa=v(a)?K.jQuery:a?K[a]:x)&&pa.fn.on?(F=pa,L(pa.fn,{scope:Qa.scope,isolateScope:Qa.isolateScope,controller:Qa.controller,injector:Qa.injector,inheritedData:Qa.inheritedData}),b=pa.cleanData,pa.cleanData=function(a){var d;if(Qb)Qb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=
	      pa._data(f,"events"))&&d.$destroy&&pa(f).triggerHandler("$destroy");b(a)}):F=Q;$.element=F;Bc=!0}}function qb(b,a,c){if(!b)throw Ea("areq",a||"?",c||"required");return b}function Ra(b,a,c){c&&G(b)&&(b=b[b.length-1]);qb(A(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Sa(b,a){if("hasOwnProperty"===b)throw Ea("badname",a);}function Cc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&
	  A(b)?uc(e,b):b}function rb(b){for(var a=b[0],c=b[b.length-1],d,e=1;a!==c&&(a=a.nextSibling);e++)if(d||b[e]!==a)d||(d=F(ta.call(b,0,e))),d.push(a);return d||b}function ga(){return Object.create(null)}function ee(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=z("$injector"),d=z("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||z;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            c,e,f){f||(f=d);return function(){f[e||"push"]([b,c,arguments]);return D}}function b(a,c){return function(b,e){e&&A(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return D}}if(!g)throw c("nomod",f);var d=[],e=[],r=[],u=a("$injector","invoke","push",e),D={_invokeQueue:d,_configBlocks:e,_runBlocks:r,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide",
	      "decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:u,run:function(a){r.push(a);return this}};h&&u(h);return D})}})}function fe(b){L(b,{bootstrap:zc,copy:ea,extend:L,merge:Wd,equals:la,element:F,forEach:m,injector:fb,noop:s,bind:uc,toJson:eb,fromJson:vc,identity:$a,isUndefined:v,isDefined:y,isString:J,isFunction:A,isObject:C,isNumber:U,isElement:sc,isArray:G,
	    version:ge,isDate:da,lowercase:I,uppercase:sb,callbacks:{counter:0},getTestability:be,$$minErr:z,$$csp:Fa,reloadWithDebugInfo:ae});Rb=ee(K);Rb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:he});a.provider("$compile",Dc).directive({a:ie,input:Ec,textarea:Ec,form:je,script:ke,select:le,style:me,option:ne,ngBind:oe,ngBindHtml:pe,ngBindTemplate:qe,ngClass:re,ngClassEven:se,ngClassOdd:te,ngCloak:ue,ngController:ve,ngForm:we,ngHide:xe,ngIf:ye,ngInclude:ze,ngInit:Ae,ngNonBindable:Be,
	    ngPluralize:Ce,ngRepeat:De,ngShow:Ee,ngStyle:Fe,ngSwitch:Ge,ngSwitchWhen:He,ngSwitchDefault:Ie,ngOptions:Je,ngTransclude:Ke,ngModel:Le,ngList:Me,ngChange:Ne,pattern:Fc,ngPattern:Fc,required:Gc,ngRequired:Gc,minlength:Hc,ngMinlength:Hc,maxlength:Ic,ngMaxlength:Ic,ngValue:Oe,ngModelOptions:Pe}).directive({ngInclude:Qe}).directive(tb).directive(Jc);a.provider({$anchorScroll:Re,$animate:Se,$animateCss:Te,$$animateQueue:Ue,$$AnimateRunner:Ve,$browser:We,$cacheFactory:Xe,$controller:Ye,$document:Ze,$exceptionHandler:$e,
	    $filter:Kc,$$forceReflow:af,$interpolate:bf,$interval:cf,$http:df,$httpParamSerializer:ef,$httpParamSerializerJQLike:ff,$httpBackend:gf,$xhrFactory:hf,$location:jf,$log:kf,$parse:lf,$rootScope:mf,$q:nf,$$q:of,$sce:pf,$sceDelegate:qf,$sniffer:rf,$templateCache:sf,$templateRequest:tf,$$testability:uf,$timeout:vf,$window:wf,$$rAF:xf,$$jqLite:yf,$$HashMap:zf,$$cookieReader:Af})}])}function gb(b){return b.replace(Bf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Cf,"Moz$1")}function Lc(b){b=b.nodeType;
	    return b===na||!b||9===b}function Mc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Sb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Df.exec(b)||["",""])[1].toLowerCase();d=ka[d]||ka._default;c.innerHTML=d[1]+b.replace(Ef,"<$1></$2>")+d[2];for(d=d[0];d--;)c=c.lastChild;f=db(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";m(f,function(a){e.appendChild(a)});return e}function Q(b){if(b instanceof Q)return b;var a;J(b)&&(b=T(b),
	      a=!0);if(!(this instanceof Q)){if(a&&"<"!=b.charAt(0))throw Tb("nosel");return new Q(b)}if(a){a=V;var c;b=(c=Ff.exec(b))?[a.createElement(c[1])]:(c=Mc(b,a))?c.childNodes:[]}Nc(this,b)}function Ub(b){return b.cloneNode(!0)}function ub(b,a){a||vb(b);if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)vb(c[d])}function Oc(b,a,c,d){if(y(d))throw Tb("offargs");var e=(d=wb(b))&&d.events,f=d&&d.handle;if(f)if(a)m(a.split(" "),function(a){if(y(c)){var d=e[a];cb(d||[],c);if(d&&0<
	      d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function vb(b,a){var c=b.ng339,d=c&&hb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),Oc(b)),delete hb[c],b.ng339=x))}function wb(b,a){var c=b.ng339,c=c&&hb[c];a&&!c&&(b.ng339=c=++Gf,c=hb[c]={events:{},data:{},handle:x});return c}function Vb(b,a,c){if(Lc(b)){var d=y(c),e=!d&&a&&!C(a),f=!a;b=(b=wb(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;
	    if(e)return b&&b[a];L(b,a)}}}function xb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function yb(b,a){a&&b.setAttribute&&m(a.split(" "),function(a){b.setAttribute("class",T((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(a)+" "," ")))})}function zb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");m(a.split(" "),function(a){a=T(a);-1===c.indexOf(" "+a+" ")&&
	  (c+=a+" ")});b.setAttribute("class",T(c))}}function Nc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Pc(b,a){return Ab(b,"$"+(a||"ngController")+"Controller")}function Ab(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=G(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if(y(c=F.data(b,a[d])))return c;b=b.parentNode||11===b.nodeType&&b.host}}function Qc(b){for(ub(b,!0);b.firstChild;)b.removeChild(b.firstChild)}
	  function Wb(b,a){a||ub(b);var c=b.parentNode;c&&c.removeChild(b)}function Hf(b,a){a=a||K;if("complete"===a.document.readyState)a.setTimeout(b);else F(a).on("load",b)}function Rc(b,a){var c=Bb[a.toLowerCase()];return c&&Sc[va(b)]&&c}function If(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(v(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=
	      !0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function yf(){this.$get=function(){return L(Q,{hasClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return zb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return yb(b,a)}})}}function Ga(b,a){var c=b&&b.$$hashKey;
	    if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Vd)():c+":"+b}function Ta(b,a){if(a){var c=0;this.nextUid=function(){return++c}}m(b,this.put,this)}function Tc(b){b=b.toString().replace(Jf,"");return b.match(Kf)||b.match(Lf)}function Mf(b){return(b=Tc(b))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(b,a){function c(a){return function(b,c){if(C(b))m(b,oc(a));else return a(b,c)}}function d(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       b){Sa(a,"service");if(A(b)||G(b))b=r.instantiate(b);if(!b.$get)throw Ha("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=D.invoke(b,this);if(v(c))throw Ha("undef",a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){qb(v(a)||G(a),"modulesToLoad","not an array");var b=[],c;m(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=r.get(e[0]);f[e[1]].apply(f,e[2])}}if(!n.get(a)){n.put(a,!0);try{J(a)?(c=Rb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),
	      d(c._invokeQueue),d(c._configBlocks)):A(a)?b.push(r.invoke(a)):G(a)?b.push(r.invoke(a)):Ra(a,"module")}catch(e){throw G(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ha("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  c,f,h){"string"===typeof f&&(h=f,f=null);var g=[],k=fb.$$annotate(b,a,h),l,r,p;r=0;for(l=k.length;r<l;r++){p=k[r];if("string"!==typeof p)throw Ha("itkn",p);g.push(f&&f.hasOwnProperty(p)?f[p]:d(p,h))}G(b)&&(b=b[l]);return b.apply(c,g)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((G(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return C(a)||A(a)?a:d},get:d,annotate:fb.$$annotate,has:function(a){return p.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],
	      n=new Ta([],!0),p={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,oa(b),!1)}),constant:c(function(a,b){Sa(a,"constant");p[a]=b;u[a]=b}),decorator:function(a,b){var c=r.get(a+"Provider"),d=c.$get;c.$get=function(){var a=D.invoke(d,c);return D.invoke(b,null,{$delegate:a})}}}},r=p.$injector=h(p,function(a,b){$.isString(b)&&k.push(b);throw Ha("unpr",k.join(" <- "));}),u={},D=u.$injector=h(u,
	          function(a,b){var c=r.get(a+"Provider",b);return D.invoke(c.$get,c,x,a)});m(g(b),function(a){a&&D.invoke(a)});D.strictDi=a;return D}function Re(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===va(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;A(c)?c=c():sc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):
	  U(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(a){a=J(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Hf(function(){d.$evalAsync(g)})});return g}]}function ib(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;G(b)&&(b=b.join(" "));G(a)&&(a=a.join(" "));return b+" "+a}function Nf(b){J(b)&&(b=b.split(" "));
	    var a=ga();m(b,function(b){b.length&&(a[b]=!0)});return a}function Ia(b){return C(b)?b:{}}function Of(b,a,c,d){function e(a){try{a.apply(null,ta.call(arguments,1))}finally{if(D--,0===D)for(;H.length;)try{H.pop()()}catch(b){c.error(b)}}}function f(){fa=null;g();h()}function g(){a:{try{w=n.state;break a}catch(a){}w=void 0}w=v(w)?null:w;la(w,E)&&(w=E);E=w}function h(){if(B!==l.url()||q!==w)B=l.url(),q=w,m(O,function(a){a(l.url(),w)})}var l=this,k=b.location,n=b.history,p=b.setTimeout,r=b.clearTimeout,
	      u={};l.isMock=!1;var D=0,H=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=function(){D++};l.notifyWhenNoOutstandingRequests=function(a){0===D?a():H.push(a)};var w,q,B=k.href,N=a.find("base"),fa=null;g();q=w;l.url=function(a,c,e){v(e)&&(e=null);k!==b.location&&(k=b.location);n!==b.history&&(n=b.history);if(a){var f=q===e;if(B===a&&(!d.history||f))return l;var h=B&&Ja(B)===Ja(a);B=a;q=e;if(!d.history||h&&f){if(!h||fa)fa=a;c?k.replace(a):h?(c=k,e=a.indexOf("#"),e=-1===e?"":a.substr(e),
	      c.hash=e):k.href=a;k.href!==a&&(fa=a)}else n[c?"replaceState":"pushState"](e,"",a),g(),q=w;return l}return fa||k.href.replace(/%27/g,"'")};l.state=function(){return w};var O=[],M=!1,E=null;l.onUrlChange=function(a){if(!M){if(d.history)F(b).on("popstate",f);F(b).on("hashchange",f);M=!0}O.push(a);return a};l.$$applicationDestroyed=function(){F(b).off("hashchange popstate",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=N.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=
	      function(a,b){var c;D++;c=p(function(){delete u[c];e(a)},b||0);u[c]=!0;return c};l.defer.cancel=function(a){return u[a]?(delete u[a],r(a),e(s),!0):!1}}function We(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Of(b,d,a,c)}]}function Xe(){this.$get=function(){function b(b,d){function e(a){a!=p&&(r?r==a&&(r=a.n):r=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw z("$cacheFactory")("iid",b);var g=0,h=L({},d,{id:b}),l={},
	      k=d&&d.capacity||Number.MAX_VALUE,n={},p=null,r=null;return a[b]={put:function(a,b){if(!v(b)){if(k<Number.MAX_VALUE){var c=n[a]||(n[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(r.key);return b}},get:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=n[a];if(!b)return;b==p&&(p=b.p);b==r&&(r=b.n);f(b.n,b.p);delete n[a]}delete l[a];g--},removeAll:function(){l={};g=0;n={};p=r=null},destroy:function(){n=h=l=null;delete a[b]},
	    info:function(){return L({},h,{size:g})}}}var a={};b.info=function(){var b={};m(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function sf(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Dc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};m(a,function(a,f){var h=a.match(d);if(!h)throw ha("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:h[1][0],collection:"*"===h[2],optional:"?"===
	  h[3],attrName:h[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==I(b))throw ha("baddir",a);if(a!==a.trim())throw ha("baddir",a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Xd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function r(a,f){Sa(a,"directive");J(a)?(d(a),qb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=
	      [];m(e[a],function(e,h){try{var g=b.invoke(e);A(g)?g={compile:oa(g)}:!g.compile&&g.link&&(g.compile=oa(g.link));g.priority=g.priority||0;g.index=h;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"EA";var k=g,l=g,r=g.name,n={isolateScope:null,bindToController:null};C(l.scope)&&(!0===l.bindToController?(n.bindToController=c(l.scope,r,!0),n.isolateScope={}):n.isolateScope=c(l.scope,r,!1));C(l.bindToController)&&(n.bindToController=c(l.bindToController,r,!0));if(C(n.bindToController)){var R=
	      l.controller,D=l.controllerAs;if(!R)throw ha("noctrl",r);var aa;a:if(D&&J(D))aa=D;else{if(J(R)){var m=Uc.exec(R);if(m){aa=m[3];break a}}aa=void 0}if(!aa)throw ha("noident",r);}var t=k.$$bindings=n;C(t.isolateScope)&&(g.$$isolateBindings=t.isolateScope);g.$$moduleName=e.$$moduleName;f.push(g)}catch(x){d(x)}});return f}])),e[a].push(f)):m(a,oc(r));return this};this.aHrefSanitizationWhitelist=function(b){return y(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
	      function(b){return y(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};var n=!0;this.debugInfoEnabled=function(a){return y(a)?(n=a,this):n};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,w,q,B,N,fa,O,M){function E(a,b){try{a.addClass(b)}catch(c){}}function Y(a,b,c,d,e){a instanceof F||(a=F(a));m(a,function(b,c){b.nodeType==Oa&&b.nodeValue.match(/\S+/)&&
	  (a[c]=F(b).wrap("<span></span>").parent()[0])});var f=R(a,b,a,c,d,e);Y.$$addScopeClass(a);var h=null;return function(b,c,d){qb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);h||(h=(d=d&&d[0])?"foreignobject"!==va(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==h?F(U(h,F("<div>").append(a).html())):c?Qa.clone.call(a):a;if(g)for(var k in g)d.data("$"+k+"Controller",g[k].instance);Y.$$addScopeInfo(d,
	      b);c&&c(d,b);f&&f(b,d,d,e);return d}}function R(a,b,c,d,e,f){function h(a,c,d,e){var f,k,l,r,n,u,ba;if(q)for(ba=Array(c.length),r=0;r<g.length;r+=3)f=g[r],ba[f]=c[f];else ba=c;r=0;for(n=g.length;r<n;)if(k=ba[g[r++]],c=g[r++],f=g[r++],c){if(c.scope){if(l=a.$new(),Y.$$addScopeInfo(F(k),l),u=c.$$destroyBindings)c.$$destroyBindings=null,l.$on("$destroyed",u)}else l=a;u=c.transcludeOnThisElement?P(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?P(a,b):null;c(f,l,k,d,u,c)}else f&&f(a,k.childNodes,
	      x,e)}for(var g=[],k,l,r,n,q,u=0;u<a.length;u++){k=new da;l=aa(a[u],[],k,0===u?d:x,e);(f=l.length?y(l,a[u],k,b,c,null,[],[],f):null)&&f.scope&&Y.$$addScopeClass(k.$$element);k=f&&f.terminal||!(r=a[u].childNodes)||!r.length?null:R(r,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)g.push(u,f,k),n=!0,q=q||f;f=null}return n?h:null}function P(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,
	    futureParentElement:g})}}function aa(a,b,c,d,e){var h=c.$attr,k;switch(a.nodeType){case na:z(b,za(va(a)),"E",d,e);for(var l,r,n,q=a.attributes,u=0,O=q&&q.length;u<O;u++){var M=!1,H=!1;l=q[u];k=l.name;r=T(l.value);l=za(k);if(n=ka.test(l))k=k.replace(Wc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var R=l.replace(/(Start|End)$/,"");qa(R)&&l===R+"Start"&&(M=k,H=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6));l=za(k.toLowerCase());h[l]=k;if(n||!c.hasOwnProperty(l))c[l]=
	      r,Rc(a,l)&&(c[l]=!0);X(a,b,r,l,n);z(b,l,"A",d,e,M,H)}a=a.className;C(a)&&(a=a.animVal);if(J(a)&&""!==a)for(;k=g.exec(a);)l=za(k[2]),z(b,l,"C",d,e)&&(c[l]=T(k[3])),a=a.substr(k.index+k[0].length);break;case Oa:if(11===Va)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Oa;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);Q(b,a.nodeValue);break;case 8:try{if(k=f.exec(a.nodeValue))l=za(k[1]),z(b,l,"M",d,e)&&(c[l]=T(k[2]))}catch(D){}}b.sort(K);return b}function xa(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ha("uterdir",b,c);a.nodeType==na&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return F(d)}function t(a,b,c){return function(d,e,f,g,h){e=xa(e[0],b,c);return a(d,e,f,g,h)}}function Vc(a,b,c,d,e,f){if(a)return Y(b,c,d,e,f);var g;return function(){g||(g=Y(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function y(a,b,d,e,f,g,h,k,r){function n(a,b,c,d){if(a){c&&(a=t(a,
	      c,d));a.require=s.require;a.directiveName=ya;if(P===s||s.$$isolateScope)a=Z(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=t(b,c,d));b.require=s.require;b.directiveName=ya;if(P===s||s.$$isolateScope)b=Z(b,{isolateScope:!0});k.push(b)}}function u(a,b,c,d){var e;if(J(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ha("ctreq",b,a);}else if(G(b))for(e=[],
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           g=0,f=b.length;g<f;g++)e[g]=u(a,b[g],c,d);return e||null}function O(a,b,c,d,e,f){var g=ga(),h;for(h in d){var k=d[h],l={$scope:k===P||k.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},r=k.controller;"@"==r&&(r=b[k.name]);l=q(r,l,!0,k.controllerAs);g[k.name]=l;fa||a.data("$"+k.name+"Controller",l.instance)}return g}function M(a,c,e,f,g,l){function r(a,b,c){var d;ab(a)||(c=b,b=a,a=x);fa&&(d=aa);c||(c=fa?ba.parent():ba);return g(a,b,d,c,s)}var n,q,H,D,aa,B,ba;b===e?(f=d,ba=d.$$element):(ba=F(e),
	      f=new da(ba,d));P&&(D=c.$new(!0));g&&(B=r,B.$$boundTransclude=g);w&&(aa=O(ba,f,B,w,D,c));P&&(Y.$$addScopeInfo(ba,D,!0,!(E&&(E===P||E===P.$$originalDirective))),Y.$$addScopeClass(ba,!0),D.$$isolateBindings=P.$$isolateBindings,$(c,f,D,D.$$isolateBindings,P,D));if(aa){var N=P||R,m;N&&aa[N.name]&&(q=N.$$bindings.bindToController,(H=aa[N.name])&&H.identifier&&q&&(m=H,l.$$destroyBindings=$(c,f,H.instance,q,N)));for(n in aa){H=aa[n];var xa=H();xa!==H.instance&&(H.instance=xa,ba.data("$"+n+"Controller",xa),
	  H===m&&(l.$$destroyBindings(),l.$$destroyBindings=$(c,f,xa,q,N)))}}n=0;for(l=h.length;n<l;n++)q=h[n],ca(q,q.isolateScope?D:c,ba,f,q.require&&u(q.directiveName,q.require,ba,aa),B);var s=c;P&&(P.template||null===P.templateUrl)&&(s=D);a&&a(s,e.childNodes,x,g);for(n=k.length-1;0<=n;n--)q=k[n],ca(q,q.isolateScope?D:c,ba,f,q.require&&u(q.directiveName,q.require,ba,aa),B)}r=r||{};for(var H=-Number.MAX_VALUE,R=r.newScopeDirective,w=r.controllerDirectives,P=r.newIsolateScopeDirective,E=r.templateDirective,
	                                                                                                                                                                                                                                                                                                                                                                                                  B=r.nonTlbTranscludeDirective,N=!1,m=!1,fa=r.hasElementTranscludeDirective,v=d.$$element=F(b),s,ya,z,I=e,L,K=!1,Q=!1,qa=0,Ua=a.length;qa<Ua;qa++){s=a[qa];var S=s.$$start,Xb=s.$$end;S&&(v=xa(b,S,Xb));z=x;if(H>s.priority)break;if(z=s.scope)s.templateUrl||(C(z)?(Wa("new/isolated scope",P||R,s,v),P=s):Wa("new/isolated scope",P,s,v)),R=R||s;ya=s.name;if(!K&&(s.replace&&(s.templateUrl||s.template)||s.transclude&&!s.$$tlb)){for(z=qa+1;K=a[z++];)if(K.transclude&&!K.$$tlb||K.replace&&(K.templateUrl||K.template)){Q=
	      !0;break}K=!0}!s.templateUrl&&s.controller&&(z=s.controller,w=w||ga(),Wa("'"+ya+"' controller",w[ya],s,v),w[ya]=s);if(z=s.transclude)N=!0,s.$$tlb||(Wa("transclusion",B,s,v),B=s),"element"==z?(fa=!0,H=s.priority,z=v,v=d.$$element=F(V.createComment(" "+ya+": "+d[ya]+" ")),b=v[0],W(f,ta.call(z,0),b),I=Vc(Q,z,e,H,g&&g.name,{nonTlbTranscludeDirective:B})):(z=F(Ub(b)).contents(),v.empty(),I=Vc(Q,z,e));if(s.template)if(m=!0,Wa("template",E,s,v),E=s,z=A(s.template)?s.template(v,d):s.template,z=ja(z),s.replace){g=
	      s;z=Sb.test(z)?Xc(U(s.templateNamespace,T(z))):[];b=z[0];if(1!=z.length||b.nodeType!==na)throw ha("tplrt",ya,"");W(f,v,b);Ua={$attr:{}};z=aa(b,[],Ua);var X=a.splice(qa+1,a.length-(qa+1));P&&Yc(z);a=a.concat(z).concat(X);Zc(d,Ua);Ua=a.length}else v.html(z);if(s.templateUrl)m=!0,Wa("template",E,s,v),E=s,s.replace&&(g=s),M=Pf(a.splice(qa,a.length-qa),v,d,f,N&&I,h,k,{controllerDirectives:w,newScopeDirective:R!==s&&R,newIsolateScopeDirective:P,templateDirective:E,nonTlbTranscludeDirective:B}),Ua=a.length;
	  else if(s.compile)try{L=s.compile(v,d,I),A(L)?n(null,L,S,Xb):L&&n(L.pre,L.post,S,Xb)}catch(ea){c(ea,wa(v))}s.terminal&&(M.terminal=!0,H=Math.max(H,s.priority))}M.scope=R&&!0===R.scope;M.transcludeOnThisElement=N;M.templateOnThisElement=m;M.transclude=I;r.hasElementTranscludeDirective=fa;return M}function Yc(a){for(var b=0,c=a.length;b<c;b++)a[b]=Nb(a[b],{$$isolateScope:!0})}function z(b,d,f,g,h,k,l){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var n;d=a.get(d+"Directive");for(var q=0,u=d.length;q<
	  u;q++)try{n=d[q],(v(g)||g>n.priority)&&-1!=n.restrict.indexOf(f)&&(k&&(n=Nb(n,{$$start:k,$$end:l})),b.push(n),h=n)}catch(H){c(H)}}return h}function qa(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function Zc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;m(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});m(b,function(b,f){"class"==f?(E(e,b),a["class"]=(a["class"]?a["class"]+
	      " ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Pf(a,b,c,e,f,g,h,k){var l=[],r,n,q=b[0],u=a.shift(),M=Nb(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),O=A(u.templateUrl)?u.templateUrl(b,c):u.templateUrl,D=u.templateNamespace;b.empty();d(O).then(function(d){var H,w;d=ja(d);if(u.replace){d=Sb.test(d)?Xc(U(D,T(d))):[];H=d[0];if(1!=d.length||H.nodeType!==na)throw ha("tplrt",
	      u.name,O);d={$attr:{}};W(e,b,H);var B=aa(H,[],d);C(u.scope)&&Yc(B);a=B.concat(a);Zc(c,d)}else H=q,b.html(d);a.unshift(M);r=y(a,H,c,f,b,u,g,h,k);m(e,function(a,c){a==H&&(e[c]=b[0])});for(n=R(b[0].childNodes,f);l.length;){d=l.shift();w=l.shift();var N=l.shift(),Y=l.shift(),B=b[0];if(!d.$$destroyed){if(w!==q){var xa=w.className;k.hasElementTranscludeDirective&&u.replace||(B=Ub(H));W(N,F(w),B);E(F(B),xa)}w=r.transcludeOnThisElement?P(d,r.transclude,Y):Y;r(n,d,B,e,w,r)}}l=null});return function(a,b,c,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(r.transcludeOnThisElement&&(a=P(b,r.transclude,e)),r(n,b,c,d,a,r)))}}function K(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Wa(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ha("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,wa(d));}function Q(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&Y.$$addBindingClass(a);
	    return function(a,c){var e=c.parent();b||Y.$$addBindingClass(e);Y.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function U(a,b){a=I(a||"html");switch(a){case "svg":case "math":var c=V.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function S(a,b){if("srcdoc"==b)return fa.HTML;var c=va(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return fa.RESOURCE_URL}function X(a,c,d,e,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  f){var g=S(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===va(a))throw ha("selmulti",wa(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers=ga());if(k.test(e))throw ha("nodomevents");var r=h[e];r!==d&&(l=r&&b(r,!0,g,f),d=r);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,a)}))}}}})}}function W(a,b,c){var d=b[0],e=b.length,
	      f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=V.createDocumentFragment();a.appendChild(d);F.hasData(d)&&(F(c).data(F(d).data()),pa?(Qb=!0,pa.cleanData([d])):delete F.cache[d[F.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],F(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Z(a,b){return L(function(){return a.apply(null,
	      arguments)},a,b)}function ca(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,wa(d))}}function $(a,c,d,e,f,g){var h;m(e,function(e,g){var k=e.attrName,l=e.optional,r,n,q,H;switch(e.mode){case "@":l||sa.call(c,k)||(d[g]=c[k]=void 0);c.$observe(k,function(a){J(a)&&(d[g]=a)});c.$$observers[k].$$scope=a;J(c[k])&&(d[g]=b(c[k])(a));break;case "=":if(!sa.call(c,k)){if(l)break;c[k]=void 0}if(l&&!c[k])break;n=w(c[k]);H=n.literal?la:function(a,b){return a===b||a!==a&&b!==b};q=n.assign||function(){r=d[g]=n(a);throw ha("nonassign",
	          c[k],f.name);};r=d[g]=n(a);l=function(b){H(b,d[g])||(H(b,r)?q(a,b=d[g]):d[g]=b);return r=b};l.$stateful=!0;l=e.collection?a.$watchCollection(c[k],l):a.$watch(w(c[k],l),null,n.literal);h=h||[];h.push(l);break;case "&":n=c.hasOwnProperty(k)?w(c[k]):s;if(n===s&&l)break;d[g]=function(b){return n(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:s;return g&&e!==s?(g.$on("$destroy",e),s):e}var da=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr=
	  {};this.$$element=a};da.prototype={$normalize:za,$addClass:function(a){a&&0<a.length&&O.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&O.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=$c(a,b);c&&c.length&&O.addClass(this.$$element,c);(c=$c(b,a))&&c.length&&O.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Rc(this.$$element[0],a),g=ad[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=
	      e=Ac(a,"-"));f=va(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=M(b,"src"===a);else if("img"===f&&"srcset"===a){for(var f="",g=T(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var r=2*l,f=f+M(T(g[r]),!0),f=f+(" "+T(g[r+1]));g=T(g[2*l]).split(/\s/);f+=M(T(g[0]),!0);2===g.length&&(f+=" "+T(g[1]));this[a]=b=f}!1!==d&&(null===b||v(b)?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=
	      this.$$observers)&&m(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);B.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||v(c[a])||b(c[a])});return function(){cb(e,b)}}};var ea=b.startSymbol(),ia=b.endSymbol(),ja="{{"==ea||"}}"==ia?$a:function(a){return a.replace(/\{\{/g,ea).replace(/}}/g,ia)},ka=/^ngAttr[A-Z]/;Y.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];G(b)?c=c.concat(b):c.push(b);
	    a.data("$binding",c)}:s;Y.$$addBindingClass=n?function(a){E(a,"ng-binding")}:s;Y.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:s;Y.$$addScopeClass=n?function(a,b){E(a,b?"ng-isolate-scope":"ng-scope")}:s;return Y}]}function za(b){return gb(b.replace(Wc,""))}function $c(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Xc(b){b=
	      F(b);var a=b.length;if(1>=a)return b;for(;a--;)8===b[a].nodeType&&Qf.call(b,a,1);return b}function Ye(){var b={},a=!1;this.register=function(a,d){Sa(a,"controller");C(a)?L(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!C(a.$scope))throw z("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,l){var k,n,p;h=!0===h;l&&J(l)&&(p=l);if(J(f)){l=f.match(Uc);if(!l)throw Rf("ctrlfmt",f);n=l[1];p=p||l[3];f=b.hasOwnProperty(n)?
	      b[n]:Cc(g.$scope,n,!0)||(a?Cc(d,n,!0):x);Ra(f,n,!0)}if(h)return h=(G(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),p&&e(g,p,k,n||f.name),L(function(){var a=c.invoke(f,k,g,n);a!==k&&(C(a)||A(a))&&(k=a,p&&e(g,p,k,n||f.name));return k},{instance:k,identifier:p});k=c.instantiate(f,g,n);p&&e(g,p,k,n||f.name);return k}}]}function Ze(){this.$get=["$window",function(b){return F(b.document)}]}function $e(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Yb(b){return C(b)?
	      da(b)?b.toISOString():eb(b):b}function ef(){this.$get=function(){return function(b){if(!b)return"";var a=[];nc(b,function(b,d){null===b||v(b)||(G(b)?m(b,function(b,c){a.push(ja(d)+"="+ja(Yb(b)))}):a.push(ja(d)+"="+ja(Yb(b))))});return a.join("&")}}}function ff(){this.$get=function(){return function(b){function a(b,e,f){null===b||v(b)||(G(b)?m(b,function(b,c){a(b,e+"["+(C(b)?c:"")+"]")}):C(b)&&!da(b)?nc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(ja(e)+"="+ja(Yb(b))))}if(!b)return"";var c=
	      [];a(b,"",!0);return c.join("&")}}}function Zb(b,a){if(J(b)){var c=b.replace(Sf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(bd))||(d=(d=c.match(Tf))&&Uf[d[0]].test(c));d&&(b=vc(c))}}return b}function cd(b){var a=ga(),c;J(b)?m(b.split("\n"),function(b){c=b.indexOf(":");var e=I(T(b.substr(0,c)));b=T(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):C(b)&&m(b,function(b,c){var f=I(c),g=T(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function dd(b){var a;return function(c){a||(a=cd(b));return c?
	      (c=a[I(c)],void 0===c&&(c=null),c):a}}function ed(b,a,c,d){if(A(d))return d(b,a,c);m(d,function(d){b=d(b,a,c)});return b}function df(){var b=this.defaults={transformResponse:[Zb],transformRequest:[function(a){return C(a)&&"[object File]"!==ua.call(a)&&"[object Blob]"!==ua.call(a)&&"[object FormData]"!==ua.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia($b),put:ia($b),patch:ia($b)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},
	      a=!1;this.useApplyAsync=function(b){return y(b)?(a=!!b,this):a};var c=!0;this.useLegacyPromiseExtensions=function(a){return y(a)?(c=!!a,this):c};var d=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(e,f,g,h,l,k){function n(a){function d(a){var b=L({},a);b.data=a.data?ed(a.data,a.headers,a.status,f.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:l.reject(b)}function e(a,b){var c,d={};m(a,function(a,e){A(a)?(c=a(b),null!=
	  c&&(d[e]=c)):d[e]=a});return d}if(!$.isObject(a))throw z("$http")("badreq",a);var f=L({method:"get",transformRequest:b.transformRequest,transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);f.headers=function(a){var c=b.headers,d=L({},a.headers),f,g,h,c=L({},c.common,c[I(a.method)]);a:for(f in c){g=I(f);for(h in d)if(I(h)===g)continue a;d[f]=c[f]}return e(d,ia(a))}(a);f.method=sb(f.method);f.paramSerializer=J(f.paramSerializer)?k.get(f.paramSerializer):f.paramSerializer;var g=
	      [function(a){var c=a.headers,e=ed(a.data,dd(c),x,a.transformRequest);v(e)&&m(c,function(a,b){"content-type"===I(b)&&delete c[b]});v(a.withCredentials)&&!v(b.withCredentials)&&(a.withCredentials=b.withCredentials);return p(a,e).then(d,d)},x],h=l.when(f);for(m(D,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();var r=g.shift(),h=h.then(a,r)}c?(h.success=function(a){Ra(a,"fn");h.then(function(b){a(b.data,
	      b.status,b.headers,f)});return h},h.error=function(a){Ra(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=fd("success"),h.error=fd("error"));return h}function p(c,d){function g(b,c,d,e){function f(){k(c,b,d,e)}E&&(200<=b&&300>b?E.put(P,[b,c,cd(d),e]):E.remove(P));a?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function k(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?O.resolve:O.reject)({data:a,status:b,headers:dd(d),config:c,statusText:e})}function p(a){k(a.data,a.status,
	      ia(a.headers()),a.statusText)}function D(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var O=l.defer(),M=O.promise,E,m,R=c.headers,P=r(c.url,c.paramSerializer(c.params));n.pendingRequests.push(c);M.then(D,D);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(E=C(c.cache)?c.cache:C(b.cache)?b.cache:u);E&&(m=E.get(P),y(m)?m&&A(m.then)?m.then(p,p):G(m)?k(m[1],m[0],ia(m[2]),m[3]):k(m,200,{},"OK"):E.put(P,M));v(m)&&((m=gd(c.url)?f()[c.xsrfCookieName||
	  b.xsrfCookieName]:x)&&(R[c.xsrfHeaderName||b.xsrfHeaderName]=m),e(c.method,P,d,g,R,c.timeout,c.withCredentials,c.responseType));return M}function r(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var u=g("$http");b.paramSerializer=J(b.paramSerializer)?k.get(b.paramSerializer):b.paramSerializer;var D=[];m(d,function(a){D.unshift(J(a)?k.get(a):k.invoke(a))});n.pendingRequests=[];(function(a){m(arguments,function(a){n[a]=function(b,c){return n(L({},c||{},{method:a,url:b}))}})})("get","delete",
	      "head","jsonp");(function(a){m(arguments,function(a){n[a]=function(b,c,d){return n(L({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=b;return n}]}function hf(){this.$get=function(){return function(){return new K.XMLHttpRequest}}}function gf(){this.$get=["$browser","$window","$document","$xhrFactory",function(b,a,c,d){return Vf(b,d,b.defer,a.angular.callbacks,c[0])}]}function Vf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),n=null;f.type="text/javascript";f.src=
	      a;f.async=!0;n=function(a){f.removeEventListener("load",n,!1);f.removeEventListener("error",n,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);c&&c(g,u)};f.addEventListener("load",n,!1);f.addEventListener("error",n,!1);e.body.appendChild(f);return n}return function(e,h,l,k,n,p,r,u){function D(){q&&q();B&&B.abort()}function H(a,d,e,f,g){y(t)&&c.cancel(t);q=B=null;a(d,e,f,g);b.$$completeOutstandingRequest(s)}
	    b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==I(e)){var w="_"+(d.counter++).toString(36);d[w]=function(a){d[w].data=a;d[w].called=!0};var q=f(h.replace("JSON_CALLBACK","angular.callbacks."+w),w,function(a,b){H(k,a,d[w].data,"",b);d[w]=s})}else{var B=a(e,h);B.open(e,h,!0);m(n,function(a,b){y(a)&&B.setRequestHeader(b,a)});B.onload=function(){var a=B.statusText||"",b="response"in B?B.response:B.responseText,c=1223===B.status?204:B.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);H(k,
	        c,b,B.getAllResponseHeaders(),a)};e=function(){H(k,-1,null,null,"")};B.onerror=e;B.onabort=e;r&&(B.withCredentials=!0);if(u)try{B.responseType=u}catch(N){if("json"!==u)throw N;}B.send(v(l)?null:l)}if(0<p)var t=c(D,p);else p&&A(p.then)&&p.then(D)}}function bf(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,
	      b).replace(p,a)}function h(f,h,n,p){function w(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var c;if(p&&!y(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=eb(a)}c=a}return c}catch(g){d(Ka.interr(f,g))}}p=!!p;for(var q,m,N=0,s=[],O=[],M=f.length,E=[],t=[];N<M;)if(-1!=(q=f.indexOf(b,N))&&-1!=(m=f.indexOf(a,q+l)))N!==q&&E.push(g(f.substring(N,q))),N=f.substring(q+l,m),s.push(N),O.push(c(N,w)),N=m+k,t.push(E.length),E.push("");else{N!==M&&
	  E.push(g(f.substring(N)));break}n&&1<E.length&&Ka.throwNoconcat(f);if(!h||s.length){var R=function(a){for(var b=0,c=s.length;b<c;b++){if(p&&v(a[b]))return;E[t[b]]=a[b]}return E.join("")};return L(function(a){var b=0,c=s.length,e=Array(c);try{for(;b<c;b++)e[b]=O[b](a);return R(e)}catch(g){d(Ka.interr(f,g))}},{exp:f,expressions:s,$$watchDelegate:function(a,b){var c;return a.$watchGroup(O,function(d,e){var f=R(d);A(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,n=new RegExp(b.replace(/./g,
	      f),"g"),p=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=function(){return a};return h}]}function cf(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var n=4<arguments.length,p=n?ta.call(arguments,4):[],r=a.setInterval,u=a.clearInterval,D=0,H=y(k)&&!k,w=(H?d:c).defer(),q=w.promise;l=y(l)?l:0;q.then(null,null,n?function(){e.apply(null,p)}:e);q.$$intervalId=r(function(){w.notify(D++);0<l&&D>=l&&(w.resolve(D),u(q.$$intervalId),delete f[q.$$intervalId]);
	    H||b.$apply()},h);f[q.$$intervalId]=w;return q}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function ac(b){b=b.split("/");for(var a=b.length;a--;)b[a]=ob(b[a]);return b.join("/")}function hd(b,a){var c=Aa(b);a.$$protocol=c.protocol;a.$$host=c.hostname;a.$$port=Z(c.port)||Wf[c.protocol]||null}function id(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&
	  "/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=yc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ra(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ja(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Cb(b){return b.replace(/(#.+)|#$/,"$1")}function bc(b,a,c){this.$$html5=!0;c=c||"";hd(b,this);this.$$parse=function(b){var c=ra(a,b);if(!J(c))throw Db("ipthprfx",b,a);id(c,this);this.$$path||
	  (this.$$path="/");this.$$compose()};this.$$compose=function(){var b=Pb(this.$$search),c=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=ac(this.$$path)+(b?"?"+b:"")+c;this.$$absUrl=a+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;y(f=ra(b,d))?(g=f,g=y(f=ra(c,f))?a+(ra("/",f)||f):b+g):y(f=ra(a,d))?g=a+f:a==d+"/"&&(g=a);g&&this.$$parse(g);return!!g}}function cc(b,a,c){hd(b,this);this.$$parse=function(d){var e=ra(b,d)||ra(a,d),f;v(e)||"#"!==
	  e.charAt(0)?this.$$html5?f=e:(f="",v(e)&&(b=d,this.replace())):(f=ra(c,e),v(f)&&(f=e));id(f,this);d=this.$$path;var e=b,g=/^\/[A-Z]:(\/.*)/;0===f.indexOf(e)&&(f=f.replace(e,""));g.exec(f)||(d=(f=g.exec(d))?f[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+(this.$$url?c+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ja(b)==Ja(a)?(this.$$parse(a),!0):!1}}function jd(b,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  a,c){this.$$html5=!0;cc.apply(this,arguments);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ja(d)?f=d:(g=ra(a,d))?f=b+c+g:a===d+"/"&&(f=a);f&&this.$$parse(f);return!!f};this.$$compose=function(){var a=Pb(this.$$search),e=this.$$hash?"#"+ob(this.$$hash):"";this.$$url=ac(this.$$path)+(a?"?"+a:"")+e;this.$$absUrl=b+c+this.$$url}}function Eb(b){return function(){return this[b]}}function kd(b,a){return function(c){if(v(c))return this[b];this[b]=a(c);this.$$compose();
	    return this}}function jf(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return y(a)?(b=a,this):b};this.html5Mode=function(b){return bb(b)?(a.enabled=b,this):C(b)?(bb(b.enabled)&&(a.enabled=b.enabled),bb(b.requireBase)&&(a.requireBase=b.requireBase),bb(b.rewriteLinks)&&(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=
	      d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,n;n=d.baseHref();var p=d.url(),r;if(a.enabled){if(!n&&a.requireBase)throw Db("nobase");r=p.substring(0,p.indexOf("/",p.indexOf("//")+2))+(n||"/");n=e.history?bc:jd}else r=Ja(p),n=cc;var u=r.substr(0,Ja(r).lastIndexOf("/")+1);k=new n(r,u,"#"+b);k.$$parseLinkUrl(p,p);k.$$state=d.state();var D=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&
	      !b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=F(b.target);"a"!==va(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");C(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Aa(h.animVal).href);D.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Cb(k.absUrl())!=Cb(p)&&d.url(k.absUrl(),!0);var H=!0;d.onUrlChange(function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              b){v(ra(u,a))?g.location.href=a:(c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(H=!1,l(d,e)))}),c.$$phase||c.$digest())});c.$watch(function(){var a=Cb(d.url()),b=Cb(k.absUrl()),f=d.state(),g=k.$$replace,r=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(H||r)H=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,
	      f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(r&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function kf(){var b=!0,a=this;this.debugEnabled=function(a){return y(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||
	      s;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];m(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Xa(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ca("isecfld",a);return b}function ld(b,a){b+="";if(!J(b))throw ca("iseccst",
	      a);return b}function Ba(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b.window===b)throw ca("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ca("isecdom",a);if(b===Object)throw ca("isecobj",a);}return b}function md(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b===Xf||b===Yf||b===Zf)throw ca("isecff",a);}}function nd(b,a){if(b&&(b===(0).constructor||b===(!1).constructor||b==="".constructor||b==={}.constructor||b===[].constructor||b===Function.constructor))throw ca("isecaf",
	      a);}function $f(b,a){return"undefined"!==typeof b?b:a}function od(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function S(b,a){var c,d;switch(b.type){case t.Program:c=!0;m(b.body,function(b){S(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case t.Literal:b.constant=!0;b.toWatch=[];break;case t.UnaryExpression:S(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case t.BinaryExpression:S(b.left,a);S(b.right,a);b.constant=b.left.constant&&
	      b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);break;case t.LogicalExpression:S(b.left,a);S(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case t.ConditionalExpression:S(b.test,a);S(b.alternate,a);S(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case t.Identifier:b.constant=!1;b.toWatch=[b];break;case t.MemberExpression:S(b.object,a);b.computed&&S(b.property,a);
	    b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=[b];break;case t.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];m(b.arguments,function(b){S(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case t.AssignmentExpression:S(b.left,a);S(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case t.ArrayExpression:c=!0;d=[];m(b.elements,function(b){S(b,a);c=
	      c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=d;break;case t.ObjectExpression:c=!0;d=[];m(b.properties,function(b){S(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case t.ThisExpression:b.constant=!1,b.toWatch=[]}}function pd(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:x}}function qd(b){return b.type===t.Identifier||b.type===t.MemberExpression}function rd(b){if(1===
	      b.body.length&&qd(b.body[0].expression))return{type:t.AssignmentExpression,left:b.body[0].expression,right:{type:t.NGValueParameter},operator:"="}}function sd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===t.Literal||b.body[0].expression.type===t.ArrayExpression||b.body[0].expression.type===t.ObjectExpression)}function td(b,a){this.astBuilder=b;this.$filter=a}function ud(b,a){this.astBuilder=b;this.$filter=a}function Fb(b){return"constructor"==b}function dc(b){return A(b.valueOf)?
	      b.valueOf():ag.call(b)}function lf(){var b=ga(),a=ga();this.$get=["$filter",function(c){function d(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=dc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function e(a,b,c,e,f){var g=e.inputs,h;if(1===g.length){var k=d,g=g[0];return a.$watch(function(a){var b=g(a);d(b,k)||(h=e(a,x,x,[b]),k=b&&dc(b));return h},b,c,f)}for(var l=[],n=[],p=0,m=g.length;p<m;p++)l[p]=d,n[p]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var k=g[c](a);
	    if(b||(b=!d(k,l[c])))n[c]=k,l[c]=k&&dc(k)}b&&(h=e(a,x,x,n));return h},b,c,f)}function f(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;A(b)&&b.apply(this,arguments);y(a)&&d.$$postDigest(function(){y(f)&&e()})},c)}function g(a,b,c,d){function e(a){var b=!0;m(a,function(a){y(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;A(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function h(a,b,c,d){var e;return e=
	      a.$watch(function(a){return d(a)},function(a,c,d){A(b)&&b.apply(this,arguments);e()},c)}function l(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==g&&c!==f?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return y(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==e?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=e,c.inputs=a.inputs?a.inputs:[a]);return c}var k=Fa().noUnsafeEval,n={csp:k,expensiveChecks:!1},p={csp:k,expensiveChecks:!0};return function(d,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         k,D){var m,w,q;switch(typeof d){case "string":q=d=d.trim();var t=D?a:b;m=t[q];m||(":"===d.charAt(0)&&":"===d.charAt(1)&&(w=!0,d=d.substring(2)),D=D?p:n,m=new ec(D),m=(new fc(m,c,D)).parse(d),m.constant?m.$$watchDelegate=h:w?m.$$watchDelegate=m.literal?g:f:m.inputs&&(m.$$watchDelegate=e),t[q]=m);return l(m,k);case "function":return l(d,k);default:return s}}}]}function nf(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return vd(function(a){b.$evalAsync(a)},a)}]}function of(){this.$get=
	      ["$browser","$exceptionHandler",function(b,a){return vd(function(a){b.defer(a)},a)}]}function vd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;c.processScheduled=!1;c.pending=x;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{A(b)?d.resolve(b(c.value)):
	      1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=z("$q",TypeError);L(d.prototype,{then:function(a,b,c){if(v(a)&&v(b)&&v(c))return this;var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},
	    "finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});L(g.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(C(b)||A(b))d=b&&b.then;A(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),
	      a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(A(b)?b(c):c)}catch(h){a(h)}}})}});var l=function(a,b){var c=new g;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{A(c)&&
	  (d=c())}catch(e){return l(e,!1)}return d&&A(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},n=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},p=function u(a){if(!A(a))throw h("norslvr",a);if(!(this instanceof u))return new u(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};p.defer=function(){return new g};p.reject=function(a){var b=new g;b.reject(a);return b.promise};p.when=n;p.resolve=n;p.all=function(a){var b=
	      new g,c=0,d=G(a)?[]:{};m(a,function(a,e){c++;n(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return p}function xf(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=
	      a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=e;return f}]}function mf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++nb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=z("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=
	      !0}function n(){this.$id=++nb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(q.$$phase)throw c("inprog",q.$$phase);q.$$phase=a}function r(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function u(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];
	  while(a=a.$parent)}function D(){}function t(){for(;x.length;)try{x.shift()()}catch(a){g(a)}e=null}function w(){null===e&&(e=l.defer(function(){q.$apply(t)}))}n.prototype={constructor:n,$new:function(a,c){var d;c=c||this;a?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},
	    $watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var g=this,k=g.$$watchers,l={fn:b,last:D,get:f,exp:e||a,eq:!!c};d=null;A(b)||(l.fn=s);k||(k=g.$$watchers=[]);k.unshift(l);r(this,1);return function(){0<=cb(k,l)&&r(g,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],
	        function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});m(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!v(e)){if(C(e))if(Da(e))for(f!==p&&(f=p,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==r&&(f=r={},u=0,l++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in
	    f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)sa.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,g,k=1<b.length,l=0,n=h(a,c),p=[],r={},q=!0,u=0;return this.$watch(n,function(){q?(q=!1,b(e,e,d)):b(e,g,d);if(k)if(C(e))if(Da(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)sa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,n,r,u=a,m,s=[],w,v;p("$digest");l.$$checkUrlChange();
	      this===q&&null!==e&&(l.defer.cancel(e),t());d=null;do{r=!1;for(m=this;B.length;){try{v=B.shift(),v.scope.$eval(v.expression,v.locals)}catch(x){g(x)}d=null}a:do{if(k=m.$$watchers)for(n=k.length;n--;)try{if(b=k[n])if((f=b.get(m))!==(h=b.last)&&!(b.eq?la(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))r=!0,d=b,b.last=b.eq?ea(f,null):f,b.fn(f,h===D?f:h,m),5>u&&(w=4-u,s[w]||(s[w]=[]),s[w].push({msg:A(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===
	          d){r=!1;break a}}catch(y){g(y)}if(!(k=m.$$watchersCount&&m.$$childHead||m!==this&&m.$$nextSibling))for(;m!==this&&!(k=m.$$nextSibling);)m=m.$parent}while(m=k);if((r||B.length)&&!u--)throw q.$$phase=null,c("infdig",a,s);}while(r||B.length);for(q.$$phase=null;N.length;)try{N.shift()()}catch(fa){g(fa)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===q&&l.$$applicationDestroyed();r(this,-this.$$watchersCount);for(var b in this.$$listenerCount)u(this,
	        this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=s;this.$on=this.$watch=this.$watchGroup=function(){return s};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=
	        this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){q.$$phase||B.length||l.defer(function(){B.length&&q.$digest()});B.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){N.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{q.$$phase=null}}catch(b){g(b)}finally{try{q.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&x.push(b);w()},$on:function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,u(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,n;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(n=d.length;l<
	    n;l++)if(d[l])try{d[l].apply(null,k)}catch(p){g(p)}else d.splice(l,1),l--,n--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=db([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,f)}catch(l){g(l)}else d.splice(h,
	        1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var q=new n,B=q.$$asyncQueue=[],N=q.$$postDigestQueue=[],x=q.$$applyAsyncQueue=[];return q}]}function he(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return y(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return y(b)?(a=b,this):a};this.$get=
	      function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function bg(b){if("self"===b)return b;if(J(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=wd(b).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Na(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function xd(b){var a=[];y(b)&&m(b,function(b){a.push(bg(b))});return a}function qf(){this.SCE_CONTEXTS=ma;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&
	  (b=xd(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=xd(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?gd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&
	  (f=c.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",a,b);if(null===b||v(b)||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||v(e)||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===ma.RESOURCE_URL){var g=Aa(e.toString()),
	      p,r,u=!1;p=0;for(r=b.length;p<r;p++)if(d(b[p],g)){u=!0;break}if(u)for(p=0,r=a.length;p<r;p++)if(d(a[p],g)){u=!1;break}if(u)return e;throw Ca("insecurl",e.toString());}if(c===ma.HTML)return f(e);throw Ca("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function pf(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Va)throw Ca("iequirks");var d=ia(ma);d.isEnabled=function(){return b};d.trustAs=
	      c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=$a);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;m(ma,function(a,b){var c=I(b);d[gb("parse_as_"+c)]=function(b){return e(a,b)};d[gb("get_trusted_"+c)]=function(b){return f(a,b)};d[gb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function rf(){this.$get=["$window","$document",
	    function(b,a){var c={},d=Z((/android (\d+)/.exec(I((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,n=!1;if(l){for(var p in l)if(k=h.exec(p)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);n=!!("animation"in l||g+"Animation"in l);!d||k&&n||(k=J(l.webkitTransition),n=J(l.webkitAnimation))}return{history:!(!b.history||
	    !b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Va)return!1;if(v(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Fa(),vendorPrefix:g,transitions:k,animations:n,android:d}}]}function tf(){this.$get=["$templateCache","$http","$q","$sce",function(b,a,c,d){function e(f,g){e.totalPendingRequests++;J(f)&&b.get(f)||(f=d.getTrustedResourceUrl(f));var h=a.defaults&&a.defaults.transformResponse;G(h)?h=h.filter(function(a){return a!==Zb}):h===Zb&&(h=null);return a.get(f,
	      {cache:b,transformResponse:h})["finally"](function(){e.totalPendingRequests--}).then(function(a){b.put(f,a.data);return a.data},function(a){if(!g)throw ha("tpload",f,a.status,a.statusText);return c.reject(a)})}e.totalPendingRequests=0;return e}]}function uf(){this.$get=["$rootScope","$browser","$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];m(a,function(a){var d=$.element(a).data("$binding");d&&m(d,function(d){c?(new RegExp("(^|\\s)"+
	      wd(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function vf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",
	    function(b,a,c,d,e){function f(f,l,k){A(f)||(k=l,l=f,f=s);var n=ta.call(arguments,3),p=y(k)&&!k,r=(p?d:c).defer(),u=r.promise,m;m=a.defer(function(){try{r.resolve(f.apply(null,n))}catch(a){r.reject(a),e(a)}finally{delete g[u.$$timeoutId]}p||b.$apply()},l);u.$$timeoutId=m;g[m]=r;return u}var g={};f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Va&&(X.setAttribute("href",b),b=
	      X.href);X.setAttribute("href",b);return{href:X.href,protocol:X.protocol?X.protocol.replace(/:$/,""):"",host:X.host,search:X.search?X.search.replace(/^\?/,""):"",hash:X.hash?X.hash.replace(/^#/,""):"",hostname:X.hostname,port:X.port,pathname:"/"===X.pathname.charAt(0)?X.pathname:"/"+X.pathname}}function gd(b){b=J(b)?Aa(b):b;return b.protocol===yd.protocol&&b.host===yd.host}function wf(){this.$get=oa(K)}function zd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=b[0]||{},
	      d={},e="";return function(){var b,g,h,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},h=0;h<b.length;h++)g=b[h],l=g.indexOf("="),0<l&&(k=a(g.substring(0,l)),v(d[k])&&(d[k]=a(g.substring(l+1))));return d}}function Af(){this.$get=zd}function Kc(b){function a(c,d){if(C(c)){var e={};m(c,function(b,c){e[c]=a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",Ad);a("date",Bd);a("filter",cg);
	    a("json",dg);a("limitTo",eg);a("lowercase",fg);a("number",Cd);a("orderBy",Dd);a("uppercase",gg)}function cg(){return function(b,a,c){if(!Da(b)){if(null==b)return b;throw z("filter")("notarray",b);}var d;switch(gc(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=hg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function hg(b,a,c){var d=C(b)&&"$"in b;!0===a?a=la:A(a)||(a=function(a,b){if(v(a))return!1;if(null===a||null===b)return a===
	      b;if(C(b)||C(a)&&!qc(a))return!1;a=I(""+a);b=I(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!C(e)?La(e,b.$,a,!1):La(e,b,a,c)}}function La(b,a,c,d,e){var f=gc(b),g=gc(a);if("string"===g&&"!"===a.charAt(0))return!La(b,a.substring(1),c,d);if(G(b))return b.some(function(b){return La(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&La(b[h],a,c,!0))return!0;return e?!1:La(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!A(e)&&!v(e)&&(f="$"===h,!La(f?b:b[h],
	          e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function gc(b){return null===b?"null":typeof b}function Ad(b){var a=b.NUMBER_FORMATS;return function(b,d,e){v(d)&&(d=a.CURRENCY_SYM);v(e)&&(e=a.PATTERNS[1].maxFrac);return null==b?b:Ed(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function Cd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Ed(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Ed(b,a,c,d,e){if(C(b))return"";
	    var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,n=[];g&&(l="\u221e");if(!g&&-1!==h.indexOf("e")){var p=h.match(/([\d\.]+)e(-?)(\d+)/);p&&"-"==p[2]&&p[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<e&&1>b&&(l=b.toFixed(e),b=parseFloat(l),l=l.replace(hc,d));else{g=(h.split(hc)[1]||"").length;v(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(hc),h=g[0],g=g[1]||"",p=0,r=a.lgSize,u=a.gSize;if(h.length>=
	        r+u)for(p=h.length-r,k=0;k<p;k++)0===(p-k)%u&&0!==k&&(l+=c),l+=h.charAt(k);for(k=p;k<h.length;k++)0===(h.length-k)%r&&0!==k&&(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);n.push(f?a.negPre:a.posPre,l,f?a.negSuf:a.posSuf);return n.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function W(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);
	    return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=sb(a?"SHORT"+b:b);return d[f][e]}}function Fd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Gd(b){return function(a){var c=Fd(a.getFullYear());a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function ic(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function Bd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=
	      0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;J(c)&&(c=ig.test(c)?Z(c):a(c));U(c)&&(c=
	      new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;for(;e;)(k=jg.exec(e))?(h=db(h,k,1),e=h.pop()):(h.push(e),e=null);var n=c.getTimezoneOffset();f&&(n=wc(f,c.getTimezoneOffset()),c=Ob(c,f,!0));m(h,function(a){l=kg[a];g+=l?l(c,b.DATETIME_FORMATS,n):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function dg(){return function(b,a){v(a)&&(a=2);return eb(b,a)}}function eg(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):Z(a);if(isNaN(a))return b;U(b)&&(b=b.toString());
	    if(!G(b)&&!J(b))return b;c=!c||isNaN(c)?0:Z(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,c+a),c)}}function Dd(b){function a(a,c){c=c?-1:1;return a.map(function(a){var d=1,h=$a;if(A(a))h=a;else if(J(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))d="-"==a.charAt(0)?-1:1,a=a.substring(1);if(""!==a&&(h=b(a),h.constant))var l=h(),h=function(a){return a[l]}}return{get:h,descending:d*c}})}function c(a){switch(typeof a){case "number":case "boolean":case "string":return!0;
	    default:return!1}}return function(b,e,f){if(!Da(b))return b;G(e)||(e=[e]);0===e.length&&(e=["+"]);var g=a(e,f);g.push({get:function(){return{}},descending:f?-1:1});b=Array.prototype.map.call(b,function(a,b){return{value:a,predicateValues:g.map(function(d){var e=d.get(a);d=typeof e;if(null===e)d="string",e="null";else if("string"===d)e=e.toLowerCase();else if("object"===d)a:{if("function"===typeof e.valueOf&&(e=e.valueOf(),c(e)))break a;if(qc(e)&&(e=e.toString(),c(e)))break a;e=b}return{value:e,type:d}})}});
	    b.sort(function(a,b){for(var c=0,d=0,e=g.length;d<e;++d){var c=a.predicateValues[d],f=b.predicateValues[d],u=0;c.type===f.type?c.value!==f.value&&(u=c.value<f.value?-1:1):u=c.type<f.type?-1:1;if(c=u*g[d].descending)break}return c});return b=b.map(function(a){return a.value})}}function Ma(b){A(b)&&(b={link:b});b.restrict=b.restrict||"AC";return oa(b)}function Hd(b,a,c,d,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=x;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=
	      !0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Ib;f.$rollbackViewValue=function(){m(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){m(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Sa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];m(f.$pending,function(b,c){f.$setValidity(c,null,a)});
	    m(f.$error,function(b,c){f.$setValidity(c,null,a)});m(f.$$success,function(b,c){f.$setValidity(c,null,a)});cb(g,a);a.$$parentForm=Ib};Id({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(cb(d,c),0===d.length&&delete a[b])},$animate:d});f.$setDirty=function(){d.removeClass(b,Ya);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){d.setClass(b,Ya,Jb+" ng-submitted");f.$dirty=
	      !1;f.$pristine=!0;f.$submitted=!1;m(g,function(a){a.$setPristine()})};f.$setUntouched=function(){m(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function jc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function jb(b,a,c,d,e,f){var g=I(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),
	      k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=T(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,n=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||n(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",n)}a.on("change",l);d.$render=function(){var b=d.$isEmpty(d.$viewValue)?
	      "":d.$viewValue;a.val()!==b&&a.val(b)}}function Kb(b,a){return function(c,d){var e,f;if(da(c))return c;if(J(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(lg.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},m(e,function(b,c){c<a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,
	      f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(b,a,c,d){return function(e,f,g,h,l,k,n){function p(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function r(a){return y(a)&&!da(a)?c(a)||x:a}Jd(e,f,g,h);jb(e,f,g,h,l,k);var u=h&&h.$options&&h.$options.timezone,m;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,m),u&&(b=Ob(b,u)),b):x});h.$formatters.push(function(a){if(a&&!da(a))throw lb("datefmt",a);if(p(a))return(m=a)&&u&&(m=Ob(m,u,!0)),
	      n("date")(a,d,u);m=null;return""});if(y(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!p(a)||v(s)||c(a)>=s};g.$observe("min",function(a){s=r(a);h.$validate()})}if(y(g.max)||g.ngMax){var t;h.$validators.max=function(a){return!p(a)||v(t)||c(a)<=t};g.$observe("max",function(a){t=r(a);h.$validate()})}}}function Jd(b,a,c,d){(d.$$hasNativeValidators=C(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput||c.typeMismatch?x:b})}function Kd(b,a,c,d,e){if(y(d)){b=
	      b(d);if(!b.constant)throw lb("constexpr",c,d);return b(a)}return e}function kc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],n=0;n<b.length;n++)if(e==b[n])continue a;c.push(e)}return c}function e(a){var b=[];return G(a)?(m(a,function(a){b=b.concat(e(a))}),b):J(a)?a.split(" "):C(a)?(m(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function l(a,b){var c=g.data("$classCounts")||ga(),
	      d=[];m(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!n){var m=l(k,1);h.$addClass(m)}else if(!la(b,n)){var s=e(n),m=d(k,s),k=d(s,k),m=l(m,1),k=l(k,-1);m&&m.length&&c.addClass(g,m);k&&k.length&&c.removeClass(g,k)}}n=ia(b)}var n;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var k=
	      e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Id(b){function a(a,b){b&&!f[a]?(l.addClass(e,a),f[a]=!0):!b&&f[a]&&(l.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Ac(b,"-"):"";a(mb+b,!0===c);a(Ld+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.$animate;f[Ld]=!(f[mb]=e.hasClass(mb));d.$setValidity=function(b,e,f){v(e)?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,b,f),Md(d.$pending)&&(d.$pending=x));bb(e)?
	      e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Nd,!0),d.$valid=d.$invalid=x,c("",null)):(a(Nd,!1),d.$valid=Md(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?x:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);d.$$parentForm.$setValidity(b,e,d)}}function Md(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var mg=/^\/(.+)\/([a-z]*)$/,I=function(b){return J(b)?b.toLowerCase():b},sa=Object.prototype.hasOwnProperty,
	      sb=function(b){return J(b)?b.toUpperCase():b},Va,F,pa,ta=[].slice,Qf=[].splice,ng=[].push,ua=Object.prototype.toString,rc=Object.getPrototypeOf,Ea=z("ng"),$=K.angular||(K.angular={}),Rb,nb=0;Va=V.documentMode;s.$inject=[];$a.$inject=[];var G=Array.isArray,tc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,T=function(b){return J(b)?b.trim():b},wd=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!y(Fa.rules)){var b=
	      V.querySelector("[ng-csp]")||V.querySelector("[data-ng-csp]");if(b){var a=b.getAttribute("ng-csp")||b.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!a||-1!==a.indexOf("no-unsafe-eval"),noInlineStyle:!a||-1!==a.indexOf("no-inline-style")}}else{b=Fa;try{new Function(""),a=!1}catch(c){a=!0}b.rules={noUnsafeEval:a,noInlineStyle:!1}}}return Fa.rules},pb=function(){if(y(pb.name_))return pb.name_;var b,a,c=Pa.length,d,e;for(a=0;a<c;++a)if(d=Pa[a],b=V.querySelector("["+d.replace(":","\\:")+"jq]")){e=
	      b.getAttribute(d+"jq");break}return pb.name_=e},Pa=["ng-","data-ng-","ng:","x-ng-"],ce=/[A-Z]/g,Bc=!1,Qb,na=1,Oa=3,ge={full:"1.5.0-beta.1",major:1,minor:5,dot:0,codeName:"dense-dispersion"};Q.expando="ng339";var hb=Q.cache={},Gf=1;Q._data=function(b){return this.cache[b[this.expando]]||{}};var Bf=/([\:\-\_]+(.))/g,Cf=/^moz([A-Z])/,og={mouseleave:"mouseout",mouseenter:"mouseover"},Tb=z("jqLite"),Ff=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Sb=/<|&#?\w+;/,Df=/<([\w:-]+)/,Ef=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	      ka={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ka.optgroup=ka.option;ka.tbody=ka.tfoot=ka.colgroup=ka.caption=ka.thead;ka.th=ka.td;var Qa=Q.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===V.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),Q(K).on("load",a))},
	    toString:function(){var b=[];m(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?F(this[b]):F(this[this.length+b])},length:0,push:ng,sort:[].sort,splice:[].splice},Bb={};m("multiple selected checked disabled readOnly required open".split(" "),function(b){Bb[I(b)]=b});var Sc={};m("input select option textarea button form details".split(" "),function(b){Sc[b]=!0});var ad={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};
	  m({data:Vb,removeData:vb,hasData:function(b){for(var a in hb[b.ng339])return!0;return!1}},function(b,a){Q[a]=b});m({data:Vb,inheritedData:Ab,scope:function(b){return F.data(b,"$scope")||Ab(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return F.data(b,"$isolateScope")||F.data(b,"$isolateScopeNoTemplate")},controller:Pc,injector:function(b){return Ab(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:xb,css:function(b,a,c){a=gb(a);if(y(c))b.style[a]=c;else return b.style[a]},
	    attr:function(b,a,c){var d=b.nodeType;if(d!==Oa&&2!==d&&8!==d)if(d=I(a),Bb[d])if(y(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||s).specified?d:x;else if(y(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?x:b},prop:function(b,a,c){if(y(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(v(b)){var d=a.nodeType;return d===na||d===Oa?a.textContent:""}a.textContent=b}b.$dv="";return b}(),
	    val:function(b,a){if(v(a)){if(b.multiple&&"select"===va(b)){var c=[];m(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(v(a))return b.innerHTML;ub(b,!0);b.innerHTML=a},empty:Qc},function(b,a){Q.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Qc&&v(2==b.length&&b!==xb&&b!==Pc?a:d)){if(C(a)){for(e=0;e<g;e++)if(b===Vb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=v(e)?Math.min(g,1):g;
	    for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});m({removeData:vb,on:function a(c,d,e,f){if(y(f))throw Tb("onargs");if(Lc(c)){var g=wb(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=If(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,og[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),
	      k=f[d]);k.push(e)}}},off:Oc,one:function(a,c,d){a=F(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;ub(a);m(new Q(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];m(a.childNodes,function(a){a.nodeType===na&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===na||11===d){c=new Q(c);for(var d=0,e=c.length;d<
	  e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===na){var d=a.firstChild;m(new Q(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=F(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Wb,detach:function(a){Wb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new Q(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:zb,removeClass:yb,toggleClass:function(a,c,d){c&&m(c.split(" "),function(c){var f=
	      d;v(f)&&(f=!xb(a,c));(f?zb:yb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ub,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=wb(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
	      !0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:s,type:g,target:a},c.type&&(e=L(e,c)),c=ia(h),f=d?[e].concat(d):[e],m(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){Q.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)v(g)?(g=a(this[h],c,e,f),y(g)&&(g=F(g))):Nc(g,a(this[h],c,e,f));return y(g)?g:this};Q.prototype.bind=Q.prototype.on;Q.prototype.unbind=Q.prototype.off});Ta.prototype={put:function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             c){this[Ga(a,this.nextUid)]=c},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var c=this[a=Ga(a,this.nextUid)];delete this[a];return c}};var zf=[function(){this.$get=[function(){return Ta}]}],Kf=/^([^\(]+?)=>/,Lf=/^[^\(]*\(\s*([^\)]*)\)/m,pg=/,/,qg=/^\s*(_?)(\S+?)\1\s*$/,Jf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=z("$injector");fb.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw J(d)&&d||(d=a.name||Mf(a)),Ha("strictdi",d);
	    c=Tc(a);m(c[1].split(pg),function(a){a.replace(qg,function(a,c,d){e.push(d)})})}a.$inject=e}}else G(a)?(c=a.length-1,Ra(a[c],"fn"),e=a.slice(0,c)):Ra(a,"fn",!0);return e};var Od=z("$animate"),Ve=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=s;d.chain=s;d.prototype={end:s,cancel:s,resume:s,pause:s,complete:s,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Ue=function(){var a=new Ta,c=[];this.$get=["$$AnimateRunner","$rootScope",function(d,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        e){function f(a,c,d){var e=!1;c&&(c=J(c)?c.split(" "):G(c)?c:[],m(c,function(c){c&&(e=!0,a[c]=d)}));return e}function g(){m(c,function(c){var d=a.get(c);if(d){var e=Nf(c.attr("class")),f="",g="";m(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});m(c,function(a){f&&zb(a,f);g&&yb(a,g)});a.remove(c)}});c.length=0}return{enabled:s,on:s,off:s,pin:s,push:function(h,l,k,n){n&&n();k=k||{};k.from&&h.css(k.from);k.to&&h.css(k.to);if(k.addClass||k.removeClass)if(l=k.addClass,n=
	          k.removeClass,k=a.get(h)||{},l=f(k,l,!0),n=f(k,n,!1),l||n)a.put(h,k),c.push(h),1===c.length&&e.$$postDigest(g);return new d}}}]},Se=["$provide",function(a){var c=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Od("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Od("nongcls",
	      "ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function c(a,d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=g&&F(g);h=h&&F(h);g=g||h.parent();c(f,g,h);return a.push(f,"enter",Ia(l))},move:function(f,g,h,l){g=g&&F(g);h=h&&F(h);
	    g=g||h.parent();c(f,g,h);return a.push(f,"move",Ia(l))},leave:function(c,e){return a.push(c,"leave",Ia(e),function(){c.remove()})},addClass:function(c,e,h){h=Ia(h);h.addClass=ib(h.addclass,e);return a.push(c,"addClass",h)},removeClass:function(c,e,h){h=Ia(h);h.removeClass=ib(h.removeClass,e);return a.push(c,"removeClass",h)},setClass:function(c,e,h,l){l=Ia(l);l.addClass=ib(l.addClass,e);l.removeClass=ib(l.removeClass,h);return a.push(c,"setClass",l)},animate:function(c,e,h,l,k){k=Ia(k);k.from=k.from?
	      L(k.from,e):e;k.to=k.to?L(k.to,h):h;k.tempClasses=ib(k.tempClasses,l||"ng-inline-animate");return a.push(c,"animate",k)}}}]}],Te=function(){this.$get=["$$rAF","$q",function(a,c){var d=function(){};d.prototype={done:function(a){this.defer&&this.defer[!0===a?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){this.defer||(this.defer=c.defer());return this.defer.promise},then:function(a,c){return this.getPromise().then(a,c)},"catch":function(a){return this.getPromise()["catch"](a)},
	    "finally":function(a){return this.getPromise()["finally"](a)}};return function(c,f){function g(){a(function(){f.addClass&&(c.addClass(f.addClass),f.addClass=null);f.removeClass&&(c.removeClass(f.removeClass),f.removeClass=null);f.to&&(c.css(f.to),f.to=null);h||l.done();h=!0});return l}f.cleanupStyles&&(f.from=f.to=null);f.from&&(c.css(f.from),f.from=null);var h,l=new d;return{start:g,end:g}}}]},ha=z("$compile");Dc.$inject=["$provide","$$sanitizeUriProvider"];var Wc=/^((?:x|data)[\:\-_])/i,Rf=z("$controller"),
	      Uc=/^(\S+)(\s+as\s+(\w+))?$/,af=function(){this.$get=["$document",function(a){return function(c){c?!c.nodeType&&c instanceof F&&(c=c[0]):c=a[0].body;return c.offsetWidth+1}}]},bd="application/json",$b={"Content-Type":bd+";charset=utf-8"},Tf=/^\[|^\{(?!\{)/,Uf={"[":/]$/,"{":/}$/},Sf=/^\)\]\}',?\n/,rg=z("$http"),fd=function(a){return function(){throw rg("legacy",a);}},Ka=$.$interpolateMinErr=z("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,c){return Ka("interr",
	      a,c.toString())};var sg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Wf={http:80,https:443,ftp:21},Db=z("$location"),tg={$$html5:!1,$$replace:!1,absUrl:Eb("$$absUrl"),url:function(a){if(v(a))return this.$$url;var c=sg.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Eb("$$protocol"),host:Eb("$$host"),port:Eb("$$port"),path:kd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     c){switch(arguments.length){case 0:return this.$$search;case 1:if(J(a)||U(a))a=a.toString(),this.$$search=yc(a);else if(C(a))a=ea(a,{}),m(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Db("isrcharg");break;default:v(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:kd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};m([jd,cc,bc],function(a){a.prototype=Object.create(tg);a.prototype.state=
	      function(c){if(!arguments.length)return this.$$state;if(a!==bc||!this.$$html5)throw Db("nostate");this.$$state=v(c)?null:c;return this}});var ca=z("$parse"),Xf=Function.prototype.call,Yf=Function.prototype.apply,Zf=Function.prototype.bind,Lb=ga();m("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Lb[a]=!0});var ug={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},ec=function(a){this.options=a};ec.prototype={constructor:ec,lex:function(a){this.text=a;this.index=0;for(this.tokens=
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          [];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Lb[c],f=Lb[d];Lb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=
	      a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
	      a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=y(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ca("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=I(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
	      e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=
	      this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=ug[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var t=function(a,c){this.lexer=a;this.options=c};t.Program="Program";t.ExpressionStatement=
	      "ExpressionStatement";t.AssignmentExpression="AssignmentExpression";t.ConditionalExpression="ConditionalExpression";t.LogicalExpression="LogicalExpression";t.BinaryExpression="BinaryExpression";t.UnaryExpression="UnaryExpression";t.CallExpression="CallExpression";t.MemberExpression="MemberExpression";t.Identifier="Identifier";t.Literal="Literal";t.ArrayExpression="ArrayExpression";t.Property="Property";t.ObjectExpression="ObjectExpression";t.ThisExpression="ThisExpression";t.NGValueParameter="NGValueParameter";
	  t.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:t.Program,body:a}},expressionStatement:function(){return{type:t.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=
	      this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:t.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:t.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:t.LogicalExpression,
	    operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:t.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:t.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:t.BinaryExpression,operator:c.text,
	    left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a={type:t.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:t.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:t.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},
	    primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=ea(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:t.CallExpression,callee:a,arguments:this.parseArguments()},
	        this.consume(")")):"["===c.text?(a={type:t.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===c.text?a={type:t.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:t.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());
	    while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:t.Identifier,name:a.text}},constant:function(){return{type:t.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:t.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
	      c={type:t.Property,kind:"init"};this.peek().constant?c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:t.ObjectExpression,properties:a}},throwError:function(a,c){throw ca("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var c=this.expect(a);
	      c||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:t.Literal,value:!0},
	      "false":{type:t.Literal,value:!1},"null":{type:t.Literal,value:null},undefined:{type:t.Literal,value:x},"this":{type:t.ThisExpression}}};td.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};S(e,d.$filter);var f="",g;this.stage="assign";if(g=rd(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),this.return_(f),f="fn.assign="+this.generateFunction("assign",
	          "s,v,l");g=pd(e.body);d.stage="inputs";m(g,function(a,c){var e="fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue",
	      "ensureSafeAssignContext","ifDefined","plus","text",f))(this.$filter,Xa,Ba,md,ld,nd,$f,od,a);this.state=this.stage=x;f.literal=sd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;m(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=
	      [],c=this;m(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,n,p;e=e||s;if(!g&&y(a.watchId))c=c||this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case t.Program:m(a.body,
	      function(c,d){k.recurse(c.expression,x,x,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,";"):k.return_(l)});break;case t.Literal:p=this.escape(a.value);this.assign(c,p);e(p);break;case t.UnaryExpression:this.recurse(a.argument,x,x,function(a){l=a});p=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,p);e(p);break;case t.BinaryExpression:this.recurse(a.left,x,x,function(a){h=a});this.recurse(a.right,x,x,function(a){l=a});p="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,
	      0)+a.operator+this.ifDefined(l,0):"("+h+")"+a.operator+"("+l+")";this.assign(c,p);e(p);break;case t.LogicalExpression:c=c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case t.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case t.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",
	          a.name)+"?l:s"),d.computed=!1,d.name=a.name);Xa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case t.MemberExpression:h=d&&(d.context=this.nextId())||
	      this.nextId();c=c||this.nextId();k.recurse(a.object,h,x,function(){k.if_(k.notNull(h),function(){if(a.computed)l=k.nextId(),k.recurse(a.property,l),k.getStringValue(l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),p=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,p),d&&(d.computed=!0,d.name=l);else{Xa(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),
	      "{}"));p=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))p=k.ensureSafeObject(p);k.assign(c,p);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,"undefined")});e(c)},!!f);break;case t.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),n=[],m(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);n.push(c)}),p=l+"("+n.join(",")+")",k.assign(c,p),e(c)):(l=k.nextId(),h={},n=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),
	      function(){k.addEnsureSafeFunction(l);m(a.arguments,function(a){k.recurse(a,k.nextId(),x,function(a){n.push(k.ensureSafeObject(a))})});h.name?(k.state.expensiveChecks||k.addEnsureSafeObject(h.context),p=k.member(h.context,h.name,h.computed)+"("+n.join(",")+")"):p=l+"("+n.join(",")+")";p=k.ensureSafeObject(p);k.assign(c,p)},function(){k.assign(c,"undefined")});e(c)}));break;case t.AssignmentExpression:l=this.nextId();h={};if(!qd(a.left))throw ca("lval");this.recurse(a.left,x,h,function(){k.if_(k.notNull(h.context),
	      function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));k.addEnsureSafeAssignContext(h.context);p=k.member(h.context,h.name,h.computed)+a.operator+l;k.assign(c,p);e(c||p)})},1);break;case t.ArrayExpression:n=[];m(a.elements,function(a){k.recurse(a,k.nextId(),x,function(a){n.push(a)})});p="["+n.join(",")+"]";this.assign(c,p);e(p);break;case t.ObjectExpression:n=[];m(a.properties,function(a){k.recurse(a.value,k.nextId(),x,function(c){n.push(k.escape(a.key.type===
	      t.Identifier?a.key.name:""+a.key.value)+":"+c)})});p="{"+n.join(",")+"}";this.assign(c,p);e(p);break;case t.ThisExpression:this.assign(c,"s");e("s");break;case t.NGValueParameter:this.assign(c,"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=
	      this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+
	      a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+",text)")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
	    stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(J(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(U(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};
	  ud.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;S(e,d.$filter);var f,g;if(f=rd(e))g=this.recurse(f);f=pd(e.body);var h;f&&(h=[],m(f,function(a,c){var e=d.recurse(a);a.input=e;h.push(e);a.watchId=c}));var l=[];m(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;m(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=
	      h);f.literal=sd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case t.Literal:return this.value(a.value,c);case t.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case t.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case t.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,
	      f,c);case t.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case t.Identifier:return Xa(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Fb(a.name),c,d,g.expression);case t.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Xa(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,
	      g.expensiveChecks,c,d,g.expression);case t.CallExpression:return h=[],m(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var r=[],m=0;m<h.length;++m)r.push(h[m](a,d,e,g));a=f.apply(x,r,g);return c?{context:x,name:x,value:a}:a}:function(a,d,e,p){var r=f(a,d,e,p),m;if(null!=r.value){Ba(r.context,g.expression);md(r.value,g.expression);m=[];for(var s=0;s<h.length;++s)m.push(Ba(h[s](a,d,e,p),
	      g.expression));m=Ba(r.value.apply(r.context,m),g.expression)}return c?{value:m}:m};case t.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,p){var r=e(a,d,h,p);a=f(a,d,h,p);Ba(r.value,g.expression);nd(r.context);r.context[r.name]=a;return c?{value:a}:a};case t.ArrayExpression:return h=[],m(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],m=0;m<h.length;++m)g.push(h[m](a,d,e,f));return c?{value:g}:g};case t.ObjectExpression:return h=
	      [],m(a.properties,function(a){h.push({key:a.key.type===t.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},m=0;m<h.length;++m)g[h[m].key]=h[m].value(a,d,e,f);return c?{value:g}:g};case t.ThisExpression:return function(a){return c?{value:a}:a};case t.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=y(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        f,g){d=a(d,e,f,g);d=y(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=od(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(y(l)?l:0)-(y(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},"binary/":function(a,c,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         d){return function(e,f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},"binary!=":function(a,c,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          d){return function(e,f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             f,g,h){e=a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:x,name:x,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:x;c&&Ba(h,f);return d?{context:g,name:a,value:h}:
	      h}},computedMember:function(a,c,d,e,f){return function(g,h,l,k){var n=a(g,h,l,k),p,m;null!=n&&(p=c(g,h,l,k),p=ld(p),Xa(p,f),e&&1!==e&&n&&!n[p]&&(n[p]={}),m=n[p],Ba(m,f));return d?{context:n,name:p,value:m}:m}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,n){h=a(h,l,k,n);f&&1!==f&&h&&!h[c]&&(h[c]={});l=null!=h?h[c]:x;(d||Fb(c))&&Ba(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var fc=function(a,c,d){this.lexer=
	      a;this.$filter=c;this.options=d;this.ast=new t(this.lexer);this.astCompiler=d.csp?new ud(this.ast,c):new td(this.ast,c)};fc.prototype={constructor:fc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};ga();ga();var ag=Object.prototype.valueOf,Ca=z("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ha=z("$compile"),X=V.createElement("a"),yd=Aa(K.location.href);zd.$inject=["$document"];Kc.$inject=["$provide"];Ad.$inject=["$locale"];Cd.$inject=
	      ["$locale"];var hc=".",kg={yyyy:W("FullYear",4),yy:W("FullYear",2,0,!0),y:W("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:W("Month",2,1),M:W("Month",1,1),dd:W("Date",2),d:W("Date",1),HH:W("Hours",2),H:W("Hours",1),hh:W("Hours",2,-12),h:W("Hours",1,-12),mm:W("Minutes",2),m:W("Minutes",1),ss:W("Seconds",2),s:W("Seconds",1),sss:W("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<
	      a?"floor":"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Gd(2),w:Gd(1),G:ic,GG:ic,GGG:ic,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},jg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,ig=/^\-?\d+$/;Bd.$inject=["$locale"];var fg=oa(I),gg=oa(sb);Dd.$inject=["$parse"];var ie=oa({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===ua.call(c.prop("href"))?
	      "xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),tb={};m(Bb,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=za("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});tb[e]=function(){return{restrict:"A",priority:100,link:f}}}});m(ad,function(a,c){tb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(mg))){f.$set("ngPattern",
	      new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});m(["src","srcset","href"],function(a){var c=za("ng-"+a);tb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===ua.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Va&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:s,$$renameControl:function(a,c){a.$name=c},$removeControl:s,$setValidity:s,
	    $setDirty:s,$setPristine:s,$setSubmitted:s};Hd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Pd=function(a){return["$timeout","$parse",function(c,d){function e(a){return""===a?d('this[""]').assign:d(a).assign||s}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Hd,compile:function(d,g){d.addClass(Ya).addClass(mb);var h=g.name?"name":a&&g.ngForm?"ngForm":!1;return{pre:function(a,d,f,g){var m=g[0];if(!("action"in f)){var u=function(c){a.$apply(function(){m.$commitViewValue();
	        m.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",u,!1);d.on("$destroy",function(){c(function(){d[0].removeEventListener("submit",u,!1)},0,!1)})}(g[1]||m.$$parentForm).$addControl(m);var t=h?e(m.$name):s;h&&(t(a,m),f.$observe(h,function(c){m.$name!==c&&(t(a,x),m.$$parentForm.$$renameControl(m,c),t=e(m.$name),t(a,m))}));d.on("$destroy",function(){m.$$parentForm.$removeControl(m);t(a,x);L(m,Ib)})}}}}}]},je=Pd(),we=Pd(!0),lg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
	      vg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,wg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,xg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Qd=/^(\d{4})-(\d{2})-(\d{2})$/,Rd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,lc=/^(\d{4})-W(\d\d)$/,Sd=/^(\d{4})-(\d\d)$/,Td=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ud={text:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e)},date:kb("date",
	          Qd,Kb(Qd,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Rd,Kb(Rd,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Td,Kb(Td,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",lc,function(a,c){if(da(a))return a;if(J(a)){lc.lastIndex=0;var d=lc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=Fd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),
	        month:kb("month",Sd,Kb(Sd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Jd(a,c,d,e);jb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:xg.test(a)?parseFloat(a):x});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!U(a))throw lb("numfmt",a);a=a.toString()}return a});if(y(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||v(h)||a>=h};d.$observe("min",function(a){y(a)&&!U(a)&&(a=parseFloat(a,10));h=U(a)&&!isNaN(a)?a:x;e.$validate()})}if(y(d.max)||
	            d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||v(l)||a<=l};d.$observe("max",function(a){y(a)&&!U(a)&&(a=parseFloat(a,10));l=U(a)&&!isNaN(a)?a:x;e.$validate()})}},url:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||vg.test(d)}},email:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);jc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||wg.test(d)}},radio:function(a,c,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             d,e){v(d.name)&&c.attr("name",++nb);c.on("click",function(a){c[0].checked&&e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Kd(l,a,"ngTrueValue",d.ngTrueValue,!0),n=Kd(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return la(a,
	            k)});e.$parsers.push(function(a){return a?k:n})},hidden:s,button:s,submit:s,reset:s,file:s},Ec=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Ud[I(h.type)]||Ud.text)(f,g,h,l[0],c,a,d,e)}}}}],yg=/^(true|false|\d+)$/,Oe=function(){return{restrict:"A",priority:100,compile:function(a,c){return yg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",
	          a)})}}}},oe=["$compile",function(a){return{restrict:"AC",compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=v(a)?"":a})}}}}],qe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=v(a)?"":a})}}}}],pe=["$sce","$parse",
	        "$compile",function(a,c,d){return{restrict:"A",compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Ne=oa({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),re=kc("",!0),te=kc("Odd",0),se=kc("Even",1),ue=Ma({compile:function(a,c){c.$set("ngCloak",
	          x);a.removeClass("ng-cloak")}}),ve=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Jc={},zg={blur:!0,focus:!0};m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=za("ng-"+a);Jc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};
	    zg[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var ye=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=V.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=rb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],ze=["$templateRequest","$anchorScroll",
	        "$animate",function(a,c,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:$.noop,compile:function(e,f){var g=f.ngInclude||f.src,h=f.onload||"",l=f.autoscroll;return function(e,f,m,r,u){var s=0,t,w,q,v=function(){w&&(w.remove(),w=null);t&&(t.$destroy(),t=null);q&&(d.leave(q).then(function(){w=null}),w=q,q=null)};e.$watch(g,function(g){var m=function(){!y(l)||l&&!e.$eval(l)||c()},p=++s;g?(a(g,!0).then(function(a){if(p===s){var c=e.$new();r.template=a;a=u(c,function(a){v();
	          d.enter(a,null,f).then(m)});t=c;q=a;t.$emit("$includeContentLoaded",g);e.$eval(h)}},function(){p===s&&(v(),e.$emit("$includeContentError",g))}),e.$emit("$includeContentRequested",g)):(v(),r.template=null)})}}}}],Qe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Mc(f.template,V).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],Ae=Ma({priority:450,
	        compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),Me=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?T(f):f;e.$parsers.push(function(a){if(!v(a)){var c=[];a&&m(a.split(h),function(a){a&&c.push(g?T(a):a)});return c}});e.$formatters.push(function(a){return G(a)?a.join(f):x});e.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",Ld="ng-invalid",Ya="ng-pristine",Jb="ng-dirty",Nd=
	          "ng-pending",lb=z("ngModel"),Ag=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,n){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=x;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
	          x;this.$name=n(d.name||"",!1)(a);this.$$parentForm=Ib;var p=f(d.ngModel),r=p.assign,u=p,t=r,H=null,w,q=this;this.$$setOptions=function(a){if((q.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");u=function(a){var d=p(a);A(d)&&(d=c(a));return d};t=function(a,c){A(p(a))?g(a,{$$$p:q.$modelValue}):r(a,q.$modelValue)}}else if(!p.assign)throw lb("nonassign",d.ngModel,wa(e));};this.$render=s;this.$isEmpty=function(a){return v(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=
	          function(a){q.$isEmpty(a)?(g.removeClass(e,"ng-not-empty"),g.addClass(e,"ng-empty")):(g.removeClass(e,"ng-empty"),g.addClass(e,"ng-not-empty"))};var B=0;Id({ctrl:this,$element:e,set:function(a,c){a[c]=!0},unset:function(a,c){delete a[c]},$animate:g});this.$setPristine=function(){q.$dirty=!1;q.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Ya)};this.$setDirty=function(){q.$dirty=!0;q.$pristine=!1;g.removeClass(e,Ya);g.addClass(e,Jb);q.$$parentForm.$setDirty()};this.$setUntouched=function(){q.$touched=
	          !1;q.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){q.$touched=!0;q.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(H);q.$viewValue=q.$$lastCommittedViewValue;q.$render()};this.$validate=function(){if(!U(q.$modelValue)||!isNaN(q.$modelValue)){var a=q.$$rawModelValue,c=q.$valid,d=q.$modelValue,e=q.$options&&q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,function(f){e||c===f||(q.$modelValue=
	          f?a:x,q.$modelValue!==d&&q.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;m(q.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(m(q.$asyncValidators,function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;m(q.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!A(k.then))throw lb("$asyncValidators",k);g(h,x);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},s):h(!0)}function g(a,c){l===B&&
	      q.$setValidity(a,c)}function h(a){l===B&&d(a)}B++;var l=B;(function(){var a=q.$$parserName||"parse";if(v(w))g(a,null);else return w||(m(q.$validators,function(a,c){g(c,null)}),m(q.$asyncValidators,function(a,c){g(c,null)})),g(a,w),w;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=q.$viewValue;h.cancel(H);if(q.$$lastCommittedViewValue!==a||""===a&&q.$$hasNativeValidators)q.$$updateEmptyClasses(a),q.$$lastCommittedViewValue=a,q.$pristine&&this.$setDirty(),this.$$parseAndValidate()};
	        this.$$parseAndValidate=function(){var c=q.$$lastCommittedViewValue;if(w=v(c)?x:!0)for(var d=0;d<q.$parsers.length;d++)if(c=q.$parsers[d](c),v(c)){w=!1;break}U(q.$modelValue)&&isNaN(q.$modelValue)&&(q.$modelValue=u(a));var e=q.$modelValue,f=q.$options&&q.$options.allowInvalid;q.$$rawModelValue=c;f&&(q.$modelValue=c,q.$modelValue!==e&&q.$$writeModelToScope());q.$$runValidators(c,q.$$lastCommittedViewValue,function(a){f||(q.$modelValue=a?c:x,q.$modelValue!==e&&q.$$writeModelToScope())})};this.$$writeModelToScope=
	            function(){t(a,q.$modelValue);m(q.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){q.$viewValue=a;q.$options&&!q.$options.updateOnDefault||q.$$debounceViewValueCommit(c)};this.$$debounceViewValueCommit=function(c){var d=0,e=q.$options;e&&y(e.debounce)&&(e=e.debounce,U(e)?d=e:U(e[c])?d=e[c]:U(e["default"])&&(d=e["default"]));h.cancel(H);d?H=h(function(){q.$commitViewValue()},d):l.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue()})};a.$watch(function(){var c=
	            u(a);if(c!==q.$modelValue&&(q.$modelValue===q.$modelValue||c===c)){q.$modelValue=q.$$rawModelValue=c;w=x;for(var d=q.$formatters,e=d.length,f=c;e--;)f=d[e](f);q.$viewValue!==f&&(q.$$updateEmptyClasses(f),q.$viewValue=q.$$lastCommittedViewValue=f,q.$render(),q.$$runValidators(c,f,s))}return c})}],Le=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Ag,priority:1,compile:function(c){c.addClass(Ya).addClass("ng-untouched").addClass(mb);return{pre:function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            c,f,g){var h=g[0];c=g[1]||h.$$parentForm;h.$$setOptions(g[2]&&g[2].$options);c.$addControl(h);f.$observe("name",function(a){h.$name!==a&&h.$$parentForm.$$renameControl(h,a)});a.$on("$destroy",function(){h.$$parentForm.$removeControl(h)})},post:function(c,e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],Bg=/(\s+|^)default(\s+|$)/,
	      Pe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=ea(a.$eval(c.ngModelOptions));y(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(Bg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Be=Ma({terminal:!0,priority:1E3}),Cg=z("ngOptions"),Dg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
	      Je=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=d;this.group=e;this.disabled=g}function n(a){var c;if(!s&&Da(a))c=a;else{c=[];for(var d in a)a.hasOwnProperty(d)&&"$"!==d.charAt(0)&&c.push(d)}return c}var m=a.match(Dg);if(!m)throw Cg("iexp",a,wa(d));var r=m[5]||m[7],s=m[6];a=/ as /.test(m[0])&&m[1];var t=m[9];d=c(m[2]?m[1]:r);var v=a&&c(a)||d,w=t&&c(t),q=t?function(a,c){return w(e,c)}:function(a){return Ga(a)},x=function(a,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           c){return q(a,A(a,c))},y=c(m[2]||m[1]),z=c(m[3]||""),F=c(m[4]||""),M=c(m[8]),E={},A=s?function(a,c){E[s]=c;E[r]=a;return E}:function(a){E[r]=a;return E};return{trackBy:t,getTrackByValue:x,getWatchables:c(M,function(a){var c=[];a=a||[];for(var d=n(a),f=d.length,g=0;g<f;g++){var h=a===d?g:d[g],k=A(a[h],h),h=q(a[h],k);c.push(h);if(m[2]||m[1])h=y(e,k),c.push(h);m[4]&&(k=F(e,k),c.push(k))}return c}),getOptions:function(){for(var a=[],c={},d=M(e)||[],g=n(d),h=g.length,m=0;m<h;m++){var p=d===g?m:g[m],r=
	          A(d[p],p),s=v(e,r),p=q(s,r),u=y(e,r),w=z(e,r),r=F(e,r),s=new f(p,s,u,w,r);a.push(s);c[p]=s}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[x(a)]},getViewValueFromOption:function(a){return t?$.copy(a.viewValue):a.viewValue}}}}}var e=V.createElement("option"),f=V.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:function(c,h,l,k){function n(a,c){a.element=c;c.disabled=a.disabled;a.label!==c.label&&(c.label=a.label,c.textContent=a.label);
	        a.value!==c.value&&(c.value=a.selectValue)}function p(a,c,d,e){c&&I(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function r(a){for(var c;a;)c=a.nextSibling,Wb(a),a=c}function s(a){var c=q&&q[0],d=M&&M[0];if(c||d)for(;a&&(a===c||a===d||c&&8===c.nodeType);)a=a.nextSibling;return a}function t(){var a=E&&v.readValue();E=C.getOptions();var c={},d=h[0].firstChild;O&&h.prepend(q);d=s(d);E.items.forEach(function(a){var g,k;y(a.group)?(g=c[a.group],g||(g=p(h[0],d,
	          "optgroup",f),d=g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=p(g.groupElement,g.currentOptionElement,"option",e),n(a,k),g.currentOptionElement=k.nextSibling):(k=p(h[0],d,"option",e),n(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){r(c[a].currentOptionElement)});r(d);w.$render();if(!w.$isEmpty(a)){var g=v.readValue();(C.trackBy?la(a,g):a===g)||(w.$setViewValue(g),w.$render())}}var v=k[0],w=k[1];k=l.multiple;for(var q,x=0,z=h.children(),
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            A=z.length;x<A;x++)if(""===z[x].value){q=z.eq(x);break}var O=!!q,M=F(e.cloneNode(!1));M.val("?");var E,C=d(l.ngOptions,h,c);k?(w.$isEmpty=function(a){return!a||0===a.length},v.writeValue=function(a){E.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){(a=E.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},v.readValue=function(){var a=h.val()||[],c=[];m(a,function(a){(a=E.selectValueMap[a])&&!a.disabled&&c.push(E.getViewValueFromOption(a))});return c},C.trackBy&&
	      c.$watchCollection(function(){if(G(w.$viewValue))return w.$viewValue.map(function(a){return C.getTrackByValue(a)})},function(){w.$render()})):(v.writeValue=function(a){var c=E.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&(M.remove(),O||q.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||O?(M.remove(),O||h.prepend(q),h.val(""),q.prop("selected",!0),q.attr("selected",!0)):(O||q.remove(),h.prepend(M),h.val("?"),M.prop("selected",
	          !0),M.attr("selected",!0))},v.readValue=function(){var a=E.selectValueMap[h.val()];return a&&!a.disabled?(O||q.remove(),M.remove(),E.getViewValueFromOption(a)):null},C.trackBy&&c.$watch(function(){return C.getTrackByValue(w.$viewValue)},function(){w.$render()}));O?(q.remove(),a(q)(c),q.removeClass("ng-scope")):q=F(e.cloneNode(!1));t();c.$watchCollection(C.getWatchables,t)}}}],Ce=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||
	          "")}var n=l.count,p=l.$attr.when&&h.attr(l.$attr.when),r=l.offset||0,t=g.$eval(p)||{},x={},y=c.startSymbol(),w=c.endSymbol(),q=y+n+"-"+r+w,B=$.noop,z;m(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+I(d[2]),t[d]=h.attr(l.$attr[c]))});m(t,function(a,d){x[d]=c(a.replace(e,q))});g.$watch(n,function(c){var e=parseFloat(c),f=isNaN(e);f||e in t||(e=a.pluralCat(e-r));e===z||f&&U(z)&&isNaN(z)||(B(),f=x[e],v(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+p),B=s,k()):B=g.$watch(f,
	          k),z=e)})}}}],De=["$parse","$animate",function(a,c){var d=z("ngRepeat"),e=function(a,c,d,e,k,m,p){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===p-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=V.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",
	          h);var n=k[1],p=k[2],r=k[3],s=k[4],k=n.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",n);var t=k[3]||k[1],v=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",r);var w,q,y,z,A={$id:Ga};s?w=a(s):(y=function(a,c){return Ga(c)},z=function(a){return a});return function(a,f,g,k,n){w&&(q=function(c,d,e){v&&(A[v]=c);A[t]=d;A.$index=e;return w(a,A)});
	        var s=ga();a.$watchCollection(p,function(g){var k,p,u=f[0],w,A=ga(),C,E,J,G,K,I,L;r&&(a[r]=g);if(Da(g))K=g,p=q||y;else for(L in p=q||z,K=[],g)sa.call(g,L)&&"$"!==L.charAt(0)&&K.push(L);C=K.length;L=Array(C);for(k=0;k<C;k++)if(E=g===K?k:K[k],J=g[E],G=p(E,J,k),s[G])I=s[G],delete s[G],A[G]=I,L[k]=I;else{if(A[G])throw m(L,function(a){a&&a.scope&&(s[a.id]=a)}),d("dupes",h,G,J);L[k]={id:G,scope:x,clone:x};A[G]=!0}for(w in s){I=s[w];G=rb(I.clone);c.leave(G);if(G[0].parentNode)for(k=0,p=G.length;k<p;k++)G[k].$$NG_REMOVED=
	            !0;I.scope.$destroy()}for(k=0;k<C;k++)if(E=g===K?k:K[k],J=g[E],I=L[k],I.scope){w=u;do w=w.nextSibling;while(w&&w.$$NG_REMOVED);I.clone[0]!=w&&c.move(rb(I.clone),null,F(u));u=I.clone[I.clone.length-1];e(I.scope,k,t,J,v,E,C)}else n(function(a,d){I.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,null,F(u));u=f;I.clone=a;A[I.id]=I;e(I.scope,k,t,J,v,E,C)});s=A})}}}}],Ee=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":
	          "addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],xe=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Fe=Ma(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&m(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ge=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=
	          [],h=[],l=[],k=[],n=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var s=rb(h[d].clone);k[d].$destroy();(l[d]=a.leave(s)).then(n(l,d))}h.length=0;k.length=0;(g=f.cases["!"+c]||f.cases["?"])&&m(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=V.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],He=Ma({transclude:"element",
	        priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Ie=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Ke=Ma({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw z("ngTransclude")("orphan",wa(c));f(function(a){c.empty();c.append(a)})}}),
	      ke=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Eg={$setViewValue:s,$render:s},Fg=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Ta;e.ngModelCtrl=Eg;e.unknownOption=F(V.createElement("option"));e.renderUnknownOption=function(c){c="? "+Ga(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=s});e.removeUnknownOption=function(){e.unknownOption.parent()&&
	      e.unknownOption.remove()};e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};e.addOption=function(a,c){Sa(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=x)):f.put(a,c-1))};
	        e.hasOption=function(a){return!!f.get(a)}}],le=function(){return{restrict:"E",require:["select","?ngModel"],controller:Fg,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});if(d.multiple){g.readValue=function(){var a=[];m(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=new Ta(a);m(c.find("option"),function(a){a.selected=
	          y(d.get(a.value))})};var h,l=NaN;a.$watch(function(){l!==f.$viewValue||la(h,f.$viewValue)||(h=ia(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},ne=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(c,d){if(y(d.value))var e=a(d.value,!0);else{var f=a(c.text(),!0);f||d.$set("value",c.text())}return function(a,c,d){function k(a){p.addOption(a,c);p.ngModelCtrl.$render();c[0].hasAttribute("selected")&&(c[0].selected=!0)}var m=
	          c.parent(),p=m.data("$selectController")||m.parent().data("$selectController");if(p&&p.ngModelCtrl){if(e){var r;d.$observe("value",function(a){y(r)&&p.removeOption(r);r=a;k(a)})}else f?a.$watch(f,function(a,c){d.$set("value",a);c!==a&&p.removeOption(c);k(a)}):k(d.value);c.on("$destroy",function(){p.removeOption(d.value);p.ngModelCtrl.$render()})}}}}}],me=oa({restrict:"E",terminal:!1}),Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=
	          function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){J(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw z("ngPattern")("noregexp",g,a,wa(c));f=a||x;e.$validate()});e.$validators.pattern=function(a,c){return e.$isEmpty(c)||v(f)||f.test(c)}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",
	        link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=Z(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=Z(a)||0;e.$validate()});e.$validators.minlength=function(a,c){return e.$isEmpty(c)||c.length>=f}}}}};K.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):
	      (de(),fe($),$.module("ngLocale",[],["$provide",function(a){function c(a){a+="";var c=a.indexOf(".");return-1==c?0:a.length-c-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
	        WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",pluralCat:function(a,e){var f=
	          a|0,g=e;x===g&&(g=Math.min(c(a),3));Math.pow(10,g);return 1==f&&0==g?"one":"other"}})}]),F(V).ready(function(){$d(V,zc)}))})(window,document);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
	//# sourceMappingURL=angular.min.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * @license AngularJS v1.5.0-beta.1
	 * (c) 2010-2015 Google, Inc. http://angularjs.org
	 * License: MIT
	 */
	(function(window, angular, undefined) {'use strict';
	
	  /* jshint ignore:start */
	  var noop        = angular.noop;
	  var extend      = angular.extend;
	  var jqLite      = angular.element;
	  var forEach     = angular.forEach;
	  var isArray     = angular.isArray;
	  var isString    = angular.isString;
	  var isObject    = angular.isObject;
	  var isUndefined = angular.isUndefined;
	  var isDefined   = angular.isDefined;
	  var isFunction  = angular.isFunction;
	  var isElement   = angular.isElement;
	
	  var ELEMENT_NODE = 1;
	  var COMMENT_NODE = 8;
	
	  var ADD_CLASS_SUFFIX = '-add';
	  var REMOVE_CLASS_SUFFIX = '-remove';
	  var EVENT_CLASS_PREFIX = 'ng-';
	  var ACTIVE_CLASS_SUFFIX = '-active';
	
	  var NG_ANIMATE_CLASSNAME = 'ng-animate';
	  var NG_ANIMATE_CHILDREN_DATA = '$$ngAnimateChildren';
	
	// Detect proper transitionend/animationend event names.
	  var CSS_PREFIX = '', TRANSITION_PROP, TRANSITIONEND_EVENT, ANIMATION_PROP, ANIMATIONEND_EVENT;
	
	// If unprefixed events are not supported but webkit-prefixed are, use the latter.
	// Otherwise, just use W3C names, browsers not supporting them at all will just ignore them.
	// Note: Chrome implements `window.onwebkitanimationend` and doesn't implement `window.onanimationend`
	// but at the same time dispatches the `animationend` event and not `webkitAnimationEnd`.
	// Register both events in case `window.onanimationend` is not supported because of that,
	// do the same for `transitionend` as Safari is likely to exhibit similar behavior.
	// Also, the only modern browser that uses vendor prefixes for transitions/keyframes is webkit
	// therefore there is no reason to test anymore for other vendor prefixes:
	// http://caniuse.com/#search=transition
	  if (isUndefined(window.ontransitionend) && isDefined(window.onwebkittransitionend)) {
	    CSS_PREFIX = '-webkit-';
	    TRANSITION_PROP = 'WebkitTransition';
	    TRANSITIONEND_EVENT = 'webkitTransitionEnd transitionend';
	  } else {
	    TRANSITION_PROP = 'transition';
	    TRANSITIONEND_EVENT = 'transitionend';
	  }
	
	  if (isUndefined(window.onanimationend) && isDefined(window.onwebkitanimationend)) {
	    CSS_PREFIX = '-webkit-';
	    ANIMATION_PROP = 'WebkitAnimation';
	    ANIMATIONEND_EVENT = 'webkitAnimationEnd animationend';
	  } else {
	    ANIMATION_PROP = 'animation';
	    ANIMATIONEND_EVENT = 'animationend';
	  }
	
	  var DURATION_KEY = 'Duration';
	  var PROPERTY_KEY = 'Property';
	  var DELAY_KEY = 'Delay';
	  var TIMING_KEY = 'TimingFunction';
	  var ANIMATION_ITERATION_COUNT_KEY = 'IterationCount';
	  var ANIMATION_PLAYSTATE_KEY = 'PlayState';
	  var SAFE_FAST_FORWARD_DURATION_VALUE = 9999;
	
	  var ANIMATION_DELAY_PROP = ANIMATION_PROP + DELAY_KEY;
	  var ANIMATION_DURATION_PROP = ANIMATION_PROP + DURATION_KEY;
	  var TRANSITION_DELAY_PROP = TRANSITION_PROP + DELAY_KEY;
	  var TRANSITION_DURATION_PROP = TRANSITION_PROP + DURATION_KEY;
	
	  var isPromiseLike = function(p) {
	    return p && p.then ? true : false;
	  };
	
	  function assertArg(arg, name, reason) {
	    if (!arg) {
	      throw ngMinErr('areq', "Argument '{0}' is {1}", (name || '?'), (reason || "required"));
	    }
	    return arg;
	  }
	
	  function mergeClasses(a,b) {
	    if (!a && !b) return '';
	    if (!a) return b;
	    if (!b) return a;
	    if (isArray(a)) a = a.join(' ');
	    if (isArray(b)) b = b.join(' ');
	    return a + ' ' + b;
	  }
	
	  function packageStyles(options) {
	    var styles = {};
	    if (options && (options.to || options.from)) {
	      styles.to = options.to;
	      styles.from = options.from;
	    }
	    return styles;
	  }
	
	  function pendClasses(classes, fix, isPrefix) {
	    var className = '';
	    classes = isArray(classes)
	        ? classes
	        : classes && isString(classes) && classes.length
	        ? classes.split(/\s+/)
	        : [];
	    forEach(classes, function(klass, i) {
	      if (klass && klass.length > 0) {
	        className += (i > 0) ? ' ' : '';
	        className += isPrefix ? fix + klass
	            : klass + fix;
	      }
	    });
	    return className;
	  }
	
	  function removeFromArray(arr, val) {
	    var index = arr.indexOf(val);
	    if (val >= 0) {
	      arr.splice(index, 1);
	    }
	  }
	
	  function stripCommentsFromElement(element) {
	    if (element instanceof jqLite) {
	      switch (element.length) {
	        case 0:
	          return [];
	          break;
	
	        case 1:
	          // there is no point of stripping anything if the element
	          // is the only element within the jqLite wrapper.
	          // (it's important that we retain the element instance.)
	          if (element[0].nodeType === ELEMENT_NODE) {
	            return element;
	          }
	          break;
	
	        default:
	          return jqLite(extractElementNode(element));
	          break;
	      }
	    }
	
	    if (element.nodeType === ELEMENT_NODE) {
	      return jqLite(element);
	    }
	  }
	
	  function extractElementNode(element) {
	    if (!element[0]) return element;
	    for (var i = 0; i < element.length; i++) {
	      var elm = element[i];
	      if (elm.nodeType == ELEMENT_NODE) {
	        return elm;
	      }
	    }
	  }
	
	  function $$addClass($$jqLite, element, className) {
	    forEach(element, function(elm) {
	      $$jqLite.addClass(elm, className);
	    });
	  }
	
	  function $$removeClass($$jqLite, element, className) {
	    forEach(element, function(elm) {
	      $$jqLite.removeClass(elm, className);
	    });
	  }
	
	  function applyAnimationClassesFactory($$jqLite) {
	    return function(element, options) {
	      if (options.addClass) {
	        $$addClass($$jqLite, element, options.addClass);
	        options.addClass = null;
	      }
	      if (options.removeClass) {
	        $$removeClass($$jqLite, element, options.removeClass);
	        options.removeClass = null;
	      }
	    }
	  }
	
	  function prepareAnimationOptions(options) {
	    options = options || {};
	    if (!options.$$prepared) {
	      var domOperation = options.domOperation || noop;
	      options.domOperation = function() {
	        options.$$domOperationFired = true;
	        domOperation();
	        domOperation = noop;
	      };
	      options.$$prepared = true;
	    }
	    return options;
	  }
	
	  function applyAnimationStyles(element, options) {
	    applyAnimationFromStyles(element, options);
	    applyAnimationToStyles(element, options);
	  }
	
	  function applyAnimationFromStyles(element, options) {
	    if (options.from) {
	      element.css(options.from);
	      options.from = null;
	    }
	  }
	
	  function applyAnimationToStyles(element, options) {
	    if (options.to) {
	      element.css(options.to);
	      options.to = null;
	    }
	  }
	
	  function mergeAnimationOptions(element, target, newOptions) {
	    var toAdd = (target.addClass || '') + ' ' + (newOptions.addClass || '');
	    var toRemove = (target.removeClass || '') + ' ' + (newOptions.removeClass || '');
	    var classes = resolveElementClasses(element.attr('class'), toAdd, toRemove);
	
	    if (newOptions.preparationClasses) {
	      target.preparationClasses = concatWithSpace(newOptions.preparationClasses, target.preparationClasses);
	      delete newOptions.preparationClasses;
	    }
	
	    // noop is basically when there is no callback; otherwise something has been set
	    var realDomOperation = target.domOperation !== noop ? target.domOperation : null;
	
	    extend(target, newOptions);
	
	    // TODO(matsko or sreeramu): proper fix is to maintain all animation callback in array and call at last,but now only leave has the callback so no issue with this.
	    if (realDomOperation) {
	      target.domOperation = realDomOperation;
	    }
	
	    if (classes.addClass) {
	      target.addClass = classes.addClass;
	    } else {
	      target.addClass = null;
	    }
	
	    if (classes.removeClass) {
	      target.removeClass = classes.removeClass;
	    } else {
	      target.removeClass = null;
	    }
	
	    return target;
	  }
	
	  function resolveElementClasses(existing, toAdd, toRemove) {
	    var ADD_CLASS = 1;
	    var REMOVE_CLASS = -1;
	
	    var flags = {};
	    existing = splitClassesToLookup(existing);
	
	    toAdd = splitClassesToLookup(toAdd);
	    forEach(toAdd, function(value, key) {
	      flags[key] = ADD_CLASS;
	    });
	
	    toRemove = splitClassesToLookup(toRemove);
	    forEach(toRemove, function(value, key) {
	      flags[key] = flags[key] === ADD_CLASS ? null : REMOVE_CLASS;
	    });
	
	    var classes = {
	      addClass: '',
	      removeClass: ''
	    };
	
	    forEach(flags, function(val, klass) {
	      var prop, allow;
	      if (val === ADD_CLASS) {
	        prop = 'addClass';
	        allow = !existing[klass];
	      } else if (val === REMOVE_CLASS) {
	        prop = 'removeClass';
	        allow = existing[klass];
	      }
	      if (allow) {
	        if (classes[prop].length) {
	          classes[prop] += ' ';
	        }
	        classes[prop] += klass;
	      }
	    });
	
	    function splitClassesToLookup(classes) {
	      if (isString(classes)) {
	        classes = classes.split(' ');
	      }
	
	      var obj = {};
	      forEach(classes, function(klass) {
	        // sometimes the split leaves empty string values
	        // incase extra spaces were applied to the options
	        if (klass.length) {
	          obj[klass] = true;
	        }
	      });
	      return obj;
	    }
	
	    return classes;
	  }
	
	  function getDomNode(element) {
	    return (element instanceof angular.element) ? element[0] : element;
	  }
	
	  function applyGeneratedPreparationClasses(element, event, options) {
	    var classes = '';
	    if (event) {
	      classes = pendClasses(event, EVENT_CLASS_PREFIX, true);
	    }
	    if (options.addClass) {
	      classes = concatWithSpace(classes, pendClasses(options.addClass, ADD_CLASS_SUFFIX));
	    }
	    if (options.removeClass) {
	      classes = concatWithSpace(classes, pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX));
	    }
	    if (classes.length) {
	      options.preparationClasses = classes;
	      element.addClass(classes);
	    }
	  }
	
	  function clearGeneratedClasses(element, options) {
	    if (options.preparationClasses) {
	      element.removeClass(options.preparationClasses);
	      options.preparationClasses = null;
	    }
	    if (options.activeClasses) {
	      element.removeClass(options.activeClasses);
	      options.activeClasses = null;
	    }
	  }
	
	  function blockTransitions(node, duration) {
	    // we use a negative delay value since it performs blocking
	    // yet it doesn't kill any existing transitions running on the
	    // same element which makes this safe for class-based animations
	    var value = duration ? '-' + duration + 's' : '';
	    applyInlineStyle(node, [TRANSITION_DELAY_PROP, value]);
	    return [TRANSITION_DELAY_PROP, value];
	  }
	
	  function blockKeyframeAnimations(node, applyBlock) {
	    var value = applyBlock ? 'paused' : '';
	    var key = ANIMATION_PROP + ANIMATION_PLAYSTATE_KEY;
	    applyInlineStyle(node, [key, value]);
	    return [key, value];
	  }
	
	  function applyInlineStyle(node, styleTuple) {
	    var prop = styleTuple[0];
	    var value = styleTuple[1];
	    node.style[prop] = value;
	  }
	
	  function concatWithSpace(a,b) {
	    if (!a) return b;
	    if (!b) return a;
	    return a + ' ' + b;
	  }
	
	  var $$rAFSchedulerFactory = ['$$rAF', function($$rAF) {
	    var queue, cancelFn;
	
	    function scheduler(tasks) {
	      // we make a copy since RAFScheduler mutates the state
	      // of the passed in array variable and this would be difficult
	      // to track down on the outside code
	      queue = queue.concat(tasks);
	      nextTick();
	    }
	
	    queue = scheduler.queue = [];
	
	    /* waitUntilQuiet does two things:
	     * 1. It will run the FINAL `fn` value only when an uncancelled RAF has passed through
	     * 2. It will delay the next wave of tasks from running until the quiet `fn` has run.
	     *
	     * The motivation here is that animation code can request more time from the scheduler
	     * before the next wave runs. This allows for certain DOM properties such as classes to
	     * be resolved in time for the next animation to run.
	     */
	    scheduler.waitUntilQuiet = function(fn) {
	      if (cancelFn) cancelFn();
	
	      cancelFn = $$rAF(function() {
	        cancelFn = null;
	        fn();
	        nextTick();
	      });
	    };
	
	    return scheduler;
	
	    function nextTick() {
	      if (!queue.length) return;
	
	      var items = queue.shift();
	      for (var i = 0; i < items.length; i++) {
	        items[i]();
	      }
	
	      if (!cancelFn) {
	        $$rAF(function() {
	          if (!cancelFn) nextTick();
	        });
	      }
	    }
	  }];
	
	  var $$AnimateChildrenDirective = [function() {
	    return function(scope, element, attrs) {
	      var val = attrs.ngAnimateChildren;
	      if (angular.isString(val) && val.length === 0) { //empty attribute
	        element.data(NG_ANIMATE_CHILDREN_DATA, true);
	      } else {
	        attrs.$observe('ngAnimateChildren', function(value) {
	          value = value === 'on' || value === 'true';
	          element.data(NG_ANIMATE_CHILDREN_DATA, value);
	        });
	      }
	    };
	  }];
	
	  var ANIMATE_TIMER_KEY = '$$animateCss';
	
	  /**
	   * @ngdoc service
	   * @name $animateCss
	   * @kind object
	   *
	   * @description
	   * The `$animateCss` service is a useful utility to trigger customized CSS-based transitions/keyframes
	   * from a JavaScript-based animation or directly from a directive. The purpose of `$animateCss` is NOT
	   * to side-step how `$animate` and ngAnimate work, but the goal is to allow pre-existing animations or
	   * directives to create more complex animations that can be purely driven using CSS code.
	   *
	   * Note that only browsers that support CSS transitions and/or keyframe animations are capable of
	   * rendering animations triggered via `$animateCss` (bad news for IE9 and lower).
	   *
	   * ## Usage
	   * Once again, `$animateCss` is designed to be used inside of a registered JavaScript animation that
	   * is powered by ngAnimate. It is possible to use `$animateCss` directly inside of a directive, however,
	   * any automatic control over cancelling animations and/or preventing animations from being run on
	   * child elements will not be handled by Angular. For this to work as expected, please use `$animate` to
	   * trigger the animation and then setup a JavaScript animation that injects `$animateCss` to trigger
	   * the CSS animation.
	   *
	   * The example below shows how we can create a folding animation on an element using `ng-if`:
	   *
	   * ```html
	   * <!-- notice the `fold-animation` CSS class -->
	   * <div ng-if="onOff" class="fold-animation">
	   *   This element will go BOOM
	   * </div>
	   * <button ng-click="onOff=true">Fold In</button>
	   * ```
	   *
	   * Now we create the **JavaScript animation** that will trigger the CSS transition:
	   *
	   * ```js
	   * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       var height = element[0].offsetHeight;
	 *       return $animateCss(element, {
	 *         from: { height:'0px' },
	 *         to: { height:height + 'px' },
	 *         duration: 1 // one second
	 *       });
	 *     }
	 *   }
	 * }]);
	   * ```
	   *
	   * ## More Advanced Uses
	   *
	   * `$animateCss` is the underlying code that ngAnimate uses to power **CSS-based animations** behind the scenes. Therefore CSS hooks
	   * like `.ng-EVENT`, `.ng-EVENT-active`, `.ng-EVENT-stagger` are all features that can be triggered using `$animateCss` via JavaScript code.
	   *
	   * This also means that just about any combination of adding classes, removing classes, setting styles, dynamically setting a keyframe animation,
	   * applying a hardcoded duration or delay value, changing the animation easing or applying a stagger animation are all options that work with
	   * `$animateCss`. The service itself is smart enough to figure out the combination of options and examine the element styling properties in order
	   * to provide a working animation that will run in CSS.
	   *
	   * The example below showcases a more advanced version of the `.fold-animation` from the example above:
	   *
	   * ```js
	   * ngModule.animation('.fold-animation', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       var height = element[0].offsetHeight;
	 *       return $animateCss(element, {
	 *         addClass: 'red large-text pulse-twice',
	 *         easing: 'ease-out',
	 *         from: { height:'0px' },
	 *         to: { height:height + 'px' },
	 *         duration: 1 // one second
	 *       });
	 *     }
	 *   }
	 * }]);
	   * ```
	   *
	   * Since we're adding/removing CSS classes then the CSS transition will also pick those up:
	   *
	   * ```css
	   * /&#42; since a hardcoded duration value of 1 was provided in the JavaScript animation code,
	   * the CSS classes below will be transitioned despite them being defined as regular CSS classes &#42;/
	   * .red { background:red; }
	   * .large-text { font-size:20px; }
	   *
	   * /&#42; we can also use a keyframe animation and $animateCss will make it work alongside the transition &#42;/
	   * .pulse-twice {
	 *   animation: 0.5s pulse linear 2;
	 *   -webkit-animation: 0.5s pulse linear 2;
	 * }
	   *
	   * @keyframes pulse {
	 *   from { transform: scale(0.5); }
	 *   to { transform: scale(1.5); }
	 * }
	   *
	   * @-webkit-keyframes pulse {
	 *   from { -webkit-transform: scale(0.5); }
	 *   to { -webkit-transform: scale(1.5); }
	 * }
	   * ```
	   *
	   * Given this complex combination of CSS classes, styles and options, `$animateCss` will figure everything out and make the animation happen.
	   *
	   * ## How the Options are handled
	   *
	   * `$animateCss` is very versatile and intelligent when it comes to figuring out what configurations to apply to the element to ensure the animation
	   * works with the options provided. Say for example we were adding a class that contained a keyframe value and we wanted to also animate some inline
	   * styles using the `from` and `to` properties.
	   *
	   * ```js
	   * var animator = $animateCss(element, {
	 *   from: { background:'red' },
	 *   to: { background:'blue' }
	 * });
	   * animator.start();
	   * ```
	   *
	   * ```css
	   * .rotating-animation {
	 *   animation:0.5s rotate linear;
	 *   -webkit-animation:0.5s rotate linear;
	 * }
	   *
	   * @keyframes rotate {
	 *   from { transform: rotate(0deg); }
	 *   to { transform: rotate(360deg); }
	 * }
	   *
	   * @-webkit-keyframes rotate {
	 *   from { -webkit-transform: rotate(0deg); }
	 *   to { -webkit-transform: rotate(360deg); }
	 * }
	   * ```
	   *
	   * The missing pieces here are that we do not have a transition set (within the CSS code nor within the `$animateCss` options) and the duration of the animation is
	   * going to be detected from what the keyframe styles on the CSS class are. In this event, `$animateCss` will automatically create an inline transition
	   * style matching the duration detected from the keyframe style (which is present in the CSS class that is being added) and then prepare both the transition
	   * and keyframe animations to run in parallel on the element. Then when the animation is underway the provided `from` and `to` CSS styles will be applied
	   * and spread across the transition and keyframe animation.
	   *
	   * ## What is returned
	   *
	   * `$animateCss` works in two stages: a preparation phase and an animation phase. Therefore when `$animateCss` is first called it will NOT actually
	   * start the animation. All that is going on here is that the element is being prepared for the animation (which means that the generated CSS classes are
	   * added and removed on the element). Once `$animateCss` is called it will return an object with the following properties:
	   *
	   * ```js
	   * var animator = $animateCss(element, { ... });
	   * ```
	   *
	   * Now what do the contents of our `animator` variable look like:
	   *
	   * ```js
	   * {
	 *   // starts the animation
	 *   start: Function,
	 *
	 *   // ends (aborts) the animation
	 *   end: Function
	 * }
	   * ```
	   *
	   * To actually start the animation we need to run `animation.start()` which will then return a promise that we can hook into to detect when the animation ends.
	   * If we choose not to run the animation then we MUST run `animation.end()` to perform a cleanup on the element (since some CSS classes and stlyes may have been
	   * applied to the element during the preparation phase). Note that all other properties such as duration, delay, transitions and keyframes are just properties
	   * and that changing them will not reconfigure the parameters of the animation.
	   *
	   * ### runner.done() vs runner.then()
	   * It is documented that `animation.start()` will return a promise object and this is true, however, there is also an additional method available on the
	   * runner called `.done(callbackFn)`. The done method works the same as `.finally(callbackFn)`, however, it does **not trigger a digest to occur**.
	   * Therefore, for performance reasons, it's always best to use `runner.done(callback)` instead of `runner.then()`, `runner.catch()` or `runner.finally()`
	   * unless you really need a digest to kick off afterwards.
	   *
	   * Keep in mind that, to make this easier, ngAnimate has tweaked the JS animations API to recognize when a runner instance is returned from $animateCss
	   * (so there is no need to call `runner.done(doneFn)` inside of your JavaScript animation code).
	   * Check the {@link ngAnimate.$animateCss#usage animation code above} to see how this works.
	   *
	   * @param {DOMElement} element the element that will be animated
	   * @param {object} options the animation-related options that will be applied during the animation
	   *
	   * * `event` - The DOM event (e.g. enter, leave, move). When used, a generated CSS class of `ng-EVENT` and `ng-EVENT-active` will be applied
	   * to the element during the animation. Multiple events can be provided when spaces are used as a separator. (Note that this will not perform any DOM operation.)
	   * * `easing` - The CSS easing value that will be applied to the transition or keyframe animation (or both).
	   * * `transitionStyle` - The raw CSS transition style that will be used (e.g. `1s linear all`).
	   * * `keyframeStyle` - The raw CSS keyframe animation style that will be used (e.g. `1s my_animation linear`).
	   * * `from` - The starting CSS styles (a key/value object) that will be applied at the start of the animation.
	   * * `to` - The ending CSS styles (a key/value object) that will be applied across the animation via a CSS transition.
	   * * `addClass` - A space separated list of CSS classes that will be added to the element and spread across the animation.
	   * * `removeClass` - A space separated list of CSS classes that will be removed from the element and spread across the animation.
	   * * `duration` - A number value representing the total duration of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `0`
	   * is provided then the animation will be skipped entirely.
	   * * `delay` - A number value representing the total delay of the transition and/or keyframe (note that a value of 1 is 1000ms). If a value of `true` is
	   * used then whatever delay value is detected from the CSS classes will be mirrored on the elements styles (e.g. by setting delay true then the style value
	   * of the element will be `transition-delay: DETECTED_VALUE`). Using `true` is useful when you want the CSS classes and inline styles to all share the same
	   * CSS delay value.
	   * * `stagger` - A numeric time value representing the delay between successively animated elements
	   * ({@link ngAnimate#css-staggering-animations Click here to learn how CSS-based staggering works in ngAnimate.})
	   * * `staggerIndex` - The numeric index representing the stagger item (e.g. a value of 5 is equal to the sixth item in the stagger; therefore when a
	   *   `stagger` option value of `0.1` is used then there will be a stagger delay of `600ms`)
	   * * `applyClassesEarly` - Whether or not the classes being added or removed will be used when detecting the animation. This is set by `$animate` when enter/leave/move animations are fired to ensure that the CSS classes are resolved in time. (Note that this will prevent any transitions from occuring on the classes being added and removed.)
	   * * `cleanupStyles` - Whether or not the provided `from` and `to` styles will be removed once
	   *    the animation is closed. This is useful for when the styles are used purely for the sake of
	   *    the animation and do not have a lasting visual effect on the element (e.g. a colapse and open animation).
	   *    By default this value is set to `false`.
	   *
	   * @return {object} an object with start and end methods and details about the animation.
	   *
	   * * `start` - The method to start the animation. This will return a `Promise` when called.
	   * * `end` - This method will cancel the animation and remove all applied CSS classes and styles.
	   */
	  var ONE_SECOND = 1000;
	  var BASE_TEN = 10;
	
	  var ELAPSED_TIME_MAX_DECIMAL_PLACES = 3;
	  var CLOSING_TIME_BUFFER = 1.5;
	
	  var DETECT_CSS_PROPERTIES = {
	    transitionDuration:      TRANSITION_DURATION_PROP,
	    transitionDelay:         TRANSITION_DELAY_PROP,
	    transitionProperty:      TRANSITION_PROP + PROPERTY_KEY,
	    animationDuration:       ANIMATION_DURATION_PROP,
	    animationDelay:          ANIMATION_DELAY_PROP,
	    animationIterationCount: ANIMATION_PROP + ANIMATION_ITERATION_COUNT_KEY
	  };
	
	  var DETECT_STAGGER_CSS_PROPERTIES = {
	    transitionDuration:      TRANSITION_DURATION_PROP,
	    transitionDelay:         TRANSITION_DELAY_PROP,
	    animationDuration:       ANIMATION_DURATION_PROP,
	    animationDelay:          ANIMATION_DELAY_PROP
	  };
	
	  function getCssKeyframeDurationStyle(duration) {
	    return [ANIMATION_DURATION_PROP, duration + 's'];
	  }
	
	  function getCssDelayStyle(delay, isKeyframeAnimation) {
	    var prop = isKeyframeAnimation ? ANIMATION_DELAY_PROP : TRANSITION_DELAY_PROP;
	    return [prop, delay + 's'];
	  }
	
	  function computeCssStyles($window, element, properties) {
	    var styles = Object.create(null);
	    var detectedStyles = $window.getComputedStyle(element) || {};
	    forEach(properties, function(formalStyleName, actualStyleName) {
	      var val = detectedStyles[formalStyleName];
	      if (val) {
	        var c = val.charAt(0);
	
	        // only numerical-based values have a negative sign or digit as the first value
	        if (c === '-' || c === '+' || c >= 0) {
	          val = parseMaxTime(val);
	        }
	
	        // by setting this to null in the event that the delay is not set or is set directly as 0
	        // then we can still allow for zegative values to be used later on and not mistake this
	        // value for being greater than any other negative value.
	        if (val === 0) {
	          val = null;
	        }
	        styles[actualStyleName] = val;
	      }
	    });
	
	    return styles;
	  }
	
	  function parseMaxTime(str) {
	    var maxValue = 0;
	    var values = str.split(/\s*,\s*/);
	    forEach(values, function(value) {
	      // it's always safe to consider only second values and omit `ms` values since
	      // getComputedStyle will always handle the conversion for us
	      if (value.charAt(value.length - 1) == 's') {
	        value = value.substring(0, value.length - 1);
	      }
	      value = parseFloat(value) || 0;
	      maxValue = maxValue ? Math.max(value, maxValue) : value;
	    });
	    return maxValue;
	  }
	
	  function truthyTimingValue(val) {
	    return val === 0 || val != null;
	  }
	
	  function getCssTransitionDurationStyle(duration, applyOnlyDuration) {
	    var style = TRANSITION_PROP;
	    var value = duration + 's';
	    if (applyOnlyDuration) {
	      style += DURATION_KEY;
	    } else {
	      value += ' linear all';
	    }
	    return [style, value];
	  }
	
	  function createLocalCacheLookup() {
	    var cache = Object.create(null);
	    return {
	      flush: function() {
	        cache = Object.create(null);
	      },
	
	      count: function(key) {
	        var entry = cache[key];
	        return entry ? entry.total : 0;
	      },
	
	      get: function(key) {
	        var entry = cache[key];
	        return entry && entry.value;
	      },
	
	      put: function(key, value) {
	        if (!cache[key]) {
	          cache[key] = { total: 1, value: value };
	        } else {
	          cache[key].total++;
	        }
	      }
	    };
	  }
	
	// we do not reassign an already present style value since
	// if we detect the style property value again we may be
	// detecting styles that were added via the `from` styles.
	// We make use of `isDefined` here since an empty string
	// or null value (which is what getPropertyValue will return
	// for a non-existing style) will still be marked as a valid
	// value for the style (a falsy value implies that the style
	// is to be removed at the end of the animation). If we had a simple
	// "OR" statement then it would not be enough to catch that.
	  function registerRestorableStyles(backup, node, properties) {
	    forEach(properties, function(prop) {
	      backup[prop] = isDefined(backup[prop])
	          ? backup[prop]
	          : node.style.getPropertyValue(prop);
	    });
	  }
	
	  var $AnimateCssProvider = ['$animateProvider', function($animateProvider) {
	    var gcsLookup = createLocalCacheLookup();
	    var gcsStaggerLookup = createLocalCacheLookup();
	
	    this.$get = ['$window', '$$jqLite', '$$AnimateRunner', '$timeout',
	      '$$forceReflow', '$sniffer', '$$rAFScheduler', '$animate',
	      function($window,   $$jqLite,   $$AnimateRunner,   $timeout,
	               $$forceReflow,   $sniffer,   $$rAFScheduler, $animate) {
	
	        var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
	
	        var parentCounter = 0;
	        function gcsHashFn(node, extraClasses) {
	          var KEY = "$$ngAnimateParentKey";
	          var parentNode = node.parentNode;
	          var parentID = parentNode[KEY] || (parentNode[KEY] = ++parentCounter);
	          return parentID + '-' + node.getAttribute('class') + '-' + extraClasses;
	        }
	
	        function computeCachedCssStyles(node, className, cacheKey, properties) {
	          var timings = gcsLookup.get(cacheKey);
	
	          if (!timings) {
	            timings = computeCssStyles($window, node, properties);
	            if (timings.animationIterationCount === 'infinite') {
	              timings.animationIterationCount = 1;
	            }
	          }
	
	          // we keep putting this in multiple times even though the value and the cacheKey are the same
	          // because we're keeping an interal tally of how many duplicate animations are detected.
	          gcsLookup.put(cacheKey, timings);
	          return timings;
	        }
	
	        function computeCachedCssStaggerStyles(node, className, cacheKey, properties) {
	          var stagger;
	
	          // if we have one or more existing matches of matching elements
	          // containing the same parent + CSS styles (which is how cacheKey works)
	          // then staggering is possible
	          if (gcsLookup.count(cacheKey) > 0) {
	            stagger = gcsStaggerLookup.get(cacheKey);
	
	            if (!stagger) {
	              var staggerClassName = pendClasses(className, '-stagger');
	
	              $$jqLite.addClass(node, staggerClassName);
	
	              stagger = computeCssStyles($window, node, properties);
	
	              // force the conversion of a null value to zero incase not set
	              stagger.animationDuration = Math.max(stagger.animationDuration, 0);
	              stagger.transitionDuration = Math.max(stagger.transitionDuration, 0);
	
	              $$jqLite.removeClass(node, staggerClassName);
	
	              gcsStaggerLookup.put(cacheKey, stagger);
	            }
	          }
	
	          return stagger || {};
	        }
	
	        var cancelLastRAFRequest;
	        var rafWaitQueue = [];
	        function waitUntilQuiet(callback) {
	          rafWaitQueue.push(callback);
	          $$rAFScheduler.waitUntilQuiet(function() {
	            gcsLookup.flush();
	            gcsStaggerLookup.flush();
	
	            // DO NOT REMOVE THIS LINE OR REFACTOR OUT THE `pageWidth` variable.
	            // PLEASE EXAMINE THE `$$forceReflow` service to understand why.
	            var pageWidth = $$forceReflow();
	
	            // we use a for loop to ensure that if the queue is changed
	            // during this looping then it will consider new requests
	            for (var i = 0; i < rafWaitQueue.length; i++) {
	              rafWaitQueue[i](pageWidth);
	            }
	            rafWaitQueue.length = 0;
	          });
	        }
	
	        function computeTimings(node, className, cacheKey) {
	          var timings = computeCachedCssStyles(node, className, cacheKey, DETECT_CSS_PROPERTIES);
	          var aD = timings.animationDelay;
	          var tD = timings.transitionDelay;
	          timings.maxDelay = aD && tD
	              ? Math.max(aD, tD)
	              : (aD || tD);
	          timings.maxDuration = Math.max(
	              timings.animationDuration * timings.animationIterationCount,
	              timings.transitionDuration);
	
	          return timings;
	        }
	
	        return function init(element, options) {
	          var restoreStyles = {};
	          var node = getDomNode(element);
	          if (!node
	              || !node.parentNode
	              || !$animate.enabled()) {
	            return closeAndReturnNoopAnimator();
	          }
	
	          options = prepareAnimationOptions(options);
	
	          var temporaryStyles = [];
	          var classes = element.attr('class');
	          var styles = packageStyles(options);
	          var animationClosed;
	          var animationPaused;
	          var animationCompleted;
	          var runner;
	          var runnerHost;
	          var maxDelay;
	          var maxDelayTime;
	          var maxDuration;
	          var maxDurationTime;
	
	          if (options.duration === 0 || (!$sniffer.animations && !$sniffer.transitions)) {
	            return closeAndReturnNoopAnimator();
	          }
	
	          var method = options.event && isArray(options.event)
	              ? options.event.join(' ')
	              : options.event;
	
	          var isStructural = method && options.structural;
	          var structuralClassName = '';
	          var addRemoveClassName = '';
	
	          if (isStructural) {
	            structuralClassName = pendClasses(method, EVENT_CLASS_PREFIX, true);
	          } else if (method) {
	            structuralClassName = method;
	          }
	
	          if (options.addClass) {
	            addRemoveClassName += pendClasses(options.addClass, ADD_CLASS_SUFFIX);
	          }
	
	          if (options.removeClass) {
	            if (addRemoveClassName.length) {
	              addRemoveClassName += ' ';
	            }
	            addRemoveClassName += pendClasses(options.removeClass, REMOVE_CLASS_SUFFIX);
	          }
	
	          // there may be a situation where a structural animation is combined together
	          // with CSS classes that need to resolve before the animation is computed.
	          // However this means that there is no explicit CSS code to block the animation
	          // from happening (by setting 0s none in the class name). If this is the case
	          // we need to apply the classes before the first rAF so we know to continue if
	          // there actually is a detected transition or keyframe animation
	          if (options.applyClassesEarly && addRemoveClassName.length) {
	            applyAnimationClasses(element, options);
	          }
	
	          var preparationClasses = [structuralClassName, addRemoveClassName].join(' ').trim();
	          var fullClassName = classes + ' ' + preparationClasses;
	          var activeClasses = pendClasses(preparationClasses, ACTIVE_CLASS_SUFFIX);
	          var hasToStyles = styles.to && Object.keys(styles.to).length > 0;
	          var containsKeyframeAnimation = (options.keyframeStyle || '').length > 0;
	
	          // there is no way we can trigger an animation if no styles and
	          // no classes are being applied which would then trigger a transition,
	          // unless there a is raw keyframe value that is applied to the element.
	          if (!containsKeyframeAnimation
	              && !hasToStyles
	              && !preparationClasses) {
	            return closeAndReturnNoopAnimator();
	          }
	
	          var cacheKey, stagger;
	          if (options.stagger > 0) {
	            var staggerVal = parseFloat(options.stagger);
	            stagger = {
	              transitionDelay: staggerVal,
	              animationDelay: staggerVal,
	              transitionDuration: 0,
	              animationDuration: 0
	            };
	          } else {
	            cacheKey = gcsHashFn(node, fullClassName);
	            stagger = computeCachedCssStaggerStyles(node, preparationClasses, cacheKey, DETECT_STAGGER_CSS_PROPERTIES);
	          }
	
	          if (!options.$$skipPreparationClasses) {
	            $$jqLite.addClass(element, preparationClasses);
	          }
	
	          var applyOnlyDuration;
	
	          if (options.transitionStyle) {
	            var transitionStyle = [TRANSITION_PROP, options.transitionStyle];
	            applyInlineStyle(node, transitionStyle);
	            temporaryStyles.push(transitionStyle);
	          }
	
	          if (options.duration >= 0) {
	            applyOnlyDuration = node.style[TRANSITION_PROP].length > 0;
	            var durationStyle = getCssTransitionDurationStyle(options.duration, applyOnlyDuration);
	
	            // we set the duration so that it will be picked up by getComputedStyle later
	            applyInlineStyle(node, durationStyle);
	            temporaryStyles.push(durationStyle);
	          }
	
	          if (options.keyframeStyle) {
	            var keyframeStyle = [ANIMATION_PROP, options.keyframeStyle];
	            applyInlineStyle(node, keyframeStyle);
	            temporaryStyles.push(keyframeStyle);
	          }
	
	          var itemIndex = stagger
	              ? options.staggerIndex >= 0
	              ? options.staggerIndex
	              : gcsLookup.count(cacheKey)
	              : 0;
	
	          var isFirst = itemIndex === 0;
	
	          // this is a pre-emptive way of forcing the setup classes to be added and applied INSTANTLY
	          // without causing any combination of transitions to kick in. By adding a negative delay value
	          // it forces the setup class' transition to end immediately. We later then remove the negative
	          // transition delay to allow for the transition to naturally do it's thing. The beauty here is
	          // that if there is no transition defined then nothing will happen and this will also allow
	          // other transitions to be stacked on top of each other without any chopping them out.
	          if (isFirst && !options.skipBlocking) {
	            blockTransitions(node, SAFE_FAST_FORWARD_DURATION_VALUE);
	          }
	
	          var timings = computeTimings(node, fullClassName, cacheKey);
	          var relativeDelay = timings.maxDelay;
	          maxDelay = Math.max(relativeDelay, 0);
	          maxDuration = timings.maxDuration;
	
	          var flags = {};
	          flags.hasTransitions          = timings.transitionDuration > 0;
	          flags.hasAnimations           = timings.animationDuration > 0;
	          flags.hasTransitionAll        = flags.hasTransitions && timings.transitionProperty == 'all';
	          flags.applyTransitionDuration = hasToStyles && (
	              (flags.hasTransitions && !flags.hasTransitionAll)
	              || (flags.hasAnimations && !flags.hasTransitions));
	          flags.applyAnimationDuration  = options.duration && flags.hasAnimations;
	          flags.applyTransitionDelay    = truthyTimingValue(options.delay) && (flags.applyTransitionDuration || flags.hasTransitions);
	          flags.applyAnimationDelay     = truthyTimingValue(options.delay) && flags.hasAnimations;
	          flags.recalculateTimingStyles = addRemoveClassName.length > 0;
	
	          if (flags.applyTransitionDuration || flags.applyAnimationDuration) {
	            maxDuration = options.duration ? parseFloat(options.duration) : maxDuration;
	
	            if (flags.applyTransitionDuration) {
	              flags.hasTransitions = true;
	              timings.transitionDuration = maxDuration;
	              applyOnlyDuration = node.style[TRANSITION_PROP + PROPERTY_KEY].length > 0;
	              temporaryStyles.push(getCssTransitionDurationStyle(maxDuration, applyOnlyDuration));
	            }
	
	            if (flags.applyAnimationDuration) {
	              flags.hasAnimations = true;
	              timings.animationDuration = maxDuration;
	              temporaryStyles.push(getCssKeyframeDurationStyle(maxDuration));
	            }
	          }
	
	          if (maxDuration === 0 && !flags.recalculateTimingStyles) {
	            return closeAndReturnNoopAnimator();
	          }
	
	          if (options.delay != null) {
	            var delayStyle = parseFloat(options.delay);
	
	            if (flags.applyTransitionDelay) {
	              temporaryStyles.push(getCssDelayStyle(delayStyle));
	            }
	
	            if (flags.applyAnimationDelay) {
	              temporaryStyles.push(getCssDelayStyle(delayStyle, true));
	            }
	          }
	
	          // we need to recalculate the delay value since we used a pre-emptive negative
	          // delay value and the delay value is required for the final event checking. This
	          // property will ensure that this will happen after the RAF phase has passed.
	          if (options.duration == null && timings.transitionDuration > 0) {
	            flags.recalculateTimingStyles = flags.recalculateTimingStyles || isFirst;
	          }
	
	          maxDelayTime = maxDelay * ONE_SECOND;
	          maxDurationTime = maxDuration * ONE_SECOND;
	          if (!options.skipBlocking) {
	            flags.blockTransition = timings.transitionDuration > 0;
	            flags.blockKeyframeAnimation = timings.animationDuration > 0 &&
	                stagger.animationDelay > 0 &&
	                stagger.animationDuration === 0;
	          }
	
	          if (options.from) {
	            if (options.cleanupStyles) {
	              registerRestorableStyles(restoreStyles, node, Object.keys(options.from));
	            }
	            applyAnimationFromStyles(element, options);
	          }
	
	          if (flags.blockTransition || flags.blockKeyframeAnimation) {
	            applyBlocking(maxDuration);
	          } else if (!options.skipBlocking) {
	            blockTransitions(node, false);
	          }
	
	          // TODO(matsko): for 1.5 change this code to have an animator object for better debugging
	          return {
	            $$willAnimate: true,
	            end: endFn,
	            start: function() {
	              if (animationClosed) return;
	
	              runnerHost = {
	                end: endFn,
	                cancel: cancelFn,
	                resume: null, //this will be set during the start() phase
	                pause: null
	              };
	
	              runner = new $$AnimateRunner(runnerHost);
	
	              waitUntilQuiet(start);
	
	              // we don't have access to pause/resume the animation
	              // since it hasn't run yet. AnimateRunner will therefore
	              // set noop functions for resume and pause and they will
	              // later be overridden once the animation is triggered
	              return runner;
	            }
	          };
	
	          function endFn() {
	            close();
	          }
	
	          function cancelFn() {
	            close(true);
	          }
	
	          function close(rejected) { // jshint ignore:line
	            // if the promise has been called already then we shouldn't close
	            // the animation again
	            if (animationClosed || (animationCompleted && animationPaused)) return;
	            animationClosed = true;
	            animationPaused = false;
	
	            if (!options.$$skipPreparationClasses) {
	              $$jqLite.removeClass(element, preparationClasses);
	            }
	            $$jqLite.removeClass(element, activeClasses);
	
	            blockKeyframeAnimations(node, false);
	            blockTransitions(node, false);
	
	            forEach(temporaryStyles, function(entry) {
	              // There is only one way to remove inline style properties entirely from elements.
	              // By using `removeProperty` this works, but we need to convert camel-cased CSS
	              // styles down to hyphenated values.
	              node.style[entry[0]] = '';
	            });
	
	            applyAnimationClasses(element, options);
	            applyAnimationStyles(element, options);
	
	            if (Object.keys(restoreStyles).length) {
	              forEach(restoreStyles, function(value, prop) {
	                value ? node.style.setProperty(prop, value)
	                    : node.style.removeProperty(prop);
	              });
	            }
	
	            // the reason why we have this option is to allow a synchronous closing callback
	            // that is fired as SOON as the animation ends (when the CSS is removed) or if
	            // the animation never takes off at all. A good example is a leave animation since
	            // the element must be removed just after the animation is over or else the element
	            // will appear on screen for one animation frame causing an overbearing flicker.
	            if (options.onDone) {
	              options.onDone();
	            }
	
	            // if the preparation function fails then the promise is not setup
	            if (runner) {
	              runner.complete(!rejected);
	            }
	          }
	
	          function applyBlocking(duration) {
	            if (flags.blockTransition) {
	              blockTransitions(node, duration);
	            }
	
	            if (flags.blockKeyframeAnimation) {
	              blockKeyframeAnimations(node, !!duration);
	            }
	          }
	
	          function closeAndReturnNoopAnimator() {
	            runner = new $$AnimateRunner({
	              end: endFn,
	              cancel: cancelFn
	            });
	
	            // should flush the cache animation
	            waitUntilQuiet(noop);
	            close();
	
	            return {
	              $$willAnimate: false,
	              start: function() {
	                return runner;
	              },
	              end: endFn
	            };
	          }
	
	          function start() {
	            if (animationClosed) return;
	            if (!node.parentNode) {
	              close();
	              return;
	            }
	
	            var startTime, events = [];
	
	            // even though we only pause keyframe animations here the pause flag
	            // will still happen when transitions are used. Only the transition will
	            // not be paused since that is not possible. If the animation ends when
	            // paused then it will not complete until unpaused or cancelled.
	            var playPause = function(playAnimation) {
	              if (!animationCompleted) {
	                animationPaused = !playAnimation;
	                if (timings.animationDuration) {
	                  var value = blockKeyframeAnimations(node, animationPaused);
	                  animationPaused
	                      ? temporaryStyles.push(value)
	                      : removeFromArray(temporaryStyles, value);
	                }
	              } else if (animationPaused && playAnimation) {
	                animationPaused = false;
	                close();
	              }
	            };
	
	            // checking the stagger duration prevents an accidently cascade of the CSS delay style
	            // being inherited from the parent. If the transition duration is zero then we can safely
	            // rely that the delay value is an intential stagger delay style.
	            var maxStagger = itemIndex > 0
	                && ((timings.transitionDuration && stagger.transitionDuration === 0) ||
	                (timings.animationDuration && stagger.animationDuration === 0))
	                && Math.max(stagger.animationDelay, stagger.transitionDelay);
	            if (maxStagger) {
	              $timeout(triggerAnimationStart,
	                  Math.floor(maxStagger * itemIndex * ONE_SECOND),
	                  false);
	            } else {
	              triggerAnimationStart();
	            }
	
	            // this will decorate the existing promise runner with pause/resume methods
	            runnerHost.resume = function() {
	              playPause(true);
	            };
	
	            runnerHost.pause = function() {
	              playPause(false);
	            };
	
	            function triggerAnimationStart() {
	              // just incase a stagger animation kicks in when the animation
	              // itself was cancelled entirely
	              if (animationClosed) return;
	
	              applyBlocking(false);
	
	              forEach(temporaryStyles, function(entry) {
	                var key = entry[0];
	                var value = entry[1];
	                node.style[key] = value;
	              });
	
	              applyAnimationClasses(element, options);
	              $$jqLite.addClass(element, activeClasses);
	
	              if (flags.recalculateTimingStyles) {
	                fullClassName = node.className + ' ' + preparationClasses;
	                cacheKey = gcsHashFn(node, fullClassName);
	
	                timings = computeTimings(node, fullClassName, cacheKey);
	                relativeDelay = timings.maxDelay;
	                maxDelay = Math.max(relativeDelay, 0);
	                maxDuration = timings.maxDuration;
	
	                if (maxDuration === 0) {
	                  close();
	                  return;
	                }
	
	                flags.hasTransitions = timings.transitionDuration > 0;
	                flags.hasAnimations = timings.animationDuration > 0;
	              }
	
	              if (flags.applyAnimationDelay) {
	                relativeDelay = typeof options.delay !== "boolean" && truthyTimingValue(options.delay)
	                    ? parseFloat(options.delay)
	                    : relativeDelay;
	
	                maxDelay = Math.max(relativeDelay, 0);
	                timings.animationDelay = relativeDelay;
	                delayStyle = getCssDelayStyle(relativeDelay, true);
	                temporaryStyles.push(delayStyle);
	                node.style[delayStyle[0]] = delayStyle[1];
	              }
	
	              maxDelayTime = maxDelay * ONE_SECOND;
	              maxDurationTime = maxDuration * ONE_SECOND;
	
	              if (options.easing) {
	                var easeProp, easeVal = options.easing;
	                if (flags.hasTransitions) {
	                  easeProp = TRANSITION_PROP + TIMING_KEY;
	                  temporaryStyles.push([easeProp, easeVal]);
	                  node.style[easeProp] = easeVal;
	                }
	                if (flags.hasAnimations) {
	                  easeProp = ANIMATION_PROP + TIMING_KEY;
	                  temporaryStyles.push([easeProp, easeVal]);
	                  node.style[easeProp] = easeVal;
	                }
	              }
	
	              if (timings.transitionDuration) {
	                events.push(TRANSITIONEND_EVENT);
	              }
	
	              if (timings.animationDuration) {
	                events.push(ANIMATIONEND_EVENT);
	              }
	
	              startTime = Date.now();
	              var timerTime = maxDelayTime + CLOSING_TIME_BUFFER * maxDurationTime;
	              var endTime = startTime + timerTime;
	
	              var animationsData = element.data(ANIMATE_TIMER_KEY) || [];
	              var setupFallbackTimer = true;
	              if (animationsData.length) {
	                var currentTimerData = animationsData[0];
	                setupFallbackTimer = endTime > currentTimerData.expectedEndTime;
	                if (setupFallbackTimer) {
	                  $timeout.cancel(currentTimerData.timer);
	                } else {
	                  animationsData.push(close);
	                }
	              }
	
	              if (setupFallbackTimer) {
	                var timer = $timeout(onAnimationExpired, timerTime, false);
	                animationsData[0] = {
	                  timer: timer,
	                  expectedEndTime: endTime
	                };
	                animationsData.push(close);
	                element.data(ANIMATE_TIMER_KEY, animationsData);
	              }
	
	              element.on(events.join(' '), onAnimationProgress);
	              if (options.to) {
	                if (options.cleanupStyles) {
	                  registerRestorableStyles(restoreStyles, node, Object.keys(options.to));
	                }
	                applyAnimationToStyles(element, options);
	              }
	            }
	
	            function onAnimationExpired() {
	              var animationsData = element.data(ANIMATE_TIMER_KEY);
	
	              // this will be false in the event that the element was
	              // removed from the DOM (via a leave animation or something
	              // similar)
	              if (animationsData) {
	                for (var i = 1; i < animationsData.length; i++) {
	                  animationsData[i]();
	                }
	                element.removeData(ANIMATE_TIMER_KEY);
	              }
	            }
	
	            function onAnimationProgress(event) {
	              event.stopPropagation();
	              var ev = event.originalEvent || event;
	              var timeStamp = ev.$manualTimeStamp || ev.timeStamp || Date.now();
	
	              /* Firefox (or possibly just Gecko) likes to not round values up
	               * when a ms measurement is used for the animation */
	              var elapsedTime = parseFloat(ev.elapsedTime.toFixed(ELAPSED_TIME_MAX_DECIMAL_PLACES));
	
	              /* $manualTimeStamp is a mocked timeStamp value which is set
	               * within browserTrigger(). This is only here so that tests can
	               * mock animations properly. Real events fallback to event.timeStamp,
	               * or, if they don't, then a timeStamp is automatically created for them.
	               * We're checking to see if the timeStamp surpasses the expected delay,
	               * but we're using elapsedTime instead of the timeStamp on the 2nd
	               * pre-condition since animations sometimes close off early */
	              if (Math.max(timeStamp - startTime, 0) >= maxDelayTime && elapsedTime >= maxDuration) {
	                // we set this flag to ensure that if the transition is paused then, when resumed,
	                // the animation will automatically close itself since transitions cannot be paused.
	                animationCompleted = true;
	                close();
	              }
	            }
	          }
	        };
	      }];
	  }];
	
	  var $$AnimateCssDriverProvider = ['$$animationProvider', function($$animationProvider) {
	    $$animationProvider.drivers.push('$$animateCssDriver');
	
	    var NG_ANIMATE_SHIM_CLASS_NAME = 'ng-animate-shim';
	    var NG_ANIMATE_ANCHOR_CLASS_NAME = 'ng-anchor';
	
	    var NG_OUT_ANCHOR_CLASS_NAME = 'ng-anchor-out';
	    var NG_IN_ANCHOR_CLASS_NAME = 'ng-anchor-in';
	
	    function isDocumentFragment(node) {
	      return node.parentNode && node.parentNode.nodeType === 11;
	    }
	
	    this.$get = ['$animateCss', '$rootScope', '$$AnimateRunner', '$rootElement', '$sniffer', '$$jqLite', '$document',
	      function($animateCss,   $rootScope,   $$AnimateRunner,   $rootElement,   $sniffer,   $$jqLite,   $document) {
	
	        // only browsers that support these properties can render animations
	        if (!$sniffer.animations && !$sniffer.transitions) return noop;
	
	        var bodyNode = $document[0].body;
	        var rootNode = getDomNode($rootElement);
	
	        var rootBodyElement = jqLite(
	            // this is to avoid using something that exists outside of the body
	            // we also special case the doc fragement case because our unit test code
	            // appends the $rootElement to the body after the app has been bootstrapped
	            isDocumentFragment(rootNode) || bodyNode.contains(rootNode) ? rootNode : bodyNode
	        );
	
	        var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
	
	        return function initDriverFn(animationDetails) {
	          return animationDetails.from && animationDetails.to
	              ? prepareFromToAnchorAnimation(animationDetails.from,
	              animationDetails.to,
	              animationDetails.classes,
	              animationDetails.anchors)
	              : prepareRegularAnimation(animationDetails);
	        };
	
	        function filterCssClasses(classes) {
	          //remove all the `ng-` stuff
	          return classes.replace(/\bng-\S+\b/g, '');
	        }
	
	        function getUniqueValues(a, b) {
	          if (isString(a)) a = a.split(' ');
	          if (isString(b)) b = b.split(' ');
	          return a.filter(function(val) {
	            return b.indexOf(val) === -1;
	          }).join(' ');
	        }
	
	        function prepareAnchoredAnimation(classes, outAnchor, inAnchor) {
	          var clone = jqLite(getDomNode(outAnchor).cloneNode(true));
	          var startingClasses = filterCssClasses(getClassVal(clone));
	
	          outAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);
	          inAnchor.addClass(NG_ANIMATE_SHIM_CLASS_NAME);
	
	          clone.addClass(NG_ANIMATE_ANCHOR_CLASS_NAME);
	
	          rootBodyElement.append(clone);
	
	          var animatorIn, animatorOut = prepareOutAnimation();
	
	          // the user may not end up using the `out` animation and
	          // only making use of the `in` animation or vice-versa.
	          // In either case we should allow this and not assume the
	          // animation is over unless both animations are not used.
	          if (!animatorOut) {
	            animatorIn = prepareInAnimation();
	            if (!animatorIn) {
	              return end();
	            }
	          }
	
	          var startingAnimator = animatorOut || animatorIn;
	
	          return {
	            start: function() {
	              var runner;
	
	              var currentAnimation = startingAnimator.start();
	              currentAnimation.done(function() {
	                currentAnimation = null;
	                if (!animatorIn) {
	                  animatorIn = prepareInAnimation();
	                  if (animatorIn) {
	                    currentAnimation = animatorIn.start();
	                    currentAnimation.done(function() {
	                      currentAnimation = null;
	                      end();
	                      runner.complete();
	                    });
	                    return currentAnimation;
	                  }
	                }
	                // in the event that there is no `in` animation
	                end();
	                runner.complete();
	              });
	
	              runner = new $$AnimateRunner({
	                end: endFn,
	                cancel: endFn
	              });
	
	              return runner;
	
	              function endFn() {
	                if (currentAnimation) {
	                  currentAnimation.end();
	                }
	              }
	            }
	          };
	
	          function calculateAnchorStyles(anchor) {
	            var styles = {};
	
	            var coords = getDomNode(anchor).getBoundingClientRect();
	
	            // we iterate directly since safari messes up and doesn't return
	            // all the keys for the coods object when iterated
	            forEach(['width','height','top','left'], function(key) {
	              var value = coords[key];
	              switch (key) {
	                case 'top':
	                  value += bodyNode.scrollTop;
	                  break;
	                case 'left':
	                  value += bodyNode.scrollLeft;
	                  break;
	              }
	              styles[key] = Math.floor(value) + 'px';
	            });
	            return styles;
	          }
	
	          function prepareOutAnimation() {
	            var animator = $animateCss(clone, {
	              addClass: NG_OUT_ANCHOR_CLASS_NAME,
	              delay: true,
	              from: calculateAnchorStyles(outAnchor)
	            });
	
	            // read the comment within `prepareRegularAnimation` to understand
	            // why this check is necessary
	            return animator.$$willAnimate ? animator : null;
	          }
	
	          function getClassVal(element) {
	            return element.attr('class') || '';
	          }
	
	          function prepareInAnimation() {
	            var endingClasses = filterCssClasses(getClassVal(inAnchor));
	            var toAdd = getUniqueValues(endingClasses, startingClasses);
	            var toRemove = getUniqueValues(startingClasses, endingClasses);
	
	            var animator = $animateCss(clone, {
	              to: calculateAnchorStyles(inAnchor),
	              addClass: NG_IN_ANCHOR_CLASS_NAME + ' ' + toAdd,
	              removeClass: NG_OUT_ANCHOR_CLASS_NAME + ' ' + toRemove,
	              delay: true
	            });
	
	            // read the comment within `prepareRegularAnimation` to understand
	            // why this check is necessary
	            return animator.$$willAnimate ? animator : null;
	          }
	
	          function end() {
	            clone.remove();
	            outAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
	            inAnchor.removeClass(NG_ANIMATE_SHIM_CLASS_NAME);
	          }
	        }
	
	        function prepareFromToAnchorAnimation(from, to, classes, anchors) {
	          var fromAnimation = prepareRegularAnimation(from, noop);
	          var toAnimation = prepareRegularAnimation(to, noop);
	
	          var anchorAnimations = [];
	          forEach(anchors, function(anchor) {
	            var outElement = anchor['out'];
	            var inElement = anchor['in'];
	            var animator = prepareAnchoredAnimation(classes, outElement, inElement);
	            if (animator) {
	              anchorAnimations.push(animator);
	            }
	          });
	
	          // no point in doing anything when there are no elements to animate
	          if (!fromAnimation && !toAnimation && anchorAnimations.length === 0) return;
	
	          return {
	            start: function() {
	              var animationRunners = [];
	
	              if (fromAnimation) {
	                animationRunners.push(fromAnimation.start());
	              }
	
	              if (toAnimation) {
	                animationRunners.push(toAnimation.start());
	              }
	
	              forEach(anchorAnimations, function(animation) {
	                animationRunners.push(animation.start());
	              });
	
	              var runner = new $$AnimateRunner({
	                end: endFn,
	                cancel: endFn // CSS-driven animations cannot be cancelled, only ended
	              });
	
	              $$AnimateRunner.all(animationRunners, function(status) {
	                runner.complete(status);
	              });
	
	              return runner;
	
	              function endFn() {
	                forEach(animationRunners, function(runner) {
	                  runner.end();
	                });
	              }
	            }
	          };
	        }
	
	        function prepareRegularAnimation(animationDetails) {
	          var element = animationDetails.element;
	          var options = animationDetails.options || {};
	
	          if (animationDetails.structural) {
	            options.event = animationDetails.event;
	            options.structural = true;
	            options.applyClassesEarly = true;
	
	            // we special case the leave animation since we want to ensure that
	            // the element is removed as soon as the animation is over. Otherwise
	            // a flicker might appear or the element may not be removed at all
	            if (animationDetails.event === 'leave') {
	              options.onDone = options.domOperation;
	            }
	          }
	
	          // We assign the preparationClasses as the actual animation event since
	          // the internals of $animateCss will just suffix the event token values
	          // with `-active` to trigger the animation.
	          if (options.preparationClasses) {
	            options.event = concatWithSpace(options.event, options.preparationClasses);
	          }
	
	          var animator = $animateCss(element, options);
	
	          // the driver lookup code inside of $$animation attempts to spawn a
	          // driver one by one until a driver returns a.$$willAnimate animator object.
	          // $animateCss will always return an object, however, it will pass in
	          // a flag as a hint as to whether an animation was detected or not
	          return animator.$$willAnimate ? animator : null;
	        }
	      }];
	  }];
	
	// TODO(matsko): use caching here to speed things up for detection
	// TODO(matsko): add documentation
	//  by the time...
	
	  var $$AnimateJsProvider = ['$animateProvider', function($animateProvider) {
	    this.$get = ['$injector', '$$AnimateRunner', '$$jqLite',
	      function($injector,   $$AnimateRunner,   $$jqLite) {
	
	        var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
	        // $animateJs(element, 'enter');
	        return function(element, event, classes, options) {
	          // the `classes` argument is optional and if it is not used
	          // then the classes will be resolved from the element's className
	          // property as well as options.addClass/options.removeClass.
	          if (arguments.length === 3 && isObject(classes)) {
	            options = classes;
	            classes = null;
	          }
	
	          options = prepareAnimationOptions(options);
	          if (!classes) {
	            classes = element.attr('class') || '';
	            if (options.addClass) {
	              classes += ' ' + options.addClass;
	            }
	            if (options.removeClass) {
	              classes += ' ' + options.removeClass;
	            }
	          }
	
	          var classesToAdd = options.addClass;
	          var classesToRemove = options.removeClass;
	
	          // the lookupAnimations function returns a series of animation objects that are
	          // matched up with one or more of the CSS classes. These animation objects are
	          // defined via the module.animation factory function. If nothing is detected then
	          // we don't return anything which then makes $animation query the next driver.
	          var animations = lookupAnimations(classes);
	          var before, after;
	          if (animations.length) {
	            var afterFn, beforeFn;
	            if (event == 'leave') {
	              beforeFn = 'leave';
	              afterFn = 'afterLeave'; // TODO(matsko): get rid of this
	            } else {
	              beforeFn = 'before' + event.charAt(0).toUpperCase() + event.substr(1);
	              afterFn = event;
	            }
	
	            if (event !== 'enter' && event !== 'move') {
	              before = packageAnimations(element, event, options, animations, beforeFn);
	            }
	            after  = packageAnimations(element, event, options, animations, afterFn);
	          }
	
	          // no matching animations
	          if (!before && !after) return;
	
	          function applyOptions() {
	            options.domOperation();
	            applyAnimationClasses(element, options);
	          }
	
	          return {
	            start: function() {
	              var closeActiveAnimations;
	              var chain = [];
	
	              if (before) {
	                chain.push(function(fn) {
	                  closeActiveAnimations = before(fn);
	                });
	              }
	
	              if (chain.length) {
	                chain.push(function(fn) {
	                  applyOptions();
	                  fn(true);
	                });
	              } else {
	                applyOptions();
	              }
	
	              if (after) {
	                chain.push(function(fn) {
	                  closeActiveAnimations = after(fn);
	                });
	              }
	
	              var animationClosed = false;
	              var runner = new $$AnimateRunner({
	                end: function() {
	                  endAnimations();
	                },
	                cancel: function() {
	                  endAnimations(true);
	                }
	              });
	
	              $$AnimateRunner.chain(chain, onComplete);
	              return runner;
	
	              function onComplete(success) {
	                animationClosed = true;
	                applyOptions();
	                applyAnimationStyles(element, options);
	                runner.complete(success);
	              }
	
	              function endAnimations(cancelled) {
	                if (!animationClosed) {
	                  (closeActiveAnimations || noop)(cancelled);
	                  onComplete(cancelled);
	                }
	              }
	            }
	          };
	
	          function executeAnimationFn(fn, element, event, options, onDone) {
	            var args;
	            switch (event) {
	              case 'animate':
	                args = [element, options.from, options.to, onDone];
	                break;
	
	              case 'setClass':
	                args = [element, classesToAdd, classesToRemove, onDone];
	                break;
	
	              case 'addClass':
	                args = [element, classesToAdd, onDone];
	                break;
	
	              case 'removeClass':
	                args = [element, classesToRemove, onDone];
	                break;
	
	              default:
	                args = [element, onDone];
	                break;
	            }
	
	            args.push(options);
	
	            var value = fn.apply(fn, args);
	            if (value) {
	              if (isFunction(value.start)) {
	                value = value.start();
	              }
	
	              if (value instanceof $$AnimateRunner) {
	                value.done(onDone);
	              } else if (isFunction(value)) {
	                // optional onEnd / onCancel callback
	                return value;
	              }
	            }
	
	            return noop;
	          }
	
	          function groupEventedAnimations(element, event, options, animations, fnName) {
	            var operations = [];
	            forEach(animations, function(ani) {
	              var animation = ani[fnName];
	              if (!animation) return;
	
	              // note that all of these animations will run in parallel
	              operations.push(function() {
	                var runner;
	                var endProgressCb;
	
	                var resolved = false;
	                var onAnimationComplete = function(rejected) {
	                  if (!resolved) {
	                    resolved = true;
	                    (endProgressCb || noop)(rejected);
	                    runner.complete(!rejected);
	                  }
	                };
	
	                runner = new $$AnimateRunner({
	                  end: function() {
	                    onAnimationComplete();
	                  },
	                  cancel: function() {
	                    onAnimationComplete(true);
	                  }
	                });
	
	                endProgressCb = executeAnimationFn(animation, element, event, options, function(result) {
	                  var cancelled = result === false;
	                  onAnimationComplete(cancelled);
	                });
	
	                return runner;
	              });
	            });
	
	            return operations;
	          }
	
	          function packageAnimations(element, event, options, animations, fnName) {
	            var operations = groupEventedAnimations(element, event, options, animations, fnName);
	            if (operations.length === 0) {
	              var a,b;
	              if (fnName === 'beforeSetClass') {
	                a = groupEventedAnimations(element, 'removeClass', options, animations, 'beforeRemoveClass');
	                b = groupEventedAnimations(element, 'addClass', options, animations, 'beforeAddClass');
	              } else if (fnName === 'setClass') {
	                a = groupEventedAnimations(element, 'removeClass', options, animations, 'removeClass');
	                b = groupEventedAnimations(element, 'addClass', options, animations, 'addClass');
	              }
	
	              if (a) {
	                operations = operations.concat(a);
	              }
	              if (b) {
	                operations = operations.concat(b);
	              }
	            }
	
	            if (operations.length === 0) return;
	
	            // TODO(matsko): add documentation
	            return function startAnimation(callback) {
	              var runners = [];
	              if (operations.length) {
	                forEach(operations, function(animateFn) {
	                  runners.push(animateFn());
	                });
	              }
	
	              runners.length ? $$AnimateRunner.all(runners, callback) : callback();
	
	              return function endFn(reject) {
	                forEach(runners, function(runner) {
	                  reject ? runner.cancel() : runner.end();
	                });
	              };
	            };
	          }
	        };
	
	        function lookupAnimations(classes) {
	          classes = isArray(classes) ? classes : classes.split(' ');
	          var matches = [], flagMap = {};
	          for (var i=0; i < classes.length; i++) {
	            var klass = classes[i],
	                animationFactory = $animateProvider.$$registeredAnimations[klass];
	            if (animationFactory && !flagMap[klass]) {
	              matches.push($injector.get(animationFactory));
	              flagMap[klass] = true;
	            }
	          }
	          return matches;
	        }
	      }];
	  }];
	
	  var $$AnimateJsDriverProvider = ['$$animationProvider', function($$animationProvider) {
	    $$animationProvider.drivers.push('$$animateJsDriver');
	    this.$get = ['$$animateJs', '$$AnimateRunner', function($$animateJs, $$AnimateRunner) {
	      return function initDriverFn(animationDetails) {
	        if (animationDetails.from && animationDetails.to) {
	          var fromAnimation = prepareAnimation(animationDetails.from);
	          var toAnimation = prepareAnimation(animationDetails.to);
	          if (!fromAnimation && !toAnimation) return;
	
	          return {
	            start: function() {
	              var animationRunners = [];
	
	              if (fromAnimation) {
	                animationRunners.push(fromAnimation.start());
	              }
	
	              if (toAnimation) {
	                animationRunners.push(toAnimation.start());
	              }
	
	              $$AnimateRunner.all(animationRunners, done);
	
	              var runner = new $$AnimateRunner({
	                end: endFnFactory(),
	                cancel: endFnFactory()
	              });
	
	              return runner;
	
	              function endFnFactory() {
	                return function() {
	                  forEach(animationRunners, function(runner) {
	                    // at this point we cannot cancel animations for groups just yet. 1.5+
	                    runner.end();
	                  });
	                };
	              }
	
	              function done(status) {
	                runner.complete(status);
	              }
	            }
	          };
	        } else {
	          return prepareAnimation(animationDetails);
	        }
	      };
	
	      function prepareAnimation(animationDetails) {
	        // TODO(matsko): make sure to check for grouped animations and delegate down to normal animations
	        var element = animationDetails.element;
	        var event = animationDetails.event;
	        var options = animationDetails.options;
	        var classes = animationDetails.classes;
	        return $$animateJs(element, event, classes, options);
	      }
	    }];
	  }];
	
	  var NG_ANIMATE_ATTR_NAME = 'data-ng-animate';
	  var NG_ANIMATE_PIN_DATA = '$ngAnimatePin';
	  var $$AnimateQueueProvider = ['$animateProvider', function($animateProvider) {
	    var PRE_DIGEST_STATE = 1;
	    var RUNNING_STATE = 2;
	
	    var rules = this.rules = {
	      skip: [],
	      cancel: [],
	      join: []
	    };
	
	    function isAllowed(ruleType, element, currentAnimation, previousAnimation) {
	      return rules[ruleType].some(function(fn) {
	        return fn(element, currentAnimation, previousAnimation);
	      });
	    }
	
	    function hasAnimationClasses(options, and) {
	      options = options || {};
	      var a = (options.addClass || '').length > 0;
	      var b = (options.removeClass || '').length > 0;
	      return and ? a && b : a || b;
	    }
	
	    rules.join.push(function(element, newAnimation, currentAnimation) {
	      // if the new animation is class-based then we can just tack that on
	      return !newAnimation.structural && hasAnimationClasses(newAnimation.options);
	    });
	
	    rules.skip.push(function(element, newAnimation, currentAnimation) {
	      // there is no need to animate anything if no classes are being added and
	      // there is no structural animation that will be triggered
	      return !newAnimation.structural && !hasAnimationClasses(newAnimation.options);
	    });
	
	    rules.skip.push(function(element, newAnimation, currentAnimation) {
	      // why should we trigger a new structural animation if the element will
	      // be removed from the DOM anyway?
	      return currentAnimation.event == 'leave' && newAnimation.structural;
	    });
	
	    rules.skip.push(function(element, newAnimation, currentAnimation) {
	      // if there is an ongoing current animation then don't even bother running the class-based animation
	      return currentAnimation.structural && currentAnimation.state === RUNNING_STATE && !newAnimation.structural;
	    });
	
	    rules.cancel.push(function(element, newAnimation, currentAnimation) {
	      // there can never be two structural animations running at the same time
	      return currentAnimation.structural && newAnimation.structural;
	    });
	
	    rules.cancel.push(function(element, newAnimation, currentAnimation) {
	      // if the previous animation is already running, but the new animation will
	      // be triggered, but the new animation is structural
	      return currentAnimation.state === RUNNING_STATE && newAnimation.structural;
	    });
	
	    rules.cancel.push(function(element, newAnimation, currentAnimation) {
	      var nO = newAnimation.options;
	      var cO = currentAnimation.options;
	
	      // if the exact same CSS class is added/removed then it's safe to cancel it
	      return (nO.addClass && nO.addClass === cO.removeClass) || (nO.removeClass && nO.removeClass === cO.addClass);
	    });
	
	    this.$get = ['$$rAF', '$rootScope', '$rootElement', '$document', '$$HashMap',
	      '$$animation', '$$AnimateRunner', '$templateRequest', '$$jqLite', '$$forceReflow',
	      function($$rAF,   $rootScope,   $rootElement,   $document,   $$HashMap,
	               $$animation,   $$AnimateRunner,   $templateRequest,   $$jqLite,   $$forceReflow) {
	
	        var activeAnimationsLookup = new $$HashMap();
	        var disabledElementsLookup = new $$HashMap();
	        var animationsEnabled = null;
	
	        function postDigestTaskFactory() {
	          var postDigestCalled = false;
	          return function(fn) {
	            // we only issue a call to postDigest before
	            // it has first passed. This prevents any callbacks
	            // from not firing once the animation has completed
	            // since it will be out of the digest cycle.
	            if (postDigestCalled) {
	              fn();
	            } else {
	              $rootScope.$$postDigest(function() {
	                postDigestCalled = true;
	                fn();
	              });
	            }
	          };
	        }
	
	        // Wait until all directive and route-related templates are downloaded and
	        // compiled. The $templateRequest.totalPendingRequests variable keeps track of
	        // all of the remote templates being currently downloaded. If there are no
	        // templates currently downloading then the watcher will still fire anyway.
	        var deregisterWatch = $rootScope.$watch(
	            function() { return $templateRequest.totalPendingRequests === 0; },
	            function(isEmpty) {
	              if (!isEmpty) return;
	              deregisterWatch();
	
	              // Now that all templates have been downloaded, $animate will wait until
	              // the post digest queue is empty before enabling animations. By having two
	              // calls to $postDigest calls we can ensure that the flag is enabled at the
	              // very end of the post digest queue. Since all of the animations in $animate
	              // use $postDigest, it's important that the code below executes at the end.
	              // This basically means that the page is fully downloaded and compiled before
	              // any animations are triggered.
	              $rootScope.$$postDigest(function() {
	                $rootScope.$$postDigest(function() {
	                  // we check for null directly in the event that the application already called
	                  // .enabled() with whatever arguments that it provided it with
	                  if (animationsEnabled === null) {
	                    animationsEnabled = true;
	                  }
	                });
	              });
	            }
	        );
	
	        var callbackRegistry = {};
	
	        // remember that the classNameFilter is set during the provider/config
	        // stage therefore we can optimize here and setup a helper function
	        var classNameFilter = $animateProvider.classNameFilter();
	        var isAnimatableClassName = !classNameFilter
	            ? function() { return true; }
	            : function(className) {
	          return classNameFilter.test(className);
	        };
	
	        var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
	
	        function normalizeAnimationOptions(element, options) {
	          return mergeAnimationOptions(element, options, {});
	        }
	
	        function findCallbacks(element, event) {
	          var targetNode = getDomNode(element);
	
	          var matches = [];
	          var entries = callbackRegistry[event];
	          if (entries) {
	            forEach(entries, function(entry) {
	              if (entry.node.contains(targetNode)) {
	                matches.push(entry.callback);
	              }
	            });
	          }
	
	          return matches;
	        }
	
	        return {
	          on: function(event, container, callback) {
	            var node = extractElementNode(container);
	            callbackRegistry[event] = callbackRegistry[event] || [];
	            callbackRegistry[event].push({
	              node: node,
	              callback: callback
	            });
	          },
	
	          off: function(event, container, callback) {
	            var entries = callbackRegistry[event];
	            if (!entries) return;
	
	            callbackRegistry[event] = arguments.length === 1
	                ? null
	                : filterFromRegistry(entries, container, callback);
	
	            function filterFromRegistry(list, matchContainer, matchCallback) {
	              var containerNode = extractElementNode(matchContainer);
	              return list.filter(function(entry) {
	                var isMatch = entry.node === containerNode &&
	                    (!matchCallback || entry.callback === matchCallback);
	                return !isMatch;
	              });
	            }
	          },
	
	          pin: function(element, parentElement) {
	            assertArg(isElement(element), 'element', 'not an element');
	            assertArg(isElement(parentElement), 'parentElement', 'not an element');
	            element.data(NG_ANIMATE_PIN_DATA, parentElement);
	          },
	
	          push: function(element, event, options, domOperation) {
	            options = options || {};
	            options.domOperation = domOperation;
	            return queueAnimation(element, event, options);
	          },
	
	          // this method has four signatures:
	          //  () - global getter
	          //  (bool) - global setter
	          //  (element) - element getter
	          //  (element, bool) - element setter<F37>
	          enabled: function(element, bool) {
	            var argCount = arguments.length;
	
	            if (argCount === 0) {
	              // () - Global getter
	              bool = !!animationsEnabled;
	            } else {
	              var hasElement = isElement(element);
	
	              if (!hasElement) {
	                // (bool) - Global setter
	                bool = animationsEnabled = !!element;
	              } else {
	                var node = getDomNode(element);
	                var recordExists = disabledElementsLookup.get(node);
	
	                if (argCount === 1) {
	                  // (element) - Element getter
	                  bool = !recordExists;
	                } else {
	                  // (element, bool) - Element setter
	                  bool = !!bool;
	                  if (!bool) {
	                    disabledElementsLookup.put(node, true);
	                  } else if (recordExists) {
	                    disabledElementsLookup.remove(node);
	                  }
	                }
	              }
	            }
	
	            return bool;
	          }
	        };
	
	        function queueAnimation(element, event, options) {
	          var node, parent;
	          element = stripCommentsFromElement(element);
	          if (element) {
	            node = getDomNode(element);
	            parent = element.parent();
	          }
	
	          options = prepareAnimationOptions(options);
	
	          // we create a fake runner with a working promise.
	          // These methods will become available after the digest has passed
	          var runner = new $$AnimateRunner();
	
	          // this is used to trigger callbacks in postDigest mode
	          var runInNextPostDigestOrNow = postDigestTaskFactory();
	
	          if (isArray(options.addClass)) {
	            options.addClass = options.addClass.join(' ');
	          }
	
	          if (options.addClass && !isString(options.addClass)) {
	            options.addClass = null;
	          }
	
	          if (isArray(options.removeClass)) {
	            options.removeClass = options.removeClass.join(' ');
	          }
	
	          if (options.removeClass && !isString(options.removeClass)) {
	            options.removeClass = null;
	          }
	
	          if (options.from && !isObject(options.from)) {
	            options.from = null;
	          }
	
	          if (options.to && !isObject(options.to)) {
	            options.to = null;
	          }
	
	          // there are situations where a directive issues an animation for
	          // a jqLite wrapper that contains only comment nodes... If this
	          // happens then there is no way we can perform an animation
	          if (!node) {
	            close();
	            return runner;
	          }
	
	          var className = [node.className, options.addClass, options.removeClass].join(' ');
	          if (!isAnimatableClassName(className)) {
	            close();
	            return runner;
	          }
	
	          var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;
	
	          // this is a hard disable of all animations for the application or on
	          // the element itself, therefore  there is no need to continue further
	          // past this point if not enabled
	          var skipAnimations = !animationsEnabled || disabledElementsLookup.get(node);
	          var existingAnimation = (!skipAnimations && activeAnimationsLookup.get(node)) || {};
	          var hasExistingAnimation = !!existingAnimation.state;
	
	          // there is no point in traversing the same collection of parent ancestors if a followup
	          // animation will be run on the same element that already did all that checking work
	          if (!skipAnimations && (!hasExistingAnimation || existingAnimation.state != PRE_DIGEST_STATE)) {
	            skipAnimations = !areAnimationsAllowed(element, parent, event);
	          }
	
	          if (skipAnimations) {
	            close();
	            return runner;
	          }
	
	          if (isStructural) {
	            closeChildAnimations(element);
	          }
	
	          var newAnimation = {
	            structural: isStructural,
	            element: element,
	            event: event,
	            close: close,
	            options: options,
	            runner: runner
	          };
	
	          if (hasExistingAnimation) {
	            var skipAnimationFlag = isAllowed('skip', element, newAnimation, existingAnimation);
	            if (skipAnimationFlag) {
	              if (existingAnimation.state === RUNNING_STATE) {
	                close();
	                return runner;
	              } else {
	                mergeAnimationOptions(element, existingAnimation.options, options);
	                return existingAnimation.runner;
	              }
	            }
	
	            var cancelAnimationFlag = isAllowed('cancel', element, newAnimation, existingAnimation);
	            if (cancelAnimationFlag) {
	              if (existingAnimation.state === RUNNING_STATE) {
	                // this will end the animation right away and it is safe
	                // to do so since the animation is already running and the
	                // runner callback code will run in async
	                existingAnimation.runner.end();
	              } else if (existingAnimation.structural) {
	                // this means that the animation is queued into a digest, but
	                // hasn't started yet. Therefore it is safe to run the close
	                // method which will call the runner methods in async.
	                existingAnimation.close();
	              } else {
	                // this will merge the new animation options into existing animation options
	                mergeAnimationOptions(element, existingAnimation.options, newAnimation.options);
	                return existingAnimation.runner;
	              }
	            } else {
	              // a joined animation means that this animation will take over the existing one
	              // so an example would involve a leave animation taking over an enter. Then when
	              // the postDigest kicks in the enter will be ignored.
	              var joinAnimationFlag = isAllowed('join', element, newAnimation, existingAnimation);
	              if (joinAnimationFlag) {
	                if (existingAnimation.state === RUNNING_STATE) {
	                  normalizeAnimationOptions(element, options);
	                } else {
	                  applyGeneratedPreparationClasses(element, isStructural ? event : null, options);
	
	                  event = newAnimation.event = existingAnimation.event;
	                  options = mergeAnimationOptions(element, existingAnimation.options, newAnimation.options);
	
	                  //we return the same runner since only the option values of this animation will
	                  //be fed into the `existingAnimation`.
	                  return existingAnimation.runner;
	                }
	              }
	            }
	          } else {
	            // normalization in this case means that it removes redundant CSS classes that
	            // already exist (addClass) or do not exist (removeClass) on the element
	            normalizeAnimationOptions(element, options);
	          }
	
	          // when the options are merged and cleaned up we may end up not having to do
	          // an animation at all, therefore we should check this before issuing a post
	          // digest callback. Structural animations will always run no matter what.
	          var isValidAnimation = newAnimation.structural;
	          if (!isValidAnimation) {
	            // animate (from/to) can be quickly checked first, otherwise we check if any classes are present
	            isValidAnimation = (newAnimation.event === 'animate' && Object.keys(newAnimation.options.to || {}).length > 0)
	                || hasAnimationClasses(newAnimation.options);
	          }
	
	          if (!isValidAnimation) {
	            close();
	            clearElementAnimationState(element);
	            return runner;
	          }
	
	          // the counter keeps track of cancelled animations
	          var counter = (existingAnimation.counter || 0) + 1;
	          newAnimation.counter = counter;
	
	          markElementAnimationState(element, PRE_DIGEST_STATE, newAnimation);
	
	          $rootScope.$$postDigest(function() {
	            var animationDetails = activeAnimationsLookup.get(node);
	            var animationCancelled = !animationDetails;
	            animationDetails = animationDetails || {};
	
	            // if addClass/removeClass is called before something like enter then the
	            // registered parent element may not be present. The code below will ensure
	            // that a final value for parent element is obtained
	            var parentElement = element.parent() || [];
	
	            // animate/structural/class-based animations all have requirements. Otherwise there
	            // is no point in performing an animation. The parent node must also be set.
	            var isValidAnimation = parentElement.length > 0
	                && (animationDetails.event === 'animate'
	                || animationDetails.structural
	                || hasAnimationClasses(animationDetails.options));
	
	            // this means that the previous animation was cancelled
	            // even if the follow-up animation is the same event
	            if (animationCancelled || animationDetails.counter !== counter || !isValidAnimation) {
	              // if another animation did not take over then we need
	              // to make sure that the domOperation and options are
	              // handled accordingly
	              if (animationCancelled) {
	                applyAnimationClasses(element, options);
	                applyAnimationStyles(element, options);
	              }
	
	              // if the event changed from something like enter to leave then we do
	              // it, otherwise if it's the same then the end result will be the same too
	              if (animationCancelled || (isStructural && animationDetails.event !== event)) {
	                options.domOperation();
	                runner.end();
	              }
	
	              // in the event that the element animation was not cancelled or a follow-up animation
	              // isn't allowed to animate from here then we need to clear the state of the element
	              // so that any future animations won't read the expired animation data.
	              if (!isValidAnimation) {
	                clearElementAnimationState(element);
	              }
	
	              return;
	            }
	
	            // this combined multiple class to addClass / removeClass into a setClass event
	            // so long as a structural event did not take over the animation
	            event = !animationDetails.structural && hasAnimationClasses(animationDetails.options, true)
	                ? 'setClass'
	                : animationDetails.event;
	
	            markElementAnimationState(element, RUNNING_STATE);
	            var realRunner = $$animation(element, event, animationDetails.options);
	
	            realRunner.done(function(status) {
	              close(!status);
	              var animationDetails = activeAnimationsLookup.get(node);
	              if (animationDetails && animationDetails.counter === counter) {
	                clearElementAnimationState(getDomNode(element));
	              }
	              notifyProgress(runner, event, 'close', {});
	            });
	
	            // this will update the runner's flow-control events based on
	            // the `realRunner` object.
	            runner.setHost(realRunner);
	            notifyProgress(runner, event, 'start', {});
	          });
	
	          return runner;
	
	          function notifyProgress(runner, event, phase, data) {
	            runInNextPostDigestOrNow(function() {
	              var callbacks = findCallbacks(element, event);
	              if (callbacks.length) {
	                // do not optimize this call here to RAF because
	                // we don't know how heavy the callback code here will
	                // be and if this code is buffered then this can
	                // lead to a performance regression.
	                $$rAF(function() {
	                  forEach(callbacks, function(callback) {
	                    callback(element, phase, data);
	                  });
	                });
	              }
	            });
	            runner.progress(event, phase, data);
	          }
	
	          function close(reject) { // jshint ignore:line
	            clearGeneratedClasses(element, options);
	            applyAnimationClasses(element, options);
	            applyAnimationStyles(element, options);
	            options.domOperation();
	            runner.complete(!reject);
	          }
	        }
	
	        function closeChildAnimations(element) {
	          var node = getDomNode(element);
	          var children = node.querySelectorAll('[' + NG_ANIMATE_ATTR_NAME + ']');
	          forEach(children, function(child) {
	            var state = parseInt(child.getAttribute(NG_ANIMATE_ATTR_NAME));
	            var animationDetails = activeAnimationsLookup.get(child);
	            switch (state) {
	              case RUNNING_STATE:
	                animationDetails.runner.end();
	              /* falls through */
	              case PRE_DIGEST_STATE:
	                if (animationDetails) {
	                  activeAnimationsLookup.remove(child);
	                }
	                break;
	            }
	          });
	        }
	
	        function clearElementAnimationState(element) {
	          var node = getDomNode(element);
	          node.removeAttribute(NG_ANIMATE_ATTR_NAME);
	          activeAnimationsLookup.remove(node);
	        }
	
	        function isMatchingElement(nodeOrElmA, nodeOrElmB) {
	          return getDomNode(nodeOrElmA) === getDomNode(nodeOrElmB);
	        }
	
	        function areAnimationsAllowed(element, parentElement, event) {
	          var bodyElement = jqLite($document[0].body);
	          var bodyElementDetected = isMatchingElement(element, bodyElement) || element[0].nodeName === 'HTML';
	          var rootElementDetected = isMatchingElement(element, $rootElement);
	          var parentAnimationDetected = false;
	          var animateChildren;
	
	          var parentHost = element.data(NG_ANIMATE_PIN_DATA);
	          if (parentHost) {
	            parentElement = parentHost;
	          }
	
	          while (parentElement && parentElement.length) {
	            if (!rootElementDetected) {
	              // angular doesn't want to attempt to animate elements outside of the application
	              // therefore we need to ensure that the rootElement is an ancestor of the current element
	              rootElementDetected = isMatchingElement(parentElement, $rootElement);
	            }
	
	            var parentNode = parentElement[0];
	            if (parentNode.nodeType !== ELEMENT_NODE) {
	              // no point in inspecting the #document element
	              break;
	            }
	
	            var details = activeAnimationsLookup.get(parentNode) || {};
	            // either an enter, leave or move animation will commence
	            // therefore we can't allow any animations to take place
	            // but if a parent animation is class-based then that's ok
	            if (!parentAnimationDetected) {
	              parentAnimationDetected = details.structural || disabledElementsLookup.get(parentNode);
	            }
	
	            if (isUndefined(animateChildren) || animateChildren === true) {
	              var value = parentElement.data(NG_ANIMATE_CHILDREN_DATA);
	              if (isDefined(value)) {
	                animateChildren = value;
	              }
	            }
	
	            // there is no need to continue traversing at this point
	            if (parentAnimationDetected && animateChildren === false) break;
	
	            if (!rootElementDetected) {
	              // angular doesn't want to attempt to animate elements outside of the application
	              // therefore we need to ensure that the rootElement is an ancestor of the current element
	              rootElementDetected = isMatchingElement(parentElement, $rootElement);
	              if (!rootElementDetected) {
	                parentHost = parentElement.data(NG_ANIMATE_PIN_DATA);
	                if (parentHost) {
	                  parentElement = parentHost;
	                }
	              }
	            }
	
	            if (!bodyElementDetected) {
	              // we also need to ensure that the element is or will be apart of the body element
	              // otherwise it is pointless to even issue an animation to be rendered
	              bodyElementDetected = isMatchingElement(parentElement, bodyElement);
	            }
	
	            parentElement = parentElement.parent();
	          }
	
	          var allowAnimation = !parentAnimationDetected || animateChildren;
	          return allowAnimation && rootElementDetected && bodyElementDetected;
	        }
	
	        function markElementAnimationState(element, state, details) {
	          details = details || {};
	          details.state = state;
	
	          var node = getDomNode(element);
	          node.setAttribute(NG_ANIMATE_ATTR_NAME, state);
	
	          var oldValue = activeAnimationsLookup.get(node);
	          var newValue = oldValue
	              ? extend(oldValue, details)
	              : details;
	          activeAnimationsLookup.put(node, newValue);
	        }
	      }];
	  }];
	
	  var $$AnimateAsyncRunFactory = ['$$rAF', function($$rAF) {
	    var waitQueue = [];
	
	    function waitForTick(fn) {
	      waitQueue.push(fn);
	      if (waitQueue.length > 1) return;
	      $$rAF(function() {
	        for (var i = 0; i < waitQueue.length; i++) {
	          waitQueue[i]();
	        }
	        waitQueue = [];
	      });
	    }
	
	    return function() {
	      var passed = false;
	      waitForTick(function() {
	        passed = true;
	      });
	      return function(callback) {
	        passed ? callback() : waitForTick(callback);
	      };
	    };
	  }];
	
	  var $$AnimateRunnerFactory = ['$q', '$sniffer', '$$animateAsyncRun',
	    function($q,   $sniffer,   $$animateAsyncRun) {
	
	      var INITIAL_STATE = 0;
	      var DONE_PENDING_STATE = 1;
	      var DONE_COMPLETE_STATE = 2;
	
	      AnimateRunner.chain = function(chain, callback) {
	        var index = 0;
	
	        next();
	        function next() {
	          if (index === chain.length) {
	            callback(true);
	            return;
	          }
	
	          chain[index](function(response) {
	            if (response === false) {
	              callback(false);
	              return;
	            }
	            index++;
	            next();
	          });
	        }
	      };
	
	      AnimateRunner.all = function(runners, callback) {
	        var count = 0;
	        var status = true;
	        forEach(runners, function(runner) {
	          runner.done(onProgress);
	        });
	
	        function onProgress(response) {
	          status = status && response;
	          if (++count === runners.length) {
	            callback(status);
	          }
	        }
	      };
	
	      function AnimateRunner(host) {
	        this.setHost(host);
	
	        this._doneCallbacks = [];
	        this._runInAnimationFrame = $$animateAsyncRun();
	        this._state = 0;
	      }
	
	      AnimateRunner.prototype = {
	        setHost: function(host) {
	          this.host = host || {};
	        },
	
	        done: function(fn) {
	          if (this._state === DONE_COMPLETE_STATE) {
	            fn();
	          } else {
	            this._doneCallbacks.push(fn);
	          }
	        },
	
	        progress: noop,
	
	        getPromise: function() {
	          if (!this.promise) {
	            var self = this;
	            this.promise = $q(function(resolve, reject) {
	              self.done(function(status) {
	                status === false ? reject() : resolve();
	              });
	            });
	          }
	          return this.promise;
	        },
	
	        then: function(resolveHandler, rejectHandler) {
	          return this.getPromise().then(resolveHandler, rejectHandler);
	        },
	
	        'catch': function(handler) {
	          return this.getPromise()['catch'](handler);
	        },
	
	        'finally': function(handler) {
	          return this.getPromise()['finally'](handler);
	        },
	
	        pause: function() {
	          if (this.host.pause) {
	            this.host.pause();
	          }
	        },
	
	        resume: function() {
	          if (this.host.resume) {
	            this.host.resume();
	          }
	        },
	
	        end: function() {
	          if (this.host.end) {
	            this.host.end();
	          }
	          this._resolve(true);
	        },
	
	        cancel: function() {
	          if (this.host.cancel) {
	            this.host.cancel();
	          }
	          this._resolve(false);
	        },
	
	        complete: function(response) {
	          var self = this;
	          if (self._state === INITIAL_STATE) {
	            self._state = DONE_PENDING_STATE;
	            self._runInAnimationFrame(function() {
	              self._resolve(response);
	            });
	          }
	        },
	
	        _resolve: function(response) {
	          if (this._state !== DONE_COMPLETE_STATE) {
	            forEach(this._doneCallbacks, function(fn) {
	              fn(response);
	            });
	            this._doneCallbacks.length = 0;
	            this._state = DONE_COMPLETE_STATE;
	          }
	        }
	      };
	
	      return AnimateRunner;
	    }];
	
	  var $$AnimationProvider = ['$animateProvider', function($animateProvider) {
	    var NG_ANIMATE_REF_ATTR = 'ng-animate-ref';
	
	    var drivers = this.drivers = [];
	
	    var RUNNER_STORAGE_KEY = '$$animationRunner';
	
	    function setRunner(element, runner) {
	      element.data(RUNNER_STORAGE_KEY, runner);
	    }
	
	    function removeRunner(element) {
	      element.removeData(RUNNER_STORAGE_KEY);
	    }
	
	    function getRunner(element) {
	      return element.data(RUNNER_STORAGE_KEY);
	    }
	
	    this.$get = ['$$jqLite', '$rootScope', '$injector', '$$AnimateRunner', '$$HashMap', '$$rAFScheduler',
	      function($$jqLite,   $rootScope,   $injector,   $$AnimateRunner,   $$HashMap,   $$rAFScheduler) {
	
	        var animationQueue = [];
	        var applyAnimationClasses = applyAnimationClassesFactory($$jqLite);
	
	        function sortAnimations(animations) {
	          var tree = { children: [] };
	          var i, lookup = new $$HashMap();
	
	          // this is done first beforehand so that the hashmap
	          // is filled with a list of the elements that will be animated
	          for (i = 0; i < animations.length; i++) {
	            var animation = animations[i];
	            lookup.put(animation.domNode, animations[i] = {
	              domNode: animation.domNode,
	              fn: animation.fn,
	              children: []
	            });
	          }
	
	          for (i = 0; i < animations.length; i++) {
	            processNode(animations[i]);
	          }
	
	          return flatten(tree);
	
	          function processNode(entry) {
	            if (entry.processed) return entry;
	            entry.processed = true;
	
	            var elementNode = entry.domNode;
	            var parentNode = elementNode.parentNode;
	            lookup.put(elementNode, entry);
	
	            var parentEntry;
	            while (parentNode) {
	              parentEntry = lookup.get(parentNode);
	              if (parentEntry) {
	                if (!parentEntry.processed) {
	                  parentEntry = processNode(parentEntry);
	                }
	                break;
	              }
	              parentNode = parentNode.parentNode;
	            }
	
	            (parentEntry || tree).children.push(entry);
	            return entry;
	          }
	
	          function flatten(tree) {
	            var result = [];
	            var queue = [];
	            var i;
	
	            for (i = 0; i < tree.children.length; i++) {
	              queue.push(tree.children[i]);
	            }
	
	            var remainingLevelEntries = queue.length;
	            var nextLevelEntries = 0;
	            var row = [];
	
	            for (i = 0; i < queue.length; i++) {
	              var entry = queue[i];
	              if (remainingLevelEntries <= 0) {
	                remainingLevelEntries = nextLevelEntries;
	                nextLevelEntries = 0;
	                result.push(row);
	                row = [];
	              }
	              row.push(entry.fn);
	              entry.children.forEach(function(childEntry) {
	                nextLevelEntries++;
	                queue.push(childEntry);
	              });
	              remainingLevelEntries--;
	            }
	
	            if (row.length) {
	              result.push(row);
	            }
	
	            return result;
	          }
	        }
	
	        // TODO(matsko): document the signature in a better way
	        return function(element, event, options) {
	          options = prepareAnimationOptions(options);
	          var isStructural = ['enter', 'move', 'leave'].indexOf(event) >= 0;
	
	          // there is no animation at the current moment, however
	          // these runner methods will get later updated with the
	          // methods leading into the driver's end/cancel methods
	          // for now they just stop the animation from starting
	          var runner = new $$AnimateRunner({
	            end: function() { close(); },
	            cancel: function() { close(true); }
	          });
	
	          if (!drivers.length) {
	            close();
	            return runner;
	          }
	
	          setRunner(element, runner);
	
	          var classes = mergeClasses(element.attr('class'), mergeClasses(options.addClass, options.removeClass));
	          var tempClasses = options.tempClasses;
	          if (tempClasses) {
	            classes += ' ' + tempClasses;
	            options.tempClasses = null;
	          }
	
	          animationQueue.push({
	            // this data is used by the postDigest code and passed into
	            // the driver step function
	            element: element,
	            classes: classes,
	            event: event,
	            structural: isStructural,
	            options: options,
	            beforeStart: beforeStart,
	            close: close
	          });
	
	          element.on('$destroy', handleDestroyedElement);
	
	          // we only want there to be one function called within the post digest
	          // block. This way we can group animations for all the animations that
	          // were apart of the same postDigest flush call.
	          if (animationQueue.length > 1) return runner;
	
	          $rootScope.$$postDigest(function() {
	            var animations = [];
	            forEach(animationQueue, function(entry) {
	              // the element was destroyed early on which removed the runner
	              // form its storage. This means we can't animate this element
	              // at all and it already has been closed due to destruction.
	              if (getRunner(entry.element)) {
	                animations.push(entry);
	              } else {
	                entry.close();
	              }
	            });
	
	            // now any future animations will be in another postDigest
	            animationQueue.length = 0;
	
	            var groupedAnimations = groupAnimations(animations);
	            var toBeSortedAnimations = [];
	
	            forEach(groupedAnimations, function(animationEntry) {
	              toBeSortedAnimations.push({
	                domNode: getDomNode(animationEntry.from ? animationEntry.from.element : animationEntry.element),
	                fn: function triggerAnimationStart() {
	                  // it's important that we apply the `ng-animate` CSS class and the
	                  // temporary classes before we do any driver invoking since these
	                  // CSS classes may be required for proper CSS detection.
	                  animationEntry.beforeStart();
	
	                  var startAnimationFn, closeFn = animationEntry.close;
	
	                  // in the event that the element was removed before the digest runs or
	                  // during the RAF sequencing then we should not trigger the animation.
	                  var targetElement = animationEntry.anchors
	                      ? (animationEntry.from.element || animationEntry.to.element)
	                      : animationEntry.element;
	
	                  if (getRunner(targetElement)) {
	                    var operation = invokeFirstDriver(animationEntry);
	                    if (operation) {
	                      startAnimationFn = operation.start;
	                    }
	                  }
	
	                  if (!startAnimationFn) {
	                    closeFn();
	                  } else {
	                    var animationRunner = startAnimationFn();
	                    animationRunner.done(function(status) {
	                      closeFn(!status);
	                    });
	                    updateAnimationRunners(animationEntry, animationRunner);
	                  }
	                }
	              });
	            });
	
	            // we need to sort each of the animations in order of parent to child
	            // relationships. This ensures that the child classes are applied at the
	            // right time.
	            $$rAFScheduler(sortAnimations(toBeSortedAnimations));
	          });
	
	          return runner;
	
	          // TODO(matsko): change to reference nodes
	          function getAnchorNodes(node) {
	            var SELECTOR = '[' + NG_ANIMATE_REF_ATTR + ']';
	            var items = node.hasAttribute(NG_ANIMATE_REF_ATTR)
	                ? [node]
	                : node.querySelectorAll(SELECTOR);
	            var anchors = [];
	            forEach(items, function(node) {
	              var attr = node.getAttribute(NG_ANIMATE_REF_ATTR);
	              if (attr && attr.length) {
	                anchors.push(node);
	              }
	            });
	            return anchors;
	          }
	
	          function groupAnimations(animations) {
	            var preparedAnimations = [];
	            var refLookup = {};
	            forEach(animations, function(animation, index) {
	              var element = animation.element;
	              var node = getDomNode(element);
	              var event = animation.event;
	              var enterOrMove = ['enter', 'move'].indexOf(event) >= 0;
	              var anchorNodes = animation.structural ? getAnchorNodes(node) : [];
	
	              if (anchorNodes.length) {
	                var direction = enterOrMove ? 'to' : 'from';
	
	                forEach(anchorNodes, function(anchor) {
	                  var key = anchor.getAttribute(NG_ANIMATE_REF_ATTR);
	                  refLookup[key] = refLookup[key] || {};
	                  refLookup[key][direction] = {
	                    animationID: index,
	                    element: jqLite(anchor)
	                  };
	                });
	              } else {
	                preparedAnimations.push(animation);
	              }
	            });
	
	            var usedIndicesLookup = {};
	            var anchorGroups = {};
	            forEach(refLookup, function(operations, key) {
	              var from = operations.from;
	              var to = operations.to;
	
	              if (!from || !to) {
	                // only one of these is set therefore we can't have an
	                // anchor animation since all three pieces are required
	                var index = from ? from.animationID : to.animationID;
	                var indexKey = index.toString();
	                if (!usedIndicesLookup[indexKey]) {
	                  usedIndicesLookup[indexKey] = true;
	                  preparedAnimations.push(animations[index]);
	                }
	                return;
	              }
	
	              var fromAnimation = animations[from.animationID];
	              var toAnimation = animations[to.animationID];
	              var lookupKey = from.animationID.toString();
	              if (!anchorGroups[lookupKey]) {
	                var group = anchorGroups[lookupKey] = {
	                  structural: true,
	                  beforeStart: function() {
	                    fromAnimation.beforeStart();
	                    toAnimation.beforeStart();
	                  },
	                  close: function() {
	                    fromAnimation.close();
	                    toAnimation.close();
	                  },
	                  classes: cssClassesIntersection(fromAnimation.classes, toAnimation.classes),
	                  from: fromAnimation,
	                  to: toAnimation,
	                  anchors: [] // TODO(matsko): change to reference nodes
	                };
	
	                // the anchor animations require that the from and to elements both have at least
	                // one shared CSS class which effictively marries the two elements together to use
	                // the same animation driver and to properly sequence the anchor animation.
	                if (group.classes.length) {
	                  preparedAnimations.push(group);
	                } else {
	                  preparedAnimations.push(fromAnimation);
	                  preparedAnimations.push(toAnimation);
	                }
	              }
	
	              anchorGroups[lookupKey].anchors.push({
	                'out': from.element, 'in': to.element
	              });
	            });
	
	            return preparedAnimations;
	          }
	
	          function cssClassesIntersection(a,b) {
	            a = a.split(' ');
	            b = b.split(' ');
	            var matches = [];
	
	            for (var i = 0; i < a.length; i++) {
	              var aa = a[i];
	              if (aa.substring(0,3) === 'ng-') continue;
	
	              for (var j = 0; j < b.length; j++) {
	                if (aa === b[j]) {
	                  matches.push(aa);
	                  break;
	                }
	              }
	            }
	
	            return matches.join(' ');
	          }
	
	          function invokeFirstDriver(animationDetails) {
	            // we loop in reverse order since the more general drivers (like CSS and JS)
	            // may attempt more elements, but custom drivers are more particular
	            for (var i = drivers.length - 1; i >= 0; i--) {
	              var driverName = drivers[i];
	              if (!$injector.has(driverName)) continue; // TODO(matsko): remove this check
	
	              var factory = $injector.get(driverName);
	              var driver = factory(animationDetails);
	              if (driver) {
	                return driver;
	              }
	            }
	          }
	
	          function beforeStart() {
	            element.addClass(NG_ANIMATE_CLASSNAME);
	            if (tempClasses) {
	              $$jqLite.addClass(element, tempClasses);
	            }
	          }
	
	          function updateAnimationRunners(animation, newRunner) {
	            if (animation.from && animation.to) {
	              update(animation.from.element);
	              update(animation.to.element);
	            } else {
	              update(animation.element);
	            }
	
	            function update(element) {
	              getRunner(element).setHost(newRunner);
	            }
	          }
	
	          function handleDestroyedElement() {
	            var runner = getRunner(element);
	            if (runner && (event !== 'leave' || !options.$$domOperationFired)) {
	              runner.end();
	            }
	          }
	
	          function close(rejected) { // jshint ignore:line
	            element.off('$destroy', handleDestroyedElement);
	            removeRunner(element);
	
	            applyAnimationClasses(element, options);
	            applyAnimationStyles(element, options);
	            options.domOperation();
	
	            if (tempClasses) {
	              $$jqLite.removeClass(element, tempClasses);
	            }
	
	            element.removeClass(NG_ANIMATE_CLASSNAME);
	            runner.complete(!rejected);
	          }
	        };
	      }];
	  }];
	
	  /* global angularAnimateModule: true,
	
	   $$AnimateAsyncRunFactory,
	   $$rAFSchedulerFactory,
	   $$AnimateChildrenDirective,
	   $$AnimateRunnerFactory,
	   $$AnimateQueueProvider,
	   $$AnimationProvider,
	   $AnimateCssProvider,
	   $$AnimateCssDriverProvider,
	   $$AnimateJsProvider,
	   $$AnimateJsDriverProvider,
	   */
	
	  /**
	   * @ngdoc module
	   * @name ngAnimate
	   * @description
	   *
	   * The `ngAnimate` module provides support for CSS-based animations (keyframes and transitions) as well as JavaScript-based animations via
	   * callback hooks. Animations are not enabled by default, however, by including `ngAnimate` the animation hooks are enabled for an Angular app.
	   *
	   * <div doc-module-components="ngAnimate"></div>
	   *
	   * # Usage
	   * Simply put, there are two ways to make use of animations when ngAnimate is used: by using **CSS** and **JavaScript**. The former works purely based
	   * using CSS (by using matching CSS selectors/styles) and the latter triggers animations that are registered via `module.animation()`. For
	   * both CSS and JS animations the sole requirement is to have a matching `CSS class` that exists both in the registered animation and within
	   * the HTML element that the animation will be triggered on.
	   *
	   * ## Directive Support
	   * The following directives are "animation aware":
	   *
	   * | Directive                                                                                                | Supported Animations                                                     |
	   * |----------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------|
	   * | {@link ng.directive:ngRepeat#animations ngRepeat}                                                        | enter, leave and move                                                    |
	   * | {@link ngRoute.directive:ngView#animations ngView}                                                       | enter and leave                                                          |
	   * | {@link ng.directive:ngInclude#animations ngInclude}                                                      | enter and leave                                                          |
	   * | {@link ng.directive:ngSwitch#animations ngSwitch}                                                        | enter and leave                                                          |
	   * | {@link ng.directive:ngIf#animations ngIf}                                                                | enter and leave                                                          |
	   * | {@link ng.directive:ngClass#animations ngClass}                                                          | add and remove (the CSS class(es) present)                               |
	   * | {@link ng.directive:ngShow#animations ngShow} & {@link ng.directive:ngHide#animations ngHide}            | add and remove (the ng-hide class value)                                 |
	   * | {@link ng.directive:form#animation-hooks form} & {@link ng.directive:ngModel#animation-hooks ngModel}    | add and remove (dirty, pristine, valid, invalid & all other validations) |
	   * | {@link module:ngMessages#animations ngMessages}                                                          | add and remove (ng-active & ng-inactive)                                 |
	   * | {@link module:ngMessages#animations ngMessage}                                                           | enter and leave                                                          |
	   *
	   * (More information can be found by visiting each the documentation associated with each directive.)
	   *
	   * ## CSS-based Animations
	   *
	   * CSS-based animations with ngAnimate are unique since they require no JavaScript code at all. By using a CSS class that we reference between our HTML
	   * and CSS code we can create an animation that will be picked up by Angular when an the underlying directive performs an operation.
	   *
	   * The example below shows how an `enter` animation can be made possible on an element using `ng-if`:
	   *
	   * ```html
	   * <div ng-if="bool" class="fade">
	   *    Fade me in out
	   * </div>
	   * <button ng-click="bool=true">Fade In!</button>
	   * <button ng-click="bool=false">Fade Out!</button>
	   * ```
	   *
	   * Notice the CSS class **fade**? We can now create the CSS transition code that references this class:
	   *
	   * ```css
	   * /&#42; The starting CSS styles for the enter animation &#42;/
	   * .fade.ng-enter {
	 *   transition:0.5s linear all;
	 *   opacity:0;
	 * }
	   *
	   * /&#42; The finishing CSS styles for the enter animation &#42;/
	   * .fade.ng-enter.ng-enter-active {
	 *   opacity:1;
	 * }
	   * ```
	   *
	   * The key thing to remember here is that, depending on the animation event (which each of the directives above trigger depending on what's going on) two
	   * generated CSS classes will be applied to the element; in the example above we have `.ng-enter` and `.ng-enter-active`. For CSS transitions, the transition
	   * code **must** be defined within the starting CSS class (in this case `.ng-enter`). The destination class is what the transition will animate towards.
	   *
	   * If for example we wanted to create animations for `leave` and `move` (ngRepeat triggers move) then we can do so using the same CSS naming conventions:
	   *
	   * ```css
	   * /&#42; now the element will fade out before it is removed from the DOM &#42;/
	   * .fade.ng-leave {
	 *   transition:0.5s linear all;
	 *   opacity:1;
	 * }
	   * .fade.ng-leave.ng-leave-active {
	 *   opacity:0;
	 * }
	   * ```
	   *
	   * We can also make use of **CSS Keyframes** by referencing the keyframe animation within the starting CSS class:
	   *
	   * ```css
	   * /&#42; there is no need to define anything inside of the destination
	   * CSS class since the keyframe will take charge of the animation &#42;/
	   * .fade.ng-leave {
	 *   animation: my_fade_animation 0.5s linear;
	 *   -webkit-animation: my_fade_animation 0.5s linear;
	 * }
	   *
	   * @keyframes my_fade_animation {
	 *   from { opacity:1; }
	 *   to { opacity:0; }
	 * }
	   *
	   * @-webkit-keyframes my_fade_animation {
	 *   from { opacity:1; }
	 *   to { opacity:0; }
	 * }
	   * ```
	   *
	   * Feel free also mix transitions and keyframes together as well as any other CSS classes on the same element.
	   *
	   * ### CSS Class-based Animations
	   *
	   * Class-based animations (animations that are triggered via `ngClass`, `ngShow`, `ngHide` and some other directives) have a slightly different
	   * naming convention. Class-based animations are basic enough that a standard transition or keyframe can be referenced on the class being added
	   * and removed.
	   *
	   * For example if we wanted to do a CSS animation for `ngHide` then we place an animation on the `.ng-hide` CSS class:
	   *
	   * ```html
	   * <div ng-show="bool" class="fade">
	   *   Show and hide me
	   * </div>
	   * <button ng-click="bool=true">Toggle</button>
	   *
	   * <style>
	   * .fade.ng-hide {
	 *   transition:0.5s linear all;
	 *   opacity:0;
	 * }
	   * </style>
	   * ```
	   *
	   * All that is going on here with ngShow/ngHide behind the scenes is the `.ng-hide` class is added/removed (when the hidden state is valid). Since
	   * ngShow and ngHide are animation aware then we can match up a transition and ngAnimate handles the rest.
	   *
	   * In addition the addition and removal of the CSS class, ngAnimate also provides two helper methods that we can use to further decorate the animation
	   * with CSS styles.
	   *
	   * ```html
	   * <div ng-class="{on:onOff}" class="highlight">
	   *   Highlight this box
	   * </div>
	   * <button ng-click="onOff=!onOff">Toggle</button>
	   *
	   * <style>
	   * .highlight {
	 *   transition:0.5s linear all;
	 * }
	   * .highlight.on-add {
	 *   background:white;
	 * }
	   * .highlight.on {
	 *   background:yellow;
	 * }
	   * .highlight.on-remove {
	 *   background:black;
	 * }
	   * </style>
	   * ```
	   *
	   * We can also make use of CSS keyframes by placing them within the CSS classes.
	   *
	   *
	   * ### CSS Staggering Animations
	   * A Staggering animation is a collection of animations that are issued with a slight delay in between each successive operation resulting in a
	   * curtain-like effect. The ngAnimate module (versions >=1.2) supports staggering animations and the stagger effect can be
	   * performed by creating a **ng-EVENT-stagger** CSS class and attaching that class to the base CSS class used for
	   * the animation. The style property expected within the stagger class can either be a **transition-delay** or an
	   * **animation-delay** property (or both if your animation contains both transitions and keyframe animations).
	   *
	   * ```css
	   * .my-animation.ng-enter {
	 *   /&#42; standard transition code &#42;/
	 *   transition: 1s linear all;
	 *   opacity:0;
	 * }
	   * .my-animation.ng-enter-stagger {
	 *   /&#42; this will have a 100ms delay between each successive leave animation &#42;/
	 *   transition-delay: 0.1s;
	 *
	 *   /&#42; As of 1.4.4, this must always be set: it signals ngAnimate
	 *     to not accidentally inherit a delay property from another CSS class &#42;/
	 *   transition-duration: 0s;
	 * }
	   * .my-animation.ng-enter.ng-enter-active {
	 *   /&#42; standard transition styles &#42;/
	 *   opacity:1;
	 * }
	   * ```
	   *
	   * Staggering animations work by default in ngRepeat (so long as the CSS class is defined). Outside of ngRepeat, to use staggering animations
	   * on your own, they can be triggered by firing multiple calls to the same event on $animate. However, the restrictions surrounding this
	   * are that each of the elements must have the same CSS className value as well as the same parent element. A stagger operation
	   * will also be reset if one or more animation frames have passed since the multiple calls to `$animate` were fired.
	   *
	   * The following code will issue the **ng-leave-stagger** event on the element provided:
	   *
	   * ```js
	   * var kids = parent.children();
	   *
	   * $animate.leave(kids[0]); //stagger index=0
	   * $animate.leave(kids[1]); //stagger index=1
	   * $animate.leave(kids[2]); //stagger index=2
	   * $animate.leave(kids[3]); //stagger index=3
	   * $animate.leave(kids[4]); //stagger index=4
	   *
	   * window.requestAnimationFrame(function() {
	 *   //stagger has reset itself
	 *   $animate.leave(kids[5]); //stagger index=0
	 *   $animate.leave(kids[6]); //stagger index=1
	 *
	 *   $scope.$digest();
	 * });
	   * ```
	   *
	   * Stagger animations are currently only supported within CSS-defined animations.
	   *
	   * ### The `ng-animate` CSS class
	   *
	   * When ngAnimate is animating an element it will apply the `ng-animate` CSS class to the element for the duration of the animation.
	   * This is a temporary CSS class and it will be removed once the animation is over (for both JavaScript and CSS-based animations).
	   *
	   * Therefore, animations can be applied to an element using this temporary class directly via CSS.
	   *
	   * ```css
	   * .zipper.ng-animate {
	 *   transition:0.5s linear all;
	 * }
	   * .zipper.ng-enter {
	 *   opacity:0;
	 * }
	   * .zipper.ng-enter.ng-enter-active {
	 *   opacity:1;
	 * }
	   * .zipper.ng-leave {
	 *   opacity:1;
	 * }
	   * .zipper.ng-leave.ng-leave-active {
	 *   opacity:0;
	 * }
	   * ```
	   *
	   * (Note that the `ng-animate` CSS class is reserved and it cannot be applied on an element directly since ngAnimate will always remove
	   * the CSS class once an animation has completed.)
	   *
	   *
	   * ## JavaScript-based Animations
	   *
	   * ngAnimate also allows for animations to be consumed by JavaScript code. The approach is similar to CSS-based animations (where there is a shared
	   * CSS class that is referenced in our HTML code) but in addition we need to register the JavaScript animation on the module. By making use of the
	   * `module.animation()` module function we can register the ainmation.
	   *
	   * Let's see an example of a enter/leave animation using `ngRepeat`:
	   *
	   * ```html
	   * <div ng-repeat="item in items" class="slide">
	   *   {{ item }}
	   * </div>
	   * ```
	   *
	   * See the **slide** CSS class? Let's use that class to define an animation that we'll structure in our module code by using `module.animation`:
	   *
	   * ```js
	   * myModule.animation('.slide', [function() {
	 *   return {
	 *     // make note that other events (like addClass/removeClass)
	 *     // have different function input parameters
	 *     enter: function(element, doneFn) {
	 *       jQuery(element).fadeIn(1000, doneFn);
	 *
	 *       // remember to call doneFn so that angular
	 *       // knows that the animation has concluded
	 *     },
	 *
	 *     move: function(element, doneFn) {
	 *       jQuery(element).fadeIn(1000, doneFn);
	 *     },
	 *
	 *     leave: function(element, doneFn) {
	 *       jQuery(element).fadeOut(1000, doneFn);
	 *     }
	 *   }
	 * }]
	   * ```
	   *
	   * The nice thing about JS-based animations is that we can inject other services and make use of advanced animation libraries such as
	   * greensock.js and velocity.js.
	   *
	   * If our animation code class-based (meaning that something like `ngClass`, `ngHide` and `ngShow` triggers it) then we can still define
	   * our animations inside of the same registered animation, however, the function input arguments are a bit different:
	   *
	   * ```html
	   * <div ng-class="color" class="colorful">
	   *   this box is moody
	   * </div>
	   * <button ng-click="color='red'">Change to red</button>
	   * <button ng-click="color='blue'">Change to blue</button>
	   * <button ng-click="color='green'">Change to green</button>
	   * ```
	   *
	   * ```js
	   * myModule.animation('.colorful', [function() {
	 *   return {
	 *     addClass: function(element, className, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     },
	 *     removeClass: function(element, className, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     },
	 *     setClass: function(element, addedClass, removedClass, doneFn) {
	 *       // do some cool animation and call the doneFn
	 *     }
	 *   }
	 * }]
	   * ```
	   *
	   * ## CSS + JS Animations Together
	   *
	   * AngularJS 1.4 and higher has taken steps to make the amalgamation of CSS and JS animations more flexible. However, unlike earlier versions of Angular,
	   * defining CSS and JS animations to work off of the same CSS class will not work anymore. Therefore the example below will only result in **JS animations taking
	   * charge of the animation**:
	   *
	   * ```html
	   * <div ng-if="bool" class="slide">
	   *   Slide in and out
	   * </div>
	   * ```
	   *
	   * ```js
	   * myModule.animation('.slide', [function() {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       jQuery(element).slideIn(1000, doneFn);
	 *     }
	 *   }
	 * }]
	   * ```
	   *
	   * ```css
	   * .slide.ng-enter {
	 *   transition:0.5s linear all;
	 *   transform:translateY(-100px);
	 * }
	   * .slide.ng-enter.ng-enter-active {
	 *   transform:translateY(0);
	 * }
	   * ```
	   *
	   * Does this mean that CSS and JS animations cannot be used together? Do JS-based animations always have higher priority? We can make up for the
	   * lack of CSS animations by using the `$animateCss` service to trigger our own tweaked-out, CSS-based animations directly from
	   * our own JS-based animation code:
	   *
	   * ```js
	   * myModule.animation('.slide', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element, doneFn) {
	*        // this will trigger `.slide.ng-enter` and `.slide.ng-enter-active`.
	 *       var runner = $animateCss(element, {
	 *         event: 'enter',
	 *         structural: true
	 *       }).start();
	*        runner.done(doneFn);
	 *     }
	 *   }
	 * }]
	   * ```
	   *
	   * The nice thing here is that we can save bandwidth by sticking to our CSS-based animation code and we don't need to rely on a 3rd-party animation framework.
	   *
	   * The `$animateCss` service is very powerful since we can feed in all kinds of extra properties that will be evaluated and fed into a CSS transition or
	   * keyframe animation. For example if we wanted to animate the height of an element while adding and removing classes then we can do so by providing that
	   * data into `$animateCss` directly:
	   *
	   * ```js
	   * myModule.animation('.slide', ['$animateCss', function($animateCss) {
	 *   return {
	 *     enter: function(element, doneFn) {
	 *       var runner = $animateCss(element, {
	 *         event: 'enter',
	 *         structural: true,
	 *         addClass: 'maroon-setting',
	 *         from: { height:0 },
	 *         to: { height: 200 }
	 *       }).start();
	 *
	 *       runner.done(doneFn);
	 *     }
	 *   }
	 * }]
	   * ```
	   *
	   * Now we can fill in the rest via our transition CSS code:
	   *
	   * ```css
	   * /&#42; the transition tells ngAnimate to make the animation happen &#42;/
	   * .slide.ng-enter { transition:0.5s linear all; }
	   *
	   * /&#42; this extra CSS class will be absorbed into the transition
	   * since the $animateCss code is adding the class &#42;/
	   * .maroon-setting { background:red; }
	   * ```
	   *
	   * And `$animateCss` will figure out the rest. Just make sure to have the `done()` callback fire the `doneFn` function to signal when the animation is over.
	   *
	   * To learn more about what's possible be sure to visit the {@link ngAnimate.$animateCss $animateCss service}.
	   *
	   * ## Animation Anchoring (via `ng-animate-ref`)
	   *
	   * ngAnimate in AngularJS 1.4 comes packed with the ability to cross-animate elements between
	   * structural areas of an application (like views) by pairing up elements using an attribute
	   * called `ng-animate-ref`.
	   *
	   * Let's say for example we have two views that are managed by `ng-view` and we want to show
	   * that there is a relationship between two components situated in within these views. By using the
	   * `ng-animate-ref` attribute we can identify that the two components are paired together and we
	   * can then attach an animation, which is triggered when the view changes.
	   *
	   * Say for example we have the following template code:
	   *
	   * ```html
	   * <!-- index.html -->
	   * <div ng-view class="view-animation">
	   * </div>
	   *
	   * <!-- home.html -->
	   * <a href="#/banner-page">
	   *   <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
	   * </a>
	   *
	   * <!-- banner-page.html -->
	   * <img src="./banner.jpg" class="banner" ng-animate-ref="banner">
	   * ```
	   *
	   * Now, when the view changes (once the link is clicked), ngAnimate will examine the
	   * HTML contents to see if there is a match reference between any components in the view
	   * that is leaving and the view that is entering. It will scan both the view which is being
	   * removed (leave) and inserted (enter) to see if there are any paired DOM elements that
	   * contain a matching ref value.
	   *
	   * The two images match since they share the same ref value. ngAnimate will now create a
	   * transport element (which is a clone of the first image element) and it will then attempt
	   * to animate to the position of the second image element in the next view. For the animation to
	   * work a special CSS class called `ng-anchor` will be added to the transported element.
	   *
	   * We can now attach a transition onto the `.banner.ng-anchor` CSS class and then
	   * ngAnimate will handle the entire transition for us as well as the addition and removal of
	   * any changes of CSS classes between the elements:
	   *
	   * ```css
	   * .banner.ng-anchor {
	 *   /&#42; this animation will last for 1 second since there are
	 *          two phases to the animation (an `in` and an `out` phase) &#42;/
	 *   transition:0.5s linear all;
	 * }
	   * ```
	   *
	   * We also **must** include animations for the views that are being entered and removed
	   * (otherwise anchoring wouldn't be possible since the new view would be inserted right away).
	   *
	   * ```css
	   * .view-animation.ng-enter, .view-animation.ng-leave {
	 *   transition:0.5s linear all;
	 *   position:fixed;
	 *   left:0;
	 *   top:0;
	 *   width:100%;
	 * }
	   * .view-animation.ng-enter {
	 *   transform:translateX(100%);
	 * }
	   * .view-animation.ng-leave,
	   * .view-animation.ng-enter.ng-enter-active {
	 *   transform:translateX(0%);
	 * }
	   * .view-animation.ng-leave.ng-leave-active {
	 *   transform:translateX(-100%);
	 * }
	   * ```
	   *
	   * Now we can jump back to the anchor animation. When the animation happens, there are two stages that occur:
	   * an `out` and an `in` stage. The `out` stage happens first and that is when the element is animated away
	   * from its origin. Once that animation is over then the `in` stage occurs which animates the
	   * element to its destination. The reason why there are two animations is to give enough time
	   * for the enter animation on the new element to be ready.
	   *
	   * The example above sets up a transition for both the in and out phases, but we can also target the out or
	   * in phases directly via `ng-anchor-out` and `ng-anchor-in`.
	   *
	   * ```css
	   * .banner.ng-anchor-out {
	 *   transition: 0.5s linear all;
	 *
	 *   /&#42; the scale will be applied during the out animation,
	 *          but will be animated away when the in animation runs &#42;/
	 *   transform: scale(1.2);
	 * }
	   *
	   * .banner.ng-anchor-in {
	 *   transition: 1s linear all;
	 * }
	   * ```
	   *
	   *
	   *
	   *
	   * ### Anchoring Demo
	   *
	   <example module="anchoringExample"
	   name="anchoringExample"
	   id="anchoringExample"
	   deps="angular-animate.js;angular-route.js"
	   animations="true">
	   <file name="index.html">
	   <a href="#/">Home</a>
	   <hr />
	   <div class="view-container">
	   <div ng-view class="view"></div>
	   </div>
	   </file>
	   <file name="script.js">
	   angular.module('anchoringExample', ['ngAnimate', 'ngRoute'])
	   .config(['$routeProvider', function($routeProvider) {
	          $routeProvider.when('/', {
	            templateUrl: 'home.html',
	            controller: 'HomeController as home'
	          });
	          $routeProvider.when('/profile/:id', {
	            templateUrl: 'profile.html',
	            controller: 'ProfileController as profile'
	          });
	        }])
	   .run(['$rootScope', function($rootScope) {
	          $rootScope.records = [
	            { id:1, title: "Miss Beulah Roob" },
	            { id:2, title: "Trent Morissette" },
	            { id:3, title: "Miss Ava Pouros" },
	            { id:4, title: "Rod Pouros" },
	            { id:5, title: "Abdul Rice" },
	            { id:6, title: "Laurie Rutherford Sr." },
	            { id:7, title: "Nakia McLaughlin" },
	            { id:8, title: "Jordon Blanda DVM" },
	            { id:9, title: "Rhoda Hand" },
	            { id:10, title: "Alexandrea Sauer" }
	          ];
	        }])
	   .controller('HomeController', [function() {
	          //empty
	        }])
	   .controller('ProfileController', ['$rootScope', '$routeParams', function($rootScope, $routeParams) {
	          var index = parseInt($routeParams.id, 10);
	          var record = $rootScope.records[index - 1];
	
	          this.title = record.title;
	          this.id = record.id;
	        }]);
	   </file>
	   <file name="home.html">
	   <h2>Welcome to the home page</h1>
	   <p>Please click on an element</p>
	   <a class="record"
	   ng-href="#/profile/{{ record.id }}"
	   ng-animate-ref="{{ record.id }}"
	   ng-repeat="record in records">
	   {{ record.title }}
	   </a>
	   </file>
	   <file name="profile.html">
	   <div class="profile record" ng-animate-ref="{{ profile.id }}">
	   {{ profile.title }}
	   </div>
	   </file>
	   <file name="animations.css">
	   .record {
	        display:block;
	        font-size:20px;
	      }
	   .profile {
	        background:black;
	        color:white;
	        font-size:100px;
	      }
	   .view-container {
	        position:relative;
	      }
	   .view-container > .view.ng-animate {
	        position:absolute;
	        top:0;
	        left:0;
	        width:100%;
	        min-height:500px;
	      }
	   .view.ng-enter, .view.ng-leave,
	   .record.ng-anchor {
	        transition:0.5s linear all;
	      }
	   .view.ng-enter {
	        transform:translateX(100%);
	      }
	   .view.ng-enter.ng-enter-active, .view.ng-leave {
	        transform:translateX(0%);
	      }
	   .view.ng-leave.ng-leave-active {
	        transform:translateX(-100%);
	      }
	   .record.ng-anchor-out {
	        background:red;
	      }
	   </file>
	   </example>
	   *
	   * ### How is the element transported?
	   *
	   * When an anchor animation occurs, ngAnimate will clone the starting element and position it exactly where the starting
	   * element is located on screen via absolute positioning. The cloned element will be placed inside of the root element
	   * of the application (where ng-app was defined) and all of the CSS classes of the starting element will be applied. The
	   * element will then animate into the `out` and `in` animations and will eventually reach the coordinates and match
	   * the dimensions of the destination element. During the entire animation a CSS class of `.ng-animate-shim` will be applied
	   * to both the starting and destination elements in order to hide them from being visible (the CSS styling for the class
	   * is: `visibility:hidden`). Once the anchor reaches its destination then it will be removed and the destination element
	   * will become visible since the shim class will be removed.
	   *
	   * ### How is the morphing handled?
	   *
	   * CSS Anchoring relies on transitions and keyframes and the internal code is intelligent enough to figure out
	   * what CSS classes differ between the starting element and the destination element. These different CSS classes
	   * will be added/removed on the anchor element and a transition will be applied (the transition that is provided
	   * in the anchor class). Long story short, ngAnimate will figure out what classes to add and remove which will
	   * make the transition of the element as smooth and automatic as possible. Be sure to use simple CSS classes that
	   * do not rely on DOM nesting structure so that the anchor element appears the same as the starting element (since
	   * the cloned element is placed inside of root element which is likely close to the body element).
	   *
	   * Note that if the root element is on the `<html>` element then the cloned node will be placed inside of body.
	   *
	   *
	   * ## Using $animate in your directive code
	   *
	   * So far we've explored how to feed in animations into an Angular application, but how do we trigger animations within our own directives in our application?
	   * By injecting the `$animate` service into our directive code, we can trigger structural and class-based hooks which can then be consumed by animations. Let's
	   * imagine we have a greeting box that shows and hides itself when the data changes
	   *
	   * ```html
	   * <greeting-box active="onOrOff">Hi there</greeting-box>
	   * ```
	   *
	   * ```js
	   * ngModule.directive('greetingBox', ['$animate', function($animate) {
	 *   return function(scope, element, attrs) {
	 *     attrs.$observe('active', function(value) {
	 *       value ? $animate.addClass(element, 'on') : $animate.removeClass(element, 'on');
	 *     });
	 *   });
	 * }]);
	   * ```
	   *
	   * Now the `on` CSS class is added and removed on the greeting box component. Now if we add a CSS class on top of the greeting box element
	   * in our HTML code then we can trigger a CSS or JS animation to happen.
	   *
	   * ```css
	   * /&#42; normally we would create a CSS class to reference on the element &#42;/
	   * greeting-box.on { transition:0.5s linear all; background:green; color:white; }
	   * ```
	   *
	   * The `$animate` service contains a variety of other methods like `enter`, `leave`, `animate` and `setClass`. To learn more about what's
	   * possible be sure to visit the {@link ng.$animate $animate service API page}.
	   *
	   *
	   * ### Preventing Collisions With Third Party Libraries
	   *
	   * Some third-party frameworks place animation duration defaults across many element or className
	   * selectors in order to make their code small and reuseable. This can lead to issues with ngAnimate, which
	   * is expecting actual animations on these elements and has to wait for their completion.
	   *
	   * You can prevent this unwanted behavior by using a prefix on all your animation classes:
	   *
	   * ```css
	   * /&#42; prefixed with animate- &#42;/
	   * .animate-fade-add.animate-fade-add-active {
	 *   transition:1s linear all;
	 *   opacity:0;
	 * }
	   * ```
	   *
	   * You then configure `$animate` to enforce this prefix:
	   *
	   * ```js
	   * $animateProvider.classNameFilter(/animate-/);
	   * ```
	   *
	   * This also may provide your application with a speed boost since only specific elements containing CSS class prefix
	   * will be evaluated for animation when any DOM changes occur in the application.
	   *
	   * ## Callbacks and Promises
	   *
	   * When `$animate` is called it returns a promise that can be used to capture when the animation has ended. Therefore if we were to trigger
	   * an animation (within our directive code) then we can continue performing directive and scope related activities after the animation has
	   * ended by chaining onto the returned promise that animation method returns.
	   *
	   * ```js
	   * // somewhere within the depths of the directive
	   * $animate.enter(element, parent).then(function() {
	 *   //the animation has completed
	 * });
	   * ```
	   *
	   * (Note that earlier versions of Angular prior to v1.4 required the promise code to be wrapped using `$scope.$apply(...)`. This is not the case
	   * anymore.)
	   *
	   * In addition to the animation promise, we can also make use of animation-related callbacks within our directives and controller code by registering
	   * an event listener using the `$animate` service. Let's say for example that an animation was triggered on our view
	   * routing controller to hook into that:
	   *
	   * ```js
	   * ngModule.controller('HomePageController', ['$animate', function($animate) {
	 *   $animate.on('enter', ngViewElement, function(element) {
	 *     // the animation for this route has completed
	 *   }]);
	 * }])
	   * ```
	   *
	   * (Note that you will need to trigger a digest within the callback to get angular to notice any scope-related changes.)
	   */
	
	  /**
	   * @ngdoc service
	   * @name $animate
	   * @kind object
	   *
	   * @description
	   * The ngAnimate `$animate` service documentation is the same for the core `$animate` service.
	   *
	   * Click here {@link ng.$animate to learn more about animations with `$animate`}.
	   */
	  angular.module('ngAnimate', [])
	      .directive('ngAnimateChildren', $$AnimateChildrenDirective)
	      .factory('$$rAFScheduler', $$rAFSchedulerFactory)
	
	      .factory('$$AnimateRunner', $$AnimateRunnerFactory)
	      .factory('$$animateAsyncRun', $$AnimateAsyncRunFactory)
	
	      .provider('$$animateQueue', $$AnimateQueueProvider)
	      .provider('$$animation', $$AnimationProvider)
	
	      .provider('$animateCss', $AnimateCssProvider)
	      .provider('$$animateCssDriver', $$AnimateCssDriverProvider)
	
	      .provider('$$animateJs', $$AnimateJsProvider)
	      .provider('$$animateJsDriver', $$AnimateJsDriverProvider);
	
	
	})(window, window.angular);

/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
	 AngularJS v1.4.4
	 (c) 2010-2015 Google, Inc. http://angularjs.org
	 License: MIT
	*/
	(function(p,c,C){'use strict';function v(r,h,g){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,d,y){function z(){k&&(g.cancel(k),k=null);l&&(l.$destroy(),l=null);m&&(k=g.leave(m),k.then(function(){k=null}),m=null)}function x(){var b=r.current&&r.current.locals;if(c.isDefined(b&&b.$template)){var b=a.$new(),d=r.current;m=y(b,function(b){g.enter(b,null,m||f).then(function(){!c.isDefined(t)||t&&!a.$eval(t)||h()});z()});l=d.scope=b;l.$emit("$viewContentLoaded");
	l.$eval(w)}else z()}var l,m,k,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(c,h,g){return{restrict:"ECA",priority:-400,link:function(a,f){var b=g.current,d=b.locals;f.html(d.$template);var y=c(f.contents());b.controller&&(d.$scope=a,d=h(b.controller,d),b.controllerAs&&(a[b.controllerAs]=d),f.data("$ngControllerController",d),f.children().data("$ngControllerController",d));y(a)}}}p=c.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return c.extend(Object.create(a),
	f)}function h(a,c){var b=c.caseInsensitiveMatch,d={originalPath:a,regexp:a},g=d.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,c,b,d){a="?"===d?d:null;d="*"===d?d:null;g.push({name:b,optional:!!a});c=c||"";return""+(a?"":c)+"(?:"+(a?c:"")+(d&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");d.regexp=new RegExp("^"+a+"$",b?"i":"");return d}var g={};this.when=function(a,f){var b=c.copy(f);c.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
	c.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);g[a]=c.extend(b,a&&h(a,b));if(a){var d="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";g[d]=c.extend({redirectTo:a},h(d,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,d,h,p,x){function l(b){var e=s.current;
	(v=(n=k())&&e&&n.$$route===e.$$route&&c.equals(n.pathParams,e.pathParams)&&!n.reloadOnSearch&&!w)||!e&&!n||a.$broadcast("$routeChangeStart",n,e).defaultPrevented&&b&&b.preventDefault()}function m(){var u=s.current,e=n;if(v)u.params=e.params,c.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(c.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),d.when(e).then(function(){if(e){var a=
	c.extend({},e.resolve),b,f;c.forEach(a,function(b,e){a[e]=c.isString(b)?h.get(b):h.invoke(b,null,null,e)});c.isDefined(b=e.template)?c.isFunction(b)&&(b=b(e.params)):c.isDefined(f=e.templateUrl)&&(c.isFunction(f)&&(f=f(e.params)),c.isDefined(f)&&(e.loadedTemplateUrl=x.valueOf(f),b=p(f)));c.isDefined(b)&&(a.$template=b);return d.all(a)}}).then(function(f){e==s.current&&(e&&(e.locals=f,c.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
	e,u,b)})}function k(){var a,b;c.forEach(g,function(d,g){var q;if(q=!b){var h=f.path();q=d.keys;var l={};if(d.regexp)if(h=d.regexp.exec(h)){for(var k=1,m=h.length;k<m;++k){var n=q[k-1],p=h[k];n&&p&&(l[n.name]=p)}q=l}else q=null;else q=null;q=a=q}q&&(b=r(d,{params:c.extend({},f.search(),a),pathParams:a}),b.$$route=d)});return b||g[null]&&r(g[null],{params:{},pathParams:{}})}function t(a,b){var d=[];c.forEach((a||"").split(":"),function(a,c){if(0===c)d.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
	g=f[1];d.push(b[g]);d.push(f[2]||"");delete b[g]}});return d.join("")}var w=!1,n,v,s={routes:g,reload:function(){w=!0;a.$evalAsync(function(){l();m()})},updateParams:function(a){if(this.current&&this.current.$$route)a=c.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",l);a.$on("$locationChangeSuccess",m);return s}]});var B=c.$$minErr("ngRoute");p.provider("$routeParams",function(){this.$get=function(){return{}}});
	p.directive("ngView",v);p.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
	//# sourceMappingURL=angular-route.min.js.map


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	/* 使用绘制树状图的脚本 */
	var TreeAPI = __webpack_require__(8);
	
	/*我们把controller 相关的都放到这里*/
	var appControllers = angular.module('appControllers', []);
	
	/*
	 * app首页页面的index.html的controller
	 * */
	appControllers.controller('myControl', ['$scope', 'listModel', function ($scope, listModel) {
	    listModel
	        .getItems('public/api/list.json')
	        .then(function (data) {
	            var json_data = data.data;
	            $scope.listArr = json_data;
	        }, function () {
	            console.log('error...');
	        });
	}]);
	
	/*
	 * category/index 页面的controller
	 * */
	appControllers.controller('categoryControl', ['$scope', function ($scope) {
	
	}]);
	
	/**
	 * content/index 根据目录列表单击后的内容详情页面
	 */
	appControllers.controller('contentControl', ['$scope', 'listModel', function ($scope, listModel) {
	    //获取相关数据
	    listModel
	        .getItems('public/api/category_earth.json')
	        .then(function (data) {
	            var json_data = data.data;
	            $scope.categoryArr = json_data.categoryArr;
	            $scope.title = json_data.title;
	        }, function () {
	            console.log('error....');
	        });
	}]);
	
	
	appControllers.controller('contentDetailControl', ['$scope', 'listModel', '$routeParams', '$location', '$sce', function ($scope, listModel, $routeParams, $location, $sce) {
	    //根据我们的categoryName 来获取对应的具体信息
	    //获得路由url中的参数
	    var paramObj = $location.search(),
	        category_name = paramObj.category,
	        api_url = "public/api/" + category_name + '.json';

		console.log($location.search().category);

	    listModel.getItems(api_url)
	        .then(function (data) {
	            var json_data = data.data;
	
	            console.log(json_data);
	            if (!json_data.title) {
	                //说明先载入树状图,进入树状图页面
	                window.location.href = '/public/tree?category=' + category_name;
	            } else {
	                //直接呈现具体内容页面
	                $scope.title = json_data.title;
	                //$scope.sectionArr = json_data.read;
					//测试: 使用$sce.trustAsHtml
					$scope.sectionArr = $sce.trustAsHtml($rootScope.sectionArr);
	                $scope.videoArr = json_data.video;
	                $scope.findArr = json_data.find;
	            }
	        }, function (err) {
	            console.log('error....');
	        });
	}]);
	
	/**
	 * 树状图页面的controller
	 */
	appControllers.controller('treeControl', ['$http', '$location', 'listModel', function ($http, $location, listModel) {
	    var paramObj = $location.search(),
	        category_name = paramObj.category,
	        api_url = "public/api/" + category_name + '.json';
	
	
	    //点击叶子后相关的处理方法
	    var callBackHandler = function(key){
	        var data = this.jsonData[key];
	        console.log(data);
	    };
	
	    listModel.getItems(api_url)
	        .then(function (data) {
	            var json_data = data.data;
	            var title_center = json_data.centerTitle;
	            var title_arr = json_data.sectionArr;
	
	            var param_data  = {
	                jsonData: json_data
	            };
	
	           //调用绘制树状图的api
	           TreeAPI.drawTree('canvas', 105, 30, title_arr.length, title_arr, callBackHandler.bind(param_data));
	           TreeAPI.drawCenterText('canvas', title_center);
	
	        }, function (err) {
	            console.log(err);
	        });
	}]);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var Raphael = __webpack_require__(9);
	
	var centerPt = {
	    x: 150,
	    y: 200
	};
	
	/**
	 * @param text 中心叶子上要写的文字内容
	 */
	var drawCenterText = function(id, text){
	    //根据id获取容器
	    var r = Raphael(id, 300, 400);
	
	    r.text(centerPt.x + 2.5, centerPt.y, text)
	        .attr({'font-size': '16px', 'fill': '#fff'});
	};
	/*
	 * func: 绘制树状图的方法
	 * @param disR: 各个叶子距离中心点的距离
	 * @param radius: 各个叶子的半径
	 * @param length: 叶子的个数
	 * @param textArr: 叶子上要打上的text
	 */
	var drawTree = function (id, disR, radius, length, textArr, callback) {
	    disR = disR || 110;
	    radius = radius || 30;
	    //根据id获取容器
	    var r = Raphael(id, 300, 400);
	
	    r.circle(centerPt.x, centerPt.y, radius+8)
	        .attr({fill: '#209825', stroke: '#13e11d', opacity:1});
	
	    var startPt = {
	        x: centerPt.x,
	        y: centerPt.y - disR
	    };
	
	    var perDeg = 2 * Math.PI / length;
	
	    var getPos = function (index) {
	        return {
	            x: startPt.x + disR * Math.sin(perDeg * index) + Math.random() * 5,
	            y: startPt.y + disR - disR * Math.cos(perDeg * index) - Math.random() * 10
	        }
	    };
	
	    for (var i = 0; i < length; i++) {
	        var pos = getPos(i);
	        //绘制圆形
	        r.circle(pos.x, pos.y, radius)
	            .data('id', textArr[i])//通过使用data 来设置id
	            .attr({fill: '#209825', stroke: '#13e11d', opacity: 1})
	            .mouseover(function () {
	                var category = this.data("id");
	                callback(category);
	                //给circle设置动画效果
	                this.animate({r: '40', fill: '#60b111', opacity:.8}, 300);
	            })
	            .mouseout(function () {
	                this.animate({r: '30', fill: '#209825', opacity: 1}, 300);
	            });
	
	        //raphael 绘制直线的方式也很简单
	        var pathStr = "M" + centerPt.x + "," + centerPt.y + ' L' + (pos.x) + "," + (pos.y);
	
	        r.path(pathStr)
	            .attr({stroke: '#209825'});
	
	        r.text(pos.x + 2.5, pos.y, textArr[i])
	            .attr({'font-size': '16px', 'fill': '#fff'});
	    }
	};
	
	
	module.exports = {
	    drawTree: drawTree,
	    drawCenterText: drawCenterText
	};
	
	
	
	


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_3__;var __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_1__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_2__;// ┌────────────────────────────────────────────────────────────────────┐ \\
	// │ Raphaël 2.1.4 - JavaScript Vector Library                          │ \\
	// ├────────────────────────────────────────────────────────────────────┤ \\
	// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
	// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
	// ├────────────────────────────────────────────────────────────────────┤ \\
	// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
	// └────────────────────────────────────────────────────────────────────┘ \\
	!function(a,b){ true?!(__WEBPACK_LOCAL_MODULE_0__ = function(){return b()}.call(exports, __webpack_require__, exports, module)):"object"==typeof exports?module.exports=b():a.eve=b()}(this,function(){var a,b,c="0.4.2",d="hasOwnProperty",e=/[\.\/]/,f="*",g=function(){},h=function(a,b){return a-b},i={n:{}},j=function(c,d){c=String(c);var e,f=b,g=Array.prototype.slice.call(arguments,2),i=j.listeners(c),k=0,l=[],m={},n=[],o=a;a=c,b=0;for(var p=0,q=i.length;q>p;p++)"zIndex"in i[p]&&(l.push(i[p].zIndex),i[p].zIndex<0&&(m[i[p].zIndex]=i[p]));for(l.sort(h);l[k]<0;)if(e=m[l[k++]],n.push(e.apply(d,g)),b)return b=f,n;for(p=0;q>p;p++)if(e=i[p],"zIndex"in e)if(e.zIndex==l[k]){if(n.push(e.apply(d,g)),b)break;do if(k++,e=m[l[k]],e&&n.push(e.apply(d,g)),b)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),b)break;return b=f,a=o,n.length?n:null};return j._events=i,j.listeners=function(a){var b,c,d,g,h,j,k,l,m=a.split(e),n=i,o=[n],p=[];for(g=0,h=m.length;h>g;g++){for(l=[],j=0,k=o.length;k>j;j++)for(n=o[j].n,c=[n[m[g]],n[f]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},j.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(e),d=i,f=0,h=c.length;h>f;f++)d=d.n,d=d.hasOwnProperty(c[f])&&d[c[f]]||(d[c[f]]={n:{}});for(d.f=d.f||[],f=0,h=d.f.length;h>f;f++)if(d.f[f]==b)return g;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},j.f=function(a){var b=[].slice.call(arguments,1);return function(){j.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},j.stop=function(){b=1},j.nt=function(b){return b?new RegExp("(?:\\.|\\/|^)"+b+"(?:\\.|\\/|$)").test(a):a},j.nts=function(){return a.split(e)},j.off=j.unbind=function(a,b){if(!a)return void(j._events=i={n:{}});var c,g,h,k,l,m,n,o=a.split(e),p=[i];for(k=0,l=o.length;l>k;k++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[k]!=f)c[o[k]]&&h.push(c[o[k]]);else for(g in c)c[d](g)&&h.push(c[g]);p.splice.apply(p,h)}for(k=0,l=p.length;l>k;k++)for(c=p[k];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(g in c.n)if(c.n[d](g)&&c.n[g].f){var q=c.n[g].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[g].f}}else{delete c.f;for(g in c.n)c.n[d](g)&&c.n[g].f&&delete c.n[g].f}c=c.n}},j.once=function(a,b){var c=function(){return j.unbind(a,c),b.apply(this,arguments)};return j.on(a,c)},j.version=c,j.toString=function(){return"You are running Eve "+c},j}),function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_LOCAL_MODULE_1__ = (function(a){return b(a)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):"object"==typeof exports?module.exports=b(require("eve")):a.Raphael=b(a.eve)}(this,function(a){function b(c){if(b.is(c,"function"))return t?c():a.on("raphael.DOMload",c);if(b.is(c,U))return b._engine.create[C](b,c.splice(0,3+b.is(c[0],S))).add(c);var d=Array.prototype.slice.call(arguments,0);if(b.is(d[d.length-1],"function")){var e=d.pop();return t?e.call(b._engine.create[C](b,d)):a.on("raphael.DOMload",function(){e.call(b._engine.create[C](b,d))})}return b._engine.create[C](b,arguments)}function c(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var d in a)a[y](d)&&(b[d]=c(a[d]));return b}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function e(a,b,c){function e(){var f=Array.prototype.slice.call(arguments,0),g=f.join("␀"),h=e.cache=e.cache||{},i=e.count=e.count||[];return h[y](g)?(d(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[C](b,f),c?c(h[g]):h[g])}return e}function f(){return this.hex}function g(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function h(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function i(a,b,c,d,e,f,g,i,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=h(q,a,c,e,g),s=h(q,b,d,f,i),t=r*r+s*s;o+=n[p]*M.sqrt(t)}return k*o}function j(a,b,c,d,e,f,g,h,j){if(!(0>j||i(a,b,c,d,e,f,g,h)<j)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=i(a,b,c,d,e,f,g,h,n);P(k-j)>o;)m/=2,n+=(j>k?1:-1)*m,k=i(a,b,c,d,e,f,g,h,n);return n}}function k(a,b,c,d,e,f,g,h){if(!(N(a,c)<O(e,g)||O(a,c)>N(e,g)||N(b,d)<O(f,h)||O(b,d)>N(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+O(a,c).toFixed(2)||n>+N(a,c).toFixed(2)||n<+O(e,g).toFixed(2)||n>+N(e,g).toFixed(2)||o<+O(b,d).toFixed(2)||o>+N(b,d).toFixed(2)||o<+O(f,h).toFixed(2)||o>+N(f,h).toFixed(2)))return{x:l,y:m}}}}function l(a,c,d){var e=b.bezierBBox(a),f=b.bezierBBox(c);if(!b.isBBoxIntersect(e,f))return d?0:[];for(var g=i.apply(0,a),h=i.apply(0,c),j=N(~~(g/5),1),l=N(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;j+1>q;q++){var r=b.findDotsAtSegment.apply(b,a.concat(q/j));m.push({x:r.x,y:r.y,t:q/j})}for(q=0;l+1>q;q++)r=b.findDotsAtSegment.apply(b,c.concat(q/l)),n.push({x:r.x,y:r.y,t:q/l});for(q=0;j>q;q++)for(var s=0;l>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=P(u.x-t.x)<.001?"y":"x",y=P(w.x-v.x)<.001?"y":"x",z=k(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+P((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+P((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:O(A,1),t2:O(B,1)}))}}return p}function m(a,c,d){a=b._path2curve(a),c=b._path2curve(c);for(var e,f,g,h,i,j,k,m,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=c.length;u>t;t++){var v=c[t];if("M"==v[0])g=k=v[1],h=m=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,m,k,m],g=k,h=m);var w=l(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function n(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function o(){return this.x+G+this.y+G+this.width+" × "+this.height}function p(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,P(f)<b)return e;if(h=(3*l*e+2*k)*e+j,P(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),P(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function q(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[y](e)&&(d[$(e)]=a[e],c.push($(e)));c.sort(ka)}this.anim=d,this.top=c[c.length-1],this.percents=c}function r(c,d,e,f,g,h){e=$(e);var i,j,k,l,m,o,q=c.ms,r={},s={},t={};if(f)for(w=0,x=fb.length;x>w;w++){var u=fb[w];if(u.el.id==d.id&&u.anim==c){u.percent!=e?(fb.splice(w,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var w=0,x=c.percents.length;x>w;w++){if(c.percents[w]==e||c.percents[w]>f*c.top){e=c.percents[w],m=c.percents[w-1]||0,q=q/c.top*(e-m),l=c.percents[w+1],i=c.anim[e];break}f&&d.attr(c.anim[c.percents[w]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var z in i)if(i[y](z)&&(ca[y](z)||d.paper.customAttributes[y](z)))switch(r[z]=d.attr(z),null==r[z]&&(r[z]=ba[z]),s[z]=i[z],ca[z]){case S:t[z]=(s[z]-r[z])/q;break;case"colour":r[z]=b.getRGB(r[z]);var A=b.getRGB(s[z]);t[z]={r:(A.r-r[z].r)/q,g:(A.g-r[z].g)/q,b:(A.b-r[z].b)/q};break;case"path":var B=Ia(r[z],s[z]),C=B[1];for(r[z]=B[0],t[z]=[],w=0,x=r[z].length;x>w;w++){t[z][w]=[0];for(var E=1,F=r[z][w].length;F>E;E++)t[z][w][E]=(C[w][E]-r[z][w][E])/q}break;case"transform":var G=d._,J=Na(G[z],s[z]);if(J)for(r[z]=J.from,s[z]=J.to,t[z]=[],t[z].real=!0,w=0,x=r[z].length;x>w;w++)for(t[z][w]=[r[z][w][0]],E=1,F=r[z][w].length;F>E;E++)t[z][w][E]=(s[z][w][E]-r[z][w][E])/q;else{var K=d.matrix||new n,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[z]=[K.a,K.b,K.c,K.d,K.e,K.f],La(L,s[z]),s[z]=L._.transform,t[z]=[(L.matrix.a-K.a)/q,(L.matrix.b-K.b)/q,(L.matrix.c-K.c)/q,(L.matrix.d-K.d)/q,(L.matrix.e-K.e)/q,(L.matrix.f-K.f)/q]}break;case"csv":var M=H(i[z])[I](v),N=H(r[z])[I](v);if("clip-rect"==z)for(r[z]=N,t[z]=[],w=N.length;w--;)t[z][w]=(M[w]-r[z][w])/q;s[z]=M;break;default:for(M=[][D](i[z]),N=[][D](r[z]),t[z]=[],w=d.paper.customAttributes[z].length;w--;)t[z][w]=((M[w]||0)-(N[w]||0))/q}var O=i.easing,P=b.easing_formulas[O];if(!P)if(P=H(O).match(Y),P&&5==P.length){var Q=P;P=function(a){return p(a,+Q[1],+Q[2],+Q[3],+Q[4],q)}}else P=la;if(o=i.start||c.start||+new Date,u={anim:c,percent:e,timestamp:o,start:o+(c.del||0),status:0,initstatus:f||0,stop:!1,ms:q,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||c.times,origin:d.attr(),totalOrigin:g},fb.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-q*f,1==fb.length))return hb();k&&(u.start=new Date-u.ms*f),1==fb.length&&gb(hb)}a("raphael.anim.start."+d.id,d,c)}}function s(a){for(var b=0;b<fb.length;b++)fb[b].el.paper==a&&fb.splice(b--,1)}b.version="2.1.4",b.eve=a;var t,u,v=/[, ]+/,w={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},x=/\{(\d+)\}/g,y="hasOwnProperty",z={doc:document,win:window},A={was:Object.prototype[y].call(z.win,"Raphael"),is:z.win.Raphael},B=function(){this.ca=this.customAttributes={}},C="apply",D="concat",E="ontouchstart"in z.win||z.win.DocumentTouch&&z.doc instanceof DocumentTouch,F="",G=" ",H=String,I="split",J="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[I](G),K={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},L=H.prototype.toLowerCase,M=Math,N=M.max,O=M.min,P=M.abs,Q=M.pow,R=M.PI,S="number",T="string",U="array",V=Object.prototype.toString,W=(b._ISURL=/^url\(['"]?(.+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),X={NaN:1,Infinity:1,"-Infinity":1},Y=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,Z=M.round,$=parseFloat,_=parseInt,aa=H.prototype.toUpperCase,ba=b._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},ca=b._availableAnimAttrs={blur:S,"clip-rect":"csv",cx:S,cy:S,fill:"colour","fill-opacity":S,"font-size":S,height:S,opacity:S,path:"path",r:S,rx:S,ry:S,stroke:"colour","stroke-opacity":S,"stroke-width":S,transform:"transform",width:S,x:S,y:S},da=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,ea={hs:1,rg:1},fa=/,?([achlmqrstvxz]),?/gi,ga=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ha=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ia=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,ja=(b._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),ka=function(a,b){return $(a)-$(b)},la=function(a){return a},ma=b._rectPath=function(a,b,c,d,e){return e?[["M",a+e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]]:[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},na=function(a,b,c,d){return null==d&&(d=c),[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},oa=b._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return na(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return na(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ma(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ma(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ma(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ma(b.x,b.y,b.width,b.height)}},pa=b.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Ia(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(b._g=z,b.type=z.win.SVGAngle||z.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==b.type){var qa,ra=z.doc.createElement("div");if(ra.innerHTML='<v:shape adj="1"/>',qa=ra.firstChild,qa.style.behavior="url(#default#VML)",!qa||"object"!=typeof qa.adj)return b.type=F;ra=null}b.svg=!(b.vml="VML"==b.type),b._Paper=B,b.fn=u=B.prototype=b.prototype,b._id=0,b._oid=0,b.is=function(a,b){return b=L.call(b),"finite"==b?!X[y](+a):"array"==b?a instanceof Array:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||"array"==b&&Array.isArray&&Array.isArray(a)||V.call(a).slice(8,-1).toLowerCase()==b},b.angle=function(a,c,d,e,f,g){if(null==f){var h=a-d,i=c-e;return h||i?(180+180*M.atan2(-i,-h)/R+360)%360:0}return b.angle(a,c,f,g)-b.angle(d,e,f,g)},b.rad=function(a){return a%360*R/180},b.deg=function(a){return Math.round(180*a/R%360*1e3)/1e3},b.snapTo=function(a,c,d){if(d=b.is(d,"finite")?d:10,b.is(a,U)){for(var e=a.length;e--;)if(P(a[e]-c)<=d)return a[e]}else{a=+a;var f=c%a;if(d>f)return c-f;if(f>a-d)return c-f+a}return c};b.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=16*M.random()|0,c="x"==a?b:3&b|8;return c.toString(16)});b.setWindow=function(c){a("raphael.setWindow",b,z.win,c),z.win=c,z.doc=z.win.document,b._engine.initWin&&b._engine.initWin(z.win)};var sa=function(a){if(b.vml){var c,d=/^\s+|\s+$/g;try{var f=new ActiveXObject("htmlfile");f.write("<body>"),f.close(),c=f.body}catch(g){c=createPopup().document.body}var h=c.createTextRange();sa=e(function(a){try{c.style.color=H(a).replace(d,F);var b=h.queryCommandValue("ForeColor");return b=(255&b)<<16|65280&b|(16711680&b)>>>16,"#"+("000000"+b.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=z.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",z.doc.body.appendChild(i),sa=e(function(a){return i.style.color=a,z.doc.defaultView.getComputedStyle(i,F).getPropertyValue("color")})}return sa(a)},ta=function(){return"hsb("+[this.h,this.s,this.b]+")"},ua=function(){return"hsl("+[this.h,this.s,this.l]+")"},va=function(){return this.hex},wa=function(a,c,d){if(null==c&&b.is(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,c=a.g,a=a.r),null==c&&b.is(a,T)){var e=b.getRGB(a);a=e.r,c=e.g,d=e.b}return(a>1||c>1||d>1)&&(a/=255,c/=255,d/=255),[a,c,d]},xa=function(a,c,d,e){a*=255,c*=255,d*=255;var f={r:a,g:c,b:d,hex:b.rgb(a,c,d),toString:va};return b.is(e,"finite")&&(f.opacity=e),f};b.color=function(a){var c;return b.is(a,"object")&&"h"in a&&"s"in a&&"b"in a?(c=b.hsb2rgb(a),a.r=c.r,a.g=c.g,a.b=c.b,a.hex=c.hex):b.is(a,"object")&&"h"in a&&"s"in a&&"l"in a?(c=b.hsl2rgb(a),a.r=c.r,a.g=c.g,a.b=c.b,a.hex=c.hex):(b.is(a,"string")&&(a=b.getRGB(a)),b.is(a,"object")&&"r"in a&&"g"in a&&"b"in a?(c=b.rgb2hsl(a),a.h=c.h,a.s=c.s,a.l=c.l,c=b.rgb2hsb(a),a.v=c.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=va,a},b.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,d=a.o,a=a.h),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-P(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],xa(e,f,g,d)},b.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-P(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],xa(e,f,g,d)},b.rgb2hsb=function(a,b,c){c=wa(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=N(a,b,c),g=f-O(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:ta}},b.rgb2hsl=function(a,b,c){c=wa(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=N(a,b,c),h=O(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:ua}},b._path2string=function(){return this.join(",").replace(fa,"$1")};b._preload=function(a,b){var c=z.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,z.doc.body.removeChild(this)},c.onerror=function(){z.doc.body.removeChild(this)},z.doc.body.appendChild(c),c.src=a};b.getRGB=e(function(a){if(!a||(a=H(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:f};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:f};!(ea[y](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=sa(a));var c,d,e,g,h,i,j=a.match(W);return j?(j[2]&&(e=_(j[2].substring(5),16),d=_(j[2].substring(3,5),16),c=_(j[2].substring(1,3),16)),j[3]&&(e=_((h=j[3].charAt(3))+h,16),d=_((h=j[3].charAt(2))+h,16),c=_((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][I](da),c=$(i[0]),"%"==i[0].slice(-1)&&(c*=2.55),d=$(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=$(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(g=$(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100)),j[5]?(i=j[5][I](da),c=$(i[0]),"%"==i[0].slice(-1)&&(c*=2.55),d=$(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=$(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(c/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(g=$(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100),b.hsb2rgb(c,d,e,g)):j[6]?(i=j[6][I](da),c=$(i[0]),"%"==i[0].slice(-1)&&(c*=2.55),d=$(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=$(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(c/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(g=$(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100),b.hsl2rgb(c,d,e,g)):(j={r:c,g:d,b:e,toString:f},j.hex="#"+(16777216|e|d<<8|c<<16).toString(16).slice(1),b.is(g,"finite")&&(j.opacity=g),j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:f}},b),b.hsb=e(function(a,c,d){return b.hsb2rgb(a,c,d).hex}),b.hsl=e(function(a,c,d){return b.hsl2rgb(a,c,d).hex}),b.rgb=e(function(a,b,c){function d(a){return a+.5|0}return"#"+(16777216|d(c)|d(b)<<8|d(a)<<16).toString(16).slice(1)}),b.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},b.getColor.reset=function(){delete this.start},b.parsePathString=function(a){if(!a)return null;var c=ya(a);if(c.arr)return Aa(c.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return b.is(a,U)&&b.is(a[0],U)&&(e=Aa(a)),e.length||H(a).replace(ga,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(ia,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b][D](f.splice(0,2))),g="l",b="m"==b?"l":"L"),"r"==g)e.push([b][D](f));else for(;f.length>=d[g]&&(e.push([b][D](f.splice(0,d[g]))),d[g]););}),e.toString=b._path2string,c.arr=Aa(e),e},b.parseTransformString=e(function(a){if(!a)return null;var c=[];return b.is(a,U)&&b.is(a[0],U)&&(c=Aa(a)),c.length||H(a).replace(ha,function(a,b,d){{var e=[];L.call(b)}d.replace(ia,function(a,b){b&&e.push(+b)}),c.push([b][D](e))}),c.toString=b._path2string,c});var ya=function(a){var b=ya.ps=ya.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[y](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};b.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=Q(j,3),l=Q(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*M.atan2(q-s,r-t)/R;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},b.bezierBBox=function(a,c,d,e,f,g,h,i){b.is(a,"array")||(a=[a,c,d,e,f,g,h,i]);var j=Ha.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},b.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},b.isBBoxIntersect=function(a,c){var d=b.isPointInsideBBox;return d(c,a.x,a.y)||d(c,a.x2,a.y)||d(c,a.x,a.y2)||d(c,a.x2,a.y2)||d(a,c.x,c.y)||d(a,c.x2,c.y)||d(a,c.x,c.y2)||d(a,c.x2,c.y2)||(a.x<c.x2&&a.x>c.x||c.x<a.x2&&c.x>a.x)&&(a.y<c.y2&&a.y>c.y||c.y<a.y2&&c.y>a.y)},b.pathIntersection=function(a,b){return m(a,b)},b.pathIntersectionNumber=function(a,b){return m(a,b,1)},b.isPointInsidePath=function(a,c,d){var e=b.pathBBox(a);return b.isPointInsideBBox(e,c,d)&&m(a,[["M",c,d],["H",e.x2+10]],1)%2==1},b._removedFactory=function(b){return function(){a("raphael.log",null,"Raphaël: you are calling to method “"+b+"” of removed object",b)}};var za=b.pathBBox=function(a){var b=ya(a);if(b.bbox)return c(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Ia(a);for(var d,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(d=a[i],"M"==d[0])e=d[1],f=d[2],g.push(e),h.push(f);else{var k=Ha(e,f,d[1],d[2],d[3],d[4],d[5],d[6]);g=g[D](k.min.x,k.max.x),h=h[D](k.min.y,k.max.y),e=d[5],f=d[6]}var l=O[C](0,g),m=O[C](0,h),n=N[C](0,g),o=N[C](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=c(r),r},Aa=function(a){var d=c(a);return d.toString=b._path2string,d},Ba=b._pathToRelative=function(a){var c=ya(a);if(c.rel)return Aa(c.rel);b.is(a,U)&&b.is(a&&a[0],U)||(a=b.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;"M"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=L.call(m[0]))switch(l[0]=L.call(m[0]),l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],"m"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=b._path2string,c.rel=Aa(d),d},Ca=b._pathToAbsolute=function(a){var c=ya(a);if(c.abs)return Aa(c.abs);if(b.is(a,U)&&b.is(a&&a[0],U)||(a=b.parsePathString(a)),!a||!a.length)return[["M",0,0]];var d=[],e=0,f=0,h=0,i=0,j=0;"M"==a[0][0]&&(e=+a[0][1],f=+a[0][2],h=e,i=f,j++,d[0]=["M",e,f]);for(var k,l,m=3==a.length&&"M"==a[0][0]&&"R"==a[1][0].toUpperCase()&&"Z"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=aa.call(l[0]))switch(k[0]=aa.call(l[0]),k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":for(var p=[e,f][D](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[D](g(p,m));break;case"M":h=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if("R"==l[0])p=[e,f][D](l.slice(1)),d.pop(),d=d[D](g(p,m)),k=["R"][D](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case"Z":e=h,f=i;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":h=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=b._path2string,c.abs=Aa(d),d},Da=function(a,b,c,d){return[a,b,c,d,c,d]},Ea=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Fa=function(a,b,c,d,f,g,h,i,j,k){var l,m=120*R/180,n=R/180*(+f||0),o=[],p=e(function(a,b,c){var d=a*M.cos(c)-b*M.sin(c),e=a*M.sin(c)+b*M.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(M.cos(R/180*f),M.sin(R/180*f),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=M.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*M.sqrt(P((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=M.asin(((b-x)/d).toFixed(9)),z=M.asin(((j-x)/d).toFixed(9));y=w>a?R-y:y,z=w>i?R-z:z,0>y&&(y=2*R+y),0>z&&(z=2*R+z),h&&y>z&&(y-=2*R),!h&&z>y&&(z-=2*R)}var A=z-y;if(P(A)>m){var B=z,C=i,E=j;z=y+m*(h&&z>y?1:-1),i=w+c*M.cos(z),j=x+d*M.sin(z),o=Fa(i,j,c,d,f,0,h,C,E,[z,B,w,x])}A=z-y;var F=M.cos(y),G=M.sin(y),H=M.cos(z),J=M.sin(z),K=M.tan(A/4),L=4/3*c*K,N=4/3*d*K,O=[a,b],Q=[a+L*G,b-N*F],S=[i+L*J,j-N*H],T=[i,j];if(Q[0]=2*O[0]-Q[0],Q[1]=2*O[1]-Q[1],k)return[Q,S,T][D](o);o=[Q,S,T][D](o).join()[I](",");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ga=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:Q(j,3)*a+3*Q(j,2)*i*c+3*j*i*i*e+Q(i,3)*g,y:Q(j,3)*b+3*Q(j,2)*i*d+3*j*i*i*f+Q(i,3)*h}},Ha=e(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+M.sqrt(k*k-4*j*l))/2/j,n=(-k-M.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return P(m)>"1e12"&&(m=.5),P(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ga(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ga(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+M.sqrt(k*k-4*j*l))/2/j,n=(-k-M.sqrt(k*k-4*j*l))/2/j,P(m)>"1e12"&&(m=.5),P(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Ga(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ga(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:O[C](0,p),y:O[C](0,o)},max:{x:N[C](0,p),y:N[C](0,o)}}}),Ia=b._path2curve=e(function(a,b){var c=!b&&ya(a);if(!b&&c.curve)return Aa(c.curve);for(var d=Ca(a),e=b&&Ca(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e,f={T:1,Q:1};if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in f)&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][D](Fa[C](0,[b.x,b.y][D](a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e][D](a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"][D](Ea(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][D](Ea(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][D](Da(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][D](Da(b.x,b.y,a[1],b.y));break;case"V":a=["C"][D](Da(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][D](Da(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)k[b]="A",e&&(l[b]="A"),a.splice(b++,0,["C"][D](c.splice(0,6)));a.splice(b,1),p=N(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],p=N(d.length,e&&e.length||0))},k=[],l=[],m="",n="",o=0,p=N(d.length,e&&e.length||0);p>o;o++){d[o]&&(m=d[o][0]),"C"!=m&&(k[o]=m,o&&(n=k[o-1])),d[o]=h(d[o],f,n),"A"!=k[o]&&"C"==m&&(k[o]="C"),i(d,o),e&&(e[o]&&(m=e[o][0]),"C"!=m&&(l[o]=m,o&&(n=l[o-1])),e[o]=h(e[o],g,n),"A"!=l[o]&&"C"==m&&(l[o]="C"),i(e,o)),j(d,e,f,g,o),j(e,d,g,f,o);var q=d[o],r=e&&e[o],s=q.length,t=e&&r.length;f.x=q[s-2],f.y=q[s-1],f.bx=$(q[s-4])||f.x,f.by=$(q[s-3])||f.y,g.bx=e&&($(r[t-4])||g.x),g.by=e&&($(r[t-3])||g.y),g.x=e&&r[t-2],g.y=e&&r[t-1]}return e||(c.curve=Aa(d)),e?[d,e]:d},null,Aa),Ja=(b._parseDots=e(function(a){for(var c=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\d\.]*)/);if(f.color=b.getRGB(g[1]),f.color.error)return null;f.opacity=f.color.opacity,f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),c.push(f)}for(d=1,e=c.length-1;e>d;d++)if(!c[d].offset){for(var h=$(c[d-1].offset||0),i=0,j=d+1;e>j;j++)if(c[j].offset){i=c[j].offset;break}i||(i=100,j=e),i=$(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,c[d].offset=h+"%"}return c}),b._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Ka=(b._tofront=function(a,b){b.top!==a&&(Ja(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},b._toback=function(a,b){b.bottom!==a&&(Ja(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},b._insertafter=function(a,b,c){Ja(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},b._insertbefore=function(a,b,c){Ja(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},b.toMatrix=function(a,b){var c=za(a),d={_:{transform:F},getBBox:function(){return c}};return La(d,b),d.matrix}),La=(b.transformPath=function(a,b){return pa(a,Ka(a,b))},b._extractTransform=function(a,c){if(null==c)return a._.transform;c=H(c).replace(/\.{3}|\u2026/g,a._.transform||F);var d=b.parseTransformString(c),e=0,f=0,g=0,h=1,i=1,j=a._,k=new n;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var o,p,q,r,s,t=d[l],u=t.length,v=H(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;"t"==v&&3==u?w?(o=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-o,r-p)):k.translate(t[1],t[2]):"r"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):"s"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):"m"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ma=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Na=b._equaliseTransform=function(a,c){
	    c=H(c).replace(/\.{3}|\u2026/g,a),a=b.parseTransformString(a)||[],c=b.parseTransformString(c)||[];for(var d,e,f,g,h=N(a.length,c.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ma(c[k]),g=c[k]||Ma(f),f[0]!=g[0]||"r"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||"s"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=N(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])}return{from:i,to:j}};b._getContainer=function(a,c,d,e){var f;return f=null!=e||b.is(a,"object")?a:z.doc.getElementById(a),null!=f?f.tagName?null==c?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d}:{container:1,x:a,y:c,width:d,height:e}:void 0},b.pathToRelative=Ba,b._engine={},b.path2curve=Ia,b.matrix=function(a,b,c,d,e,f){return new n(a,b,c,d,e,f)},function(a){function c(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var b=M.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof n&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new n(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new n(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,c,d){a=b.rad(a),c=c||0,d=d||0;var e=+M.cos(a).toFixed(9),f=+M.sin(a).toFixed(9);this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[H.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return b.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=M.sqrt(c(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=M.sqrt(c(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=b.deg(M.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=b.deg(M.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[I]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[b.dx,b.dy]:F)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:F)+(b.rotate?"r"+[b.rotate,0,0]:F)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(n.prototype);for(var Oa=function(){this.returnValue=!1},Pa=function(){return this.originalEvent.preventDefault()},Qa=function(){this.cancelBubble=!0},Ra=function(){return this.originalEvent.stopPropagation()},Sa=function(a){var b=z.doc.documentElement.scrollTop||z.doc.body.scrollTop,c=z.doc.documentElement.scrollLeft||z.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Ta=function(){return z.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Sa(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),E&&K[b]){var f=function(b){for(var e=Sa(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Pa,b.stopPropagation=Ra;break}return c.call(d,b,e.x,e.y)};a.addEventListener(K[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),E&&K[b]&&a.removeEventListener(K[b],f,!1),!0}}:z.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||z.win.event;var b=z.doc.documentElement.scrollTop||z.doc.body.scrollTop,e=z.doc.documentElement.scrollLeft||z.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Oa,a.stopPropagation=a.stopPropagation||Qa,c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){return a.detachEvent("on"+b,e),!0};return f}:void 0}(),Ua=[],Va=function(b){for(var c,d=b.clientX,e=b.clientY,f=z.doc.documentElement.scrollTop||z.doc.body.scrollTop,g=z.doc.documentElement.scrollLeft||z.doc.body.scrollLeft,h=Ua.length;h--;){if(c=Ua[h],E&&b.touches){for(var i,j=b.touches.length;j--;)if(i=b.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(b.originalEvent?b.originalEvent:b).preventDefault();break}}else b.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;z.win.opera&&n.removeChild(l),l.style.display="none",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,z.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&a("raphael.drag.over."+c.el.id,c.el,k),d+=g,e+=f,a("raphael.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,b)}},Wa=function(c){b.unmousemove(Va).unmouseup(Wa);for(var d,e=Ua.length;e--;)d=Ua[e],d.el._drag={},a("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,c);Ua=[]},Xa=b.el={},Ya=J.length;Ya--;)!function(a){b[a]=Xa[a]=function(c,d){return b.is(c,"function")&&(this.events=this.events||[],this.events.push({name:a,f:c,unbind:Ta(this.shape||this.node||z.doc,a,c,d||this)})),this},b["un"+a]=Xa["un"+a]=function(c){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!b.is(c,"undefined")&&d[e].f!=c||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(J[Ya]);Xa.data=function(c,d){var e=ja[this.id]=ja[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(b.is(c,"object")){for(var f in c)c[y](f)&&this.data(f,c[f]);return this}return a("raphael.data.get."+this.id,this,e[c],c),e[c]}return e[c]=d,a("raphael.data.set."+this.id,this,d,c),this},Xa.removeData=function(a){return null==a?ja[this.id]={}:ja[this.id]&&delete ja[this.id][a],this},Xa.getData=function(){return c(ja[this.id]||{})},Xa.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},Xa.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var Za=[];Xa.drag=function(c,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=z.doc.documentElement.scrollTop||z.doc.body.scrollTop,m=z.doc.documentElement.scrollLeft||z.doc.body.scrollLeft;if(this._drag.id=i.identifier,E&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Ua.length&&b.mousemove(Va).mouseup(Wa),Ua.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&a.on("raphael.drag.start."+this.id,d),c&&a.on("raphael.drag.move."+this.id,c),e&&a.on("raphael.drag.end."+this.id,e),a("raphael.drag.start."+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},Za.push({el:this,start:i}),this.mousedown(i),this},Xa.onDragOver=function(b){b?a.on("raphael.drag.over."+this.id,b):a.unbind("raphael.drag.over."+this.id)},Xa.undrag=function(){for(var c=Za.length;c--;)Za[c].el==this&&(this.unmousedown(Za[c].start),Za.splice(c,1),a.unbind("raphael.drag.*."+this.id));!Za.length&&b.unmousemove(Va).unmouseup(Wa),Ua=[]},u.circle=function(a,c,d){var e=b._engine.circle(this,a||0,c||0,d||0);return this.__set__&&this.__set__.push(e),e},u.rect=function(a,c,d,e,f){var g=b._engine.rect(this,a||0,c||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},u.ellipse=function(a,c,d,e){var f=b._engine.ellipse(this,a||0,c||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},u.path=function(a){a&&!b.is(a,T)&&!b.is(a[0],U)&&(a+=F);var c=b._engine.path(b.format[C](b,arguments),this);return this.__set__&&this.__set__.push(c),c},u.image=function(a,c,d,e,f){var g=b._engine.image(this,a||"about:blank",c||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},u.text=function(a,c,d){var e=b._engine.text(this,a||0,c||0,H(d));return this.__set__&&this.__set__.push(e),e},u.set=function(a){!b.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var c=new jb(a);return this.__set__&&this.__set__.push(c),c.paper=this,c.type="set",c},u.setStart=function(a){this.__set__=a||this.set()},u.setFinish=function(a){var b=this.__set__;return delete this.__set__,b},u.getSize=function(){var a=this.canvas.parentNode;return{width:a.offsetWidth,height:a.offsetHeight}},u.setSize=function(a,c){return b._engine.setSize.call(this,a,c)},u.setViewBox=function(a,c,d,e,f){return b._engine.setViewBox.call(this,a,c,d,e,f)},u.top=u.bottom=null,u.raphael=b;var $a=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(z.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(z.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};u.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=z.doc.elementFromPoint(a,b);if(z.win.opera&&"svg"==e.tagName){var f=$a(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},u.getElementsByBBox=function(a){var c=this.set();return this.forEach(function(d){b.isBBoxIntersect(d.getBBox(),a)&&c.push(d)}),c},u.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},u.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},u.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},Xa.isPointInside=function(a,c){var d=this.realPath=oa[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(d=b.transformPath(d,this.attr("transform"))),b.isPointInsidePath(d,a,c)},Xa.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=oa[this.type](this),b.bboxwt=za(this.realPath),b.bboxwt.toString=o,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=oa[this.type](this)),b.bbox=za(pa(this.realPath,this.matrix)),b.bbox.toString=o,b.dirty=b.dirtyT=0),b.bbox)},Xa.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},Xa.glow=function(a){if("text"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:null==a.opacity?.5:a.opacity,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||oa[this.type](this);f=this.matrix?pa(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var _a=function(a,c,d,e,f,g,h,k,l){return null==l?i(a,c,d,e,f,g,h,k):b.findDotsAtSegment(a,c,d,e,f,g,h,k,j(a,c,d,e,f,g,h,k,l))},ab=function(a,c){return function(d,e,f){d=Ia(d);for(var g,h,i,j,k,l="",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],"M"==i[0])g=+i[1],h=+i[2];else{if(j=_a(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(c&&!m.start){if(k=_a(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=["C"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=["M"+k.x,k.y+"C"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!c)return k=_a(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:c?m:b.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},bb=ab(1),cb=ab(),db=ab(0,1);b.getTotalLength=bb,b.getPointAtLength=cb,b.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return db(a,b).end;var d=db(a,c,1);return b?db(d,b).end:d},Xa.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():bb(a)},Xa.getPointAtLength=function(a){var b=this.getPath();if(b)return cb(b,a)},Xa.getPath=function(){var a,c=b._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return c&&(a=c(this)),a},Xa.getSubpath=function(a,c){var d=this.getPath();if(d)return b.getSubpath(d,a,c)};var eb=b.easing_formulas={linear:function(a){return a},"<":function(a){return Q(a,1.7)},">":function(a){return Q(a,.48)},"<>":function(a){var b=.48-a/1.04,c=M.sqrt(.1734+b*b),d=c-b,e=Q(P(d),1/3)*(0>d?-1:1),f=-c-b,g=Q(P(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:Q(2,-10*a)*M.sin(2*(a-.075)*R/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};eb.easeIn=eb["ease-in"]=eb["<"],eb.easeOut=eb["ease-out"]=eb[">"],eb.easeInOut=eb["ease-in-out"]=eb["<>"],eb["back-in"]=eb.backIn,eb["back-out"]=eb.backOut;var fb=[],gb=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,16)},hb=function(){for(var c=+new Date,d=0;d<fb.length;d++){var e=fb[d];if(!e.el.removed&&!e.paused){var f,g,h=c-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&fb.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var s in k)if(k[y](s)){switch(ca[s]){case S:f=+k[s]+q*i*l[s];break;case"colour":f="rgb("+[ib(Z(k[s].r+q*i*l[s].r)),ib(Z(k[s].g+q*i*l[s].g)),ib(Z(k[s].b+q*i*l[s].b))].join(",")+")";break;case"path":f=[];for(var t=0,u=k[s].length;u>t;t++){f[t]=[k[s][t][0]];for(var v=1,w=k[s][t].length;w>v;v++)f[t][v]=+k[s][t][v]+q*i*l[s][t][v];f[t]=f[t].join(G)}f=f.join(G);break;case"transform":if(l[s].real)for(f=[],t=0,u=k[s].length;u>t;t++)for(f[t]=[k[s][t][0]],v=1,w=k[s][t].length;w>v;v++)f[t][v]=k[s][t][v]+q*i*l[s][t][v];else{var x=function(a){return+k[s][a]+q*i*l[s][a]};f=[["m",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case"csv":if("clip-rect"==s)for(f=[],t=4;t--;)f[t]=+k[s][t]+q*i*l[s][t];break;default:var z=[][D](k[s]);for(f=[],t=n.paper.customAttributes[s].length;t--;)f[t]=+z[t]+q*i*l[s][t]}o[s]=f}n.attr(o),function(b,c,d){setTimeout(function(){a("raphael.anim.frame."+b,c,d)})}(n.id,n,e.anim)}else{if(function(c,d,e){setTimeout(function(){a("raphael.anim.frame."+d.id,d,e),a("raphael.anim.finish."+d.id,d,e),b.is(c,"function")&&c.call(d)})}(e.callback,n,e.anim),n.attr(m),fb.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[y](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),r(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&r(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}fb.length&&gb(hb)},ib=function(a){return a>255?255:0>a?0:a};Xa.animateWith=function(a,c,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof q?d:b.animation(d,e,f,g);r(i,h,i.percents[0],null,h.attr());for(var j=0,k=fb.length;k>j;j++)if(fb[j].anim==c&&fb[j].el==a){fb[k-1].start=fb[j].start;break}return h},Xa.onAnimation=function(b){return b?a.on("raphael.anim.frame."+this.id,b):a.unbind("raphael.anim.frame."+this.id),this},q.prototype.delay=function(a){var b=new q(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},q.prototype.repeat=function(a){var b=new q(this.anim,this.ms);return b.del=this.del,b.times=M.floor(N(a,0))||1,b},b.animation=function(a,c,d,e){if(a instanceof q)return a;(b.is(d,"function")||!d)&&(e=e||d||null,d=null),a=Object(a),c=+c||0;var f,g,h={};for(g in a)a[y](g)&&$(g)!=g&&$(g)+"%"!=g&&(f=!0,h[g]=a[g]);if(f)return d&&(h.easing=d),e&&(h.callback=e),new q({100:h},c);if(e){var i=0;for(var j in a){var k=_(j);a[y](j)&&k>i&&(i=k)}i+="%",!a[i].callback&&(a[i].callback=e)}return new q(a,c)},Xa.animate=function(a,c,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof q?a:b.animation(a,c,d,e);return r(g,f,g.percents[0],null,f.attr()),f},Xa.setTime=function(a,b){return a&&null!=b&&this.status(a,O(b,a.ms)/a.ms),this},Xa.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return r(a,this,-1,O(b,1)),this;for(c=fb.length;c>f;f++)if(d=fb[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},Xa.pause=function(b){for(var c=0;c<fb.length;c++)fb[c].el.id!=this.id||b&&fb[c].anim!=b||a("raphael.anim.pause."+this.id,this,fb[c].anim)!==!1&&(fb[c].paused=!0);return this},Xa.resume=function(b){for(var c=0;c<fb.length;c++)if(fb[c].el.id==this.id&&(!b||fb[c].anim==b)){var d=fb[c];a("raphael.anim.resume."+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},Xa.stop=function(b){for(var c=0;c<fb.length;c++)fb[c].el.id!=this.id||b&&fb[c].anim!=b||a("raphael.anim.stop."+this.id,this,fb[c].anim)!==!1&&fb.splice(c--,1);return this},a.on("raphael.remove",s),a.on("raphael.clear",s),Xa.toString=function(){return"Raphaël’s object"};var jb=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=Xa.constructor&&a[b].constructor!=jb||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},kb=jb.prototype;kb.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=Xa.constructor&&a.constructor!=jb||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},kb.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},kb.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var lb in Xa)Xa[y](lb)&&(kb[lb]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][C](c,b)})}}(lb));return kb.attr=function(a,c){if(a&&b.is(a,U)&&b.is(a[0],"object"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,c);return this},kb.clear=function(){for(;this.length;)this.pop()},kb.splice=function(a,b,c){a=0>a?N(this.length+a,0):a,b=N(0,O(this.length-a,b));var d,e=[],f=[],g=[];for(d=2;d<arguments.length;d++)g.push(arguments[d]);for(d=0;b>d;d++)f.push(this[a+d]);for(;d<this.length-a;d++)e.push(this[a+d]);var h=g.length;for(d=0;d<h+e.length;d++)this.items[a+d]=this[a+d]=h>d?g[d]:e[d-h];for(d=this.items.length=this.length-=b-h;this[d];)delete this[d++];return new jb(f)},kb.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},kb.animate=function(a,c,d,e){(b.is(d,"function")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=b.is(d,T)?d:g;var k=b.animation(a,c,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},kb.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},kb.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=O[C](0,a),b=O[C](0,b),c=N[C](0,c),d=N[C](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},kb.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},kb.toString=function(){return"Raphaël‘s set"},kb.glow=function(a){var b=this.paper.set();return this.forEach(function(c,d){var e=c.glow(a);null!=e&&e.forEach(function(a,c){b.push(a)})}),b},kb.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(c=!0,!1):void 0}),c},b.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[y](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face["units-per-em"]=_(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[y](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"},f.k)for(var g in f.k)f[y](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},u.getFont=function(a,c,d,e){if(e=e||"normal",d=d||"normal",c=+c||{normal:400,bold:700,lighter:300,bolder:800}[c]||400,b.fonts){var f=b.fonts[a];if(!f){var g=new RegExp("(^|\\s)"+a.replace(/[^\w\d\s+!~.:_-]/g,F)+"(\\s|$)","i");for(var h in b.fonts)if(b.fonts[y](h)&&g.test(h)){f=b.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face["font-weight"]!=c||i.face["font-style"]!=d&&i.face["font-style"]||i.face["font-stretch"]!=e);j++);return i}},u.print=function(a,c,d,e,f,g,h,i){g=g||"middle",h=N(O(h||0,1),-1),i=N(O(i||1,3),1);var j,k=H(d)[I](F),l=0,m=0,n=F;if(b.is(e,"string")&&(e=this.getFont(e)),e){j=(f||16)/e.face["units-per-em"];for(var o=e.face.bbox[I](v),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+("baseline"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if("\n"==k[t])l=0,x=0,m=0,r+=q*i;else{var w=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(w.w||e.w)+(w.k&&w.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=b.transformPath(x.d,["t",l*j,r*j,"s",j,j,p,s,"t",(a-p)/j,(c-s)/j]))}}return this.path(n).attr({fill:"#000",stroke:"none"})},u.add=function(a){if(b.is(a,"array"))for(var c,d=this.set(),e=0,f=a.length;f>e;e++)c=a[e]||{},w[y](c.type)&&d.push(this[c.type]().attr(c));return d},b.format=function(a,c){var d=b.is(c,U)?[0][D](c):arguments;return a&&b.is(a,T)&&d.length-1&&(a=a.replace(x,function(a,b){return null==d[++b]?F:d[b]})),a||F},b.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),b.ninja=function(){return A.was?z.win.Raphael=A.is:delete Raphael,b},b.st=kb,a.on("raphael.DOMload",function(){t=!0}),function(a,c,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):b.eve("raphael.DOMload")}null==a.readyState&&a.addEventListener&&(a.addEventListener(c,d=function(){a.removeEventListener(c,d,!1),a.readyState="complete"},!1),a.readyState="loading"),e()}(document,"DOMContentLoaded"),b}),function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__], __WEBPACK_LOCAL_MODULE_2__ = (function(a){return b(a)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):b("object"==typeof exports?require("./raphael.core"):a.Raphael)}(this,function(a){if(!a||a.svg){var b="hasOwnProperty",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};a.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){"string"==typeof d&&(d=q(d));for(var f in e)e[b](f)&&("xlink:"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(b,e){var j="linear",k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){if(e=c(e).replace(a._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),b.gradient&&k!=b.gradient.id&&(p.defs.removeChild(b.gradient),delete b.gradient),!b.gradient){s=q(j+"Gradient",{id:k}),b.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff","stop-opacity":isFinite(w[x].opacity)?w[x].opacity:1}))}}return q(o,{fill:"url('"+document.location.origin+document.location.pathname+"#"+k+"')",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=c(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y+"-obj"+d.id;a._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=a._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=a.getTotalLength(t.path)-E*u):(g=E*u,h=a.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=a.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=a.getTotalLength(t.path)-g):(g=0,h=a.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:a.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[b](k)&&!p[k]){var F=a._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,b,d){if(b=u[c(b).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=b.length;h--;)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}else q(a.node,{"stroke-dasharray":"none"})},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"title":var u=i.getElementsByTagName("title");if(u.length&&(u=u[0]))u.firstChild.nodeValue=p;else{u=q("title");var w=a._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u)}break;case"href":case"target":var x=i.parentNode;if("a"!=x.tagName.toLowerCase()){var z=q("a");x.insertBefore(z,i),z.appendChild(i),x=z}"target"==o?x.setAttributeNS(n,"show","blank"==p?"new":p):x.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var A=c(p).split(j);if(4==A.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var B=q("clipPath"),C=q("rect");B.id=a.createUUID(),q(C,{x:A[0],y:A[1],width:A[2],height:A[3]}),B.appendChild(C),d.paper.defs.appendChild(B),q(i,{"clip-path":"url(#"+B.id+")"}),d.clip=C}if(!p){var D=i.getAttribute("clip-path");if(D){var E=a._g.doc.getElementById(D.replace(/(^url\(#|\)$)/g,l));E&&E.parentNode.removeChild(E),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=a._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var F=c(p).match(a._ISURL);if(F){B=q("pattern");var G=q("image");B.id=a.createUUID(),q(B,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(G,{x:0,y:0,"xlink:href":F[1]}),B.appendChild(G),function(b){a._preload(F[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(G,{width:a,height:c})})}(B),d.paper.defs.appendChild(B),q(i,{fill:"url(#"+B.id+")"}),d.pattern=B,d.pattern&&s(d);break}var H=a.getRGB(p);if(H.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=c(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var I=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(I){var J=I.getElementsByTagName("stop");q(J[J.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!a.is(k.opacity,"undefined")&&a.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!a.is(k["fill-opacity"],"undefined")&&a.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});H[b]("opacity")&&q(i,{"fill-opacity":H.opacity>1?H.opacity/100:H.opacity});case"stroke":H=a.getRGB(p),i.setAttribute(o,H.hex),"stroke"==o&&H[b]("opacity")&&q(i,{"stroke-opacity":H.opacity>1?H.opacity/100:H.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=c(p).charAt())&&r(d,p);
	
	    break;case"opacity":k.gradient&&!k[b]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){I=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),I&&(J=I.getElementsByTagName("stop"),q(J[J.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var K=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[K]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[b]("text")||f[b]("font")||f[b]("font-size")||f[b]("x")||f[b]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[b]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=c(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(a._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&a.is(r,"finite")&&q(m[0],{dy:r})}},z=function(a){return a.parentNode&&"a"===a.parentNode.tagName.toLowerCase()?a.parentNode:a},A=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},B=a.el;A.prototype=B,B.constructor=A,a._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new A(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},B.rotate=function(a,b,e){if(this.removed)return this;if(a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(b=e),null==b||null==e){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,b,e]])),this},B.scale=function(a,b,e,f){if(this.removed)return this;if(a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==b&&(b=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this},B.translate=function(a,b){return this.removed?this:(a=c(a).split(j),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([["t",a,b]])),this)},B.transform=function(c){var d=this._;if(null==c)return d.transform;if(a._extractTransform(this,c),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[b]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return d.transform=this.matrix.toTransformString(),this},B.hide=function(){return this.removed||(this.node.style.display="none"),this},B.show=function(){return this.removed||(this.node.style.display=""),this},B.remove=function(){var b=z(this.node);if(!this.removed&&b.parentNode){var c=this.paper;c.__set__&&c.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&c.defs.removeChild(this.gradient),a._tear(this,c),b.parentNode.removeChild(b),this.removeData();for(var d in this)this[d]="function"==typeof this[d]?a._removedFactory(d):null;this.removed=!0}},B._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b,c=!1;this.paper.canvas.parentElement?b=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(b=this.paper.canvas.parentNode.style),b&&"none"==b.display&&(c=!0,b.display="");var d={};try{d=this.node.getBBox()}catch(e){d={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{d=d||{},c&&(b.display="none")}return a&&this.hide(),d},B.attr=function(c,d){if(this.removed)return this;if(null==c){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&a.is(c,"string")){if("fill"==c&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==c)return this._.transform;for(var g=c.split(j),h={},i=0,l=g.length;l>i;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return l-1?h:h[g[0]]}if(null==d&&a.is(c,"array")){for(h={},i=0,l=c.length;l>i;i++)h[c[i]]=this.attr(c[i]);return h}if(null!=d){var m={};m[c]=d}else null!=c&&a.is(c,"object")&&(m=c);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[b](n)&&m[b](n)&&a.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[b](p)&&(m[p]=o[p])}return w(this,m),this},B.toFront=function(){if(this.removed)return this;var b=z(this.node);b.parentNode.appendChild(b);var c=this.paper;return c.top!=this&&a._tofront(this,c),this},B.toBack=function(){if(this.removed)return this;var b=z(this.node),c=b.parentNode;c.insertBefore(b,c.firstChild),a._toback(this,this.paper);this.paper;return this},B.insertAfter=function(b){if(this.removed||!b)return this;var c=z(this.node),d=z(b.node||b[b.length-1].node);return d.nextSibling?d.parentNode.insertBefore(c,d.nextSibling):d.parentNode.appendChild(c),a._insertafter(this,b,this.paper),this},B.insertBefore=function(b){if(this.removed||!b)return this;var c=z(this.node),d=z(b.node||b[0].node);return d.parentNode.insertBefore(c,d),a._insertbefore(this,b,this.paper),this},B.blur=function(b){var c=this;if(0!==+b){var d=q("filter"),e=q("feGaussianBlur");c.attrs.blur=b,d.id=a.createUUID(),q(e,{stdDeviation:+b||1.5}),d.appendChild(e),c.paper.defs.appendChild(d),c._blur=d,q(c.node,{filter:"url(#"+d.id+")"})}else c._blur&&(c._blur.parentNode.removeChild(c._blur),delete c._blur,delete c.attrs.blur),c.node.removeAttribute("filter");return c},a._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new A(e,a);return f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs),f},a._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:b,y:c,width:d,height:e,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs),h},a._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new A(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs),g},a._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image",h},a._engine.text=function(b,c,d,e){var f=q("text");b.canvas&&b.canvas.appendChild(f);var g=new A(f,b);return g.attrs={x:c,y:d,"text-anchor":"middle",text:e,"font-family":a._availableAttrs["font-family"],"font-size":a._availableAttrs["font-size"],stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs),g},a._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,g=b.height;if(!c)throw new Error("SVG container not found.");var h,i=q("svg"),j="overflow:hidden;";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),1==c?(i.style.cssText=j+"position:absolute;left:"+d+"px;top:"+e+"px",a._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+"position:relative",c.firstChild?c.insertBefore(i,c.firstChild):c.appendChild(i)),c=new a._Paper,c.width=f,c.height=g,c.canvas=i,c.clear(),c._left=c._top=0,h&&(c.renderfix=function(){}),c.renderfix(),c},a._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f,h,i=this.getSize(),j=g(c/i.width,d/i.height),l=this.top,n=e?"xMidYMid meet":"xMinYMin";for(null==a?(this._vbSize&&(j=1),delete this._vbSize,f="0 0 "+this.width+m+this.height):(this._vbSize=j,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:n});j&&l;)h="stroke-width"in l.attrs?l.attrs["stroke-width"]:1,l.attr({"stroke-width":h}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[a,b,c,d,!!e],this},a.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+"px"),f&&(this._top=(this._top+f)%1,c.top=this._top+"px"))},a.prototype.clear=function(){a.eve("raphael.clear",this);for(var b=this.canvas;b.firstChild;)b.removeChild(b.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël "+a.version)),b.appendChild(this.desc),b.appendChild(this.defs=q("defs"))},a.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]="function"==typeof this[b]?a._removedFactory(b):null};var C=a.st;for(var D in B)B[b](D)&&!C[b](D)&&(C[D]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(D))}}),function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__], __WEBPACK_LOCAL_MODULE_3__ = (function(a){return b(a)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__))):b("object"==typeof exports?require("./raphael.core"):a.Raphael)}(this,function(a){if(!a||a.vml){var b="hasOwnProperty",c=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=a.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(b){var d=/[ahqstv]/gi,e=a._pathToAbsolute;if(c(b).match(d)&&(e=a._path2curve),d=/[clmz]/g,e==a._pathToAbsolute&&!c(b).match(d)){var g=c(b).replace(q,function(a,b,c){var d=[],e="m"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p["m"==b?"l":"L"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(b);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),"z"==i&&(i="x");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?",":o);g.push(i)}return g.join(n)},y=function(b,c,d){var e=a.matrix();return e.rotate(-b,.5,.5),{dx:e.x(c,d),dy:e.y(c,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q=u/b,r=u/c;if(m.visibility="hidden",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+="x"),0>c&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility="visible"}};a.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,b,d){for(var e=c(b).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";g--;)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[b](t)&&(m[t]=i[t]);if(q&&(m.path=a._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur),(i.path&&"path"==e.type||q)&&(l.path=x(~c(m.path).toLowerCase().indexOf("r")?a._pathToAbsolute(m.path):m.path),e._.dirty=1,"image"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),"transform"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if("clip-rect"in i){var G=c(i["clip-rect"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||a._g.doc.createElement("div"),I=H.style;I.clip=a.format("rect({1}px {2}px {3}px {0}px)",G),l.clipRect||(I.position="absolute",I.top=0,I.left=0,I.width=e.paper.width+"px",I.height=e.paper.height+"px",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i["font-family"]&&(J.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(J.fontSize=i["font-size"]),i["font-weight"]&&(J.fontWeight=i["font-weight"]),i["font-style"]&&(J.fontStyle=i["font-style"])}if("arrow-start"in i&&A(s,i["arrow-start"]),"arrow-end"in i&&A(s,i["arrow-end"],1),null!=i.opacity||null!=i["stroke-width"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i["stroke-width"]||null!=i["stroke-opacity"]||null!=i["fill-opacity"]||null!=i["stroke-dasharray"]||null!=i["stroke-miterlimit"]||null!=i["stroke-linejoin"]||null!=i["stroke-linecap"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),"image"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||"none"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=c(i.fill).match(a._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type="tile";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],a._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=a.getRGB(i.fill).hex,K.src=o,K.type="solid",a.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||"r"!=c(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill="none",m.gradient=i.fill,K.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var O=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+a.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color="none")}l.appendChild(K);var P=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],Q=!1;!P&&(Q=P=F("stroke")),(i.stroke&&"none"!=i.stroke||i["stroke-width"]||null!=i["stroke-opacity"]||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])&&(P.on=!0),("none"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i["stroke-width"])&&(P.on=!1);var R=a.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i["stroke-width"])||1);if(O=h(g(O,0),1),null==i["stroke-width"]&&(S=m["stroke-width"]),i["stroke-width"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i["stroke-linejoin"]&&(P.joinstyle=i["stroke-linejoin"]||"miter"),P.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(P.endcap="butt"==i["stroke-linecap"]?"flat":"square"==i["stroke-linecap"]?"square":"round"),"stroke-dasharray"in i){var T={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};P.dashstyle=T[b](i["stroke-dasharray"])?T[i["stroke-dasharray"]]:o}Q&&l.appendChild(P)}if("text"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),W=d(m["font-size"]||W&&W[0])||10,p.fontSize=W*V+"px",s.textpath.string&&(U.innerHTML=c(s.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,("x"in i||"y"in i)&&(s.path.v=a.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m["text-anchor"]){case"start":s.textpath.style["v-text-align"]="left",s.bbx=s.W/2;break;case"end":s.textpath.style["v-text-align"]="right",s.bbx=-s.W/2;break;default:s.textpath.style["v-text-align"]="center",s.bbx=0}s.textpath.style["v-text-kern"]=!0}},C=function(b,f,g){b.attrs=b.attrs||{};var h=(b.attrs,Math.pow),i="linear",j=".5 .5";if(b.attrs.gradient=f,f=c(f).replace(a._radial_gradient,function(a,b,c){return i="radial",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\s*\-\s*/),"linear"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=a._parseDots(f);if(!l)return null;if(b=b.shape||b.node,l.length){b.removeChild(g),g.on=!0,g.method="none",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():"0% "+g.color,"radial"==i?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=j,g.angle=0):(g.type="gradient",g.angle=(270-k)%360),b.appendChild(g)}return 1},D=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=c,this.matrix=a.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},E=a.el;D.prototype=E,E.constructor=D,E.transform=function(b){if(null==b)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?"s"+[e.scale,e.scale]+"-1-1t"+[e.dx,e.dy]:o;e&&(d=b=c(b).replace(/\.{3}|\u2026/g,this._.transform||o)),a._extractTransform(this,f+b);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~c(this.attrs.fill).indexOf("-"),l=!c(this.attrs.fill).indexOf("url(");if(h.translate(1,1),l||k||"image"==this.type)if(i.matrix="1 0 0 1",i.offset="0 0",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=c(h),i.offset=h.offset();return null!==d&&(this._.transform=d,a._extractTransform(this,d)),this},E.rotate=function(a,b,e){if(this.removed)return this;if(null!=a){if(a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(b=e),null==b||null==e){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,b,e]])),this}},E.translate=function(a,b){return this.removed?this:(a=c(a).split(k),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=b),this.transform(this._.transform.concat([["t",a,b]])),this)},E.scale=function(a,b,e,f){if(this.removed)return this;if(a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==b&&(b=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E.auxGetBBox=a.el.getBBox,E.getBBox=function(){var a=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var b={},c=1/this.paper._viewBoxShift.scale;return b.x=a.x-this.paper._viewBoxShift.dx,b.x*=c,b.y=a.y-this.paper._viewBoxShift.dy,b.y*=c,b.width=a.width*c,b.height=a.height*c,b.x2=b.x+b.width,b.y2=b.y+b.height,b}return a},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),a.eve.unbind("raphael.*.*."+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this)this[b]="function"==typeof this[b]?a._removedFactory(b):null;this.removed=!0}},E.attr=function(c,d){if(this.removed)return this;if(null==c){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&a.is(c,"string")){if(c==j&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=c.split(k),h={},i=0,m=g.length;m>i;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&a.is(c,"array")){for(h={},i=0,m=c.length;m>i;i++)h[c[i]]=this.attr(c[i]);return h}var n;null!=d&&(n={},n[c]=d),null==d&&a.is(c,"object")&&(n=c);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[b](o)&&n[b](o)&&a.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[b](q)&&(n[q]=p[q])}n.text&&"text"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&a._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper)),this)},E.insertAfter=function(b){return this.removed?this:(b.constructor==a.st.constructor&&(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper),this)},E.insertBefore=function(b){return this.removed?this:(b.constructor==a.st.constructor&&(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a._insertbefore(this,b,this.paper),this)},E.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;return d=d.replace(r,o),0!==+b?(this.attrs.blur=b,c.filter=d+n+m+".Blur(pixelradius="+(+b||1.5)+")",c.margin=a.format("-{0}px 0 0 -{0}px",f(+b||1.5))):(c.filter=d,c.margin=0,delete this.attrs.blur),this},a._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},a._engine.rect=function(b,c,d,e,f,g){var h=a._rectPath(c,d,e,f,g),i=b.path(h),j=i.attrs;return i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect",i},a._engine.ellipse=function(a,b,c,d,e){{var f=a.path();f.attrs}return f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e}),f},a._engine.circle=function(a,b,c,d){{var e=a.path();e.attrs}return e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type="circle",B(e,{cx:b,cy:c,r:d}),e},a._engine.image=function(b,c,d,e,f,g){var h=a._rectPath(d,e,f,g),i=b.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=c,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},a._engine.text=function(b,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=a.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=c(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,b),l={fill:"#000",stroke:"none",font:a._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=c(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),b.canvas.appendChild(h);var m=F("skew");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},a._engine.setSize=function(b,c){var d=this.canvas.style;return this.width=b,this.height=c,b==+b&&(b+="px"),c==+c&&(c+="px"),d.width=b,d.height=c,d.clip="rect(0 "+b+" "+c+" 0)",this._viewBox&&a._engine.setViewBox.apply(this,this._viewBox),this},a._engine.setViewBox=function(b,c,d,e,f){a.eve("raphael.setViewBox",this,this._viewBox,[b,c,d,e,f]);var g,h,i=this.getSize(),j=i.width,k=i.height;return f&&(g=k/e,h=j/d,j>d*g&&(b-=(j-d*g)/2/g),k>e*h&&(c-=(k-e*h)/2/h)),this._viewBox=[b,c,d,e,!!f],this._viewBoxShift={dx:-b,dy:-c,scale:i},this.forEach(function(a){a.transform("...")}),this};var F;a._engine.initWin=function(a){var b=a.document;b.styleSheets.length<31?b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"):b.styleSheets[0].addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},a._engine.initWin(a._g.win),a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b.container,d=b.height,e=b.width,f=b.x,g=b.y;if(!c)throw new Error("VML container not found.");var h=new a._Paper,i=h.canvas=a._g.doc.createElement("div"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+="px"),d==+d&&(d+="px"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin="0 0",h.span=a._g.doc.createElement("span"),h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",i.appendChild(h.span),j.cssText=a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,d),1==c?(a._g.doc.body.appendChild(i),j.left=f+"px",j.top=g+"px",j.position="absolute"):c.firstChild?c.insertBefore(i,c.firstChild):c.appendChild(i),h.renderfix=function(){},h},a.prototype.clear=function(){a.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=a._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},a.prototype.remove=function(){a.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]="function"==typeof this[b]?a._removedFactory(b):null;return!0};var G=a.st;for(var H in E)E[b](H)&&!G[b](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}),function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__,__WEBPACK_LOCAL_MODULE_2__,__WEBPACK_LOCAL_MODULE_3__], __WEBPACK_AMD_DEFINE_RESULT__ = function(c){return a.Raphael=b(c)}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if("object"==typeof exports){var c=require("raphael.core");require("raphael.svg"),require("raphael.vml"),module.exports=b(c)}else a.Raphael=b(a.Raphael)}(this,function(a){return a.ninja()});

/***/ },
/* 10 */
/***/ function(module, exports) {

	var appService = angular.module('appService', []);
	
	appService
	    //构建了一个listModel 的service
	    .factory('listModel', ['$http', function ($http) {
	        return {
	            getItems: function (url) {
	                //url: '../api/list.json'
	                return $http.get(url);
	            }
	        };
	    }]);

/***/ },
/* 11 */
/***/ function(module, exports) {

	var appDirective = angular.module('appDirective', []);
	
	appDirective
	    .directive('sectionDir', ['$timeout', function ($timeout) {
	        return {
	            restrict: 'E',
	            scope: true,
	            templateUrl: '/public/partials/content_section.html',
	            link: function ($scope, elem, attrs) {
	                $scope.foldOn = function (e) {
	                    var $elm = angular.element(e.srcElement);
	                    $elm.css('color', '#42c229');
	
	                    $timeout(function () {
	                        $scope.isHide = false;
	                        $elm.css('color', '#000');
	                    }, 200);
	                };
	
	                $scope.foldOff = function (e) {
	                    var $elm = angular.element(e.srcElement);
	                    $elm.css('color', '#42c229');
	
	                    $timeout(function () {
	                        $scope.isHide = true;
	                        $elm.css('color', '#000');
	                    }, 200);
	                };
	            }
	        };
	    }])
	    .directive('videoDir', function () {
	        return {
	            restrict: 'E',
	            scope: true,
	            templateUrl: '/public/partials/video_section.html'
	        };
	    })
	    .directive('findDir', function () {
	        return {
	            restrict: 'E',
	            scope: true,
	            templateUrl: '/public/partials/find_section.html'
	        };
	    });

/***/ }
]);
//# sourceMappingURL=index.bundle.js.map