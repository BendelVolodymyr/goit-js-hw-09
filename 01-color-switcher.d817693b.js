!function(){var t=document.querySelector("button[data-start"),e=document.querySelector("button[data-stop]"),o=null,r="background-color-state";t.addEventListener("click",(function(){t.setAttribute("disabled","true"),e.removeAttribute("disabled"),o=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));localStorage.setItem(r,t),document.body.style.cssText="background-color: ".concat(t)}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),e.setAttribute("disabled","true"),t.removeAttribute("disabled")})),function(){var t=localStorage.getItem(r);if(!t)return;document.body.style.cssText="background-color: ".concat(t)}();var n=document.createElement("button");n.textContent="Clear cache",n.setAttribute("type","submit"),n.setAttribute("data-clear",""),n.style.cssText="width: 100px;\nheight: 20px;\nmargin-left: 5px;\ncolor: #3a86ff;\nfont-size: 10px;\nbackground-color: #8ecae6;\nborder: none;\nborder-radius: 10px;\nbox-shadow: 1px 1px #888888;",e.after(n),document.querySelector("button[data-clear]").addEventListener("click",(function(){localStorage.removeItem(r),location.reload()}))}();
//# sourceMappingURL=01-color-switcher.d817693b.js.map