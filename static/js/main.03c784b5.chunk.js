(window["webpackJsonpphoto-browser"]=window["webpackJsonpphoto-browser"]||[]).push([[0],{130:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(5),c=n.n(a),l=(n(60),n(61),n(46)),i=n(28),u=n.n(i),s=n(47),p=n(11),b=n(48),f=n(18),m=(n(130),n(52)),d=n(8),h=n(10);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var w=function(e){var t=e.currentView,n=e.modalProps;return o.a.createElement("div",{className:"container-fluid w-100 d-flex justify-content-center text-center"},o.a.createElement("button",{type:"button",className:"btn btn btn-outline-primary align-middle",onClick:function(){console.log(t),console.log(n),window.open(t.src)}},o.a.createElement(h.b,null)))};function j(e){var t=Object(r.useState)(0),a=Object(p.a)(t,2),c=a[0],i=a[1],m=Object(r.useState)(!1),d=Object(p.a)(m,2),h=d[0],j=d[1],v=Object(r.useState)(null),y=Object(p.a)(v,2),E=y[0],P=y[1],k=Object(r.useState)(null),x=Object(p.a)(k,2),S=x[0],C=x[1],N=Object(r.useState)(1),D=Object(p.a)(N,2),L=D[0],M=D[1],B=Object(r.useCallback)(function(e,t){t.photo;var n=t.index;i(n),j(!0)},[]);return Object(r.useEffect)(function(){(function(){var t=Object(s.a)(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch(e.photoURL+"?_page="+L+"&limit=12").then(function(e){var t=n(133)(e.headers.get("Link"));return C(t),e.json()}).then(function(e){var t=e.map(function(e){var t={};t.src=e.url;var n,r=(n=3,Math.floor(Math.random()*Math.floor(n))+1);return t.width=r,t.height=r,t});console.log(e),console.log(t),P(null==E?t:E.concat(t))});case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()},[L]),o.a.createElement("div",null,null!=E?o.a.createElement(b.a,{photos:E,onClick:B}):null,o.a.createElement(f.b,null,h?o.a.createElement(f.a,{onClose:function(){i(0),j(!1)}},o.a.createElement(f.c,{components:{Footer:w},currentIndex:c,views:E.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach(function(t){Object(l.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{srcset:e.srcSet,caption:e.title})})})):null),o.a.createElement(g,{pagination:S,nextPage:function(){M(L+1)},previousPage:function(){M(L-1)}}))}function g(e){return o.a.createElement("nav",null,null!=e.pagination?o.a.createElement("div",{className:"container-fluid w-100 d-flex justify-content-center"},e.pagination.hasOwnProperty("next")?o.a.createElement("button",{type:"button",className:"btn btn btn-outline-primary align-middle",onClick:e.nextPage},o.a.createElement(h.a,null)):o.a.createElement("button",{type:"button",className:"btn btn btn-outline-primary disabled"},o.a.createElement(h.a,null))):null)}var v=function(){return o.a.createElement(m.a,null,o.a.createElement(d.a,{path:"/",render:function(e){return o.a.createElement(j,Object.assign({},e,{photoURL:"https://jsonplaceholder.typicode.com/photos/"}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,t,n){e.exports=n(141)},61:function(e,t,n){}},[[55,1,2]]]);
//# sourceMappingURL=main.03c784b5.chunk.js.map