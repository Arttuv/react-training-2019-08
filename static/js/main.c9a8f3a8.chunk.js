(window["webpackJsonpphoto-browser"]=window["webpackJsonpphoto-browser"]||[]).push([[0],{130:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(5),c=n.n(r),l=(n(60),n(61),n(48)),i=n(15),u=n.n(i),s=n(30),p=n(9),m=n(49),f=n(20),b=(n(130),n(17)),d=n(8),h=n(14);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function O(e){var t=Object(a.useState)(null),n=Object(p.a)(t,2),r=n[0],c=n[1];return console.log("Glorified photo"),console.log(e),Object(a.useEffect)(function(){(function(){var t=Object(s.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:new URLSearchParams(window.location.search),fetch("https://jsonplaceholder.typicode.com/photos/"+e.match.params.id).then(function(e){return e.json()}).then(function(e){console.log(e);var t={};t.id=e.id,t.url=e.url,t.title=e.title,c(t)});case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()},[r]),o.a.createElement("div",null,o.a.createElement("h1",null,"Photo Details"),null!=r?o.a.createElement("h1",null,r.id):null)}var j=function(e){var t=e.currentView,n=e.modalProps;return o.a.createElement("div",{className:"container-fluid w-100 d-flex justify-content-center text-center"},o.a.createElement("span",{className:"text-light"},t.title),o.a.createElement("button",{type:"button",className:"btn btn btn-outline-primary align-middle",onClick:function(){console.log(t),console.log(n),window.open(t.src)}},o.a.createElement(h.b,null)),o.a.createElement(b.b,{to:{pathname:"/photo",state:{id:t.id}}},"Details 1"),o.a.createElement(b.b,{to:"/photo",params:{id:t.id}},"Details 2"),o.a.createElement(b.b,{to:"/photo/"+t.id},"Details 3"))};function E(e){var t=Object(a.useState)(0),r=Object(p.a)(t,2),c=r[0],i=r[1],b=Object(a.useState)(!1),d=Object(p.a)(b,2),h=d[0],O=d[1],E=Object(a.useState)(null),g=Object(p.a)(E,2),y=g[0],P=g[1],x=Object(a.useState)(null),k=Object(p.a)(x,2),S=k[0],D=k[1],N=Object(a.useState)(1),C=Object(p.a)(N,2),M=C[0],B=C[1],I=Object(a.useCallback)(function(e,t){t.photo;var n=t.index;i(n),O(!0)},[]);return Object(a.useEffect)(function(){(function(){var e=Object(s.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://jsonplaceholder.typicode.com/photos/?_page="+M+"&limit=12").then(function(e){var t=n(133)(e.headers.get("Link"));return D(t),e.json()}).then(function(e){var t=e.map(function(e){var t={};t.src=e.url;var n,a=(n=3,Math.floor(Math.random()*Math.floor(n))+1);return t.width=a,t.height=a,t.title=e.title,t.id=e.id,t.albumid=e.albumid,t});console.log(e),console.log(t),P(null==y?t:y.concat(t))});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[M]),o.a.createElement("div",null,null!=y?o.a.createElement(m.a,{photos:y,onClick:I}):null,o.a.createElement(f.b,null,h?o.a.createElement(f.a,{onClose:function(){i(0),O(!1)}},o.a.createElement(f.c,{components:{Footer:j},currentIndex:c,views:y.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{srcset:e.srcSet,caption:e.title})})})):null),o.a.createElement(v,{pagination:S,nextPage:function(){B(M+1)},previousPage:function(){B(M-1)}}))}function v(e){return o.a.createElement("nav",null,null!=e.pagination?o.a.createElement("div",{className:"container-fluid w-100 d-flex justify-content-center"},e.pagination.hasOwnProperty("next")?o.a.createElement("button",{type:"button",className:"btn btn btn-outline-primary align-middle",onClick:e.nextPage},o.a.createElement(h.a,null)):o.a.createElement("button",{type:"button",className:"btn btn btn-outline-primary disabled"},o.a.createElement(h.a,null))):null)}var g=function(){return o.a.createElement(b.a,null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:E}),o.a.createElement(d.a,{exact:!0,path:"/photo/:id",component:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,t,n){e.exports=n(141)},61:function(e,t,n){}},[[55,1,2]]]);
//# sourceMappingURL=main.c9a8f3a8.chunk.js.map