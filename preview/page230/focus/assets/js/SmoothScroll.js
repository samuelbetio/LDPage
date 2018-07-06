// SmoothScroll for websites v1.2.1
// Licensed under the terms of the MIT license.

// People involved
//  - Balazs Galambosi (maintainer)  
//  - Michael Herf     (Pulse Algorithm)

!function(){function l(){var a=!1;a&&z("keydown",s),b.keyboardSupport&&!a&&y("keydown",s)}function m(){if(document.body){var a=document.body,e=document.documentElement,i=window.innerHeight,j=a.scrollHeight;if(g=document.compatMode.indexOf("CSS")>=0?e:a,h=a,l(),f=!0,top!=self)d=!0;else if(j>i&&(a.offsetHeight<=i||e.offsetHeight<=i)&&(e.style.height="auto",setTimeout(refresh,10),g.offsetHeight<=i)){var k=document.createElement("div");k.style.clear="both",a.appendChild(k)}b.fixedBackground||c||(a.style.backgroundAttachment="scroll",e.style.backgroundAttachment="scroll")}}function q(a,c,d,e){if(e||(e=1e3),B(c,d),1!=b.accelerationMax){var f=+new Date,g=f-p;if(g<b.accelerationDelta){var h=(1+30/g)/2;h>1&&(h=Math.min(h,b.accelerationMax),c*=h,d*=h)}p=+new Date}if(n.push({x:c,y:d,lastX:c<0?.99:-.99,lastY:d<0?.99:-.99,start:+new Date}),!o){var i=a===document.body,j=function(f){for(var g=+new Date,h=0,k=0,l=0;l<n.length;l++){var m=n[l],p=g-m.start,q=p>=b.animationTime,r=q?1:p/b.animationTime;b.pulseAlgorithm&&(r=H(r));var s=m.x*r-m.lastX>>0,t=m.y*r-m.lastY>>0;h+=s,k+=t,m.lastX+=s,m.lastY+=t,q&&(n.splice(l,1),l--)}i?window.scrollBy(h,k):(h&&(a.scrollLeft+=h),k&&(a.scrollTop+=k)),c||d||(n=[]),n.length?F(j,a,e/b.frameRate+1):o=!1};F(j,a,0),o=!0}}function r(a){f||m();var c=a.target,d=x(c);if(!d||a.defaultPrevented||A(h,"embed")||A(c,"embed")&&/\.pdf/i.test(c.src))return!0;var e=a.wheelDeltaX||0,g=a.wheelDeltaY||0;return e||g||(g=a.wheelDelta||0),!(b.touchpadSupport||!D(g))||(Math.abs(e)>1.2&&(e*=b.stepSize/120),Math.abs(g)>1.2&&(g*=b.stepSize/120),q(d,-e,-g),void a.preventDefault())}function s(a){var c=a.target,d=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==k.spacebar;if(/input|textarea|select|embed/i.test(c.nodeName)||c.isContentEditable||a.defaultPrevented||d)return!0;if(A(c,"button")&&a.keyCode===k.spacebar)return!0;var e,f=0,g=0,i=x(h),j=i.clientHeight;switch(i==document.body&&(j=window.innerHeight),a.keyCode){case k.up:g=-b.arrowScroll;break;case k.down:g=b.arrowScroll;break;case k.spacebar:e=a.shiftKey?1:-1,g=-e*j*.9;break;case k.pageup:g=.9*-j;break;case k.pagedown:g=.9*j;break;case k.home:g=-i.scrollTop;break;case k.end:var l=i.scrollHeight-i.scrollTop-j;g=l>0?l+10:0;break;case k.left:f=-b.arrowScroll;break;case k.right:f=b.arrowScroll;break;default:return!0}q(i,f,g),a.preventDefault()}function t(a){h=a.target}function w(a,b){for(var c=a.length;c--;)u[v(a[c])]=b;return b}function x(a){var b=[],c=g.scrollHeight;do{var e=u[v(a)];if(e)return w(b,e);if(b.push(a),c===a.scrollHeight){if(!d||g.clientHeight+10<c)return w(b,document.body)}else if(a.clientHeight+10<a.scrollHeight&&(overflow=getComputedStyle(a,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return w(b,a)}while(a=a.parentNode)}function y(a,b,c){window.addEventListener(a,b,c||!1)}function z(a,b,c){window.removeEventListener(a,b,c||!1)}function A(a,b){return(a.nodeName||"").toLowerCase()===b.toLowerCase()}function B(a,b){a=a>0?1:-1,b=b>0?1:-1,e.x===a&&e.y===b||(e.x=a,e.y=b,n=[],p=0)}function D(a){if(a){a=Math.abs(a),j.push(a),j.shift(),clearTimeout(C);var b=j[0]==j[1]&&j[1]==j[2],c=E(j[0],120)&&E(j[1],120)&&E(j[2],120);return!(b||c)}}function E(a,b){return Math.floor(a/b)==a/b}function G(a){var c,d,e;return a*=b.pulseScale,a<1?c=a-(1-Math.exp(-a)):(d=Math.exp(-1),a-=1,e=1-Math.exp(-a),c=d+e*(1-d)),c*b.pulseNormalize}function H(a){return a>=1?1:a<=0?0:(1==b.pulseNormalize&&(b.pulseNormalize/=G(1)),G(a))}var h,a={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},b=a,c=!1,d=!1,e={x:0,y:0},f=!1,g=document.documentElement,j=[120,120,120],k={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},b=a,n=[],o=!1,p=+new Date,u={};setInterval(function(){u={}},1e4);var C,v=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}(),F=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a,b,c){window.setTimeout(a,c||1e3/60)}}(),I=/chrome/i.test(window.navigator.userAgent),J="onmousewheel"in document;J&&I&&(y("mousedown",t),y("mousewheel",r),y("load",m))}();
