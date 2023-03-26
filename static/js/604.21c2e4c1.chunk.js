"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[604],{806:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(87),a=r(689),c="MoviesList_list__0Owr9",i="MoviesList_item__eePYv",s=r(184),u=function(e){var t=e.movies,r=(0,a.TH)();return(0,s.jsx)("ul",{className:c,children:t.map((function(e){var t=e.id,a=e.title;return(0,s.jsx)("li",{className:i,children:(0,s.jsx)(n.OL,{to:"/movies/".concat(t),state:{from:r},children:a})},t)}))})}},604:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n=r(433),a=r(861),c=r(439),i=r(757),s=r.n(i),u=r(955),o=r(791),p="SearchForm_searchFormContainer__eByRx",l="SearchForm_searchForm__NsJpF",f="SearchForm_searchFormInput__3mF-P",v="SearchForm_searchBtn__rp2a7",h=r(184),m=function(e){var t=e.onSubmit,r=e.query,n=(0,o.useState)(r),a=(0,c.Z)(n,2),i=a[0],s=a[1],u=function(){s("")};return(0,h.jsx)("div",{className:p,children:(0,h.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(),t(i),u()},children:[(0,h.jsx)("input",{className:f,type:"text",value:i,onChange:function(e){var t=e.target.value;s(t)},autoComplete:"off",placeholder:"Search movie"}),(0,h.jsx)("button",{className:v,type:"submit",children:"Search"})]})})},d=r(806),_=r(87),g=function(){var e,t=(0,o.useState)([]),r=(0,c.Z)(t,2),i=r[0],p=r[1],l=(0,_.lr)(),f=(0,c.Z)(l,2),v=f[0],g=f[1],x=null!==(e=v.get("query"))&&void 0!==e?e:"",y=(0,o.useState)(x),w=(0,c.Z)(y,2),Z=w[0],b=w[1];(0,o.useEffect)((function(){function e(){return(e=(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.searchMovies(Z);case 3:if((t=e.sent).length){e.next=6;break}return e.abrupt("return");case 6:p((0,n.Z)(t)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message);case 12:return e.prev=12,e.finish(12);case 14:case"end":return e.stop()}}),e,null,[[0,9,12,14]])})))).apply(this,arguments)}""!==Z&&function(){e.apply(this,arguments)}()}),[Z]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(m,{query:Z,onSubmit:function(e){b(e),g(""!==e?{query:e}:{})}}),i.length>0&&(0,h.jsx)(d.Z,{movies:i})]})}},955:function(e,t,r){var n=r(861),a=r(757),c=r.n(a),i=r(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="17d8222ac7770cbf237f3abe7092e221";function u(){return u=(0,n.Z)(c().mark((function e(){var t,r,n,a,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:1,r="trending/movie/day?api_key=".concat(s,"&page=").concat(t),e.next=4,i.Z.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a.results.map((function(e){return{title:e.title,id:e.id}})));case 7:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function o(){return(o=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="search/movie?api_key=".concat(s,"&language=en-US&query==").concat(t),e.next=3,i.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a.results.map((function(e){return{title:e.title,id:e.id}})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r,n,a,u,o,p,l,f,v;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"?api_key=").concat(s),e.next=3,i.Z.get(r);case 3:return n=e.sent,a=n.data,u=a.poster_path,o=a.original_title,p=a.vote_average,l=a.overview,f=a.genres,v=a.release_date,e.abrupt("return",{poster_path:u,original_title:o,vote_average:p,overview:l,genres:f,release_date:v});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/credits?api_key=").concat(s),e.next=3,i.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a.cast.map((function(e){return{profile_path:e.profile_path,name:e.name,character:e.character}})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/reviews?api_key=").concat(s),e.next=3,i.Z.get(r);case 3:return n=e.sent,a=n.data,e.abrupt("return",a.results.map((function(e){return{author:e.author,content:e.content,id:e.id}})));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v={getTrendMovies:function(){return u.apply(this,arguments)},searchMovies:function(e){return o.apply(this,arguments)},getMovieDetails:function(e){return p.apply(this,arguments)},getMovieCredits:function(e){return l.apply(this,arguments)},getMovieReviews:function(e){return f.apply(this,arguments)}};t.Z=v}}]);
//# sourceMappingURL=604.21c2e4c1.chunk.js.map