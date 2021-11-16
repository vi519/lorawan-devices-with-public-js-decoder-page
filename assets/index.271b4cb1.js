import{j as c,P as o,Z as m,a as p,r as h,R as x,b as u}from"./vendor.3b996ac5.js";const f=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(s){if(s.ep)return;s.ep=!0;const t=n(s);fetch(s.href,t)}};f();const e=c.exports.jsx,r=c.exports.jsxs;function g(){return r("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:[r("div",{className:"px-4 py-5 sm:px-6",children:[e("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Application Information"}),e("p",{className:"mt-1 max-w-2xl text-sm text-gray-500",children:"Service details and features."})]}),e("div",{className:"border-t border-gray-200",children:r("dl",{children:[r("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-500",children:"Full name"}),e("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:"lorawan-devices-with-public-js-decoder-page"})]}),r("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-500",children:"Application for"}),e("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:"LoRaWAN Developer"})]}),r("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-500",children:"About"}),e("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:"Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu."})]}),r("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-500",children:"Attachments"}),e("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:r("ul",{role:"list",className:"border border-gray-200 rounded-md divide-y divide-gray-200",children:[r("li",{className:"pl-3 pr-4 py-3 flex items-center justify-between text-sm",children:[r("div",{className:"w-0 flex-1 flex items-center",children:[e(o,{className:"flex-shrink-0 h-5 w-5 text-gray-400","aria-hidden":"true"}),e("span",{className:"ml-2 flex-1 w-0 truncate",children:"resume_back_end_developer.pdf"})]}),e("div",{className:"ml-4 flex-shrink-0",children:e("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Download"})})]}),r("li",{className:"pl-3 pr-4 py-3 flex items-center justify-between text-sm",children:[r("div",{className:"w-0 flex-1 flex items-center",children:[e(o,{className:"flex-shrink-0 h-5 w-5 text-gray-400","aria-hidden":"true"}),e("span",{className:"ml-2 flex-1 w-0 truncate",children:"coverletter_back_end_developer.pdf"})]}),e("div",{className:"ml-4 flex-shrink-0",children:e("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Download"})})]})]})})]})]})})]})}const y=a=>p.get(a).then(i=>i.data);function N(){const{data:a,error:i}=m("https://jsonplaceholder.typicode.com/photos",y,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1});return{devices:a,isLoading:!i&&!a,isError:i}}function v(){const{devices:a,isLoading:i,error:n}=N();if(n)return e("div",{children:"failed to load"});if(i)return e("div",{children:"loading..."});const l=a.slice(0,10);console.log(l);const s=[...l].sort((t,d)=>d.id-t.id);return console.log(s),e("div",{className:"flex flex-col",children:e("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:e("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:r("table",{className:"min-w-full divide-y divide-gray-200",children:[e("thead",{className:"bg-gray-50",children:r("tr",{children:[e("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),e("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Title"}),e("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),e("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Role"}),e("th",{scope:"col",className:"relative px-6 py-3",children:e("span",{className:"sr-only",children:"Edit"})})]})}),e("tbody",{className:"bg-white divide-y divide-gray-200",children:s.map(t=>r("tr",{children:[e("td",{className:"px-6 py-4 whitespace-nowrap",children:r("div",{className:"flex items-center",children:[e("div",{className:"flex-shrink-0 h-10 w-10",children:e("img",{className:"h-10 w-10 rounded-full",src:t.thumbnailUrl,alt:""})}),e("div",{className:"ml-4",children:e("div",{className:"text-sm font-medium text-gray-900",children:t.id})})]})}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:e("div",{className:"text-sm text-gray-900",children:t.title})}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:e("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:"Active"})}),e("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.url}),e("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:e("a",{href:t.url,target:"_blank",className:"text-indigo-600 hover:text-indigo-900",children:"Open"})})]},t.id))})]})})})})})}function w(){return h.exports.useState(0),r("div",{className:"md:container md:mx-auto",children:[e(g,{}),e(v,{})]})}x.render(e(u.StrictMode,{children:e(w,{})}),document.getElementById("root"));
