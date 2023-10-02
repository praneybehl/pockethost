import{s as Ee,a as C,D as Ie,d as v,c as E,i as H,C as De,o as ke,E as Me,f as _,g as m,h as $,j as d,x as c,G as je,A as G,T as we,l as P,m as V,B as xe,n as W}from"../chunks/scheduler.f7157b54.js";import{S as Pe,i as Ve,b as ie,d as oe,m as ce,a as j,t as N,e as fe,g as Ae,c as Ce,f as He}from"../chunks/index.0c0c8d6a.js";import{e as _e,P as Se}from"../chunks/ProvisioningStatus.3d118cfd.js";import{A as Ne}from"../chunks/AuthStateGuard.8cf18fd7.js";import{R as Te,f as ye}from"../chunks/RetroBoxContainer.841a9f70.js";import{l as Be,d as ne,v as re,b as me}from"../chunks/index.1926c527.js";import{w as Le}from"../chunks/index.99927711.js";function pe(u,e,l){const r=u.slice();return r[5]=e[l],r}function ge(u){let e,l='<h1 class="text-center">Your Apps</h1>',r,s,h,f=_e(re(u[0])),t=[];for(let a=0;a<f.length;a+=1)t[a]=be(pe(u,f,a));const o=a=>N(t[a],1,1,()=>{t[a]=null});return{c(){e=_("div"),e.innerHTML=l,r=C(),s=_("div");for(let a=0;a<t.length;a+=1)t[a].c();this.h()},l(a){e=m(a,"DIV",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-mc6swp"&&(e.innerHTML=l),r=E(a),s=m(a,"DIV",{class:!0});var n=$(s);for(let i=0;i<t.length;i+=1)t[i].l(n);n.forEach(v),this.h()},h(){d(e,"class","py-4"),d(s,"class","row justify-content-center")},m(a,n){H(a,e,n),H(a,r,n),H(a,s,n);for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(s,null);h=!0},p(a,n){if(n&1){f=_e(re(a[0]));let i;for(i=0;i<f.length;i+=1){const b=pe(a,f,i);t[i]?(t[i].p(b,n),j(t[i],1)):(t[i]=be(b),t[i].c(),j(t[i],1),t[i].m(s,null))}for(Ae(),i=f.length;i<t.length;i+=1)o(i);Ce()}},i(a){if(!h){for(let n=0;n<f.length;n+=1)j(t[n]);h=!0}},o(a){t=t.filter(Boolean);for(let n=0;n<t.length;n+=1)N(t[n]);h=!1},d(a){a&&(v(e),v(r),v(s)),we(t,a)}}}function $e(u){let e,l="Maintenance Mode";return{c(){e=_("span"),e.textContent=l,this.h()},l(r){e=m(r,"SPAN",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-xqa21h"&&(e.textContent=l),this.h()},h(){d(e,"class","text-warning")},m(r,s){H(r,e,s)},d(r){r&&v(e)}}}function be(u){let e,l,r,s,h,f=Math.ceil(u[5].secondsThisMonth/60)+"",t,o,a,n,i=u[5].version+"",b,X,w,Z,T,L=u[5].subdomain+"",U,ee,x,D,q,te,y,ue="Details",Y,se,I,S,he,ae,B,de="Admin",R,le,k,g=u[5].maintenance&&$e();return w=new Se({props:{status:u[5].status}}),{c(){e=_("div"),l=_("div"),r=_("div"),s=_("div"),h=P("Usage: "),t=P(f),o=P(` mins
                  `),g&&g.c(),a=C(),n=_("div"),b=P(i),X=C(),ie(w.$$.fragment),Z=C(),T=_("h2"),U=P(L),ee=C(),x=_("div"),D=_("a"),q=_("i"),te=C(),y=_("span"),y.textContent=ue,se=C(),I=_("a"),S=_("img"),ae=C(),B=_("span"),B.textContent=de,le=C(),this.h()},l(p){e=m(p,"DIV",{class:!0});var A=$(e);l=m(A,"DIV",{class:!0});var M=$(l);r=m(M,"DIV",{class:!0});var z=$(r);s=m(z,"DIV",{class:!0});var F=$(s);h=V(F,"Usage: "),t=V(F,f),o=V(F,` mins
                  `),g&&g.l(F),F.forEach(v),a=E(z),n=m(z,"DIV",{class:!0});var O=$(n);b=V(O,i),X=E(O),oe(w.$$.fragment,O),O.forEach(v),z.forEach(v),Z=E(M),T=m(M,"H2",{class:!0});var ve=$(T);U=V(ve,L),ve.forEach(v),ee=E(M),x=m(M,"DIV",{class:!0});var J=$(x);D=m(J,"A",{href:!0,class:!0});var K=$(D);q=m(K,"I",{class:!0}),$(q).forEach(v),te=E(K),y=m(K,"SPAN",{"data-svelte-h":!0}),G(y)!=="svelte-17ve4f4"&&(y.textContent=ue),K.forEach(v),se=E(J),I=m(J,"A",{class:!0,href:!0,target:!0});var Q=$(I);S=m(Q,"IMG",{src:!0,alt:!0,class:!0}),ae=E(Q),B=m(Q,"SPAN",{"data-svelte-h":!0}),G(B)!=="svelte-bk0mpz"&&(B.textContent=de),Q.forEach(v),J.forEach(v),M.forEach(v),le=E(A),A.forEach(v),this.h()},h(){d(s,"class","server-status-minutes svelte-1jlvfgo"),d(n,"class","d-flex align-items-center gap-3 server-status-minutes svelte-1jlvfgo"),d(r,"class","server-status d-flex align-items-center justify-content-between svelte-1jlvfgo"),d(T,"class","mb-4 font-monospace"),d(q,"class","bi bi-gear-fill"),d(D,"href",Y=`/app/instances/${u[5].id}`),d(D,"class","btn btn-light"),xe(S.src,he="/images/pocketbase-logo.svg")||d(S,"src",he),d(S,"alt","PocketBase Logo"),d(S,"class","img-fluid svelte-1jlvfgo"),d(I,"class","btn btn-light pocketbase-button svelte-1jlvfgo"),d(I,"href",R=`https://${u[5].subdomain}.${me}/_`),d(I,"target","_blank"),d(x,"class","d-flex justify-content-around"),d(l,"class","card svelte-1jlvfgo"),d(e,"class","col-xl-4 col-md-6 col-12 mb-5")},m(p,A){H(p,e,A),c(e,l),c(l,r),c(r,s),c(s,h),c(s,t),c(s,o),g&&g.m(s,null),c(r,a),c(r,n),c(n,b),c(n,X),ce(w,n,null),c(l,Z),c(l,T),c(T,U),c(l,ee),c(l,x),c(x,D),c(D,q),c(D,te),c(D,y),c(x,se),c(x,I),c(I,S),c(I,ae),c(I,B),c(e,le),k=!0},p(p,A){(!k||A&1)&&f!==(f=Math.ceil(p[5].secondsThisMonth/60)+"")&&W(t,f),p[5].maintenance?g||(g=$e(),g.c(),g.m(s,null)):g&&(g.d(1),g=null),(!k||A&1)&&i!==(i=p[5].version+"")&&W(b,i);const M={};A&1&&(M.status=p[5].status),w.$set(M),(!k||A&1)&&L!==(L=p[5].subdomain+"")&&W(U,L),(!k||A&1&&Y!==(Y=`/app/instances/${p[5].id}`))&&d(D,"href",Y),(!k||A&1&&R!==(R=`https://${p[5].subdomain}.${me}/_`))&&d(I,"href",R)},i(p){k||(j(w.$$.fragment,p),k=!0)},o(p){N(w.$$.fragment,p),k=!1},d(p){p&&v(e),g&&g.d(),fe(w)}}}function qe(u){let e,l,r,s=u[1]?"First":"Next",h,f,t,o,a='<i class="bi bi-plus"></i> New App';return{c(){e=_("div"),l=_("h2"),r=P("Create Your "),h=P(s),f=P(" App"),t=C(),o=_("a"),o.innerHTML=a,this.h()},l(n){e=m(n,"DIV",{class:!0});var i=$(e);l=m(i,"H2",{class:!0});var b=$(l);r=V(b,"Create Your "),h=V(b,s),f=V(b," App"),b.forEach(v),t=E(i),o=m(i,"A",{href:!0,class:!0,"data-svelte-h":!0}),G(o)!=="svelte-aqt6rg"&&(o.innerHTML=a),i.forEach(v),this.h()},h(){d(l,"class","mb-4"),d(o,"href","/app/new"),d(o,"class","btn btn-primary btn-lg"),d(e,"class","px-lg-5")},m(n,i){H(n,e,i),c(e,l),c(l,r),c(l,h),c(l,f),c(e,t),c(e,o)},p(n,i){i&2&&s!==(s=n[1]?"First":"Next")&&W(h,s)},d(n){n&&v(e)}}}function Fe(u){let e,l,r,s,h,f,t=!u[1]&&ge(u);return s=new Te({props:{minHeight:u[1]?500:0,$$slots:{default:[qe]},$$scope:{ctx:u}}}),{c(){e=_("div"),t&&t.c(),l=C(),r=_("div"),ie(s.$$.fragment),this.h()},l(o){e=m(o,"DIV",{class:!0});var a=$(e);t&&t.l(a),l=E(a),r=m(a,"DIV",{class:!0});var n=$(r);oe(s.$$.fragment,n),n.forEach(v),a.forEach(v),this.h()},h(){d(r,"class","first-app-screen svelte-1jlvfgo"),d(e,"class","container")},m(o,a){H(o,e,a),t&&t.m(e,null),c(e,l),c(e,r),ce(s,r,null),f=!0},p(o,a){o[1]?t&&(Ae(),N(t,1,1,()=>{t=null}),Ce()):t?(t.p(o,a),a&2&&j(t,1)):(t=ge(o),t.c(),j(t,1),t.m(e,l));const n={};a&2&&(n.minHeight=o[1]?500:0),a&258&&(n.$$scope={dirty:a,ctx:o}),s.$set(n)},i(o){f||(j(t),j(s.$$.fragment,o),o&&(h||je(()=>{h=He(e,ye,{duration:30}),h.start()})),f=!0)},o(o){N(t),N(s.$$.fragment,o),f=!1},d(o){o&&v(e),t&&t.d(),fe(s)}}}function Ge(u){let e,l,r;return l=new Ne({props:{$$slots:{default:[Fe]},$$scope:{ctx:u}}}),{c(){e=C(),ie(l.$$.fragment),this.h()},l(s){Ie("svelte-1dvcujy",document.head).forEach(v),e=E(s),oe(l.$$.fragment,s),this.h()},h(){document.title="Dashboard - PocketHost"},m(s,h){H(s,e,h),ce(l,s,h),r=!0},p(s,[h]){const f={};h&259&&(f.$$scope={dirty:h,ctx:s}),l.$set(f)},i(s){r||(j(l.$$.fragment,s),r=!0)},o(s){N(l.$$.fragment,s),r=!1},d(s){s&&v(e),fe(l,s)}}}function Ue(u,e,l){let r,s;const{error:h}=Be(),f=Le({});return De(u,f,t=>l(0,s=t)),ke(()=>{(async()=>{const{getAllInstancesById:t}=ne(),o=await t();f.set(o),console.log({instances:o}),ne().client.collection("instances").subscribe("*",a=>{f.update(n=>(n[a.record.id]=a.record,n))})})().catch(h)}),Me(()=>{ne().client.collection("instances").unsubscribe("*").catch(h)}),u.$$.update=()=>{u.$$.dirty&1&&l(1,r=re(s).length===0)},[s,r,f]}class We extends Pe{constructor(e){super(),Ve(this,e,Ue,Ge,Ee,{})}}export{We as component};
