"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[145],{551:function(e,t,n){n.d(t,{Bt:function(){return p},Tg:function(){return o},d7:function(){return i},w7:function(){return f},wL:function(){return l}});var r=n(861),a=n(757),u=n.n(a),c=n(294),s="67c2a2291602c4c61ba941c82985f2dc";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},494:function(e,t,n){n(791);var r=n(87),a=n(689),u=n(184);t.Z=function(e){var t=e.films,n=(0,a.TH)();return(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"/movies/".concat(e.id),state:{from:n},children:e.title})},e.id)}))})}},145:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),a=n(791),u=n(184),c=function(e){var t=e.searchMovies,n=e.query,r=e.setQuery;return(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(n.toLowerCase())},children:[(0,u.jsx)("input",{type:"text",name:"query",autoFocus:!0,value:n,onChange:function(e){e.preventDefault();var t=e.target.value;r(t)}}),(0,u.jsx)("button",{children:"Search"})]})},s=n(551),o=n(494),i=n(393),f=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],f=t[1],l=(0,a.useState)([]),p=(0,r.Z)(l,2),v=p[0],h=p[1],d=(0,a.useState)(!1),g=(0,r.Z)(d,2),m=g[0],x=g[1];return(0,a.useEffect)((function(){var e=localStorage.getItem("searchQuery"),t=localStorage.getItem("searchResults");e&&f(e),t&&h(JSON.parse(t))}),[]),(0,u.jsxs)("section",{children:[(0,u.jsx)("h1",{children:"Search for a movie!"}),(0,u.jsx)(c,{searchMovies:function(e){x(!0),(0,s.d7)(e).then((function(t){h(t),localStorage.setItem("searchQuery",e),localStorage.setItem("searchResults",JSON.stringify(t))})).catch((function(e){console.log(e)})).finally((function(){x(!1)}))},query:n,setQuery:f}),m&&(0,u.jsx)(i.Z,{}),v.length>0?(0,u.jsx)(o.Z,{films:v}):(0,u.jsx)("p",{children:"Sorry, no movies found. "})]})}}}]);
//# sourceMappingURL=145.9e474c7b.chunk.js.map