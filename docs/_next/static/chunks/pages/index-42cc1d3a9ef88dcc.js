(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3543)}])},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(6495).Z,i=n(2648).Z,r=n(1598).Z,o=n(7273).Z,s=r(n(7294)),c=i(n(3121)),l=n(2675),d=n(139),u=n(8730);n(7238);var p=i(n(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e){return void 0!==e.default}function f(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,i,r,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let c="decode"in e?e.decode():Promise.resolve();c.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,r=!1;i.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>r,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{r=!0,t.stopPropagation()}}))}(null==r?void 0:r.current)&&r.current(e)}})}let y=s.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:i,widthInt:r,qualityInt:c,className:l,imgStyle:d,blurStyle:u,isLazy:p,fill:h,placeholder:g,loading:f,srcString:y,config:x,unoptimized:w,loader:v,onLoadRef:b,onLoadingCompleteRef:_,setBlurComplete:j,setShowAltText:N,onLoad:S,onError:k}=e,C=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return f=p?"lazy":f,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},C,{loading:f,width:r,height:i,decoding:"async","data-nimg":h?"fill":"1",className:l,style:a({},d,u)},n,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&m(e,y,g,b,_,j,w))},[y,g,b,_,j,k,w,t]),onLoad:e=>{let t=e.currentTarget;m(t,y,g,b,_,j,w)},onError:e=>{N(!0),"blur"===g&&j(!0),k&&k(e)}})))}),x=s.forwardRef((e,t)=>{let n,i;var r,{src:m,sizes:x,unoptimized:w=!1,priority:v=!1,loading:b,className:_,quality:j,width:N,height:S,fill:k,style:C,onLoad:E,onLoadingComplete:I,placeholder:O="empty",blurDataURL:P,layout:A,objectFit:R,objectPosition:z,lazyBoundary:L,lazyRoot:T}=e,D=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let K=s.useContext(u.ImageConfigContext),F=s.useMemo(()=>{let e=h||K||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:n})},[K]),J=D,U=J.loader||p.default;delete J.loader;let H="__next_img_default"in U;if(H){if("custom"===F.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=U;U=t=>{let{config:n}=t,a=o(t,["config"]);return e(a)}}if(A){"fill"===A&&(k=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(C=a({},C,e));let t={responsive:"100vw",fill:"100vw"}[A];t&&!x&&(x=t)}let M="",q=f(N),V=f(S);if("object"==typeof(r=m)&&(g(r)||void 0!==r.src)){let e=g(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(n=e.blurWidth,i=e.blurHeight,P=P||e.blurDataURL,M=e.src,!k){if(q||V){if(q&&!V){let t=q/e.width;V=Math.round(e.height*t)}else if(!q&&V){let t=V/e.height;q=Math.round(e.width*t)}}else q=e.width,V=e.height}}let B=!v&&("lazy"===b||void 0===b);((m="string"==typeof m?m:M).startsWith("data:")||m.startsWith("blob:"))&&(w=!0,B=!1),F.unoptimized&&(w=!0),H&&m.endsWith(".svg")&&!F.dangerouslyAllowSVG&&(w=!0);let[W,G]=s.useState(!1),[Z,Q]=s.useState(!1),X=f(j),Y=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:z}:{},Z?{}:{color:"transparent"},C),$="blur"===O&&P&&!W?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({widthInt:q,heightInt:V,blurWidth:n,blurHeight:i,blurDataURL:P,objectFit:Y.objectFit}),'")')}:{},ee=function(e){let{config:t,src:n,unoptimized:a,width:i,quality:r,sizes:o,loader:s}=e;if(a)return{src:n,srcSet:void 0,sizes:void 0};let{widths:c,kind:l}=function(e,t,n){let{deviceSizes:a,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(n);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let r=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:r,kind:"x"}}(t,i,o),d=c.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:c.map((e,a)=>"".concat(s({config:t,src:n,quality:r,width:e})," ").concat("w"===l?e:a+1).concat(l)).join(", "),src:s({config:t,src:n,quality:r,width:c[d]})}}({config:F,src:m,unoptimized:w,width:q,quality:X,sizes:x,loader:U}),et=m,en={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:J.crossOrigin},ea=s.useRef(E);s.useEffect(()=>{ea.current=E},[E]);let ei=s.useRef(I);s.useEffect(()=>{ei.current=I},[I]);let er=a({isLazy:B,imgAttributes:ee,heightInt:V,widthInt:q,qualityInt:X,className:_,imgStyle:Y,blurStyle:$,loading:b,config:F,fill:k,unoptimized:w,placeholder:O,loader:U,srcString:et,onLoadRef:ea,onLoadingCompleteRef:ei,setBlurComplete:G,setShowAltText:Q},J);return s.default.createElement(s.default.Fragment,null,s.default.createElement(y,Object.assign({},er,{ref:t})),v?s.default.createElement(c.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},en))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:a,blurHeight:i,blurDataURL:r,objectFit:o}=e,s=a||t,c=i||n,l=r.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&c?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(c,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&i?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(r,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:a,quality:i}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(a,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},3543:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var a=n(5893),i=n(8689),r=n.n(i),o=n(9008),s=n.n(o),c=n(5675),l=n.n(c),d=n(4523),u=n.n(d),p=n(7294),h=n(3111),g=n(7614),f=n(6667);class m extends p.Component{handleInputChange(e){let t=e.target,n=t.value;this.setState({accountNameForm:n})}async handleRegister(e){e.preventDefault();let{accountName:t,pubKey:n}=await y(this.state.accountNameForm);console.log(await (0,g.tx)('(posts.create-account {accountName} (read-keyset "sessionKeyset" "tmp.jpg"))',!1)),this.setState({loggedInAccount:t,loggedInPublicKey:n})}async handleLogin(e){e.preventDefault();let{accountName:t,pubKey:n}=await x(this.state.accountNameForm);this.setState({loggedInAccount:t,loggedInPublicKey:n})}async handleLogout(e){this.setState({loggedInAccount:void 0,loggedInPublicKey:void 0});let t=await fetch(f.b+"/api/v1/auth/logout",{credentials:"include"});if(!t.ok)throw Error(await t.text())}render(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex-col",hidden:!!this.state.loggedInAccount,children:[(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"text",onChange:this.handleInputChange})}),(0,a.jsxs)("div",{className:"flex flex-row text-xs items-center",children:[(0,a.jsx)("a",{href:"",onClick:async e=>{this.handleRegister(e)},children:"Register"}),(0,a.jsx)("span",{children:"/"}),(0,a.jsx)("a",{href:"",onClick:async e=>{this.handleLogin(e)},children:"Sign In"})]})]}),(0,a.jsxs)("div",{className:"flex-col",hidden:!this.state.loggedInAccount,children:[(0,a.jsx)("p",{children:this.state.loggedInAccount}),(0,a.jsx)("p",{className:"text-ellipsis",children:this.state.loggedInPublicKey}),(0,a.jsx)("a",{href:"",onClick:async e=>{this.handleLogout(e)},children:"Logout"})]})]})}constructor(e){super(e),this.state={loggedInAccount:void 0,loggedInPublicKey:void 0,accountNameForm:""},this.handleInputChange=this.handleInputChange.bind(this)}}async function y(e){let t=await fetch(f.b+"/api/v1/auth/register/begin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accountName:e,accountDisplayName:e}),credentials:"include"}).catch(e=>e);if(!t.ok)throw alert(await t.text()),Error(await t.text());let n=await t.json(),a=await (0,h.Ue)({publicKey:n}),i=await fetch(f.b+"/api/v1/auth/register/complete",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!i.ok)throw alert(await i.text()),Error(await t.text());let r=await i.json();console.log(JSON.stringify(r)),document.cookie="credentialId="+a.id,console.log("Set cookie");let o=await w();return{accountName:o.accountName,pubKey:o.pubKey}}async function x(e){console.log("login");let t=await fetch(f.b+"/api/v1/auth/login/begin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"});if(!t.ok)throw alert(await t.text()),Error(await t.text());let n=await t.json();console.log("login response:"),console.log(n);let a=await (0,h.U2)({publicKey:n}),i=await fetch(f.b+"/api/v1/auth/login/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),credentials:"include"});if(!i.ok)throw alert(await i.text()),Error(await i.text());let r=await i.json();console.log(JSON.stringify(r)),document.cookie="credentialId="+a.id,console.log("Login Set cookie");let o=await w();return{accountName:o.accountName,pubKey:o.pubKey}}async function w(){console.log("setup_account_cookies");let e=await fetch(f.b+"/api/v1/auth/account-info",{credentials:"include"});if(!e.ok)throw alert(await e.text()),Error(await e.text());let t=await e.json(),n=t.publicKeyHex;return alert(n),console.log("setting public-key cookie to "+n),document.cookie="public-key="+n,console.log("setting account-name cookie to "+t.accountName),document.cookie="account-name="+t.accountName,console.log("finished setup_account_cookies"),{accountName:t.accountName,pubKey:n}}function v(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"serverless-pact demo app"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("main",{className:u().main,children:[(0,a.jsx)("div",{className:u().description,children:(0,a.jsx)(m,{})}),(0,a.jsxs)("div",{className:u().center,children:[(0,a.jsx)(l(),{className:u().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0}),(0,a.jsx)("div",{className:u().thirteen,children:(0,a.jsx)(l(),{src:"/thirteen.svg",alt:"13",width:40,height:31,priority:!0})})]}),(0,a.jsxs)("div",{className:u().grid,children:[(0,a.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:r().className,children:["Docs ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:r().className,children:"Find in-depth information about Next.js features and\xa0API."})]}),(0,a.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:r().className,children:["Learn ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:r().className,children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,a.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:r().className,children:["Templates ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:r().className,children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,a.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:r().className,children:["Deploy ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:r().className,children:"Instantly deploy your Next.js site to a shareable URL with\xa0Vercel."})]})]})]})]})}},6667:function(e,t,n){"use strict";n.d(t,{b:function(){return a}});let a="https://beanstalk.greg-testing-2023-02-07.com"},7614:function(e,t,n){"use strict";n.d(t,{tx:function(){return c}});var a=n(7462),i=n.n(a),r=n(8247),o=n(6667),s=n(3111);async function c(e,t){let n=l("credentialId"),a={pubKey:l("public-key")};var c=new Uint8Array(32);self.crypto.getRandomValues(c);let d=JSON.stringify({networkId:null,payload:{exec:{data:{name:"Stuart",language:"Pact",sessionKeyset:[l("public-key")]},code:e}},signers:t?[a]:[],meta:{creationTime:0,ttl:0,gasLimit:0,chainId:"",gasPrice:0,sender:""},nonce:(0,r.c)(c)}),u=function(e){var t=new TextEncoder,n=new Uint8Array(32);let a=i()(n.length).update(t.encode(e)).digest(),o=(0,r.c)(a).replaceAll("/","_").replaceAll("+","-");return o}(d);var p={};if(t){let e=await (0,s.U2)({publicKey:{challenge:u,allowCredentials:[{id:n,type:"public-key"}],userVerification:"preferred"}}),t=e.response;p={authenticatorData:(0,r.c)((0,s.kI)(t.authenticatorData)),clientDataJSON:t.clientDataJSON,signature:(0,r.c)((0,s.kI)(t.signature))}}let h=t?[{sig:JSON.stringify(p)}]:[],g=await fetch(o.b+"/api/v1/execute",{method:"POST",headers:{"Content-Type":"application/json"},cache:"no-cache",body:JSON.stringify({hash:u,sigs:h,cmd:d}),credentials:"include"}).catch(e=>e),f=await g.json();return f}function l(e){var t;let n="; ".concat(document.cookie),a=n.split("; ".concat(e,"="));if(2===a.length)return null===(t=a.pop())||void 0===t?void 0:t.split(";").shift()}},3111:function(e,t,n){"use strict";function a(e){let t="==".slice(0,(4-e.length%4)%4),n=e.replace(/-/g,"+").replace(/_/g,"/")+t,a=atob(n),i=new ArrayBuffer(a.length),r=new Uint8Array(i);for(let e=0;e<a.length;e++)r[e]=a.charCodeAt(e);return i}function i(e){let t=new Uint8Array(e),n="";for(let e of t)n+=String.fromCharCode(e);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}n.d(t,{U2:function(){return w},Ue:function(){return x},kI:function(){return a}});var r="copy",o="convert";function s(e,t,n){if(t===r)return n;if(t===o)return e(n);if(t instanceof Array)return n.map(n=>s(e,t[0],n));if(t instanceof Object){let a={};for(let[i,r]of Object.entries(t)){if(r.derive){let e=r.derive(n);void 0!==e&&(n[i]=e)}if(i in n)null!=n[i]?a[i]=s(e,r.schema,n[i]):a[i]=null;else if(r.required)throw Error("Missing key: ".concat(i))}return a}}function c(e,t){return{required:!0,schema:e,derive:t}}function l(e){return{required:!0,schema:e}}function d(e){return{required:!1,schema:e}}var u={type:l(r),id:l(o),transports:d(r)},p={appid:d(r),appidExclude:d(r),credProps:d(r)},h={appid:d(r),appidExclude:d(r),credProps:d(r)},g={publicKey:l({rp:l(r),user:l({id:l(o),name:l(r),displayName:l(r)}),challenge:l(o),pubKeyCredParams:l(r),timeout:d(r),excludeCredentials:d([u]),authenticatorSelection:d(r),attestation:d(r),extensions:d(p)}),signal:d(r)},f={type:l(r),id:l(r),rawId:l(o),authenticatorAttachment:d(r),response:l({clientDataJSON:l(o),attestationObject:l(o),transports:c(r,e=>{var t;return(null==(t=e.getTransports)?void 0:t.call(e))||[]})}),clientExtensionResults:c(h,e=>e.getClientExtensionResults())},m={mediation:d(r),publicKey:l({challenge:l(o),timeout:d(r),rpId:d(r),allowCredentials:d([u]),userVerification:d(r),extensions:d(p)}),signal:d(r)},y={type:l(r),id:l(r),rawId:l(o),authenticatorAttachment:d(r),response:l({clientDataJSON:l(o),authenticatorData:l(o),signature:l(o),userHandle:l(o)}),clientExtensionResults:c(h,e=>e.getClientExtensionResults())};async function x(e){var t;return t=await navigator.credentials.create(s(a,g,e)),s(i,f,t)}async function w(e){var t;return t=await navigator.credentials.get(s(a,m,e)),s(i,y,t)}},8689:function(e){e.exports={style:{fontFamily:"'__Inter_4b5723', '__Inter_Fallback_4b5723'",fontStyle:"normal"},className:"__className_4b5723"}},4523:function(e){e.exports={main:"Home_main__EtNt2",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",center:"Home_center__V0nxp",logo:"Home_logo__80mSr",thirteen:"Home_thirteen__ocdUI",rotate:"Home_rotate__99GkW",content:"Home_content___fOQz",vercelLogo:"Home_vercelLogo__lhIxO"}},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)}},function(e){e.O(0,[123,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);