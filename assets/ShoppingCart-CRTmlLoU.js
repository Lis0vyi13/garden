import{r as p,j as e,i as v,k as N,T as C,L as E}from"./index-BDUxbmkz.js";import{B as m}from"./Button-D7dpLANn.js";import{C as L}from"./Counter-DxthxxMu.js";import{u as P}from"./useCartActions-DWMWmo15.js";import{P as k}from"./PageWrapper-D_5Kfq4T.js";import"./useActions-COKA53iL.js";var j="https://js.stripe.com/v3",T=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,f="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",q=function(){for(var r=document.querySelectorAll('script[src^="'.concat(j,'"]')),n=0;n<r.length;n++){var s=r[n];if(T.test(s.src))return s}return null},h=function(r){var n=r&&!r.advancedFraudSignals?"?advancedFraudSignals=false":"",s=document.createElement("script");s.src="".concat(j).concat(n);var t=document.head||document.body;if(!t)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return t.appendChild(s),s},G=function(r,n){!r||!r._registerWrapper||r._registerWrapper({name:"stripe-js",version:"3.3.0",startTime:n})},o=null,u=null,x=null,I=function(r){return function(){r(new Error("Failed to load Stripe.js"))}},$=function(r,n){return function(){window.Stripe?r(window.Stripe):n(new Error("Stripe.js not available"))}},O=function(r){return o!==null?o:(o=new Promise(function(n,s){if(typeof window>"u"||typeof document>"u"){n(null);return}if(window.Stripe&&r&&console.warn(f),window.Stripe){n(window.Stripe);return}try{var t=q();if(t&&r)console.warn(f);else if(!t)t=h(r);else if(t&&x!==null&&u!==null){var a;t.removeEventListener("load",x),t.removeEventListener("error",u),(a=t.parentNode)===null||a===void 0||a.removeChild(t),t=h(r)}x=$(n,s),u=I(s),t.addEventListener("load",x),t.addEventListener("error",u)}catch(d){s(d);return}}),o.catch(function(n){return o=null,Promise.reject(n)}))},R=function(r,n,s){if(r===null)return null;var t=r.apply(void 0,n);return G(t,s),t},c,w=!1,g=function(){return c||(c=O(null).catch(function(r){return c=null,Promise.reject(r)}),c)};Promise.resolve().then(function(){return g()}).catch(function(l){w||console.warn(l)});var _=function(){for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];w=!0;var t=Date.now();return g().then(function(a){return R(a,n,t)})};const A=({item:l})=>{const[r,n]=p.useState(l.quantity),{price:s,discount:t,quantity:a,id:d,name:i,img:S}=l,{removeCartItem:b}=P(),y=t?Math.round(s-s*t):s;return e.jsxs("div",{className:"w-[290px] xxs:w-[350px] xsSm:w-auto xsSm:h-[240px] md:h-[180px] flex flex-col xsSm:flex-row gap-4 border border-divider rounded-xl",children:[e.jsx("div",{className:"cart-list-item__img flexitems-center justify-center h-full xsSm:min-w-[200px] border-r border-divider",children:e.jsx("img",{className:"object-cover h-full w-full aspect-square rounded-l-xl rounded-r-xl xsSm:rounded-r-none",src:S,alt:i})}),e.jsxs("div",{className:"cart-list-item__info flex flex-col w-full p-6 gap-6",children:[e.jsxs("div",{className:"flex items-center justify-between -mt-2 xsSm:mt-0",children:[e.jsx("h1",{className:"text-[20px]",children:i}),e.jsx("button",{onClick:()=>b(l),className:"remove p-2 rounded-full duration-300 hover:bg-hoverLightGray",children:e.jsxs("div",{className:"relative h-6 w-6",children:[e.jsx("span",{className:"absolute top-1/2 -translate-y-1/2 left-0 rotate-45 h-[2px] w-full bg-black"}),e.jsx("span",{className:"absolute top-1/2 -translate-y-1/2 left-0 -rotate-45 w-full h-[2px] bg-black"})]})})]}),e.jsxs("div",{className:"flex flex-col md:flex-row justify-between xl:justify-normal gap-6",children:[e.jsx("div",{className:"w-[230px]",children:e.jsx(L,{id:d,value:r,setValue:n})}),e.jsxs("div",{className:`flex ${t?"pr-[55px] xl:pr-0":""} items-center gap-4`,children:[e.jsxs("h2",{className:"font-bold text-[30px] lg:text-[40px] pt-1",children:["$",y*a]}),t&&e.jsxs("h4",{className:"relative text-[20px] text-gray line-through mt-4",children:["$",s*a,e.jsx("div",{className:"absolute font-semibold text-[14px] p-1 px-2 rounded-md bg-green text-white right-[-55px] top-[-10px]",children:`-${t*100}%`})]})]})]})]})]})},X=({list:l})=>{const[r,n]=p.useState(!1),{items:s}=l;return e.jsxs(e.Fragment,{children:[e.jsx("ul",{className:`cart-list duration-300 flex flex-col ${r?"h-auto":`h-[545px] xxs:h-[606px] ${s.length>3?"xsSm:h-[753px] md:h-[573px]":"xsSm:h-min"}`} overflow-hidden gap-4`,children:s.map(t=>e.jsx("li",{className:"cart-list-item flex justify-center items-center xsSm:block",children:e.jsx(A,{item:t})},t.id))}),e.jsx("div",{className:`flex items-center justify-center mt-2 ${s.length>3?"xsSm:flex":s.length>1?"flex xsSm:hidden":"hidden"}`,children:e.jsx(m,{onClick:()=>n(t=>!t),isGreen:!0,text:`${r?"Show less":"Show more"}`})})]})},B=()=>({store:v(r=>r.cart)}),U=()=>{var n;const l=v(s=>s.cart);return{total:(n=l==null?void 0:l.items)==null?void 0:n.reduce((s,t)=>{const a=t.discount?Math.round(t.price-t.price*t.discount):t.price;return s+a*t.quantity},0)}},W=()=>{const{store:l}=B(),{quantity:r}=N(),{total:n}=U(),[s,t]=p.useState(!1);async function a(){t(!0),await(await _("pk_test_51P7L3KDgyJmtJe68W3khXK9oCXDyUzXPP1dOb18twBORDwOgw2uTm9X1lGADHuRvwtt4o6HMHnGXcHfIdHUtTbL600xjCRAbJv")).redirectToCheckout({lineItems:l.items.map(i=>({price:i.api_key,quantity:i.quantity})),mode:"payment",successUrl:"https://lis0vyi13.github.io/garden/#/success",cancelUrl:"https://lis0vyi13.github.io/garden/#/cancel"}),t(!1)}return e.jsxs("section",{className:"cart flex flex-col gap-10",children:[e.jsx(C,{text:"Shopping cart",buttonText:"Back to the store"}),l.value>0?e.jsxs("div",{className:"cart-content flex flex-col xl:flex-row gap-8",children:[e.jsx("div",{className:"xl:w-[60%]",children:e.jsx(X,{list:l})}),e.jsxs("div",{className:"bg-lightGray h-full rounded-xl xl:w-[40%] p-7",children:[e.jsx("h3",{className:"font-bold text-4xl",children:"Order details"}),e.jsxs("div",{className:"pt-4 gap-6 flex flex-col xs:flex-row justify-between",children:[e.jsx("div",{className:"w-full xs:w-1/2",children:e.jsxs("h4",{className:"text-gray text-2xl sm:text-4xl leading-[3rem]",children:[r," items total"]})}),e.jsx("div",{className:"flex self-end items-end",children:e.jsxs("h2",{className:"font-bold text-[37px] lg:text-[46px] break-all",children:["$",n]})})]}),e.jsx("div",{className:"cart-button h-full flex mt-6",children:e.jsx(m,{disabled:s,onClick:a,text:"Order",extraClassName:"w-full self-end",isGreen:!0})})]})]}):e.jsxs("div",{className:"-mt-4",children:[e.jsx("p",{children:"Looks like you have no items in your basket currently."}),e.jsx(E,{to:"/all-products?from=&to=&discount=&sortBy=default&category=All+products",children:e.jsx(m,{extraClassName:"mt-5 w-full xs:w-auto",isGreen:!0,text:"Continue Shopping"})})]})]})},K=()=>e.jsx(k,{block:"shopping-cart",children:e.jsx(W,{})});export{K as default};
