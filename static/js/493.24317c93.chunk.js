"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[493],{546:function(e,a,n){n(791);var t=n(689),r=n(87),s=n(184);a.Z=function(e){var a=e.movies,n=(0,t.TH)();return(0,s.jsx)("div",{className:"column-container",children:(0,s.jsx)("ul",{children:a.map((function(e){return(0,s.jsx)(r.OL,{to:"/movies/".concat(e.id),state:{from:n},children:(0,s.jsx)("li",{className:"item-container",children:e.original_title})},e.id)}))})})}},493:function(e,a,n){n.r(a);var t=n(861),r=n(439),s=n(757),i=n.n(s),c=n(791),u=n(128),o=n(546),p=n(48),l=n.n(p),m=n(184);a.default=function(){var e=(0,c.useState)([]),a=(0,r.Z)(e,2),n=a[0],s=a[1],p=(0,c.useState)(1),f=(0,r.Z)(p,2),v=f[0],g=f[1],d=(0,c.useState)(0),h=(0,r.Z)(d,2),k=h[0],x=h[1];(0,c.useEffect)((function(){var e=function(){var e=(0,t.Z)(i().mark((function e(){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.VE)(v);case 3:a=e.sent,s(a.results),x(a.total_pages),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e(v)}),[v]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("main",{children:(0,m.jsx)(o.Z,{movies:n})}),(0,m.jsx)(l(),{nextLabel:"next >",onPageChange:function(e){var a=e.selected+1;g(a)},pageRangeDisplayed:3,marginPagesDisplayed:2,pageCount:k,previousLabel:"< previous",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",breakLabel:"...",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination",activeClassName:"active",renderOnZeroPageCount:null})]})}},128:function(e,a,n){n.d(a,{VE:function(){return c},q:function(){return u}});var t=n(861),r=n(757),s=n.n(r),i=n(243),c=function(){var e=(0,t.Z)(s().mark((function e(a){var n,t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={api_key:"17d8222ac7770cbf237f3abe7092e221"},t=i.Z.get("https://api.themoviedb.org/3/trending/movie/week?page=".concat(a),{params:n}),r=t.data,e.abrupt("return",r);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(s().mark((function e(a,n){var t,r,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={api_key:"17d8222ac7770cbf237f3abe7092e221",query:a},e.next=3,i.Z.get("https://api.themoviedb.org/3/search/movie?page=".concat(n),{params:t});case 3:return r=e.sent,c=r.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(a,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=493.24317c93.chunk.js.map