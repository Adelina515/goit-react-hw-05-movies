"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(439),a=n(546),c=n(791),s=n(689),i=n(87),u=n(137),o="Details_detBtn__iEAmf",l="Details_detContainer__DIWFU",p="Details_detWrapper__tDQKh",d="Details_detImg__cL-4L",f="Details_detWrapperInfo__ZQFFi",h="Details_detWrapperList__lthYD",v=n(184),m=function(){var e,t,n=(0,s.UO)().movieId,m=(0,c.useState)(!1),x=(0,r.Z)(m,2),_=x[0],g=x[1],j=(0,c.useState)(null),w=(0,r.Z)(j,2),k=w[0],Z=w[1],b=(0,s.TH)();if((0,c.useEffect)((function(){g(!0),(0,u.l2)(n).then((function(e){Z(e)})).catch((function(e){console.log(e)})).finally((function(){g(!1)}))}),[n]),k){var y=k.original_title,U=k.release_date,D=k.popularity,S=k.overview,C=k.poster_path,I=k.genres,N=null!==(e=null===b||void 0===b||null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",F=I.map((function(e){return e.name})).join(", ");return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)(i.rU,{className:o,to:N,children:"Go back"}),_&&(0,v.jsx)(a.Z,{}),k&&(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:p,children:[(0,v.jsx)("img",{className:d,width:"300px",alt:"name",src:C?"https://image.tmdb.org/t/p/w500".concat(C):"https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"}),(0,v.jsxs)("div",{className:f,children:[(0,v.jsxs)("h1",{children:[y," (",U,")"]}),(0,v.jsxs)("p",{children:["User score: ",D]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:S}),(0,v.jsx)("h2",{children:"Genres"}),(0,v.jsx)("p",{children:F})]})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)("ul",{className:h,children:[(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"/movies/".concat(n,"/cast"),children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"/movies/".concat(n,"/reviews"),children:"Reviews"})})]}),(0,v.jsx)(c.Suspense,{fallback:(0,v.jsx)(a.Z,{}),children:(0,v.jsx)(s.j3,{})})]})]})]})})}}},137:function(e,t,n){n.d(t,{bI:function(){return l},fU:function(){return d},l2:function(){return p},sv:function(){return f},vw:function(){return o}});var r=n(861),a=n(757),c=n.n(a),s=n(243),i="https://api.themoviedb.org/3/",u="898d34a3bae694ae66d81df7ebc9a78d",o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"trending/movie/day?api_key=").concat(u));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"search/movie?api_key=").concat(u,"&include_adult=false&language=en-US&page=1&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.9c4646b1.chunk.js.map