(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&t(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var S;(function(e){e[e.End=0]="End",e[e.Byte=1]="Byte",e[e.Short=2]="Short",e[e.Int=3]="Int",e[e.Long=4]="Long",e[e.Float=5]="Float",e[e.Double=6]="Double",e[e.ByteArray=7]="ByteArray",e[e.String=8]="String",e[e.List=9]="List",e[e.Compound=10]="Compound",e[e.IntArray=11]="IntArray",e[e.LongArray=12]="LongArray"})(S||(S={}));class k{constructor(l){this.value=l}valueOf(){return this.value}}class E{constructor(l){this.value=l}valueOf(){return this.value}}class B{constructor(l){this.value=l}valueOf(){return this.value}}class O{constructor(l){this.value=l}valueOf(){return this.value}}const v=/^[0-9A-Za-z.+_-]+$/;function U(e,l={}){const n=!!l.pretty,t=l.breakLength||70,r=l.quote=="single"?"'":l.quote=="double"?'"':null,o=" ".repeat(4);function f(i){let a=r??'"';if(r==null)for(let c=0;c<i.length&&c<8;c++){switch(i[c]){case"'":a='"';break;case'"':a="'";break;default:continue}break}return`${a}${i.replace(RegExp(`[${a}\\\\]`,"g"),c=>`\\${c}`)}${a}`}function m(i,a){const c=n?" ":"",b=n?", ":",";if(i instanceof k)return`${i.value}b`;if(i instanceof E)return`${i.value}s`;if(i instanceof B)return`${i.value|0}`;if(typeof i=="bigint")return`${i}l`;if(i instanceof O)return`${i.value}f`;if(typeof i=="number")return Number.isInteger(i)?`${i}.0`:i.toString();if(typeof i=="string")return f(i);if(i instanceof Buffer||i instanceof Int8Array)return`[B;${c}${[...i].join(b)}]`;if(i instanceof Int32Array)return`[I;${c}${[...i].join(b)}]`;if(i instanceof BigInt64Array)return`[L;${c}${[...i].join(b)}]`;if(i instanceof Array){const h=i.map(u=>m(u,a+1));return h.reduce((u,w)=>u+w.length,0)>t||h.some(u=>u.includes(`
`))?`[
${h.map(u=>o.repeat(a)+u).join(`,
`)}
${o.repeat(a-1)}]`:`[${h.join(b)}]`}else{const h=(i instanceof Map?[...i]:Object.entries(i).filter(([u,w])=>w!=null)).map(([u,w])=>(v.test(u)||(u=f(u)),`${u}:${c}${m(w,a+1)}`));return n&&h.reduce((u,w)=>u+w.length,0)>t?`{
${h.map(u=>o.repeat(a)+u).join(`,
`)}
${o.repeat(a-1)}}`:`{${c}${h.join(b)}${c}}`}}return m(e,1)}function g(e,l={}){let n=0,t=0,r="";const o=()=>new Error("Unexpected end"),f=s=>new Error(`Unexpected character ${e[n]} at position ${n}`);function m(){for(;n<e.length;){if(e[n]!=" "&&e[n]!=`
`)return;n+=1}}function i(){if(!"-0123456789".includes(e[n]))return null;t=n++;let s=!1;for(;n<e.length;)if(r=e[n++],!"0123456789".includes(r))if(r=="."){if(s)return n--,null;s=!0}else return r=="f"||r=="F"?new O(+e.slice(t,n-1)):r=="d"||r=="D"?+e.slice(t,n-1):r=="b"||r=="B"?new k(+e.slice(t,n-1)):r=="s"||r=="S"?new E(+e.slice(t,n-1)):r=="l"||r=="L"?BigInt(e.slice(t,n-1)):s?+e.slice(t,--n):new B(+e.slice(t,--n));return s?+e.slice(t,n):new B(+e.slice(t,n))}function a(){for(t=n;n<e.length&&v.test(e[n]);)n++;if(n-t==0)throw n==e.length?o():f();return e.slice(t,n)}function c(){const s=e[n];t=++n;let d="";for(;n<e.length;)if(r=e[n++],r=="\\")d+=e.slice(t,n-1)+e[n],t=++n;else if(r==s)return d+e.slice(t,n-1);throw o()}function b(){return e[n]=='"'||e[n]=="'"?c():a()}function h(s,d){if(m(),e[n]==","){if(s)throw f();n++,m()}else if(!s&&e[n]!=d)throw f()}function u(){const s=[];let d=!0;for(;;){if(h(d,"}"),d=!1,e[n]=="}")return n++,l.useMaps?new Map(s):s.reduce((y,[q,C])=>(y[q]=C,y),{});const p=b();if(m(),e[n++]!=":")throw f();s.push([p,L()])}}function w(s){const d=[];for(;n<e.length;){if(h(d.length==0,"]"),e[n]=="]"){if(n++,s=="B")return Buffer.from(d.map(p=>+p));if(s=="I")return Int32Array.from(d.map(p=>+p));if(s=="L")return BigInt64Array.from(d.map(p=>BigInt(p)))}for(t=n,e[n]=="-"&&n++;n<e.length&&"0123456789".includes(e[n]);)n++;if(n-t==0||v.test(e[n]))throw f();d.push(e.slice(t,n))}throw o()}function j(){if("BILbil".includes(e[n])&&e[n+1]==";")return w(e[(n+=2)-2].toUpperCase());const s=[];for(;n<e.length;){if(m(),e[n]==","){if(s.length==0)throw f();n++,m()}else if(s.length>0&&e[n]!="]")throw f();if(e[n]=="]")return n++,s;s.push(L())}throw o()}function L(){if(m(),t=n,r=e[n],r=="{")return n++,u();if(r=="[")return n++,j();if(r=='"'||r=="'")return c();const s=i();return s!=null&&(n==e.length||!v.test(e[n]))?s:e.slice(t,n)+a()}return L()}let I=$("#outputArea"),A;async function D(){let e=document.getElementById("fileInput"),l=$("#submitBtn");l.attr("disabled",!0),A=e.files[0];let n=await A.text(),t=await F(n);I.val(t),$("#output").css("display","block"),l.attr("disabled",!1)}async function F(e){let l=g(e);return U(l,{quote:"single"}).replace(new RegExp("(?<!\\\\)'","g"),'"')}$("#copy").on("click",function(){navigator.clipboard==null?window.clipboardData.setData("Text",I.val()):navigator.clipboard.writeText(I.val())});$("#download").on("click",function(){const e=new Blob([I.val()],{type:"text/plain"}),l=document.createElement("a");l.href=URL.createObjectURL(e),l.download="toolbox-"+A.name,l.click()});window.submit=D;
