var e=Array.from(document.querySelectorAll(".population")).map(function(e){return Number(e.textContent.replace(/,/g,""))}).reduce(function(e,t){return e+t},0),t=e/10;document.querySelector(".total-population").textContent=e.toLocaleString("en-US"),document.querySelector(".average-population").textContent=t.toLocaleString("en-US");
//# sourceMappingURL=index.0ac3d3f1.js.map
