# txt阅读器（仿pixiv但多风格）

> 脚本代码地址: [https://github.com/Yesaye/tampermonkey-script](https://github.com/Yesaye/tampermonkey-script)

访问txt时，美化阅读样式，有多个主题可供切换

## 部分不生效解决办法

1. 阅读本地的txt时不生效

    由于油猴脚本不支持对本地txt文件启用，但是可以换一个方法：书签脚本（Bookmarklet）的一行代码版本，可以直接复制到浏览器书签栏的“网址”里使用：

    ```javascript
    javascript:(function(){const theme={background:'#f5f5f5',containerBg:'#fff',textColor:'#1f1f1f',btnBg:'#fff',btnColor:'#23272e',btnBorder:'#ccc'};var c=document.createElement("div");c.id="text_containter";var b=document.createElement("div");b.id="text_box";c.appendChild(b);document.body.appendChild(c);var p=document.getElementsByTagName("pre")[0];if(p){b.textContent=p.textContent;p.remove();}var s=document.createElement('style');s.type="text/css";document.head.appendChild(s);s.textContent=`html{background-color:${theme.background};}body{margin:0;padding:0;}#text_containter{margin:30px auto;padding:60px 0;width:912px;background-color:${theme.containerBg};}#text_box{color:${theme.textColor};max-width:620px;margin:auto;font-size:16px;line-height:2;background-color:${theme.containerBg};font-family:"Avenir Next",Avenir,"Source Sans","Noto Sans",Roboto,Verdana,"Pingfang SC","Hiragino Sans GB","Lantinghei SC","Source Han Sans CN","Noto Sans CJK SC","Microsoft Yahei",DengXian,YuGothic,"Hiragino Kaku Gothic Pro",Meiryo,"Source Han Sans","Source Han Sans JP","Noto Sans CJK JP","Pingfang TC","Pingfang HK","Hiragino Sans CNS","Lantinghei TC","Source Han Sans TW","Source Han Sans HK","Noto Sans CJK TC","Microsoft JhengHei","Apple SD Gothic Neo","Source Han Sans K","Source Han Sans KR","Noto Sans CJK KR","Malgun Gothic",sans-serif;font-feature-settings:normal;overflow-wrap:break-word;white-space:pre-wrap;text-align:justify;}`;})();
    ```

    > 上方代码于本油猴脚本的代码一致，只是形式不一样。

    具体操作可以参考如下步骤：

    1. 在浏览器里新建书签
    2. 书签的名称随便填
    3. 书签的网址里填写上方代码
    4. 打开你要看的txt
    5. 点击刚刚保存的书签，即可让样式生效
    6. 若想换别的主题，可以在代码中`themes`变量里找到对应的主题配置，然后替换掉上方书签脚本里的`theme`变量即可（由于浏览器限制，只能这么搞）

    注意：此方法作者只在chrome浏览器实测过。

2. 其他原因样式不生效

    部分txt可能是以禁用脚本的方式加载的，这个由于浏览器的限制，比较难搞，但是也有办法，解决方法如下：

    1. 方法一：将txt文件下载到本地

        1. 将txt文件下载到本地
        2. 在浏览器里打开本地txt文件
        3. 然后就可以用“问题1”的方法来操作

    2. 方法二：在控制台执行脚本

        1. 在txt页面按F12
        2. 然后复制上方javascript:开头的代码粘贴在控制台
        3. 然后回车执行，即可让样式生效
        4. 若想换别的主题，可以在代码中`themes`变量里找到对应的主题配置，然后替换掉上方书签脚本里的`theme`变量即可（由于浏览器限制，只能这么搞）
