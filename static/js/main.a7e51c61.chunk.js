(window["webpackJsonpphoto-browser"]=window["webpackJsonpphoto-browser"]||[]).push([[0],{116:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(3),r=a.n(c),o=(a(46),a(47),a(35)),i=a(20),l=a.n(i),h=a(36),u=a(7),p=a(37),m=a(11),g=(a(116),[{src:"https://source.unsplash.com/2ShvY8Lf6l0/800x599",width:4,height:3},{src:"https://source.unsplash.com/Dm-qxdynoEc/800x799",width:1,height:1},{src:"https://source.unsplash.com/qDkso9nvCg0/600x799",width:3,height:4},{src:"https://source.unsplash.com/iecJiKe_RNg/600x799",width:3,height:4},{src:"https://source.unsplash.com/epcsn8Ed8kY/600x799",width:3,height:4},{src:"https://source.unsplash.com/NQSWvyVRIJk/800x599",width:4,height:3},{src:"https://source.unsplash.com/zh7GEuORbUw/600x799",width:3,height:4},{src:"https://source.unsplash.com/PpOHJezOalU/800x599",width:4,height:3},{src:"https://source.unsplash.com/I1ASdgphUH4/800x599",width:4,height:3},{src:"https://source.unsplash.com/XiDA78wAZVw/600x799",width:3,height:4},{src:"https://source.unsplash.com/x8xJpClTvR0/800x599",width:4,height:3},{src:"https://source.unsplash.com/qGQNmBE7mYw/800x599",width:4,height:3},{src:"https://source.unsplash.com/NuO6iTBkHxE/800x599",width:4,height:3},{src:"https://source.unsplash.com/pF1ug8ysTtY/600x400",width:4,height:3},{src:"https://source.unsplash.com/A-fubu9QJxE/800x533",width:4,height:3},{src:"https://source.unsplash.com/5P91SF0zNsI/740x494",width:4,height:3}]);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function w(e){return s.a.createElement("nav",null,null!=e.pagination?s.a.createElement("ul",{className:"pagination justify-content-center"},e.pagination.hasOwnProperty("previous")?s.a.createElement("li",{className:"page-item"},s.a.createElement("a",{className:"page-link",href:e.pagination.previous.url,tabIndex:"-1"},"Previous")):s.a.createElement("li",{className:"page-item disabled"},s.a.createElement("a",{className:"page-link",href:"#",tabIndex:"-1"},"Previous")),s.a.createElement("li",{className:"page-item"},s.a.createElement("a",{className:"page-link",href:"#"},"1")),s.a.createElement("li",{className:"page-item"},s.a.createElement("a",{className:"page-link",href:"#"},"2")),s.a.createElement("li",{className:"page-item"},s.a.createElement("a",{className:"page-link",href:"#"},"3")),e.pagination.hasOwnProperty("next")?s.a.createElement("li",{className:"page-item"},s.a.createElement("a",{className:"page-link",href:e.pagination.next.url,tabIndex:"-1"},"Next")):s.a.createElement("li",{className:"page-item disabled"},s.a.createElement("a",{className:"page-link",href:"#",tabIndex:"-1"},"Next"))):null)}var f=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(!1),f=Object(u.a)(i,2),b=f[0],x=f[1],E=Object(n.useState)(g),O=Object(u.a)(E,2),v=O[0],j=O[1],y=Object(n.useState)(null),N=Object(u.a)(y,2),k=N[0],P=N[1],S=Object(n.useCallback)(function(e,t){t.photo;var a=t.index;r(a),x(!0)},[]);return Object(n.useEffect)(function(){(function(){var e=Object(h.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://jsonplaceholder.typicode.com/photos/?_page=1&limit=10").then(function(e){var t=a(117)(e.headers.get("Link"));return console.log(typeof t),console.log(t),console.log(t.next),P(t),e.json()}).then(function(e){var t=e.map(function(e){var t={};return t.src=e.url,t.width=1,t.height=1,t});console.log(e),console.log(t),j(t)});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]),s.a.createElement("div",null,s.a.createElement(p.a,{photos:v,onClick:S}),s.a.createElement(m.b,null,b?s.a.createElement(m.a,{onClose:function(){r(0),x(!1)}},s.a.createElement(m.c,{currentIndex:c,views:v.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{srcset:e.srcSet,caption:e.title})})})):null),s.a.createElement(w,{pagination:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},41:function(e,t,a){e.exports=a(125)},47:function(e,t,a){}},[[41,1,2]]]);
//# sourceMappingURL=main.a7e51c61.chunk.js.map