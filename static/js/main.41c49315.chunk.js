(window["webpackJsonpphoto-browser"]=window["webpackJsonpphoto-browser"]||[]).push([[0],{145:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(76),a(77),a(26)),i=a(14),s=a(61),u=a(17),m=a.n(u),d=a(24),p=a(11),h=a(62),b=a(30),f=a(22),E=a(171),g=a(168),v=a(169),w=a(170),O=a(172);a(145);var j=function(e){return r.a.createElement(E.a,{id:"main-navigation",variant:"light",fixed:"top"},r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(w.a,null,r.a.createElement(E.a.Brand,{href:"/"},"PhotoApp")),r.a.createElement(w.a,null,r.a.createElement(O.a,null,"photos"===e.activePage?r.a.createElement(O.a.Link,{className:"active-page-link",href:"/#"},"Photos"):r.a.createElement(O.a.Link,{href:"/"},"Photos"),"photo"===e.activePage?r.a.createElement(O.a.Link,{className:"active-page-link",href:window.location.href},"Details"):null)))))};function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var N=a(154);function P(e){return r.a.createElement("nav",null,null!=e.pagination?r.a.createElement("div",{className:"container-fluid w-100 d-flex justify-content-center"},e.pagination.hasOwnProperty("next")?r.a.createElement("button",{type:"button",className:"btn btn btn-outline-primary align-middle button-with-margin shadow-sm",onClick:e.nextPage},r.a.createElement(f.a,null)):r.a.createElement("button",{type:"button",className:"btn btn btn-outline-primary disabled button-with-margin shadow-sm"},r.a.createElement(f.a,null))):null)}var k=function(e){var t=e.currentView;e.modalProps;return r.a.createElement("div",{className:"container-fluid w-100 d-flex justify-content-center text-center"},r.a.createElement("button",{type:"button",className:"button-with-margin btn btn btn-outline-primary align-middle shadow-sm",onClick:function(){window.open(t.src)}},r.a.createElement(f.c,null)),r.a.createElement(o.b,{to:"/photo/"+t.id,className:"btn button-with-margin btn-outline-primary shadow-sm"},r.a.createElement(f.b,null)))},x=function(e){var t=Object(n.useState)(0),a=Object(p.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(!1),i=Object(p.a)(o,2),u=i[0],f=i[1],E=Object(n.useState)(null),g=Object(p.a)(E,2),v=g[0],w=g[1],O=Object(n.useState)(null),x=Object(p.a)(O,2),S=x[0],L=x[1],C=Object(n.useState)(1),D=Object(p.a)(C,2),B=D[0],M=D[1],I=Object(n.useState)(!1),J=Object(p.a)(I,2),W=J[0],A=J[1],F=Object(n.useState)(null),V=Object(p.a)(F,2),$=V[0],_=V[1],q=Object(n.useCallback)(function(e,t){t.photo;var a=t.index;l(a),f(!0)},[]);function z(e){return Math.floor(Math.random()*Math.floor(e))}return Object(n.useEffect)(function(){(function(){var e=Object(d.a)(m.a.mark(function e(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:A(!0),fetch("https://jsonplaceholder.typicode.com/photos/?_page="+B+"&limit=12").then(function(e){var t=N(e.headers.get("Link"));return L(t),e.json()}).then(function(e){var t=e.map(function(e){var t={};t.src=e.url;var a=z(1)+1,n=z(1)+1;return t.width=a,t.height=n,t.title=e.title,t.id=e.id,t.albumid=e.albumid,t});w(v?v.concat(t):t),A(!1)}).catch(function(e){console.error("Error:",e),_(e)});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[B,w]),r.a.createElement("div",null,r.a.createElement(j,{activePage:"photos"}),r.a.createElement("main",{role:"main",className:"container"},null!=v?r.a.createElement(h.a,{photos:v,direction:"row",onClick:q}):r.a.createElement("h1",null,"Loading..."),null!=$?r.a.createElement("div",{className:"bg-danger"},r.a.createElement("h2",{class:"bg-danger"},"Error: ",$.name),r.a.createElement("p",null,$.message)):null,r.a.createElement(b.b,null,u?r.a.createElement(b.a,{onClose:function(){l(0),f(!1)}},r.a.createElement(b.c,{components:{Footer:k},currentIndex:c,views:v.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(s.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{srcset:e.srcSet,caption:e.title})})})):null),W?null:r.a.createElement(P,{pagination:S,nextPage:function(){M(B+1)},previousPage:function(){M(B-1)}})))};var S=function(e){var t=Object(n.useState)(null),a=Object(p.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(null),i=Object(p.a)(o,2),s=i[0],u=i[1];return Object(n.useEffect)(function(){(function(){var t=Object(d.a)(m.a.mark(function t(){return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://jsonplaceholder.typicode.com/photos/"+e.match.params.id).then(function(e){return e.json()}).then(function(e){var t={};t.id=e.id,t.url=e.url,t.title=e.title,l(t)}).catch(function(e){console.error("Error:",e),u(e)});case 1:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()},[l,e.match.params.id]),r.a.createElement("div",null,r.a.createElement(j,{activePage:"photo"}),null!=c?r.a.createElement("main",{role:"main",className:"container photo-details"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("img",{src:c.url,className:"card-img",alt:c.title})),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},c.title),r.a.createElement("p",{className:"card-text"},"Link to ",r.a.createElement("a",{href:c.url},"original")),r.a.createElement("p",{className:"card-text"},"Link to ",r.a.createElement("a",{href:window.location.href},"details view")),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},"Photo-id: ",c.id))))))):r.a.createElement("h1",null,"Loading..."),null!=s?r.a.createElement("div",{className:"bg-danger"},r.a.createElement("h2",{class:"bg-danger"},"Error: ",s.name),r.a.createElement("p",null,s.message)):null)};a(164);var L=function(){return r.a.createElement(o.a,{basename:"/"},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:x}),r.a.createElement(i.a,{path:"/photo/:id",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},71:function(e,t,a){e.exports=a(165)},77:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.41c49315.chunk.js.map