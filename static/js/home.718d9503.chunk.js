"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[177],{4672:function(n,t,e){e.d(t,{O:function(){return v}});var r,i,a,o,c,u=e(6871),s=e(168),f=e(6444),p=e(501),d=f.ZP.ul(r||(r=(0,s.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: calc(-1 * 16px);\n  margin-bottom: calc(-1 * 32px);\n"]))),l=f.ZP.li(i||(i=(0,s.Z)(["\n  flex-basis: calc(100% / 3 - 16px);\n  margin-bottom: 52px;\n  margin-right: 16px;\n  max-width: 200px;\n\n  &:hover {\n    box-shadow: rgba(26, 7, 22, 0.267) 0px 2px 10px 0px;\n    border-radius: 5px;\n    transition-duration: $transition-time;\n    transition-timing-function: $cubic;\n    transform: scale(1.05);\n    cursor: pointer;\n  }\n"]))),g=f.ZP.img(a||(a=(0,s.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  object-fit: cover;\n"]))),m=f.ZP.p(o||(o=(0,s.Z)(["\n  margin: 8px 0;\n  color: #000;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"]))),x=(0,f.ZP)(p.rU)(c||(c=(0,s.Z)(["\n  text-decoration: none;\n"]))),h=e(184),v=function(n){var t=n.movies,e=(0,u.TH)();return(0,h.jsx)(d,{children:t.map((function(n){var t=n.id,r=n.title,i=n.original_name,a=n.poster_path;return(0,h.jsx)(l,{children:(0,h.jsxs)(x,{to:"/movies/".concat(t),state:{from:e},children:[(0,h.jsx)(g,{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU",alt:i}),(0,h.jsx)(m,{children:null!==r&&void 0!==r?r:i})]})},t)}))})}},9544:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r=e(885),i=e(2791),a=e(6066),o=e(4554),c=e(4672),u=e(7149),s=e(7398),f=e(184);function p(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],p=t[1],d=(0,i.useState)(null),l=(0,r.Z)(d,2),g=l[0],m=l[1];return(0,i.useEffect)((function(){m(!0),o.wr().then((function(n){var t=n.data;p(t.results),m(!1)})).catch((function(n){a.Am.error(n.message)}))}),[]),(0,f.jsxs)(s.o,{children:[(0,f.jsx)(s.D,{children:"Trending Movies Today"}),g&&(0,f.jsx)(u.a,{}),(0,f.jsx)(c.O,{movies:e})]})}},7398:function(n,t,e){e.d(t,{D:function(){return u},o:function(){return c}});var r,i,a=e(168),o=e(6444),c=o.ZP.div(r||(r=(0,a.Z)(["\n  width: 1440px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),u=o.ZP.h2(i||(i=(0,a.Z)(["\n  text-transform: uppercase;\n  font-size: 32px;\n  font-weight: 600;\n"])))},4554:function(n,t,e){e.d(t,{BG:function(){return u},Bt:function(){return f},Pv:function(){return c},wr:function(){return o},y:function(){return s}});var r=e(4569),i=e.n(r),a="62788155badfe8d58c3d1f91f78357af";i().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){return i().get("/trending/all/day?api_key=".concat(a))},c=function(n){return i().get("/search/movie?api_key=".concat(a,"&query=").concat(n,"&language=en-US&page=1&include_adult=false"))},u=function(n){return i().get("/movie/".concat(n,"?api_key=").concat(a,"&language=en-US"))},s=function(n){return i().get("/movie/".concat(n,"/credits?api_key=").concat(a,"&language=en-US"))},f=function(n){return i().get("/movie/".concat(n,"/reviews?api_key=").concat(a,"&language=en-US"))}}}]);
//# sourceMappingURL=home.718d9503.chunk.js.map