"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{242:function(e,r,t){var n=t(861),a=t(757),s=t.n(a),c=t(243),u="https://api.themoviedb.org/3",o="6f157e49e729f31d4a7c0245fe6212a7",i=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(u,"/trending/movie/day"),{params:{api_key:o}});case 3:return r=e.sent,e.next=6,r.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(u,"/search/movie"),{params:{api_key:o,query:r}});case 3:return t=e.sent,e.next=6,t.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(u,"/movie/").concat(r),{params:{api_key:o}});case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(u,"/movie/").concat(r,"/credits"),{params:{api_key:o}});case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(u,"/movie/").concat(r,"/reviews"),{params:{api_key:o}});case 3:return t=e.sent,e.next=6,t.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),h={getTrendingMovies:i,getMovieByQuery:p,getMovieDetails:l,getMovieCredits:v,getMovieReviews:f};r.Z=h},639:function(e,r,t){t.d(r,{Z:function(){return c}});t(791);var n=t(691),a="Loader_position__3ws81",s=t(184),c=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(n.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},881:function(e,r,t){t.r(r),t.d(r,{Movies:function(){return v}});var n=t(861),a=t(439),s=t(757),c=t.n(s),u=t(791),o={searchbar:"Movies_searchbar__IBimh",form:"Movies_form__4ow+Z",searchFormButton:"Movies_searchFormButton__C6hnw",searchFormButtonLabel:"Movies_searchFormButtonLabel__KbGWe",searchFormInput:"Movies_searchFormInput__9CWXR"},i=t(242),p=t(639),l=t(184),v=function(e){var r=e.getMovieByQuery,t=(0,u.useState)(""),s=(0,a.Z)(t,2),v=s[0],f=s[1],h=(0,u.useState)([]),m=(0,a.Z)(h,2),d=m[0],x=m[1],b=(0,u.useState)(!1),k=(0,a.Z)(b,2),w=k[0],_=k[1];(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==v.trim()){e.next=2;break}return e.abrupt("return");case 2:return _(!0),e.prev=3,e.next=6,i.Z.getMovieByQuery(v);case 6:r=e.sent,x(r),_(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),console.error("B\u0142\u0105d podczas pobierania film\xf3w:",e.t0),_(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[v]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("form",{className:o.form,onSubmit:function(e){e.preventDefault(),r(v)},children:[(0,l.jsx)("button",{type:"submit",className:o.searchFormButton,children:(0,l.jsx)("span",{className:o.searchFormButtonaLabel,children:"Szukaj"})}),(0,l.jsx)("input",{name:"query",className:o.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Szukaj film\xf3w",value:v,onChange:function(e){var r=e.target.value;f(r),x([])}}),w?(0,l.jsx)("div",{children:"\u0141adowanie..."}):null,d.length>0?(0,l.jsx)("ul",{children:d.map((function(e){return(0,l.jsx)("li",{children:e.title},e.id)}))}):null]}),(0,l.jsx)(p.Z,{setLoading:w})]})}}}]);
//# sourceMappingURL=881.7b9c92e8.chunk.js.map