// ==UserScript==
// @name         BONE页面优化
// @namespace    http://tampermonkey.net/
// @version      1.1.1
// @description  内部系统的页面优化脚本
// @author       Yesaye
// @match        *://bone.banksteeltech.com/*
// @icon         https://www.google.com/s2/favicons?domain=banksteeltech.com
// @grant        none
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/Yesaye/javascript/main/BONE%E9%A1%B5%E9%9D%A2%E4%BC%98%E5%8C%96.js
// ==/UserScript==

(function() {

    let style = `.ivu-drawer-right {width: 80% !important;}`;
    let style_Add = document.createElement('style');

    if (document.lastChild) {
        document.lastChild.appendChild(style_Add).textContent = style;
    } else { // 避免网站加载速度太慢的备用措施
        let timer1 = setInterval(function(){ // 每 10 毫秒检查一下 html 是否已存在
            if (document.lastChild) {
                clearInterval(timer1); // 取消定时器
                document.lastChild.appendChild(style_Add).textContent = style;
            }
        });
    }

})();
