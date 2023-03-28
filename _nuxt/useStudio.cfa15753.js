import{a as ne,a5 as G,S as Q,l as T,K as oe,_ as ie,a7 as ae,o as b,f as A,h as se,M as re,j as f,v as L,q as H,w as V,T as W,t as le,p as ce,i as de,k as ue,a0 as pe,I as N,J as F,ao as j,ag as ve,ap as K,m as X,aq as Z,ar as fe,as as we,ah as J}from"./entry.438d8ccb.js";import{r as he}from"./asyncData.48bf83d6.js";/* empty css                               */const q=c=>(ce("data-v-2cd4a576"),c=c(),de(),c),ye=q(()=>f("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[f("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),me=q(()=>f("span",null,"Preview mode enabled",-1)),_e={key:0},ge=q(()=>f("div",{id:"__preview_background"},null,-1)),ke=q(()=>f("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[f("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),Ce=q(()=>f("p",null,"Initializing the preview...",-1)),Pe={key:0},xe=q(()=>f("div",{id:"__preview_background"},null,-1)),Ie={id:"__preview_loader"},Se=ne({__name:"ContentPreviewMode",props:{previewToken:{type:Object,required:!0},apiURL:{type:String,required:!0},exitPreviewMode:{type:Function,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(c){const i=c,a=["__nuxt_preview","__preview_enabled"],d=G(),u=Q(),p=T(!0),g=T(!1),n=T(!1),s=T("");let r;const w=()=>i.exitPreviewMode(),C=async _=>{const y=await i.syncPreview(_);if(n.value!==!0){if(!y){setTimeout(()=>C(_),1e3);return}n.value=!0,d.callHook("nuxt-studio:preview:ready"),u.replace({query:{}}),window.parent&&window.self!==window.parent&&r.disconnect()}};return oe(async()=>{r=(await ie(()=>import("./index.9fea434a.js"),[],import.meta.url)).connect(`${i.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:i.previewToken.value}});let y;r.on("connect",()=>{y=setTimeout(()=>{n.value||(y=setTimeout(()=>{s.value="Preview sync timed out",n.value=!1},3e4),r.emit("draft:requestSync"))},3e4)});const P=()=>{y&&(clearTimeout(y),y=null)};r.on("draft:sync",async I=>{if(P(),!I){try{r.once("draft:ready",()=>{r.emit("draft:requestSync")}),await i.requestPreviewSyncAPI()}catch(U){switch(P(),U.response.status){case 404:s.value="Preview draft not found",n.value=!1;break;default:s.value="An error occurred while syncing preview",n.value=!1}}return}C(I)}),r.on("draft:unauthorized",()=>{P(),s.value="Unauthorized preview token",n.value=!1}),r.on("disconnect",()=>{P()}),document.body.classList.add(...a),r.on("draft:update",I=>{g.value=!0,i.syncPreview(I),g.value=!1})}),ae(()=>{document.body.classList.remove(...a)}),(_,y)=>(b(),A("div",null,[p.value?(b(),A("div",{key:0,id:"__nuxt_preview",class:se({__preview_ready:n.value,__preview_refreshing:g.value})},[n.value?(b(),A(re,{key:0},[ye,me,f("button",{onClick:w}," Close ")],64)):L("",!0)],2)):L("",!0),H(W,{name:"preview-loading"},{default:V(()=>[p.value&&!n.value&&!s.value?(b(),A("div",_e,[ge,f("div",{id:"__preview_loader"},[ke,Ce,f("button",{onClick:w}," Cancel ")])])):L("",!0)]),_:1}),H(W,{name:"preview-loading"},{default:V(()=>[s.value?(b(),A("div",Pe,[xe,f("div",Ie,[f("p",null,le(s.value),1),f("button",{onClick:w}," Exit preview ")])])):L("",!0)]),_:1})]))}}),Te=ue(Se,[["__scopeId","data-v-2cd4a576"]]),qe=(c=[],i,a)=>{const d=[...i||[]],u=[...a||[]],p=JSON.parse(JSON.stringify(c));for(const n of d)if(n.oldPath)if(u.splice(u.findIndex(r=>r.path===n.oldPath),1),d.find(r=>r.path===n.oldPath))p.push({path:n.path,parsed:n.parsed});else{const r=p.find(w=>w.path===n.oldPath);r&&(r.path=n.path,n.parsed?r.parsed=n.parsed:n.pathMeta&&["_file","_path","_id","_locale"].forEach(w=>{r.parsed[w]=n.pathMeta[w]}))}else if(n.new)p.push({path:n.path,parsed:n.parsed});else{const s=p.find(r=>r.path===n.path);s&&Object.assign(s,{path:n.path,parsed:n.parsed})}for(const n of u)p.splice(p.findIndex(s=>s.path===n.path),1);const g=new Intl.Collator(void 0,{numeric:!0});return p.sort((n,s)=>g.compare(n.path,s.path)),p},D=".studio",S={appConfig:`${D}/app.config.json`,tokensConfig:`${D}/tokens.config.json`},Re=c=>{let i;return(...a)=>(i||(i=c()),i)};function Y(c,i){for(const a in c){const d=i[a];a in i||delete c[a],d!==null&&typeof d=="object"&&Y(c[a],i[a])}}function ee(c,i){for(const a in i){const d=i[a];d!==null&&typeof d=="object"?(c[a]=c[a]||{},ee(c[a],d)):c[a]=d}}const be=Re(()=>JSON.parse(JSON.stringify(X()))),Ke=c=>{const i=G(),{studio:a,content:d}=pe().public;N();const u=F("studio-preview-token",()=>c);document.requestStorageAccess().then(()=>{console.log("resolved")}).catch(()=>{console.log("rejected")});const p=j("previewToken",{sameSite:"none",secure:!0});console.log("previewCookie",p.value),p.value=u.value,window.localStorage.setItem("previewToken",u.value),console.log("previewCookie after",p.value);const g=be();let n;const s=F("studio-client-db",()=>null),r=F("studio-preview-db-files",()=>[]);s.value||(i.hook("content:storage",e=>{s.value=e}),ve("/non-existing-path").findOne());const w=async(e,t,h=!0)=>{const v=await e.getKeys(`${u.value}:`);await Promise.all(v.map(l=>e.removeItem(l)));const o=new Set(t.map(l=>l.parsed._id.split(":").shift()));await e.setItem(`${u.value}$`,JSON.stringify({ignoreSources:Array.from(o)})),await Promise.all(t.map(l=>e.setItem(`${u.value}:${l.parsed._id}`,JSON.stringify(l.parsed))))},C=e=>{const t=K(i,X);ee(t,Z(e,g)),e||Y(t,g)},_=e=>{var h,v,o,l;const t=(l=(o=(v=(h=i==null?void 0:i.vueApp)==null?void 0:h._context)==null?void 0:v.config)==null?void 0:o.globalProperties)==null?void 0:l.$pinceauTheme;!t||!(t!=null&&t.updateTheme)||(n||(n=JSON.parse(JSON.stringify((t==null?void 0:t.theme.value)||{}))),K(i,t.updateTheme,[Z(e,n)]))},y=async e=>{if(r.value=e.files=e.files||r.value||[],!s.value)return!1;const t=qe(e.files,e.additions,e.deletions),h=t.filter(l=>!l.path.startsWith(D));await w(s.value,h,(e.files||[]).length!==0);const v=t.find(l=>l.path===S.appConfig);C(v==null?void 0:v.parsed);const o=t.find(l=>l.path===S.tokensConfig);return _(o==null?void 0:o.parsed),O(),!0},P=async()=>{await $fetch("api/projects/preview/sync",{baseURL:a==null?void 0:a.apiURL,method:"POST",params:{token:u.value}})},I=()=>{j("previewToken").value="",p.value="",window.localStorage.removeItem("previewToken"),N().query.preview="",window.location.reload()},U=()=>{const e=document.createElement("div");e.id="__nuxt_preview_wrapper",document.body.appendChild(e),fe(Te,{previewToken:u,apiURL:a==null?void 0:a.apiURL,syncPreview:y,requestPreviewSyncAPI:P,exitPreviewMode:I}).mount(e)},E=async e=>{var h,v,o;if(!e)return null;e=e.replace(/\/$/,"");let t=await((h=s.value)==null?void 0:h.getItem(`${u.value}:${e}`));return t||(t=await((v=s.value)==null?void 0:v.getItem(`cached:${e}`))),t||(t=t=await((o=s.value)==null?void 0:o.getItem(e))),t},B=e=>{var t;s.value&&s.value.setItem(`${u.value}:${(t=e.parsed)==null?void 0:t._id}`,JSON.stringify(e.parsed))},z=async e=>{var t;await((t=s.value)==null?void 0:t.removeItem(`${u.value}:${e}`))},O=async()=>{if(d!=null&&d.documentDriven){const{pages:e}=K(i,we);for(const t in e.value)e.value[t]&&(e.value[t]=await E(e.value[t]._id))}K(i,he)};return{apiURL:a==null?void 0:a.apiURL,contentStorage:s,syncPreviewFiles:w,syncPreviewAppConfig:C,syncPreviewTokensConfig:_,requestPreviewSynchronization:P,findContentWithId:E,updateContent:B,removeContentWithId:z,requestRerender:O,mountPreviewUI:U,initiateIframeCommunication:te};function te(){if(!window.parent||window.self===window.parent)return;const e=Q(),t=T(""),h=T(!0),v=o=>({path:o.path,query:J(o.query),params:J(o.params),fullPath:o.fullPath,meta:J(o.meta)});window.addEventListener("keydown",o=>{(o.metaKey||o.ctrlKey||o.altKey||o.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:o.key,metaKey:o.metaKey,ctrlKey:o.ctrlKey,shiftKey:o.shiftKey,altKey:o.altKey}},"*")}),window.addEventListener("message",async o=>{const{type:l,payload:R={}}=o.data||{};switch(l){case"nuxt-studio:editor:file-selected":{const m=await E(R.path);m&&(m._partial||m._path!==N().path&&(t.value=m._path,e.push(m._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:m=[],deletions:$=[]}=R;for(const k of m)await B(k);for(const k of $)await z(k.path);O();break}case"nuxt-studio:config:file-changed":{const{additions:m=[],deletions:$=[]}=R,k=m.find(x=>x.path===S.appConfig);k&&C(k==null?void 0:k.parsed),$.find(x=>x.path===S.appConfig)&&C(void 0);const M=m.find(x=>x.path===S.tokensConfig);M&&_(M==null?void 0:M.parsed),$.find(x=>x.path===S.tokensConfig)&&_(void 0);break}}}),i.hook("content:document-driven:finish",({route:o,page:l,dedup:R})=>{if(R||h.value){h.value=!1;return}if(l&&t.value===l._path){t.value="";return}window.parent.postMessage({type:"nuxt-studio:preview:document-driven:finish",payload:{...v(o),contentId:l==null?void 0:l._id}},"*")}),i.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:v(N())},"*"),e==null||e.afterEach(o=>{window.parent.postMessage({type:"nuxt-studio:preview:route-changed",payload:v(o)},"*")})})}};export{Ke as useStudio};
