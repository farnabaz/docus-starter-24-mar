import L from"./DocumentDrivenEmpty.0fcbd715.js";import h from"./ContentRenderer.b60251d5.js";import x from"./DocumentDrivenNotFound.f84050ec.js";import{a5 as F,e as m,au as C,I as k,av as R,s as w,u as o,aw as d,ax as B,ay as i,T as N,B as g,G as j,ad as D,o as c,b as E,j as p,w as l,c as _}from"./entry.84b28d66.js";import"./ContentRendererMarkdown.a3f411fa.js";import"./ButtonLink.fec882f9.js";import"./ContentSlot.caca8c55.js";/* empty css                       *//* empty css                                   */const T=m({name:"LayoutLoader",inheritAttrs:!1,props:{name:String},async setup(s,t){const n=await d[s.name]().then(e=>e.default||e);return()=>g(n,t.attrs,t.slots)}}),A=m({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null}},setup(s,t){const n=C("_route"),e=n===k()?R():n,a=w(()=>o(s.name)??e.meta.layout??"default");return()=>{const u=a.value&&a.value in d,r=e.meta.layoutTransition??B;return i(N,u&&r,{default:()=>i(T,u&&{key:a.value,name:a.value,...t.attrs},t.slots).default()}).default()}}}),$={class:"document-driven-page"},z=m({__name:"document-driven",setup(s){const{page:t,layout:n}=j();return t.value,D(t),(e,a)=>{const u=L,r=h,f=x,y=A;return c(),E("div",$,[p(y,{name:o(n)||"default"},{default:l(()=>[o(t)?(c(),_(r,{key:o(t)._id,value:o(t)},{empty:l(({value:v})=>[p(u,{value:v},null,8,["value"])]),_:1},8,["value"])):(c(),_(f,{key:1}))]),_:1},8,["name"])])}}});export{z as default};
