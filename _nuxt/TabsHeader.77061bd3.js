import{d as m,r as l,a0 as v,b as a,c as s,F as g,ai as x,e as u,f as y,$ as I,n as k,t as T,p as S,j as $,R as C,l as w}from"./entry.094aae7a.js";const B=t=>(S("data-v-1a44e4b9"),t=t(),$(),t),H={class:"tabs-header"},N=["onClick"],R=B(()=>u("span",{class:"tab"},null,-1)),U=[R],q=m({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:_}){const p=t,h=_,n=l(),r=l(),o=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},f=(e,c)=>{h("update:activeTabIndex",c),C(()=>o(e.target))};return v(n,e=>{e&&setTimeout(()=>{o(n.value.children[p.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(a(),s("div",H,[t.tabs?(a(),s("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(a(!0),s(g,null,x(t.tabs,({label:d},i)=>(a(),s("button",{key:`${i}${d}`,class:k([t.activeTabIndex===i?"active":"not-active"]),onClick:b=>f(b,i)},T(d),11,N))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},U,512)],512)):y("",!0),I(e.$slots,"footer",{},void 0,!0)]))}});const L=w(q,[["__scopeId","data-v-1a44e4b9"]]);export{L as default};
