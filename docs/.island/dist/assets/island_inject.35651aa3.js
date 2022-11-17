import*as u from"react";import le,{useState as w,useEffect as F,useRef as q,useCallback as ue,lazy as Te,forwardRef as Ce,createContext as Oe,Fragment as Ne}from"react";import{jsx as r,jsxs as v}from"react/jsx-runtime";var j=function(e){return function(t){return Math.pow(t,e)}},B=function(e){return function(t){return 1-Math.abs(Math.pow(t-1,e))}},X=function(e){return function(t){return t<.5?j(e)(t*2)/2:B(e)(t*2-1)/2+.5}},Ae=function(e){return e},Me=j(2),Le=B(2),Re=X(2),Pe=j(3),$e=B(3),qe=X(3),ze=j(4),De=B(4),je=X(4),Be=j(5),He=B(5),We=X(5),Fe=function(e){return 1+Math.sin(Math.PI/2*e-Math.PI/2)},Ue=function(e){return Math.sin(Math.PI/2*e)},Ge=function(e){return(1+Math.sin(Math.PI*e-Math.PI/2))/2},oe=function(e){var t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?(e-=1.5/n,t*e*e+.75):e<2.5/n?(e-=2.25/n,t*e*e+.9375):(e-=2.625/n,t*e*e+.984375)},ye=function(e){return 1-oe(1-e)},Ve=function(e){return e<.5?ye(e*2)*.5:oe(e*2-1)*.5+.5},Ke=Object.freeze({linear:Ae,quadIn:Me,quadOut:Le,quadInOut:Re,cubicIn:Pe,cubicOut:$e,cubicInOut:qe,quartIn:ze,quartOut:De,quartInOut:je,quintIn:Be,quintOut:He,quintInOut:We,sineIn:Fe,sineOut:Ue,sineInOut:Ge,bounceOut:oe,bounceIn:ye,bounceInOut:Ve}),Q=function(t){var n=t.from,o=t.to,a=t.duration,i=t.delay,l=t.easing,s=t.onStart,d=t.onUpdate,h=t.onFinish;for(var p in n)o[p]===void 0&&(o[p]=n[p]);for(var m in o)n[m]===void 0&&(n[m]=o[m]);this.from=n,this.to=o,this.duration=a||500,this.delay=i||0,this.easing=l||"linear",this.onStart=s,this.onUpdate=d||function(){},this.onFinish=h,this.startTime=Date.now()+this.delay,this.started=!1,this.finished=!1,this.timer=null,this.keys={}};Q.prototype.update=function(){if(this.time=Date.now(),!(this.time<this.startTime)&&!this.finished){if(this.elapsed===this.duration){this.finished||(this.finished=!0,this.onFinish&&this.onFinish(this.keys));return}this.elapsed=this.time-this.startTime,this.elapsed=this.elapsed>this.duration?this.duration:this.elapsed;for(var t in this.to)this.keys[t]=this.from[t]+(this.to[t]-this.from[t])*Ke[this.easing](this.elapsed/this.duration);this.started||(this.onStart&&this.onStart(this.keys),this.started=!0),this.onUpdate(this.keys)}};Q.prototype.start=function(){var t=this;this.startTime=Date.now()+this.delay;var n=function(){t.update(),t.timer=requestAnimationFrame(n),t.finished&&(cancelAnimationFrame(t.timer),t.timer=null)};n()};Q.prototype.stop=function(){cancelAnimationFrame(this.timer),this.timer=null};var Ye=typeof global=="object"&&global&&global.Object===Object&&global;const Xe=Ye;var Qe=typeof self=="object"&&self&&self.Object===Object&&self,Ze=Xe||Qe||Function("return this")();const we=Ze;var Je=we.Symbol;const U=Je;var _e=Object.prototype,et=_e.hasOwnProperty,tt=_e.toString,$=U?U.toStringTag:void 0;function nt(e){var t=et.call(e,$),n=e[$];try{e[$]=void 0;var o=!0}catch{}var a=tt.call(e);return o&&(t?e[$]=n:delete e[$]),a}var rt=Object.prototype,ot=rt.toString;function at(e){return ot.call(e)}var it="[object Null]",st="[object Undefined]",de=U?U.toStringTag:void 0;function ct(e){return e==null?e===void 0?st:it:de&&de in Object(e)?nt(e):at(e)}function lt(e){return e!=null&&typeof e=="object"}var ut="[object Symbol]";function dt(e){return typeof e=="symbol"||lt(e)&&ct(e)==ut}var ft=/\s/;function ht(e){for(var t=e.length;t--&&ft.test(e.charAt(t)););return t}var mt=/^\s+/;function pt(e){return e&&e.slice(0,ht(e)+1).replace(mt,"")}function G(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var fe=0/0,vt=/^[-+]0x[0-9a-f]+$/i,gt=/^0b[01]+$/i,bt=/^0o[0-7]+$/i,yt=parseInt;function he(e){if(typeof e=="number")return e;if(dt(e))return fe;if(G(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=G(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=pt(e);var n=gt.test(e);return n||bt.test(e)?yt(e.slice(2),n?2:8):vt.test(e)?fe:+e}var wt=function(){return we.Date.now()};const J=wt;var _t="Expected a function",St=Math.max,xt=Math.min;function Et(e,t,n){var o,a,i,l,s,d,h=0,p=!1,m=!1,x=!0;if(typeof e!="function")throw new TypeError(_t);t=he(t)||0,G(n)&&(p=!!n.leading,m="maxWait"in n,i=m?St(he(n.maxWait)||0,t):i,x="trailing"in n?!!n.trailing:x);function y(c){var f=o,S=a;return o=a=void 0,h=c,l=e.apply(S,f),l}function E(c){return h=c,s=setTimeout(g,t),p?y(c):l}function N(c){var f=c-d,S=c-h,ce=t-f;return m?xt(ce,i-S):ce}function b(c){var f=c-d,S=c-h;return d===void 0||f>=t||f<0||m&&S>=i}function g(){var c=J();if(b(c))return _(c);s=setTimeout(g,N(c))}function _(c){return s=void 0,x&&o?y(c):(o=a=void 0,l)}function Z(){s!==void 0&&clearTimeout(s),h=0,o=d=a=s=void 0}function R(){return s===void 0?l:_(J())}function P(){var c=J(),f=b(c);if(o=arguments,a=this,d=c,f){if(s===void 0)return E(d);if(m)return clearTimeout(s),s=setTimeout(g,t),y(d)}return s===void 0&&(s=setTimeout(g,t)),l}return P.cancel=Z,P.flush=R,P}var kt="Expected a function";function It(e,t,n){var o=!0,a=!0;if(typeof e!="function")throw new TypeError(kt);return G(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),Et(e,t,{leading:o,maxWait:t,trailing:a})}function Tt({backTop:e}){const t=e!=null?e:!0,n=()=>{const i=document.documentElement,l=i.scrollTop;new Q({from:{scrollTop:l},to:{scrollTop:0},easing:"quadIn",duration:500,onUpdate:d=>{i.scrollTop=Number(d==null?void 0:d.scrollTop)}}).start()},[o,a]=w(!1);return F(()=>{const i=It(()=>{const s=document.documentElement.scrollTop;a(s>=200)},500);return document.addEventListener("scroll",i),()=>{i.cancel(),document.removeEventListener("scroll",i)}}),t&&o?r("div",{className:"fixed bottom-10 right-30 z-10",display:"none md:block",onClick:n,children:r("button",{className:"w-10 h-10 rounded-full duration-300",style:{backgroundColor:"var(--island-c-bg)"},color:"gray hover:gray-500",bg:"~ gray-200 hover:gray-300",shadow:"sm hover:md",children:r("div",{flex:"~ center",children:r("div",{className:"i-carbon-chevron-up",text:"xl"})})})}):null}const Ct="modulepreload",Ot=function(e){return"/"+e},me={},ae=function(t,n,o){return!n||n.length===0?t():Promise.all(n.map(a=>{if(a=Ot(a),a in me)return;me[a]=!0;const i=a.endsWith(".css"),l=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":Ct,i||(s.as="script",s.crossOrigin=""),s.href=a,document.head.appendChild(s),i)return new Promise((d,h)=>{s.addEventListener("load",d),s.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t())},Nt="_searchInput_y03a3_1",At="_searchCommand_y03a3_7",Mt="_focus_y03a3_14",ee={searchInput:Nt,searchCommand:At,focus:Mt},Lt=e=>u.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",...e},u.createElement("path",{fill:"#888888",d:"m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9Z"})),Rt=e=>u.createElement("svg",{width:32,height:32,viewBox:"0 0 24 24",...e},u.createElement("g",{fill:"none",stroke:"var(--island-c-brand)",strokeLinecap:"round",strokeWidth:2},u.createElement("path",{strokeDasharray:60,strokeDashoffset:60,strokeOpacity:.3,d:"M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"},u.createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"1.3s",values:"60;0"})),u.createElement("path",{strokeDasharray:15,strokeDashoffset:15,d:"M12 3C16.9706 3 21 7.02944 21 12"},u.createElement("animate",{fill:"freeze",attributeName:"stroke-dashoffset",dur:"0.3s",values:"15;0"}),u.createElement("animateTransform",{attributeName:"transform",dur:"1.5s",repeatCount:"indefinite",type:"rotate",values:"0 12 12;360 12 12"}))));function Pt(e){const{suggestion:t,query:n}=e,o=()=>{if(t.type==="header"){const{header:i,headerHighlightIndex:l}=t,s=i.slice(0,l),d=i.slice(l+n.length);return v("div",{font:"medium",children:[r("span",{children:s}),r("span",{bg:"brand-light",p:"y-0.4 x-0.8",rounded:"md",text:"text-1",children:n}),r("span",{children:d})]})}else return r("div",{font:"medium",children:t.header})},a=()=>{if(t.type!=="content")return;const{statementHighlightIndex:i,statement:l}=t,s=l.slice(0,i),d=l.slice(i+n.length);return v("div",{font:"normal",text:"sm gray-light",w:"100%",children:[r("span",{children:s}),r("span",{bg:"brand-light",p:"y-0.4 x-0.8",rounded:"md",text:"[#000]",children:n}),r("span",{children:d})]})};return v("div",{"border-b-1":"","border-t-1":"","table-cell":"",p:"x-3 y-2",hover:"bg-[#f3f4f5] ",text:"#2c3e50",className:`border-right-none border-[#eaecef] ${e.isCurrent?"bg-[#f3f4f5]":"bg-white"}`,transition:"bg duration-200",children:[r("div",{font:"medium",text:"sm",children:o()}),t.type==="content"&&a()]})}const H={ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",ENTER:"Enter",SEARCH:"KeyK"};function $t(e){const[t,n]=w(""),[o,a]=w([]),[i,l]=w(!1),[s,d]=w(!1),[h,p]=w(!1),[m,x]=w(-1),y=q(),E=q(),[N,b]=w(!0),g=q(null),_=!i||s,Z=!_&&o.length===0,R=ue(async()=>{if(y.current)return Promise.resolve();{const{PageSearcher:c}=await ae(()=>import("./search.31c106a6.js"),[]);y.current=new c(e.langRoutePrefix),await y.current.init(),l(!0)}},[e.langRoutePrefix]),P=ue(async c=>{const f=c.target.value;n(f),E.current=E.current||R(),await E.current,d(!0);const S=await y.current.match(f);d(!1),a(S)},[R]);return F(()=>{const c=f=>{switch(f.code){case H.SEARCH:(f.ctrlKey||f.metaKey)&&g.current&&(f.preventDefault(),h?(p(!1),g.current.blur()):(p(!0),g.current.focus()));break;case H.ARROW_DOWN:f.preventDefault(),x((m+1)%o.length);break;case H.ARROW_UP:f.preventDefault(),x((m-1+o.length)%o.length);break;case H.ENTER:if(m>=0){const S=o[m];window.location.href=S.link}break}};return document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[m,h,o]),F(()=>{b(!1)},[]),v("div",{flex:"","items-center":"~",relative:"",mr:"2",font:"semibold",children:[r(Lt,{w:"5",h:"5",fill:"currentColor",onClick:()=>{p(!0),g.current.focus()}}),r("input",{disabled:N,cursor:"text focus:auto",placeholder:"Search",height:"8",border:"none",type:"text",text:"sm",p:"t-0 r-2 b-0 l-2",transition:"all duration-200 ease",className:`rounded-sm ${ee.searchInput} ${h?ee.focus:""}`,"aria-label":"Search",autoComplete:"off",onChange:P,onBlur:()=>setTimeout(()=>p(!1),200),onFocus:()=>{p(!0),E.current=R()},ref:g}),v("div",{m:"r-3",w:"10",h:"6",p:"x-1.5",rounded:"md",border:"1px solid gray-light-3",text:"xs gray-light-3",flex:"~","items-center":"~",justify:"around",className:ee.searchCommand,children:[r("span",{children:"\u2318"}),r("span",{children:"K"})]}),h&&t&&v("ul",{pos:"fixed sm:absolute top-12 sm:top-8 left-0",z:"60","border-1":"",p:"2",list:"none",bg:"bg-default",className:"w-100% sm:min-w-500px sm:max-w-700px",children:[o.map((c,f)=>r("li",{rounded:"sm",cursor:"pointer",w:"100%",className:"border-collapse",children:r("a",{block:"",href:c.link,className:"whitespace-normal",children:v("div",{table:"",w:"100%",className:"border-collapse",children:[r("div",{w:"35%","border-t-1":"","border-b-1":"","border-r-1":"","border-left":"none","table-cell":"",align:"middle right",p:"1.2",text:"sm right [#2c3e50]",font:"semibold",className:"bg-[#f5f5f5] border-[#eaecef]",children:c.title}),r(Pt,{suggestion:c,query:t,isCurrent:f===m})]})})},c.title)),Z&&r("li",{flex:"center",children:r("div",{p:"2",text:"sm #2c3e50",children:"No results found"})}),_&&r("li",{flex:"center",children:r("div",{p:"2",text:"sm",children:r(Rt,{})})})]})]})}const qt="_navHamburger_14nz8_1",zt="_container_14nz8_14",Dt="_top_14nz8_21",jt="_middle_14nz8_27",Bt="_bottom_14nz8_33",Ht="_active_14nz8_39",A={navHamburger:qt,container:zt,top:Dt,middle:jt,bottom:Bt,active:Ht},Wt="_navScreen_1mkpq_1",Ft="_active_1mkpq_17",Ut="_container_1mkpq_21",Gt="_navMenu_1mkpq_27",Vt="_navMenuItem_1mkpq_34",Kt="_navAppearance_1mkpq_46",Yt="_socialAndAppearance_1mkpq_50",k={navScreen:Wt,active:Ft,container:Ut,navMenu:Gt,navMenuItem:Vt,navAppearance:Kt,socialAndAppearance:Yt};function Xt(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)}var ie=!1;if(typeof window<"u"){var pe={get passive(){ie=!0}};window.addEventListener("testPassive",null,pe),window.removeEventListener("testPassive",null,pe)}var V=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),M=[],K=!1,se=-1,z=void 0,T=void 0,D=void 0,Se=function(t){return M.some(function(n){return!!(n.options.allowTouchMove&&n.options.allowTouchMove(t))})},Y=function(t){var n=t||window.event;return Se(n.target)||n.touches.length>1?!0:(n.preventDefault&&n.preventDefault(),!1)},Qt=function(t){if(D===void 0){var n=!!t&&t.reserveScrollBarGap===!0,o=window.innerWidth-document.documentElement.clientWidth;if(n&&o>0){var a=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);D=document.body.style.paddingRight,document.body.style.paddingRight=a+o+"px"}}z===void 0&&(z=document.body.style.overflow,document.body.style.overflow="hidden")},Zt=function(){D!==void 0&&(document.body.style.paddingRight=D,D=void 0),z!==void 0&&(document.body.style.overflow=z,z=void 0)},Jt=function(){return window.requestAnimationFrame(function(){if(T===void 0){T={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var t=window,n=t.scrollY,o=t.scrollX,a=t.innerHeight;document.body.style.position="fixed",document.body.style.top=-n,document.body.style.left=-o,setTimeout(function(){return window.requestAnimationFrame(function(){var i=a-window.innerHeight;i&&n>=a&&(document.body.style.top=-(n+i))})},300)}})},en=function(){if(T!==void 0){var t=-parseInt(document.body.style.top,10),n=-parseInt(document.body.style.left,10);document.body.style.position=T.position,document.body.style.top=T.top,document.body.style.left=T.left,window.scrollTo(n,t),T=void 0}},tn=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},nn=function(t,n){var o=t.targetTouches[0].clientY-se;return Se(t.target)?!1:n&&n.scrollTop===0&&o>0||tn(n)&&o<0?Y(t):(t.stopPropagation(),!0)},rn=function(t,n){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!M.some(function(a){return a.targetElement===t})){var o={targetElement:t,options:n||{}};M=[].concat(Xt(M),[o]),V?Jt():Qt(n),V&&(t.ontouchstart=function(a){a.targetTouches.length===1&&(se=a.targetTouches[0].clientY)},t.ontouchmove=function(a){a.targetTouches.length===1&&nn(a,t)},K||(document.addEventListener("touchmove",Y,ie?{passive:!1}:void 0),K=!0))}},on=function(){V&&(M.forEach(function(t){t.targetElement.ontouchstart=null,t.targetElement.ontouchmove=null}),K&&(document.removeEventListener("touchmove",Y,ie?{passive:!1}:void 0),K=!1),se=-1),V?en():Zt(),M=[]};const an="_navScreenMenuGroup_1xte3_1",sn="_open_1xte3_7",cn="_button_1xte3_12",ln="_buttonSpan_1xte3_25",un="_items_1xte3_32",dn="_down_1xte3_40",I={navScreenMenuGroup:an,open:sn,button:cn,buttonSpan:ln,items:un,down:dn},fn=e=>u.createElement("svg",{width:"1em",height:"1em",viewBox:"0 0 32 32",...e},u.createElement("path",{fill:"currentColor",d:"M16 22L6 12l1.4-1.4l8.6 8.6l8.6-8.6L26 12z"})),hn=e=>u.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",...e},u.createElement("path",{fill:"currentColor",d:"M10 6v2h12.59L6 24.59L7.41 26L24 9.41V22h2V6H10z"})),mn="_link_r3fql_1",pn={link:mn},ne="island-theme-appearance",vn=["https://island-tutorial.sanyuan0704.top","https://island.sanyuan0704.top","https://islandjs.dev"],gn=()=>typeof window<"u",bn=/^(https?:)?\/\//;function xe(e){const{href:t="/",children:n,className:o=""}=e,a=bn.test(t),i=vn.some(d=>t.startsWith(d));return r("a",{href:t,target:a&&!i?"_blank":"",rel:a?"noopener noreferrer":void 0,className:`${pn.link} ${o}`,children:n})}function Ee(e){const{activeIndex:t}=e,[n,o]=w(!1);return v("div",{relative:"",className:`${n?I.open:""} ${I.navScreenMenuGroup}`,children:[v("button",{className:I.button,onClick:()=>{o(!n)},children:[r("span",{className:I.buttonSpan,children:e.text}),r(fn,{className:`${n?I.open:""} ${I.down} `})]}),r("div",{children:r("div",{className:I.items,children:e.items.map((a,i)=>i===t?r("div",{className:"pa-1",children:r("span",{mr:"1",text:"brand",children:a.text})},a.link):r("div",{className:"pa-1",font:"medium",children:r(xe,{href:a.link,children:r("div",{children:v("div",{flex:"",children:[r("span",{mr:"1",children:a.text}),r(hn,{w:"11px",h:"11px",text:"text-3",m:"t-1 r-1"})]})})})},a.link))})})]})}function ke(e){const t=Te(e);let n,o;const i=Ce(function(s,d){const p=q(n!=null?n:t).current;return r(p,{ref:d,...s})});return i.preload=()=>(o||(o=e().then(l=>(n=l.default,l))),o),i}const ve=ke(()=>ae(()=>import("./getting-started.63e35ee0.js"),[])),ge=ke(()=>ae(()=>import("./index.dbb9a433.js"),[])),yn=[{path:"/guide/getting-started",element:le.createElement(ve),filePath:"/Users/kaiyu.kong/kaiyu.kong/high-project/docs/island-app/docs/guide/getting-started.md",preload:ve.preload},{path:"/",element:le.createElement(ge),filePath:"/Users/kaiyu.kong/kaiyu.kong/high-project/docs/island-app/docs/index.md",preload:ge.preload}];Oe({data:gn()?window==null?void 0:window.ISLAND_PAGE_DATA:null,setData:e=>{}});const Hn=(e=()=>!0)=>Promise.all(yn.filter(e).map(async t=>({...await t.preload(),routePath:t.path})));function wn(e){return e.charAt(0)==="/"?e:"/"+e}function _n(e){if(!e)return"/";if(e.startsWith("http"))return e;let t="";return t+=".html",e.endsWith("/")&&(t="index"+t),wn(`${e}${t}`)}function Sn(e){const{pathname:t}=e,n=new RegExp(e.activeMatch||e.link).test(t);return r("div",{text:"sm",font:"medium",m:"x-3",className:`${n?"text-brand":""}`,children:r(xe,{href:_n(e.link),children:e.text})},e.text)}const xn="_check_1tqe3_17",En="_icon_1tqe3_34",kn="_dark_1tqe3_29",te={switch:"_switch_1tqe3_1",check:xn,icon:En,dark:kn};function In(e){var t;return r("button",{className:`${te.switch} ${e.className}`,id:(t=e.id)!=null?t:"",type:"button",role:"switch",...e.onClick?{onClick:e.onClick}:{},children:r("span",{className:te.check,children:r("span",{className:te.icon,children:e.children})})})}const Tn="_sun_8e60k_1",Cn="_moon_8e60k_5",be={sun:Tn,moon:Cn},On=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",...e},u.createElement("path",{d:"M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z"}),u.createElement("path",{d:"M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z"}),u.createElement("path",{d:"M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z"}),u.createElement("path",{d:"M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z"}),u.createElement("path",{d:"M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z"}),u.createElement("path",{d:"M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"}),u.createElement("path",{d:"M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"}),u.createElement("path",{d:"M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z"}),u.createElement("path",{d:"M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z"})),Nn=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",viewBox:"0 0 24 24",...e},u.createElement("path",{d:"M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z"}));let C=!0,W,O,L;typeof window<"u"&&typeof localStorage<"u"&&(O=localStorage.getItem(ne)||"auto",L=window.matchMedia("(prefers-color-scheme: dark)"),C=O==="auto"?L.matches:O==="dark",L.onchange=e=>{O==="auto"&&re(C=e.matches)});const re=e=>{W[e?"add":"remove"]("dark")},An=()=>{if(typeof window<"u"&&W===void 0){W=document.documentElement.classList;const e=()=>{const t=localStorage.getItem(ne)||"auto";W&&(re(t==="auto"?L.matches:t==="dark"),C=!C)};window.addEventListener("storage",e)}return()=>{re(C=!C),typeof window<"u"&&typeof localStorage<"u"&&(C?O=L.matches?"auto":"dark":O=L.matches?"light":"auto",localStorage.setItem(ne,O))}};function Ie(e){const t=An();return v(In,{onClick:t,children:[r(On,{className:be.sun}),r(Nn,{className:be.moon})]})}const Mn=e=>u.createElement("svg",{width:32,height:32,viewBox:"0 0 32 32",...e},u.createElement("path",{fill:"currentColor",d:"M27.85 29H30l-6-15h-2.35l-6 15h2.15l1.6-4h6.85zm-7.65-6l2.62-6.56L25.45 23zM18 7V5h-7V2H9v3H2v2h10.74a14.71 14.71 0 0 1-3.19 6.18A13.5 13.5 0 0 1 7.26 9h-2.1a16.47 16.47 0 0 0 3 5.58A16.84 16.84 0 0 1 3 18l.75 1.86A18.47 18.47 0 0 0 9.53 16a16.92 16.92 0 0 0 5.76 3.84L16 18a14.48 14.48 0 0 1-5.12-3.37A17.64 17.64 0 0 0 14.8 7z"})),Ln=e=>u.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",...e},u.createElement("title",null,"GitHub"),u.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})),Rn={github:Ln},Pn=({translationMenuData:e})=>r("div",{className:k.navTranslations,flex:"~",text:"sm",font:"bold",justify:"center",children:r("div",{m:"x-1.5",children:r(Ee,{...e})})}),$n=({socialLinks:e})=>r("div",{className:"social-links",flex:"","items-center":"",before:"menu-item-before",children:r("div",{flex:"","items-center":"",w:"9",h:"9",transition:"color duration-300",color:"hover:brand",children:e.map(t=>{const n=Rn[t.icon];return r("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",w:"5",h:"5",children:r(n,{fill:"currentColor"})},t.link)})})});function qn(e){var N;const{isScreenOpen:t,localeData:n,siteData:o,pathname:a}=e,i=q(null),l=Object.values(o.themeConfig.locales||{}),s=l.length>1,d=n.nav||[],h=((N=o==null?void 0:o.themeConfig)==null?void 0:N.socialLinks)||[],p=o.appearance!==!1,m=h.length>0,x=s?{text:r(Mn,{w:"18px",h:"18px"}),items:l.map(b=>({text:b.label,link:`/${b.lang}`})),activeIndex:l.findIndex(b=>b.lang===n.lang)}:null,y=()=>r("div",{className:`items-center appearance pa-2 ${k.navAppearance}`,flex:"~",justify:"center",children:r(Ie,{})}),E=({menuItems:b})=>r("div",{className:k.navMenu,children:b.map((g,_)=>r("div",{w:"100%",className:k.navMenuItem,children:"link"in g?r(Sn,{pathname:a,...g},_):r("div",{m:"x-3",last:"mr-0",children:r(Ee,{...g})},_)},_))});return F(()=>(i.current&&t&&rn(i.current,{reserveScrollBarGap:!0}),()=>{on()}),[t]),r("div",{className:`${k.navScreen} ${t?k.active:""}`,ref:i,id:"navScreen",children:v("div",{className:k.container,children:[r(E,{menuItems:d}),v("div",{className:k.socialAndAppearance,flex:"~",justify:"center","items-center":"center",children:[p&&r(y,{}),m&&r($n,{socialLinks:h})]}),s&&r(Pn,{translationMenuData:x})]})})}function zn(){const[e,t]=w(!1);function n(){t(!0),window.addEventListener("resize",i)}function o(){t(!1),window.removeEventListener("resize",i)}function a(){e?o():n()}function i(){window.outerWidth>=768&&o()}return{isScreenOpen:e,openScreen:n,closeScreen:o,toggleScreen:a}}function Dn(e){const{localeData:t,siteData:n,pathname:o}=e,{isScreenOpen:a,toggleScreen:i}=zn();return v(Ne,{children:[r("button",{onClick:i,className:`${a?A.active:""} ${A.navHamburger}`,children:v("span",{className:A.container,children:[r("span",{className:A.top}),r("span",{className:A.middle}),r("span",{className:A.bottom})]})}),r(qn,{isScreenOpen:a,localeData:t,siteData:n,pathname:o})]})}window.ISLANDS={BackTop:Tt,Search:$t,NavHamburger:Dn,SwitchAppearance:Ie};window.ISLAND_PROPS=JSON.parse(document.getElementById("island-props").textContent);export{U as S,G as a,ct as b,lt as c,Xe as f,Hn as g,dt as i,_n as n,we as r};
