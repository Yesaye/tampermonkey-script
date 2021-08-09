// ==UserScript==
// @name         BONE页面优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Yesaye
// @match        http://bone.banksteeltech.com/*
// @icon         https://www.google.com/s2/favicons?domain=banksteeltech.com
// @grant        none
// ==/UserScript==

(function() {
    var i = 0;
    var t = setInterval(()=>{
        var p = document.getElementsByClassName("ivu-drawer-right")[0];
        console.log(i++);
        if (p) {
            p.style.width= "1450px";
            clearInterval(t);
        }
        if (i>50) {
            clearInterval(t);
        }
    },500);

})();
