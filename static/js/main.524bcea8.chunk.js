(this.webpackJsonpclicnfestbackofiice=this.webpackJsonpclicnfestbackofiice||[]).push([[0],{338:function(e,a,t){e.exports=t(491)},343:function(e,a,t){},491:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),l=t.n(c),o=(t(343),t(82)),s=t(570),u=t(569),i=t(281),m=t(254),E=t.n(m),f={login:function(e){var a=e.username,t=e.password,n=new Request("http://localhost:56407/api/Users/authenticate",{method:"POST",body:JSON.stringify({username:a,password:t}),headers:new Headers({"Content-Type":"application/json"})});return fetch(n).then((function(e){if(e.status<200||e.status>=300)throw new Error(e.statusText);return e.json()})).then((function(e){var a=e.token,t=E()(a);localStorage.setItem("token",a),localStorage.setItem("permissions",t.role)}))},logout:function(){return localStorage.removeItem("token"),localStorage.removeItem("permissions"),Promise.resolve()},checkError:function(e){},checkAuth:function(){return localStorage.getItem("token")?Promise.resolve():Promise.reject()},getPermissions:function(){var e=localStorage.getItem("permissions");return e?Promise.resolve(e):Promise.reject()}},d=t(575),h=t(549),p=t(571),b=t(572),w=t(558),g=t(559),v=t(560),j=t(561),k=t(576),P=t(581),O=t(573),y=t(565),I=t(566),S=t(75),D=t(579),x=t(303),C=(t(24),t(580)),N=t(568),q=function(e){return r.a.createElement(d.a,e,r.a.createElement(h.a,{source:"q",alwaysOn:!0}))},A=function(e){return r.a.createElement(p.a,Object.assign({},e,{filters:r.a.createElement(q,null),filterDefaultValues:{is_published:!0}}),r.a.createElement(b.a,{rowClick:"show"},r.a.createElement(w.a,{source:"id"}),r.a.createElement(w.a,{source:"note"}),r.a.createElement(g.a,{source:"creationDate"}),r.a.createElement(v.a,null),r.a.createElement(j.a,null),r.a.createElement(k.a,null)))},J=function(e){return r.a.createElement(P.a,e,r.a.createElement(O.a,null,r.a.createElement(y.a,{source:"note"}),r.a.createElement(I.a,{source:"creationDate"})))},V=function(e){var a=e.basePath,t=e.data;e.resource;return r.a.createElement(S.a,null,r.a.createElement(v.a,{basePath:a,record:t}))},_=function(e){return r.a.createElement(D.a,Object.assign({actions:r.a.createElement(V,null)},e),r.a.createElement(O.a,null,r.a.createElement(x.a,{source:"note"}),r.a.createElement(I.a,{source:"creationDate"})))},B=function(e){return r.a.createElement(C.a,e,r.a.createElement(N.a,null,r.a.createElement(w.a,{source:"id"}),r.a.createElement(w.a,{source:"note"}),r.a.createElement(g.a,{source:"creationDate"})))},T=function(e){return r.a.createElement(d.a,e,r.a.createElement(h.a,{source:"q",alwaysOn:!0}))},H=function(e){return r.a.createElement(p.a,Object.assign({},e,{filters:r.a.createElement(T,null),filterDefaultValues:{is_published:!0}}),r.a.createElement(b.a,{rowClick:"show"},r.a.createElement(w.a,{source:"id"}),r.a.createElement(w.a,{source:"name"}),r.a.createElement(w.a,{source:"prix"}),r.a.createElement(v.a,null),r.a.createElement(j.a,null),r.a.createElement(k.a,null)))},M=function(e){return r.a.createElement(P.a,e,r.a.createElement(O.a,null,r.a.createElement(x.a,{source:"name"}),r.a.createElement(y.a,{source:"prix"}),r.a.createElement(x.a,{multiline:!0,source:"description"})))},U=function(e){var a=e.basePath,t=e.data;e.resource;return r.a.createElement(S.a,null,r.a.createElement(v.a,{basePath:a,record:t}))},W=function(e){return r.a.createElement(D.a,Object.assign({actions:r.a.createElement(U,null)},e),r.a.createElement(O.a,null,r.a.createElement(x.a,{source:"name"}),r.a.createElement(y.a,{source:"prix"})))},z=function(e){return r.a.createElement(C.a,e,r.a.createElement(N.a,null,r.a.createElement(w.a,{source:"id"}),r.a.createElement(w.a,{source:"name"}),r.a.createElement(w.a,{source:"prix"}),r.a.createElement(w.a,{source:"description"})))},F=function(e){return r.a.createElement(d.a,e,r.a.createElement(h.a,{source:"q",alwaysOn:!0}))},R=function(e){return r.a.createElement(p.a,Object.assign({},e,{filters:r.a.createElement(F,null),filterDefaultValues:{is_published:!0}}),r.a.createElement(b.a,{rowClick:"show"},r.a.createElement(w.a,{source:"id"}),r.a.createElement(w.a,{source:"subject"}),r.a.createElement(g.a,{source:"creationDate"}),r.a.createElement(v.a,null),r.a.createElement(j.a,null),r.a.createElement(k.a,null)))},$=function(e){return r.a.createElement(P.a,e,r.a.createElement(O.a,null,r.a.createElement(x.a,{source:"subject"}),r.a.createElement(x.a,{multiline:!0,source:"body"})))},G=function(e){var a=e.basePath,t=e.data;e.resource;return r.a.createElement(S.a,null,r.a.createElement(v.a,{basePath:a,record:t}))},K=function(e){return r.a.createElement(D.a,Object.assign({actions:r.a.createElement(G,null)},e),r.a.createElement(O.a,null,r.a.createElement(x.a,{source:"subject"}),r.a.createElement(x.a,{multiline:!0,source:"body"})))},L=function(e){return r.a.createElement(C.a,e,r.a.createElement(N.a,null,r.a.createElement(w.a,{source:"id"}),r.a.createElement(w.a,{source:"subject"}),r.a.createElement(w.a,{source:"body"}),r.a.createElement(g.a,{source:"creationDate"})))},Q=function(e){return r.a.createElement(d.a,e,r.a.createElement(h.a,{source:"q",alwaysOn:!0}))},X=function(e){return r.a.createElement(p.a,Object.assign({},e,{filters:r.a.createElement(Q,null),filterDefaultValues:{is_published:!0}}),r.a.createElement(b.a,{rowClick:"show"},r.a.createElement(w.a,{source:"userId"}),r.a.createElement(w.a,{source:"firstName"}),r.a.createElement(w.a,{source:"lastName"}),r.a.createElement(w.a,{source:"userName"}),r.a.createElement(v.a,null),r.a.createElement(j.a,null),r.a.createElement(k.a,null)))},Y=function(e){return r.a.createElement(C.a,e,r.a.createElement(N.a,null,r.a.createElement(w.a,{source:"userId"}),r.a.createElement(w.a,{source:"firstName"}),r.a.createElement(w.a,{source:"lastName"}),r.a.createElement(w.a,{source:"username"})))},Z=t(280),ee=t(163),ae=t(300),te=t.n(ae),ne=t(298),re=t.n(ne),ce=t(299),le=t.n(ce),oe=t(297),se=t.n(oe),ue=t(301),ie=t(283),me=t.n(ie),Ee=t(282),fe=t.n(Ee),de=Object(ee.a)((function(){return Z.a}),"fr"),he=Object(i.a)("http://localhost:56407/api",(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a.headers||(a.headers=new Headers({Accept:"application/json"}));var t=localStorage.getItem("token");return a.headers.set("Authorization","Bearer  ".concat(t)),o.a.fetchJson(e,a)})),pe=Object(ue.a)({palette:{primary:fe.a,secondary:me.a}}),be=(localStorage.getItem("permissions"),function(){return n.createElement(s.a,{title:"Clic'n Fest Admin",locale:"fr",i18nProvider:de,dataProvider:he,authProvider:f,theme:pe},(function(e){return[n.createElement(u.a,{name:"Produit",icon:se.a,list:H,create:M,show:z,edit:W}),n.createElement(u.a,{name:"Messages",icon:re.a,list:R,create:$,show:L,edit:K}),n.createElement(u.a,{name:"Avis",icon:le.a,list:A,create:J,show:B,edit:_}),"admin"===e?n.createElement(u.a,{name:"Users",icon:te.a,list:X,show:Y}):null]}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[338,1,2]]]);
//# sourceMappingURL=main.524bcea8.chunk.js.map