"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{242:function(e,t,r){var n=r(861),a=r(757),s=r.n(a),c=r(243),o="https://api.themoviedb.org/3",u="6f157e49e729f31d4a7c0245fe6212a7",i=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/trending/movie/day"),{params:{api_key:u}});case 3:return t=e.sent,e.next=6,t.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/search/movie"),{params:{api_key:u,query:t}});case 3:return r=e.sent,e.next=6,r.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t),{params:{api_key:u}});case 3:return r=e.sent,e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"/credits"),{params:{api_key:u}});case 3:return r=e.sent,e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(o,"/movie/").concat(t,"/reviews"),{params:{api_key:u}});case 3:return r=e.sent,e.next=6,r.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),h={getTrendingMovies:i,getMovieByQuery:p,getMovieDetails:l,getMovieCredits:f,getMovieReviews:v};t.Z=h},76:function(e,t,r){r.r(t),r.d(t,{Cast:function(){return k},default:function(){return w}});var n=r(861),a=r(439),s=r(757),c=r.n(s),o=r(791),u="Cast_castList__ARoWn",i="Cast_castItem__-Jcfe",p="Cast_castImg__T4WbF",l="Cast_noPhoto__XJsaI",f="Cast_castName__-i08u",v="Cast_castCharacter__Rliw1",h="Cast_noCast__SInMN",d=r(242),m=r(639),_=r(689),x=r(184),k=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],k=(0,o.useState)(!1),w=(0,a.Z)(k,2),g=w[0],b=w[1],Z=(0,_.UO)().id;return(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.prev=1,e.next=4,d.Z.getMovieCredits(Z);case 4:t=e.sent,s(t.cast),b(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("B\u0142\u0105d podczas pobierania film\xf3w:",e.t0),b(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[s,b,Z]),(0,x.jsxs)(x.Fragment,{children:[r.length>0&&(0,x.jsx)("ul",{className:u,children:r.map((function(e){var t=e.id,r=e.profile_path,n=e.name,a=e.character;return(0,x.jsxs)("li",{className:i,children:[r?(0,x.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(r),alt:"".concat(n||"Actor"),className:p}):(0,x.jsx)("p",{className:l,children:"No photo"}),(0,x.jsx)("p",{className:f,children:n||"Unknown"}),(0,x.jsxs)("p",{className:v,children:["Character: ",a||"Unknown"]})]},t)}))}),!r.length&&!b&&(0,x.jsx)("p",{className:h,children:"There is no cast for this movie"}),(0,x.jsx)(m.Z,{setLoading:g})]})},w=k},639:function(e,t,r){r.d(t,{Z:function(){return c}});r(791);var n=r(402),a="Loader_position__3ws81",s=r(184),c=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(n.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}}}]);
//# sourceMappingURL=76.839fccfd.chunk.js.map