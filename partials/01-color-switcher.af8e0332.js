!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");e.setAttribute("disabled","true"),t.addEventListener("click",(function(){n=setInterval(u,1e3,1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled","true")})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled","true"),e.setAttribute("disabled","true")}));var n=null;function u(){return r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}}();
//# sourceMappingURL=01-color-switcher.af8e0332.js.map