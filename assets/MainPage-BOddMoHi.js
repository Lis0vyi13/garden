import{j as s,m as F,L as lt,r as M,g as ut,d as ct,a as ft,p as dt}from"./index-B1auRoLY.js";import{T as J,H as mt,F as ht}from"./Footer-BTh_92Cw.js";import{B as K}from"./Button-CidTMd5u.js";import{C as pt}from"./Categories-CnF8pHKn.js";import{u as gt,C as xt,P as vt}from"./ProductsList-B1YzAYSg.js";import"./useCartActions-Cq7Asi0T.js";import"./useActions-COnj4u1b.js";const bt=""+new URL("../images/bg.webp",import.meta.url).href,wt=()=>s.jsxs(F.section,{className:"hero relative -mt-3",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,amount:.25},transition:{duration:.5},children:[s.jsx("div",{className:"img after:content[''] after:-z-10 after:absolute after:block after:left-0 after:top-0 after:w-full after:h-full after:bg-black after:opacity-40",children:s.jsx("img",{style:{height:"calc(100% + 100px)"},className:"absolute mt-[-100px] -z-10 w-full object-cover",src:bt,alt:"background"})}),s.jsxs("div",{className:"container",children:[s.jsx(F.h1,{className:"text-white pt-[100px] md:pt-20 font-bold text-[28px] xs:text-[35px] sm:text-[42px] md:text-[50px] lg:text-[72px] md:max-w-[650px] lg:max-w-[820px]",initial:{y:-50,opacity:0},whileInView:{y:0,opacity:1},viewport:{once:!0,amount:.25},transition:{delay:.5,duration:.5},children:"Amazing Discounts on Garden Products!"}),s.jsx(lt,{to:"all-products?from=&to=&discount=true&sortBy=default",children:s.jsx(K,{text:"Check out",isGreen:!0,extraClassName:"mt-10 mb-[140px] md:mb-[200px]"})})]})]});var Q={exports:{}},W={exports:{}},kt=function(i,n,t,e,a,r,l,c){if(!i){var d;if(n===void 0)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[t,e,a,r,l,c],u=0;d=new Error(n.replace(/%s/g,function(){return f[u++]})),d.name="Invariant Violation"}throw d.framesToPop=1,d}},yt=kt,w=M,U=yt;function C(){return C=Object.assign?Object.assign.bind():function(i){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(i[e]=t[e])}return i},C.apply(this,arguments)}function tt(i){return requestAnimationFrame(i)}function Z(i){cancelAnimationFrame(i)}function I(i){var n=i.ownerDocument;return n.hasFocus()&&n.activeElement===i}function et(i){return i==null?void 0:i.ownerDocument}function jt(i){var n=function(t){var e;return(e=et(t))==null?void 0:e.defaultView}(i);return!!n&&i instanceof n.HTMLElement}function _(i){return w.useCallback(function(){var n=i.current,t=typeof window<"u"&&jt(n);if(!n||!t)return null;if(n.nodeName!=="INPUT"&&(n=n.querySelector("input")),!n)throw new Error("react-input-mask: inputComponent doesn't contain input node");return n},[i])}function Pt(i,n){var t,e,a,r,l=w.useRef({start:null,end:null}),c=_(i),d=w.useCallback(function(){return function(b){var p=b.selectionStart,S=b.selectionEnd;return{start:p,end:S,length:S-p}}(c())},[c]),f=w.useCallback(function(){return l.current},[]),u=w.useCallback(function(b){var p=c();p&&I(p)&&(function(S,E,P){P===void 0&&(P=E),S.setSelectionRange(E,P)}(p,b.start,b.end),l.current=d())},[c,d]),o=w.useCallback(function(){l.current=d()},[d]),m=(t=o,e=w.useRef(null),a=w.useCallback(function(){e.current===null&&function b(){t(),e.current=tt(b)}()},[t]),r=w.useCallback(function(){Z(e.current),e.current=null},[]),w.useEffect(function(){e.current&&(r(),a())},[a,r]),w.useEffect(Z,[]),[a,r]),v=m[0],j=m[1];return w.useLayoutEffect(function(){if(n){var b=c();return b.addEventListener("focus",v),b.addEventListener("blur",j),I(b)&&v(),function(){b.removeEventListener("focus",v),b.removeEventListener("blur",j),j()}}}),{getSelection:d,getLastSelection:f,setSelection:u}}function Et(i,n){var t=w.useRef(),e=Pt(t,n),a=e.getSelection,r=e.getLastSelection,l=e.setSelection,c=function(o,m){var v=_(o),j=w.useRef(m);return{getValue:w.useCallback(function(){return v().value},[v]),getLastValue:w.useCallback(function(){return j.current},[]),setValue:w.useCallback(function(b){j.current=b;var p=v();p&&(p.value=b)},[v])}}(t,i),d=c.getValue,f=c.getLastValue,u=c.setValue;return{inputRef:t,getInputState:function(){return{value:d(),selection:a()}},getLastInputState:function(){return{value:f(),selection:r()}},setInputState:function(o){var m=o.value,v=o.selection;u(m),l(v)}}}var St=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],$={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},Ct=function(i){var n=this;this.isCharacterAllowedAtPosition=function(t,e){var a=n.maskOptions.maskPlaceholder;return!!n.isCharacterFillingPosition(t,e)||!!a&&a[e]===t},this.isCharacterFillingPosition=function(t,e){var a=n.maskOptions.mask;if(!t||e>=a.length)return!1;if(!n.isPositionEditable(e))return a[e]===t;var r=a[e];return new RegExp(r).test(t)},this.isPositionEditable=function(t){var e=n.maskOptions,a=e.mask,r=e.permanents;return t<a.length&&r.indexOf(t)===-1},this.isValueEmpty=function(t){return t.split("").every(function(e,a){return!n.isPositionEditable(a)||!n.isCharacterFillingPosition(e,a)})},this.isValueFilled=function(t){return n.getFilledLength(t)===n.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(t){var e=n.getFilledLength(t),a=n.getRightEditablePosition(e);return{start:a,end:a}},this.getFilledLength=function(t){return function(e,a){for(var r=e.length-1;r>=0;r--)if(a(e[r],r))return r;return-1}(t.split(""),function(e,a){return n.isPositionEditable(a)&&n.isCharacterFillingPosition(e,a)})+1},this.getStringFillingLengthAtPosition=function(t,e){return t.split("").reduce(function(a,r){return n.insertCharacterAtPosition(a,r,a.length)},function(a,r){r===void 0&&(r=1);for(var l="",c=0;c<r;c++)l+=a;return l}(" ",e)).length-e},this.getLeftEditablePosition=function(t){for(var e=t;e>=0;e--)if(n.isPositionEditable(e))return e;return null},this.getRightEditablePosition=function(t){for(var e=n.maskOptions.mask,a=t;a<e.length;a++)if(n.isPositionEditable(a))return a;return null},this.formatValue=function(t){var e=n.maskOptions,a=e.maskPlaceholder,r=e.mask;if(!a){for(t=n.insertStringAtPosition("",t,0);t.length<r.length&&!n.isPositionEditable(t.length);)t+=r[t.length];return t}return n.insertStringAtPosition(a,t,0)},this.clearRange=function(t,e,a){if(!a)return t;var r=e+a,l=n.maskOptions,c=l.maskPlaceholder,d=l.mask,f=t.split("").map(function(u,o){var m=n.isPositionEditable(o);return!c&&o>=r&&!m?"":o<e||o>=r?u:m?c?c[o]:"":d[o]}).join("");return n.formatValue(f)},this.insertCharacterAtPosition=function(t,e,a){var r=n.maskOptions,l=r.mask,c=r.maskPlaceholder;if(a>=l.length)return t;var d=n.isCharacterAllowedAtPosition(e,a),f=n.isPositionEditable(a),u=n.getRightEditablePosition(a),o=c&&u?e===c[u]:null,m=t.slice(0,a);return!d&&f||(t=m+(d?e:l[a])),d||f||o||(t=n.insertCharacterAtPosition(t,e,a+1)),t},this.insertStringAtPosition=function(t,e,a){var r=n.maskOptions,l=r.mask,c=r.maskPlaceholder;if(!e||a>=l.length)return t;var d=e.split(""),f=n.isValueFilled(t)||!!c,u=t.slice(a);return t=d.reduce(function(o,m){return n.insertCharacterAtPosition(o,m,o.length)},t.slice(0,a)),f?t+=u.slice(t.length-a):n.isValueFilled(t)?t+=l.slice(t.length).join(""):t=u.split("").filter(function(o,m){return n.isPositionEditable(a+m)}).reduce(function(o,m){var v=n.getRightEditablePosition(o.length);return v===null?o:(n.isPositionEditable(o.length)||(o+=l.slice(o.length,v).join("")),n.insertCharacterAtPosition(o,m,o.length))},t),t},this.processChange=function(t,e){var a=n.maskOptions,r=a.mask,l=a.prefix,c=a.lastEditablePosition,d=t.value,f=t.selection,u=e.value,o=e.selection,m=d,v="",j=0,b=0,p=Math.min(o.start,f.start);return f.end>o.start?(v=m.slice(o.start,f.end),b=(j=n.getStringFillingLengthAtPosition(v,p))?o.length:0):m.length<u.length&&(b=u.length-m.length),m=u,b&&(b===1&&!o.length&&(p=o.start===f.start?n.getRightEditablePosition(f.start):n.getLeftEditablePosition(f.start)),m=n.clearRange(m,p,b)),m=n.insertStringAtPosition(m,v,p),(p+=j)>=r.length?p=r.length:p<l.length&&!j?p=l.length:p>=l.length&&p<c&&j&&(p=n.getRightEditablePosition(p)),{value:m=n.formatValue(m),enteredString:v,selection:{start:p,end:p}}},this.maskOptions=function(t){var e=t.mask,a=t.maskPlaceholder,r=[];if(!e)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if(typeof e=="string"){var l=!1,c="";e.split("").forEach(function(u){l||u!=="\\"?(!l&&$[u]||r.push(c.length),c+=u,l=!1):l=!0}),e=c.split("").map(function(u,o){return r.indexOf(o)===-1?$[u]:u})}else e.forEach(function(u,o){typeof u=="string"&&r.push(o)});a&&(a=a.length===1?e.map(function(u,o){return r.indexOf(o)!==-1?u:a}):a.split(""),r.forEach(function(u){a[u]=e[u]}),a=a.join(""));for(var d=r.filter(function(u,o){return u===o}).map(function(u){return e[u]}).join(""),f=e.length-1;r.indexOf(f)!==-1;)f--;return{maskPlaceholder:a,prefix:d,mask:e,lastEditablePosition:f,permanents:r}}(i)},Ft=["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"],D=w.forwardRef(function(i,n){var t=i.alwaysShowMask,e=i.children,a=i.mask,r=i.maskPlaceholder,l=i.beforeMaskedStateChange,c=function(h,x){if(h==null)return{};var g,k,y={},N=Object.keys(h);for(k=0;k<N.length;k++)g=N[k],x.indexOf(g)>=0||(y[g]=h[g]);return y}(i,Ft);(function(h){var x=h.mask,g=h.maskPlaceholder;x&&g&&g.length!==1&&g.length!==x.length&&U(!1)})(i);var d,f,u=new Ct({mask:a,maskPlaceholder:r}),o=!!a,m=!c.disabled&&!c.readOnly,v=i.value!==null&&i.value!==void 0,j=(d=o,f=w.useRef(),w.useEffect(function(){f.current=d}),f.current),b=function(h){return""+h}((v?i.value:i.defaultValue)||""),p=Et(b,o),S=p.inputRef,E=p.getInputState,P=p.setInputState,V=p.getLastInputState,O=_(S);if(o&&v){var T=O(),R=T&&I(T)||t||i.value?u.formatValue(i.value):i.value;l&&(R=l({nextState:{value:R,selection:{start:null,end:null}}}).value),P(C({},V(),{value:R}))}var B=V(),nt=B.selection,at=B.value;w.useLayoutEffect(function(){if(o){var h=O();if(h){var x=I(h),g=nt,k=E(),y=C({},k);if(!v){var N=k.value,L=u.formatValue(N),A=u.isValueEmpty(L);!A||x||t?y.value=L:A&&!x&&(y.value="")}x&&!j?y.selection=u.getDefaultSelectionForValue(y.value):v&&x&&g&&g.start!==null&&g.end!==null&&(y.selection=g),l&&(y=l({currentState:k,nextState:y})),P(y)}}});var z=function(h){S.current=h,function(x){return typeof x=="function"}(n)?n(h):n!==null&&typeof n=="object"&&(n.current=h)},G=C({},c,{onFocus:function(h){S.current=h.target;var x=E().value;if(o&&!u.isValueFilled(x)){var g=u.formatValue(x),k=u.getDefaultSelectionForValue(g),y={value:g,selection:k};l&&(g=(y=l({currentState:E(),nextState:y})).value,k=y.selection),P(y),g!==x&&i.onChange&&i.onChange(h),tt(function(){P(V())})}i.onFocus&&i.onFocus(h)},onBlur:function(h){var x=E().value,g=V().value;if(o&&!t&&u.isValueEmpty(g)){var k="",y={value:k,selection:{start:null,end:null}};l&&(k=(y=l({currentState:E(),nextState:y})).value),P(y),k!==x&&i.onChange&&i.onChange(h)}i.onBlur&&i.onBlur(h)},onChange:o&&m?function(h){var x=E(),g=V(),k=u.processChange(x,g);l&&(k=l({currentState:x,previousState:g,nextState:k})),P(k),i.onChange&&i.onChange(h)}:i.onChange,onMouseDown:o&&m?function(h){var x=O();if(x){var g=E().value,k=et(x);if(!I(x)&&!u.isValueFilled(g)){var y=h.clientX,N=h.clientY,L=new Date().getTime();k.addEventListener("mouseup",function A(Y){if(k.removeEventListener("mouseup",A),I(x)){var rt=Math.abs(Y.clientX-y),st=Math.abs(Y.clientY-N),q=Math.max(rt,st),H=new Date().getTime()-L;if(q<=10&&H<=200||q<=5&&H<=300){var X=V(),ot=C({},X,{selection:u.getDefaultSelectionForValue(X.value)});P(ot)}}})}i.onMouseDown&&i.onMouseDown(h)}}:i.onMouseDown,value:o&&v?at:i.value});if(e){(function(h,x){St.filter(function(g){return x.props[g]!=null&&x.props[g]!==h[g]}).length&&U(!1)})(i,e);var it=w.Children.only(e);return w.cloneElement(it,C({},G,{ref:z}))}return w.createElement("input",C({ref:z},G))});D.displayName="InputMask",D.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},W.exports=D;var Vt=W.exports;Q.exports=Vt;var Nt=Q.exports;const It=ut(Nt),Lt=({type:i,isActive:n,setIsActive:t})=>{const e=M.useRef(),a={successOrder:`Your order has been successfully placed on the website. 
A manager will contact you shortly to confirm your order.`,successDiscount:"You've successfully received a discount."},r=()=>{e.current.style.transform="translateY(150%)",setTimeout(()=>{t(!1)},1e3)};return s.jsx(s.Fragment,{children:n&&s.jsxs(F.div,{initial:{opacity:0,transform:"translateY(100%)"},animate:{opacity:1,transform:"translateY(0%)"},ref:e,transition:{type:"spring",damping:20,stiffness:150},className:"fixed bg-green z-[100] right-1 left-1 xs:right-4 sm:left-[unset] bottom-6 px-8 py-5 duration-500 text-white sm:w-[520px] rounded-xl",children:[s.jsx("h1",{className:"font-semibold pb-1 xs:pb-0 text-[24px] xs:text-[32px]",children:"Congratulations!"}),s.jsx("p",{className:"max-w-[290px] pt-4 text-[14px] xs:text-[18px] xs:max-w-[400px] font-semibold",children:a[i]}),s.jsx("button",{onClick:r,className:"cross cursor-pointer absolute right-[22px] xs:right-[32px] top-[18px] w-8 h-8",children:s.jsxs("div",{className:"absolute p-4 inset-0 w-full h-full",children:[s.jsx("div",{className:"absolute inset-x-0 mx-auto h-1 bg-white transform rotate-45"}),s.jsx("div",{className:"absolute inset-x-0 mx-auto h-1 bg-white transform -rotate-45"})]})})]})})},At=({name:i,type:n="text",placeholder:t="",value:e,onChange:a,extras:r})=>s.jsx("input",{className:`${r} bg-transparent font-bold placeholder:font-normal placeholder:text-[16px] px-4 py-2 text-[18px] placeholder-white text-white border outline-none rounded-md border-white w-full`,name:i,type:n,placeholder:t,value:e,onChange:a}),Mt=()=>{const[i,n]=M.useState(!1),{handleSubmit:t,control:e,reset:a}=gt({mode:"onChange"}),r=l=>{l&&(n(!0),a())};return s.jsxs(s.Fragment,{children:[s.jsxs(F.form,{onSubmit:t(r),className:"flex flex-col w-full gap-2",initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.25},transition:{duration:.5},children:[ct.map(l=>s.jsx(xt,{control:e,name:l.name,rules:{...l.type==="number"?{pattern:{value:/^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/,message:"Invalid phone number format. Example: +38 (123) 456 78 90"},required:"Invalid phone number format. Example: +38 (123) 456 78 90"}:{required:"Input is required!"}},defaultValue:"",render:({field:{value:c,onChange:d},fieldState:{error:f}})=>s.jsxs(s.Fragment,{children:[l.type==="number"?s.jsx(It,{className:"bg-transparent font-bold placeholder:text-[18px] placeholder:text-bold px-4 py-2 text-[18px] placeholder-white text-white border outline-none rounded-md border-white w-full",mask:"+38\\ (999) 999 99 99",type:"text",value:c,placeholder:"+38 (___) ___ __ __",onChange:d}):s.jsx(At,{...l,value:c,onChange:d}),(f==null?void 0:f.message)&&s.jsx("span",{className:"text-red drop-shadow-none font-bold",children:f.message})]})},l.name)),s.jsx(K,{text:"Get a discount",extraClassName:"bg-white text-black mt-3 hover:bg-gray py-3",type:"submit",whileHover:{scale:1.05},whileTap:{scale:.95}})]}),ft.createPortal(s.jsx(Lt,{isActive:i,setIsActive:n,type:"successDiscount"}),document.body)]})},Ot=""+new URL("../images/form-content-img.webp",import.meta.url).href,Rt=()=>s.jsx("section",{className:"discount",children:s.jsx("div",{className:"container",children:s.jsxs("div",{className:"discount-content relative flex flex-col p-6 pb-10 bg-gradient-to-r from-linearGreen1 to-linearGreen2 rounded-xl",children:[s.jsx(J,{text:"5% off on the first order",extras:"text-center text-white relative z-[1]"}),s.jsx("div",{className:"relative z-[1] discount-form mt-8 md:mt-12 flex self-end w-full lg:w-2/5",children:s.jsx(Mt,{})}),s.jsx(F.div,{className:"absolute lg:block hidden w-full h-full bottom-0 left-0 z-0 overflow-hidden",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,amount:.25},transition:{duration:.5},children:s.jsx(F.img,{className:"absolute lg:scale-[.73] lg:bottom-[-50px] lg:left-[-65px] lgXl:scale-[.85] lgXl:bottom-[-30px] lgXl:left-0",src:Ot,alt:"form img",initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:{duration:.5,delay:.2},viewport:{once:!0,amount:.25}})})]})})}),Dt=()=>{const i=M.useMemo(()=>dt.filter(n=>n.discount).reverse().slice(0,4),[]);return s.jsx(F.section,{className:"sale",initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.5},viewport:{once:!0,amount:.25},children:s.jsxs("div",{className:"container",children:[s.jsx(J,{to:"all-products?from=&to=&discount=true&sortBy=default",text:"Sale",buttonText:"All sales"}),s.jsx(vt,{list:i})]})})},Ht=()=>s.jsxs(s.Fragment,{children:[s.jsxs(mt,{children:[s.jsx("title",{children:"Garden"}),s.jsx("meta",{name:"description",content:"Garden"})]}),s.jsx("main",{className:"main",children:s.jsxs("section",{className:"flex flex-col gap-10 md:gap-20",children:[s.jsx(wt,{}),s.jsx("section",{className:"categories",children:s.jsx("div",{className:"container",children:s.jsx(pt,{withButton:!0})})}),s.jsx(Rt,{}),s.jsx(Dt,{})]})}),s.jsx(ht,{})]});export{Ht as default};
