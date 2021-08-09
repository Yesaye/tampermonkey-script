// ==UserScript==
// @name         今日热榜简化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Yesaye
// @match        https://tophub.today/
// @icon         https://www.google.com/s2/favicons?domain=tophub.today
// @grant        none
// ==/UserScript==

(function() {
    document.getElementById("appbar").style.display= "none";
    document.getElementById("tabbar").style.display= "none";
    document.getElementsByClassName("cq")[0].style.display= "none";
    document.getElementsByClassName("alert")[0].style.display= "none";
    document.getElementsByClassName("eb-fb")[0].style.display= "none";
    document.getElementsByClassName("c-d")[0].style.padding = "0px";
    var imgs = document.getElementsByClassName("cc-cd-lb");
    for (var i=0; i<imgs.length; i++) {
        imgs[i].getElementsByTagName("img")[0].style.display="none";
    }
})();