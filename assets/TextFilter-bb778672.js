import{c as r,j as n,z as u,e as l}from"./index-5afff60e.js";import{R as x}from"./rotate-cw-c05746c7.js";import{d as p}from"./debounce-c1ba2006.js";const g="_rotate_1dspl_1",m="_isRotating_1dspl_5",_="_rotating_1dspl_1",c={rotate:g,isRotating:m,rotating:_};function A(t){const e=t.size||16,s=r(c.rotate,{[c.isRotating]:t.isRotating});return n.jsx("span",{className:s,children:n.jsx(x,{size:e})})}const{useCallback:R,useState:d,useMemo:f}=l;function h(t){const[,e]=u(t),[s,i]=d(""),o=f(()=>p(e,300),[e]);return[R(a=>{i(a.target.value),o(a.target.value)},[o]),s]}const T="_input_16a1f_1",j={input:T};function I(t){const[e,s]=h(t.textAtom);return n.jsx("input",{className:j.input,type:"text",value:s,onChange:e,placeholder:t.placeholder})}export{A as R,I as T};
