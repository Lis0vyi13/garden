import{i as A,k as w,l as T,n as G,r as u,j as n,m,o as y,q as I,T as $,L as V}from"./index-BbHhrU_Y.js";import{C as R}from"./Counter-DBi5X_2I.js";import{u as _}from"./useCartActions-D-SHOXgz.js";import{B as f}from"./Button-BIvs9TMH.js";import{P as O}from"./PageWrapper-0Tse22r8.js";import"./useActions-D2QfUTuj.js";function X(t){t.values.forEach(e=>e.stop())}function p(t,e){[...e].reverse().forEach(a=>{const s=t.getVariant(a);s&&w(t,s),t.variantChildren&&t.variantChildren.forEach(o=>{p(o,e)})})}function B(t,e){if(Array.isArray(e))return p(t,e);if(typeof e=="string")return p(t,[e]);w(t,e)}function U(){const t=new Set,e={subscribe(r){return t.add(r),()=>void t.delete(r)},start(r,a){const s=[];return t.forEach(o=>{s.push(A(o,r,{transitionOverride:a}))}),Promise.all(s)},set(r){return t.forEach(a=>{B(a,r)})},stop(){t.forEach(r=>{X(r)})},mount(){return()=>{e.stop()}}};return e}function W(){const t=T(U);return G(t.mount,[]),t}const j=W,D=({item:t})=>{const{price:e,discount:r,quantity:a,id:s,name:o,img:i}=t,{removeCartItem:C,changeItemQuantity:E}=_(),L=r?Math.round(e-e*r):e,[P,k]=u.useState(t.quantity),q=h=>{k(h),s&&E({id:s,value:h})};return n.jsxs("div",{className:"w-[290px] xxs:w-[350px] xsSm:w-auto xsSm:h-[240px] md:h-[180px] flex flex-col xsSm:flex-row gap-4 border border-divider rounded-xl",children:[n.jsx("div",{className:"cart-list-item__img flexitems-center justify-center h-full xsSm:min-w-[200px] border-r border-divider",children:n.jsx("img",{className:"object-cover h-full w-full aspect-square rounded-l-xl rounded-r-xl xsSm:rounded-r-none",src:i,alt:o})}),n.jsxs("div",{className:"cart-list-item__info flex flex-col w-full p-6 gap-6",children:[n.jsxs("div",{className:"flex items-center justify-between -mt-2 xsSm:mt-0",children:[n.jsx("h1",{className:"text-[20px]",children:o}),n.jsx("button",{onClick:()=>C(t),className:"remove p-2 rounded-full duration-300 hover:bg-hoverLightGray",children:n.jsxs("div",{className:"relative h-6 w-6",children:[n.jsx("span",{className:"absolute top-1/2 -translate-y-1/2 left-0 rotate-45 h-[2px] w-full bg-black"}),n.jsx("span",{className:"absolute top-1/2 -translate-y-1/2 left-0 -rotate-45 w-full h-[2px] bg-black"})]})})]}),n.jsxs("div",{className:"flex -mt-2 flex-col-reverse md:flex-row justify-between xl:justify-normal gap-6",children:[n.jsx("div",{className:"w-full md:w-[230px]",children:n.jsx(R,{id:s,value:P,setValue:q})}),n.jsxs("div",{className:`flex ${r?"pr-[55px] xl:pr-0":""} items-center gap-4`,children:[n.jsxs("h2",{className:"font-bold text-[30px] lg:text-[40px] pt-1",children:["$",L*a]}),r&&n.jsxs("h4",{className:"relative text-[20px] text-gray line-through mt-4",children:["$",e*a,n.jsx("div",{className:"absolute font-semibold text-[14px] p-1 px-2 rounded-md bg-green text-white right-[-55px] top-[-10px]",children:`-${r*100}%`})]})]})]})]})]})},H=({list:t})=>{const[e,r]=u.useState(!1),{items:a}=t,s=j();return u.useEffect(()=>{s.start({opacity:1,y:0})},[s]),n.jsxs(n.Fragment,{children:[n.jsx(m.ul,{initial:{opacity:0},transition:{delay:.1,duration:.2},animate:s,className:`cart-list duration-300 flex flex-col ${e?"h-auto":`h-[545px] xxs:h-[606px] ${a.length>3?"xsSm:h-[753px] md:h-[573px]":"xsSm:h-min"}`} overflow-hidden gap-4`,children:a.map(o=>n.jsx("li",{className:"cart-list-item flex justify-center items-center xsSm:block",children:n.jsx(D,{item:o})},o.id))}),n.jsx("div",{className:`flex items-center justify-center mt-2 ${a.length>3?"xsSm:flex":a.length>1?"flex xsSm:hidden":"hidden"}`,children:n.jsx(f,{onClick:()=>r(o=>!o),isGreen:!0,text:`${e?"Show less":"Show more"}`})})]})},F=()=>({store:y(e=>e.cart)}),M=()=>{var r;const t=y(a=>a.cart);return{total:(r=t==null?void 0:t.items)==null?void 0:r.reduce((a,s)=>{const o=s.discount?Math.round(s.price-s.price*s.discount):s.price;return a+o*s.quantity},0)}};var S="https://js.stripe.com/v3",Q=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,v="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",J=function(){for(var e=document.querySelectorAll('script[src^="'.concat(S,'"]')),r=0;r<e.length;r++){var a=e[r];if(Q.test(a.src))return a}return null},g=function(e){var r=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",a=document.createElement("script");a.src="".concat(S).concat(r);var s=document.head||document.body;if(!s)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return s.appendChild(a),a},K=function(e,r){!e||!e._registerWrapper||e._registerWrapper({name:"stripe-js",version:"3.3.0",startTime:r})},l=null,d=null,x=null,z=function(e){return function(){e(new Error("Failed to load Stripe.js"))}},Y=function(e,r){return function(){window.Stripe?e(window.Stripe):r(new Error("Stripe.js not available"))}},Z=function(e){return l!==null?l:(l=new Promise(function(r,a){if(typeof window>"u"||typeof document>"u"){r(null);return}if(window.Stripe&&e&&console.warn(v),window.Stripe){r(window.Stripe);return}try{var s=J();if(s&&e)console.warn(v);else if(!s)s=g(e);else if(s&&x!==null&&d!==null){var o;s.removeEventListener("load",x),s.removeEventListener("error",d),(o=s.parentNode)===null||o===void 0||o.removeChild(s),s=g(e)}x=Y(r,a),d=z(a),s.addEventListener("load",x),s.addEventListener("error",d)}catch(i){a(i);return}}),l.catch(function(r){return l=null,Promise.reject(r)}))},ee=function(e,r,a){if(e===null)return null;var s=e.apply(void 0,r);return K(s,a),s},c,b=!1,N=function(){return c||(c=Z(null).catch(function(e){return c=null,Promise.reject(e)}),c)};Promise.resolve().then(function(){return N()}).catch(function(t){b||console.warn(t)});var te=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];b=!0;var s=Date.now();return N().then(function(o){return ee(o,r,s)})};const re=async(t,e)=>{e(!0);const r=await te("pk_test_51P7L3KDgyJmtJe68W3khXK9oCXDyUzXPP1dOb18twBORDwOgw2uTm9X1lGADHuRvwtt4o6HMHnGXcHfIdHUtTbL600xjCRAbJv");r&&await r.redirectToCheckout({lineItems:t.items.map(a=>({price:a.api_key,quantity:a.quantity})),mode:"payment",successUrl:"https://lis0vyi13.github.io/garden/#/success",cancelUrl:"https://lis0vyi13.github.io/garden/#/cancel"}),e(!1)},ne=()=>{const{store:t}=F(),{quantity:e}=I(),{total:r}=M(),[a,s]=u.useState(!1),o=j();u.useEffect(()=>{o.start({opacity:1,y:0})},[o]);const i=async()=>{await re(t,s)};return n.jsxs("section",{className:"cart flex flex-col gap-10",children:[n.jsx($,{text:"Shopping cart",buttonText:"Back to the store"}),t.value>0?n.jsxs("div",{className:"cart-content flex flex-col xl:flex-row gap-8",children:[n.jsx("div",{className:"xl:w-[60%]",children:n.jsx(H,{list:t})}),n.jsxs(m.div,{initial:{opacity:0,y:50},animate:o,className:"bg-lightGray h-full rounded-xl xl:w-[40%] p-7",children:[n.jsx("h3",{className:"font-bold text-4xl",children:"Order details"}),n.jsxs("div",{className:"pt-4 gap-6 flex flex-col xs:flex-row justify-between",children:[n.jsx("div",{className:"w-full xs:w-1/2",children:n.jsxs("h4",{className:"text-gray text-2xl sm:text-4xl leading-[3rem]",children:[e," items total"]})}),n.jsx("div",{className:"flex self-end items-end",children:n.jsxs("h2",{className:"font-bold text-[37px] lg:text-[46px] break-all",children:["$",r]})})]}),n.jsx("div",{className:"cart-button h-full flex mt-6",children:n.jsx(f,{disabled:a,onClick:i,text:"Order",extraClassName:`w-full self-end ${a?"bg-gray cursor-not-allowed":"bg-green hover:bg-hoverGreen"}`,isGreen:!0})})]})]}):n.jsxs(m.div,{initial:{y:20,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0,amount:.25},transition:{duration:.3},className:"-mt-2",children:[n.jsx("p",{children:"Looks like you have no items in your basket currently."}),n.jsx(V,{to:"/all-products?from=&to=&discount=&sortBy=default&category=All+products",children:n.jsx(f,{extraClassName:"mt-5 w-full xs:w-auto",isGreen:!0,text:"Continue Shopping"})})]})]})},ue=()=>n.jsx(O,{block:"shopping-cart",children:n.jsx(ne,{})});export{ue as default};
