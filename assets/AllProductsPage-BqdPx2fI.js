import{j as t,r as p,u as S,a as B,s as C,c as D,p as h,T as _,b as F}from"./index-CwkHF4Kp.js";import{P as L}from"./PageWrapper-Dm-R7b77.js";import{u as O,P as T}from"./ProductsList-Bt5EUb3F.js";import{B as k}from"./Button-Bim-Fqml.js";const A=({register:i,onChange:s})=>t.jsxs("div",{className:"all-products__sort-price flex gap-4 items-center",children:[t.jsx("h5",{className:"font-semibold text-[20px]",children:"Price"}),t.jsx("input",{className:"border-divider duration-300 border-2 rounded-md p-2 w-[86px] xs:w-[110px]",placeholder:"from",type:"number",...i("from",{onChange:s})}),t.jsx("input",{className:"border-divider duration-300 border-2 rounded-md p-2 w-[86px] xs:w-[110px]",placeholder:"to",type:"number",...i("to",{onChange:s})})]}),V=({register:i,isChecked:s,toggleCheckbox:n})=>t.jsx("div",{className:"all-products__sort-discount flex w-fit items-center",children:t.jsxs("label",{htmlFor:"discount",className:"flex gap-4 items-center cursor-pointer",tabIndex:0,children:[t.jsx("h5",{className:"font-semibold text-[20px] select-none",children:"Discounted items"}),t.jsx("input",{id:"discount",className:"hidden",type:"checkbox",checked:s,...i("discount",{onChange:n})}),t.jsx("div",{className:"w-8 h-8 border-2 border-divider rounded-md flex items-center justify-center mr-2 transition-all duration-300",children:s&&t.jsx("svg",{className:"min-w-8 h-8 pointer-events-none bg-green rounded-md",viewBox:"0 0 24 24",fill:"none",stroke:"white",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"})})})]})}),z=({register:i,sortOptions:s,onChange:n,activeSelectValue:a})=>t.jsxs("div",{className:"all-products__sort-discount items-center flex gap-4",children:[t.jsx("h5",{className:"font-semibold text-[20px]",children:"Sorted"}),t.jsx("select",{className:"border-2 cursor-pointer border-divider p-2 rounded-md w-[175px] xs:w-[200px]",...i("sortBy",{onChange:n}),value:a,children:s.map(l=>t.jsx("option",{className:"text-[18px]",value:l.value,children:l.label},l.value))})]}),M=({register:i,onChange:s,categoryValue:n,categoriesOptions:a})=>t.jsxs("div",{className:"all-products__sort-category-filter items-center flex gap-4",children:[t.jsx("h5",{className:"font-semibold text-[20px]",children:"Category"}),t.jsxs("select",{className:"border-2 cursor-pointer border-divider p-2 rounded-md w-[150px] xs:w-[200px]",...i("category",{onChange:s}),value:n,children:[t.jsx("option",{className:"text-[18px]",value:"All products",children:"All products"}),a.map(l=>t.jsx("option",{className:"text-[18px]",value:l.value,children:l.name},l.value))]})]}),R=i=>{let s;return()=>{clearTimeout(s),s=setTimeout(()=>{i()},500)}},P=({setOptions:i,setIsUpdating:s,className:n})=>{const{register:a,getValues:l,setValue:d}=O(),[f,x]=p.useState(!1),[v,r]=p.useState("By default"),[y,b]=p.useState("All products"),u=S(),g=B(),N=()=>{x(!f),c()};p.useEffect(()=>{const e=new URLSearchParams(g.search);e.get("discount")==="true"?x(!0):x(!1),d("from",e.get("from")),d("to",e.get("to")),d("discount",e.get("discount")||!1),d("sortBy",e.get("sortBy")),r(e.get("sortBy")),b(e.get("category")),d("category",e.get("category")),c()},[g.search,d]);const c=()=>{s(!0);try{const e=l(),o=new URLSearchParams;o.set("from",e.from||""),o.set("to",e.to||""),o.set("discount",e.discount||""),o.set("sortBy",e.sortBy||""),o.set("category",e.category||""),u({pathname:g.pathname,search:o.toString()});const j=Object.keys(e).filter(m=>e[m]!=!1||m==="discount").reduce((m,w)=>(m[w]=e[w],m),{});j.from=+j.from||0,j.to=+j.to||500,i(m=>({...m,...j}))}catch(e){console.error(e)}finally{s(!1)}};return t.jsxs("section",{className:`all-products__sort inline-grid w-[260px] xs:w-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,_minmax(0,max-content))] items-center gap-8 ${n}`,children:[t.jsx(A,{register:a,onChange:R(c)}),t.jsx(V,{register:a,isChecked:f,toggleCheckbox:N}),t.jsx(z,{register:a,sortOptions:C,onChange:c,activeSelectValue:v}),t.jsx(M,{register:a,categoriesOptions:D,onChange:c,categoryValue:y})]})},q=()=>{let i=0;for(let s=0;s<h.length;s++){const n=h[s].discount?Math.round(h[s].price*h[s].discount):h[s].price;i<n&&(i=n)}return i},E=()=>{const[i,s]=p.useState("All products"),[n,a]=p.useState(!1),[l,d]=p.useState(!1),[f,x]=p.useState({from:0,to:q(),discount:!1,sortBy:"default",category:"All products"}),v=p.useMemo(()=>{a(!0),setTimeout(()=>{},300);let r=[...h];const{from:y,to:b,discount:u,sortBy:g,category:N}=f;switch(r=r.filter(e=>{const o=e.discount?Math.round(e.price-e.price*e.discount):e.price;return o>=+y&&o<=+b&&(!u||e.discount)}),g){case"low-high":r.sort((e,o)=>e.price-(e.discount?e.price*e.discount:0)-(o.price-(o.discount?o.price*o.discount:0)));break;case"high-low":r.sort((e,o)=>o.price-(o.discount?o.price*o.discount:0)-(e.price-(e.discount?e.price*e.discount:0)));break}let c="All products";switch(N){case"Fertilizer":c=u?"Discounted items":"Fertilizer",r=r.filter(e=>e.type==="fertilizer");break;case"Tools and equipment":c=u?"Discounted items":"Tools and equipment",r=r.filter(e=>e.type==="tools-and-equipment");break;case"Protective products and septic tanks":c=u?"Discounted items":"Protective products and septic tanks",r=r.filter(e=>e.type==="protective-products-and-septic-tanks");break;case"Planting material":c=u?"Discounted items":"Planting material",r=r.filter(e=>e.type==="planting-material");break;case"Pots and planters":c=u?"Discounted items":"Pots and planters",r=r.filter(e=>e.type==="pots-and-planters");break;case"Decor":c=u?"Discounted items":"Decor",r=r.filter(e=>e.type==="decor");break}return s(c),setTimeout(()=>{a(!1)},150),r},[f]);return t.jsxs("div",{className:"relative all-products",children:[t.jsxs("div",{className:"relative flex items-center justify-between overflow-hidden",children:[t.jsx(_,{text:i}),t.jsx(k,{onClick:()=>d(!0),text:"Filters",extraClassName:"px-6 py-[10px] md:hidden",isGreen:!0}),t.jsxs("div",{className:`${l?"translate-x-[-1%]":"translate-x-[120%]"} flex flex-col duration-300 right-0 top-[110px] rounded-xl p-4 fixed border-2 border-green bg-white z-40 md:hidden`,children:[t.jsx(P,{setIsUpdating:a,setOptions:x}),t.jsx(k,{onClick:()=>d(!1),text:"Close",extraClassName:"text-white py-[12px] bg-red hover:bg-hoverRed mt-4"})]})]}),t.jsx("div",{className:"mt-10 mb-2",children:t.jsx(P,{className:"hidden md:inline-grid",setIsUpdating:a,setOptions:x})}),n?t.jsx(F,{}):t.jsx(T,{list:v})]})},G=()=>t.jsx(L,{block:"all-products",children:t.jsx(E,{})});export{G as default};
