"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[168],{242:function(e,r,t){var n=t(861),a=t(757),s=t.n(a),c=t(243),i="https://api.themoviedb.org/3",o="6f157e49e729f31d4a7c0245fe6212a7",u=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(i,"/trending/movie/day"),{params:{api_key:o}});case 3:return r=e.sent,e.next=6,r.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(i,"/search/movie"),{params:{api_key:o,query:r}});case 3:return t=e.sent,e.next=6,t.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(i,"/movie/").concat(r),{params:{api_key:o}});case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(i,"/movie/").concat(r,"/credits"),{params:{api_key:o}});case 3:return t=e.sent,e.next=6,t.data;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("".concat(i,"/movie/").concat(r,"/reviews"),{params:{api_key:o}});case 3:return t=e.sent,e.next=6,t.data.results;case 6:return e.abrupt("return",e.sent);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0.stack);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(r){return e.apply(this,arguments)}}(),h={getTrendingMovies:u,getMovieByQuery:p,getMovieDetails:v,getMovieCredits:l,getMovieReviews:f};r.Z=h},639:function(e,r,t){t.d(r,{Z:function(){return c}});t(791);var n=t(691),a="Loader_position__3ws81",s=t(184),c=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(n.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},168:function(e,r,t){t.r(r),t.d(r,{Reviews:function(){return k}});var n=t(861),a=t(439),s=t(757),c=t.n(s),i=t(791),o="Reviews_reviewsList__hDAQA",u="Reviews_reviewsItem__Su53A",p="Reviews_reviewsName__Dzz-A",v="Reviews_reviewsNameText__HFApC",l="Reviews_reviewsRating__E4pQ+",f="Reviews_reviewsRatingText__MpCRM",h="Reviews_reviewsDescription__6br+V",w="Reviews_noReviews__TJWdg",d=t(242),m=t(639),_=t(689),x=t(184),k=function(){var e=(0,i.useState)([]),r=(0,a.Z)(e,2),t=r[0],s=r[1],k=(0,i.useState)(!1),g=(0,a.Z)(k,2),b=g[0],Z=g[1],y=(0,_.UO)().id;return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,d.Z.getMovieReviews(y);case 4:r=e.sent,s(r),Z(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.error("B\u0142\u0105d podczas pobierania film\xf3w:",e.t0),Z(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[s,Z,y]),(0,x.jsxs)(x.Fragment,{children:[t.length>0&&(0,x.jsx)("ul",{className:o,children:t.map((function(e){var r=e.id,t=e.author_details,n=t.name,a=t.rating,s=e.content;return(0,x.jsxs)("li",{className:u,children:[(0,x.jsxs)("p",{className:p,children:[(0,x.jsx)("span",{className:v,children:"Author:"})," ",n||"Unknown"]}),(0,x.jsxs)("p",{className:l,children:[(0,x.jsx)("span",{className:f,children:"Rating:"})," ",a?"".concat(a,"/10"):"Unknown"]}),(0,x.jsxs)("p",{children:[(0,x.jsx)("span",{className:h,children:"Description:"})," ",s||"No description"]})]},r)}))}),!t.length&&!Z&&(0,x.jsx)("p",{className:w,children:"There is no reviews for this movie"}),(0,x.jsx)(m.Z,{setLoading:b})]})}}}]);
//# sourceMappingURL=168.747d08d4.chunk.js.map