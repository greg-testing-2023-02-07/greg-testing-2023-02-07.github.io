(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2125)}])},2125:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var i=n(5893),a=n(9008),c=n.n(a),o=n(4523),s=n.n(o),r=n(7294),l=n(7614),u=n(3636);n(8804);var d=n(7814),f=n(4288),g=n(9417);function p(e){var t;console.log(e);let n=(null===(t=e.likes)||void 0===t?void 0:t.find(t=>t==e.user))!=void 0,[a,c]=(0,r.useState)(n);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"p-1 relative",children:[(0,i.jsx)("img",{className:"h-40",src:e.src}),(0,i.jsx)("div",{className:"absolute bottom-2 right-2 text-red-500 opacity-50 hover:opacity-100",onClick:async t=>await h(e.user,e.id,c),children:(0,i.jsx)(d.G,{icon:a?g.m6i:f.m6i})})]})})}async function h(e,t,n){n(!0),await (0,l.tx)('(accounts.like-picture "'.concat(e,'" "').concat(t,'")'),!1)}function m(e){return(0,r.useEffect)(()=>{console.log("About to fetch pictures for ".concat(e.accountName,".")),async function(){let t=await (0,l.tx)('(accounts.get-pictures "'.concat(e.accountName,'")'),!1);e.setPictures(t.result.data),t.result.data}()},[e.accountName]),console.log("PICTURES"),console.log(e.pictures),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"flex flex-wrap justify-between",children:e.pictures.map(t=>(0,i.jsx)(p,{id:t["picture-id"],src:t.src,likes:t.likes,user:e.user},t["picture-id"]))})})}var x=n(4080),y=n(4361),v=n(8247);function b(e){let[t,n]=(0,r.useState)(!1),[a,c]=(0,r.useState)(null),[o,s]=(0,r.useState)(!1);function u(){n(!1)}async function d(t){var n=new Uint8Array(32);self.crypto.getRandomValues(n);let i=(0,v.c)(n);await (0,l.tx)('(accounts.create-picture "'.concat(e.accountName,'" "').concat(i,'" "').concat(a,'")'),!1).then(t=>{e.setPictures([{id:i,"picture-id":i,src:a},...e.pictures])})}return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)("button",{type:"button",onClick:function(){n(!0)},className:"rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-hite focus-visible:ring-opacity-75",children:"Add Pictures"}),(0,i.jsx)(x.u,{appear:!0,show:t,as:r.Fragment,children:(0,i.jsxs)(y.V,{as:"div",className:"relative z-10",onClose:u,children:[(0,i.jsx)(x.u.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,i.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),(0,i.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,i.jsx)("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:(0,i.jsx)(x.u.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,i.jsxs)(y.V.Panel,{className:"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[(0,i.jsx)(y.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-900",children:"Dialog Title"}),(0,i.jsxs)("div",{className:"mt-2",children:[(0,i.jsx)("input",{type:"file",onChange:function(e){let t=e.target.files[0];console.log(t);let n=new FileReader;n.onloadend=()=>{var e=document.createElement("img");e.onload=function(n){let i=320/e.width;console.log("xScale: "+i);let a=240/e.height;console.log("yScale: "+a);let o=i<1||a<1?Math.min(i,a):1;console.log("scale: "+o);var s=document.createElement("canvas");s.height=e.height*o,s.width=e.width*o;var r=s.getContext("2d");null==r||r.drawImage(e,0,0,e.width*o,e.height*o),c(s.toDataURL(t.type))},n.result&&(e.src=n.result.toString()),s(!0)},n.readAsDataURL(t)}}),(0,i.jsx)("p",{children:null==a?void 0:a.toString()}),(0,i.jsx)("img",{src:null==a?void 0:a.toString()}),o&&(0,i.jsx)("div",{children:(0,i.jsx)("button",{className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:async e=>d(e),children:"Upload"})})]}),(0,i.jsx)("div",{className:"mt-4",children:(0,i.jsx)("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:u,children:"Close"})})]})})})})]})})]})})}var w=n(1664),j=n.n(w),N=n(6667),_=n(3111);function k(e){let[t,n]=(0,r.useState)({loggedInAccount:void 0,loggedInPublicKey:void 0}),[a,c]=(0,r.useState)("");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"flex-col",hidden:!!t.loggedInAccount,children:[(0,i.jsx)("div",{children:(0,i.jsx)("input",{type:"text",onChange:e=>c(e.target.value)})}),(0,i.jsxs)("div",{className:"flex flex-row text-xs items-center",children:[(0,i.jsx)("a",{href:"",onClick:async t=>{t.preventDefault();let{accountNameRes:i,pubKeyRes:c}=await C(a);n({loggedInAccount:i,loggedInPublicKey:c}),e.setUser(i),await (0,l.tx)('(accounts.create-account "'.concat(i,'" (read-keyset "sessionKeyset") "tmp.jpg")'),!1)},children:"Register"}),(0,i.jsx)("span",{children:"/"}),(0,i.jsx)("a",{href:"",onClick:async t=>{t.preventDefault();let{accountNameRes:i,pubKeyRes:c}=await O(a);n({loggedInAccount:i,loggedInPublicKey:c}),e.setUser(i)},children:"Sign In"})]})]}),(0,i.jsxs)("div",{className:"flex-col",hidden:!t.loggedInAccount,children:[(0,i.jsx)("p",{children:t.loggedInAccount}),(0,i.jsx)("p",{className:"text-ellipsis",children:t.loggedInPublicKey}),(0,i.jsx)("a",{href:"",onClick:async e=>{await S(e),n({loggedInAccount:void 0,loggedInPublicKey:void 0})},children:"Logout"})]})]})}async function S(e){let t=await fetch(N.b+"/api/v1/auth/logout",{credentials:"include"});if(!t.ok)throw Error(await t.text())}async function C(e){let t=await fetch(N.b+"/api/v1/auth/register/begin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accountName:e,accountDisplayName:e}),credentials:"include"}).catch(e=>e);if(!t.ok)throw Error(await t.text());let n=await t.json(),i=await (0,_.Ue)({publicKey:n}),a=await fetch(N.b+"/api/v1/auth/register/complete",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!a.ok)throw Error(await t.text());let c=await a.json();console.log(JSON.stringify(c)),document.cookie="credentialId="+i.id,console.log("Set cookie");let o=await P();return{accountNameRes:o.accountName,pubKeyRes:o.pubKey}}async function O(e){console.log("login");let t=await fetch(N.b+"/api/v1/auth/login/begin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"});if(!t.ok)throw Error(await t.text());let n=await t.json();console.log("login response:"),console.log(n);let i=await (0,_.U2)({publicKey:n}),a=await fetch(N.b+"/api/v1/auth/login/complete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i),credentials:"include"});if(!a.ok)throw Error(await a.text());let c=await a.json();console.log(JSON.stringify(c)),document.cookie="credentialId="+i.id,console.log("Login Set cookie");let o=await P();return{accountNameRes:o.accountName,pubKeyRes:o.pubKey}}async function P(){console.log("setup_account_cookies");let e=await fetch(N.b+"/api/v1/auth/account-info",{credentials:"include"});if(!e.ok)throw Error(await e.text());let t=await e.json(),n=t.publicKeyHex;return console.log("setting public-key cookie to "+n),document.cookie="public-key="+n,console.log("setting account-name cookie to "+t.accountName),document.cookie="account-name="+t.accountName,console.log("finished setup_account_cookies"),{accountName:t.accountName,pubKey:n}}function I(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("header",{className:"flex items-center justify-between px-4 py-2 bg-blue-100",children:[(0,i.jsx)("div",{className:"flex items-center",children:"PactPics"}),e.user?(0,i.jsxs)("div",{className:"flex flex-row",children:[(0,i.jsx)("div",{className:"p-1",children:(0,i.jsx)(j(),{href:"/admin",children:(0,i.jsx)(d.G,{icon:f.w49})})}),(0,i.jsx)("p",{className:"p-1",children:e.user}),(0,i.jsx)("p",{className:"p-1",onClick:async t=>await E(e.setUser),children:"Logout"})]}):(0,i.jsx)(k,{setUser:e.setUser})]})})}async function E(e){console.log(await fetch(N.b+"/logout")),A("credentialId"),A("account-name"),A("public-key"),e(void 0)}function A(e){document.cookie=e+"=; Max-Age=-99999999;"}function T(e){let[t,n]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async function(){let e=await (0,l.tx)("(accounts.list-accounts)",!1);n(e.result.data),console.log(e.result.data),e.result.data})()},[]),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"flex flex-row",children:(function(e,t){let n=t.filter(t=>t!=e);return[e,...n]})(e.user,t).map(t=>(0,i.jsx)("span",{className:t==e.picturesOwner?"p-1":"p-1 text-slate-500",onClick:n=>{var i;return i=e.setPicturesOwner,void(console.log("handleOwnerClick: "+t),i(t))},children:t==e.user?"Me":t},t))})})}function U(){let[e,t]=(0,r.useState)(void 0),[n,a]=(0,r.useState)([]),[o,u]=(0,r.useState)(void 0);return(0,r.useEffect)(()=>{let e=(0,l.ej)("account-name");t(e),u(e)},[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(c(),{children:[(0,i.jsx)("title",{children:"PactPics"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(I,{user:e,setUser:t}),(0,i.jsx)("main",{className:s().main,children:e&&(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)(T,{user:e,picturesOwner:o,setPicturesOwner:u}),(0,i.jsx)(b,{accountName:e,pictures:n,setPictures:a}),(0,i.jsx)(m,{accountName:o,pictures:n,setPictures:a,user:e})]})})]})}u.vc.autoAddCss=!1},6667:function(e,t,n){"use strict";n.d(t,{b:function(){return i}});let i="https://beanstalk.greg-testing-2023-02-07.com"},7614:function(e,t,n){"use strict";n.d(t,{ej:function(){return l},tx:function(){return r}});var i=n(7462),a=n.n(i),c=n(8247),o=n(6667),s=n(3111);async function r(e,t){let n=l("credentialId"),i={pubKey:l("public-key")};var r=new Uint8Array(32);self.crypto.getRandomValues(r);let u=JSON.stringify({networkId:null,payload:{exec:{data:{name:"Stuart",language:"Pact",sessionKeyset:[l("public-key")]},code:e}},signers:t?[i]:[],meta:{creationTime:0,ttl:0,gasLimit:0,chainId:"",gasPrice:0,sender:""},nonce:(0,c.c)(r)}),d=function(e){var t=new TextEncoder,n=new Uint8Array(32);let i=a()(n.length).update(t.encode(e)).digest(),o=(0,c.c)(i).replaceAll("/","_").replaceAll("+","-");return o}(u);var f={};if(t){let e=await (0,s.U2)({publicKey:{challenge:d,allowCredentials:[{id:n,type:"public-key"}],userVerification:"preferred"}}),t=e.response;f={authenticatorData:(0,c.c)((0,s.kI)(t.authenticatorData)),clientDataJSON:t.clientDataJSON,signature:(0,c.c)((0,s.kI)(t.signature))}}let g=t?[{sig:JSON.stringify(f)}]:[],p=await fetch(o.b+"/api/v1/execute",{method:"POST",headers:{"Content-Type":"application/json"},cache:"no-cache",body:JSON.stringify({hash:d,sigs:g,cmd:u}),credentials:"include"}),h=await p.json();return h}function l(e){var t;let n="; ".concat(document.cookie),i=n.split("; ".concat(e,"="));if(2===i.length)return null===(t=i.pop())||void 0===t?void 0:t.split(";").shift()}},3111:function(e,t,n){"use strict";function i(e){let t="==".slice(0,(4-e.length%4)%4),n=e.replace(/-/g,"+").replace(/_/g,"/")+t,i=atob(n),a=new ArrayBuffer(i.length),c=new Uint8Array(a);for(let e=0;e<i.length;e++)c[e]=i.charCodeAt(e);return a}function a(e){let t=new Uint8Array(e),n="";for(let e of t)n+=String.fromCharCode(e);return btoa(n).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}n.d(t,{U2:function(){return v},Ue:function(){return y},kI:function(){return i}});var c="copy",o="convert";function s(e,t,n){if(t===c)return n;if(t===o)return e(n);if(t instanceof Array)return n.map(n=>s(e,t[0],n));if(t instanceof Object){let i={};for(let[a,c]of Object.entries(t)){if(c.derive){let e=c.derive(n);void 0!==e&&(n[a]=e)}if(a in n)null!=n[a]?i[a]=s(e,c.schema,n[a]):i[a]=null;else if(c.required)throw Error("Missing key: ".concat(a))}return i}}function r(e,t){return{required:!0,schema:e,derive:t}}function l(e){return{required:!0,schema:e}}function u(e){return{required:!1,schema:e}}var d={type:l(c),id:l(o),transports:u(c)},f={appid:u(c),appidExclude:u(c),credProps:u(c)},g={appid:u(c),appidExclude:u(c),credProps:u(c)},p={publicKey:l({rp:l(c),user:l({id:l(o),name:l(c),displayName:l(c)}),challenge:l(o),pubKeyCredParams:l(c),timeout:u(c),excludeCredentials:u([d]),authenticatorSelection:u(c),attestation:u(c),extensions:u(f)}),signal:u(c)},h={type:l(c),id:l(c),rawId:l(o),authenticatorAttachment:u(c),response:l({clientDataJSON:l(o),attestationObject:l(o),transports:r(c,e=>{var t;return(null==(t=e.getTransports)?void 0:t.call(e))||[]})}),clientExtensionResults:r(g,e=>e.getClientExtensionResults())},m={mediation:u(c),publicKey:l({challenge:l(o),timeout:u(c),rpId:u(c),allowCredentials:u([d]),userVerification:u(c),extensions:u(f)}),signal:u(c)},x={type:l(c),id:l(c),rawId:l(o),authenticatorAttachment:u(c),response:l({clientDataJSON:l(o),authenticatorData:l(o),signature:l(o),userHandle:l(o)}),clientExtensionResults:r(g,e=>e.getClientExtensionResults())};async function y(e){var t;return t=await navigator.credentials.create(s(i,p,e)),s(a,h,t)}async function v(e){var t;return t=await navigator.credentials.get(s(i,m,e)),s(a,x,t)}},4523:function(e){e.exports={main:"Home_main__EtNt2",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",center:"Home_center__V0nxp",logo:"Home_logo__80mSr",thirteen:"Home_thirteen__ocdUI",rotate:"Home_rotate__99GkW",content:"Home_content___fOQz",vercelLogo:"Home_vercelLogo__lhIxO"}}},function(e){e.O(0,[976,123,930,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);