const t=document.querySelector("button[data-start"),e=document.querySelector("button[data-stop]");let o=null;let r;t.addEventListener("click",(function(){t.setAttribute("disabled","true"),e.removeAttribute("disabled"),o=setInterval((()=>{var t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;r=localStorage.setItem("background-color-state",t),document.body.style.cssText=`background-color: ${t}`}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),e.setAttribute("disabled","true"),t.removeAttribute("disabled")})),function(){var t=localStorage.getItem("background-color-state");if(!t)return;document.body.style.cssText=`background-color: ${t}`}();const a=document.createElement("button");a.textContent="Clear cache",a.setAttribute("type","submit"),a.setAttribute("data-clear",""),a.style.cssText="width: 100px;\nheight: 20px;\nmargin-left: 5px;\ncolor: #3a86ff;\nfont-size: 10px;\nbackground-color: #8ecae6;\nborder: none;\nborder-radius: 10px;\nbox-shadow: 1px 1px #888888;",e.after(a);document.querySelector("button[data-clear]").addEventListener("click",(function(){localStorage.removeItem("background-color-state"),location.reload()}));
//# sourceMappingURL=01-color-switcher.288fd3dc.js.map