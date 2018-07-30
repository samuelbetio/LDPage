/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-ambientlight-applicationcache-audio-backdropfilter-backgroundcliptext-batteryapi-blobconstructor-borderradius-boxshadow-boxsizing-canvas-canvastext-contenteditable-contextmenu-cookies-cors-cryptography-cssanimations-csscalc-datalistelem-filereader-jpeg2000-multiplebgs-objectfit-outputelem-stylescoped-urlparser-urlsearchparams-videocrossorigin-webpalpha-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-printshiv-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,a,i,s;for(var l in T)if(T.hasOwnProperty(l)){if(e=[],t=T[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),b.push((o?"":"no-")+s.join("-"))}}function a(e){var t=x.className,n=Modernizr._config.classPrefix||"";if(C&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?x.className.baseVal=t:x.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function l(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(e,t){if("object"==typeof e)for(var n in e)N(e,n)&&c(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),a([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function u(){var e=t.body;return e||(e=i(C?"svg":"body"),e.fake=!0),e}function d(e,n,r,o){var a,s,l,c,d="modernizr",f=i("div"),p=u();if(parseInt(r,10))for(;r--;)l=i("div"),l.id=o?o[r]:d+(r+1),f.appendChild(l);return a=i("style"),a.type="text/css",a.id="s"+d,(p.fake?p:f).appendChild(a),p.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",c=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=c,x.offsetHeight):f.parentNode.removeChild(f),!!s}function f(e,t){return!!~(""+e).indexOf(t)}function p(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n){var o;for(var a in e)if(e[a]in t)return n===!1?e[a]:(o=t[e[a]],r(o,"function")?p(o,n||t):o);return!1}function A(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var a=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(a){var i=a.error?"error":"log";a[i].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(l(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+l(t[o])+":"+r+")");return a=a.join(" or "),d("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==A(e,null,"position")})}return n}function v(e,t,o,a){function l(){u&&(delete L.style,delete L.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var c=h(e,o);if(!r(c,"undefined"))return c}for(var u,d,p,m,A,v=["modernizr","tspan","samp"];!L.style&&v.length;)u=!0,L.modElem=i(v.shift()),L.style=L.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],A=L.style[m],f(m,"-")&&(m=s(m)),L.style[m]!==n){if(a||r(o,"undefined"))return l(),"pfx"==t?m:!0;try{L.style[m]=o}catch(g){}if(L.style[m]!=A)return l(),"pfx"==t?m:!0}return l(),!1}function g(e,t,n,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+P.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,o,a):(s=(e+" "+k.join(i+" ")+i).split(" "),m(s,t,n))}function y(e,t,r){return g(e,n,n,t,r)}var b=[],T=[],E={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){T.push({name:e,fn:t,options:n})},addAsyncTest:function(e){T.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("blobconstructor",function(){try{return!!new Blob}catch(e){return!1}},{aliases:["blob-constructor"]}),Modernizr.addTest("cookies",function(){try{t.cookie="cookietest=1";var e=-1!=t.cookie.indexOf("cookietest=");return t.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(n){return!1}}),Modernizr.addTest("cors","XMLHttpRequest"in e&&"withCredentials"in new XMLHttpRequest),Modernizr.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader)),Modernizr.addTest("urlparser",function(){var e;try{return e=new URL("http://modernizr.com/"),"http://modernizr.com/"===e.href}catch(t){return!1}}),Modernizr.addTest("urlsearchparams","URLSearchParams"in e);var w=E._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];E._prefixes=w;var x=t.documentElement;Modernizr.addTest("contextmenu","contextMenu"in x&&"HTMLMenuItemElement"in e);var C="svg"===x.nodeName.toLowerCase();C||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=x.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=x.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),x.elements=n+" "+e,c(t)}function a(e){var t=w[e[T]];return t||(t={},E++,e[T]=E,w[E]=t),t}function i(e,n,r){if(n||(n=t),h)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():b.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||y.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),h)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),l=s.length;l>i;i++)o.createElement(s[i]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return x.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(x,t.frag)}function c(e){e||(e=t);var r=a(e);return!x.shivCSS||A||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),h||l(e,r),e}function u(e){for(var t,n=e.getElementsByTagName("*"),o=n.length,a=RegExp("^(?:"+r().join("|")+")$","i"),i=[];o--;)t=n[o],a.test(t.nodeName)&&i.push(t.applyElement(d(t)));return i}function d(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(S+":"+e.nodeName);r--;)t=n[r],t.specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function f(e){for(var t,n=e.split("{"),o=n.length,a=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+S+"\\:$2";o--;)t=n[o]=n[o].split("}"),t[t.length-1]=t[t.length-1].replace(a,i),n[o]=t.join("}");return n.join("{")}function p(e){for(var t=e.length;t--;)e[t].removeNode()}function m(e){function t(){clearTimeout(i._removeSheetTimer),r&&r.removeNode(!0),r=null}var r,o,i=a(e),s=e.namespaces,l=e.parentWindow;return!_||e.printShived?e:("undefined"==typeof s[S]&&s.add(S),l.attachEvent("onbeforeprint",function(){t();for(var a,i,s,l=e.styleSheets,c=[],d=l.length,p=Array(d);d--;)p[d]=l[d];for(;s=p.pop();)if(!s.disabled&&C.test(s.media)){try{a=s.imports,i=a.length}catch(m){i=0}for(d=0;i>d;d++)p.push(a[d]);try{c.push(s.cssText)}catch(m){}}c=f(c.reverse().join("")),o=u(e),r=n(e,c)}),l.attachEvent("onafterprint",function(){p(o),clearTimeout(i._removeSheetTimer),i._removeSheetTimer=setTimeout(t,500)}),e.printShived=!0,e)}var A,h,v="3.7.3",g=e.html5||{},y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,b=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,T="_html5shiv",E=0,w={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",A="hidden"in e,h=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){A=!0,h=!0}}();var x={elements:g.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:v,shivCSS:g.shivCSS!==!1,supportsUnknownElements:h,shivMethods:g.shivMethods!==!1,type:"default",shivDocument:c,createElement:i,createDocumentFragment:s,addElements:o};e.html5=x,c(t);var C=/^$|\b(?:all|print)\b/,S="html5shiv",_=!h&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}();x.type+=" print",x.shivPrint=m,m(t),"object"==typeof module&&module.exports&&(module.exports=x)}("undefined"!=typeof e?e:this,t);var S=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=i(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=i("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();E.hasEvent=S,Modernizr.addTest("ambientlight",S("devicelight",e)),Modernizr.addTest("audio",function(){var e=i("audio"),t=!1;try{t=!!e.canPlayType,t&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof i("canvas").getContext("2d").fillText}),Modernizr.addTest("contenteditable",function(){if("contentEditable"in x){var e=i("div");return e.contentEditable=!0,"true"===e.contentEditable}}),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=i("a");return n.style.cssText=e+w.join(t+e),!!n.style.length}),Modernizr.addTest("multiplebgs",function(){var e=i("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("outputelem","value"in i("output")),Modernizr.addTest("videocrossorigin","crossOrigin"in i("video"));var _="Moz O ms Webkit",k=E._config.usePrefixes?_.toLowerCase().split(" "):[];E._domPrefixes=k;var B=function(e,t){var n=!1,r=i("div"),o=r.style;if(e in o){var a=k.length;for(o[e]=t,n=o[e];a--&&!n;)o[e]="-"+k[a]+"-"+t,n=o[e]}return""===n&&(n=!1),n};E.prefixedCSSValue=B;var P=E._config.usePrefixes?_.split(" "):[];E._cssomPrefixes=P;var j=function(t){var r,o=w.length,a=e.CSSRule;if("undefined"==typeof a)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in a)return"@"+t;for(var i=0;o>i;i++){var s=w[i],l=s.toUpperCase()+"_"+r;if(l in a)return"@-"+s.toLowerCase()+"-"+t}return!1};E.atRule=j;var N;!function(){var e={}.hasOwnProperty;N=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),E._l={},E.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},E._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){E.addTest=c}),Modernizr.addAsyncTest(function(){var e=new Image;e.onload=e.onerror=function(){c("jpeg2000",1==e.width)},e.src="data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k="}),Modernizr.addAsyncTest(function(){var e=new Image;e.onerror=function(){c("webpalpha",!1,{aliases:["webp-alpha"]})},e.onload=function(){c("webpalpha",1==e.width,{aliases:["webp-alpha"]})},e.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="});var D=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return d("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();E.mq=D;var M=(E.testStyles=d,i("input")),Q="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),U={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)U[t[n]]=!!(t[n]in M);return U.list&&(U.list=!(!i("datalist")||!e.HTMLDataListElement)),U}(Q),Modernizr.addTest("datalistelem",Modernizr.input.list);var z={elem:i("modernizr")};Modernizr._q.push(function(){delete z.elem});var L={style:z.elem.style};Modernizr._q.unshift(function(){delete L.style});E.testProp=function(e,t,r){return v([e],n,t,r)};E.testAllProps=g;var R=E.prefixed=function(e,t,n){return 0===e.indexOf("@")?j(e):(-1!=e.indexOf("-")&&(e=s(e)),t?g(e,t,n):g(e,"pfx"))};E.prefixedCSS=function(e){var t=R(e);return t&&l(t)};Modernizr.addTest("batteryapi",!!R("battery",navigator),{aliases:["battery-api"]});var F=R("crypto",e);Modernizr.addTest("crypto",!!R("subtle",F)),Modernizr.addTest("objectfit",!!R("objectFit"),{aliases:["object-fit"]}),E.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("backdropfilter",y("backdropFilter")),Modernizr.addTest("backgroundcliptext",function(){return y("backgroundClip","text")}),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",y("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",y("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),Modernizr.addTest("stylescoped","scoped"in i("style")),o(),a(b),delete E.addTest,delete E.addAsyncTest;for(var $=0;$<Modernizr._q.length;$++)Modernizr._q[$]();e.Modernizr=Modernizr}(window,document);