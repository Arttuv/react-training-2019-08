(window["webpackJsonpphoto-browser"]=window["webpackJsonpphoto-browser"]||[]).push([[0],{130:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),c=a.n(l),o=(a(60),a(61),a(48)),i=a(14),s=a.n(i),u=a(29),m=a(8),p=a(49),b=a(19),d=(a(130),a(31)),f=a(9),v=a(16);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function E(e){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"PhotoApp"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},e.activePage?r.a.createElement("ul",{className:"navbar-nav mr-auto"},"photos"==e.activePage?r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"#"},"Photos ",r.a.createElement("span",{className:"sr-only"},"(current)"))):r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Photos ",r.a.createElement("span",{className:"sr-only"},"(current)"))),"photo"==e.activePage?r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"#"},"Photo Details",r.a.createElement("span",{className:"sr-only"},"(current)"))):null):null))}function g(e){var t=Object(n.useState)(null),a=Object(m.a)(t,2),l=(a[0],a[1]),c=Object(n.useState)(null),o=Object(m.a)(c,2),i=(o[0],o[1]),p=Object(n.useState)(null),b=Object(m.a)(p,2),d=(b[0],b[1]),f=Object(n.useState)(null),v=Object(m.a)(f,2),h=v[0],g=v[1];return console.log("Glorified photo"),console.log(e),Object(n.useEffect)(function(){(function(){var t=Object(u.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://jsonplaceholder.typicode.com/photos/"+e.match.params.id).then(function(e){return e.json()}).then(function(e){console.log(e);var t={};t.id=e.id,t.url=e.url,t.title=e.title,g(t),l(t.id),i(t.url),d(t.title)});case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()},[]),r.a.createElement("div",null,r.a.createElement(E,{activePage:"photo"}),null!=h?r.a.createElement("main",{role:"main",className:"container h100"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("img",{src:h.url,className:"card-img",alt:h.title})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},h.title),r.a.createElement("p",{className:"card-text"},"Link to ",r.a.createElement("a",{href:h.url},"original")),r.a.createElement("p",{className:"card-text"},"Link to ",r.a.createElement("a",{href:window.location.href},"details view")),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{class:"text-muted"},"Photo-id: ",h.id))))))):null)}var O=function(e){var t=e.currentView,a=e.modalProps;return r.a.createElement("div",{className:"container-fluid w-100 d-flex justify-content-center text-center"},r.a.createElement("button",{type:"button",className:"btn btn btn-outline-primary align-middle",onClick:function(){console.log(t),console.log(a),window.open(t.src)}},r.a.createElement(v.c,null)),r.a.createElement(d.b,{to:"/photo/"+t.id,className:"btn btn-outline-primary"},r.a.createElement(v.b,null)))};function j(e){var t=Object(n.useState)(0),l=Object(m.a)(t,2),c=l[0],i=l[1],d=Object(n.useState)(!1),f=Object(m.a)(d,2),v=f[0],g=f[1],j=Object(n.useState)(null),N=Object(m.a)(j,2),y=N[0],P=N[1],k=Object(n.useState)(null),x=Object(m.a)(k,2),S=x[0],C=x[1],D=Object(n.useState)(1),L=Object(m.a)(D,2),M=L[0],B=L[1],I=Object(n.useCallback)(function(e,t){t.photo;var a=t.index;i(a),g(!0)},[]);return Object(n.useEffect)(function(){(function(){var e=Object(u.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://jsonplaceholder.typicode.com/photos/?_page="+M+"&limit=12").then(function(e){var t=a(133)(e.headers.get("Link"));return C(t),e.json()}).then(function(e){var t=e.map(function(e){var t={};t.src=e.url;var a,n=(a=3,Math.floor(Math.random()*Math.floor(a))+1);return t.width=n,t.height=n,t.title=e.title,t.id=e.id,t.albumid=e.albumid,t});console.log(e),console.log(t),P(null==y?t:y.concat(t))});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[M]),r.a.createElement("div",null,r.a.createElement(E,{activePage:"photos"}),r.a.createElement("main",{role:"main",className:"container"},null!=y?r.a.createElement(p.a,{photos:y,onClick:I}):null,r.a.createElement(b.b,null,v?r.a.createElement(b.a,{onClose:function(){i(0),g(!1)}},r.a.createElement(b.c,{components:{Footer:O},currentIndex:c,views:y.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{srcset:e.srcSet,caption:e.title})})})):null),r.a.createElement(w,{pagination:S,nextPage:function(){B(M+1)},previousPage:function(){B(M-1)}})))}function w(e){return r.a.createElement("nav",null,null!=e.pagination?r.a.createElement("div",{className:"container-fluid w-100 d-flex justify-content-center"},e.pagination.hasOwnProperty("next")?r.a.createElement("button",{type:"button",className:"btn btn btn-outline-primary align-middle",onClick:e.nextPage},r.a.createElement(v.a,null)):r.a.createElement("button",{type:"button",className:"btn btn btn-outline-primary disabled"},r.a.createElement(v.a,null))):null)}var N=function(){return r.a.createElement(d.a,{basename:"/"},r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",component:j}),r.a.createElement(f.a,{path:"/photo/:id",component:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,t,a){e.exports=a(141)},61:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.d7783547.chunk.js.map