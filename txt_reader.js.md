# txt阅读器（pixiv风格）

阅读界面参考的pixiv的小说界面样式

---

**问题一、阅读本地的txt时不生效**

由于油猴脚本不支持对本地txt文件启用，但是可以换一个方法：书签脚本（Bookmarklet）的一行代码版本。你可以直接复制到浏览器书签栏的“网址”里使用：

```javascript
javascript:(function(){var c=document.createElement("div");c.id="text_containter";var b=document.createElement("div");b.id="text_box";c.appendChild(b);document.body.appendChild(c);var a=document.getElementsByTagName("pre")[0];if(a){b.textContent=a.textContent;a.remove();}var d=document.createElement("style");d.type="text/css";d.textContent="html { background-color: #f5f5f5; } body {margin: 0; padding: 0;} #text_containter {position: relative; left: 50%; margin: 0 0 0 -30%; width: 912px; background-color: #ffffff;} #text_box {color: #1f1f1f; max-width: 620px; margin: auto; font-size: 16px; line-height: 2; background-color: #ffffff; font-family: 'Avenir Next', Avenir, 'Source Sans', 'Noto Sans', Roboto, Verdana, 'Pingfang SC', 'Hiragino Sans GB', 'Lantinghei SC', 'Source Han Sans CN', 'Noto Sans CJK SC', 'Microsoft Yahei', DengXian, YuGothic, 'Hiragino Kaku Gothic Pro', Meiryo, 'Source Han Sans', 'Source Han Sans JP', 'Noto Sans CJK JP', 'Pingfang TC', 'Pingfang HK', 'Hiragino Sans CNS', 'Lantinghei TC', 'Source Han Sans TW', 'Source Han Sans HK', 'Noto Sans CJK TC', 'Microsoft JhengHei', 'Apple SD Gothic Neo', 'Source Han Sans K', 'Source Han Sans KR', 'Noto Sans CJK KR', 'Malgun Gothic', sans-serif; font-feature-settings: normal; overflow-wrap: break-word; white-space: pre-wrap; text-align: justify;}";(document.head||document.documentElement).appendChild(d);})();
```
> 上方代码于本油猴脚本的代码一致，只是形式不一样。

具体操作可以参考如下步骤：

1. 在浏览器里新建书签
2. 书签的名称随便填
3. 书签的网址里填写上方代码
4. 打开你要看的txt
5. 点击刚刚保存的书签，即可让样式生效

注意：此方法作者只在chrome浏览器实测过。

**问题二、其他原因样式不生效**

部分txt可能是以禁用脚本的方式加载的，解决方法如下：

1. 在txt页面按F12
2. 然后复制上方javascript:开头的代码粘贴在控制台
3. 然后回车即可