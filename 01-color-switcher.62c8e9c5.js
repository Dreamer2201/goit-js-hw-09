const t=document.querySelector("button[data-start]");console.log(t);const e=document.querySelector("button[data-stop]");console.log(e);const o=document.querySelector("body");t.addEventListener("click",(function(){n=setInterval(r,1e3,1e3),t.setAttribute("disabled","true")})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled","true")}));let n=null;function r(){return o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.62c8e9c5.js.map
