(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{4830:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n(7820)}])},7820:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var a=n(5893),i=n(7294),r=n(7614),s=n(4523),c=n.n(s);class o extends i.Component{handleInputChange(e){this.setState({commandCode:e.target.value})}async handleSubmit(e,t){let n=await (0,r.tx)(this.state.commandCode,t);this.setState({commandResult:n})}render(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("main",{className:c().main,children:(0,a.jsxs)("div",{className:"grid grid-rows-1 grid-cols-2",children:[(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("textarea",{rows:16,cols:40,className:"p-1 m-1 dark:bg-slate-800",onChange:this.handleInputChange}),(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("button",{className:"rouded-full bg-white dark:bg-slate-800 shadow-lg p-1 max-w-sm mx-auto",onClick:async e=>{this.handleSubmit(e,!1)},children:"Send"}),(0,a.jsx)("button",{className:"rouded-full bg-white dark:bg-slate-800 shadow-lg p-1 max-w-sm mx-auto",onClick:async e=>{this.handleSubmit(e,!0)},children:"Sign & Send"})]})]}),(0,a.jsx)("div",{className:"p-1 m-1 bg-white text-xs dark:bg-slate-800",children:(0,a.jsx)("pre",{children:JSON.stringify(this.state.commandResult,null,2)})})]})})})}constructor(e){super(e),this.state={commandCode:"",commandResult:{}},this.handleInputChange=this.handleInputChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}}},6667:function(e,t,n){"use strict";n.d(t,{b:function(){return a}});let a="https://beanstalk.greg-testing-2023-02-07.com"},7614:function(e,t,n){"use strict";n.d(t,{ej:function(){return l},tx:function(){return o}});var a=n(7462),i=n.n(a),r=n(8247),s=n(6667),c=n(3111);async function o(e,t){let n=l("credentialId"),a={pubKey:l("public-key")};var o=new Uint8Array(32);self.crypto.getRandomValues(o);let u=JSON.stringify({networkId:null,payload:{exec:{data:{name:"Stuart",language:"Pact",sessionKeyset:[l("public-key")]},code:e}},signers:t?[a]:[],meta:{creationTime:0,ttl:0,gasLimit:0,chainId:"",gasPrice:0,sender:""},nonce:(0,r.c)(o)}),d=function(e){var t=new TextEncoder,n=new Uint8Array(32);let a=i()(n.length).update(t.encode(e)).digest(),s=(0,r.c)(a).replaceAll("/","_").replaceAll("+","-");return s}(u);var h={};if(t){let e=await (0,c.U2)({publicKey:{challenge:d,allowCredentials:[{id:n,type:"public-key"}],userVerification:"preferred"}}),t=e.response;h={authenticatorData:(0,r.c)((0,c.kI)(t.authenticatorData)),clientDataJSON:t.clientDataJSON,signature:(0,r.c)((0,c.kI)(t.signature))}}let m=t?[{sig:JSON.stringify(h)}]:[],p=await fetch(s.b+"/api/v1/execute",{method:"POST",headers:{"Content-Type":"application/json"},cache:"no-cache",body:JSON.stringify({hash:d,sigs:m,cmd:u}),credentials:"include"}),g=await p.json();return g}function l(e){var t;let n="; ".concat(document.cookie),a=n.split("; ".concat(e,"="));if(2===a.length)return null===(t=a.pop())||void 0===t?void 0:t.split(";").shift()}},3111:function(e,t,n){"use strict";function a(e){let t="==".slice(0,(4-e.length%4)%4),n=e.replace(/-/g,"+").replace(/_/g,"/")+t,a=atob(n),i=new ArrayBuffer(a.length),r=new Uint8Array(i);for(let e=0;e<a.length;e++)r[e]=a.charCodeAt(e);return i}function i(e){let t=new Uint8Array(e),n="";for(let e of t)n+=String.fromCharCode(e);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}n.d(t,{U2:function(){return y},Ue:function(){return x},kI:function(){return a}});var r="copy",s="convert";function c(e,t,n){if(t===r)return n;if(t===s)return e(n);if(t instanceof Array)return n.map(n=>c(e,t[0],n));if(t instanceof Object){let a={};for(let[i,r]of Object.entries(t)){if(r.derive){let e=r.derive(n);void 0!==e&&(n[i]=e)}if(i in n)null!=n[i]?a[i]=c(e,r.schema,n[i]):a[i]=null;else if(r.required)throw Error("Missing key: ".concat(i))}return a}}function o(e,t){return{required:!0,schema:e,derive:t}}function l(e){return{required:!0,schema:e}}function u(e){return{required:!1,schema:e}}var d={type:l(r),id:l(s),transports:u(r)},h={appid:u(r),appidExclude:u(r),credProps:u(r)},m={appid:u(r),appidExclude:u(r),credProps:u(r)},p={publicKey:l({rp:l(r),user:l({id:l(s),name:l(r),displayName:l(r)}),challenge:l(s),pubKeyCredParams:l(r),timeout:u(r),excludeCredentials:u([d]),authenticatorSelection:u(r),attestation:u(r),extensions:u(h)}),signal:u(r)},g={type:l(r),id:l(r),rawId:l(s),authenticatorAttachment:u(r),response:l({clientDataJSON:l(s),attestationObject:l(s),transports:o(r,e=>{var t;return(null==(t=e.getTransports)?void 0:t.call(e))||[]})}),clientExtensionResults:o(m,e=>e.getClientExtensionResults())},f={mediation:u(r),publicKey:l({challenge:l(s),timeout:u(r),rpId:u(r),allowCredentials:u([d]),userVerification:u(r),extensions:u(h)}),signal:u(r)},_={type:l(r),id:l(r),rawId:l(s),authenticatorAttachment:u(r),response:l({clientDataJSON:l(s),authenticatorData:l(s),signature:l(s),userHandle:l(s)}),clientExtensionResults:o(m,e=>e.getClientExtensionResults())};async function x(e){var t;return t=await navigator.credentials.create(c(a,p,e)),c(i,g,t)}async function y(e){var t;return t=await navigator.credentials.get(c(a,f,e)),c(i,_,t)}},4523:function(e){e.exports={main:"Home_main__EtNt2",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",center:"Home_center__V0nxp",logo:"Home_logo__80mSr",thirteen:"Home_thirteen__ocdUI",rotate:"Home_rotate__99GkW",content:"Home_content___fOQz",vercelLogo:"Home_vercelLogo__lhIxO"}}},function(e){e.O(0,[123,774,888,179],function(){return e(e.s=4830)}),_N_E=e.O()}]);