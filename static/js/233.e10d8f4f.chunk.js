"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[233],{233:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var t=r(762),a=r(861),c=r(439),i=r(757),s=r.n(i),u=r(87),o=r(689),f=r(791),d=r(25),l="singlePostPage_div__J0IRh",p="singlePostPage_img__Jl1L6",v="singlePostPage_inform__qdF8S",h=r(184),x=function(){var e,n,r=(0,f.useState)(),i=(0,c.Z)(r,2),x=i[0],g=i[1],m=(0,o.UO)().id,_=null!==(e=null===(n=(0,o.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";if((0,f.useEffect)((function(){if(m){var e=function(){var e=(0,a.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.Pg)(m);case 3:n=e.sent,g(n),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),r=e.t0.response,console.log(r.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[m]),x){var b,j=[],w=(0,t.Z)(x.genres);try{for(w.s();!(b=w.n()).done;){var k=b.value;j.push(k.name," ")}}catch(y){w.e(y)}finally{w.f()}return(0,h.jsxs)("div",{children:[(0,h.jsx)(u.rU,{to:_,children:(0,h.jsx)("button",{type:"button",children:"Go back"})}),(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("img",{className:p,src:(0,d.Et)(x.poster_path,300),alt:x.original_title}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:x.original_title}),(0,h.jsxs)("p",{children:["userScore: ",x.vote_average.toFixed(1)]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:x.overview}),(0,h.jsx)("h2",{children:"Genres"}),(0,h.jsx)("p",{children:j})]})]}),(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("h2",{children:"Addition information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)(u.rU,{to:"cast",state:{from:_},children:(0,h.jsx)("li",{children:"Cast"})}),(0,h.jsx)(u.rU,{to:"reviews",state:{from:_},children:(0,h.jsx)("li",{children:"Reviews"})})]})]}),(0,h.jsx)(f.Suspense,{fallback:(0,h.jsx)("div",{children:"Loading..."}),children:(0,h.jsx)(o.j3,{})})]})}}},25:function(e,n,r){r.d(n,{Df:function(){return u},Et:function(){return p},IQ:function(){return l},Pg:function(){return o},Tn:function(){return d},gH:function(){return f}});var t=r(861),a=r(757),c=r.n(a),i=r(912).Z.create({baseURL:"https://api.themoviedb.org/3/"}),s="https://image.tmdb.org/t/p/w",u=function(){var e=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("trending/movie/week?api_key=be54c980e387a968afdb3128f8703296");case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n,"?api_key=be54c980e387a968afdb3128f8703296"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("search/movie?api_key=be54c980e387a968afdb3128f8703296&language=en-US&query=".concat(n,"&page=1&include_adult=false"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n,"/reviews?api_key=be54c980e387a968afdb3128f8703296"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("movie/".concat(n,"/credits?api_key=be54c980e387a968afdb3128f8703296"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return e?s+n+e:"https://via.placeholder.com/".concat(n,"x").concat(1.5*n)}}}]);
//# sourceMappingURL=233.e10d8f4f.chunk.js.map