!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(this,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=11)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),o=n(1),a=0,r=0,u=0,s=0,l=.01;function c(){if(void 0!==window.getAdapterInfo){var t=Laya.stage,e=window.getAdapterInfo({width:p(),height:f(),scaleMode:d()});t.designWidth=e.w,t.designHeight=e.h,t.width=e.rw,t.height=e.rh,t.scale(e.scaleX,e.scaleY)}}function p(){return Laya.stage.width}function f(){return Laya.stage.height}function d(){return Laya.stage.scaleMode}e.initScreen=function(t,e,n){for(var p=[],f=3;f<arguments.length;f++)p[f-3]=arguments[f];u=e,s=n;var d=Laya.Browser.clientHeight/laya.utils.Browser.clientWidth,h=n/e,_=e,y=n;a=0,r=0,Math.abs(d/h-1)>l&&(d>h?r=((y=e*d)-n)/2:d<h&&(a=((_=n/d)-e)/2)),t?Laya3D.init.apply(this,[_,y].concat(p)):Laya.init.apply(this,[_,y].concat(p)),Laya.stage.scaleMode=Laya.Stage.SCALE_EXACTFIT,Laya.stage.alignH=Laya.Stage.ALIGN_CENTER,Laya.stage.alignV=Laya.Stage.ALIGN_MIDDLE,c(),i.initBg(),o.initUI(a,r)},e.default={adapter:c,getWidth:p,getHeight:f,getScaleMode:d,getOffestX:function(){return a},getOffestY:function(){return r},getDesignWidth:function(){return u},getDesignHeight:function(){return s},setDeviation:function(t){l=t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,o,a,r=n(3),u=n(6),s=!1,l=0,c=0;function p(){s||((i=new Laya.Sprite).name="_tape_stage",(o=new Laya.Sprite).name="_tape_main_layer",(a=new Laya.Sprite).name="_tape_top_layer",i.addChild(o),i.addChild(a),Laya.stage.addChild(i),s=!0),o.x=l,o.y=c,a.x=l,a.y=c}function f(){if(o.numChildren>0&&o.getChildAt(o.numChildren-1)instanceof u.default)return void r.setFocus(!0);r.setFocus(!1)}e.initUI=function(t,e){l=t,c=e,p()},e.default={checkFocus:f,moveTopToMainLayer:function(t){p(),t&&t.parent==o&&(o.removeChild(t),o.addChild(t)),f()},addViewToMainLayer:function(t){p(),t&&o.addChild(t),f()},addViewTopLayer:function(t){p(),t&&a.addChild(t),f()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=!0;var o="${env}";function a(){return"${env}"==o?"dev":o}e.default={isLayaApp:function(){return window.hasOwnProperty("Laya")},isConchApp:function(){return window.hasOwnProperty("conch")},getAppVersion:function(){return 0==="${app_version}".indexOf("${")?"1.0.0":"${app_version}"},getClassName:function(t){try{if(t){var e=t.toString(),n=void 0;if((n="["==e.charAt(0)?e.match(/\w+\s∗(\w+)\w+\s∗(\w+)/):e.match(/function\s*(\w+)/))&&2==n.length)return n[1]}}catch(t){}},getVersion:function(){return 0==="4.7.1".indexOf("${")?"1.0.0":"4.7.1"},isDebug:function(){return i},setDebug:function(t){i=t},printError:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];i&&console.error.apply(console,["Tape:",t].concat(e))},printDebug:function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];i&&console.log.apply(console,["Tape:",t].concat(e))},getEnv:a,setEnv:function(t){o=t},isDev:function(){return"prod"!==a()},isProd:function(){return"prod"===a()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(6),o=n(1),a=[],r=!1;function u(){return a}function s(){return a.length}function l(t){void 0===t&&(t=0);var e=s();return e>t?a[e-1-t]:null}function c(t,e,n){void 0===t&&(t=0),void 0===e&&(e=!1),void 0===n&&(n=null);var i=l(t);i&&i.show(e&&s()>1,n)}function p(t){c(0,!0,(function(){var e=l(1);e&&(e.hide(),t&&t())}))}function f(t){(t>=s()&&(t=s()-1),t<=0)||(a.splice(s()-t,t).forEach((function(t){t.hide(),t.exit()})),c(0))}e.setFocus=function(t){var e=l();e&&e.focus(t)},e.default={navigate:function(t,e,n,s){void 0===e&&(e=null),void 0===n&&(n=null),void 0===s&&(s=!1),e||(e={});var c,f,d=function(){new i.default({page:t,params:e,onShow:function(){p((function(){n&&n(!0)}))},onLoaded:function(t){var e;r=!1,o.default.addViewToMainLayer(t),e=t,a.push(e)},onLoadProgress:function(t,e){if(r){var n=l();n&&n.nextProgress(e)}}})};if(s||t.single){var h=[];u().forEach((function(e){e.filter(t)&&h.push(e)})),h.length>0?(c=h.pop(),(f=a.indexOf(c))>=0&&(a.splice(f,1),a.push(c),p(null),o.default.moveTopToMainLayer(c))):d()}else d()},pop:function(t){void 0===t&&(t=1),f(t)},popToTop:function(){f(s())},finish:function(t,e){void 0===e&&(e=null);var n=[];u().forEach((function(i){i.filter(t,e)&&n.push(i)})),function(t){if(t&&!(t.length<=0)){for(var e=0;s()>1&&e<t.length;e++){var n=t[e];a.splice(a.indexOf(n),1),n.hide(),n.exit()}c(0)}}(n)}}},function(t,e,n){"use strict";var i,o=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(0),r=function(t){function e(e){void 0===e&&(e=null);var n=t.call(this)||this;return n._bgSprite=null,n._bgAlpha=.5,n._bgColor="#000000",n._isTranslucent=!0,n._isShow=!1,n._handleOnTouchOutside=null,n._canceledOnTouchOutside=!1,n._mask=!1,n._onEvent=null,n._handleOnTouchOutside=e,n._onEvent=function(t){n.isShow&&n.canceledOnTouchOutside&&n._handleOnTouchOutside&&n._handleOnTouchOutside(),t.stopPropagation()},setTimeout((function(){return n.initBg()}),0),n}return o(e,t),Object.defineProperty(e.prototype,"ui",{get:function(){return this.getChildByName("_contentView")},set:function(t){this.removeChildByName("_contentView"),t.name="_contentView",this.addChild(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isShow",{get:function(){return this._isShow},set:function(t){this._isShow=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bgAlpha",{get:function(){return this._bgAlpha},set:function(t){this._bgAlpha=t,this.refreshBg()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bgColor",{get:function(){return this._bgColor},set:function(t){this._bgColor=t,this.refreshBg()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isTranslucent",{get:function(){return this._isTranslucent},set:function(t){this._isTranslucent=t,this.refreshBg()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"canceledOnTouchOutside",{get:function(){return this._canceledOnTouchOutside},set:function(t){this._canceledOnTouchOutside=t,this.refreshCanceledOnTouchOutside()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"nonPenetrating",{get:function(){return this._mask},set:function(t){this._mask=t,this.refreshCanceledOnTouchOutside()},enumerable:!0,configurable:!0}),e.prototype.refreshBg=function(){this._bgSprite&&(this._bgSprite.alpha=this.bgAlpha,this._bgSprite.graphics.clear(),this.isTranslucent||this._bgSprite.graphics.drawRect(0,0,this._bgSprite.width,this._bgSprite.height,this.bgColor))},e.prototype.refreshCanceledOnTouchOutside=function(){this._bgSprite&&this._bgSprite.offAll(),(this.canceledOnTouchOutside||this.nonPenetrating)&&this.ui&&(this.ui.mouseThrough=!0,this._bgSprite&&this._bgSprite.on(Laya.Event.CLICK,this,this._onEvent))},e.prototype.initBg=function(){this._bgSprite||(this._bgSprite=new Laya.Sprite,this._bgSprite.x=-a.default.getOffestX(),this._bgSprite.y=-a.default.getOffestY(),this._bgSprite.width=a.default.getWidth(),this._bgSprite.height=a.default.getHeight(),this.addChildAt(this._bgSprite,0),this.refreshBg(),this.refreshCanceledOnTouchOutside())},e}(Laya.Component);e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=null,a=null,r=null,u=null;function s(){a&&r&&(a.skin=r),a.sizeGrid=a&&u?u:""}e.initBg=function(){(o=Laya.stage.getChildByName("_tape_bg_layer"))||((o=new Laya.Sprite).name="_tape_bg_layer",Laya.stage.addChild(o),(a=new Laya.Image).name="_bg_image",o.addChild(a)),o.width=i.default.getWidth(),o.height=i.default.getHeight(),a.width=i.default.getWidth(),a.height=i.default.getHeight(),s()},e.default={setBgSkin:function(t,e){void 0===e&&(e=null),r=t,u=e,s()},setBgColor:function(t){o&&(o.graphics.clear(),o.graphics.drawRect(0,0,o.width,o.height,t))},setBgTexture:function(t){o&&(o.graphics.clear(),Laya.loader.load(t,Laya.Handler.create(this,(function(t){try{o.graphics.fillTexture(t,0,0,o.width,o.height,"repeat")}catch(t){}}))))},getBgSprite:function(){return o}}},function(t,e,n){"use strict";var i,o=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),r=n(7),u=n(2),s=function(t){function e(e){var n=t.call(this)||this;n._options=null,n._activity=null,n._isShow=!1,n._isFocus=!1,n._pageName="",n.visible=!1,n._options=e,n._pageName=u.default.getClassName(n._options.page),u.default.printDebug("init",n._pageName);var i=n._options.page.res;return i&&i.length>0?Laya.loader.load(i,Laya.Handler.create(n,(function(){n._newActivity(),n._onLoaded(),u.default.printDebug("onLoaded",n._pageName)})),Laya.Handler.create(n,(function(t){n._onLoadProgress(t)}),null,!1)):(n._newActivity(),n._onLoaded(),u.default.printDebug("onLoaded",n._pageName)),n}return o(e,t),e.prototype._newActivity=function(){this._activity||(u.default.printDebug("newActivity",this._pageName),this._activity=new this._options.page({page:this._options.page,params:this._options.params}))},e.prototype._onLoaded=function(){var t=this;r.onNavigatorReady().then((function(){t._options.onLoaded&&t._options.onLoaded(t),t.addChild(t._activity),u.default.printDebug("onCreate",t._pageName),t._activity.onCreate&&t._activity.onCreate(),t._options.onShow&&t._options.onShow()}))},e.prototype._onLoadProgress=function(t){this._options.onLoadProgress&&this._options.onLoadProgress(this,t)},e.prototype.nextProgress=function(t){this._activity.onNextProgress&&this._activity.onNextProgress(t)},e.prototype.filter=function(t,e){return t===this._options.page&&(!e||e===this._activity)},e.prototype.show=function(t,e){if(!this.visible&&!this._isShow){this._isShow=!0;var n=this._activity.easeIn||Laya.Ease.linearIn,i=this._activity.duration||0,o=this._activity.fromProps||{},r=this._activity.toProps||{};t&&n&&i>0?(Object.assign(this,o),u.default.printDebug("onResume",this._pageName),this._activity.onResume&&this._activity.onResume(),this.visible=!0,Laya.Tween.to(this,r,i,n,Laya.Handler.create(this,(function(){e&&e()})))):(u.default.printDebug("onResume",this._pageName),this._activity.onResume&&this._activity.onResume(),this.visible=!0,e&&e()),a.default.checkFocus()}},e.prototype.hide=function(){this.visible&&this._isShow&&(this._isShow=!1,u.default.printDebug("onPause",this._pageName),this._activity.onPause&&this._activity.onPause(),this.visible=!1,this.focus(!1))},e.prototype.exit=function(){u.default.printDebug("onDestroy",this._pageName),this._activity.onDestroy&&this._activity.onDestroy(),this.destroy()},e.prototype.focus=function(t){this._isFocus!==t&&(this._isFocus=t,u.default.printDebug("onFocus",this._pageName,t),this._activity.onFocus&&this._activity.onFocus(t))},e}(Laya.Component);e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=null,a=!1,r=!1,u=null,s=new Promise((function(t){u=t}));function l(){var t=o.commonRes||[];t.length>0?Laya.loader.load(t,Laya.Handler.create(null,(function(){c(),o.onLoaded&&o.onLoaded()})),Laya.Handler.create(this,(function(t){o.onLoadProgress&&o.onLoadProgress(t)}),null,!1)):(o.onLoadProgress&&o.onLoadProgress(100),o.onLoaded&&o.onLoaded(),c())}function c(){o.mainPage&&i.default.navigate(o.mainPage)}e.initNavigator=function(t){t&&!a&&((o=t)&&o.fileVersion?(Laya.ResourceVersion.type=Laya.ResourceVersion.FILENAME_VERSION,Laya.ResourceVersion.enable(o.fileVersion,Laya.Handler.create(null,(function(){l()})))):l(),a=!0)},e.onNavigatorReady=function(){return r?Promise.resolve():s},e.setNavigatorReady=function(){r||(r=!0,u(),u=null,s=null)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o={};function a(t){if(o[t]){var e=o[t];if(e.funcs.length<=0)return;if(e.padding)return void setTimeout((function(){a(t)}),500);var n=e.funcs.shift();n&&n(),e.padding=!0,a(t)}}e.default={put:function(t,e){t&&"function"==typeof e&&(i.default.printDebug("put pipe to : ",t),o[t]?o[t].funcs.push(e):o[t]={padding:!1,funcs:[e]},a(t))},next:function(t){o[t]&&(i.default.printDebug("next pipe as : ",t),o[t].padding=!1,a(t))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o={},a={alpha:0},r={alpha:1},u={alpha:0};function s(t,e){!function(t,e){var n=t.toProps||r||{},i=t.exitProps||u||{},o=t.easeOut||Laya.Ease.linearOut,a=t.duration||500;Object.assign(t,n),Laya.Tween.to(t,i,a,o,Laya.Handler.create(this,(function(){e&&e(t)})))}(t,(function(){t._onHide&&t._onHide(t.popup,e),t.isShow=!1,t.onHide&&t.onHide(t.popup,e),t.removeSelf&&t.removeSelf(),t.destroy&&t.destroy(),i.default.checkFocus()}))}function l(t){!function(t,e){var n=t.fromProps||a||{},i=t.toProps||r||{},o=t.easeIn||Laya.Ease.linearIn,u=t.duration||500;Object.assign(t,n),Laya.Tween.to(t,i,u,o,Laya.Handler.create(this,(function(){e&&e(t)})))}(t,(function(){t.isShow=!0}))}e.default={setDefaultAnim:function(t,e){a=t,r=e},showPopup:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=null);var a=o[t],r=new t;r.popup=t,r.params=e||{},r._onHide=n,a?a.push(r):o[t]=[r],i.default.addViewToMainLayer(r),r.onShow&&r.onShow(),l(r)},hidePopup:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=null);var i=o[t];if(e){var a=i?i.indexOf(e):-1;if(a<0)return;i.splice(a,1),s(e,n)}else i&&i.splice(0,i.length).forEach((function(t){s(t,n)}))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o={};function a(t,e){if(!o[t])return[];if(e&&o[t].length>1)return o[t].splice(o[t].indexOf(e),1),[e];var n=o[t]||[];return delete o[t],n}e.default={showToast:function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=null);var r=new t;r._on_hide=n,r.toast=t,r.params=e||{},r.onShow&&r.onShow();var u=r.fromProps||{alpha:0},s=r.toProps||{alpha:1},l=r.exitProps||{alpha:0},c=r.easeIn||Laya.Ease.linearIn,p=r.easeOut||Laya.Ease.linearOut,f=r.duration,d=r.displayDuration;Object.assign(r,u),Laya.Tween.to(r,s,f,c,Laya.Handler.create(this,(function(){r.isShow=!0})),0),-1!=d&&Laya.Tween.to(r,l,f,p,Laya.Handler.create(this,(function(){r&&(a(t,r),r._on_hide&&r._on_hide(r.toast),r.isShow=!1,r.onHide&&r.onHide(),r.destroy())})),d+f),function(t,e){o[t]?o[t].push(e):o[t]=[e]}(t,r),i.default.addViewTopLayer(r)},hideToast:function(t,e){void 0===e&&(e=null),a(t,e).forEach((function(t){t._on_hide&&t._on_hide(t.toast),t.isShow=!1,t.onHide&&t.onHide(),t.destroy()}))}}},function(t,e,n){"use strict";n(12),n(13);var i=n(5),o=n(14),a=n(0),r=n(15),u=n(2),s=n(17),l=n(8),c=n(18),p=n(19),f=n(3),d=n(9),h=n(10),_=n(21),y=n(22),g=n(23),v=n(24),b={init:v.init,init3D:v.init3D,start:v.start,env:u.default,bg:i.default,eft:o.default,screen:a.default,audio:r.default,event:s.default,runtime:c.default,pipeline:l.default,navigator:f.default,utils:p.default,popup:d.default,toast:h.default,Activity:_.default,PopupView:y.default,ToastView:g.default};"undefined"!=typeof window&&(window.Tape=b),t.exports={Tape:b}},function(t,e,n){"use strict";if(Laya&&Laya.Loader){var i=Laya.Handler,o=Laya.Loader,a=Laya.HttpRequest;o.prototype.load=function(t,e,n,r,u){if(void 0===n&&(n=!0),void 0===u&&(u=!1),this._url=t,0===t.indexOf("data:image")?this._type=e="image":(this._type=e||(e=this.getTypeFromUrl(t)),t=Laya.URL.formatURL(t)),this._cache=n,this._data=null,!u&&o.loadedMap[t])return this._data=o.loadedMap[t],this.event("progress",1),void this.event("complete",this._data);if(r&&o.setGroup(t,r),null!=o.parserMap[e])return this._customParse=!0,void(o.parserMap[e]instanceof i?o.parserMap[e].runWith(this):o.parserMap[e].call(null,this));if("image"===e||"htmlimage"===e||"nativeimage"===e)return this._loadImage(t);if("sound"===e)return this._loadSound(t);if("ttf"===e)return this._loadTTF(t);try{if("undefined"!=typeof loadRuntime&&!t.startsWith("http")){var s=this;return void setTimeout((function(){var n;t.startsWith("file://")&&(t=t.substr("file://".length)),"pkm"==e||"arraybuffer"===e?n=rt.getFileSystemManager().readFileSync(t):(n=rt.getFileSystemManager().readFileSync(t,"utf8"),"atlas"!=e&&"json"!=e||void 0===n||(n=JSON.parse(n))),s.onLoaded(n)}),0)}}catch(t){}var l;switch(e){case"atlas":case"plf":l="json";break;case"font":l="xml";break;case"pkm":l="arraybuffer";break;default:l=e}o.preLoadedMap[t]?this.onLoaded(o.preLoadedMap[t]):(this._http||(this._http=new a,this._http.on("progress",this,this.onProgress),this._http.on("error",this,this.onError),this._http.on("complete",this,this.onLoaded)),this._http.send(t,null,"get",l))}}},function(t,e){"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t,e){"use strict";if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),i=1;i<arguments.length;i++){var o=arguments[i];if(null!=o)for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(n[a]=o[a])}return n},writable:!0,configurable:!0})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=new Laya.Dictionary,o=new Laya.Dictionary,a={};function r(t,e,n,o,u,s){for(var l=i[t].arr,c=0;c<l.length;c++)l[c][0]._url=t,l[c][0]._atlasPath=t.split(".swf")[0]+".json",l[c][0]._onLoaded(),l[c][1]?l[c][0].play(0,l[c][2]):l[c][0].stop(),l[c][3]&&l[c][3].apply(l[c][4],[l[c][0]]);n?e.play(0,o):e.stop(),u&&u.apply(s,[e]),i[t].arr=[],e.off(Laya.Event.LOADED,a,r),i[t].load=!0}e.default={create:function(t,e,n,u,s){var l;return void 0===e&&(e=!0),void 0===n&&(n=!0),void 0===u&&(u=null),void 0===s&&(s=null),o[t]||(o[t]=[]),(l=o[t].length>0?o[t].shift():new Laya.MovieClip).path=t,i[t]?i[t].load?(l._url=t,l._atlasPath=t.split(".swf")[0]+".json",l._onLoaded(),e?l.play(0,n):l.stop(),u&&u.apply(s,[l])):i[t].arr.push([l,e,n,u,s]):(i[t]={load:!1,arr:[]},l.on(Laya.Event.LOADED,a,r,[t,l,e,n,u,s]),l.load(t,!0)),l},remove:function(t){t.scaleX=t.scaleY=1,t.pivotX=t.pivotY=0,t.anchorX=t.anchorY=0,t.alpha=1,Laya.Tween.clearAll(t),t.stop(),t.parent&&t.parent.removeChild(t),o[t.path].push(t)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=n(16);var a=function(){function t(t){this._auidoUrl="",this._chancel=null,this._playing=!1,this._onPlay=null,this._onPause=null,this._onStop=null,this._onError=null,this._onProgress=null,this._onComplete=null,this._position=-1,this._duration=-1,this._paused=!1,this._type="sound",this._playTime=0,this._type=t}return t.prototype._update=function(){this._chancel&&(this._position=this._chancel.position,this._duration=this._chancel.duration,!this._playing&&this._position>0&&(this._playing=!0,this._onPlay&&this._onPlay()),this._playing&&this._duration>0?this._onProgress&&this._onProgress({position:this.position,duration:this.duration}):Date.now()-this._playTime>2e3&&(this._onError&&this._onError(),this.stop()))},t.prototype.onPlay=function(t){this._onPlay=t},t.prototype.onStop=function(t){this._onStop=t},t.prototype.onPause=function(t){this._onPause=t},t.prototype.onProgress=function(t){this._onProgress=t},t.prototype.onComplete=function(t){this._onComplete=t},t.prototype.onError=function(t){this._onError=t},Object.defineProperty(t.prototype,"url",{get:function(){return this._auidoUrl},set:function(t){this._auidoUrl!=t&&(this._auidoUrl=t,this.stop())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"type",{get:function(){return this._type},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"position",{get:function(){return this._position},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"duration",{get:function(){return this._duration},enumerable:!0,configurable:!0}),t.prototype.isPaused=function(){return this._paused},t.prototype.isPlaying=function(){return this._playing},t.prototype.play=function(t){var e=this;void 0===t&&(t=1),function(t){if(window&&window.WeixinJSBridge)try{window.WeixinJSBridge.invoke("getNetworkType",{},(function(){t&&t()}))}catch(e){t&&t()}else t&&t()}((function(){if(e._auidoUrl){e.stop();var n=(a=e._auidoUrl,r=".ogg",u=Laya.Utils.getFileExtension(a),s=u?"."+u:"",i.default.isConchApp()&&".wav"!=s&&".ogg"!=s?a.substr(0,a.length-s.length)+r:a);e._playTime=Date.now(),e._chancel=Laya.SoundManager.playSound(n,t,Laya.Handler.create(e,(function(){e._onComplete&&e._onComplete(),e.stop()})),null,0),o.default.loop(e,e._update)}var a,r,u,s}))},t.prototype.pause=function(){this._chancel&&this._playing&&(this._onPause&&this._onPause(),this._chancel.pause(),this._paused=!0,this._playing=!1,o.default.clear(this,this._update))},t.prototype.resume=function(){this._chancel&&this._paused&&(this._paused=!1,this._chancel.resume(),o.default.loop(this,this._update))},t.prototype.stop=function(){this._chancel&&(this._onStop&&this._onStop(),this._chancel.stop(),this._chancel=null,this._paused=!1,this._playing=!1,Laya.SoundManager.removeChannel(this._chancel),Laya.SoundManager.destroySound(this._auidoUrl),o.default.clear(this,this._update))},t.prototype.destroy=function(){this.stop(),this._onComplete=null,this._onProgress=null,this._onPlay=null,this._onStop=null,this._onPause=null},t}(),r=new a("music");e.default={playMusic:function(t,e){return void 0===e&&(e=1),r.url=t,r.play(e),r},playSound:function(t,e){void 0===e&&(e=1);var n=new a("sound");return n.url=t,n.play(e),n},stopAll:function(){Laya.SoundManager.stopAll()},stopMusic:function(){r.stop()},stopAllSound:function(){Laya.SoundManager.stopAllSound()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){this._tasks=[],this._hasLoop=!1}return t.prototype._checkLoop=function(){var t=this;this._tasks.length>0?this._hasLoop||(Laya.timer.frameLoop(1,this,(function(){t._tasks.forEach((function(t){var e=t.caller;t.callback.apply(e)}))})),this._hasLoop=!0):this._hasLoop&&(Laya.timer.clearAll(this),this._hasLoop=!1)},t.prototype.loop=function(t,e){0==this._tasks.filter((function(n){return n.caller==t&&n.callback==e})).length&&(this._tasks.push({caller:t,callback:e}),this._checkLoop())},t.prototype.clear=function(t,e){!function(t,e){if("function"==typeof e){var n=[];t.forEach((function(t,i){e(t)&&n.push(i)})),n.reverse(),n.forEach((function(e){t.splice(e,1)}))}}(this._tasks,(function(n){return n.caller==t&&(!e||n.callback==e)})),this._checkLoop()},t}();e.default=new i},function(t,e,n){"use strict";var i,o=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=t.call(this)||this;return e._dic=new Laya.Dictionary,e}return o(e,t),e.prototype.registeredEvent=function(t,e,n,i){void 0===i&&(i=1);var o=[];if(null==i&&(i=1),this._dic[t]){o=this._dic[t];for(var a=0;a<o.length;a++)if(o[a].fun==e&&o[a].thisRef==n)return void(i!=o[a].index&&(o[a].index=i,o.sort((function(t,e){return e.index-t.index})),this._dic[t]=o))}o.push({fun:e,thisRef:n,index:i}),o.sort((function(t,e){return e.index-t.index})),this._dic[t]=o},e.prototype.removeEvent=function(t,e,n){if(this._dic[t])for(var i=this._dic[t],o=0;o<i.length;o++)if(i[o].fun==e&&i[o].thisRef==n)return i[o]=null,i.splice(o,1),void(this._dic[t]=i)},e.prototype.sendEvent=function(t,e){if(void 0===e&&(e=null),this._dic[t])for(var n=this._dic[t],i=0;i<n.length;i++)n[i].fun.apply(n[i].thisRef,e)},e}(Laya.EventDispatcher);e.default=new a},function(t,e,n){"use strict";var i,o,a=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),function(t){function e(e,n){!function(t){t.x=t.x+t.width/2-t.pivotX,t.y=t.y+t.height/2-t.pivotY,t.pivot(t.width/2,t.height/2)}(e),Laya.Tween.to(e,{scaleX:n,scaleY:n},t.scaleTime)}function n(n){n.offAll(),n.on(Laya.Event.MOUSE_DOWN,n,(function(){return e(n,t.scaleSmallValue)})),n.on(Laya.Event.MOUSE_UP,n,(function(){return e(n,t.scaleBigValue)})),n.on(Laya.Event.MOUSE_OUT,n,(function(){return e(n,t.scaleBigValue)})),n.on(Laya.Event.CLICK,n,(function(){var e;(e=n.sound)?"none"!=e&&Laya.SoundManager.playSound(e,1):t.clickSound&&"none"!=t.clickSound&&Laya.SoundManager.playSound(t.clickSound,1)}))}t.clickSound=null,t.scaleTime=100,t.scaleSmallValue=.8,t.scaleBigValue=1,t.bindClick=n;var i=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Button);t.btn=i;var o=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Image);t.btn_img=o;var r=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Label);t.btn_label=r;var u=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Sprite);t.btn_sprite=u;var s=function(t){function e(){var e=t.call(this)||this;return e.sound=null,n(e),e}return a(e,t),e}(Laya.Box);t.btn_box=s}(o||(o={})),e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(20);function o(t){if(t.length>0)return t[Math.floor(Math.random()*t.length)]}e.default={randomUUID:function(){var t=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()},randomInteger:function(t,e){switch(arguments.length){case 1:return Math.floor(Math.random()*t+1);case 2:return Math.floor(Math.random()*(e-t+1)+t);default:return 0}},randomNumber:function(t,e){switch(arguments.length){case 1:return Math.random()*t+1;case 2:return Math.random()*(e-t+1)+t;default:return 0}},randomArray:function(t,e){void 0===e&&(e=-1);var n=-1==e?t.length:e;n=Math.min(n,t.length);for(var i=t.concat([]),a=[];a.length<n;){var r=o(i);a.push(r),i.splice(i.indexOf(n),1)}return a},randomArrayItem:o,toAny:i.toAny}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toAny=function(t,e){if(null==t)return e;var n=function(t){if("string"!=typeof t)return typeof t;try{return typeof JSON.parse(t)}catch(n){var e=parseFloat(t);return isNaN(e)||""+e!==t?"string":"number"}}(t);switch(null!=e&&(n=typeof e),n){case"number":return function(t){try{return JSON.parse(t)}catch(e){return parseFloat(t)}}(t);case"boolean":return function(t){return!!t&&"false"!=t&&"0"!=t}(t);case"object":return function(t,e){if("object"==typeof t)return t;try{return JSON.parse(t)}catch(t){}return e}(t,e);case"string":return function(t,e){try{var n=typeof t;if("string"===n)return t;if("boolean"===n)return t?"true":"false";if("number"===n)return""+t;if("object"===n)return JSON.stringify(t)}catch(t){}return e}(t,e)}return e}},function(t,e,n){"use strict";var i,o=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(3),r=n(4),u=n(0),s=function(t){function e(e){var n=t.call(this,(function(){n.back()}))||this;return n.page=null,n.params={},n.duration=0,n.easeIn=null,n.easeOut=null,n.fromProps=null,n.toProps=null,n.width=u.default.getDesignWidth(),n.height=u.default.getDesignHeight(),n.params=Object.assign({},e.params||{}),n.page=e.page,n}return o(e,t),e.open=function(t,e){a.default.navigate(this,t,e)},e.finish=function(){a.default.finish(this)},e.prototype.redirectTo=function(t,e,n,i){var o=this;void 0===e&&(e={}),void 0===n&&(n=null),void 0===i&&(i=!1),this.navigate(t,e,(function(){o.back(),n&&n()}),i)},e.prototype.navigate=function(t,e,n,i){void 0===e&&(e={}),void 0===n&&(n=null),void 0===i&&(i=!1),a.default.navigate(t,e,n,i)},e.prototype.back=function(){a.default.finish(this.page,this)},e.prototype.finish=function(t,e){void 0===t&&(t=this.page),void 0===e&&(e=null),a.default.finish(t,e)},e.prototype.pop=function(t){void 0===t&&(t=1),a.default.pop(t)},e.prototype.popToTop=function(){a.default.popToTop()},e.res=[],e.single=!1,e}(r.default);e.default=s},function(t,e,n){"use strict";var i,o=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(9),r=n(0),u=n(4),s=n(8),l=function(t){function e(){var e=t.call(this,(function(){e.hide()}))||this;return e.duration=500,e.easeIn=null,e.easeOut=null,e.fromProps=null,e.toProps=null,e.exitProps=null,e.isTranslucent=!1,e.canceledOnTouchOutside=!1,e.nonPenetrating=!0,e.width=r.default.getDesignWidth(),e.height=r.default.getDesignHeight(),e}return o(e,t),e.show=function(t,e){a.default.showPopup(this,t,e)},e.pipeShow=function(t,e){var n=this;s.default.put("popup",(function(){a.default.showPopup(n,t,(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];s.default.next("popup"),e&&e.apply(void 0,t)}))}))},e.hide=function(t){a.default.hidePopup(this,null,t)},e.prototype.hide=function(t){void 0===t&&(t=null),a.default.hidePopup(this.popup,this,t)},e}(u.default);e.default=l},function(t,e,n){"use strict";var i,o=this&&this.__extends||(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var a=n(10),r=n(0),u=function(t){function e(){var e=t.call(this,(function(){e.hide()}))||this;return e.duration=200,e.displayDuration=1e3,e.easeIn=null,e.easeOut=null,e.fromProps=null,e.toProps=null,e.exitProps=null,e.width=r.default.getDesignWidth(),e.height=r.default.getDesignHeight(),e}return o(e,t),e.show=function(t,e){a.default.showToast(this,t,e)},e.hide=function(){a.default.hideToast(this)},e.prototype.hide=function(){a.default.hideToast(this.toast,this)},e}(n(4).default);e.default=u},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),o=n(0),a=n(7),r=!1;e.init=function(t,e){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];r||(i.default.isLayaApp()?(i.default.printDebug("init..."),i.default.printDebug("tape version: "+i.default.getVersion()),i.default.printDebug("app env: "+i.default.getEnv()),i.default.printDebug("app debug: "+i.default.isDebug()),i.default.printDebug("app version: "+i.default.getAppVersion()),o.initScreen.apply(void 0,[!1,t,e].concat(n)),r=!0):i.default.printError("Please ensure that the 'Laya' library has been introduced."))},e.init3D=function(t,e){for(var n=[],a=2;a<arguments.length;a++)n[a-2]=arguments[a];r||(i.default.isLayaApp()?(i.default.printDebug("init3D..."),i.default.printDebug("tape version: "+i.default.getVersion()),i.default.printDebug("app env: "+i.default.getEnv()),i.default.printDebug("app debug: "+i.default.isDebug()),i.default.printDebug("app version: "+i.default.getAppVersion()),o.initScreen.apply(void 0,[!0,t,e].concat(n)),r=!0):i.default.printError("Please ensure that the 'Laya' library has been introduced."))},e.start=function(t,e){if(void 0===e&&(e=null),r){t||(t={});var n={mainPage:t.mainPage||null,commonRes:t.commonRes||[],fileVersion:t.fileVersion,onLoadProgress:function(e){t.onLoadProgress&&t.onLoadProgress(e)},onLoaded:function(){e&&e(),t.onLoaded&&t.onLoaded()}};a.initNavigator(n),a.setNavigatorReady()}else i.default.printError("Please complete the initialization of Tape first.")}}])}));
//# sourceMappingURL=tape.js.map