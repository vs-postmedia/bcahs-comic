var P=Object.defineProperty;var H=(e,t,s)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var w=(e,t,s)=>(H(e,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();function p(){}function M(e){return e()}function O(){return Object.create(null)}function g(e){e.forEach(M)}function N(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function D(e){return Object.keys(e).length===0}function m(e,t,s){e.insertBefore(t,s||null)}function u(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function I(){return G(" ")}function L(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function R(e){return Array.from(e.childNodes)}let v;function b(e){v=e}function z(){if(!v)throw new Error("Function called outside component initialization");return v}function K(e){z().$$.on_mount.push(e)}const f=[],T=[];let h=[];const A=[],Q=Promise.resolve();let q=!1;function U(){q||(q=!0,Q.then(j))}function $(e){h.push(e)}const x=new Set;let d=0;function j(){if(d!==0)return;const e=v;do{try{for(;d<f.length;){const t=f[d];d++,b(t),V(t.$$)}}catch(t){throw f.length=0,d=0,t}for(b(null),f.length=0,d=0;T.length;)T.pop()();for(let t=0;t<h.length;t+=1){const s=h[t];x.has(s)||(x.add(s),s())}h.length=0}while(f.length);for(;A.length;)A.pop()();q=!1,x.clear(),b(e)}function V(e){if(e.fragment!==null){e.update(),g(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}function W(e){const t=[],s=[];h.forEach(o=>e.indexOf(o)===-1?t.push(o):s.push(o)),s.forEach(o=>o()),h=t}const J=new Set;function X(e,t){e&&e.i&&(J.delete(e),e.i(t))}function Y(e,t,s){const{fragment:o,after_update:n}=e.$$;o&&o.m(t,s),$(()=>{const r=e.$$.on_mount.map(M).filter(N);e.$$.on_destroy?e.$$.on_destroy.push(...r):g(r),e.$$.on_mount=[]}),n.forEach($)}function Z(e,t){const s=e.$$;s.fragment!==null&&(W(s.after_update),g(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function ee(e,t){e.$$.dirty[0]===-1&&(f.push(e),U(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,s,o,n,r,a,c=[-1]){const y=v;b(e);const i=e.$$={fragment:null,ctx:[],props:r,update:p,not_equal:n,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(y?y.$$.context:[])),callbacks:O(),dirty:c,skip_bound:!1,root:t.target||y.$$.root};a&&a(i.root);let k=!1;if(i.ctx=s?s(e,t.props||{},(l,C,...S)=>{const E=S.length?S[0]:C;return i.ctx&&n(i.ctx[l],i.ctx[l]=E)&&(!i.skip_bound&&i.bound[l]&&i.bound[l](E),k&&ee(e,l)),C}):[],i.update(),k=!0,g(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const l=R(t.target);i.fragment&&i.fragment.l(l),l.forEach(u)}else i.fragment&&i.fragment.c();t.intro&&X(e.$$.fragment),Y(e,t.target,t.anchor),j()}b(y)}class se{constructor(){w(this,"$$");w(this,"$$set")}$destroy(){Z(this,1),this.$destroy=p}$on(t,s){if(!N(s))return p;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(s),()=>{const n=o.indexOf(s);n!==-1&&o.splice(n,1)}}$set(t){this.$$set&&!D(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ne);const B="/bcahs-comic/assets/smith-b754b9ae.jpg",oe="/bcahs-comic/assets/de-leon-bd2ce349.jpg";function re(e){let t,s,o,n,r;return{c(){t=_("header"),t.innerHTML="<h1>The lastest survey on B.C. teens is out. How are nonbinary youth doing?</h1>",s=I(),o=_("main"),o.innerHTML=`<div id="panel-01" class="row panel no-border svelte-qbmfts"><div class="center svelte-qbmfts"><p class="purple-backdrop svelte-qbmfts"><span class="bold svelte-qbmfts">In 2023,</span> the McCreary Centre Society released its <a href="https://mcs.bc.ca/about_bcahs" target="_blank" class="svelte-qbmfts">2023 survey</a> on the health of British Columbian teens. The survey has been conducted every five years for the past 30 years and is believed to accurately represent over 95% of B.C.’s 12- to 19-year-olds.</p> <p class="text-emphasis svelte-qbmfts">It was the first post-pandemic survey and it found that <span class="purple svelte-qbmfts">nonbinary youth</span> had significantly worse mental heath outcomes than their <span class="green svelte-qbmfts">male</span> and <span class="lite-green svelte-qbmfts">female</span> peers.</p></div></div> <div class="row"><div class="panel two-third"><p class="svelte-qbmfts">The survey found that nonbinary youth faced a much greater risk of serious mental health issues...</p> <iframe src="https://flo.uri.sh/story/2282024/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:200px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe></div> <div class="panel third"><p class="svelte-qbmfts">... and reported higher levels of anxiety, depression and PTSD.</p> <iframe src="https://flo.uri.sh/visualisation/17044513/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:200px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe></div></div> <div class="row text-row flex-center"><p class="text-container svelte-qbmfts">Nonbinary youth made up</p> <p class="big-text purple bold-italic svelte-qbmfts">5%</p> <p class="svelte-qbmfts">of teens in B.C., according to the survey....</p></div> <div class="row"><div class="panel full no-border" id="nb-pct-quote"><div class="image-quote-block center svelte-qbmfts"><img src="${oe}" class="right"/> <p class="quote-text svelte-qbmfts">“That five per cent is made up of youth, and youth who are struggling. And you can’t just swipe that under the rug. <span class="purple svelte-qbmfts">These are people, these are kids.</span> And to ignore them, you’re neglecting this huge community.”</p></div> <p class="name-title svelte-qbmfts">– Nik De Leon, a nonbinary and genderqueer 18-year-old</p></div></div> <div class="row" id="panel-outcomes"><div class="panel full"><p class="svelte-qbmfts">... but they face disproportionately high levels of bullying, abuse, exclusion and harassment.</p> <iframe src="https://flo.uri.sh/story/2282044/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:260px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe></div></div> <div class="row"><div class="panel full no-border" id="smith-quote"><div class="image-quote-block center left svelte-qbmfts"><img src="${B}" class="left"/> <p class="quote-text svelte-qbmfts">“We definitely see young people who identify as nonbinary experiencing higher rates of <span class="purple svelte-qbmfts">violence, discrimination, harassment, abuse, social exclusion, trauma, stigma.</span>”</p></div> <p class="name-title svelte-qbmfts">– Annie Smith, executive director of the McCreary Centre Society</p></div></div> <div class="row"><div class="panel full no-border"><h2 class="center subhead purple-backdrop svelte-qbmfts">Solutions exist, experts say, but there’s lots of work to be done</h2> <div class="text-block flex-container svelte-qbmfts"><p class="border svelte-qbmfts">Experts say things like gay-straight alliance clubs, LGBTQ+ inclusion policies, and gender-diversity classes in school can all help, but they need to be expanded and better supported.</p> <p class="border svelte-qbmfts">Recently, though, there’s been a political and public backlash, with anti-SOGI protests in B.C. and several provinces putting policies in place that disproportionately target nonbinary youth.</p></div></div></div> <div class="row"><div class="panel full no-border svelte-qbmfts" id="smith-quote-02"><div class="image-quote-block center svelte-qbmfts"><img src="${B}" class="right svelte-qbmfts"/> <p class="quote-text svelte-qbmfts">“It’s <span class="purple svelte-qbmfts">all our responsibility</span> to really look at this data and think about how we can make safer spaces for these young people. <span class="purple svelte-qbmfts">Because we know they’ll thrive if we do.</span>”</p></div></div></div>`,n=I(),r=_("footer"),r.innerHTML='<p class="source svelte-qbmfts">Source:  <a href="https://mcs.bc.ca/about_bcahs" target="_blank" class="svelte-qbmfts">McCreary Centre Society</a></p> <div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/story/2282024/?utm_source=embed&amp;utm_campaign=story/2282024" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"/></a></div>',L(o,"id","container"),L(o,"class","svelte-qbmfts")},m(a,c){m(a,t,c),m(a,s,c),m(a,o,c),m(a,n,c),m(a,r,c)},p,i:p,o:p,d(a){a&&(u(t),u(s),u(o),u(n),u(r))}}}async function ie(){}function ae(e){return K(ie),[]}class le extends se{constructor(t){super(),te(this,t,ae,re,F,{})}}new le({target:document.getElementById("app")});
