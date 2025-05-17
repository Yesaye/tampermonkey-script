// ==UserScript==
// @name         txt阅读器（pixiv风格）
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  访问txt时，美化阅读样式
// @author       Yesaye
// @match        *://*/*.txt
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    var text_containter = document.createElement("div");
    text_containter.id = "text_containter";

    var text_box = document.createElement("div");
    text_box.id = "text_box";

    text_containter.appendChild(text_box);
    document.body.appendChild(text_containter);

    // 将原始文本放入 text_box
    var pre = document.getElementsByTagName("pre")[0];
    if (pre) {
        text_box.textContent = pre.textContent;
        pre.remove();
    }

    // 注入自定义样式
    var style = document.createElement('style');
    style.type = "text/css";
    style.textContent = `
    html { background-color: #f5f5f5; }
    body {
        margin: 0;
        padding: 0;
    }
    #text_containter {
        position: relative;
        left: 50%;
        margin: 0 0 0 -30%;
        width: 912px;
        background-color: #ffffff;
    }
    #text_box {
        color: #1f1f1f;
        max-width: 620px;
        margin: auto;
        font-size: 16px;
        line-height: 2;
        background-color: #ffffff;
        font-family: "Avenir Next", Avenir, "Source Sans", "Noto Sans", Roboto, Verdana, "Pingfang SC", "Hiragino Sans GB", "Lantinghei SC", "Source Han Sans CN", "Noto Sans CJK SC", "Microsoft Yahei", DengXian, YuGothic, "Hiragino Kaku Gothic Pro", Meiryo, "Source Han Sans", "Source Han Sans JP", "Noto Sans CJK JP", "Pingfang TC", "Pingfang HK", "Hiragino Sans CNS", "Lantinghei TC", "Source Han Sans TW", "Source Han Sans HK", "Noto Sans CJK TC", "Microsoft JhengHei", "Apple SD Gothic Neo", "Source Han Sans K", "Source Han Sans KR", "Noto Sans CJK KR", "Malgun Gothic", sans-serif;
        font-feature-settings: normal;
        overflow-wrap: break-word;
        white-space: pre-wrap;
        text-align: justify;
    }
    `;
    (document.head || document.documentElement).appendChild(style);
})();