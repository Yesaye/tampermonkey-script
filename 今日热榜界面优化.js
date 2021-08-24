// ==UserScript==
// @name         今日热榜界面简化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://tophub.today/
// @icon         https://www.google.com/s2/favicons?domain=tophub.today
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {

    let style = `
#appbar {display: none !important;}
#tabbar {display: none !important;}
.cq {display: none !important;}
.alert {display: none !important;}
.eb-fb {display: none !important;}
.c-d {padding: 0px !important;}
.cc-cd-lb>img {display: none !important;}
`;
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

