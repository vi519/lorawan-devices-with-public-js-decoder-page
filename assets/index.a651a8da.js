import{j as c,P as o,Z as m,a as p,r as x,R as h,b as u}from"./vendor.3b996ac5.js";const f=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function d(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerpolicy&&(t.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?t.credentials="include":r.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=d(r);fetch(r.href,t)}};f();const e=c.exports.jsx,s=c.exports.jsxs;function g(){return s("div",{className:"bg-white shadow overflow-hidden sm:rounded-lg",children:[s("div",{className:"px-4 py-5 sm:px-6",children:[e("h3",{className:"text-lg leading-6 font-medium text-gray-900",children:"Application Information"}),e("p",{className:"mt-1 max-w-2xl text-sm text-gray-500",children:"Service details and features."})]}),e("div",{className:"border-t border-gray-200",children:s("dl",{children:[s("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-500",children:"Full name"}),e("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:"lorawan-devices-with-public-js-decoder-page"})]}),s("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-500",children:"Application for"}),e("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:"LoRaWAN Developer"})]}),s("div",{className:"bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-500",children:"About"}),e("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:"Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu."})]}),s("div",{className:"bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",children:[e("dt",{className:"text-sm font-medium text-gray-500",children:"Attachments"}),e("dd",{className:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2",children:s("ul",{role:"list",className:"border border-gray-200 rounded-md divide-y divide-gray-200",children:[s("li",{className:"pl-3 pr-4 py-3 flex items-center justify-between text-sm",children:[s("div",{className:"w-0 flex-1 flex items-center",children:[e(o,{className:"flex-shrink-0 h-5 w-5 text-gray-400","aria-hidden":"true"}),e("span",{className:"ml-2 flex-1 w-0 truncate",children:"resume_back_end_developer.pdf"})]}),e("div",{className:"ml-4 flex-shrink-0",children:e("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Download"})})]}),s("li",{className:"pl-3 pr-4 py-3 flex items-center justify-between text-sm",children:[s("div",{className:"w-0 flex-1 flex items-center",children:[e(o,{className:"flex-shrink-0 h-5 w-5 text-gray-400","aria-hidden":"true"}),e("span",{className:"ml-2 flex-1 w-0 truncate",children:"coverletter_back_end_developer.pdf"})]}),e("div",{className:"ml-4 flex-shrink-0",children:e("a",{href:"#",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Download"})})]})]})})]})]})})]})}const y=i=>p.get(i).then(a=>a.data);function N(){const{data:i,error:a}=m("https://raw.githubusercontent.com/deZemLabs/lorawan-meta-consumer-data/main/lorawan-devices-with-public-js-codec-dump.json",y,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1});return{devices:i,isLoading:!a&&!i,isError:a}}function v(){const{devices:i,isLoading:a,error:d}=N();if(d)return e("div",{children:"failed to load"});if(a)return e("div",{children:"loading..."});const l=i.devices.slice(0,30);console.log(l);const r=[...l].sort((t,n)=>n["vendor-name"]-t["vendor-name"]);return console.log(r),e("div",{className:"flex flex-col",children:e("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:e("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:e("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:s("table",{className:"min-w-full divide-y divide-gray-200",children:[e("thead",{className:"bg-gray-50",children:s("tr",{children:[e("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Name"}),e("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Vendor Name"}),e("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Description"}),e("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Has JS codec"}),e("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Sensors"}),e("th",{scope:"col",className:"relative px-6 py-3",children:e("span",{className:"sr-only",children:"Edit"})})]})}),e("tbody",{className:"bg-white divide-y divide-gray-200",children:r.map(t=>s("tr",{children:[e("td",{className:"px-6 py-4 whitespace-nowrap",children:s("div",{className:"flex items-center",children:[e("div",{className:"flex-shrink-0 h-10 w-10",children:e("img",{className:"h-10 w-10 rounded-full",src:t["image-url"],alt:""})}),e("div",{className:"ml-4",children:e("div",{className:"text-sm font-medium text-gray-900",children:t.name.slice(0,20)})})]})}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:e("div",{className:"text-sm text-gray-900",children:t["vendor-name"].slice(0)})}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:s("div",{className:"text-sm text-gray-900",children:[t.description.slice(0,60),"..."]})}),e("td",{className:"px-6 py-4 whitespace-nowrap",children:e("span",{className:`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${t["has-js-codec"]?"bg-green-100":"bg-red-100"} text-green-800`,children:t["has-js-codec"]?"true":"false"})}),s("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:[t.sensors.join("|").slice(0,20),"..."]}),e("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:e("a",{href:t["image-url"],target:"_blank",rel:"noopener",className:"text-indigo-600 hover:text-indigo-900",children:"Open"})})]},t.id))})]})})})})})}function w(){return x.exports.useState(0),s("div",{className:"md:container md:mx-auto",children:[e(g,{}),e(v,{})]})}h.render(e(u.StrictMode,{children:e(w,{})}),document.getElementById("root"));