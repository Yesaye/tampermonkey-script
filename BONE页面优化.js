// ==UserScript==
// @name         BONE页面优化
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Yesaye
// @author       Yesaye
// @match        *://bone.banksteeltech.com/*
// @icon         https://www.google.com/s2/favicons?domain=banksteeltech.com
// @grant        none
// @run-at       document-start
// @updateURL    
// ==/UserScript==

(function() {

    let style = `.ivu-drawer-right {width: 1450px !important;}`;
    let style_Add = document.createElement('style');

    if (document.lastChild) {
        document.lastChild.appendChild(style_Add).textContent = style;
        console.log("上面成功")
    } else { // 避免网站加载速度太慢的备用措施
        let timer1 = setInterval(function(){ // 每 10 毫秒检查一下 html 是否已存在
            console.log("下面");
            if (document.lastChild) {
                console.log("下面成功");
                clearInterval(timer1); // 取消定时器
                document.lastChild.appendChild(style_Add).textContent = style;
            }
        });
    }

})();
