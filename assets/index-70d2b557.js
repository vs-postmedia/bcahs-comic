var P=Object.defineProperty;var F=(e,t,s)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var w=(e,t,s)=>(F(e,typeof t!="symbol"?t+"":t,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=s(n);fetch(n.href,a)}})();function f(){}function T(e){return e()}function E(){return Object.create(null)}function b(e){e.forEach(T)}function A(e){return typeof e=="function"}function H(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function D(e){return Object.keys(e).length===0}function v(e,t,s){e.insertBefore(t,s||null)}function u(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function G(e){return document.createTextNode(e)}function I(){return G(" ")}function O(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function R(e){return Array.from(e.childNodes)}let y;function m(e){y=e}function U(){if(!y)throw new Error("Function called outside component initialization");return y}function z(e){U().$$.on_mount.push(e)}const p=[],L=[];let h=[];const M=[],K=Promise.resolve();let x=!1;function Q(){x||(x=!0,K.then(B))}function j(e){h.push(e)}const q=new Set;let d=0;function B(){if(d!==0)return;const e=y;do{try{for(;d<p.length;){const t=p[d];d++,m(t),V(t.$$)}}catch(t){throw p.length=0,d=0,t}for(m(null),p.length=0,d=0;L.length;)L.pop()();for(let t=0;t<h.length;t+=1){const s=h[t];q.has(s)||(q.add(s),s())}h.length=0}while(p.length);for(;M.length;)M.pop()();x=!1,q.clear(),m(e)}function V(e){if(e.fragment!==null){e.update(),b(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}function W(e){const t=[],s=[];h.forEach(o=>e.indexOf(o)===-1?t.push(o):s.push(o)),s.forEach(o=>o()),h=t}const J=new Set;function X(e,t){e&&e.i&&(J.delete(e),e.i(t))}function Y(e,t,s){const{fragment:o,after_update:n}=e.$$;o&&o.m(t,s),j(()=>{const a=e.$$.on_mount.map(T).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...a):b(a),e.$$.on_mount=[]}),n.forEach(j)}function Z(e,t){const s=e.$$;s.fragment!==null&&(W(s.after_update),b(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function ee(e,t){e.$$.dirty[0]===-1&&(p.push(e),Q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function te(e,t,s,o,n,a,i,c=[-1]){const g=y;m(e);const r=e.$$={fragment:null,ctx:[],props:a,update:f,not_equal:n,bound:E(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(g?g.$$.context:[])),callbacks:E(),dirty:c,skip_bound:!1,root:t.target||g.$$.root};i&&i(r.root);let $=!1;if(r.ctx=s?s(e,t.props||{},(l,k,...C)=>{const S=C.length?C[0]:k;return r.ctx&&n(r.ctx[l],r.ctx[l]=S)&&(!r.skip_bound&&r.bound[l]&&r.bound[l](S),$&&ee(e,l)),k}):[],r.update(),$=!0,b(r.before_update),r.fragment=o?o(r.ctx):!1,t.target){if(t.hydrate){const l=R(t.target);r.fragment&&r.fragment.l(l),l.forEach(u)}else r.fragment&&r.fragment.c();t.intro&&X(e.$$.fragment),Y(e,t.target,t.anchor),B()}m(g)}class se{constructor(){w(this,"$$");w(this,"$$set")}$destroy(){Z(this,1),this.$destroy=f}$on(t,s){if(!A(s))return f;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(s),()=>{const n=o.indexOf(s);n!==-1&&o.splice(n,1)}}$set(t){this.$$set&&!D(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ne);const N="/bcahs-comic/assets/smith-b754b9ae.jpg",oe="/bcahs-comic/assets/de-leon-bd2ce349.jpg";function ae(e){let t,s,o,n,a;return{c(){t=_("header"),t.innerHTML="<h1>How are B.C.’s nonbinary youth doing?</h1>",s=I(),o=_("main"),o.innerHTML=`<div id="panel-01" class="row panel no-border svelte-qj3dn5"><div class="center svelte-qj3dn5"><p class="purple-backdrop svelte-qj3dn5"><span class="bold svelte-qj3dn5">In 2023,</span> the McCreary Centre Society released its 2023 survey on the health of British Columbian teens. The survey has been conducted every five years for the past 30 years and is believed to accurately represent over 95% of B.C.’s 12- to 19-year-olds.</p> <p class="text-emphasis svelte-qj3dn5">It was the first post-pandemic survey and it found that <span class="purple svelte-qj3dn5">nonbinary youth</span> had significantly worse mental heath outcomes than their <span class="green svelte-qj3dn5">male</span> and <span class="lite-green svelte-qj3dn5">female</span> peers.</p></div></div> <div class="row legend no-border flex-container"><p class=" svelte-qj3dn5">GUIDE:</p> <p class="svelte-qj3dn5"><span class="swatch green svelte-qj3dn5"></span>Male</p> <p class="svelte-qj3dn5"><span class="swatch lite-green svelte-qj3dn5"></span>Female</p> <p class="svelte-qj3dn5"><span class="swatch purple svelte-qj3dn5"></span>Nonbinary</p></div> <div class="row"><div class="panel two-third"><p class="svelte-qj3dn5">The survey found that nonbinary youth faced a much greater risk of serious mental health issues...</p> <iframe src="https://flo.uri.sh/story/2282024/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:200px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe></div> <div class="panel third"><p class="svelte-qj3dn5">... and reported higher levels of anxiety, depression and PTSD.</p> <iframe src="https://flo.uri.sh/visualisation/17044513/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:200px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe></div></div> <div class="row text-row"><p class="text-container svelte-qj3dn5">Nonbinary youth made up <span class="big-text purple bold-italic svelte-qj3dn5">5%</span> of teens in B.C., according to the survey....</p></div> <div class="row"><div class="panel full no-border svelte-qj3dn5" id="nb-pct-quote"><div class="image-quote-block center svelte-qj3dn5"><img src="${oe}"/> <p class="quote-text svelte-qj3dn5">“That five per cent is made up of youth, and youth who are struggling. And you can’t just swipe that under the rug. <span class="purple svelte-qj3dn5">These are people, these are kids.</span> And to ignore them, you’re neglecting this huge community.”</p></div> <p class="name-title svelte-qj3dn5">– Nik De Leon, a nonbinary and genderqueer 18-year-old</p></div></div> <div class="row" id="panel-outcomes"><div class="panel full"><p class="svelte-qj3dn5">... but they face disproportionately high levels of bullying, abuse, exclusion and harassment.</p> <iframe src="https://flo.uri.sh/story/2282044/embed" title="Interactive or visual content" class="flourish-embed-iframe" frameborder="0" scrolling="no" style="width:100%;height:260px;" sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"></iframe></div></div> <div class="row"><div class="panel full no-border" id="smith-quote"><div class="image-quote-block center left svelte-qj3dn5"><img src="${N}"/> <p class="quote-text svelte-qj3dn5">“We definitely see young people who identify as nonbinary experiencing higher rates of <span class="purple svelte-qj3dn5">violence, discrimination, harassment, abuse, social exclusion, trauma, stigma.</span>”</p></div> <p class="name-title svelte-qj3dn5">– Annie Smith, executive director of the McCreary Centre Society</p></div></div> <div class="row"><div class="panel full no-border"><h2 class="center subhead purple-backdrop svelte-qj3dn5">Solutions exist, experts say, but there’s lots of work to be done</h2> <div class="text-block flex-container svelte-qj3dn5"><p class="border svelte-qj3dn5">Experts say things like gay-straight alliance clubs, LGBTQ+ inclusion policies, and gender-diversity classes in school can all help, but they need to be expanded and better supported.</p> <p class="border svelte-qj3dn5">Recently, though, there’s been a political and public backlash, with anti-SOGI protests in B.C. and several provinces putting policies in place that disproportionately target nonbinary youth.</p></div></div></div> <div class="row"><div class="panel full no-border svelte-qj3dn5" id="smith-quote-02"><div class="image-quote-block center svelte-qj3dn5"><img src="${N}" class="svelte-qj3dn5"/> <p class="quote-text svelte-qj3dn5">“It’s <span class="purple svelte-qj3dn5">all our responsibility</span> to really look at this data and think about how we can make safer spaces for these young people. <span class="purple svelte-qj3dn5">Because we know they’ll thrive if we do.</span>”</p></div></div></div>`,n=I(),a=_("footer"),a.innerHTML='<p class="source svelte-qj3dn5">Source:  <a href="https://mcs.bc.ca/about_bcahs" target="_blank" class="svelte-qj3dn5">McCreary Centre Society</a></p> <div style="width:100%!;margin-top:4px!important;text-align:right!important;"><a class="flourish-credit" href="https://public.flourish.studio/story/2282024/?utm_source=embed&amp;utm_campaign=story/2282024" target="_top" style="text-decoration:none!important"><img alt="Made with Flourish" src="https://public.flourish.studio/resources/made_with_flourish.svg" style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"/></a></div>',O(o,"id","container"),O(o,"class","svelte-qj3dn5")},m(i,c){v(i,t,c),v(i,s,c),v(i,o,c),v(i,n,c),v(i,a,c)},p:f,i:f,o:f,d(i){i&&(u(t),u(s),u(o),u(n),u(a))}}}async function re(){}function ie(e){return z(re),[]}class le extends se{constructor(t){super(),te(this,t,ie,ae,H,{})}}new le({target:document.getElementById("app")});
