(this.webpackJsonpclicnfestbackofiice=this.webpackJsonpclicnfestbackofiice||[]).push([[0],{340:function(e,a,t){e.exports=t(493)},345:function(e,a,t){},493:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(12),l=t.n(c),o=(t(345),t(82)),s=t(572),u=t(571),m=t(281),i=t(254),E=t.n(i),f={login:function(e){var a=e.username,t=e.password,r=new Request("http://localhost:56407/api/Users/authenticate",{method:"POST",body:JSON.stringify({username:a,password:t}),headers:new Headers({"Content-Type":"application/json"})});return fetch(r).then((function(e){if(e.status<200||e.status>=300)throw new Error(e.statusText);return e.json()})).then((function(e){var a=e.token,t=E()(a);localStorage.setItem("token",a),localStorage.setItem("permissions",t.role)}))},logout:function(){return localStorage.removeItem("token"),localStorage.removeItem("permissions"),Promise.resolve()},checkError:function(e){},checkAuth:function(){return localStorage.getItem("token")?Promise.resolve():Promise.reject()},getPermissions:function(){var e=localStorage.getItem("permissions");return e?Promise.resolve(e):Promise.reject()}},d=t(577),h=t(551),p=t(573),b=t(574),w=t(560),g=t(561),v=t(562),j=t(563),O=t(578),P=t(583),y=t(575),D=t(567),k=t(568),x=t(75),I=t(581),S=t(305),C=(t(24),t(582)),q=t(570),A=function(e){return n.a.createElement(d.a,e,n.a.createElement(h.a,{source:"q",alwaysOn:!0}))},N=function(e){return n.a.createElement(p.a,Object.assign({},e,{filters:n.a.createElement(A,null),filterDefaultValues:{is_published:!0}}),n.a.createElement(b.a,{rowClick:"show"},n.a.createElement(w.a,{source:"id"}),n.a.createElement(w.a,{source:"note"}),n.a.createElement(g.a,{source:"creationDate"}),n.a.createElement(v.a,null),n.a.createElement(j.a,null),n.a.createElement(O.a,null)))},V=function(e){return n.a.createElement(P.a,e,n.a.createElement(y.a,null,n.a.createElement(D.a,{source:"note"}),n.a.createElement(k.a,{source:"creationDate"})))},_=function(e){var a=e.basePath,t=e.data;e.resource;return n.a.createElement(x.a,null,n.a.createElement(v.a,{basePath:a,record:t}))},J=function(e){return n.a.createElement(I.a,Object.assign({actions:n.a.createElement(_,null)},e),n.a.createElement(y.a,null,n.a.createElement(S.a,{source:"note"}),n.a.createElement(k.a,{source:"creationDate"})))},B=function(e){return n.a.createElement(C.a,e,n.a.createElement(q.a,null,n.a.createElement(w.a,{source:"id"}),n.a.createElement(w.a,{source:"note"}),n.a.createElement(g.a,{source:"creationDate"})))},L=function(e){return n.a.createElement(d.a,e,n.a.createElement(h.a,{source:"q",alwaysOn:!0}))},T=function(e){return n.a.createElement(p.a,Object.assign({},e,{filters:n.a.createElement(L,null),filterDefaultValues:{is_published:!0}}),n.a.createElement(b.a,{rowClick:"show"},n.a.createElement(w.a,{source:"id"}),n.a.createElement(w.a,{source:"name"}),n.a.createElement(w.a,{source:"prix"}),n.a.createElement(v.a,null),n.a.createElement(j.a,null),n.a.createElement(O.a,null)))},H=function(e){return n.a.createElement(P.a,e,n.a.createElement(y.a,null,n.a.createElement(S.a,{source:"name"}),n.a.createElement(D.a,{source:"prix"}),n.a.createElement(S.a,{multiline:!0,source:"description"})))},M=function(e){var a=e.basePath,t=e.data;e.resource;return n.a.createElement(x.a,null,n.a.createElement(v.a,{basePath:a,record:t}))},U=function(e){return n.a.createElement(I.a,Object.assign({actions:n.a.createElement(M,null)},e),n.a.createElement(y.a,null,n.a.createElement(S.a,{source:"name"}),n.a.createElement(D.a,{source:"prix"})))},W=function(e){return n.a.createElement(C.a,e,n.a.createElement(q.a,null,n.a.createElement(w.a,{source:"id"}),n.a.createElement(w.a,{source:"name"}),n.a.createElement(w.a,{source:"prix"}),n.a.createElement(w.a,{source:"description"})))},z=function(e){return n.a.createElement(d.a,e,n.a.createElement(h.a,{source:"q",alwaysOn:!0}))},F=function(e){return n.a.createElement(p.a,Object.assign({},e,{filters:n.a.createElement(z,null),filterDefaultValues:{is_published:!0}}),n.a.createElement(b.a,{rowClick:"show"},n.a.createElement(w.a,{source:"id"}),n.a.createElement(w.a,{source:"subject"}),n.a.createElement(g.a,{source:"creationDate"}),n.a.createElement(v.a,null),n.a.createElement(j.a,null),n.a.createElement(O.a,null)))},R=function(e){return n.a.createElement(P.a,e,n.a.createElement(y.a,null,n.a.createElement(S.a,{source:"subject"}),n.a.createElement(S.a,{multiline:!0,source:"body"})))},$=function(e){var a=e.basePath,t=e.data;e.resource;return n.a.createElement(x.a,null,n.a.createElement(v.a,{basePath:a,record:t}))},G=function(e){return n.a.createElement(I.a,Object.assign({actions:n.a.createElement($,null)},e),n.a.createElement(y.a,null,n.a.createElement(S.a,{source:"subject"}),n.a.createElement(S.a,{multiline:!0,source:"body"})))},K=function(e){return n.a.createElement(C.a,e,n.a.createElement(q.a,null,n.a.createElement(w.a,{source:"id"}),n.a.createElement(w.a,{source:"subject"}),n.a.createElement(w.a,{source:"body"}),n.a.createElement(g.a,{source:"creationDate"})))},Q=function(e){return n.a.createElement(d.a,e,n.a.createElement(h.a,{source:"q",alwaysOn:!0}))},X=function(e){return n.a.createElement(p.a,Object.assign({},e,{filters:n.a.createElement(Q,null),filterDefaultValues:{is_published:!0}}),n.a.createElement(b.a,{rowClick:"show"},n.a.createElement(w.a,{source:"userId"}),n.a.createElement(w.a,{source:"firstName"}),n.a.createElement(w.a,{source:"lastName"}),n.a.createElement(w.a,{source:"userName"}),n.a.createElement(w.a,{source:"role"}),n.a.createElement(v.a,null)))},Y=function(e){return n.a.createElement(C.a,e,n.a.createElement(q.a,null,n.a.createElement(w.a,{source:"userId"}),n.a.createElement(w.a,{source:"firstName"}),n.a.createElement(w.a,{source:"lastName"}),n.a.createElement(w.a,{source:"userName"}),n.a.createElement(w.a,{source:"role"}),n.a.createElement(w.a,{source:"email"}),n.a.createElement(w.a,{source:"password"})))},Z=t(280),ee=t(163),ae=t(301),te=t.n(ae),re=t(299),ne=t.n(re),ce=t(300),le=t.n(ce),oe=t(297),se=t.n(oe),ue=t(302),me=t.n(ue),ie=t(303),Ee=t(298),fe=t.n(Ee),de=t(283),he=t.n(de),pe=t(282),be=t.n(pe),we=function(e){return n.a.createElement(d.a,e,n.a.createElement(h.a,{source:"q",alwaysOn:!0}))},ge=function(e){return n.a.createElement(p.a,Object.assign({},e,{filters:n.a.createElement(we,null),filterDefaultValues:{is_published:!0}}),n.a.createElement(b.a,{rowClick:"show"},n.a.createElement(w.a,{source:"id"}),n.a.createElement(w.a,{source:"name"}),n.a.createElement(w.a,{source:"ville"}),n.a.createElement(w.a,{source:"capacite"}),n.a.createElement(w.a,{source:"prix"}),n.a.createElement(v.a,null),n.a.createElement(j.a,null),n.a.createElement(O.a,null)))},ve=function(e){return n.a.createElement(P.a,e,n.a.createElement(y.a,null,n.a.createElement(S.a,{source:"name"}),n.a.createElement(S.a,{source:"ville"}),n.a.createElement(D.a,{source:"capacite"}),n.a.createElement(D.a,{source:"prix"})))},je=function(e){var a=e.basePath,t=e.data;e.resource;return n.a.createElement(x.a,null,n.a.createElement(v.a,{basePath:a,record:t}))},Oe=function(e){return n.a.createElement(I.a,Object.assign({actions:n.a.createElement(je,null)},e),n.a.createElement(y.a,null,n.a.createElement(S.a,{source:"name"}),n.a.createElement(S.a,{source:"ville"}),n.a.createElement(D.a,{source:"capacite"}),n.a.createElement(D.a,{source:"prix"})))},Pe=function(e){return n.a.createElement(C.a,e,n.a.createElement(q.a,null,n.a.createElement(w.a,{source:"id"}),n.a.createElement(w.a,{source:"name"}),n.a.createElement(w.a,{source:"ville"}),n.a.createElement(w.a,{source:"capacite"}),n.a.createElement(w.a,{source:"prix"})))},ye=function(e){return n.a.createElement(d.a,e,n.a.createElement(h.a,{source:"q",alwaysOn:!0}))},De=function(e){return n.a.createElement(p.a,Object.assign({},e,{filters:n.a.createElement(ye,null),filterDefaultValues:{is_published:!0}}),n.a.createElement(b.a,{rowClick:"show"},n.a.createElement(w.a,{source:"id"}),n.a.createElement(w.a,{source:"type"}),n.a.createElement(w.a,{source:"theme"}),n.a.createElement(w.a,{source:"status"}),n.a.createElement(w.a,{source:"startDate"}),n.a.createElement(w.a,{source:"endDate"}),n.a.createElement(v.a,null),n.a.createElement(j.a,null),n.a.createElement(O.a,null)))},ke=function(e){return n.a.createElement(P.a,e,n.a.createElement(y.a,null,n.a.createElement(S.a,{source:"type"}),n.a.createElement(S.a,{source:"theme"}),n.a.createElement(S.a,{source:"status"}),n.a.createElement(S.a,{source:"startDate"}),n.a.createElement(S.a,{source:"endDate"})))},xe=function(e){var a=e.basePath,t=e.data;e.resource;return n.a.createElement(x.a,null,n.a.createElement(v.a,{basePath:a,record:t}))},Ie=function(e){return n.a.createElement(I.a,Object.assign({actions:n.a.createElement(xe,null)},e),n.a.createElement(y.a,null,n.a.createElement(S.a,{source:"type"}),n.a.createElement(S.a,{source:"theme"}),n.a.createElement(S.a,{source:"status"}),n.a.createElement(S.a,{source:"startDate"}),n.a.createElement(S.a,{source:"endDate"})))},Se=function(e){return n.a.createElement(C.a,e,n.a.createElement(q.a,null,n.a.createElement(w.a,{source:"id"}),n.a.createElement(w.a,{source:"type"}),n.a.createElement(w.a,{source:"theme"}),n.a.createElement(w.a,{source:"status"}),n.a.createElement(w.a,{source:"description"}),n.a.createElement(w.a,{source:"startDate"}),n.a.createElement(w.a,{source:"endDate"})))},Ce=Object(ee.a)((function(){return Z.a}),"fr"),qe=Object(m.a)("http://localhost:56407/api",(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a.headers||(a.headers=new Headers({Accept:"application/json"}));var t=localStorage.getItem("token");return a.headers.set("Authorization","Bearer  ".concat(t)),o.a.fetchJson(e,a)})),Ae=Object(ie.a)({palette:{primary:be.a,secondary:he.a}}),Ne=function(){return r.createElement(s.a,{title:"Clic'n Fest Admin",locale:"fr",i18nProvider:Ce,dataProvider:qe,authProvider:f,theme:Ae},(function(e){return[r.createElement(u.a,{name:"Produit",icon:se.a,list:T,create:H,show:W,edit:U}),r.createElement(u.a,{options:{label:"Lieux",title:"Lieux"},name:"Lieux",icon:fe.a,list:ge,create:ve,show:Pe,edit:Oe}),r.createElement(u.a,{name:"Messages",icon:ne.a,list:F,create:R,show:K,edit:G}),r.createElement(u.a,{name:"Avis",icon:le.a,list:N,create:V,show:B,edit:J}),"Admin"===e?r.createElement(u.a,{name:"Users",icon:te.a,list:X,show:Y}):null,"Admin"===e?r.createElement(u.a,{name:"Evenements",icon:me.a,list:De,create:ke,show:Se,edit:Ie}):null]}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[340,1,2]]]);
//# sourceMappingURL=main.5f6cf573.chunk.js.map