"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[541],{541:function(t,n,e){e.r(n);var r=e(439),a=e(546),c=e(791),u=e(689),o=e(137),s=e(184);n.default=function(){var t=(0,c.useState)([]),n=(0,r.Z)(t,2),e=n[0],i=n[1],p=(0,u.UO)().movieId,f=(0,c.useState)(!1),l=(0,r.Z)(f,2),d=l[0],h=l[1];return(0,c.useEffect)((function(){h(!0),(0,o.fU)(p).then((function(t){var n=t.cast;return i(n)})).catch((function(t){return console.log(t)})).finally(h(!1))}),[p]),console.log(e),(0,s.jsxs)("div",{children:[d&&(0,s.jsx)(a.Z,{}),0===e.length&&(0,s.jsx)("p",{children:"Sorry cast list not found"})," ",(0,s.jsxs)("ul",{children:[" ",e.length>0&&e.map((function(t){return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{width:" 200px",alt:t.name,src:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):"https://cdn2.vectorstock.com/i/1000x1000/95/06/no-people-sign-vector-9019506.jpg"}),(0,s.jsxs)("p",{children:[" name: ",t.name]}),(0,s.jsxs)("p",{children:["character: ",t.character]})]},t.id)}))," "]})]})}},137:function(t,n,e){e.d(n,{bI:function(){return p},fU:function(){return l},l2:function(){return f},sv:function(){return d},vw:function(){return i}});var r=e(861),a=e(757),c=e.n(a),u=e(243),o="https://api.themoviedb.org/3/",s="898d34a3bae694ae66d81df7ebc9a78d",i=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(s,"&include_adult=false&language=en-US&page=1&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=541.991a9e5b.chunk.js.map