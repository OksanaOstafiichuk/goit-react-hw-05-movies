"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[912],{4387:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,i,c,o=t(885),u=t(2791),s=t(6871),f=t(6066),l=t(4554),d=t(168),g=t(6444),p=g.ZP.ul(r||(r=(0,d.Z)(["\n  list-style: none;\n"]))),h=g.ZP.li(a||(a=(0,d.Z)(["\n  margin-bottom: 20px;\n  padding: 20px 30px;\n  box-shadow: rgba(26, 7, 22, 0.267) 0px 2px 10px 0px;\n  border-radius: 5px;\n  text-align: justify;\n  line-height: 1.5;\n  font-size: 16px;\n"]))),x=g.ZP.h4(i||(i=(0,d.Z)(["\n  text-align: right;\n  margin-right: 100px;\n"]))),m=g.ZP.p(c||(c=(0,d.Z)(["\n  font-size: 24px;\n  font-style: italic;\n  color: #ccc;\n"]))),v=t(184);function y(){var n=(0,s.UO)().movieId,e=(0,u.useState)([]),t=(0,o.Z)(e,2),r=t[0],a=t[1];return(0,u.useEffect)((function(){l.Bt(n).then((function(n){var e=n.data;a(e.results)})).catch((function(n){f.Am.error(n.message)}))}),[n]),(0,v.jsx)(v.Fragment,{children:0!==r.length?(0,v.jsx)(p,{children:r.map((function(n){return(0,v.jsxs)(h,{children:[(0,v.jsx)("p",{children:n.content}),(0,v.jsx)(x,{children:n.author})]},n.id)}))}):(0,v.jsx)(m,{children:"We don't have any reviews for this movie"})})}},4554:function(n,e,t){t.d(e,{BG:function(){return u},Bt:function(){return f},Pv:function(){return o},wr:function(){return c},y:function(){return s}});var r=t(4569),a=t.n(r),i="62788155badfe8d58c3d1f91f78357af";a().defaults.baseURL="https://api.themoviedb.org/3";var c=function(){return a().get("/trending/all/day?api_key=".concat(i))},o=function(n){return a().get("/search/movie?api_key=".concat(i,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},u=function(n){return a().get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"))},s=function(n){return a().get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"))},f=function(n){return a().get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US"))}}}]);
//# sourceMappingURL=reviews.bcf484ef.chunk.js.map