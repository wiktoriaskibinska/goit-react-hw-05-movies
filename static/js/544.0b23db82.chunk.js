"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{551:function(n,t,e){e.d(t,{Bt:function(){return l},Tg:function(){return s},d7:function(){return o},w7:function(){return f},wL:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(294),i="67c2a2291602c4c61ba941c82985f2dc";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},494:function(n,t,e){e(791);var r=e(87),a=e(689),c=e(184);t.Z=function(n){var t=n.films,e=(0,a.TH)();return(0,c.jsx)("ul",{children:t.map((function(n){return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},544:function(n,t,e){e.r(t);var r=e(439),a=e(791),c=e(551),u=e(494),i=e(393),s=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],o=t[1],f=(0,a.useState)(!1),p=(0,r.Z)(f,2),l=p[0],d=p[1];return(0,a.useEffect)((function(){d(!0);(0,c.Tg)().then((function(n){o(n)})).catch((function(n){console.log(n)})).finally((function(){d(!1)}))}),[]),(0,s.jsxs)("section",{children:[(0,s.jsx)("h1",{children:"Trending List"}),(0,s.jsx)(u.Z,{films:e}),l&&(0,s.jsx)(i.Z,{})]})}}}]);
//# sourceMappingURL=544.0b23db82.chunk.js.map