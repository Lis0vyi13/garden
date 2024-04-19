import{j as u,L as ot,r as M,g as lt,m as ut,d as ct,a as ft,T as $,p as dt}from"./index-DRbh6Yrv.js";import{B as J}from"./Button-HjXe2NNP.js";import{C as mt}from"./Categories-D9X7AtVY.js";import{u as ht,C as pt,P as gt}from"./ProductsList-Cr7BfSI6.js";import"./useCartActions-CYhhfMQM.js";const xt=""+new URL("../bg.webp",import.meta.url).href,vt=()=>u.jsxs("section",{className:"hero relative -mt-3",children:[u.jsx("div",{className:"img after:content[''] after:-z-10 after:absolute after:block after:left-0 after:top-0 after:w-full after:h-full after:bg-black after:opacity-40",children:u.jsx("img",{className:"absolute -z-10 h-full w-full object-cover",src:xt,alt:"background"})}),u.jsxs("div",{className:"container",children:[u.jsx("h1",{className:"text-white pt-[100px] md:pt-20 font-bold text-[28px] xs:text-[35px] sm:text-[42px] md:text-[50px] lg:text-[72px] md:max-w-[650px] lg:max-w-[820px]",children:"Amazing Discounts on Garden Products!"}),u.jsx(ot,{to:"all-products?from=&to=&discount=true&sortBy=default",children:u.jsx(J,{text:"Check out",isGreen:!0,extraClassName:"mt-10 mb-[140px] md:mb-[200px]"})})]})]});var K={exports:{}},Q={exports:{}},bt=function(r,n,t,e,a,s,o,c){if(!r){var d;if(n===void 0)d=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[t,e,a,s,o,c],l=0;d=new Error(n.replace(/%s/g,function(){return f[l++]})),d.name="Invariant Violation"}throw d.framesToPop=1,d}},kt=bt,k=M,U=kt;function C(){return C=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r[e]=t[e])}return r},C.apply(this,arguments)}function W(r){return requestAnimationFrame(r)}function H(r){cancelAnimationFrame(r)}function V(r){var n=r.ownerDocument;return n.hasFocus()&&n.activeElement===r}function tt(r){return r==null?void 0:r.ownerDocument}function wt(r){var n=function(t){var e;return(e=tt(t))==null?void 0:e.defaultView}(r);return!!n&&r instanceof n.HTMLElement}function D(r){return k.useCallback(function(){var n=r.current,t=typeof window<"u"&&wt(n);if(!n||!t)return null;if(n.nodeName!=="INPUT"&&(n=n.querySelector("input")),!n)throw new Error("react-input-mask: inputComponent doesn't contain input node");return n},[r])}function Pt(r,n){var t,e,a,s,o=k.useRef({start:null,end:null}),c=D(r),d=k.useCallback(function(){return function(b){var p=b.selectionStart,y=b.selectionEnd;return{start:p,end:y,length:y-p}}(c())},[c]),f=k.useCallback(function(){return o.current},[]),l=k.useCallback(function(b){var p=c();p&&V(p)&&(function(y,S,E){E===void 0&&(E=S),y.setSelectionRange(S,E)}(p,b.start,b.end),o.current=d())},[c,d]),i=k.useCallback(function(){o.current=d()},[d]),m=(t=i,e=k.useRef(null),a=k.useCallback(function(){e.current===null&&function b(){t(),e.current=W(b)}()},[t]),s=k.useCallback(function(){H(e.current),e.current=null},[]),k.useEffect(function(){e.current&&(s(),a())},[a,s]),k.useEffect(H,[]),[a,s]),v=m[0],j=m[1];return k.useLayoutEffect(function(){if(n){var b=c();return b.addEventListener("focus",v),b.addEventListener("blur",j),V(b)&&v(),function(){b.removeEventListener("focus",v),b.removeEventListener("blur",j),j()}}}),{getSelection:d,getLastSelection:f,setSelection:l}}function jt(r,n){var t=k.useRef(),e=Pt(t,n),a=e.getSelection,s=e.getLastSelection,o=e.setSelection,c=function(i,m){var v=D(i),j=k.useRef(m);return{getValue:k.useCallback(function(){return v().value},[v]),getLastValue:k.useCallback(function(){return j.current},[]),setValue:k.useCallback(function(b){j.current=b;var p=v();p&&(p.value=b)},[v])}}(t,r),d=c.getValue,f=c.getLastValue,l=c.setValue;return{inputRef:t,getInputState:function(){return{value:d(),selection:a()}},getLastInputState:function(){return{value:f(),selection:s()}},setInputState:function(i){var m=i.value,v=i.selection;l(m),o(v)}}}var Et=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],Z={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},St=function(r){var n=this;this.isCharacterAllowedAtPosition=function(t,e){var a=n.maskOptions.maskPlaceholder;return!!n.isCharacterFillingPosition(t,e)||!!a&&a[e]===t},this.isCharacterFillingPosition=function(t,e){var a=n.maskOptions.mask;if(!t||e>=a.length)return!1;if(!n.isPositionEditable(e))return a[e]===t;var s=a[e];return new RegExp(s).test(t)},this.isPositionEditable=function(t){var e=n.maskOptions,a=e.mask,s=e.permanents;return t<a.length&&s.indexOf(t)===-1},this.isValueEmpty=function(t){return t.split("").every(function(e,a){return!n.isPositionEditable(a)||!n.isCharacterFillingPosition(e,a)})},this.isValueFilled=function(t){return n.getFilledLength(t)===n.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(t){var e=n.getFilledLength(t),a=n.getRightEditablePosition(e);return{start:a,end:a}},this.getFilledLength=function(t){return function(e,a){for(var s=e.length-1;s>=0;s--)if(a(e[s],s))return s;return-1}(t.split(""),function(e,a){return n.isPositionEditable(a)&&n.isCharacterFillingPosition(e,a)})+1},this.getStringFillingLengthAtPosition=function(t,e){return t.split("").reduce(function(a,s){return n.insertCharacterAtPosition(a,s,a.length)},function(a,s){s===void 0&&(s=1);for(var o="",c=0;c<s;c++)o+=a;return o}(" ",e)).length-e},this.getLeftEditablePosition=function(t){for(var e=t;e>=0;e--)if(n.isPositionEditable(e))return e;return null},this.getRightEditablePosition=function(t){for(var e=n.maskOptions.mask,a=t;a<e.length;a++)if(n.isPositionEditable(a))return a;return null},this.formatValue=function(t){var e=n.maskOptions,a=e.maskPlaceholder,s=e.mask;if(!a){for(t=n.insertStringAtPosition("",t,0);t.length<s.length&&!n.isPositionEditable(t.length);)t+=s[t.length];return t}return n.insertStringAtPosition(a,t,0)},this.clearRange=function(t,e,a){if(!a)return t;var s=e+a,o=n.maskOptions,c=o.maskPlaceholder,d=o.mask,f=t.split("").map(function(l,i){var m=n.isPositionEditable(i);return!c&&i>=s&&!m?"":i<e||i>=s?l:m?c?c[i]:"":d[i]}).join("");return n.formatValue(f)},this.insertCharacterAtPosition=function(t,e,a){var s=n.maskOptions,o=s.mask,c=s.maskPlaceholder;if(a>=o.length)return t;var d=n.isCharacterAllowedAtPosition(e,a),f=n.isPositionEditable(a),l=n.getRightEditablePosition(a),i=c&&l?e===c[l]:null,m=t.slice(0,a);return!d&&f||(t=m+(d?e:o[a])),d||f||i||(t=n.insertCharacterAtPosition(t,e,a+1)),t},this.insertStringAtPosition=function(t,e,a){var s=n.maskOptions,o=s.mask,c=s.maskPlaceholder;if(!e||a>=o.length)return t;var d=e.split(""),f=n.isValueFilled(t)||!!c,l=t.slice(a);return t=d.reduce(function(i,m){return n.insertCharacterAtPosition(i,m,i.length)},t.slice(0,a)),f?t+=l.slice(t.length-a):n.isValueFilled(t)?t+=o.slice(t.length).join(""):t=l.split("").filter(function(i,m){return n.isPositionEditable(a+m)}).reduce(function(i,m){var v=n.getRightEditablePosition(i.length);return v===null?i:(n.isPositionEditable(i.length)||(i+=o.slice(i.length,v).join("")),n.insertCharacterAtPosition(i,m,i.length))},t),t},this.processChange=function(t,e){var a=n.maskOptions,s=a.mask,o=a.prefix,c=a.lastEditablePosition,d=t.value,f=t.selection,l=e.value,i=e.selection,m=d,v="",j=0,b=0,p=Math.min(i.start,f.start);return f.end>i.start?(v=m.slice(i.start,f.end),b=(j=n.getStringFillingLengthAtPosition(v,p))?i.length:0):m.length<l.length&&(b=l.length-m.length),m=l,b&&(b===1&&!i.length&&(p=i.start===f.start?n.getRightEditablePosition(f.start):n.getLeftEditablePosition(f.start)),m=n.clearRange(m,p,b)),m=n.insertStringAtPosition(m,v,p),(p+=j)>=s.length?p=s.length:p<o.length&&!j?p=o.length:p>=o.length&&p<c&&j&&(p=n.getRightEditablePosition(p)),{value:m=n.formatValue(m),enteredString:v,selection:{start:p,end:p}}},this.maskOptions=function(t){var e=t.mask,a=t.maskPlaceholder,s=[];if(!e)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if(typeof e=="string"){var o=!1,c="";e.split("").forEach(function(l){o||l!=="\\"?(!o&&Z[l]||s.push(c.length),c+=l,o=!1):o=!0}),e=c.split("").map(function(l,i){return s.indexOf(i)===-1?Z[l]:l})}else e.forEach(function(l,i){typeof l=="string"&&s.push(i)});a&&(a=a.length===1?e.map(function(l,i){return s.indexOf(i)!==-1?l:a}):a.split(""),s.forEach(function(l){a[l]=e[l]}),a=a.join(""));for(var d=s.filter(function(l,i){return l===i}).map(function(l){return e[l]}).join(""),f=e.length-1;s.indexOf(f)!==-1;)f--;return{maskPlaceholder:a,prefix:d,mask:e,lastEditablePosition:f,permanents:s}}(r)},yt=["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"],I=k.forwardRef(function(r,n){var t=r.alwaysShowMask,e=r.children,a=r.mask,s=r.maskPlaceholder,o=r.beforeMaskedStateChange,c=function(h,x){if(h==null)return{};var g,w,P={},N=Object.keys(h);for(w=0;w<N.length;w++)g=N[w],x.indexOf(g)>=0||(P[g]=h[g]);return P}(r,yt);(function(h){var x=h.mask,g=h.maskPlaceholder;x&&g&&g.length!==1&&g.length!==x.length&&U(!1)})(r);var d,f,l=new St({mask:a,maskPlaceholder:s}),i=!!a,m=!c.disabled&&!c.readOnly,v=r.value!==null&&r.value!==void 0,j=(d=i,f=k.useRef(),k.useEffect(function(){f.current=d}),f.current),b=function(h){return""+h}((v?r.value:r.defaultValue)||""),p=jt(b,i),y=p.inputRef,S=p.getInputState,E=p.setInputState,F=p.getLastInputState,O=D(y);if(i&&v){var _=O(),R=_&&V(_)||t||r.value?l.formatValue(r.value):r.value;o&&(R=o({nextState:{value:R,selection:{start:null,end:null}}}).value),E(C({},F(),{value:R}))}var B=F(),et=B.selection,nt=B.value;k.useLayoutEffect(function(){if(i){var h=O();if(h){var x=V(h),g=et,w=S(),P=C({},w);if(!v){var N=w.value,L=l.formatValue(N),A=l.isValueEmpty(L);!A||x||t?P.value=L:A&&!x&&(P.value="")}x&&!j?P.selection=l.getDefaultSelectionForValue(P.value):v&&x&&g&&g.start!==null&&g.end!==null&&(P.selection=g),o&&(P=o({currentState:w,nextState:P})),E(P)}}});var T=function(h){y.current=h,function(x){return typeof x=="function"}(n)?n(h):n!==null&&typeof n=="object"&&(n.current=h)},z=C({},c,{onFocus:function(h){y.current=h.target;var x=S().value;if(i&&!l.isValueFilled(x)){var g=l.formatValue(x),w=l.getDefaultSelectionForValue(g),P={value:g,selection:w};o&&(g=(P=o({currentState:S(),nextState:P})).value,w=P.selection),E(P),g!==x&&r.onChange&&r.onChange(h),W(function(){E(F())})}r.onFocus&&r.onFocus(h)},onBlur:function(h){var x=S().value,g=F().value;if(i&&!t&&l.isValueEmpty(g)){var w="",P={value:w,selection:{start:null,end:null}};o&&(w=(P=o({currentState:S(),nextState:P})).value),E(P),w!==x&&r.onChange&&r.onChange(h)}r.onBlur&&r.onBlur(h)},onChange:i&&m?function(h){var x=S(),g=F(),w=l.processChange(x,g);o&&(w=o({currentState:x,previousState:g,nextState:w})),E(w),r.onChange&&r.onChange(h)}:r.onChange,onMouseDown:i&&m?function(h){var x=O();if(x){var g=S().value,w=tt(x);if(!V(x)&&!l.isValueFilled(g)){var P=h.clientX,N=h.clientY,L=new Date().getTime();w.addEventListener("mouseup",function A(Y){if(w.removeEventListener("mouseup",A),V(x)){var rt=Math.abs(Y.clientX-P),st=Math.abs(Y.clientY-N),q=Math.max(rt,st),G=new Date().getTime()-L;if(q<=10&&G<=200||q<=5&&G<=300){var X=F(),it=C({},X,{selection:l.getDefaultSelectionForValue(X.value)});E(it)}}})}r.onMouseDown&&r.onMouseDown(h)}}:r.onMouseDown,value:i&&v?nt:r.value});if(e){(function(h,x){Et.filter(function(g){return x.props[g]!=null&&x.props[g]!==h[g]}).length&&U(!1)})(r,e);var at=k.Children.only(e);return k.cloneElement(at,C({},z,{ref:T}))}return k.createElement("input",C({ref:T},z))});I.displayName="InputMask",I.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},Q.exports=I;var Ct=Q.exports;K.exports=Ct;var Ft=K.exports;const Nt=lt(Ft),Vt=({type:r,isActive:n,setIsActive:t})=>{const e=M.useRef(),a={successOrder:`Your order has been successfully placed on the website. 
A manager will contact you shortly to confirm your order.`,successDiscount:"You've successfully received a discount."},s=()=>{e.current.style.transform="translateY(150%)",setTimeout(()=>{t(!1)},1e3)};return u.jsx(u.Fragment,{children:n&&u.jsxs(ut.div,{initial:{opacity:0,transform:"translateY(100%)"},animate:{opacity:1,transform:"translateY(0%)"},ref:e,transition:{type:"spring",damping:20,stiffness:150},className:"fixed bg-green z-[100] right-1 left-1 xs:right-4 sm:left-[unset] bottom-6 px-8 py-5 duration-500 text-white sm:w-[520px] rounded-xl",children:[u.jsx("h1",{className:"font-semibold pb-1 xs:pb-0 text-[24px] xs:text-[32px]",children:"Congratulations!"}),u.jsx("p",{className:"max-w-[290px] pt-4 text-[14px] xs:text-[18px] xs:max-w-[400px] font-semibold",children:a[r]}),u.jsx("button",{onClick:s,className:"cross cursor-pointer absolute right-[22px] xs:right-[32px] top-[18px] w-8 h-8",children:u.jsxs("div",{className:"absolute p-4 inset-0 w-full h-full",children:[u.jsx("div",{className:"absolute inset-x-0 mx-auto h-1 bg-white transform rotate-45"}),u.jsx("div",{className:"absolute inset-x-0 mx-auto h-1 bg-white transform -rotate-45"})]})})]})})},Lt=({name:r,type:n="text",placeholder:t="",value:e,onChange:a,extras:s})=>u.jsx("input",{className:`${s} bg-transparent font-bold placeholder:font-normal placeholder:text-[16px] px-4 py-2 text-[18px] placeholder-white text-white border outline-none rounded-md border-white w-full`,name:r,type:n,placeholder:t,value:e,onChange:a}),At=()=>{const{handleSubmit:r,control:n,reset:t}=ht({mode:"onChange"}),[e,a]=M.useState(!1),s=o=>{o&&(a(!0),t())};return u.jsxs(u.Fragment,{children:[u.jsxs("form",{onSubmit:r(s),className:"flex flex-col w-full gap-2",children:[ct.map(o=>u.jsx(pt,{control:n,name:o.name,rules:{...o.type==="number"?{pattern:{value:/^\+38 \(\d{3}\) \d{3} \d{2} \d{2}$/,message:"Invalid phone number format. Example: +38 (123) 456 78 90"},required:"Invalid phone number format. Example: +38 (123) 456 78 90"}:{required:"Input is required!"}},defaultValue:"",render:({field:{value:c,onChange:d},fieldState:{error:f}})=>u.jsxs(u.Fragment,{children:[o.type==="number"?u.jsx(Nt,{className:"bg-transparent font-bold placeholder:text-[18px] placeholder:text-bold px-4 py-2 text-[18px] placeholder-white text-white border outline-none rounded-md border-white w-full",mask:"+38\\ (999) 999 99 99",type:"text",value:c,placeholder:"+38 (___) ___ __ __",onChange:d}):u.jsx(Lt,{...o,value:c,onChange:d}),(f==null?void 0:f.message)&&u.jsx("span",{className:"text-red drop-shadow-none font-bold",children:f.message})]})},o.name)),u.jsx(J,{text:"Get a discount",extraClassName:"bg-white text-black mt-3 hover:bg-gray py-3",type:"submit"})]}),ft.createPortal(u.jsx(Vt,{isActive:e,setIsActive:a,type:"successDiscount"}),document.body)]})},Mt=""+new URL("../form-content-img.png",import.meta.url).href,Ot=()=>u.jsx("section",{className:"discount",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"discount-content relative flex flex-col p-6 pb-10 bg-gradient-to-r from-linearGreen1 to-linearGreen2 rounded-xl",children:[u.jsx($,{text:"5% off on the first order",extras:"text-center text-white relative z-[1]"}),u.jsx("div",{className:"relative z-[1] discount-form mt-8 md:mt-12 flex self-end w-full lg:w-2/5",children:u.jsx(At,{})}),u.jsx("div",{className:"absolute lg:block hidden w-full h-full bottom-0 left-0 z-0 overflow-hidden",children:u.jsx("img",{className:"absolute lg:scale-[.73] lg:bottom-[-50px] lg:left-[-65px] lgXl:scale-[.85] lgXl:bottom-[-30px] lgXl:left-0",src:Mt,alt:"form img"})})]})})}),Rt=()=>{const r=M.useMemo(()=>dt.filter(n=>n.discount).reverse().slice(0,4),[]);return u.jsx("section",{className:"sale",children:u.jsxs("div",{className:"container",children:[u.jsx($,{to:"all-products?from=&to=&discount=true&sortBy=default",text:"Sale",buttonText:"All sales"}),u.jsx(gt,{list:r})]})})},zt=()=>u.jsxs("section",{className:"flex flex-col gap-10 md:gap-20",children:[u.jsx(vt,{}),u.jsx("section",{className:"categories",children:u.jsx("div",{className:"container",children:u.jsx(mt,{withButton:!0})})}),u.jsx(Ot,{}),u.jsx(Rt,{})]});export{zt as default};