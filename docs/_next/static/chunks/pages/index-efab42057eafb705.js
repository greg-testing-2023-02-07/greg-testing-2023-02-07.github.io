(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(3968)}])},9749:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(6495).Z,i=a(2648).Z,r=a(1598).Z,o=a(7273).Z,s=r(a(7294)),l=i(a(3121)),c=a(2675),d=a(139),u=a(8730);a(7238);var h=i(a(9824));let p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function f(e,t,a,i,r,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===a&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let a=!1,r=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{a=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let x=s.forwardRef((e,t)=>{var{imgAttributes:a,heightInt:i,widthInt:r,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:h,fill:p,placeholder:g,loading:m,srcString:x,config:w,unoptimized:y,loader:v,onLoadRef:_,onLoadingCompleteRef:b,setBlurComplete:j,setShowAltText:N,onLoad:S,onError:k}=e,C=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=h?"lazy":m,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},C,{loading:m,width:r,height:i,decoding:"async","data-nimg":p?"fill":"1",className:c,style:n({},d,u)},a,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&f(e,x,g,_,b,j,y))},[x,g,_,b,j,k,y,t]),onLoad:e=>{let t=e.currentTarget;f(t,x,g,_,b,j,y)},onError:e=>{N(!0),"blur"===g&&j(!0),k&&k(e)}})))}),w=s.forwardRef((e,t)=>{let a,i;var r,{src:f,sizes:w,unoptimized:y=!1,priority:v=!1,loading:_,className:b,quality:j,width:N,height:S,fill:k,style:C,onLoad:E,onLoadingComplete:I,placeholder:O="empty",blurDataURL:P,layout:A,objectFit:z,objectPosition:R,lazyBoundary:L,lazyRoot:T}=e,D=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=s.useContext(u.ImageConfigContext),K=s.useMemo(()=>{let e=p||F||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),a=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:a})},[F]),H=D,M=H.loader||h.default;delete H.loader;let q="__next_img_default"in M;if(q){if("custom"===K.loader)throw Error('Image with src "'.concat(f,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=M;M=t=>{let{config:a}=t,n=o(t,["config"]);return e(n)}}if(A){"fill"===A&&(k=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(C=n({},C,e));let t={responsive:"100vw",fill:"100vw"}[A];t&&!w&&(w=t)}let J="",B=m(N),U=m(S);if("object"==typeof(r=f)&&(g(r)||void 0!==r.src)){let e=g(f)?f.default:f;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(a=e.blurWidth,i=e.blurHeight,P=P||e.blurDataURL,J=e.src,!k){if(B||U){if(B&&!U){let t=B/e.width;U=Math.round(e.height*t)}else if(!B&&U){let t=U/e.height;B=Math.round(e.width*t)}}else B=e.width,U=e.height}}let W=!v&&("lazy"===_||void 0===_);((f="string"==typeof f?f:J).startsWith("data:")||f.startsWith("blob:"))&&(y=!0,W=!1),K.unoptimized&&(y=!0),q&&f.endsWith(".svg")&&!K.dangerouslyAllowSVG&&(y=!0);let[G,V]=s.useState(!1),[Z,Q]=s.useState(!1),X=m(j),Y=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:R}:{},Z?{}:{color:"transparent"},C),$="blur"===O&&P&&!G?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:B,heightInt:U,blurWidth:a,blurHeight:i,blurDataURL:P,objectFit:Y.objectFit}),'")')}:{},ee=function(e){let{config:t,src:a,unoptimized:n,width:i,quality:r,sizes:o,loader:s}=e;if(n)return{src:a,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,a){let{deviceSizes:n,allSizes:i}=e;if(a){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(a);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let r=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:r,kind:"x"}}(t,i,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,n)=>"".concat(s({config:t,src:a,quality:r,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:s({config:t,src:a,quality:r,width:l[d]})}}({config:K,src:f,unoptimized:y,width:B,quality:X,sizes:w,loader:M}),et=f,ea={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:H.crossOrigin},en=s.useRef(E);s.useEffect(()=>{en.current=E},[E]);let ei=s.useRef(I);s.useEffect(()=>{ei.current=I},[I]);let er=n({isLazy:W,imgAttributes:ee,heightInt:U,widthInt:B,qualityInt:X,className:b,imgStyle:Y,blurStyle:$,loading:_,config:K,fill:k,unoptimized:y,placeholder:O,loader:M,srcString:et,onLoadRef:en,onLoadingCompleteRef:ei,setBlurComplete:V,setShowAltText:Q},H);return s.default.createElement(s.default.Fragment,null,s.default.createElement(x,Object.assign({},er,{ref:t})),v?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ea))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:a,blurWidth:n,blurHeight:i,blurDataURL:r,objectFit:o}=e,s=n||t,l=i||a,c=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function a(e){let{config:t,src:a,width:n,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(a),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a.__next_img_default=!0,t.default=a},3968:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return L}});var n=a(5893),i=a(8689),r=a.n(i),o=a(9008),s=a.n(o),l=a(5675),c=a.n(l),d=a(4523),u=a.n(d),h=a(7294);function p(e){let t="==".slice(0,(4-e.length%4)%4),a=e.replace(/-/g,"+").replace(/_/g,"/")+t,n=atob(a),i=new ArrayBuffer(n.length),r=new Uint8Array(i);for(let e=0;e<n.length;e++)r[e]=n.charCodeAt(e);return i}function g(e){let t=new Uint8Array(e),a="";for(let e of t)a+=String.fromCharCode(e);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}var m="copy",f="convert";function x(e,t,a){if(t===m)return a;if(t===f)return e(a);if(t instanceof Array)return a.map(a=>x(e,t[0],a));if(t instanceof Object){let n={};for(let[i,r]of Object.entries(t)){if(r.derive){let e=r.derive(a);void 0!==e&&(a[i]=e)}if(i in a)null!=a[i]?n[i]=x(e,r.schema,a[i]):n[i]=null;else if(r.required)throw Error("Missing key: ".concat(i))}return n}}function w(e,t){return{required:!0,schema:e,derive:t}}function y(e){return{required:!0,schema:e}}function v(e){return{required:!1,schema:e}}var _={type:y(m),id:y(f),transports:v(m)},b={appid:v(m),appidExclude:v(m),credProps:v(m)},j={appid:v(m),appidExclude:v(m),credProps:v(m)},N={publicKey:y({rp:y(m),user:y({id:y(f),name:y(m),displayName:y(m)}),challenge:y(f),pubKeyCredParams:y(m),timeout:v(m),excludeCredentials:v([_]),authenticatorSelection:v(m),attestation:v(m),extensions:v(b)}),signal:v(m)},S={type:y(m),id:y(m),rawId:y(f),authenticatorAttachment:v(m),response:y({clientDataJSON:y(f),attestationObject:y(f),transports:w(m,e=>{var t;return(null==(t=e.getTransports)?void 0:t.call(e))||[]})}),clientExtensionResults:w(j,e=>e.getClientExtensionResults())},k={mediation:v(m),publicKey:y({challenge:y(f),timeout:v(m),rpId:v(m),allowCredentials:v([_]),userVerification:v(m),extensions:v(b)}),signal:v(m)},C={type:y(m),id:y(m),rawId:y(f),authenticatorAttachment:v(m),response:y({clientDataJSON:y(f),authenticatorData:y(f),signature:y(f),userHandle:y(f)}),clientExtensionResults:w(j,e=>e.getClientExtensionResults())};async function E(e){var t;return t=await navigator.credentials.create(x(p,N,e)),x(g,S,t)}async function I(e){var t;return t=await navigator.credentials.get(x(p,k,e)),x(g,C,t)}let O="https://beanstalk.greg-testing-2023-02-07.com";class P extends h.Component{handleInputChange(e){let t=e.target,a=t.value;this.setState({accountNameForm:a})}async handleRegister(e){e.preventDefault();let{accountName:t,pubKey:a}=await A(this.state.accountNameForm);this.setState({loggedInAccount:t,loggedInPublicKey:a})}async handleLogin(e){alert("login, prevent default"),e.preventDefault();let{accountName:t,pubKey:a}=await z(this.state.accountNameForm);this.setState({loggedInAccount:t,loggedInPublicKey:a})}async handleLogout(e){this.setState({loggedInAccount:void 0,loggedInPublicKey:void 0});let t=await fetch(O+"/api/v1/auth/logout",{credentials:"include"});if(!t.ok)throw Error(await t.text())}render(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex-col",hidden:!!this.state.loggedInAccount,children:[(0,n.jsx)("div",{children:(0,n.jsx)("input",{type:"text",onChange:this.handleInputChange})}),(0,n.jsxs)("div",{className:"flex flex-row text-xs items-center",children:[(0,n.jsx)("a",{href:"",onClick:async e=>{this.handleRegister(e)},children:"Register"}),(0,n.jsx)("span",{children:"/"}),(0,n.jsx)("a",{href:"",onClick:async e=>{this.handleLogin(e)},children:"Sign In"})]})]}),(0,n.jsxs)("div",{className:"flex-col",hidden:!this.state.loggedInAccount,children:[(0,n.jsx)("p",{children:this.state.loggedInAccount}),(0,n.jsx)("p",{className:"text-ellipsis",children:this.state.loggedInPublicKey}),(0,n.jsx)("a",{href:"",onClick:async e=>{this.handleLogout(e)},children:"Logout"})]})]})}constructor(e){super(e),this.state={loggedInAccount:void 0,loggedInPublicKey:void 0,accountNameForm:""},this.handleInputChange=this.handleInputChange.bind(this)}}async function A(e){let t=await fetch(O+"/api/v1/auth/register/begin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accountName:e,accountDisplayName:e}),credentials:"include"});if(!t.ok)throw alert(await t.text()),Error(await t.text());let a=await t.json(),n=await E({publicKey:a}),i=await fetch(O+"/api/v1/auth/register/complete",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!i.ok)throw alert(await i.text()),Error(await t.text());let r=await i.json();console.log(JSON.stringify(r)),document.cookie="credentialId="+n.id,console.log("Set cookie");let o=await R();return{accountName:o.accountName,pubKey:o.pubKey}}async function z(e){console.log("login");let t=await fetch(O+"/api/v1/auth/login/begin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"});if(!t.ok)throw alert(await t.text()),Error(await t.text());let a=await t.json();console.log("login response:"),console.log(a);let n=await I({publicKey:a}),i=await fetch(O+"/api/v1/auth/login/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n),credentials:"include"});if(!i.ok)throw alert(await i.text()),Error(await i.text());let r=await i.json();console.log(JSON.stringify(r)),document.cookie="credentialId="+n.id,console.log("Login Set cookie");let o=await R();return{accountName:o.accountName,pubKey:o.pubKey}}async function R(){console.log("setup_account_cookies");let e=await fetch(O+"/api/v1/auth/account-info",{credentials:"include"});if(!e.ok)throw alert(await e.text()),Error(await e.text());let t=await e.json(),a=t.publicKeyHex;return alert(a),console.log("setting public-key cookie to "+a),document.cookie="public-key="+a,console.log("setting account-name cookie to "+t.accountName),document.cookie="account-name="+t.accountName,console.log("finished setup_account_cookies"),{accountName:t.accountName,pubKey:a}}function L(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:u().main,children:[(0,n.jsx)("div",{className:u().description,children:(0,n.jsx)(P,{})}),(0,n.jsxs)("div",{className:u().center,children:[(0,n.jsx)(c(),{className:u().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0}),(0,n.jsx)("div",{className:u().thirteen,children:(0,n.jsx)(c(),{src:"/thirteen.svg",alt:"13",width:40,height:31,priority:!0})})]}),(0,n.jsxs)("div",{className:u().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:r().className,children:["Docs ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{className:r().className,children:"Find in-depth information about Next.js features and\xa0API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:r().className,children:["Learn ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{className:r().className,children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,n.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:r().className,children:["Templates ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{className:r().className,children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsxs)("h2",{className:r().className,children:["Deploy ",(0,n.jsx)("span",{children:"->"})]}),(0,n.jsx)("p",{className:r().className,children:"Instantly deploy your Next.js site to a shareable URL with\xa0Vercel."})]})]})]})]})}},8689:function(e){e.exports={style:{fontFamily:"'__Inter_4b5723', '__Inter_Fallback_4b5723'",fontStyle:"normal"},className:"__className_4b5723"}},4523:function(e){e.exports={main:"Home_main__EtNt2",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",center:"Home_center__V0nxp",logo:"Home_logo__80mSr",thirteen:"Home_thirteen__ocdUI",rotate:"Home_rotate__99GkW",content:"Home_content___fOQz",vercelLogo:"Home_vercelLogo__lhIxO"}},9008:function(e,t,a){e.exports=a(3121)},5675:function(e,t,a){e.exports=a(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);