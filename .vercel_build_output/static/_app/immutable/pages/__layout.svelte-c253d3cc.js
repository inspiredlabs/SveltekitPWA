import{F as Me,S as _e,i as ye,s as Ee,e as p,k as $,G as pe,t as X,c as u,a as y,d as n,m as z,H as ue,h as Y,I as Te,b as e,J as oe,g as M,K as o,E as se,L as We,M as ze,l as Ue,N as Ce,w as je,O as Re,x as Ne,y as Fe,P as Be,Q as Oe,R as De,q as ge,o as we,B as Se}from"../chunks/index-14ffccfa.js";const He=()=>{const r=Me("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},Ge={subscribe(r){return He().page.subscribe(r)}};var Ve="/_app/immutable/assets/svelte-logo-87df40b8.svg";function Ze(r){let t,a,i,l,k,b,v,g,s,f,d,c,h,x,L,E,U,T,W,j,N,C,R,F,S,B,K;return{c(){t=p("header"),a=p("div"),i=p("a"),l=p("img"),b=$(),v=p("nav"),g=pe("svg"),s=pe("path"),f=$(),d=p("ul"),c=p("li"),h=p("a"),x=X("Home"),L=$(),E=p("li"),U=p("a"),T=X("About"),W=$(),j=p("li"),N=p("a"),C=X("Todos"),R=$(),F=pe("svg"),S=pe("path"),B=$(),K=p("div"),this.h()},l(I){t=u(I,"HEADER",{class:!0});var q=y(t);a=u(q,"DIV",{class:!0});var D=y(a);i=u(D,"A",{href:!0,class:!0});var H=y(i);l=u(H,"IMG",{src:!0,alt:!0,class:!0}),H.forEach(n),D.forEach(n),b=z(q),v=u(q,"NAV",{class:!0});var A=y(v);g=ue(A,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var G=y(g);s=ue(G,"path",{d:!0,class:!0}),y(s).forEach(n),G.forEach(n),f=z(A),d=u(A,"UL",{class:!0});var O=y(d);c=u(O,"LI",{class:!0});var V=y(c);h=u(V,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var te=y(h);x=Y(te,"Home"),te.forEach(n),V.forEach(n),L=z(O),E=u(O,"LI",{class:!0});var Z=y(E);U=u(Z,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var ae=y(U);T=Y(ae,"About"),ae.forEach(n),Z.forEach(n),W=z(O),j=u(O,"LI",{class:!0});var J=y(j);N=u(J,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var Q=y(N);C=Y(Q,"Todos"),Q.forEach(n),J.forEach(n),O.forEach(n),R=z(A),F=ue(A,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var ie=y(F);S=ue(ie,"path",{d:!0,class:!0}),y(S).forEach(n),ie.forEach(n),A.forEach(n),B=z(q),K=u(q,"DIV",{class:!0});var ee=y(K);ee.forEach(n),q.forEach(n),this.h()},h(){Te(l.src,k=Ve)||e(l,"src",k),e(l,"alt","SvelteKit"),e(l,"class","svelte-t2wq17"),e(i,"href","https://kit.svelte.dev"),e(i,"class","svelte-t2wq17"),e(a,"class","corner svelte-t2wq17"),e(s,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(s,"class","svelte-t2wq17"),e(g,"viewBox","0 0 2 3"),e(g,"aria-hidden","true"),e(g,"class","svelte-t2wq17"),e(h,"sveltekit:prefetch",""),e(h,"href","/"),e(h,"class","svelte-t2wq17"),e(c,"class","svelte-t2wq17"),oe(c,"active",r[0].url.pathname==="/"),e(U,"sveltekit:prefetch",""),e(U,"href","/about"),e(U,"class","svelte-t2wq17"),e(E,"class","svelte-t2wq17"),oe(E,"active",r[0].url.pathname==="/about"),e(N,"sveltekit:prefetch",""),e(N,"href","/todos"),e(N,"class","svelte-t2wq17"),e(j,"class","svelte-t2wq17"),oe(j,"active",r[0].url.pathname==="/todos"),e(d,"class","svelte-t2wq17"),e(S,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(S,"class","svelte-t2wq17"),e(F,"viewBox","0 0 2 3"),e(F,"aria-hidden","true"),e(F,"class","svelte-t2wq17"),e(v,"class","svelte-t2wq17"),e(K,"class","corner svelte-t2wq17"),e(t,"class","svelte-t2wq17")},m(I,q){M(I,t,q),o(t,a),o(a,i),o(i,l),o(t,b),o(t,v),o(v,g),o(g,s),o(v,f),o(v,d),o(d,c),o(c,h),o(h,x),o(d,L),o(d,E),o(E,U),o(U,T),o(d,W),o(d,j),o(j,N),o(N,C),o(v,R),o(v,F),o(F,S),o(t,B),o(t,K)},p(I,[q]){q&1&&oe(c,"active",I[0].url.pathname==="/"),q&1&&oe(E,"active",I[0].url.pathname==="/about"),q&1&&oe(j,"active",I[0].url.pathname==="/todos")},i:se,o:se,d(I){I&&n(t)}}}function Je(r,t,a){let i;return We(r,Ge,l=>a(0,i=l)),[i]}class Qe extends _e{constructor(t){super(),ye(this,t,Je,Ze,Ee,{})}}try{self["workbox:window:6.5.2"]&&_()}catch{}function xe(r,t){return new Promise(function(a){var i=new MessageChannel;i.port1.onmessage=function(l){a(l.data)},r.postMessage(t,[i.port2])})}function Xe(r,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Ae(r,t){(t==null||t>r.length)&&(t=r.length);for(var a=0,i=new Array(t);a<t;a++)i[a]=r[a];return i}function Ye(r,t){var a;if(typeof Symbol=="undefined"||r[Symbol.iterator]==null){if(Array.isArray(r)||(a=function(l,k){if(l){if(typeof l=="string")return Ae(l,k);var b=Object.prototype.toString.call(l).slice(8,-1);return b==="Object"&&l.constructor&&(b=l.constructor.name),b==="Map"||b==="Set"?Array.from(l):b==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b)?Ae(l,k):void 0}}(r))||t&&r&&typeof r.length=="number"){a&&(r=a);var i=0;return function(){return i>=r.length?{done:!0}:{done:!1,value:r[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(a=r[Symbol.iterator]()).next.bind(a)}try{self["workbox:core:6.5.2"]&&_()}catch{}var be=function(){var r=this;this.promise=new Promise(function(t,a){r.resolve=t,r.reject=a})};function ke(r,t){var a=location.href;return new URL(r,a).href===new URL(t,a).href}var le=function(r,t){this.type=r,Object.assign(this,t)};function fe(r,t,a){return a?t?t(r):r:(r&&r.then||(r=Promise.resolve(r)),t?r.then(t):r)}function et(){}var tt={type:"SKIP_WAITING"};function Ke(r,t){if(!t)return r&&r.then?r.then(et):Promise.resolve()}var at=function(r){var t,a;function i(v,g){var s,f;return g===void 0&&(g={}),(s=r.call(this)||this).nn={},s.tn=0,s.rn=new be,s.en=new be,s.on=new be,s.un=0,s.an=new Set,s.cn=function(){var d=s.fn,c=d.installing;s.tn>0||!ke(c.scriptURL,s.sn.toString())||performance.now()>s.un+6e4?(s.vn=c,d.removeEventListener("updatefound",s.cn)):(s.hn=c,s.an.add(c),s.rn.resolve(c)),++s.tn,c.addEventListener("statechange",s.ln)},s.ln=function(d){var c=s.fn,h=d.target,x=h.state,L=h===s.vn,E={sw:h,isExternal:L,originalEvent:d};!L&&s.mn&&(E.isUpdate=!0),s.dispatchEvent(new le(x,E)),x==="installed"?s.wn=self.setTimeout(function(){x==="installed"&&c.waiting===h&&s.dispatchEvent(new le("waiting",E))},200):x==="activating"&&(clearTimeout(s.wn),L||s.en.resolve(h))},s.dn=function(d){var c=s.hn,h=c!==navigator.serviceWorker.controller;s.dispatchEvent(new le("controlling",{isExternal:h,originalEvent:d,sw:c,isUpdate:s.mn})),h||s.on.resolve(c)},s.gn=(f=function(d){var c=d.data,h=d.ports,x=d.source;return fe(s.getSW(),function(){s.an.has(x)&&s.dispatchEvent(new le("message",{data:c,originalEvent:d,ports:h,sw:x}))})},function(){for(var d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];try{return Promise.resolve(f.apply(this,d))}catch(h){return Promise.reject(h)}}),s.sn=v,s.nn=g,navigator.serviceWorker.addEventListener("message",s.gn),s}a=r,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l,k,b=i.prototype;return b.register=function(v){var g=(v===void 0?{}:v).immediate,s=g!==void 0&&g;try{var f=this;return function(d,c){var h=d();return h&&h.then?h.then(c):c(h)}(function(){if(!s&&document.readyState!=="complete")return Ke(new Promise(function(d){return window.addEventListener("load",d)}))},function(){return f.mn=Boolean(navigator.serviceWorker.controller),f.yn=f.pn(),fe(f.bn(),function(d){f.fn=d,f.yn&&(f.hn=f.yn,f.en.resolve(f.yn),f.on.resolve(f.yn),f.yn.addEventListener("statechange",f.ln,{once:!0}));var c=f.fn.waiting;return c&&ke(c.scriptURL,f.sn.toString())&&(f.hn=c,Promise.resolve().then(function(){f.dispatchEvent(new le("waiting",{sw:c,wasWaitingBeforeRegister:!0}))}).then(function(){})),f.hn&&(f.rn.resolve(f.hn),f.an.add(f.hn)),f.fn.addEventListener("updatefound",f.cn),navigator.serviceWorker.addEventListener("controllerchange",f.dn),f.fn})})}catch(d){return Promise.reject(d)}},b.update=function(){try{return this.fn?Ke(this.fn.update()):void 0}catch(v){return Promise.reject(v)}},b.getSW=function(){return this.hn!==void 0?Promise.resolve(this.hn):this.rn.promise},b.messageSW=function(v){try{return fe(this.getSW(),function(g){return xe(g,v)})}catch(g){return Promise.reject(g)}},b.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&xe(this.fn.waiting,tt)},b.pn=function(){var v=navigator.serviceWorker.controller;return v&&ke(v.scriptURL,this.sn.toString())?v:void 0},b.bn=function(){try{var v=this;return function(g,s){try{var f=g()}catch(d){return s(d)}return f&&f.then?f.then(void 0,s):f}(function(){return fe(navigator.serviceWorker.register(v.sn,v.nn),function(g){return v.un=performance.now(),g})},function(g){throw g})}catch(g){return Promise.reject(g)}},l=i,(k=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&Xe(l.prototype,k),i}(function(){function r(){this.Pn=new Map}var t=r.prototype;return t.addEventListener=function(a,i){this.Sn(a).add(i)},t.removeEventListener=function(a,i){this.Sn(a).delete(i)},t.dispatchEvent=function(a){a.target=this;for(var i,l=Ye(this.Sn(a.type));!(i=l()).done;)(0,i.value)(a)},t.Sn=function(a){return this.Pn.has(a)||this.Pn.set(a,new Set),this.Pn.get(a)},r}());function Pe(r){let t,a,i,l,k,b,v,g;function s(h,x){return h[0]?it:rt}let f=s(r),d=f(r),c=r[1]&&$e(r);return{c(){t=p("div"),a=p("div"),d.c(),i=$(),c&&c.c(),l=$(),k=p("button"),b=X("Close"),this.h()},l(h){t=u(h,"DIV",{class:!0,role:!0});var x=y(t);a=u(x,"DIV",{class:!0});var L=y(a);d.l(L),L.forEach(n),i=z(x),c&&c.l(x),l=z(x),k=u(x,"BUTTON",{class:!0});var E=y(k);b=Y(E,"Close"),E.forEach(n),x.forEach(n),this.h()},h(){e(a,"class","message svelte-1q69697"),e(k,"class","svelte-1q69697"),e(t,"class","pwa-toast svelte-1q69697"),e(t,"role","alert")},m(h,x){M(h,t,x),o(t,a),d.m(a,null),o(t,i),c&&c.m(t,null),o(t,l),o(t,k),o(k,b),v||(g=ze(k,"click",r[4]),v=!0)},p(h,x){f!==(f=s(h))&&(d.d(1),d=f(h),d&&(d.c(),d.m(a,null))),h[1]?c?c.p(h,x):(c=$e(h),c.c(),c.m(t,l)):c&&(c.d(1),c=null)},d(h){h&&n(t),d.d(),c&&c.d(),v=!1,g()}}}function rt(r){let t,a;return{c(){t=p("span"),a=X("New content available, click on reload button to update.")},l(i){t=u(i,"SPAN",{});var l=y(t);a=Y(l,"New content available, click on reload button to update."),l.forEach(n)},m(i,l){M(i,t,l),o(t,a)},d(i){i&&n(t)}}}function it(r){let t,a;return{c(){t=p("span"),a=X("App ready to work offline")},l(i){t=u(i,"SPAN",{});var l=y(t);a=Y(l,"App ready to work offline"),l.forEach(n)},m(i,l){M(i,t,l),o(t,a)},d(i){i&&n(t)}}}function $e(r){let t,a,i,l;return{c(){t=p("button"),a=X("Reload"),this.h()},l(k){t=u(k,"BUTTON",{class:!0});var b=y(t);a=Y(b,"Reload"),b.forEach(n),this.h()},h(){e(t,"class","svelte-1q69697")},m(k,b){M(k,t,b),o(t,a),i||(l=ze(t,"click",r[3]),i=!0)},p:se,d(k){k&&n(t),i=!1,l()}}}function nt(r){let t,a=r[2]&&Pe(r);return{c(){a&&a.c(),t=Ue()},l(i){a&&a.l(i),t=Ue()},m(i,l){a&&a.m(i,l),M(i,t,l)},p(i,[l]){i[2]?a?a.p(i,l):(a=Pe(i),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null)},i:se,o:se,d(i){a&&a.d(i),i&&n(t)}}}function ot(r,t,a){let i,l,k,b=!1,v=!1;function g(d){a(1,v=!0)}function s(){l&&l.addEventListener("controlling",d=>{d.isUpdate&&window.location.reload()}),k&&k.waiting&&xe(k.waiting,{type:"SKIP_WAITING"}).then(()=>{}).catch(d=>{console.error("NOTIFIED SKIP_WAITING WITH ERROR",d)})}function f(){a(0,b=!1),a(1,v=!1)}return"serviceWorker"in navigator?(l=new at("/service-worker.js",{scope:"/"}),l.addEventListener("activated",d=>{d.isUpdate||a(0,b=!0)}),l.addEventListener("waiting",g),l.addEventListener("externalwaiting",g),l.register({immediate:!0}).then(d=>k=d).catch(d=>{console.error("cannot register service worker",d)})):console.warn("Service workers are not supported."),r.$$.update=()=>{r.$$.dirty&3&&a(2,i=b||v)},[b,v,i,s,f]}class lt extends _e{constructor(t){super(),ye(this,t,ot,nt,Ee,{})}}function st(r){let t,a,i,l,k,b,v,g,s,f,d,c,h,x,L,E,U,T,W,j,N,C,R,F,S,B,K,I,q,D,H,A,G,O,V,te,Z,ae,J,Q,ie,ee,he,me,de,re,ne;V=new Qe({});const ve=r[1].default,P=Ce(ve,r,r[0],null);return re=new lt({}),{c(){t=p("link"),a=p("link"),i=p("meta"),l=p("meta"),k=p("link"),b=p("meta"),v=p("meta"),g=p("link"),s=p("link"),f=p("link"),d=p("link"),c=p("link"),h=p("link"),x=p("link"),L=p("link"),E=p("link"),U=p("link"),T=p("link"),W=p("link"),j=p("link"),N=p("link"),C=p("link"),R=p("link"),F=p("link"),S=p("link"),B=p("link"),K=p("link"),I=p("link"),q=p("link"),D=p("link"),H=p("link"),A=p("link"),G=p("link"),O=$(),je(V.$$.fragment),te=$(),Z=p("main"),P&&P.c(),ae=$(),J=p("footer"),Q=p("p"),ie=X("visit "),ee=p("a"),he=X("kit.svelte.dev"),me=X(" to learn SvelteKit"),de=$(),je(re.$$.fragment),this.h()},l(w){const m=Re('[data-svelte="svelte-qoiy54"]',document.head);t=u(m,"LINK",{rel:!0,href:!0}),a=u(m,"LINK",{rel:!0,href:!0}),i=u(m,"META",{name:!0,content:!0}),l=u(m,"META",{name:!0,content:!0}),k=u(m,"LINK",{rel:!0,href:!0}),b=u(m,"META",{name:!0,content:!0}),v=u(m,"META",{name:!0,content:!0}),g=u(m,"LINK",{rel:!0,href:!0,media:!0}),s=u(m,"LINK",{rel:!0,href:!0,media:!0}),f=u(m,"LINK",{rel:!0,href:!0,media:!0}),d=u(m,"LINK",{rel:!0,href:!0,media:!0}),c=u(m,"LINK",{rel:!0,href:!0,media:!0}),h=u(m,"LINK",{rel:!0,href:!0,media:!0}),x=u(m,"LINK",{rel:!0,href:!0,media:!0}),L=u(m,"LINK",{rel:!0,href:!0,media:!0}),E=u(m,"LINK",{rel:!0,href:!0,media:!0}),U=u(m,"LINK",{rel:!0,href:!0,media:!0}),T=u(m,"LINK",{rel:!0,href:!0,media:!0}),W=u(m,"LINK",{rel:!0,href:!0,media:!0}),j=u(m,"LINK",{rel:!0,href:!0,media:!0}),N=u(m,"LINK",{rel:!0,href:!0,media:!0}),C=u(m,"LINK",{rel:!0,href:!0,media:!0}),R=u(m,"LINK",{rel:!0,href:!0,media:!0}),F=u(m,"LINK",{rel:!0,href:!0,media:!0}),S=u(m,"LINK",{rel:!0,href:!0,media:!0}),B=u(m,"LINK",{rel:!0,href:!0,media:!0}),K=u(m,"LINK",{rel:!0,href:!0,media:!0}),I=u(m,"LINK",{rel:!0,href:!0,media:!0}),q=u(m,"LINK",{rel:!0,href:!0,media:!0}),D=u(m,"LINK",{rel:!0,href:!0,media:!0}),H=u(m,"LINK",{rel:!0,href:!0,media:!0}),A=u(m,"LINK",{rel:!0,href:!0,media:!0}),G=u(m,"LINK",{rel:!0,href:!0,media:!0}),m.forEach(n),O=z(w),Ne(V.$$.fragment,w),te=z(w),Z=u(w,"MAIN",{class:!0});var qe=y(Z);P&&P.l(qe),qe.forEach(n),ae=z(w),J=u(w,"FOOTER",{class:!0});var Le=y(J);Q=u(Le,"P",{});var ce=y(Q);ie=Y(ce,"visit "),ee=u(ce,"A",{href:!0,class:!0});var Ie=y(ee);he=Y(Ie,"kit.svelte.dev"),Ie.forEach(n),me=Y(ce," to learn SvelteKit"),ce.forEach(n),Le.forEach(n),de=z(w),Ne(re.$$.fragment,w),this.h()},h(){e(t,"rel","manifest"),e(t,"href","/manifest.webmanifest"),e(a,"rel","apple-touch-icon"),e(a,"href","/apple-icon-180.png"),e(i,"name","description"),e(i,"content","This is a Svelte-Kit PWA skeleton app based on the regular Svelte-kit app."),e(l,"name","apple-mobile-web-app-capable"),e(l,"content","yes"),e(k,"rel","apple-touch-icon"),e(k,"href","/pwa-192x192.png"),e(b,"name","msapplication-TileColor"),e(b,"content","#00aba9"),e(v,"name","theme-color"),e(v,"content","#ffffff"),e(g,"rel","apple-touch-startup-image"),e(g,"href","/apple-splash-2048-2732.jpg"),e(g,"media","(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(s,"rel","apple-touch-startup-image"),e(s,"href","/apple-splash-2732-2048.jpg"),e(s,"media","(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(f,"rel","apple-touch-startup-image"),e(f,"href","/apple-splash-1668-2388.jpg"),e(f,"media","(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(d,"rel","apple-touch-startup-image"),e(d,"href","/apple-splash-2388-1668.jpg"),e(d,"media","(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(c,"rel","apple-touch-startup-image"),e(c,"href","/apple-splash-1536-2048.jpg"),e(c,"media","(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(h,"rel","apple-touch-startup-image"),e(h,"href","/apple-splash-2048-1536.jpg"),e(h,"media","(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(x,"rel","apple-touch-startup-image"),e(x,"href","/apple-splash-1668-2224.jpg"),e(x,"media","(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(L,"rel","apple-touch-startup-image"),e(L,"href","/apple-splash-2224-1668.jpg"),e(L,"media","(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(E,"rel","apple-touch-startup-image"),e(E,"href","/apple-splash-1620-2160.jpg"),e(E,"media","(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(U,"rel","apple-touch-startup-image"),e(U,"href","/apple-splash-2160-1620.jpg"),e(U,"media","(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(T,"rel","apple-touch-startup-image"),e(T,"href","/apple-splash-1284-2778.jpg"),e(T,"media","(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"),e(W,"rel","apple-touch-startup-image"),e(W,"href","/apple-splash-2778-1284.jpg"),e(W,"media","(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"),e(j,"rel","apple-touch-startup-image"),e(j,"href","/apple-splash-1170-2532.jpg"),e(j,"media","(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"),e(N,"rel","apple-touch-startup-image"),e(N,"href","/apple-splash-2532-1170.jpg"),e(N,"media","(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"),e(C,"rel","apple-touch-startup-image"),e(C,"href","/apple-splash-1125-2436.jpg"),e(C,"media","(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"),e(R,"rel","apple-touch-startup-image"),e(R,"href","/apple-splash-2436-1125.jpg"),e(R,"media","(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"),e(F,"rel","apple-touch-startup-image"),e(F,"href","/apple-splash-1242-2688.jpg"),e(F,"media","(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"),e(S,"rel","apple-touch-startup-image"),e(S,"href","/apple-splash-2688-1242.jpg"),e(S,"media","(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"),e(B,"rel","apple-touch-startup-image"),e(B,"href","/apple-splash-828-1792.jpg"),e(B,"media","(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(K,"rel","apple-touch-startup-image"),e(K,"href","/apple-splash-1792-828.jpg"),e(K,"media","(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(I,"rel","apple-touch-startup-image"),e(I,"href","/apple-splash-1242-2208.jpg"),e(I,"media","(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"),e(q,"rel","apple-touch-startup-image"),e(q,"href","/apple-splash-2208-1242.jpg"),e(q,"media","(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"),e(D,"rel","apple-touch-startup-image"),e(D,"href","/apple-splash-750-1334.jpg"),e(D,"media","(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(H,"rel","apple-touch-startup-image"),e(H,"href","/apple-splash-1334-750.jpg"),e(H,"media","(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(A,"rel","apple-touch-startup-image"),e(A,"href","/apple-splash-640-1136.jpg"),e(A,"media","(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"),e(G,"rel","apple-touch-startup-image"),e(G,"href","/apple-splash-1136-640.jpg"),e(G,"media","(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"),e(Z,"class","svelte-1izrdc8"),e(ee,"href","https://kit.svelte.dev"),e(ee,"class","svelte-1izrdc8"),e(J,"class","svelte-1izrdc8")},m(w,m){o(document.head,t),o(document.head,a),o(document.head,i),o(document.head,l),o(document.head,k),o(document.head,b),o(document.head,v),o(document.head,g),o(document.head,s),o(document.head,f),o(document.head,d),o(document.head,c),o(document.head,h),o(document.head,x),o(document.head,L),o(document.head,E),o(document.head,U),o(document.head,T),o(document.head,W),o(document.head,j),o(document.head,N),o(document.head,C),o(document.head,R),o(document.head,F),o(document.head,S),o(document.head,B),o(document.head,K),o(document.head,I),o(document.head,q),o(document.head,D),o(document.head,H),o(document.head,A),o(document.head,G),M(w,O,m),Fe(V,w,m),M(w,te,m),M(w,Z,m),P&&P.m(Z,null),M(w,ae,m),M(w,J,m),o(J,Q),o(Q,ie),o(Q,ee),o(ee,he),o(Q,me),M(w,de,m),Fe(re,w,m),ne=!0},p(w,[m]){P&&P.p&&(!ne||m&1)&&Be(P,ve,w,w[0],ne?De(ve,w[0],m,null):Oe(w[0]),null)},i(w){ne||(ge(V.$$.fragment,w),ge(P,w),ge(re.$$.fragment,w),ne=!0)},o(w){we(V.$$.fragment,w),we(P,w),we(re.$$.fragment,w),ne=!1},d(w){n(t),n(a),n(i),n(l),n(k),n(b),n(v),n(g),n(s),n(f),n(d),n(c),n(h),n(x),n(L),n(E),n(U),n(T),n(W),n(j),n(N),n(C),n(R),n(F),n(S),n(B),n(K),n(I),n(q),n(D),n(H),n(A),n(G),w&&n(O),Se(V,w),w&&n(te),w&&n(Z),P&&P.d(w),w&&n(ae),w&&n(J),w&&n(de),Se(re,w)}}}function dt(r,t,a){let{$$slots:i={},$$scope:l}=t;return r.$$set=k=>{"$$scope"in k&&a(0,l=k.$$scope)},[l,i]}class pt extends _e{constructor(t){super(),ye(this,t,dt,st,Ee,{})}}export{pt as default};