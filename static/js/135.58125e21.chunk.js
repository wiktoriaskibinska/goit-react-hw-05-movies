"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{551:function(e,t,n){n.d(t,{Bt:function(){return d},Tg:function(){return u},d7:function(){return o},w7:function(){return l},wL:function(){return p}});var r=n(861),a=n(757),i=n.n(a),c=n(294),s="67c2a2291602c4c61ba941c82985f2dc";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},135:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(439),a=n(791),i=n(689),c=n(87),s=n(551),u=n(393),o="MovieDetails_movieSection__uGkG9",l="MovieDetails_movieMain__94an8",p="MovieDetails_bttnLink__pO51M",d="MovieDetails_goBackBttn__5P7-u",f="MovieDetails_infoLinks__XI3WP",h=n(184),v=function(){var e,t,n=(0,i.UO)().movieId,v=(0,a.useState)({}),m=(0,r.Z)(v,2),x=m[0],_=m[1],g=(0,a.useState)(!1),w=(0,r.Z)(g,2),j=w[0],k=w[1],b=null!==(e=null===(t=(0,i.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";(0,a.useEffect)((function(){k(!0);(0,s.w7)(n).then((function(e){_(e)})).catch((function(e){console.log(e)})).finally((function(){k(!1)}))}),[n]);var y=x||{},Z=y.title,U=y.release_date,M=y.popularity,S=y.overview,N=y.genres,D=void 0===N?[]:N,G=y.poster_path,L=y.original_title;return(0,h.jsxs)("section",{className:o,children:[(0,h.jsx)(c.rU,{to:b,className:p,children:(0,h.jsx)("button",{className:d,children:"Go back"})}),j&&(0,h.jsx)(u.Z,{}),(0,h.jsxs)("section",{className:l,children:[(0,h.jsx)("img",{width:"300px",src:G?"https://image.tmdb.org/t/p/w500".concat(G):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:L}),(0,h.jsxs)("section",{children:[(0,h.jsxs)("h1",{children:[Z," (",U,")"]}),(0,h.jsxs)("p",{children:["User score: ",M]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:S}),(0,h.jsx)("h2",{children:"Genres"}),(0,h.jsx)("ul",{children:D.map((function(e){return(0,h.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,h.jsxs)("section",{children:[(0,h.jsx)("h3",{children:"Additional info"}),(0,h.jsxs)("ul",{className:f,children:[(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,h.jsx)(i.j3,{})]})}}}]);
//# sourceMappingURL=135.58125e21.chunk.js.map