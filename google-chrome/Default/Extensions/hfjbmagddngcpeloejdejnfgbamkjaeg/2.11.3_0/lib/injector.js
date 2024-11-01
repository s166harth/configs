"use strict";var VimiumInjector;(()=>{let t=VimiumInjector,e={id:"",alive:-1,host:"",version:"",cache:null,clickable:void 0,eval:null,reload:null,checkIfEnabled:null,$:null,$h:null,$m:null,$r:null,$g:null,getCommandCount:null,callback:null,destroy:null};if(t)for(let n of Object.keys(t))e[n]=t[n];e.alive=-1,e.$g=null,VimiumInjector=e})(),(function(t,e){function n(t,n){let l,u,a=VimiumInjector,d=a&&a.clickable,h=a&&a.callback;if(!t){let e=n&&n.message,i=o.id||location.host||location.protocol;if(u=!!(e&&e.lastIndexOf("not exist")>=0&&o.id),t===!1?l=": not in the allow list.":!u&&n?l=e?`:\n\t${e}`:": no backend found.":s>3?(l=e?`:\n\t${e}`:`: retried but failed (${t}).`,u=!1):(setTimeout(f,200*s),s++,u=!0),!u){l=l||` (${s} retries).`;let t="color:red",e="color:auto";console.log("%cVimium C%c: %cfail%c to inject into %c%s%c %s",t,e,t,e,"color:#0c85e9",i,e,l),h&&a.callback(-1,l)}}a&&typeof a.destroy=="function"&&a.destroy(!0);let v=t?t.h:"",b=VimiumInjector={id:m,alive:0,host:m,version:t?t.version:"",cache:null,clickable:d,eval:null,reload:e(c),checkIfEnabled:null,$:null,$h:t=>"vimium-c."+t+v,$m(t){VimiumInjector&&VimiumInjector.$r(typeof t=="object"?t.t:t)},$r(){},$g:r!=null?r===""||r.toLowerCase()==="true":null,getCommandCount:null,callback:h||null,destroy:null},$=document.documentElement;if(!(t&&$ instanceof HTMLHtmlElement))return n;let p=document.contains(i)?i:(document.head||$).lastChild||document.head,g=p.nextSibling,k=p.parentElement,C=[];for(let e of t.s){let t=document.createElement("script");t.type="text/javascript",t.async=!1,t.src=e,k.insertBefore(t,g),C.push(t)}C.length>0&&(C[C.length-1].onload=function(){this.onload=null;for(let t=C.length;0<=--t;)C[t].remove()}),h&&b.callback(0,"loading")}function l(){a(()=>{a(()=>{setTimeout(f,0)},{timeout:67})},{timeout:330})}let o=chrome.runtime,i=document.currentScript,c=i.src,u=c.indexOf("://")+3,r=i.dataset.blockFocus,a=requestIdleCallback,s=1,d=c.slice(u,c.indexOf("/",u)),m=d;if(m=i.dataset.extensionId||m,m===d&&((o.getManifest()||{}).manifest_version||3)>=3)return void alert("Require [data-extension-id] on <script> of vimium-c/injector.js");VimiumInjector.id=m;let f=()=>{try{o.sendMessage(m,{handler:99,scripts:!0},t=>{let e=o.lastError;return e?n(void 0,e):n(t),e})}catch(t){console.log("Can not send message to the extension of %o: %s",m,t&&t.message||t+"")}};document.readyState!=="loading"?l():addEventListener("DOMContentLoaded",l,{capture:!0,once:!0})})(0,t=>e=>{function n(){let n=document.documentElement,l=document.head||document.body||n,o=document.createElement("script");l&&(o.type="text/javascript",o.async=!1,o.src=t,console.log("%cVimium C%c begins to reload%s.","color:red","color:auto",e===1?" because it has been updated.":""),l.append(o))}let l=VimiumInjector;if(l){let t=l.clickable;typeof l.destroy=="function"&&l.destroy(!0),l.clickable=t}e?setTimeout(n,200):n()}),(!document.currentScript||(document.currentScript.dataset.vimiumHooks||"").toLowerCase()!=="false")&&VimiumInjector.clickable!==null&&(function(){VimiumInjector.clickable=VimiumInjector.clickable||new WeakSet;let t=EventTarget,e=t.prototype,n=e.addEventListener;if(n.vimiumHooked===!0)return;let l=HTMLAnchorElement,o=Element,i=e.addEventListener=function addEventListener(t,e){t==="click"&&!(this instanceof l)&&e&&this instanceof o&&VimiumInjector&&VimiumInjector.clickable&&VimiumInjector.clickable.add(this);let i=arguments,c=i.length;return c===2?n.call(this,t,e):c===3?n.call(this,t,e,i[2]):n.apply(this,i)},c=Function.prototype,u=c.toString,r=c.toString=function toString(){return u.apply(this===i?n:this===r?u:this,arguments)};i.vimiumHooked=!0,t.vimiumRemoveHooks=()=>{delete t.vimiumRemoveHooks,e.addEventListener===i&&(e.addEventListener=n),c.toString===r&&(c.toString=u)},i.prototype=r.prototype=void 0})();