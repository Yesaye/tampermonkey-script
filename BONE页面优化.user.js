// ==UserScript==
// @name         BONE页面优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Yesaye
// @match        http://bone.banksteeltech.com/change/detail?id=*
// @icon         https://www.google.com/s2/favicons?domain=banksteeltech.com
// @grant        none
// ==/UserScript==

(function() {

    var t = setInterval(()=>{
        var p = document.getElementsByClassName("ivu-drawer-right")[0];
        console.log("1");
        if (p) {
            p.style.width= "1450px";
            clearInterval(t);
        }
    },500);

})();