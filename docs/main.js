parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"or4r":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],e="Expected a function",n=NaN,r="[object Symbol]",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,v=a||s||Function("return this")(),l=Object.prototype,p=l.toString,b=Math.max,m=Math.min,y=function(){return v.Date.now()};function d(t,n,r){var i,o,u,f,c,a,s=0,v=!1,l=!1,p=!0;if("function"!=typeof t)throw new TypeError(e);function d(e){var n=i,r=o;return i=o=void 0,s=e,f=t.apply(r,n)}function g(t){var e=t-a;return void 0===a||e>=n||e<0||l&&t-s>=u}function O(){var t=y();if(g(t))return x(t);c=setTimeout(O,function(t){var e=n-(t-a);return l?m(e,u-(t-s)):e}(t))}function x(t){return c=void 0,p&&i?d(t):(i=o=void 0,f)}function T(){var t=y(),e=g(t);if(i=arguments,o=this,a=t,e){if(void 0===c)return function(t){return s=t,c=setTimeout(O,n),v?d(t):f}(a);if(l)return c=setTimeout(O,n),d(a)}return void 0===c&&(c=setTimeout(O,n)),f}return n=h(n)||0,j(r)&&(v=!!r.leading,u=(l="maxWait"in r)?b(h(r.maxWait)||0,n):u,p="trailing"in r?!!r.trailing:p),T.cancel=function(){void 0!==c&&clearTimeout(c),s=0,i=a=o=c=void 0},T.flush=function(){return void 0===c?f:x(y())},T}function j(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){return!!t&&"object"==typeof t}function O(t){return"symbol"==typeof t||g(t)&&p.call(t)==r}function h(t){if("number"==typeof t)return t;if(O(t))return n;if(j(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=j(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):o.test(t)?n:+t}module.exports=d;
},{}],"WEtf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return r.android()||r.blackberry()||r.ios()||r.opera()||r.windows()}},e=r;exports.default=e;
},{}],"xZJw":[function(require,module,exports) {
"use strict";function e(e){return new Promise(function(t,n){d3.csv("assets/data/".concat(e)).then(function(e){t(e)}).catch(n)})}function t(){var t=[e("sportsCombinedNames.csv")];return Promise.all(t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=t;
},{}],"IlmA":[function(require,module,exports) {
d3.selection.prototype.puddingHeatMap=function(e){var n=this.nodes().map(function(e){var n=d3.select(e),t=n.datum(),a=0,l=d3.scaleLinear().domain([0,6]).range(["#ffffff","#FC5F1A"]),r=["mlb","nba","nfl","nhl","mls","wnba","nwsl"],c=null,d=null,u=null,s=null,i={init:function(){c=n.append("div").attr("class","pudding-chart"),$labels=c.append("div").attr("class","g-labels"),d=c.append("div").attr("class","g-vis");var e=$labels.selectAll(".decadeLabel").data(t).enter().append("div").attr("class",function(e){return"decadeLabel decadeLabel-".concat(e.key)});s=e.append("p"),d.append("div").attr("class","leagueLabels").selectAll(".leagueBlocks").data(r).enter().append("div").attr("class","leagueBlocks").append("p").text(function(e){return e});var a=d.selectAll(".decade").data(t).enter().append("div").attr("class",function(e){return"decade decade-".concat(e.key)}).selectAll(".leagues").data(function(e){return e.values}).enter().append("div").attr("class",function(e){return"league league-".concat(e.key)}).style("background-color",function(e){if(null!==e.value)return l(e.value.percentHyphen)});u=a.append("p"),i.resize(),i.render()},resize:function(){return a=n.node().offsetWidth,u.text(function(e){if(null!==e.value&&a>500){var n=+e.value.percentHyphen;return"".concat(n,"%")}if(null!==e.value&&a<=500){var t=+e.value.percentHyphen;return"".concat(t.toFixed(1),"%")}}),s.text(function(e){if(a>500)return"".concat(e.key,"s");var n=e.key.slice(2,5);return"'".concat(n,"s")}),i},render:function(){return i},data:function(e){return arguments.length?(t=e,n.datum(t),i.render(),i):t}};return i.init(),i});return n.length>1?n:n.pop()};
},{}],"e1mK":[function(require,module,exports) {
d3.selection.prototype.puddingHistogram=function(t){var n=this.nodes().map(function(t){var n=d3.select(t),e=n.datum(),a={init:function(){console.log(e);var t=n.append("div").attr("class","pudding-chart").append("div").attr("class","g-vis").selectAll(".length").data(e).enter().append("div").attr("class",function(t){return"length length-".concat(t.key)});t.append("div").attr("class","label").append("p").text(function(t){return"".concat(t.key,"s")}),t.selectAll(".length").data(function(t){return t.values}).enter().append("div").attr("class","name").append("p").text(function(t){return"".concat(t.name)}).attr("class",function(t){return"".concat(t.league)}),a.resize(),a.render()},resize:function(){return a},render:function(){return a},data:function(t){return arguments.length?(e=t,n.datum(e),a.render(),a):e}};return a.init(),a});return n.length>1?n:n.pop()};
},{}],"PX0w":[function(require,module,exports) {
d3.selection.prototype.puddingBlock=function(t){var e=this.nodes().map(function(t){var e=d3.select(t),n=e.datum(),a=null,r=null,c=d3.select(".hyphenCount"),l=d3.select(".totalCount"),o=d3.select(".leagueName"),s=d3.select(".decadeNum"),i=null,u=null,d=d3.select(".percentCount");function p(t){if("true"==t.hyphen){t.startDate==t.endDate?u.html("<span>".concat(t.name,"</span><br>").concat(t.startDate,"<br>").concat(t.reason)):u.html("<span>".concat(t.name,"</span><br>").concat(t.startDate,"-").concat(t.endDate,"<br>").concat(t.reason)),u.style("top",d3.event.pageY+"px"),u.transition(300).style("left","0px"),i=d3.selectAll(".name__true");var e=this;i.transition(300).style("opacity",function(){return this===e?1:.5})}}function y(t){"true"==t.hyphen&&(u.transition(300).style("left","-100%"),(i=d3.selectAll(".name__true")).transition(300).style("opacity","1"))}var f={init:function(){a=e.append("div").attr("class","pudding-chart"),r=a.append("div").attr("class","g-vis"),u=d3.select("body").append("div").attr("class","tooltip"),f.resize(),f.render()},buildNameBlock:function(t,e){var a=n.filter(function(t){return t.key==e}),i=(a=a[0].values.filter(function(e){return e.key==t}))[0].value.values,u=a[0].value;r.selectAll(".name").data(i).enter().append("p").attr("class",function(t){return"name name__".concat(t.hyphen)}).text(function(t){return t.lastName}).style("opacity",0).on("mouseover",p).on("mouseleave",y).transition().delay(function(t,e){return 2*e}).duration(200).style("opacity",1),c.text(u.withHyphens),l.text(u.allNames),o.text(a[0].key),s.text("".concat(e,"s")),d.text("(".concat(u.percentHyphen,"%)"))},resize:function(){return f},render:function(){return f},data:function(t){return arguments.length?(n=t,e.datum(n),f.render(),f):n}};return f.init(),f});return e.length>1?e:e.pop()};
},{}],"p3wi":[function(require,module,exports) {
var define;
var t;!function(e){"function"==typeof t&&t.amd?t([],e):"object"==typeof exports?module.exports=e():window.noUiSlider=e()}(function(){"use strict";var t="12.1.0";function e(t){return null!=t}function r(t){t.preventDefault()}function n(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function i(t,e,r){r>0&&(l(t,e),setTimeout(function(){u(t,e)},r))}function o(t){return Math.max(Math.min(t,100),0)}function a(t){return Array.isArray(t)?t:[t]}function s(t){var e=(t=String(t)).split(".");return e.length>1?e[1].length:0}function l(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function u(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function c(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function p(t,e){return 100/(e-t)}function f(t,e){return 100*e/(t[1]-t[0])}function d(t,e){for(var r=1;t>=e[r];)r+=1;return r}function h(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=d(r,t),i=t[n-1],o=t[n],a=e[n-1],s=e[n];return a+function(t,e){return f(t,t[0]<0?e+Math.abs(t[0]):e-t[0])}([i,o],r)/p(a,s)}function m(t,e,r,n){if(100===n)return n;var i=d(n,t),o=t[i-1],a=t[i];return r?n-o>(a-o)/2?a:o:e[i-1]?t[i-1]+function(t,e){return Math.round(t/e)*e}(n-t[i-1],e[i-1]):n}function g(e,r,i){var o;if("number"==typeof r&&(r=[r]),!Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'range' contains invalid value.");if(!n(o="min"===e?0:"max"===e?100:parseFloat(e))||!n(r[0]))throw new Error("noUiSlider ("+t+"): 'range' value isn't numeric.");i.xPct.push(o),i.xVal.push(r[0]),o?i.xSteps.push(!isNaN(r[1])&&r[1]):isNaN(r[1])||(i.xSteps[0]=r[1]),i.xHighestCompleteStep.push(0)}function v(t,e,r){if(!e)return!0;r.xSteps[t]=f([r.xVal[t],r.xVal[t+1]],e)/p(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),o=r.xVal[t]+r.xNumSteps[t]*i;r.xHighestCompleteStep[t]=o}function b(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var i=[];for(n in t)t.hasOwnProperty(n)&&i.push([t[n],n]);for(i.length&&"object"==typeof i[0][0]?i.sort(function(t,e){return t[0][0]-e[0][0]}):i.sort(function(t,e){return t[0]-e[0]}),n=0;n<i.length;n++)g(i[n][1],i[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)v(n,this.xNumSteps[n],this)}b.prototype.getMargin=function(e){var r=this.xNumSteps[0];if(r&&e/r%1!=0)throw new Error("noUiSlider ("+t+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&f(this.xVal,e)},b.prototype.toStepping=function(t){return t=h(this.xVal,this.xPct,t)},b.prototype.fromStepping=function(t){return function(t,e,r){if(r>=100)return t.slice(-1)[0];var n=d(r,e),i=t[n-1],o=t[n],a=e[n-1];return function(t,e){return e*(t[1]-t[0])/100+t[0]}([i,o],(r-a)*p(a,e[n]))}(this.xVal,this.xPct,t)},b.prototype.getStep=function(t){return t=m(this.xPct,this.xSteps,this.snap,t)},b.prototype.getNearbySteps=function(t){var e=d(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e],step:this.xNumSteps[e],highestStep:this.xHighestCompleteStep[e]}}},b.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(s);return Math.max.apply(null,t)},b.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var S={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};function w(e){if(function(t){return"object"==typeof t&&"function"==typeof t.to&&"function"==typeof t.from}(e))return!0;throw new Error("noUiSlider ("+t+"): 'format' requires 'to' and 'from' methods.")}function x(e,r){if(!n(r))throw new Error("noUiSlider ("+t+"): 'step' is not numeric.");e.singleStep=r}function y(e,r){if("object"!=typeof r||Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'range' is not an object.");if(void 0===r.min||void 0===r.max)throw new Error("noUiSlider ("+t+"): Missing 'min' or 'max' in 'range'.");if(r.min===r.max)throw new Error("noUiSlider ("+t+"): 'range' 'min' and 'max' cannot be equal.");e.spectrum=new b(r,e.snap,e.singleStep)}function E(e,r){if(r=a(r),!Array.isArray(r)||!r.length)throw new Error("noUiSlider ("+t+"): 'start' option is incorrect.");e.handles=r.length,e.start=r}function C(e,r){if(e.snap=r,"boolean"!=typeof r)throw new Error("noUiSlider ("+t+"): 'snap' option must be a boolean.")}function N(e,r){if(e.animate=r,"boolean"!=typeof r)throw new Error("noUiSlider ("+t+"): 'animate' option must be a boolean.")}function U(e,r){if(e.animationDuration=r,"number"!=typeof r)throw new Error("noUiSlider ("+t+"): 'animationDuration' option must be a number.")}function k(e,r){var n,i=[!1];if("lower"===r?r=[!0,!1]:"upper"===r&&(r=[!1,!0]),!0===r||!1===r){for(n=1;n<e.handles;n++)i.push(r);i.push(!1)}else{if(!Array.isArray(r)||!r.length||r.length!==e.handles+1)throw new Error("noUiSlider ("+t+"): 'connect' option doesn't match handle count.");i=r}e.connect=i}function P(e,r){switch(r){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider ("+t+"): 'orientation' option is invalid.")}}function A(e,r){if(!n(r))throw new Error("noUiSlider ("+t+"): 'margin' option must be numeric.");if(0!==r&&(e.margin=e.spectrum.getMargin(r),!e.margin))throw new Error("noUiSlider ("+t+"): 'margin' option is only supported on linear sliders.")}function M(e,r){if(!n(r))throw new Error("noUiSlider ("+t+"): 'limit' option must be numeric.");if(e.limit=e.spectrum.getMargin(r),!e.limit||e.handles<2)throw new Error("noUiSlider ("+t+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function V(e,r){if(!n(r)&&!Array.isArray(r))throw new Error("noUiSlider ("+t+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(r)&&2!==r.length&&!n(r[0])&&!n(r[1]))throw new Error("noUiSlider ("+t+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==r){if(Array.isArray(r)||(r=[r,r]),e.padding=[e.spectrum.getMargin(r[0]),e.spectrum.getMargin(r[1])],!1===e.padding[0]||!1===e.padding[1])throw new Error("noUiSlider ("+t+"): 'padding' option is only supported on linear sliders.");if(e.padding[0]<0||e.padding[1]<0)throw new Error("noUiSlider ("+t+"): 'padding' option must be a positive number(s).");if(e.padding[0]+e.padding[1]>=100)throw new Error("noUiSlider ("+t+"): 'padding' option must not exceed 100% of the range.")}}function O(e,r){switch(r){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider ("+t+"): 'direction' option was not recognized.")}}function L(e,r){if("string"!=typeof r)throw new Error("noUiSlider ("+t+"): 'behaviour' must be a string containing options.");var n=r.indexOf("tap")>=0,i=r.indexOf("drag")>=0,o=r.indexOf("fixed")>=0,a=r.indexOf("snap")>=0,s=r.indexOf("hover")>=0,l=r.indexOf("unconstrained")>=0;if(o){if(2!==e.handles)throw new Error("noUiSlider ("+t+"): 'fixed' behaviour must be used with 2 handles");A(e,e.start[1]-e.start[0])}if(l&&(e.margin||e.limit))throw new Error("noUiSlider ("+t+"): 'unconstrained' behaviour cannot be used with margin or limit");e.events={tap:n||a,drag:i,fixed:o,snap:a,hover:s,unconstrained:l}}function z(e,r){if(!1!==r)if(!0===r){e.tooltips=[];for(var n=0;n<e.handles;n++)e.tooltips.push(!0)}else{if(e.tooltips=a(r),e.tooltips.length!==e.handles)throw new Error("noUiSlider ("+t+"): must pass a formatter for all handles.");e.tooltips.forEach(function(e){if("boolean"!=typeof e&&("object"!=typeof e||"function"!=typeof e.to))throw new Error("noUiSlider ("+t+"): 'tooltips' must be passed a formatter or 'false'.")})}}function j(t,e){t.ariaFormat=e,w(e)}function F(t,e){t.format=e,w(e)}function H(e,r){if(e.keyboardSupport=r,"boolean"!=typeof r)throw new Error("noUiSlider ("+t+"): 'keyboardSupport' option must be a boolean.")}function D(t,e){t.documentElement=e}function T(e,r){if("string"!=typeof r&&!1!==r)throw new Error("noUiSlider ("+t+"): 'cssPrefix' must be a string or `false`.");e.cssPrefix=r}function R(e,r){if("object"!=typeof r)throw new Error("noUiSlider ("+t+"): 'cssClasses' must be an object.");if("string"==typeof e.cssPrefix)for(var n in e.cssClasses={},r)r.hasOwnProperty(n)&&(e.cssClasses[n]=e.cssPrefix+r[n]);else e.cssClasses=r}function q(r){var n={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:S,format:S},i={step:{r:!1,t:x},start:{r:!0,t:E},connect:{r:!0,t:k},direction:{r:!0,t:O},snap:{r:!1,t:C},animate:{r:!1,t:N},animationDuration:{r:!1,t:U},range:{r:!0,t:y},orientation:{r:!1,t:P},margin:{r:!1,t:A},limit:{r:!1,t:M},padding:{r:!1,t:V},behaviour:{r:!0,t:L},ariaFormat:{r:!1,t:j},format:{r:!1,t:F},tooltips:{r:!1,t:z},keyboardSupport:{r:!0,t:H},documentElement:{r:!1,t:D},cssPrefix:{r:!0,t:T},cssClasses:{r:!0,t:R}},o={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};r.format&&!r.ariaFormat&&(r.ariaFormat=r.format),Object.keys(i).forEach(function(a){if(!e(r[a])&&void 0===o[a]){if(i[a].r)throw new Error("noUiSlider ("+t+"): '"+a+"' is required.");return!0}i[a].t(n,e(r[a])?r[a]:o[a])}),n.pips=r.pips;var a=document.createElement("div"),s=void 0!==a.style.msTransform,l=void 0!==a.style.transform;n.transformRule=l?"transform":s?"msTransform":"webkitTransform";return n.style=[["left","top"],["right","bottom"]][n.dir][n.ort],n}function B(e,n,s){var p,f,d,h,m,g,v,b,S=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},w=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(r){}return t}(),x=e,y=[],E=[],C=0,N=n.spectrum,U=[],k={},P=e.ownerDocument,A=n.documentElement||P.documentElement,M=P.body,V=-1,O=0,L=1,z=2,j="rtl"===P.dir||1===n.ort?0:100;function F(t,e){var r=P.createElement("div");return e&&l(r,e),t.appendChild(r),r}function H(t,e){var r=F(t,n.cssClasses.origin),i=F(r,n.cssClasses.handle);return i.setAttribute("data-handle",e),n.keyboardSupport&&i.setAttribute("tabindex","0"),i.setAttribute("role","slider"),i.setAttribute("aria-orientation",n.ort?"vertical":"horizontal"),0===e?l(i,n.cssClasses.handleLower):e===n.handles-1&&l(i,n.cssClasses.handleUpper),r}function D(t,e){return!!e&&F(t,n.cssClasses.connect)}function T(t,e){return!!n.tooltips[e]&&F(t.firstChild,n.cssClasses.tooltip)}function R(t,e,r){var i=P.createElement("div"),o=[];o[O]=n.cssClasses.valueNormal,o[L]=n.cssClasses.valueLarge,o[z]=n.cssClasses.valueSub;var a=[];a[O]=n.cssClasses.markerNormal,a[L]=n.cssClasses.markerLarge,a[z]=n.cssClasses.markerSub;var s=[n.cssClasses.valueHorizontal,n.cssClasses.valueVertical],u=[n.cssClasses.markerHorizontal,n.cssClasses.markerVertical];function c(t,e){var r=e===n.cssClasses.value,i=r?o:a;return e+" "+(r?s:u)[n.ort]+" "+i[t]}return l(i,n.cssClasses.pips),l(i,0===n.ort?n.cssClasses.pipsHorizontal:n.cssClasses.pipsVertical),Object.keys(t).forEach(function(o){!function(t,o,a){if((a=e?e(o,a):a)!==V){var s=F(i,!1);s.className=c(a,n.cssClasses.marker),s.style[n.style]=t+"%",a>O&&((s=F(i,!1)).className=c(a,n.cssClasses.value),s.setAttribute("data-value",o),s.style[n.style]=t+"%",s.innerHTML=r.to(o))}}(o,t[o][0],t[o][1])}),i}function B(){var t;m&&((t=m).parentElement.removeChild(t),m=null)}function X(e){B();var r=e.mode,n=e.density||1,i=e.filter||!1,o=function(e,r,n){if("range"===e||"steps"===e)return N.xVal;if("count"===e){if(r<2)throw new Error("noUiSlider ("+t+"): 'values' (>= 2) required for mode 'count'.");var i=r-1,o=100/i;for(r=[];i--;)r[i]=i*o;r.push(100),e="positions"}return"positions"===e?r.map(function(t){return N.fromStepping(n?N.getStep(t):t)}):"values"===e?n?r.map(function(t){return N.fromStepping(N.getStep(N.toStepping(t)))}):r:void 0}(r,e.values||!1,e.stepped||!1),a=function(t,e,r){var n,i={},o=N.xVal[0],a=N.xVal[N.xVal.length-1],s=!1,l=!1,u=0;return n=r.slice().sort(function(t,e){return t-e}),(r=n.filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==o&&(r.unshift(o),s=!0),r[r.length-1]!==a&&(r.push(a),l=!0),r.forEach(function(n,o){var a,c,p,f,d,h,m,g,v,b,S=n,w=r[o+1],x="steps"===e;if(x&&(a=N.xNumSteps[o]),a||(a=w-S),!1!==S&&void 0!==w)for(a=Math.max(a,1e-7),c=S;c<=w;c=(c+a).toFixed(7)/1){for(g=(d=(f=N.toStepping(c))-u)/t,b=d/(v=Math.round(g)),p=1;p<=v;p+=1)i[(h=u+p*b).toFixed(5)]=[N.fromStepping(h),0];m=r.indexOf(c)>-1?L:x?z:O,!o&&s&&(m=0),c===w&&l||(i[f.toFixed(5)]=[c,m]),u=f}}),i}(n,r,o),s=e.format||{to:Math.round};return m=x.appendChild(R(a,i,s))}function Y(){var t=p.getBoundingClientRect(),e="offset"+["Width","Height"][n.ort];return 0===n.ort?t.width||p[e]:t.height||p[e]}function _(t,e,r,i){var o=function(o){return!!(o=function(t,e,r){var n,i,o=0===t.type.indexOf("touch"),a=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");0===t.type.indexOf("MSPointer")&&(s=!0);if(o){var l=function(t){return t.target===r||r.contains(t.target)};if("touchstart"===t.type){var u=Array.prototype.filter.call(t.touches,l);if(u.length>1)return!1;n=u[0].pageX,i=u[0].pageY}else{var p=Array.prototype.find.call(t.changedTouches,l);if(!p)return!1;n=p.pageX,i=p.pageY}}e=e||c(P),(a||s)&&(n=t.clientX+e.x,i=t.clientY+e.y);return t.pageOffset=e,t.points=[n,i],t.cursor=a||s,t}(o,i.pageOffset,i.target||e))&&(!(x.hasAttribute("disabled")&&!i.doNotReject)&&(a=x,s=n.cssClasses.tap,!((a.classList?a.classList.contains(s):new RegExp("\\b"+s+"\\b").test(a.className))&&!i.doNotReject)&&(!(t===S.start&&void 0!==o.buttons&&o.buttons>1)&&((!i.hover||!o.buttons)&&(w||o.preventDefault(),o.calcPoint=o.points[n.ort],void r(o,i))))));var a,s},a=[];return t.split(" ").forEach(function(t){e.addEventListener(t,o,!!w&&{passive:!0}),a.push([t,o])}),a}function I(t){var e,r,i,a,s,l,u=100*(t-(e=p,r=n.ort,i=e.getBoundingClientRect(),a=e.ownerDocument,s=a.documentElement,l=c(a),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(l.x=0),r?i.top+l.y-s.clientTop:i.left+l.x-s.clientLeft))/Y();return u=o(u),n.dir?100-u:u}function W(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&G(t,e)}function $(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return G(t,e);var r=(n.dir?-1:1)*(t.calcPoint-e.startCalcPoint);it(r>0,100*r/e.baseSize,e.locations,e.handleNumbers)}function G(t,e){e.handle&&(u(e.handle,n.cssClasses.active),C-=1),e.listeners.forEach(function(t){A.removeEventListener(t[0],t[1])}),0===C&&(u(x,n.cssClasses.drag),at(),t.cursor&&(M.style.cursor="",M.removeEventListener("selectstart",r))),e.handleNumbers.forEach(function(t){tt("change",t),tt("set",t),tt("end",t)})}function J(t,e){var i;if(1===e.handleNumbers.length){var o=f[e.handleNumbers[0]];if(o.hasAttribute("disabled"))return!1;i=o.children[0],C+=1,l(i,n.cssClasses.active)}t.stopPropagation();var a=[],s=_(S.move,A,$,{target:t.target,handle:i,listeners:a,startCalcPoint:t.calcPoint,baseSize:Y(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:y.slice()}),u=_(S.end,A,G,{target:t.target,handle:i,listeners:a,doNotReject:!0,handleNumbers:e.handleNumbers}),c=_("mouseout",A,W,{target:t.target,handle:i,listeners:a,doNotReject:!0,handleNumbers:e.handleNumbers});a.push.apply(a,s.concat(u,c)),t.cursor&&(M.style.cursor=getComputedStyle(t.target).cursor,f.length>1&&l(x,n.cssClasses.drag),M.addEventListener("selectstart",r,!1)),e.handleNumbers.forEach(function(t){tt("start",t)})}function K(t){t.stopPropagation();var e=I(t.calcPoint),r=function(t){var e=100,r=!1;return f.forEach(function(n,i){if(!n.hasAttribute("disabled")){var o=Math.abs(y[i]-t);(o<e||100===o&&100===e)&&(r=i,e=o)}}),r}(e);if(!1===r)return!1;n.events.snap||i(x,n.cssClasses.tap,n.animationDuration),st(r,e,!0,!0),at(),tt("slide",r,!0),tt("update",r,!0),tt("change",r,!0),tt("set",r,!0),n.events.snap&&J(t,{handleNumbers:[r]})}function Q(t){var e=I(t.calcPoint),r=N.getStep(e),n=N.fromStepping(r);Object.keys(k).forEach(function(t){"hover"===t.split(".")[0]&&k[t].forEach(function(t){t.call(h,n)})})}function Z(t,e){k[t]=k[t]||[],k[t].push(e),"update"===t.split(".")[0]&&f.forEach(function(t,e){tt("update",e)})}function tt(t,e,r){Object.keys(k).forEach(function(i){var o=i.split(".")[0];t===o&&k[i].forEach(function(t){t.call(h,U.map(n.format.to),e,U.slice(),r||!1,y.slice())})})}function et(t){return t+"%"}function rt(t,e,r,i,a,s){return f.length>1&&!n.events.unconstrained&&(i&&e>0&&(r=Math.max(r,t[e-1]+n.margin)),a&&e<f.length-1&&(r=Math.min(r,t[e+1]-n.margin))),f.length>1&&n.limit&&(i&&e>0&&(r=Math.min(r,t[e-1]+n.limit)),a&&e<f.length-1&&(r=Math.max(r,t[e+1]-n.limit))),n.padding&&(0===e&&(r=Math.max(r,n.padding[0])),e===f.length-1&&(r=Math.min(r,100-n.padding[1]))),!((r=o(r=N.getStep(r)))===t[e]&&!s)&&r}function nt(t,e){var r=n.ort;return(r?e:t)+", "+(r?t:e)}function it(t,e,r,n){var i=r.slice(),o=[!t,t],a=[t,!t];n=n.slice(),t&&n.reverse(),n.length>1?n.forEach(function(t,r){var n=rt(i,t,i[t]+e,o[r],a[r],!1);!1===n?e=0:(e=n-i[t],i[t]=n)}):o=a=[!0];var s=!1;n.forEach(function(t,n){s=st(t,r[t]+e,o[n],a[n])||s}),s&&n.forEach(function(t){tt("update",t),tt("slide",t)})}function ot(t,e){return n.dir?100-t-e:t}function at(){E.forEach(function(t){var e=y[t]>50?-1:1,r=3+(f.length+e*t);f[t].style.zIndex=r})}function st(t,e,r,i){return!1!==(e=rt(y,t,e,r,i,!1))&&(function(t,e){y[t]=e,U[t]=N.fromStepping(e);var r="translate("+nt(et(ot(e,0)-j),"0")+")";f[t].style[n.transformRule]=r,lt(t),lt(t+1)}(t,e),!0)}function lt(t){if(d[t]){var e=0,r=100;0!==t&&(e=y[t-1]),t!==d.length-1&&(r=y[t]);var i=r-e,o="translate("+nt(et(ot(e,i)),"0")+")",a="scale("+nt(i/100,"1")+")";d[t].style[n.transformRule]=o+" "+a}}function ut(t,e){var r=a(t),o=void 0===y[0];e=void 0===e||!!e,n.animate&&!o&&i(x,n.cssClasses.tap,n.animationDuration),E.forEach(function(t){st(t,function(t,e){return null===t||!1===t||void 0===t?y[e]:("number"==typeof t&&(t=String(t)),t=n.format.from(t),!1===(t=N.toStepping(t))||isNaN(t)?y[e]:t)}(r[t],t),!0,!1)}),E.forEach(function(t){st(t,y[t],!0,!0)}),at(),E.forEach(function(t){tt("update",t),null!==r[t]&&e&&tt("set",t)})}function ct(){var t=U.map(n.format.to);return 1===t.length?t[0]:t}return l(g=x,n.cssClasses.target),0===n.dir?l(g,n.cssClasses.ltr):l(g,n.cssClasses.rtl),0===n.ort?l(g,n.cssClasses.horizontal):l(g,n.cssClasses.vertical),p=F(g,n.cssClasses.base),function(t,e){var r=F(e,n.cssClasses.connects);f=[],(d=[]).push(D(r,t[0]));for(var i=0;i<n.handles;i++)f.push(H(e,i)),E[i]=i,d.push(D(r,t[i+1]))}(n.connect,p),(v=n.events).fixed||f.forEach(function(t,e){_(S.start,t.children[0],J,{handleNumbers:[e]})}),v.tap&&_(S.start,p,K,{}),v.hover&&_(S.move,p,Q,{hover:!0}),v.drag&&d.forEach(function(t,e){if(!1!==t&&0!==e&&e!==d.length-1){var r=f[e-1],i=f[e],o=[t];l(t,n.cssClasses.draggable),v.fixed&&(o.push(r.children[0]),o.push(i.children[0])),o.forEach(function(t){_(S.start,t,J,{handles:[r,i],handleNumbers:[e-1,e]})})}}),ut(n.start),h={destroy:function(){for(var t in n.cssClasses)n.cssClasses.hasOwnProperty(t)&&u(x,n.cssClasses[t]);for(;x.firstChild;)x.removeChild(x.firstChild);delete x.noUiSlider},steps:function(){return y.map(function(t,e){var r=N.getNearbySteps(t),n=U[e],i=r.thisStep.step,o=null;!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),o=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===t?i=null:0===t&&(o=null);var a=N.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(a))),null!==o&&!1!==o&&(o=Number(o.toFixed(a))),[o,i]})},on:Z,off:function(t){var e=t&&t.split(".")[0],r=e&&t.substring(e.length);Object.keys(k).forEach(function(t){var n=t.split(".")[0],i=t.substring(n.length);e&&e!==n||r&&r!==i||delete k[t]})},get:ct,set:ut,setHandle:function(e,r,n){var i=[];if(!((e=Number(e))>=0&&e<E.length))throw new Error("noUiSlider ("+t+"): invalid handle number, got: "+e);for(var o=0;o<E.length;o++)i[o]=null;i[e]=r,ut(i,n)},reset:function(t){ut(n.start,t)},__moveHandles:function(t,e,r){it(t,e,y,r)},options:s,updateOptions:function(t,e){var r=ct(),i=["margin","limit","padding","range","animate","snap","step","format"];i.forEach(function(e){void 0!==t[e]&&(s[e]=t[e])});var o=q(s);i.forEach(function(e){void 0!==t[e]&&(n[e]=o[e])}),N=o.spectrum,n.margin=o.margin,n.limit=o.limit,n.padding=o.padding,n.pips&&X(n.pips),y=[],ut(t.start||r,e)},target:x,removePips:B,pips:X},n.pips&&X(n.pips),n.tooltips&&(b=f.map(T),Z("update",function(t,e,r){if(b[e]){var i=t[e];!0!==n.tooltips[e]&&(i=n.tooltips[e].to(r[e])),b[e].innerHTML=i}})),Z("update",function(t,e,r,i,o){E.forEach(function(t){var e=f[t],i=rt(y,t,0,!0,!0,!0),a=rt(y,t,100,!0,!0,!0),s=o[t],l=n.ariaFormat.to(r[t]);i=N.fromStepping(i).toFixed(1),a=N.fromStepping(a).toFixed(1),s=N.fromStepping(s).toFixed(1),e.children[0].setAttribute("aria-valuemin",i),e.children[0].setAttribute("aria-valuemax",a),e.children[0].setAttribute("aria-valuenow",s),e.children[0].setAttribute("aria-valuetext",l)})}),h}return{__spectrum:b,version:t,create:function(e,r){if(!e||!e.nodeName)throw new Error("noUiSlider ("+t+"): create requires a single element, got: "+e);if(e.noUiSlider)throw new Error("noUiSlider ("+t+"): Slider was already initialized.");var n=B(e,q(r),r);return e.noUiSlider=n,n}}});
},{}],"RZIL":[function(require,module,exports) {
var define;
var e;!function(n){"function"==typeof e&&e.amd?e(n):"undefined"!=typeof module&&module.exports?module.exports=n():window.enterView=n.call(this)}(function(){return function(e){function n(){var e=document.documentElement.clientHeight,n=window.innerHeight||0;A=Math.max(e,n)}function t(){x=!1;var e=function(){if(w&&"number"==typeof w){var e=Math.min(Math.max(0,w),1);return A-e*A}return A}();(y=y.filter(function(n){var t=n.getBoundingClientRect(),o=t.top,r=t.bottom,i=t.height,s=o<e,u=r<e;if(s&&!n.__ev_entered){if(_(n),n.__ev_progress=0,l(n,n.__ev_progress),p)return!1}else!s&&n.__ev_entered&&(n.__ev_progress=0,l(n,n.__ev_progress),f(n));if(s&&!u){var d=(e-o)/i;n.__ev_progress=Math.min(1,Math.max(0,d)),l(n,n.__ev_progress)}return s&&u&&1!==n.__ev_progress&&(n.__ev_progress=1,l(n,n.__ev_progress)),n.__ev_entered=s,!0})).length||window.removeEventListener("scroll",o,!0)}function o(){x||(x=!0,h(t))}function r(){n(),t()}function i(){n(),t()}function s(e){for(var n=e.length,t=[],o=0;o<n;o+=1)t.push(e[o]);return t}function u(){y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"==typeof e?s(n.querySelectorAll(e)):e instanceof NodeList?s(e):e instanceof Array?e:void 0}(d)}var d=e.selector,a=e.enter,_=void 0===a?function(){}:a,c=e.exit,f=void 0===c?function(){}:c,v=e.progress,l=void 0===v?function(){}:v,m=e.offset,w=void 0===m?0:m,g=e.once,p=void 0!==g&&g,h=null,x=!1,y=[],A=0;d?(u(),y&&y.length?(h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(e){return setTimeout(e,1e3/60)},window.addEventListener("resize",r,!0),window.addEventListener("scroll",o,!0),window.addEventListener("load",i,!0),r(),t()):console.error("no selector elements found")):console.error("must pass a selector")}});
},{}],"TAPd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=l(require("./load-data"));require("./pudding-chart/heatmap"),require("./pudding-chart/histogram"),require("./pudding-chart/block");var n=l(require("nouislider")),t=l(require("enter-view"));function l(e){return e&&e.__esModule?e:{default:e}}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},l=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.forEach(function(n){r(e,n,t[n])})}return e}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i=[],a=[],c=[],u=null,s=null,d=null,f=["mlb","nba","nfl","nhl","mls","wnba","nwsl"],p=1950,m=null,v=d3.select(".heatmap figure"),b=d3.select(".histogram figure"),h=d3.select(".block__names"),g=d3.select(".block figure"),y=d3.select(".block__slider"),_=d3.selectAll(".block__buttons p"),k=d3.select(".leagueDropdown"),w=d3.select(".leagueName"),x=d3.selectAll(".vignettes span"),O=d3.select(".block__more"),A=d3.select(".block__more button"),I=null,j=null,q=null;function N(){(0,t.default)({selector:".name-container__left",enter:function(e){e.classList.add("entered")},offset:.5,once:!0}),(0,t.default)({selector:".name-container__right",enter:function(e){e.classList.add("entered")},offset:.5,once:!0})}function P(e){return f.map(function(n){return e.find(function(e){return e.key===n})||{key:n,value:null}})}function B(e){var n=e[0].filter(function(e){return e.decade>="1950"});a=d3.nest().key(function(e){return e.decade}).sortKeys(d3.ascending).key(function(e){return e.league}).sortKeys(function(e,n){return f.indexOf(e)-f.indexOf(n)}).rollup(function(e){var n=e.length,t=e.filter(function(e){return"true"==e.hyphen}).length;return{values:e,allNames:n,withHyphens:t,percentHyphen:(t/n*100).toFixed(2)}}).entries(n).map(function(e){return o({},e,{values:P(e.values)})})}function M(){u=v.datum(a).puddingHeatMap()}function U(e){d=g.datum(e).puddingBlock()}function H(){(j=n.default.create(y.node(),{start:1950,step:10,tooltips:[{to:function(e){return e}}],range:{min:1950,max:2010}})).on("slide",D)}function S(){j.set(p);var e=k.node().options[k.node().selectedIndex].value;d3.selectAll(".name").remove(),d3.selectAll(".tooltip").transition(300).style("left","-100%"),d.buildNameBlock(e,p),(p+=10)>2010&&clearInterval(m)}function D(e){clearInterval(m);var n=k.node().options[k.node().selectedIndex].value,t=Math.floor(e);d3.selectAll(".name").remove(),d.buildNameBlock(n,t)}function K(){clearInterval(m),h.style("max-height","none"),O.style("display","none")}function L(){q=this.value}function z(){clearInterval(m);var e=d3.select(".noUi-origin");e.node().removeAttribute("disabled");var n=d3.select(".noUi-base");n.classed("dis-handle",!1);var t=this.value,l=d3.select(".noUi-tooltip").node().textContent;("wnba"==t||"mls"==t&&l<1990)&&(l=1990,y.node().noUiSlider.updateOptions({range:{min:l,max:2010}})),"nwsl"==t&&l<2010&&(l=2010,e.node().setAttribute("disabled",!0),n.classed("dis-handle",!0)),"nwsl"==q&&(l=2010),q=this.value,j.set(l),d3.selectAll(".name").remove(),d.buildNameBlock(t,l)}function C(e){window.scroll({behavior:"smooth",left:0,top:e.offsetTop-48})}function E(){var e=this.className.split("_")[1];C(d3.select("#".concat(e)).node())}function F(){m=setInterval(S,2e3)}function T(){}function G(){(0,e.default)().then(function(e){B(i=e),M(a),U(a),H(),N(),F(),k.on("focus",L),k.on("change",z),x.on("click",E),A.on("click",K)}).catch(console.error)}var J={init:G,resize:T};exports.default=J;
},{"./load-data":"xZJw","./pudding-chart/heatmap":"IlmA","./pudding-chart/histogram":"e1mK","./pudding-chart/block":"PX0w","nouislider":"p3wi","enter-view":"RZIL"}],"v9Q8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=[{image:"2018_02_stand-up",url:"2018/02/stand-up",hed:"The Structure of Stand-Up Comedy"},{image:"2018_04_birthday-paradox",url:"2018/04/birthday-paradox",hed:"The Birthday Paradox Experiment"},{image:"2018_11_boy-bands",url:"2018/11/boy-bands",hed:"Internet Boy Band Database"},{image:"2018_08_pockets",url:"2018/08/pockets",hed:"Women’s Pockets are Inferior"}],t=null;function n(e,t){var n=document.getElementsByTagName("script")[0],o=document.createElement("script");return o.src=e,o.async=!0,n.parentNode.insertBefore(o,n),t&&"function"==typeof t&&(o.onload=t),o}function o(t){var n=new XMLHttpRequest,o=Date.now(),r="https://pudding.cool/assets/data/stories.json?v=".concat(o);n.open("GET",r,!0),n.onload=function(){if(n.status>=200&&n.status<400){var o=JSON.parse(n.responseText);t(o)}else t(e)},n.onerror=function(){return t(e)},n.send()}function r(e){return"\n\t<a class='footer-recirc__article' href='https://pudding.cool/".concat(e.url,"' target='_blank'>\n\t\t<img class='article__img' src='https://pudding.cool/common/assets/thumbnails/640/").concat(e.image,".jpg' alt='").concat(e.hed,"'>\n\t\t<p class='article__headline'>").concat(e.hed,"</p>\n\t</a>\n\t")}function a(){var e=window.location.href,n=t.filter(function(t){return!e.includes(t.url)}).slice(0,4).map(r).join("");d3.select(".pudding-footer .footer-recirc__articles").html(n)}function s(){var e,t,o,r,a;e=document,t="script",o="facebook-jssdk",a=e.getElementsByTagName(t)[0],e.getElementById(o)||((r=e.createElement(t)).id=o,r.src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7",a.parentNode.insertBefore(r,a)),n("https://platform.twitter.com/widgets.js")}function c(){o(function(e){t=e,a(),s()})}var i={init:c};exports.default=i;
},{}],"epB2":[function(require,module,exports) {
"use strict";var e=l(require("lodash.debounce")),i=l(require("./utils/is-mobile")),s=l(require("./graphic")),t=l(require("./footer"));function l(e){return e&&e.__esModule?e:{default:e}}var d=d3.select("body"),r=0;function a(){var e=d.node().offsetWidth;r!==e&&(r=e,s.default.resize())}function n(){if(d.select("header").classed("is-sticky")){var e=d.select(".header__menu"),i=d.select(".header__toggle");i.on("click",function(){var s=e.classed("is-visible");e.classed("is-visible",!s),i.classed("is-visible",!s)})}}function u(){d.classed("is-mobile",i.default.any()),window.addEventListener("resize",(0,e.default)(a,150)),n(),s.default.init(),t.default.init()}u();
},{"lodash.debounce":"or4r","./utils/is-mobile":"WEtf","./graphic":"TAPd","./footer":"v9Q8"}]},{},["epB2"], null)