"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[622],{546:function(t,e,n){n(791);var r=n(689),a=n(87),i=n(184);e.Z=function(t){var e=t.movies,n=(0,r.TH)();return(0,i.jsx)("div",{className:"column-container",children:(0,i.jsx)("ul",{children:e.map((function(t){return(0,i.jsx)(a.OL,{to:"/movies/".concat(t.id),state:{from:n},children:(0,i.jsx)("li",{className:"item-container",children:t.original_title})},t.id)}))})})}},622:function(t,e,n){n.r(e),n.d(e,{default:function(){return Tt}});var r=n(861),a=n(439),i=n(757),o=n.n(i),s=n(791),c=n(128),u=n(546);function l(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var f=n(433);function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={data:""},g=function(t){return"object"==typeof window?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||v},h=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,b=/\/\*[^]*?\*\/|  +/g,y=/\n+/g,x=function t(e,n){var r="",a="",i="",o=function(o){var c=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+c+";":a+="f"==o[1]?t(c,o):o+"{"+t(c,"k"==o[1]?"":n)+"}":"object"==typeof c?a+=t(c,n?n.replace(/([^,])+/g,(function(t){return o.replace(/(^:.*)|([^,])+/g,(function(e){return/&/.test(e)?e.replace(/&/g,t):t?t+" "+e:e}))})):o):null!=c&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=t.p?t.p(o,c):o+":"+c+";"),s=o};for(var s in e)o(s);return r+(n&&i?n+"{"+i+"}":i)+a},w={},j=function t(e){if("object"==typeof e){var n="";for(var r in e)n+=r+t(e[r]);return n}return e},k=function(t,e,n,r,a){var i=j(t),o=w[i]||(w[i]=function(t){for(var e=0,n=11;e<t.length;)n=101*n+t.charCodeAt(e++)>>>0;return"go"+n}(i));if(!w[o]){var s=i!==t?t:function(t){for(var e,n,r=[{}];e=h.exec(t.replace(b,""));)e[4]?r.shift():e[3]?(n=e[3].replace(y," ").trim(),r.unshift(r[0][n]=r[0][n]||{})):r[0][e[1]]=e[2].replace(y," ").trim();return r[0]}(t);w[o]=x(a?d({},"@keyframes "+o,s):s,n?"":"."+o)}var c=n&&w.g?w.g:null;return n&&(w.g=w[o]),function(t,e,n,r){r?e.data=e.data.replace(r,t):-1===e.data.indexOf(t)&&(e.data=n?t+e.data:e.data+t)}(w[o],e,r,c),o},O=function(t,e,n){return t.reduce((function(t,r,a){var i=e[a];if(i&&i.call){var o=i(n),s=o&&o.props&&o.props.className||/^go/.test(o)&&o;i=s?"."+s:o&&"object"==typeof o?o.props?"":x(o,""):!1===o?"":o}return t+r+(null==i?"":i)}),"")};function C(t){var e=this||{},n=t.call?t(e.p):t;return k(n.unshift?n.raw?O(n,[].slice.call(arguments,1),e.p):n.reduce((function(t,n){return Object.assign(t,n&&n.call?n(e.p):n)}),{}):n,g(e.target),e.g,e.o,e.k)}C.bind({g:1});var E,N,P,Z,D,_,S,z,L,A,T,I,F,H,M,q,R,U,B,V=C.bind({k:1});function Y(t,e){var n=this||{};return function(){var r=arguments;function a(i,o){var s=Object.assign({},i),c=s.className||a.className;n.p=Object.assign({theme:N&&N()},s),n.o=/ *go\d+/.test(c),s.className=C.apply(n,r)+(c?" "+c:""),e&&(s.ref=o);var u=t;return t[0]&&(u=s.as||t,delete s.as),P&&u[0]&&P(s),E(u,s)}return e?e(a):a}}var $=function(t,e){return function(t){return"function"==typeof t}(t)?t(e):t},G=function(){var t=0;return function(){return(++t).toString()}}(),J=function(){var t;return function(){if(void 0===t&&typeof window<"u"){var e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}}(),K=new Map,Q=function(t){if(!K.has(t)){var e=setTimeout((function(){K.delete(t),et({type:4,toastId:t})}),1e3);K.set(t,e)}},W=function t(e,n){switch(n.type){case 0:return m(m({},e),{},{toasts:[n.toast].concat((0,f.Z)(e.toasts)).slice(0,20)});case 1:return n.toast.id&&function(t){var e=K.get(t);e&&clearTimeout(e)}(n.toast.id),m(m({},e),{},{toasts:e.toasts.map((function(t){return t.id===n.toast.id?m(m({},t),n.toast):t}))});case 2:var r=n.toast;return e.toasts.find((function(t){return t.id===r.id}))?t(e,{type:1,toast:r}):t(e,{type:0,toast:r});case 3:var a=n.toastId;return a?Q(a):e.toasts.forEach((function(t){Q(t.id)})),m(m({},e),{},{toasts:e.toasts.map((function(t){return t.id===a||void 0===a?m(m({},t),{},{visible:!1}):t}))});case 4:return void 0===n.toastId?m(m({},e),{},{toasts:[]}):m(m({},e),{},{toasts:e.toasts.filter((function(t){return t.id!==n.toastId}))});case 5:return m(m({},e),{},{pausedAt:n.time});case 6:var i=n.time-(e.pausedAt||0);return m(m({},e),{},{pausedAt:void 0,toasts:e.toasts.map((function(t){return m(m({},t),{},{pauseDuration:t.pauseDuration+i})}))})}},X=[],tt={toasts:[],pausedAt:void 0},et=function(t){tt=W(tt,t),X.forEach((function(t){t(tt)}))},nt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},rt=function(t){return function(e,n){var r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"blank",n=arguments.length>2?arguments[2]:void 0;return m(m({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0},n),{},{id:(null==n?void 0:n.id)||G()})}(e,t,n);return et({type:2,toast:r}),r.id}},at=function(t,e){return rt("blank")(t,e)};at.error=rt("error"),at.success=rt("success"),at.loading=rt("loading"),at.custom=rt("custom"),at.dismiss=function(t){et({type:3,toastId:t})},at.remove=function(t){return et({type:4,toastId:t})},at.promise=function(t,e,n){var r=at.loading(e.loading,m(m({},n),null==n?void 0:n.loading));return t.then((function(t){return at.success($(e.success,t),m(m({id:r},n),null==n?void 0:n.success)),t})).catch((function(t){at.error($(e.error,t),m(m({id:r},n),null==n?void 0:n.error))})),t};var it=function(t,e){et({type:1,toast:{id:t,height:e}})},ot=function(){et({type:5,time:Date.now()})},st=function(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,s.useState)(tt),n=(0,a.Z)(e,2),r=n[0],i=n[1];(0,s.useEffect)((function(){return X.push(i),function(){var t=X.indexOf(i);t>-1&&X.splice(t,1)}}),[r]);var o=r.toasts.map((function(e){var n,r;return m(m(m(m({},t),t[e.type]),e),{},{duration:e.duration||(null==(n=t[e.type])?void 0:n.duration)||(null==t?void 0:t.duration)||nt[e.type],style:m(m(m({},t.style),null==(r=t[e.type])?void 0:r.style),e.style)})}));return m(m({},r),{},{toasts:o})}(t),n=e.toasts,r=e.pausedAt;(0,s.useEffect)((function(){if(!r){var t=Date.now(),e=n.map((function(e){if(e.duration!==1/0){var n=(e.duration||0)+e.pauseDuration-(t-e.createdAt);if(!(n<0))return setTimeout((function(){return at.dismiss(e.id)}),n);e.visible&&at.dismiss(e.id)}}));return function(){e.forEach((function(t){return t&&clearTimeout(t)}))}}}),[n,r]);var i=(0,s.useCallback)((function(){r&&et({type:6,time:Date.now()})}),[r]),o=(0,s.useCallback)((function(t,e){var r,a=e||{},i=a.reverseOrder,o=void 0!==i&&i,s=a.gutter,c=void 0===s?8:s,u=a.defaultPosition,l=n.filter((function(e){return(e.position||u)===(t.position||u)&&e.height})),d=l.findIndex((function(e){return e.id===t.id})),p=l.filter((function(t,e){return e<d&&t.visible})).length;return(r=l.filter((function(t){return t.visible}))).slice.apply(r,(0,f.Z)(o?[p+1]:[0,p])).reduce((function(t,e){return t+(e.height||0)+c}),0)}),[n]);return{toasts:n,handlers:{updateHeight:it,startPause:ot,endPause:i,calculateOffset:o}}},ct=V(Z||(Z=l(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]))),ut=V(D||(D=l(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),lt=V(_||(_=l(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]))),ft=Y("div")(S||(S=l(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"])),(function(t){return t.primary||"#ff4b4b"}),ct,ut,(function(t){return t.secondary||"#fff"}),lt),dt=V(z||(z=l(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),pt=Y("div")(L||(L=l(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"])),(function(t){return t.secondary||"#e0e0e0"}),(function(t){return t.primary||"#616161"}),dt),mt=V(A||(A=l(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]))),vt=V(T||(T=l(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]))),gt=Y("div")(I||(I=l(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"])),(function(t){return t.primary||"#61d345"}),mt,vt,(function(t){return t.secondary||"#fff"})),ht=Y("div")(F||(F=l(["\n  position: absolute;\n"]))),bt=Y("div")(H||(H=l(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]))),yt=V(M||(M=l(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]))),xt=Y("div")(q||(q=l(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"])),yt),wt=function(t){var e=t.toast,n=e.icon,r=e.type,a=e.iconTheme;return void 0!==n?"string"==typeof n?s.createElement(xt,null,n):n:"blank"===r?null:s.createElement(bt,null,s.createElement(pt,m({},a)),"loading"!==r&&s.createElement(ht,null,"error"===r?s.createElement(ft,m({},a)):s.createElement(gt,m({},a))))},jt=function(t){return"\n0% {transform: translate3d(0,".concat(-200*t,"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n")},kt=function(t){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,".concat(-150*t,"%,-1px) scale(.6); opacity:0;}\n")},Ot=Y("div")(R||(R=l(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]))),Ct=Y("div")(U||(U=l(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]))),Et=s.memo((function(t){var e=t.toast,n=t.position,r=t.style,i=t.children,o=e.height?function(t,e){var n=t.includes("top")?1:-1,r=J()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[jt(n),kt(n)],i=(0,a.Z)(r,2),o=i[0],s=i[1];return{animation:e?"".concat(V(o)," 0.35s cubic-bezier(.21,1.02,.73,1) forwards"):"".concat(V(s)," 0.4s forwards cubic-bezier(.06,.71,.55,1)")}}(e.position||n||"top-center",e.visible):{opacity:0},c=s.createElement(wt,{toast:e}),u=s.createElement(Ct,m({},e.ariaProps),$(e.message,e));return s.createElement(Ot,{className:e.className,style:m(m(m({},o),r),e.style)},"function"==typeof i?i({icon:c,message:u}):s.createElement(s.Fragment,null,c,u))}));!function(t,e,n,r){x.p=e,E=t,N=n,P=r}(s.createElement);var Nt=function(t){var e=t.id,n=t.className,r=t.style,a=t.onHeightUpdate,i=t.children,o=s.useCallback((function(t){if(t){var n=function(){var n=t.getBoundingClientRect().height;a(e,n)};n(),new MutationObserver(n).observe(t,{subtree:!0,childList:!0,characterData:!0})}}),[e,a]);return s.createElement("div",{ref:o,className:n,style:r},i)},Pt=C(B||(B=l(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]))),Zt=function(t){var e=t.reverseOrder,n=t.position,r=void 0===n?"top-center":n,a=t.toastOptions,i=t.gutter,o=t.children,c=t.containerStyle,u=t.containerClassName,l=st(a),f=l.toasts,d=l.handlers;return s.createElement("div",{style:m({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},c),className:u,onMouseEnter:d.startPause,onMouseLeave:d.endPause},f.map((function(t){var n=t.position||r,a=function(t,e){var n=t.includes("top"),r=n?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return m(m({left:0,right:0,display:"flex",position:"absolute",transition:J()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY(".concat(e*(n?1:-1),"px)")},r),a)}(n,d.calculateOffset(t,{reverseOrder:e,gutter:i,defaultPosition:r}));return s.createElement(Nt,{id:t.id,key:t.id,onHeightUpdate:d.updateHeight,className:t.visible?Pt:"",style:a},"custom"===t.type?$(t.message,t):o?o(t):s.createElement(Et,{toast:t,position:n}))})))},Dt=at,_t=n(48),St=n.n(_t),zt=n(184),Lt=function(t){var e=t.onSubmit,n=(0,s.useState)(""),r=(0,a.Z)(n,2),i=r[0],o=r[1];return(0,zt.jsx)("div",{children:(0,zt.jsx)("div",{children:(0,zt.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.target.elements.input.value.trim();""!==n?e(n):Dt.error("The input is empty!")},children:[(0,zt.jsx)("label",{children:(0,zt.jsx)("input",{type:"text",placeholder:"Enter a movie",name:"input",value:i,onChange:function(t){o(t.target.value.trim())}})}),(0,zt.jsx)("button",{type:"submit",children:"Submit"})]})})})},At=n(87),Tt=function(){var t,e=(0,s.useState)([]),n=(0,a.Z)(e,2),i=n[0],l=n[1],f=(0,s.useState)(1),d=(0,a.Z)(f,2),p=d[0],m=d[1],v=(0,s.useState)(0),g=(0,a.Z)(v,2),h=g[0],b=g[1],y=(0,s.useRef)(""),x=(0,At.lr)(),w=(0,a.Z)(x,2),j=w[0],k=w[1],O=null!==(t=j.get("name"))&&void 0!==t?t:"";(0,s.useEffect)((function(){if(""!==O){var t=function(){var t=(0,r.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.q)(O,p);case 2:if(0!==(e=t.sent).results.length){t.next=6;break}return y.current.textContent="There are no movies found",t.abrupt("return");case 6:l(e.results),b(e.total_pages);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t(O)}}),[O,p]);return(0,zt.jsxs)(zt.Fragment,{children:[(0,zt.jsx)(Zt,{}),(0,zt.jsx)(Lt,{onSubmit:function(t){k({name:t})}}),0===i.length?(0,zt.jsx)("div",{className:"refDiv",ref:y}):null,(0,zt.jsx)("main",{children:0!==i.length?(0,zt.jsx)(u.Z,{movies:i}):null}),0!==i.length?(0,zt.jsx)(St(),{nextLabel:"next >",onPageChange:function(t){var e=t.selected+1;m(e)},pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:h,previousLabel:"< previous",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",renderOnZeroPageCount:null}):null]})}},128:function(t,e,n){n.d(e,{VE:function(){return s},q:function(){return c}});var r=n(861),a=n(757),i=n.n(a),o=n(243),s=function(){var t=(0,r.Z)(i().mark((function t(e){var n,r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={api_key:"17d8222ac7770cbf237f3abe7092e221"},r=o.Z.get("https://api.themoviedb.org/3/trending/movie/week?page=".concat(e),{params:n}),a=r.data,t.abrupt("return",a);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=function(){var t=(0,r.Z)(i().mark((function t(e,n){var r,a,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={api_key:"17d8222ac7770cbf237f3abe7092e221",query:e},t.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?page=".concat(n),{params:r});case 3:return a=t.sent,s=a.data,t.abrupt("return",s);case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=622.397060ca.chunk.js.map