(this["webpackJsonpcommon-divisors"]=this["webpackJsonpcommon-divisors"]||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(8),l=n.n(u),i=(n(16),n(2)),c=n(10),m=n(1),o=function(e){for(var t=[],n=[],a=0;a<e.length;a++)for(var r=1;r<=e[a].value;r++)e[a].value%r===0&&n.indexOf(r)<0&&n.push(r);n=n.sort((function(e,t){return e-t}));var u=1;return n.forEach((function(n){var a=e.map((function(e){return e.value%n===0?e.id:null})),r=0;a.forEach((function(e){null!=e&&r++}));var l=r===a.length;l&&(u=n),t.push({value:n,ids:a,common:l})})),{greatest:u,numbers:t}},d=function(e,t){switch(t.type){case"UPDATE_DIVISORS":return Object(m.a)(Object(m.a)({},e),{},{divisors:o(e.numbers)});case"ADD_NUMBER":return Object(m.a)(Object(m.a)({},e),{},{numbers:[t.payload].concat(Object(c.a)(e.numbers))});case"DELETE_NUMBER":return Object(m.a)(Object(m.a)({},e),{},{numbers:e.numbers.filter((function(e){return e.id!==t.payload}))});case"UPDATE_NUMBER":return Object(m.a)(Object(m.a)({},e),{},{numbers:e.numbers.map((function(e){return e.id===t.payload.id?Object(m.a)(Object(m.a)({},e),{},{value:t.payload.number.value}):e}))});default:return e}},s={divisors:{greatest:1,divisors:[]},numbers:[]},b=Object(a.createContext)(s),v=function(e){var t=e.children,n=Object(a.useReducer)(d,s),u=Object(i.a)(n,2),l=u[0],c=u[1];function m(){c({type:"UPDATE_DIVISORS",payload:{}})}return r.a.createElement(b.Provider,{value:{numbers:l.numbers,divisors:l.divisors,addNumber:function(e){c({type:"ADD_NUMBER",payload:e}),m()},deleteNumber:function(e){c({type:"DELETE_NUMBER",payload:e}),m()},updateNumber:function(e,t){c({type:"UPDATE_NUMBER",payload:{id:e,number:t}}),m()}}},t)};function f(e){return r.a.createElement("div",{className:"legend-item"},r.a.createElement("div",{id:"legend-item-".concat(e.itemId)}),r.a.createElement("p",null,e.itemTitle))}function E(){var e=Object(a.useState)(["Not Divisor","Divisor","Common Divisor","Greatest Common Divisor"]),t=Object(i.a)(e,1)[0];return r.a.createElement("div",{id:"legend-panel"},t.map((function(e,t){return r.a.createElement(f,{key:t,itemTitle:e,itemId:t})})))}function p(){return r.a.createElement("header",{id:"main-header"},r.a.createElement("div",{id:"branding"},r.a.createElement("p",null,"Common ",r.a.createElement("span",null,"Divisors"))),r.a.createElement(E,null))}var g=n(9),O=n.n(g);function y(){var e=Object(a.useContext)(b).addNumber;return r.a.createElement("div",{id:"control-add-number"},r.a.createElement("button",{className:"button add-btn",title:"Add Number",onClick:function(){return e({id:O.a.v4(),value:1})}},"+"))}function j(){return r.a.createElement("div",{id:"control-panel"},r.a.createElement(y,null))}function N(e){var t=e.number,n=Object(a.useState)(1),u=Object(i.a)(n,2),l=u[0],c=u[1],m=Object(a.useState)(1),o=Object(i.a)(m,2),d=o[0],s=o[1],v=Object(a.useContext)(b),f=v.deleteNumber,E=v.updateNumber,p=function(e){e.preventDefault(),E(t.id,{value:d}),c(d)};return r.a.createElement("div",{className:"manage-panel-item animate__animated animate__flipInX"},r.a.createElement("form",{className:"manage-panel-form",onSubmit:p},r.a.createElement("input",{type:"number",name:"number",value:d,onClick:function(e){return e.target.select()},onChange:function(e){e.preventDefault(),+e.target.value<1||+e.target.value>1e7?s(l):s(+e.target.value)}})),r.a.createElement("div",{className:"buttons-container"},l!==d?r.a.createElement("button",{title:"Update Number",className:"button update-btn",onClick:p},"U"):null,r.a.createElement("button",{title:"Remove Number",className:"button delete-btn",onClick:function(e){e.preventDefault(),f(t.id)}},"-")))}function D(){var e=Object(a.useContext)(b).numbers;return r.a.createElement("div",{id:"manage-panel"},e.map((function(e){return r.a.createElement(N,{key:e.id,number:e})})))}function _(e){return r.a.createElement("div",{className:"number-item-".concat(e.type," animate__animated animate__flipInY")},r.a.createElement("p",null,e.number.toLocaleString()))}function h(e){var t=e.number,n=Object(a.useContext)(b).divisors,u=function(e){return e.ids.filter((function(e){return e===t.id})).length>0?t.id:null};return r.a.createElement("div",{className:"display-panel-item"},r.a.createElement("div",{className:"display-panel-numbers animate__animated animate__fadeIn"},n.numbers.map((function(e){return r.a.createElement(_,{key:e.value.toString(),number:e.value,type:(t=n.greatest,a=e.common,l=u(e),i=e.value,t===i?"3":a?"2":l?"1":"0")});var t,a,l,i}))))}function C(){var e=Object(a.useContext)(b).numbers;return r.a.createElement("div",{id:"display-panel"},e.map((function(e){return r.a.createElement(h,{key:e.id,number:e})})))}function I(){return r.a.createElement("main",{id:"main-panel"},r.a.createElement(j,null),r.a.createElement("div",{id:"side-panel"},r.a.createElement(D,null),r.a.createElement(C,null)))}function U(){return r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2020 Dawid Polatowski"))}var k=function(){var e,t=function(t){e.scrollLeft=t.target.scrollLeft;var n=t.target.offsetWidth-t.target.clientWidth;e.style.marginRight="".concat(n,"px")};return Object(a.useEffect)((function(){e=document.getElementById("manage-panel"),document.getElementById("display-panel").onscroll=t}),[]),r.a.createElement(v,null,r.a.createElement(p,null),r.a.createElement(I,null),r.a.createElement(U,null))};n(19);l.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[11,1,2]]]);