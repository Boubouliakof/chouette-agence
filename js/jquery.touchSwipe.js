!function(e){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function(oe){"use strict";function i(e,g){function t(e){if(!(!0===B.data(Ae+"_intouch")||0<oe(e.target).closest(g.excludedElements,B).length)){var t=e.originalEvent?e.originalEvent:e;if(!t.pointerType||"mouse"!=t.pointerType||0!=g.fallbackToMouseEvents){var n,i=t.touches,r=i?i[0]:t;return J=Oe,i?K=i.length:!1!==g.preventDefaultEvents&&e.preventDefault(),G=F=C=null,W=1,z=V=Y=X=Q=0,(l={})[ue]=L(ue),l[se]=L(se),l[ce]=L(ce),l[pe]=L(pe),Z=l,x(),M(0,r),!i||K===g.fingers||g.fingers===xe||T()?(ee=I(),2==K&&(M(1,i[1]),Y=V=k($[0].start,$[1].start)),(g.swipeStatus||g.pinchStatus)&&(n=v(t,J))):n=!1,!1===n?(v(t,J=Pe),n):(g.hold&&(ae=setTimeout(oe.proxy(function(){B.trigger("hold",[t.target]),g.hold&&(n=g.hold.call(B,t,t.target))},this),g.longTapThreshold)),O(!0),null)}}var l}function n(e){var t,n,i,r,l,a,o,u,s=e.originalEvent?e.originalEvent:e;if(J!==De&&J!==Pe&&!S()){var c,p=s.touches,h=D(p?p[0]:s);if(te=I(),p&&(K=p.length),g.hold&&clearTimeout(ae),J=Me,2==K&&(0==Y?(M(1,p[1]),Y=V=k($[0].start,$[1].start)):(D(p[1]),V=k($[0].end,$[1].end),$[0].end,$[1].end,G=W<1?de:he),W=(V/Y*1).toFixed(2),z=Math.abs(Y-V)),K===g.fingers||g.fingers===xe||!p||T()){if(C=A(h.start,h.end),function(e,t){if(!1!==g.preventDefaultEvents)if(g.allowPageScroll===fe)e.preventDefault();else{var n=g.allowPageScroll===ge;switch(t){case ue:(g.swipeLeft&&n||!n&&g.allowPageScroll!=Ee)&&e.preventDefault();break;case se:(g.swipeRight&&n||!n&&g.allowPageScroll!=Ee)&&e.preventDefault();break;case ce:(g.swipeUp&&n||!n&&g.allowPageScroll!=me)&&e.preventDefault();break;case pe:(g.swipeDown&&n||!n&&g.allowPageScroll!=me)&&e.preventDefault()}}}(e,F=A(h.last,h.end)),o=h.start,u=h.end,Q=Math.round(Math.sqrt(Math.pow(u.x-o.x,2)+Math.pow(u.y-o.y,2))),X=R(),a=Q,(l=C)!=fe&&(a=Math.max(a,P(l)),Z[l].distance=a),c=v(s,J),!g.triggerOnTouchEnd||g.triggerOnTouchLeave){var d=!0;if(g.triggerOnTouchLeave){var f={left:(r=(i=oe(i=this)).offset()).left,right:r.left+i.outerWidth(),top:r.top,bottom:r.top+i.outerHeight()};t=h.end,n=f,d=t.x>n.left&&t.x<n.right&&t.y>n.top&&t.y<n.bottom}!g.triggerOnTouchEnd&&d?J=w(Me):g.triggerOnTouchLeave&&!d&&(J=w(De)),J!=Pe&&J!=De||v(s,J)}}else v(s,J=Pe);!1===c&&v(s,J=Pe)}}function i(e){var t,n=e.originalEvent?e.originalEvent:e,i=n.touches;if(i){if(i.length&&!S())return t=n,ne=I(),ie=t.touches.length+1,!0;if(i.length&&S())return!0}return S()&&(K=ie),te=I(),X=R(),s()||!u()?v(n,J=Pe):g.triggerOnTouchEnd||!1===g.triggerOnTouchEnd&&J===Me?(!1!==g.preventDefaultEvents&&!1!==e.cancelable&&e.preventDefault(),v(n,J=De)):!g.triggerOnTouchEnd&&y()?o(n,J=De,Te):J===Me&&v(n,J=Pe),O(!1),null}function r(){V=Y=ee=te=K=0,W=1,x(),O(!1)}function l(e){var t=e.originalEvent?e.originalEvent:e;g.triggerOnTouchLeave&&v(t,J=w(De))}function a(){B.unbind(j,t),B.unbind(q,r),B.unbind(N,n),B.unbind(H,i),_&&B.unbind(_,l),O(!1)}function w(e){var t=e,n=c(),i=u(),r=s();return!n||r?t=Pe:!i||e!=Me||g.triggerOnTouchEnd&&!g.triggerOnTouchLeave?!i&&e==De&&g.triggerOnTouchLeave&&(t=Pe):t=De,t}function v(e,t){var n,i=e.touches;return(h()&&d()||d())&&(n=o(e,t,we)),(p()&&T()||T())&&!1!==n&&(n=o(e,t,ve)),m()&&E()&&!1!==n?n=o(e,t,be):X>g.longTapThreshold&&Q<Se&&g.longTap&&!1!==n?n=o(e,t,ye):1!==K&&Le||!(isNaN(Q)||Q<g.threshold)||!y()||!1===n||(n=o(e,t,Te)),t===Pe&&r(),t===De&&(i&&i.length||r()),n}function o(e,t,n){var i;if(n==we){if(B.trigger("swipeStatus",[t,C||null,Q||0,X||0,K,$,F]),g.swipeStatus&&!1===(i=g.swipeStatus.call(B,e,t,C||null,Q||0,X||0,K,$,F)))return!1;if(t==De&&h()){if(clearTimeout(le),clearTimeout(ae),B.trigger("swipe",[C,Q,X,K,$,F]),g.swipe&&!1===(i=g.swipe.call(B,e,C,Q,X,K,$,F)))return!1;switch(C){case ue:B.trigger("swipeLeft",[C,Q,X,K,$,F]),g.swipeLeft&&(i=g.swipeLeft.call(B,e,C,Q,X,K,$,F));break;case se:B.trigger("swipeRight",[C,Q,X,K,$,F]),g.swipeRight&&(i=g.swipeRight.call(B,e,C,Q,X,K,$,F));break;case ce:B.trigger("swipeUp",[C,Q,X,K,$,F]),g.swipeUp&&(i=g.swipeUp.call(B,e,C,Q,X,K,$,F));break;case pe:B.trigger("swipeDown",[C,Q,X,K,$,F]),g.swipeDown&&(i=g.swipeDown.call(B,e,C,Q,X,K,$,F))}}}if(n==ve){if(B.trigger("pinchStatus",[t,G||null,z||0,X||0,K,W,$]),g.pinchStatus&&!1===(i=g.pinchStatus.call(B,e,t,G||null,z||0,X||0,K,W,$)))return!1;if(t==De&&p())switch(G){case he:B.trigger("pinchIn",[G||null,z||0,X||0,K,W,$]),g.pinchIn&&(i=g.pinchIn.call(B,e,G||null,z||0,X||0,K,W,$));break;case de:B.trigger("pinchOut",[G||null,z||0,X||0,K,W,$]),g.pinchOut&&(i=g.pinchOut.call(B,e,G||null,z||0,X||0,K,W,$))}}return n==Te?t!==Pe&&t!==De||(clearTimeout(le),clearTimeout(ae),E()&&!m()?(re=I(),le=setTimeout(oe.proxy(function(){re=null,B.trigger("tap",[e.target]),g.tap&&(i=g.tap.call(B,e,e.target))},this),g.doubleTapThreshold)):(re=null,B.trigger("tap",[e.target]),g.tap&&(i=g.tap.call(B,e,e.target)))):n==be?t!==Pe&&t!==De||(clearTimeout(le),clearTimeout(ae),re=null,B.trigger("doubletap",[e.target]),g.doubleTap&&(i=g.doubleTap.call(B,e,e.target))):n==ye&&(t!==Pe&&t!==De||(clearTimeout(le),re=null,B.trigger("longtap",[e.target]),g.longTap&&(i=g.longTap.call(B,e,e.target)))),i}function u(){var e=!0;return null!==g.threshold&&(e=Q>=g.threshold),e}function s(){var e=!1;return null!==g.cancelThreshold&&null!==C&&(e=P(C)-Q>=g.cancelThreshold),e}function c(){return!(g.maxTimeThreshold&&X>=g.maxTimeThreshold)}function p(){var e=f(),t=b(),n=null===g.pinchThreshold||z>=g.pinchThreshold;return e&&t&&n}function T(){return g.pinchStatus||g.pinchIn||g.pinchOut}function h(){var e=c(),t=u(),n=f(),i=b();return!s()&&i&&n&&t&&e}function d(){return g.swipe||g.swipeStatus||g.swipeLeft||g.swipeRight||g.swipeUp||g.swipeDown}function f(){return K===g.fingers||g.fingers===xe||!Le}function b(){return 0!==$[0].end.x}function y(){return g.tap}function E(){return!!g.doubleTap}function m(){if(null==re)return!1;var e=I();return E()&&e-re<=g.doubleTapThreshold}function x(){ie=ne=0}function S(){var e=!1;ne&&I()-ne<=g.fingerReleaseThreshold&&(e=!0);return e}function O(e){B&&(!0===e?(B.bind(N,n),B.bind(H,i),_&&B.bind(_,l)):(B.unbind(N,n,!1),B.unbind(H,i,!1),_&&B.unbind(_,l,!1)),B.data(Ae+"_intouch",!0===e))}function M(e,t){var n={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return n.start.x=n.last.x=n.end.x=t.pageX||t.clientX,n.start.y=n.last.y=n.end.y=t.pageY||t.clientY,$[e]=n}function D(e){var t=void 0!==e.identifier?e.identifier:0,n=$[t]||null;return null===n&&(n=M(t,e)),n.last.x=n.end.x,n.last.y=n.end.y,n.end.x=e.pageX||e.clientX,n.end.y=e.pageY||e.clientY,n}function P(e){if(Z[e])return Z[e].distance}function L(e){return{direction:e,distance:0}}function R(){return te-ee}function k(e,t){var n=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y);return Math.round(Math.sqrt(n*n+i*i))}function A(e,t){if(i=t,(n=e).x==i.x&&n.y==i.y)return fe;var n,i,r,l,a,o,u,s,c=(l=t,a=(r=e).x-l.x,o=l.y-r.y,u=Math.atan2(o,a),(s=Math.round(180*u/Math.PI))<0&&(s=360-Math.abs(s)),s);return c<=45&&0<=c||c<=360&&315<=c?ue:135<=c&&c<=225?se:45<c&&c<135?pe:ce}function I(){return(new Date).getTime()}g=oe.extend({},g);var U=Le||ke||!g.fallbackToMouseEvents,j=U?ke?Re?"MSPointerDown":"pointerdown":"touchstart":"mousedown",N=U?ke?Re?"MSPointerMove":"pointermove":"touchmove":"mousemove",H=U?ke?Re?"MSPointerUp":"pointerup":"touchend":"mouseup",_=U?ke?"mouseleave":null:"mouseleave",q=ke?Re?"MSPointerCancel":"pointercancel":"touchcancel",Q=0,C=null,F=null,X=0,Y=0,V=0,W=1,z=0,G=0,Z=null,B=oe(e),J="start",K=0,$={},ee=0,te=0,ne=0,ie=0,re=0,le=null,ae=null;try{B.bind(j,t),B.bind(q,r)}catch(e){oe.error("events not supported "+j+","+q+" on jQuery.swipe")}this.enable=function(){return this.disable(),B.bind(j,t),B.bind(q,r),B},this.disable=function(){return a(),B},this.destroy=function(){a(),B.data(Ae,null),B=null},this.option=function(e,t){if("object"==typeof e)g=oe.extend(g,e);else if(void 0!==g[e]){if(void 0===t)return g[e];g[e]=t}else{if(!e)return g;oe.error("Option "+e+" does not exist on jQuery.swipe.options")}return null}}var ue="left",se="right",ce="up",pe="down",he="in",de="out",fe="none",ge="auto",we="swipe",ve="pinch",Te="tap",be="doubletap",ye="longtap",Ee="horizontal",me="vertical",xe="all",Se=10,Oe="start",Me="move",De="end",Pe="cancel",Le="ontouchstart"in window,Re=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!Le,ke=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!Le,Ae="TouchSwipe";oe.fn.swipe=function(e){var t=oe(this),n=t.data(Ae);if(n&&"string"==typeof e){if(n[e])return n[e].apply(n,Array.prototype.slice.call(arguments,1));oe.error("Method "+e+" does not exist on jQuery.swipe")}else if(n&&"object"==typeof e)n.option.apply(n,arguments);else if(!(n||"object"!=typeof e&&e))return function(n){return!n||void 0!==n.allowPageScroll||void 0===n.swipe&&void 0===n.swipeStatus||(n.allowPageScroll=fe),void 0!==n.click&&void 0===n.tap&&(n.tap=n.click),n=n||{},n=oe.extend({},oe.fn.swipe.defaults,n),this.each(function(){var e=oe(this),t=e.data(Ae);t||(t=new i(this,n),e.data(Ae,t))})}.apply(this,arguments);return t},oe.fn.swipe.version="1.6.18",oe.fn.swipe.defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0},oe.fn.swipe.phases={PHASE_START:Oe,PHASE_MOVE:Me,PHASE_END:De,PHASE_CANCEL:Pe},oe.fn.swipe.directions={LEFT:ue,RIGHT:se,UP:ce,DOWN:pe,IN:he,OUT:de},oe.fn.swipe.pageScroll={NONE:fe,HORIZONTAL:Ee,VERTICAL:me,AUTO:ge},oe.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:xe}});