import{s as ue,a as D,f as i,l as U,D as fe,d as c,c as N,g as u,h as p,A as se,m as O,j as s,k as le,i as ne,x as a,H as re,y as Z,I as de}from"../chunks/scheduler.f7157b54.js";import{S as me,i as pe,a as R,t as x,c as _e,b as he,d as be,m as ve,e as ge,g as Ie}from"../chunks/index.0c0c8d6a.js";import{b as ye,e as Ee}from"../chunks/AlertBar.d1fe7d26.js";import{b as oe}from"../chunks/index.1926c527.js";import{g as ie}from"../chunks/index.14d8352b.js";function ce(o){let r,e;return r=new ye({props:{icon:"bi bi-exclamation-triangle-fill",text:o[1]}}),{c(){he(r.$$.fragment)},l(t){be(r.$$.fragment,t)},m(t,_){ve(r,t,_),e=!0},p(t,_){const h={};_&2&&(h.text=t[1]),r.$set(h)},i(t){e||(R(r.$$.fragment,t),e=!0)},o(t){x(r.$$.fragment,t),e=!1},d(t){ge(r,t)}}}function Ce(o){let r,e,t,_='<h1 class="text-center">Choose a name for your PocketBase app.</h1>',h,f,I,T='<label for="instance-name" class="col-form-label">Instance Name:</label>',A,b,d,B,m,H,q,w,k,z,F,G,L,E,y,J,K,v,Q,S,P,W,$,l=o[1]&&ce(o);return{c(){r=D(),e=i("div"),t=i("div"),t.innerHTML=_,h=D(),f=i("div"),I=i("div"),I.innerHTML=T,A=D(),b=i("div"),d=i("input"),B=D(),m=i("button"),H=i("i"),q=D(),w=i("div"),k=i("span"),z=U("."),F=U(oe),G=D(),l&&l.c(),L=D(),E=i("div"),y=i("a"),J=U("Cancel"),K=D(),v=i("button"),Q=U("Create "),S=i("i"),this.h()},l(n){fe("svelte-yenslj",document.head).forEach(c),r=N(n),e=u(n,"DIV",{class:!0});var C=p(e);t=u(C,"DIV",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-1ffi8mj"&&(t.innerHTML=_),h=N(C),f=u(C,"DIV",{class:!0});var V=p(f);I=u(V,"DIV",{class:!0,"data-svelte-h":!0}),se(I)!=="svelte-1nd1gz2"&&(I.innerHTML=T),A=N(V),b=u(V,"DIV",{class:!0});var M=p(b);d=u(M,"INPUT",{type:!0,id:!0,class:!0}),B=N(M),m=u(M,"BUTTON",{"aria-label":!0,type:!0,style:!0,class:!0});var ee=p(m);H=u(ee,"I",{class:!0}),p(H).forEach(c),ee.forEach(c),M.forEach(c),q=N(V),w=u(V,"DIV",{class:!0});var te=p(w);k=u(te,"SPAN",{class:!0});var X=p(k);z=O(X,"."),F=O(X,oe),X.forEach(c),te.forEach(c),V.forEach(c),G=N(C),l&&l.l(C),L=N(C),E=u(C,"DIV",{class:!0});var j=p(E);y=u(j,"A",{href:!0,class:!0,disabled:!0});var ae=p(y);J=O(ae,"Cancel"),ae.forEach(c),K=N(j),v=u(j,"BUTTON",{class:!0});var Y=p(v);Q=O(Y,"Create "),S=u(Y,"I",{class:!0}),p(S).forEach(c),Y.forEach(c),j.forEach(c),C.forEach(c),this.h()},h(){document.title="New Instance - PocketHost",s(t,"class","py-4"),s(I,"class","col-auto"),s(d,"type","text"),s(d,"id","instance-name"),s(d,"class","form-control"),s(H,"class","bi bi-arrow-repeat"),s(m,"aria-label","Regenerate Instance Name"),s(m,"type","button"),le(m,"transform","rotate("+o[2]+"deg)"),s(m,"class","btn btn-light rounded-circle regenerate-instance-name-btn svelte-1cgl37g"),s(b,"class","col-auto pe-1 position-relative"),s(k,"class","form-text"),s(w,"class","col-auto ps-0"),s(f,"class","row g-3 align-items-center justify-content-center mb-4"),s(y,"href","/dashboard"),s(y,"class","btn btn-light"),s(y,"disabled",o[3]),s(S,"class","bi bi-arrow-right-short"),s(v,"class","btn btn-primary"),v.disabled=o[3],s(E,"class","text-center"),s(e,"class","container svelte-1cgl37g")},m(n,g){ne(n,r,g),ne(n,e,g),a(e,t),a(e,h),a(e,f),a(f,I),a(f,A),a(f,b),a(b,d),re(d,o[0]),a(b,B),a(b,m),a(m,H),a(f,q),a(f,w),a(w,k),a(k,z),a(k,F),a(e,G),l&&l.m(e,null),a(e,L),a(e,E),a(E,y),a(y,J),a(E,K),a(E,v),a(v,Q),a(v,S),P=!0,W||($=[Z(d,"input",o[7]),Z(m,"click",o[4]),Z(v,"click",o[5])],W=!0)},p(n,[g]){g&1&&d.value!==n[0]&&re(d,n[0]),(!P||g&4)&&le(m,"transform","rotate("+n[2]+"deg)"),n[1]?l?(l.p(n,g),g&2&&R(l,1)):(l=ce(n),l.c(),R(l,1),l.m(e,L)):l&&(Ie(),x(l,1,1,()=>{l=null}),_e()),(!P||g&8)&&s(y,"disabled",n[3]),(!P||g&8)&&(v.disabled=n[3])},i(n){P||(R(l),P=!0)},o(n){x(l),P=!1},d(n){n&&(c(r),c(e)),l&&l.d(),W=!1,de($)}}}function De(o,r,e){let t=ie(2),_="",h=0,f=!0;const I=()=>{e(2,h=h+180),e(0,t=ie(2))};let T=!1;const A=async d=>{d.preventDefault(),e(6,T=!0),e(1,_=""),await Ee(t,B=>{e(1,_=B)}).finally(()=>{e(6,T=!1)})};function b(){t=this.value,e(0,t)}return o.$$.update=()=>{o.$$.dirty&65&&e(3,f=t.length===0||T)},[t,_,h,f,I,A,T,b]}class Ve extends me{constructor(r){super(),pe(this,r,De,Ce,ue,{})}}export{Ve as component};
