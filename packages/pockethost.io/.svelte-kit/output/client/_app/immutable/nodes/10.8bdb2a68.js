import{s as Y,a as x,f as h,l as z,D as G,d as b,c as k,g as v,h as C,A as V,m as J,j as u,i as F,x as c,H as L,y as O,I as K,C as Q}from"../chunks/scheduler.f7157b54.js";import{S as W,i as X,a as j,t as H,c as Z,b as $,d as ee,m as te,e as se,g as ae}from"../chunks/index.0c0c8d6a.js";import{p as re}from"../chunks/stores.7cf961d7.js";import{b as oe,j as le}from"../chunks/AlertBar.d1fe7d26.js";function M(i){let r,s;return r=new oe({props:{icon:"bi bi-exclamation-triangle-fill",text:i[1]}}),{c(){$(r.$$.fragment)},l(e){ee(r.$$.fragment,e)},m(e,a){te(r,e,a),s=!0},p(e,a){const _={};a&2&&(_.text=e[1]),r.$set(_)},i(e){s||(j(r.$$.fragment,e),s=!0)},o(e){H(r.$$.fragment,e),s=!1},d(e){se(r,e)}}}function ne(i){let r,s,e,a,_="New Password",w,o,f,n,m,d,R="New Password",q,D,p,B,E,P,N,T,t=i[1]&&M(i);return{c(){r=x(),s=h("div"),e=h("div"),a=h("h2"),a.textContent=_,w=x(),o=h("form"),f=h("div"),n=h("input"),m=x(),d=h("label"),d.textContent=R,q=x(),t&&t.c(),D=x(),p=h("button"),B=z("Save "),E=h("i"),this.h()},l(l){G("svelte-1at4xjh",document.head).forEach(b),r=k(l),s=v(l,"DIV",{class:!0});var U=C(s);e=v(U,"DIV",{class:!0});var I=C(e);a=v(I,"H2",{class:!0,"data-svelte-h":!0}),V(a)!=="svelte-jq8iyi"&&(a.textContent=_),w=k(I),o=v(I,"FORM",{});var y=C(o);f=v(y,"DIV",{class:!0});var S=C(f);n=v(S,"INPUT",{type:!0,class:!0,id:!0,placeholder:!0,autocomplete:!0}),m=k(S),d=v(S,"LABEL",{for:!0,"data-svelte-h":!0}),V(d)!=="svelte-1fqrm48"&&(d.textContent=R),S.forEach(b),q=k(y),t&&t.l(y),D=k(y),p=v(y,"BUTTON",{type:!0,class:!0});var A=C(p);B=J(A,"Save "),E=v(A,"I",{class:!0}),C(E).forEach(b),A.forEach(b),y.forEach(b),I.forEach(b),U.forEach(b),this.h()},h(){document.title="Reset Your Password - PocketHost",u(a,"class","mb-4"),u(n,"type","password"),u(n,"class","form-control"),u(n,"id","password"),u(n,"placeholder","Password"),n.required=!0,u(n,"autocomplete","password"),u(d,"for","password"),u(f,"class","form-floating mb-3"),u(E,"class","bi bi-arrow-right-short"),u(p,"type","submit"),u(p,"class","btn btn-primary w-100"),p.disabled=i[2],u(e,"class","card svelte-1xtwgc3"),u(s,"class","page-bg svelte-1xtwgc3")},m(l,g){F(l,r,g),F(l,s,g),c(s,e),c(e,a),c(e,w),c(e,o),c(o,f),c(f,n),L(n,i[0]),c(f,m),c(f,d),c(o,q),t&&t.m(o,null),c(o,D),c(o,p),c(p,B),c(p,E),P=!0,N||(T=[O(n,"input",i[5]),O(o,"submit",i[3])],N=!0)},p(l,[g]){g&1&&n.value!==l[0]&&L(n,l[0]),l[1]?t?(t.p(l,g),g&2&&j(t,1)):(t=M(l),t.c(),j(t,1),t.m(o,D)):t&&(ae(),H(t,1,1,()=>{t=null}),Z()),(!P||g&4)&&(p.disabled=l[2])},i(l){P||(j(t),P=!0)},o(l){H(t),P=!1},d(l){l&&(b(r),b(s)),t&&t.d(),N=!1,K(T)}}}function ie(i,r,s){let e;Q(i,re,m=>s(4,e=m));let a="",_="",w="",o=!0;const f=async m=>{m.preventDefault(),s(2,o=!0),_&&(await le(_,a,d=>{s(1,w=d)}),s(2,o=!1))};function n(){a=this.value,s(0,a)}return i.$$.update=()=>{var m,d;i.$$.dirty&16&&(_=(d=(m=e==null?void 0:e.url)==null?void 0:m.searchParams)==null?void 0:d.get("token")),i.$$.dirty&1&&s(2,o=a.length===0)},[a,w,o,f,e,n]}class me extends W{constructor(r){super(),X(this,r,ie,ne,Y,{})}}export{me as component};
