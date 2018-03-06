!function(n,e){"object"==typeof exports?module.exports=e(require("onecolor")):"function"==typeof define&&define.amd?define(["onecolor"],e):n.colorjoe=e(n.one.color)}(this,function(n){function e(n,e,t){var r=document.createElement(n);return r.className=e,t.appendChild(r),r}function t(n){var e=Array.prototype.slice,t=e.apply(arguments,[1]);return function(){return n.apply(null,t.concat(e.apply(arguments)))}}function r(n,e,t,r){var u="colorPickerInput"+Math.floor(1001*Math.random()),a=z(n,t),c=o(e,a,u),l=i("text",a,r,u);return{label:c,input:l}}function o(n,t,r){var o=e("label","",t);return o.innerHTML=n,r&&o.setAttribute("for",r),o}function i(n,t,r,o){var i=e("input","",t);return i.type=n,r&&(i.maxLength=r),o&&i.setAttribute("id",o),r&&(i.maxLength=r),i}function u(n,e){n.style.left=l(100*e,0,100)+"%"}function a(n,e){n.style.top=l(100*e,0,100)+"%"}function c(n,e){n.style.background=e}function l(n,e,t){return Math.min(Math.max(n,e),t)}function s(n){var e=M.div("currentColorContainer",n),t=M.div("currentColor",e);return{change:function(n){M.BG(t,n.cssa())}}}function f(n,e,t){function r(){e.done()}function o(n){n.ctrlKey||n.altKey||!/^[a-zA-Z]$/.test(n.key)||n.preventDefault()}function i(){var n=[u];h.forEach(function(e){n.push(e.e.input.value/a)}),f||n.push(e.getAlpha()),e.set(n)}var u=t.space,a=t.limit||255,c=t.fix>=0?t.fix:0,l=(""+a).length+c;l=c?l+1:l;var s=u.split(""),f="A"==u[u.length-1];if(u=f?u.slice(0,-1):u,["RGB","HSL","HSV","CMYK"].indexOf(u)<0)return console.warn("Invalid field names",u);var p=M.div("colorFields",n),h=s.map(function(n){n=n.toLowerCase();var e=M.labelInput("color "+n,n,p,l);return e.input.onblur=r,e.input.onkeydown=o,e.input.onkeyup=i,{name:n,e:e}});return{change:function(n){h.forEach(function(e){e.e.input.value=(n[e.name]()*a).toFixed(c)})}}}function p(n,e){function t(){e.done()}function r(n){var t=M.clamp(n.y,0,1);M.Y(n.pointer,t),e.setAlpha(1-t)}var o=j.slider({parent:n,"class":"oned alpha",cbs:{begin:r,change:r,end:t}});return{change:function(n){M.Y(o.pointer,1-n.alpha())}}}function h(n,e,t){var r=M.labelInput("hex",t.label||"",n,7);return r.input.value="#",r.input.onkeyup=function(n){var t=n.keyCode||n.which,r=n.target.value;r="#"==r[0]?r:"#"+r,r=v(r,7,"0"),13==t&&e.set(r)},r.input.onblur=function(n){e.set(n.target.value),e.done()},{change:function(n){r.input.value="#"==r.input.value[0]?"#":"",r.input.value+=n.hex().slice(1)}}}function d(n,e,t){var r=M.e("a",t["class"]||"close",n);r.href="#",r.innerHTML=t.label||"Close",r.onclick=function(n){n.preventDefault(),e.hide()}}function v(n,e,t){for(var r=n,o=n.length;e>o;o++)r+=t;return r}function g(e,t){M.BG(e,new n.HSV(t,1,1).cssa())}function y(n){function e(n){s=u.xy(s,{x:M.clamp(n.x,0,1),y:M.clamp(n.y,0,1)},a,c),r()}function t(n){s=u.z(s,M.clamp(n.y,0,1),a,c),r()}function r(n){n=A(n)?n:[];for(var e=f.change,t,r=0,o=e.length;o>r;r++)t=e[r],-1==n.indexOf(t.name)&&t.fn(s)}function o(){if(!l.equals(s)){for(var n=0,e=f.done.length;e>n;n++)f.done[n].fn(s);l=s}}if(!n.e)return console.warn("colorjoe: missing element");var i=C(n.e)?document.getElementById(n.e):n.e;i.className="colorPicker";var u=n.cbs,a=j.xyslider({parent:i,"class":"twod",cbs:{begin:e,change:e,end:o}}),c=j.slider({parent:i,"class":"oned",cbs:{begin:t,change:t,end:o}}),l=x(n.color),s=u.init(l,a,c),f={change:[],done:[]},p={e:i,done:function(){return o(),this},update:function(n){return r(n),this},hide:function(){return i.style.display="none",this},show:function(){return i.style.display="",this},get:function(){return s},set:function(n,e){var t=this.get();return s=u.init(x(n),a,c),e||t.equals(s)||this.update(),this},getAlpha:function(){return s.alpha()},setAlpha:function(n){return s=s.alpha(n),this.update(),this},on:function(n,e,t){return"change"==n||"done"==n?f[n].push({name:t,fn:e}):console.warn('Passed invalid evt name "'+n+'" to colorjoe.on'),this},removeAllListeners:function(n){if(n)delete f[n];else for(var e in f)delete f[e];return this}};return m(i,p,n.extras),r(),p}function x(e){if(!E(e))return n("#000");if(e.isColor)return e;var t=n(e);return t?t:(E(e)&&console.warn("Passed invalid color to colorjoe, using black instead"),n("#000"))}function m(n,e,t){if(t){var r=M.div("extras",n),o,i,u;t.forEach(function(n,t){A(n)?(i=n[0],u=n.length>1?n[1]:{}):(i=n,u={});var a=i in B._extras?B._extras[i]:null;if(a){o=a(r,b(e,i+t),u);for(var c in o)e.on(c,o[c],i)}})}}function b(n,e){var t=k(n);return t.update=function(){n.update([e])},t}function k(n){var e={};for(var t in n)e[t]=n[t];return e}function w(n,e){return e.map(n).filter(Y).length==e.length}function A(n){return"[object Array]"===Object.prototype.toString.call(n)}function C(n){return"string"==typeof n}function E(n){return"undefined"!=typeof n}function L(n){return"function"==typeof n}function Y(n){return n}var j=function(){function n(n,e){return n?(u(n,e,"touchstart","touchmove","touchend"),void u(n,e,"mousedown","mousemove","mouseup")):void console.warn("drag is missing elem!")}function e(e){var t=o(e["class"]||"",e.parent),i=o("pointer",t);return o("shape shape1",i),o("shape shape2",i),o("bg bg1",t),o("bg bg2",t),n(t,r(e.cbs,i)),{background:t,pointer:i}}function t(e){var t=o(e["class"],e.parent),i=o("pointer",t);return o("shape",i),o("bg",t),n(t,r(e.cbs,i)),{background:t,pointer:i}}function r(n,e){function t(n){return function(t){t.pointer=e,n(t)}}var r={};for(var o in n)r[o]=t(n[o]);return r}function o(n,e){return i("div",n,e)}function i(n,e,t){var r=document.createElement(n);return e&&(r.className=e),t.appendChild(r),r}function u(n,e,t,r,o){var i=!1;e=l(e);var u=e.begin,s=e.change,f=e.end;a(n,t,function(e){function t(){i=!1,c(document,r,l),c(document,o,t),p(f,n,e)}i=!0;var l=h(p,s,n);a(document,r,l),a(document,o,t),p(u,n,e)})}function a(n,e,t){n.addEventListener(e,t,!1)}function c(n,e,t){n.removeEventListener(e,t,!1)}function l(n){if(n)return{begin:n.begin||f,change:n.change||f,end:n.end||f};var e,t;return{begin:function(n){e={x:n.elem.offsetLeft,y:n.elem.offsetTop},t=n.cursor},change:function(n){s(n.elem,"left",e.x+n.cursor.x-t.x+"px"),s(n.elem,"top",e.y+n.cursor.y-t.y+"px")},end:f}}function s(n,e,t){n.style[e]=t}function f(){}function p(n,e,t){t.preventDefault();var r=d(e),o=e.clientWidth,i=e.clientHeight,u={x:v(e,t),y:g(e,t)},a=(u.x-r.x)/o,c=(u.y-r.y)/i;n({x:isNaN(a)?0:a,y:isNaN(c)?0:c,cursor:u,elem:e,e:t})}function h(n){var e=Array.prototype.slice,t=e.apply(arguments,[1]);return function(){return n.apply(null,t.concat(e.apply(arguments)))}}function d(n){var e=n.getBoundingClientRect();return{x:e.left,y:e.top}}function v(n,e){var t=e.touches?e.touches[e.touches.length-1]:e;return t.clientX}function g(n,e){var t=e.touches?e.touches[e.touches.length-1]:e;return t.clientY}return n.xyslider=e,n.slider=t,n}(),z=t(e,"div"),M={clamp:l,e:e,div:z,partial:t,labelInput:r,X:u,Y:a,BG:c},N={currentColor:s,fields:f,hex:h,alpha:p,close:d},B=function(n){return w(L,[n.init,n.xy,n.z])?function(e,t,r){return y({e:e,color:t,cbs:n,extras:r})}:console.warn("colorjoe: missing cb")};B.rgb=B({init:function(e,t,r){var o=n(e).hsv();return this.xy(o,{x:o.saturation(),y:1-o.value()},t,r),this.z(o,o.hue(),t,r),o},xy:function(n,e,t){return M.X(t.pointer,e.x),M.Y(t.pointer,e.y),n.saturation(e.x).value(1-e.y)},z:function(n,e,t,r){return M.Y(r.pointer,e),g(t.background,e),n.hue(e)}}),B.hsl=B({init:function(e,t,r){var o=n(e).hsl();return this.xy(o,{x:o.hue(),y:1-o.saturation()},t,r),this.z(o,1-o.lightness(),t,r),o},xy:function(n,e,t,r){return M.X(t.pointer,e.x),M.Y(t.pointer,e.y),g(r.background,e.x),n.hue(e.x).saturation(1-e.y)},z:function(n,e,t,r){return M.Y(r.pointer,e),n.lightness(1-e)}}),B._extras={},B.registerExtra=function(n,e){n in B._extras&&console.warn('Extra "'+n+'"has been registered already!'),B._extras[n]=e};for(var H in N)B.registerExtra(H,N[H]);return B});
