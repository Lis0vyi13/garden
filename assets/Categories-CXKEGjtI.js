import{j as e,m as l,L as o,T as i,c as s}from"./index-CiARpoU3.js";const n=({list:r,extra:a})=>e.jsx("ul",{className:`grid-list grid gap-y-6 gap-4 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${a}`,children:r.map(t=>e.jsx(l.li,{className:"category w-[300px] xs:w-[316px] h-[380px] md:h-[420px] duration-300 ",style:{position:"relative"},whileHover:{scale:1.05,transition:{duration:.15}},children:e.jsxs(o,{to:t.url,className:"flex w-full h-full flex-col gap-4 items-center",children:[e.jsx("div",{className:"relative duration-300 hover:after:opacity-50 after:rounded-[12px] rounded-[12px] img w-full h-[350px] overflow-hidden after:content[''] after:duration-300 after:absolute after:block after:left-0 after:top-0 after:w-full after:h-full after:bg-black after:opacity-0",children:e.jsx("img",{className:"relative",src:t.href,alt:t.name,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})}),e.jsx("h3",{className:"text-xl duration-100 hover:text-green text-center max-w-[315px]",children:t.name})]})},t.name))}),x=({withButton:r})=>{const a=r?s.slice(0,4):s;return e.jsx(l.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0,amount:.25},transition:{duration:.5},children:e.jsxs("div",{children:[r?e.jsx(i,{to:"categories",text:"Categories",buttonText:"All categories"}):e.jsx(i,{text:"Categories"}),e.jsx(n,{list:a,extra:"mt-10"})]})})};export{x as C};
