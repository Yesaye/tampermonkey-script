// ==UserScript==
// @name         今日热榜界面简化
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  仅适用于未登录状态的主界面 自定义背景颜色 卡片颜色 卡片圆角
// @author       Yesaye
// @match        *://tophub.today/
// @icon         https://www.google.com/s2/favicons?domain=tophub.today
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_openInTab
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_notification
// @run-at       document-start
// @updateURL    https://raw.githubusercontent.com/Yesaye/javascript/main/%E4%BB%8A%E6%97%A5%E7%83%AD%E6%A6%9C%E7%95%8C%E9%9D%A2%E4%BC%98%E5%8C%96.js

// ==/UserScript==

(function () {

    // 页面样式
    let style = `#appbar {display: none !important;}#tabbar {display: none !important;}.cq {display: none !important;}.alert {display: none !important;}.eb-fb {display: none !important;}.c-d {padding: 0px !important;}.cc-cd-lb>img {display: none !important;}`;
    addStyle(style, "setTotalStyle");

    style = "";
    var backgroundColor = GM_getValue("today_BackgroundColor_value")
    var cardColor = GM_getValue("today_CardColor_value")
    var cardRadius = GM_getValue("today_CardRadius_value");
    if (backgroundColor != null) {
        style += "body {background-color: " + backgroundColor + " !important;}";
    }
    if (cardColor != null) {
        style += ".cc-cd {background-color: " + cardColor + " !important;}";
    }
    addStyle(style, "setColorStyle");
    style = "";
    if (cardRadius != null) {
        style += ".cc-cd {border-radius:"+cardRadius+"% !important;}";
    }
    addStyle(style, "setRadiusStyle");

    function addStyle(style, clazz) {
        let style_Add = document.createElement('style');
        style_Add.className = clazz;
        if (document.lastChild) {
            document.lastChild.appendChild(style_Add).textContent = style;
        } else { // 避免网站加载速度太慢的备用措施
            let timer1 = setInterval(function () { // 每 10 毫秒检查一下 html 是否已存在
                if (document.lastChild) {
                    clearInterval(timer1); // 取消定时器
                    document.lastChild.appendChild(style_Add).textContent = style;
                }
            });
        }
    }

    function setStyle(style, clazz) {
        // 先删掉原来的
        document.querySelectorAll('.'+clazz).forEach((v) => { v.remove() });
        addStyle(style, clazz);
    }


    // 菜单
    var menu_ALL = [
        ['today_ChangeColor', '主题', '修改页面主题样式', '']
    ], menu_ID = [];
    for (let i = 0; i < menu_ALL.length; i++) { // 如果读取到的值为 null 就写入默认值
        if (GM_getValue(menu_ALL[i][0]) == null) { GM_setValue(menu_ALL[i][0], menu_ALL[i][3]) };
    }
    registerMenuCommand();

    // 注册脚本菜单
    function registerMenuCommand() {
        if (menu_ID.length > menu_ALL.length) { // 如果菜单ID数组多于菜单数组，说明不是首次添加菜单，需要卸载所有脚本菜单
            for (let i = 0; i < menu_ID.length; i++) {
                GM_unregisterMenuCommand(menu_ID[i]);
            }
        }
        for (let i = 0; i < menu_ALL.length; i++) { // 循环注册脚本菜单
            menu_ALL[i][3] = GM_getValue(menu_ALL[i][0]);
            GM_registerMenuCommand(`${menu_ALL[i][1]}`, function () {
                menu_setting('checkbox', menu_ALL[i][1], menu_ALL[i][2], [menu_ALL[i + 1], menu_ALL[i + 2], menu_ALL[i + 3], menu_ALL[i + 4]])
            });
        }
    }

    // 脚本设置
    function menu_setting(type, title, tips, menu) {
        let _html = `<style class="today_SettingStyle">
        .today_SettingRoot {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            width: auto;
            min-width: 400px;
            max-width: 600px;
            height: auto;
            min-height: 150px;
            max-height: 400px;
            color: #535353;
            background-color: #fff;
            border-radius: 3px;
        }

        .today_SettingBackdrop_1 {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 203;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            overflow-x: hidden;
            overflow-y: auto;
            -webkit-transition: opacity .3s ease-out;
            transition: opacity .3s ease-out;
        }

        .today_SettingBackdrop_2 {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 0;
            background-color: rgba(18, 18, 18, 0);
            -webkit-transition: background-color .3s ease-out;
            transition: background-color .3s ease-out;
        }

        .today_SettingRoot .today_SettingHeader {
            padding: 10px 20px;
            color: #fff;
            font-weight: bold;
            background-color: #f0816e;
            border-radius: 3px 3px 0 0;
        }

        .today_SettingRoot .today_SettingMain {
            padding: 10px 20px;
            border-radius: 0 0 3px 3px;
        }

        .today_SettingHeader span {
            float: right;
            cursor: pointer;
        }

        .today_SettingMain input {
            margin: 10px 6px 10px 0;
            cursor: pointer;
            vertical-align: middle
        }

        .today_SettingMain label {
            margin-right: 20px;
            user-select: none;
            cursor: pointer;
            vertical-align: middle
        }

        .today_SettingMain hr {
            border: 0.5px solid #f4f4f4;
        }

        [data-theme="dark"] .today_SettingRoot {
            color: #adbac7;
            background-color: #343A44;
        }

        [data-theme="dark"] .today_SettingHeader {
            color: #d0d0d0;
            background-color: #2D333B;
        }

        [data-theme="dark"] .today_SettingMain hr {
            border: 0.5px solid #2d333b;
        }
    </style>
    <div class="today_SettingBackdrop_1">
        <div class="today_SettingBackdrop_2"></div>
        <div class="today_SettingRoot">
            <div class="today_SettingHeader">${title}
                <span class="today_SettingClose" title="点击关闭">
                    <svg class="Zi Zi--Close Modal-closeIcon" fill="currentColor" viewBox="0 0 24 24" width="24"
                        height="24">
                        <path
                            d="M13.486 12l5.208-5.207a1.048 1.048 0 0 0-.006-1.483 1.046 1.046 0 0 0-1.482-.005L12 10.514 6.793 5.305a1.048 1.048 0 0 0-1.483.005 1.046 1.046 0 0 0-.005 1.483L10.514 12l-5.208 5.207a1.048 1.048 0 0 0 .006 1.483 1.046 1.046 0 0 0 1.482.005L12 13.486l5.207 5.208a1.048 1.048 0 0 0 1.483-.006 1.046 1.046 0 0 0 .005-1.482L13.486 12z"
                            fill-rule="evenodd">
                        </path>
                    </svg>
                </span>
            </div>
            <div class="today_SettingMain">
                <div id="today_BackgroundColor_box">
                    背景色<input id="pickColor_BackgroundColor" type="color" value="${backgroundColor}">
                </div>
                <div id="today_CardColor_box">
                    卡片色<input id="pickColor_CardColor" type="color" value="${cardColor}">
                </div>
                <button id="resetColor">重置颜色</button>
                <hr/>
                <div id="today_CardRadius_box">
                    卡片圆角<input type="range" min="0" max="50" value="${cardRadius}" id="today_CardRadius">
                </div>
                <button id="resetRadius">重置圆角</button>
            </div>
        </div>
    </div>`;

        document.body.insertAdjacentHTML('beforeend', _html); // 插入网页末尾
        setTimeout(function () { // 延迟 100 毫秒，避免太快
            // 关闭按钮 点击事件
            document.querySelector('.today_SettingClose').onclick = function () { this.parentElement.parentElement.parentElement.remove(); document.querySelector('.today_SettingStyle').remove(); }
            // 点击周围空白处 = 点击关闭按钮
            document.querySelector('.today_SettingBackdrop_2').onclick = function (event) { if (event.target == this) { document.querySelector('.today_SettingClose').click(); }; }
            
            // 选取背景色
            document.getElementById("pickColor_BackgroundColor").addEventListener("change", function (e) {
                if (e.target.tagName == "INPUT") {
                    addStyle("body {background-color: " + e.target.value + " !important;}", "setColorStyle");
                    GM_setValue("today_BackgroundColor_value", e.target.value);
                    backgroundColor = e.target.value;
                }
            })
            // 选取卡片色
            document.getElementById("pickColor_CardColor").addEventListener("change", function (e) {
                if (e.target.tagName == "INPUT") {
                    addStyle(".cc-cd {background-color: " + e.target.value + " !important;}", "setColorStyle");
                    GM_setValue("today_CardColor_value", e.target.value);
                    cardColor = e.target.value;
                }
            })
            // 重置背景色和卡片色
            document.getElementById("resetColor").onclick = function () {
                GM_setValue("today_BackgroundColor_value", null);
                GM_setValue("today_CardColor_value", null);
                document.getElementById("pickColor_BackgroundColor").value= "#000000";
                document.getElementById("pickColor_CardColor").value= "#000000";
                document.querySelectorAll('.setColorStyle').forEach((v) => { v.remove() });
            }
            
            // 设置卡片圆角
            document.getElementById("today_CardRadius_box").addEventListener("mousedown", f1, false)
            function f1(){
                document.getElementById("today_CardRadius_box").addEventListener("mousemove", f2, false)
            }
            function f2(e) {
                cardRadius = document.getElementById("today_CardRadius").value;
                GM_setValue("today_CardRadius_value", cardRadius);
                setStyle(".cc-cd {border-radius:"+cardRadius+"% !important;}", "setRadiusStyle");
            }
            document.getElementById("today_CardRadius_box").addEventListener("mouseup", function(e){
                document.getElementById("today_CardRadius_box").removeEventListener("mousemove", f2, false);
            })
            // 重置卡片圆角
            document.getElementById("resetRadius").onclick = function () {
                GM_setValue("today_CardRadius_value", null);
                document.querySelectorAll('.setRadiusStyle').forEach((v) => { v.remove() });
            }
        }, 100)
    }

})();
