// ==UserScript==
// @name         txt阅读器（pixiv风格）
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  访问txt时，美化阅读样式
// @author       Yesaye
// @match        *://*/*.txt
// @grant        none
// @license      MIT
// @icon         data:image/jpeg;base64,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
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
        margin: auto;
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