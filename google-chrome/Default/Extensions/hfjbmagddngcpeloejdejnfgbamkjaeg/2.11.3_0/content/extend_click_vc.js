"use strict";(function VC(de){var ma,mt,vs,I,B,P,ps,V=e=>{I="__VimiumC_4685759"===e},d=document,x=Object.setPrototypeOf,k="addEventListener",U="toString",K="prototype",kt="getElementsByTagName",g=EventTarget[K],l=g[k],R=[],C=l.call,a=Reflect.apply,c=C.bind(C),_d=g.dispatchEvent,J=HTMLElement[K],Y=Element,e=Y[K],X=e.append,ga=e.getAttribute,re=e.remove,eb=e[kt],n=[],y=n.slice,i=C.bind(n.indexOf),fe=n.forEach,sp=n.splice,q=n.push.bind(n),D=CustomEvent,z=D[K].stopImmediatePropagation,E=FocusEvent,_=Function,Z=_[K],t=Z[U],ct=clearTimeout,F=Document[K],ge=F[kt],$=Object.getOwnPropertyDescriptor,rt=$(E[K],"relatedTarget").get,L="VimiumCClickable",kr="4685759",O=L+kr,S=O.slice,ci=e=>{e&&e(c(S,c(t,e),7,24))},en=(e,t)=>{typeof t=="function"&&e.localName!=="a"&&(Q(e),T=T||(v(dt),1))},ho={toString(){var e=this,n=arguments,o=i(f,e),r=a(t,o<0?e:f[o-1],n),s=r!==(ma||(mt=c(t,M),vs=c(S,c(t,V),0,17),ma=c(t,m)));return n.length===2&&n[0]==="__VimiumC_"&&ci(n[1]),s&&r!==mt?r.length!==30||c(S,r,0,17)!==vs?r:c(t,N):(I=0,s?c(e,N,km,V):e(km,N,0,V),I?c(t,s?t:l):r)},addEventListener(e,t){var i,n=this,o=arguments,r=typeof e=="string"&&e<"DOMSv"&&(e>"DOMCi"?e>"DOMNo":e>"DOMCh");return r&&w&&w(),i=o.length===4&&e==="__VimiumC_"?ci(o[3]):r&&B?B(a,[l,n,o]):a(l,n,o),(e==="click"||e==="mousedown"||e==="pointerdown"||e==="dblclick"?t&&n instanceof Y&&n.localName!=="a"&&n!==R[R.length-1]:e===O&&!j&&n&&!n.window&&n.nodeType===1)&&en(n,t),i}},m=ho[k],M=ho[U],f=[0,0,0,0,l,m,t,M],r=d.createElement("div"),T=1,km="__VimiumC_",p=C.bind(e.getRootNode),kc=x({composed:!0},null),s=setTimeout,u=0,b=null,A=null,Q=n.push.bind(R),v=queueMicrotask,j=0,h=0,w=("."+location.host).endsWith(".bing.com")?0:()=>{try{B=new _(`let ${k}=(f,a)=>f(...a)\nreturn `+k)(w=0)}catch(e){}},dt=()=>{T=s(o,666)},o=()=>{var e=R.length,t=e>512?e-512:0;T=t&&s(o,36),e&&(c(re,r),u=0,a(fe,a(sp,R,[t,e-t]),[pr]),dr(0))},W=(e,t,i)=>{a(_d,i||r,[new e(L,x(t,null))])},pr=e=>{var t,n,l,a,f;p(e)!==d?(t=e.ownerDocument)===d?(f=(a=p(e)).nodeType)===1?(a!==r&&c(X,r,a),q(-8-i(A=A||c(y,c(eb,r,"*")),e))):f!==11||(u<10?(n=a.host)?!(a=n.shadowRoot&&p(e,kc))||a!==d&&a.nodeType!==1||typeof(l=e.tagName)!="string"||(a!==d&&a!==r&&c(X,r,a),u++,W(D,{detail:5759+l,composed:!0},e)):(u++,W(E,{relatedTarget:e})):(Q(e),u<13&&(u=13,ct(T),T=s(o,1)))):t.nodeType===9&&t.defaultView&&sr(e,t):q(i(b=b||c(y,c(ge,d,"*")),e))},dr=e=>{n.length&&(u++,W(D,{detail:[n,e]}),n.length=0),b=A=null},sr=(e,t)=>{var i=t[k],n=t.removeEventListener,o="function";if(typeof i==o&&typeof n==o&&i!==m){j=1;try{c(i,e,O,N)}catch(e){}try{c(n,e,O,N)}catch(e){}j=0}},od=()=>{h===1&&(h=0,r&&dr(0,q(-3)))},N=()=>1,H=d.documentElement,dp=Object.defineProperty,G=r.dataset;if(H&&(!de||!H.lastChild&&H.parentNode===d))if(G&&(G.vimium=kr,_d(new E(L,{relatedTarget:r})),!G.vimium)){r[k]("VC",e=>{var t=e&&r&&+c(ga,r,"data-vimium"),i=t?t>>3==4685759?t&7:0:e?0:6;t&&c(z,e),i<4?i>2?c(rt,e).showPicker():o(ct(T)):(r=R.length=0,Q=s=N,T=1)},!0),T=R.length>0?s(o,36):0,g[k]=m,Z[U]=M;for(let e of[0,2]){let t=e?"onmousedown":"onclick",i="set "+t,n={[i](t){c(f[e],this,t),t&&en(this,t)}},o=$(J,t);f[e]=o.set,f[e+1]=o.set=n[i],dp(J,t,o);let r=F[t=e?"write":"open"];dp(F,t,{enumerable:!0,configurable:!0,set(e){r=e},get:()=>(d.readyState>"l"?h===1&&(od(),h=2):h!==1&&(h=1,v(od)),r)})}}else de||(l(L,ps=e=>{v(()=>VC(1)),c(z,e)},P={capture:!0,once:!0}),l("readystatechange",removeEventListener.bind(window,L,ps,P),P))})();