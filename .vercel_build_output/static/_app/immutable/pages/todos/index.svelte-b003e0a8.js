import{W as G,S as de,i as ue,s as ce,e as g,k as T,c as b,a as O,m as H,d as w,b as a,J as ae,g as Q,K as c,X as $,Y as pe,Z as he,_ as ve,$ as fe,a0 as se,V as me,t as _e,O as ge,h as be,a1 as ke,p as we,q as ye,o as Ee,n as xe,a2 as Ce,E as Me}from"../../chunks/index-14ffccfa.js";import{c as A}from"../../chunks/singletons-d1fb5791.js";function ie(i){const e=i-1;return e*e*e+1}A.disable_scroll_handling;A.goto;const Te=A.invalidate;A.prefetch;A.prefetch_routes;A.before_navigate;A.after_navigate;function z(i,{pending:e,error:t,result:n}={}){let p;async function _(v){const l=p={};v.preventDefault();const d=new FormData(i);e&&e({data:d,form:i});try{const h=await fetch(i.action,{method:i.method,headers:{accept:"application/json"},body:d});if(l!==p)return;if(h.ok){n&&n({data:d,form:i,response:h});const o=new URL(i.action);o.search=o.hash="",Te(o.href)}else t?t({data:d,form:i,error:null,response:h}):console.error(await h.text())}catch(h){if(t&&h instanceof Error)t({data:d,form:i,error:h,response:null});else throw h}}return i.addEventListener("submit",_),{destroy(){i.removeEventListener("submit",_)}}}function oe(i,{delay:e=0,duration:t=400,easing:n=ie,start:p=0,opacity:_=0}={}){const v=getComputedStyle(i),l=+v.opacity,d=v.transform==="none"?"":v.transform,h=1-p,o=l*(1-_);return{delay:e,duration:t,easing:n,css:(x,y)=>`
			transform: ${d} scale(${1-h*y});
			opacity: ${l-o*y}
		`}}function He(i,{from:e,to:t},n={}){const p=getComputedStyle(i),_=p.transform==="none"?"":p.transform,[v,l]=p.transformOrigin.split(" ").map(parseFloat),d=e.left+e.width*v/t.width-(t.left+v),h=e.top+e.height*l/t.height-(t.top+l),{delay:o=0,duration:x=C=>Math.sqrt(C)*120,easing:y=ie}=n;return{delay:o,duration:G(x)?x(Math.sqrt(d*d+h*h)):x,easing:y,css:(C,f)=>{const k=f*d,U=f*h,r=C+f*e.width/t.width,s=C+f*e.height/t.height;return`transform: ${_} translate(${k}px, ${U}px) scale(${r}, ${s});`}}}function le(i,e,t){const n=i.slice();return n[3]=e[t],n[4]=e,n[5]=t,n}function re(i,e){let t,n,p,_,v,l,d,h,o,x,y,C,f,k,U,r,s,u,B,j,P,V,N,R,J,I,q,S,K,L,W,X=Me,M,Y,ee;function te(...E){return e[1](e[3],e[4],e[5],...E)}function ne(){return e[2](e[3],e[4],e[5])}return{key:i,first:null,c(){t=g("div"),n=g("form"),p=g("input"),v=T(),l=g("input"),h=T(),o=g("button"),C=T(),f=g("form"),k=g("input"),r=T(),s=g("input"),B=T(),j=g("button"),P=T(),V=g("form"),N=g("input"),J=T(),I=g("button"),K=T(),this.h()},l(E){t=b(E,"DIV",{class:!0});var m=O(t);n=b(m,"FORM",{action:!0,method:!0});var D=O(n);p=b(D,"INPUT",{type:!0,name:!0,class:!0}),v=H(D),l=b(D,"INPUT",{type:!0,name:!0,class:!0}),h=H(D),o=b(D,"BUTTON",{class:!0,"aria-label":!0}),O(o).forEach(w),D.forEach(w),C=H(m),f=b(m,"FORM",{class:!0,action:!0,method:!0});var F=O(f);k=b(F,"INPUT",{type:!0,name:!0,class:!0}),r=H(F),s=b(F,"INPUT",{"aria-label":!0,type:!0,name:!0,class:!0}),B=H(F),j=b(F,"BUTTON",{class:!0,"aria-label":!0}),O(j).forEach(w),F.forEach(w),P=H(m),V=b(m,"FORM",{action:!0,method:!0});var Z=O(V);N=b(Z,"INPUT",{type:!0,name:!0,class:!0}),J=H(Z),I=b(Z,"BUTTON",{class:!0,"aria-label":!0}),O(I).forEach(w),Z.forEach(w),K=H(m),m.forEach(w),this.h()},h(){a(p,"type","hidden"),a(p,"name","uid"),p.value=_=e[3].uid,a(p,"class","svelte-16nsat"),a(l,"type","hidden"),a(l,"name","done"),l.value=d=e[3].done?"":"true",a(l,"class","svelte-16nsat"),a(o,"class","toggle svelte-16nsat"),a(o,"aria-label",x="Mark todo as "+(e[3].done?"not done":"done")),a(n,"action","/todos?_method=PATCH"),a(n,"method","post"),a(k,"type","hidden"),a(k,"name","uid"),k.value=U=e[3].uid,a(k,"class","svelte-16nsat"),a(s,"aria-label","Edit todo"),a(s,"type","text"),a(s,"name","text"),s.value=u=e[3].text,a(s,"class","svelte-16nsat"),a(j,"class","save svelte-16nsat"),a(j,"aria-label","Save todo"),a(f,"class","text svelte-16nsat"),a(f,"action","/todos?_method=PATCH"),a(f,"method","post"),a(N,"type","hidden"),a(N,"name","uid"),N.value=R=e[3].uid,a(N,"class","svelte-16nsat"),a(I,"class","delete svelte-16nsat"),a(I,"aria-label","Delete todo"),I.disabled=q=e[3].pending_delete,a(V,"action","/todos?_method=DELETE"),a(V,"method","post"),a(t,"class","todo svelte-16nsat"),ae(t,"done",e[3].done),this.first=t},m(E,m){Q(E,t,m),c(t,n),c(n,p),c(n,v),c(n,l),c(n,h),c(n,o),c(t,C),c(t,f),c(f,k),c(f,r),c(f,s),c(f,B),c(f,j),c(t,P),c(t,V),c(V,N),c(V,J),c(V,I),c(t,K),M=!0,Y||(ee=[$(y=z.call(null,n,{pending:te})),$(z.call(null,f)),$(S=z.call(null,V,{pending:ne}))],Y=!0)},p(E,m){e=E,(!M||m&1&&_!==(_=e[3].uid))&&(p.value=_),(!M||m&1&&d!==(d=e[3].done?"":"true"))&&(l.value=d),(!M||m&1&&x!==(x="Mark todo as "+(e[3].done?"not done":"done")))&&a(o,"aria-label",x),y&&G(y.update)&&m&1&&y.update.call(null,{pending:te}),(!M||m&1&&U!==(U=e[3].uid))&&(k.value=U),(!M||m&1&&u!==(u=e[3].text)&&s.value!==u)&&(s.value=u),(!M||m&1&&R!==(R=e[3].uid))&&(N.value=R),(!M||m&1&&q!==(q=e[3].pending_delete))&&(I.disabled=q),S&&G(S.update)&&m&1&&S.update.call(null,{pending:ne}),m&1&&ae(t,"done",e[3].done)},r(){W=t.getBoundingClientRect()},f(){pe(t),X(),he(t,W)},a(){X(),X=ve(t,W,He,{duration:200})},i(E){M||(E&&fe(()=>{L||(L=se(t,oe,{start:.7},!0)),L.run(1)}),M=!0)},o(E){E&&(L||(L=se(t,oe,{start:.7},!1)),L.run(0)),M=!1},d(E){E&&w(t),E&&L&&L.end(),Y=!1,me(ee)}}}function Ve(i){let e,t,n,p,_,v,l,d,h,o=[],x=new Map,y,C,f,k=i[0];const U=r=>r[3].uid;for(let r=0;r<k.length;r+=1){let s=le(i,k,r),u=U(s);x.set(u,o[r]=re(u,s))}return{c(){e=g("meta"),t=T(),n=g("div"),p=g("h1"),_=_e("Todos"),v=T(),l=g("form"),d=g("input"),h=T();for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){const s=ge('[data-svelte="svelte-aw2gey"]',document.head);e=b(s,"META",{name:!0,content:!0}),s.forEach(w),t=H(r),n=b(r,"DIV",{class:!0});var u=O(n);p=b(u,"H1",{});var B=O(p);_=be(B,"Todos"),B.forEach(w),v=H(u),l=b(u,"FORM",{class:!0,action:!0,method:!0});var j=O(l);d=b(j,"INPUT",{name:!0,"aria-label":!0,placeholder:!0,class:!0}),j.forEach(w),h=H(u);for(let P=0;P<o.length;P+=1)o[P].l(u);u.forEach(w),this.h()},h(){document.title="Todos",a(e,"name","description"),a(e,"content","A todo list app"),a(d,"name","text"),a(d,"aria-label","Add todo"),a(d,"placeholder","+ tap to add a todo"),a(d,"class","svelte-16nsat"),a(l,"class","new svelte-16nsat"),a(l,"action","/todos"),a(l,"method","post"),a(n,"class","todos svelte-16nsat")},m(r,s){c(document.head,e),Q(r,t,s),Q(r,n,s),c(n,p),c(p,_),c(n,v),c(n,l),c(l,d),c(n,h);for(let u=0;u<o.length;u+=1)o[u].m(n,null);y=!0,C||(f=$(z.call(null,l,{result:Oe})),C=!0)},p(r,[s]){if(s&1){k=r[0],xe();for(let u=0;u<o.length;u+=1)o[u].r();o=ke(o,s,U,1,r,k,x,n,Ce,re,null,le);for(let u=0;u<o.length;u+=1)o[u].a();we()}},i(r){if(!y){for(let s=0;s<k.length;s+=1)ye(o[s]);y=!0}},o(r){for(let s=0;s<o.length;s+=1)Ee(o[s]);y=!1},d(r){w(e),r&&w(t),r&&w(n);for(let s=0;s<o.length;s+=1)o[s].d();C=!1,f()}}}const Oe=async({form:i})=>{i.reset()};function Ue(i,e,t){let{todos:n}=e;const p=(v,l,d,{data:h})=>{t(0,l[d].done=!!h.get("done"),n)},_=(v,l,d)=>t(0,l[d].pending_delete=!0,n);return i.$$set=v=>{"todos"in v&&t(0,n=v.todos)},[n,p,_]}class Ie extends de{constructor(e){super(),ue(this,e,Ue,Ve,ce,{todos:0})}}export{Ie as default};
