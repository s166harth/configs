import{CurCVer_ as t,OnChrome as e,OnFirefox as i,$ as s,$$ as n,nextTick_ as l,post_ as o,enableNextTick_ as r,toggleReduceMotion_ as a,OnEdge as h,CurFFVer_ as u,OnSafari as p,prevent_ as f,bTrans_ as c}from"./async_bg.js";import{bgSettings_ as _,Option_ as d,ExclusionRulesOption_ as m,oTrans_ as O,delayBinding_ as x}from"./options_base.js";d.U=[],d.prototype.F=function(t){let e=t.call(this);if(this.K==="passEsc"||this.K==="ignoreReadonly")this.j||this.A(e);else if(VApi&&!this.j){let t=_.B[this.K];(t in _.T?o(3,{key:t,val:e}):Promise.resolve(e)).then(i=>{var s;if(VApi.z[t]=i!=null?i:e,t==="l"){let s=VApi.y().r;s&&s.querySelector("iframe.Omnibar")&&o(29,{key:t,val:i!=null?i:e})}(s=d.Y)===null||s===void 0||s.call(d)})}},d.prototype.D=function(t){let e=t.call(this);if(this.j);else if(this.K==="autoReduceMotion"){let t=e===1||e!==0&&matchMedia("(prefers-reduced-motion: reduce)").matches;VApi&&(VApi.z.m=t),a(t)}else this.C()},d.at=async()=>{let t=d.X,e=[];_.v();let i=t.optionalPermissions,s=i&&i.O();await Promise.all([_.E(),s]);for(let i in t){let s=t[i];!s.M&&s.G()&&e.push(s.ut())}if(e.length>0&&!confirm(O("dirtyOptions",[e.join("\n  * ")])))return!1;for(let e in t){let i=t[e];if(!i.M&&!i.I())return!1}r(8),t.vimSync.M||await t.vimSync.O(),t.exclusionRules.M||await t.exclusionRules.O();let n=[];for(let e in t){let i=t[e];i.M||n.push(i.O())}return await Promise.all(n),r(0,8),!0},d.pt=()=>{let t=d.X;for(let e in t)if(!t[e].M)return!0;return!1},d.prototype.ut=function(){let t=this.z;return this instanceof BooleanOption_?t.nextElementSibling.textContent:(t=t.closest("tr"),t=t.querySelector(".caption"),t.innerText.replace(/[\r\n]/g,""))};export class NumberOption_ extends d{e(){let t,e;this.q={min:(t=this.z.min)&&!isNaN(e=parseFloat(t))?e:null,max:(t=this.z.max)&&!isNaN(e=parseFloat(t))?e:null,default:0,Z:NumberOption_.ft},x(this.z,"input",this.L),x(this.z,"focus",this.ct.bind(this)),l(()=>{this.q.default=_.P[this.K]})}c(t){this.z.value=""+t}y(){return Math.round(parseFloat(this.z.value))}ct(){let t=this.z,e=t=>this._t(t),i=()=>{t.removeEventListener("wheel",e,{passive:!1}),t.removeEventListener("blur",i),this.dt=0};this.dt=0,t.addEventListener("wheel",e,{passive:!1}),t.addEventListener("blur",i)}_t(t){f(t);let e=this.dt,i=Date.now();if(i-e<100&&i+99>e&&e)return;this.dt=i;let s,n=this.z,l=(t.deltaY||t.deltaX)>0,o=n.value,r=l?n.stepUp:n.stepDown;if(typeof r=="function")r.call(n),s=n.value,n.value=o;else{r=parseFloat;let t=r(n.step)||1;i=(+n.value||0)+(l?t:-t),isNaN(t=r(n.max))||(i=Math.min(i,t)),isNaN(t=r(n.min))||(i=Math.max(i,t)),s=""+i}return this.mt(s,e>0,!1)}static ft(t){return isNaN(t)&&(t=this.default),t=this.min!=null?Math.max(this.min,t):t,this.max!=null?Math.min(this.max,t):t}}export class BooleanOption_ extends d{e(){let t=this.z,e=t.dataset.map;this.Ot=e?JSON.parse(e):t.dataset.allowNull?BooleanOption_.xt:BooleanOption_.gt,this.Nt=this.Ot.length-1,this.Nt>1&&this.K!=="vimSync"&&x(t,"input",this.onTripleStatusesClicked.bind(this),!0),x(t,"change",this.L)}c(t){let e=t===!0||t===this.Ot[this.Nt];this.z.checked=e,this.z.indeterminate=this.Nt>1&&t===this.Ot[1],this.Tt=e?this.Nt:Math.max(0,this.Ot.indexOf(t))}y(){return this.z.indeterminate?this.Ot[1]:this.Ot[this.z.checked?this.Nt:0]}onTripleStatusesClicked(t){this.Tt=BooleanOption_.ToggleTripleStatuses(this.Tt,t)}static ToggleTripleStatuses(t,e){let i=e.target;f(e);let s=t===2?1:t?0:2;return i.indeterminate=t===2,i.checked=s===2,s}A(t){return this.z.dataset.map&&typeof t=="boolean"&&(t=this.Ot[t?this.Nt:0]),t}static bt(t,e){t.disabled=e;let i=t.nextElementSibling;i.tabIndex=e?-1:0,i.ariaDisabled=e||null}}BooleanOption_.gt=[!1,!0],BooleanOption_.xt=[!1,null,!0];export class TextOption_ extends d{constructor(){super(...arguments),this.St=!1}e(){let t=this.z.dataset.converter||"",e=t?t.split(" "):[];x(this.z,"input",this.L),e.length>0&&(this.q={Bt:e,p:0,Z:TextOption_.vt})}x(){let t=super.x(),e=this.q;return e&&(e.p=0,t?t=t.then(()=>{e.p=e.Z(this.J)===this.J?1:0}):e.p=e.Z(this.J)===this.J?1:0),t}c(t,e){let i=this.Et(t);e!==!0?this.z.value=i:this.mt(i,!0,!0)}wt(){return this.z.value.trim().replace(/\xa0/g," ")}Et(t){return t}y(){let t=this.wt(),e=this.q;return t&&e&&e.Z===TextOption_.vt&&(e.p|=2,t=TextOption_.vt.call(e,t),e.p&=-3),t}W(t){return this.Et(t)!==this.wt()}ue(t,e){let i=!!t;(i||this.St)&&(this.St=i,TextOption_.ue(t,e,this.z))}static ue(t,e,i){let s=!!t,{classList:n}=i,o=i.nextElementSibling;o=o&&o.classList.contains("tip")?o:null,(s||o)&&l(()=>{s?(o==null&&(o=document.createElement("div"),o.className="tip",i.after(o)),o.textContent=t,e!==null&&n.add(e||"has-error")):(n.remove("has-error"),n.remove("highlight"),o&&o.remove())})}static vt(t){let e=this.Bt;if(e.indexOf("lower")>=0?t=t.toUpperCase().toLowerCase():e.indexOf("upper")>=0&&(t=t.toLowerCase().toUpperCase()),t=t.normalize(),e.indexOf("chars")<0||this.p&2&&!(this.p&1))return t;let i="";for(let e of t.replace(/\s/g,""))i.includes(e)||(i+=e);return i}}export class NonEmptyTextOption_ extends TextOption_{y(){return this.z.value.trim()||this.c(_.P[this.K],!0),super.y()}}export class CssSelectorOption_ extends NonEmptyTextOption_{wt(){return super.wt().replace(/:default\([^)]*\)/,":default")}Et(t){return(t=t.replace(/(?:^# |\/\/)[^\n]*|([,>] ?)(?!$|\n)/g,(t,e)=>e?e!==">"?", ":" > ":t)).replace(/(^|\n):default(?!\()(, \S)?/,(t,e,i)=>{let s=`:default(${this.getRealDefault()})`;return e+CssSelectorOption_.ce(s)+(i?",\n"+i[2]:"")})}getRealDefault(){return c(this.K==="passEsc"?"121":"120")}static ce(t){let e=t.indexOf("##"),i=e>=0?t.slice(0,e+2):"",s="";t=(t=e>=0?t.slice(e+2):t).replace(/,|>/g,t=>t===","?", ":" > ").trimRight();for(let e of t.split(", "))i&&i.length+e.length>62?(s=i.endsWith("#")?i:(s?s+"\n":"")+i+",",i="  "+e):i=i?i+(i.endsWith("#")?"":", ")+e:e;return i?(s?s+"\n":"")+i.trimRight():s}}export class JSONOption_ extends TextOption_{Et(t){let e=this.z instanceof HTMLInputElement,i=JSON.stringify(t,null,e?1:2);return e?i.replace(/(,?)\n\s*/g,(t,e)=>e?", ":""):i}y(){let t=super.y(),e=null;if(t)try{e=JSON.parse(t)}catch(t){}else e=_.P[this.K],this.c(e,!0);return e}static yt(t){if(!t||typeof t!="object")return t;if(t instanceof Array)return t.map(JSONOption_.yt);let e={};for(let i of Object.keys(t).sort())e[i]=JSONOption_.yt(t[i]);return e}Q(t,e){return JSON.stringify(t)===JSON.stringify(JSONOption_.yt(e))}A(t){return JSONOption_.yt(t)}}export class MaskedText_ extends TextOption_{e(){super.e(),this.kt=!0,this.Mt=this.Vt.bind(this),x(this.z,"focus",this.Mt)}Vt(){this.Mt&&(this.z.removeEventListener("focus",this.Mt),this.z.classList.remove("masked"),this.Mt=null,this.kt=!1,this.z.removeAttribute("placeholder"),this.x())}c(t,e){this.kt?this.z.placeholder=O("clickToUnmask"):super.c(t,e)}wt(){return this.kt?this.J:super.wt()}}TextOption_.prototype.mt=NumberOption_.prototype.mt=function(t,e,i){let s=this.z,n=s.value,l=s.selectionDirection!=="backward"?s.selectionEnd:s.selectionStart,o=!1;if(e&&(this.j=!0,o=document.activeElement!==s,o&&s.focus(),document.execCommand("undo")),this.j=i,l==null)s.select(),document.execCommand("insertText",!1,t),o&&this.z.blur();else{let i=e?s.value:n,r=s.scrollLeft,a=s.scrollTop,h=0,u=i.length-1,p=t.length-1,f=Math.min(u,p);for(;h<=f&&i[h]===t[h];)h++;for(f=Math.max(h,u-(p-h));f<=u&&i[u]===t[p];)u--,p--;s.setSelectionRange(h,u+1);let c=t.slice(h,p+1);if(document.execCommand("insertText",!1,c),o&&s.blur(),n!==i){for(h=0,u=n.length-1,p=t.length-1,f=Math.min(u,p);h<=f&&n[h]===t[h];)h++;for(f=Math.max(h,u-(p-h));f<=u&&n[u]===t[p];)u--,p--}if(l)if(l===n.length)r=s.scrollWidth,a=s.scrollHeight,l=t.length;else if(l<h);else if(l>u)l+=p-u;else{let e=n.slice(0,l).split("\n"),i=e.length,s=t.split("\n").slice(0,i);s.length===i&&(s[i-1]=s[i-1].slice(0,e[i-1].length)),l=s.reduce((t,e)=>t+e.length,0)+s.length-1}else r=a=0;s.scrollTo(r,a),s.setSelectionRange(l,l)}this.j=!1},m.prototype.nt=function(t){if(this.h.length!==t)return;let e=s("#exclusionToolbar"),i=n("[data-model]",e);e.style.visibility=t?"":"hidden";for(let e of i){let i=d.X[e.id],s=i.z.parentNode.style;s.visibility=t||i.M?"":"visible",s.display=!t&&i.M?"none":""}};export const saveBtn_=s("#saveOptions");export const exportBtn_=s("#exportButton");export let savedStatus_;export let registerClass_;export const createNewOption_=(()=>{let t=!1;savedStatus_=e=>t=e!=null?e:t;let e=function(){if(this.j)return;let e=this.y();return(this.M=this.Q(this.J,e))?(t&&!d.pt()&&(saveBtn_.disabled=!0,saveBtn_.firstChild.data=O("115"),exportBtn_.disabled=!1,savedStatus_(!1),window.onbeforeunload=null),e):(t||(window.onbeforeunload=C,savedStatus_(!0),saveBtn_.disabled=!1,saveBtn_.firstChild.data=O("115_2"),exportBtn_.disabled=!0),e)},i={Number:NumberOption_,Boolean:BooleanOption_,Text:TextOption_,NonEmptyText:NonEmptyTextOption_,JSON:JSONOption_,MaskedText:MaskedText_,ExclusionRules:m,CssSelector:CssSelectorOption_},s=t=>{let s=new(0,i[t.dataset.model])(t,e);return d.X[s.K]=s};d.V=!0;for(let t of n('[data-model]:not([data-model=""])'))s(t);return registerClass_=(t,e)=>{i[t]=e},s})();{let t=d.X.exclusionRules,e=t.l;e.ondragstart=e=>{let i=e.target,s=document.activeElement;s.localName!=="input"?(t.Jt=i,i.style.opacity="0.5"):s!==i&&f(e)},e.ondragend=()=>{let e=t.Jt;t.Jt=null,e&&(e.style.opacity="")},e.ondragover=e=>{t.Jt&&f(e)},e.ondrop=e=>{f(e);let i=t.Jt;if(!i)return;let s=e.target;if(s=s.closest(".exclusionRule"),!s||i===s)return;s.before(i);let n=t.h,l=i.querySelector(".pattern").vnode,o=s.querySelector(".pattern").vnode;n.splice(n.indexOf(l),1),n.splice(n.indexOf(o),0,l),t.L()}}let g=d.X.keyMappings,N=t=>{let e,i=new RegExp("^#![^\\n]*|^[^]","gm");for(;e=i.exec(t);){let i=e[0];if(i&&i[0]!=="\n"){if(i[0]!=="#")break;if(i[1]==="!"&&i.slice(2).trim()==="no-check"){t=t.slice(0,e.index)+t.slice(e.index+i.length).trimLeft();break}}}return t.replace(/\.activateMode(?:To)?/g,".activate")};g.H=function(){let t=d.prototype.H.call(this);return t instanceof Promise?t.then(N):N(t)},g.A=function(t){return t=N(t),d.prototype.A.call(this,t)};export const onKeyMappingsError_=t=>{t===!0?g.ue(O("ignoredNonEN"),null):g.ue(t)};let T=d.X.linkHintCharacters,b=d.X.linkHintNumbers,S=d.X.filterLinkHints;T.C=b.C=function(){this.ue(!this.z.style.display&&this.J.length<4?"Too few characters for LinkHints":"")},S.C=()=>{l(()=>{let t=S.y();b.z.style.display=t?"":"none",T.z.style.display=t?"none":"",BooleanOption_.bt(d.X.waitForEnter.z,!t),T.C(),b.C()})},x(S.z,"change",S.C,!0);let B,v=d.X.keyLayout,[E,w,y,k,M,V]=n("input",v.z);v.y=()=>{let t=0;E.checked?t=1:(t|=w.checked?8:0,t|=y.checked?2:y.indeterminate?4:0,t|=k.checked?16:k.indeterminate?512:0),t|=M.checked?128:M.indeterminate?64:0,t|=V.checked?32:0;let e=v.J;return e&256&&(e&-257)===t&&(t|=256),t};let J=!0;v.c=t=>{let e=!!(t&1);E.checked=e,w.checked=e||!!(t&8),y.checked=e||!!(t&2),y.indeterminate=!!(t&4),k.checked=e||!!(t&16),k.indeterminate=!!(t&512),V.checked=!!(t&32),M.checked=!!(t&128),M.indeterminate=!!(t&64),B=t,A(),d.Y&&o(3,{key:"l",val:t}).then(e=>{VApi.z.l=e!=null?e:t,d.Y()}),J&&(V.parentElement.parentElement.parentElement.style.display="none",J=!1)};let A=t=>{let e=E.checked;if(BooleanOption_.bt(w,e),BooleanOption_.bt(y,e),BooleanOption_.bt(k,e),t)if(e)w.checked=y.checked=k.checked=!0,y.indeterminate=k.indeterminate=!1;else{let e=v.H();typeof e!="number"||B&1||(B===e?v.x():v.c(B),t.stopImmediatePropagation(),l(v.L))}};x(v.z,"input",t=>{let e=t.target;if(e===E)A(t);else{let i=e===y?4:e===k?512:e===M?64:0,s=e===y?2:e===k?16:e===M?128:8;if(i){let e=BooleanOption_.ToggleTripleStatuses(B&s?2:B&i?1:0,t);B=B&~(i|s)|(e>1?s:e?i:0)}else B=B&~s|(e.checked?s:0)}},!0),d.X.vomnibarPage.C=function(){let t=this.J;t.startsWith(location.protocol)||t.startsWith("front/")?this.ue(""):t.startsWith("file:")?this.ue(O("fileVomnibar"),"highlight"):/^http:\/\/(?!localhost[:/])/i.test(t)?this.ue(O("httpVomnibar"),"highlight"):this.ue("")},d.X.userDefinedCss.C=function(){this.z.classList.contains("debugging")&&l(()=>{let t=VApi.y().r;for(let e of n("iframe",t)){let t=e.classList.contains("HUD"),i=e.contentDocument.querySelector("style.debugged");i&&(t?i.remove():i.classList.remove("debugged"))}this.z.classList.remove("debugging")})},d.X.autoReduceMotion.C=function(){l(()=>{let t=this.J;a(t===2?matchMedia("(prefers-reduced-motion: reduce)").matches:t>0)})};let C=()=>(setTimeout(()=>{setTimeout(()=>{for(let t of Object.values(d.X)){if(t instanceof TextOption_&&t.St)continue;let e=t.z;if(e.localName==="input"&&e.type==="checkbox"){let t=e.parentElement,i=t.parentElement;e=i.localName==="td"?i:t}e.classList.toggle("highlight",!t.M)}},300)},17),O("beforeUnload"));