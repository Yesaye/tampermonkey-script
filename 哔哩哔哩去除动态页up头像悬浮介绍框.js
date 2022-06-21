// ==UserScript==
// @name         哔哩哔哩去除动态页up头像悬浮介绍框
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  哔哩哔哩去除动态页up头像悬浮介绍框
// @author       Yesaye
// @match        *://t.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var style = document.createElement('style');
    style.innerHTML +=
        '.bili-user-profile {' +
        'opacity: 0 !important;' +
        '}';
    document.getElementsByTagName("body")[0].appendChild(style)

    let p = document.getElementsByClassName("bili-user-profile");

    if(p && p.length>0){
        p[0].remove();
    } else {
        let t = setInterval(()=>{
            p = document.getElementsByClassName("bili-user-profile");
            if(p && p.length>0){
                p[0].remove();
                clearInterval(t);
                console.log("去除头像介绍悬浮框成功");
            }
        },100);
    }

})();