if(!self.define){let i,n={};const e=(e,l)=>(e=new URL(e+".js",l).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(l,r)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let o={};const u=i=>e(i,s),c={module:{uri:s},exports:o,require:u};n[s]=Promise.all(l.map((i=>c[i]||u(i)))).then((i=>(r(...i),o)))}}define(["./workbox-5b385ed2"],(function(i){"use strict";i.setCacheNameDetails({prefix:"test"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.2fec292f.css",revision:null},{url:"/css/chunk-vendors.fa2d770a.css",revision:null},{url:"/img/app jogo rps.55de466d.png",revision:null},{url:"/img/aprendizagem.ce7640ea.png",revision:null},{url:"/img/bert.47ca2c6b.png",revision:null},{url:"/img/chatbot.d52724b1.png",revision:null},{url:"/img/chatbot1.74ea1de6.png",revision:null},{url:"/img/chatbotpy.4f91467e.png",revision:null},{url:"/img/chatgpt.e0e63367.png",revision:null},{url:"/img/codigo etica.b466bbd3.png",revision:null},{url:"/img/diagrama.00fa090d.png",revision:null},{url:"/img/impacto.79ee8fca.png",revision:null},{url:"/img/interacao.af373e47.png",revision:null},{url:"/img/jogo rps.6156f917.png",revision:null},{url:"/img/pac.d0c22681.png",revision:null},{url:"/img/pathway.edeec3d5.png",revision:null},{url:"/img/percecao.35cace5b.png",revision:null},{url:"/img/representacao.0b5eab73.png",revision:null},{url:"/img/robot.c764185f.png",revision:null},{url:"/img/rps scratch.83f955f0.png",revision:null},{url:"/img/sml.2a0cd086.png",revision:null},{url:"/img/titanic.371fdf61.png",revision:null},{url:"/img/titanic_py.71cd7065.png",revision:null},{url:"/index.html",revision:"07edf620875158daee35e1c59a93bb0e"},{url:"/js/14.d6017425.js",revision:null},{url:"/js/app.bff462bb.js",revision:null},{url:"/js/chunk-vendors.b4450579.js",revision:null},{url:"/manifest.json",revision:"4dd2751dfa44c648270334e74aa5aa10"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
