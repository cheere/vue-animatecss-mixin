(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],m=0,d=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},i={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-animatecss-mixin/vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("p",[t._v("vue")]),n("Elevator"),n("Home"),n("Footer")],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"elevator_list",attrs:{id:"qd_el_li"}},[n("div",{staticClass:"elevator_item"},[n("div",{staticClass:"el_li_totop_icon el_li_icon cursor",on:{click:function(e){return t.click(0,e)}}})])])},s=[],c={data:function(){return{contantShow:!1}},mounted:function(){},methods:{click:function(t,e){0===t?(this.gotoTop(),this.changeContack(!1)):1===t&&this.clickContack(e)},gotoTop:function(){document.body.scrollTop=document.documentElement.scrollTop=0,setTimeout((function(){var t=document.getElementById("qd_el_li");t.style.display="none"}),1)},clickContack:function(t){var e=!this.contantShow;this.changeContack(e),this.stopContack(t)},stopContack:function(t){t.stopPropagation?t.stopPropagation():"boolean"===typeof t.cancelBubble&&(t.cancelBubble=!0)},changeContack:function(t){this.contantShow=t,this.setElementStyleDisplay("el_li_left_contact",t)},setElementStyleDisplay:function(t,e){var n=document.getElementsByClassName(t)||[],a=e?"inherit":"none";if(n){var i=n[0];i&&i.nodeName&&"DIV"===i.nodeName&&(i.style.display=a)}}}},l=c,u=n("2877"),m=Object(u["a"])(l,o,s,!1,null,null,null),d=m.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"qd_footer"},[n("div",{staticClass:"m"},[t._v(" mobile ")]),n("div",{staticClass:"qd_copyright_info"},[n("span",{staticClass:"qd_c_i_text"},[t._v("Copyright © 2020 "),n("a",{attrs:{herf:"https://github.com/srxboys",title:"GitHub"}},[t._v("srxboys")]),t._v(".All Rights Reserved")])]),n("div",[n("a",{attrs:{href:"https://github.com/cheere/vue-animatecss-mixin",title:"GitHub"}},[t._v("vue-animatecss-mixin")])])])}],p={},v=p,g=Object(u["a"])(v,f,h,!1,null,null,null),y=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h2",{on:{click:t.goback}},[t._v("vue-animatecss-mixin demo")]),n("hr"),n("div",{staticClass:"container"},t._l(t.data,(function(e,a){return n("div",{key:"data_"+a,staticClass:"data",class:e.className,on:{click:t.playKeynote}},[n("div",{staticClass:"title",attrs:{"data-animation":e.dataAnimation}},[t._v(t._s(e.keynote))]),n("div",{staticClass:"content"},t._l(e.des,(function(e,a){return n("div",{key:"des_"+a,staticClass:"des cursor",attrs:{"data-animation":e},on:{click:function(e){return e.stopPropagation(),t.playTarget(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])})),0)])},_=[],k=(n("4160"),n("a15b"),n("fb6a"),n("159b"),n("53ca")),E={methods:{animateAddEndListener:function(t){t.addEventListener("animationend",(function(){for(var e=t.classList||[],n=[],a=0;a<e.length;a++){var i=e[a];i&&(i.length>6&&"animate"===i.substring(0,7)||n.push(i))}t.classList=n,t.classList.value=n.join(" ")}))},animateRemoveAllListener:function(t){t&&Array.isArray(t)&&t.forEach((function(t){t.removeEventListener("animationend")}))},animateRemoveListener:function(t){t.removeEventListener("animationend")},animateChildNodes:function(t,e){var n=t.childNodes;if(n&&n.length)for(var a=0;a<n.length;a++){var i=n[a];i&&1===i.nodeType&&e&&"function"===typeof e&&e(i)}},animateForElement:function(t,e){var n=this;this.animateChildNodes(t,(function(t){var a=t.getAttribute("data-animation");a&&"string"===typeof a&&e.push(t),1===t.nodeType&&t.childElementCount>0&&n.animateForElement(t,e)}))},animateGetTarget:function(t){if(t){if("string"===typeof t){var e=t.substring(0,1);if("#"===e){var n=t.slice(1,t.length),a=document.getElementById(n);return a}"."!==e&&(t="."+t);var i=t.slice(1,t.length),r=document.getElementsByClassName(i);return r}if("object"===Object(k["a"])(t)){if(1===t.nodeType)return t;throw new TypeError("animateGetTarget target.nodeType !== 1")}throw new TypeError("animateGetTarget target allow string/object")}throw new TypeError("animateGetTarget target = null")},animatePlayground:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=0;e<t.length;e++){var n=t[e],a=this.animateGetTarget(n);if(a&&1===a.nodeType){var i="animate__".concat(a.getAttribute("data-animation"));i&&"animate__null"!==i&&(this.animateAddEndListener(a),a.classList.add("animate__animated",i))}}}}},A=E,C={data:function(){return{animateSeekers:[],animateEntrances:[]}},beforeDestory:function(){this.animateRemoveAllListener(this.animateSeekers),this.animateRemoveAllListener(this.animateEntrances)},mounted:function(){this.getAllAnimate()},methods:{getAllAnimate:function(){this.getAnimateSeekers(),this.getAnimagteEntrances()},getAnimateSeekers:function(){var t=[],e=this.animateGetTarget(".seekers");this.animateForElement(e[0],t),this.animateSeekers=t},getAnimagteEntrances:function(){var t=this.animateGetTarget(".entrances"),e=[];this.animateForElement(t[0],e),this.animateEntrances=e},playKeynote:function(t){var e=!0,n=t.target,a=n.className;if("data seekers"!==a&&"data entrances"!==a)while(e)n=n.parentElement,a=n.className,"data seekers"!==a&&"data entrances"!==a||(e=!1);"data seekers"===a?this.playSeekersAnimate():"data entrances"===a&&this.playEntrancesAnimate()},playSeekersAnimate:function(){this.animatePlayground(this.animateSeekers)},playEntrancesAnimate:function(){this.animatePlayground(this.animateEntrances)},playTarget:function(t){var e=t.target;this.animatePlayground([e])}}},w=C,T={mixins:[A,w],data:function(){return{data:[{className:"seekers",keynote:"Attention seekers",dataAnimation:"heartBeat",des:["bounce","flash","pulse","rubberBand","shakeX","shakeY","headShake","swing","tada","wobble","jello","heartBeat"]},{className:"entrances",keynote:"Back entrances",dataAnimation:"backInUp",des:["backInDown","backInLeft","backInRight","backInUp"]}]}},methods:{goback:function(){history.go(-1)}}},S=T,j=Object(u["a"])(S,b,_,!1,null,null,null),x=j.exports,O={name:"App",components:{Elevator:d,Footer:y,Home:x}},L=O,P=Object(u["a"])(L,i,r,!1,null,null,null),N=P.exports;n("77ed"),n("5aea");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(N)}}).$mount("#app")},"5aea":function(t,e,n){}});