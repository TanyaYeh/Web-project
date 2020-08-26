# 網頁前端工程入門：網頁排版教學 By 彭彭

應付不同的螢幕解析度呈現網頁的正確大小(僅適用桌機、筆電)，並控制文字置中、內容區塊左右並排。

## 學習參考來源

[網頁前端工程入門：網頁排版教學 By 彭彭](https://www.youtube.com/watch?v=YnSmOQF5Lwk&list=RDCMUCguZS-y7codLSt6vpkVdnKg&index=2)

## 學習筆記

### 基礎網頁排版

設定基礎網頁排版:適應最小寬度1024px

```html
<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8"/>
        <title>my home page</title>
        <style type="text/css">
        .head{
        background-coloe:#003344;color:white;font-weight:bold;font-size:30px;
        text-align:center;padding:10px; /*文字放中間;文字與邊框有距離*/
        }
        .content{
        width:1000px;margin-left:auto;margin-right:auto; /*將左右區塊設為auto，使這個區塊在父區塊(head)的中間*/
        }
        .box{
        width:280px;padding:10px;margin:10px;/*寬度280+邊線10+距離其他區塊10=box總共佔300px*/
        background-color:white;
        display:inline-block;vertical-align:top;/*因為<div>會造成斷行效果，故須設定顯示模式，讓<div>區塊垂直隊齊上方*/
        text-align:center;height:150px;line-height:30px; /*text-align代表<div>中文字要放中間*/
        }
        .title{
        font-weight:blod;
        }
        </style>
    </head>
    <body style="margin:0px"> <!--區塊與螢幕邊緣為0*-->
        <div class="head">關於我</div>
        <div class="content"></div>
        <div class="box">
        <div class="title">基本資料</div>
        <div>女性</div>
        <div>台灣</div>
        <div>職業</div>
        </div>
        <div class="box">
        <div class="title">興趣</div>
        </div>
        <div class="box">
        <div class="title">聯繫方式</div>
        </div>
    </body>
    </html>
```

## 實作

- 呈現如下

![作品](/practices/05_html_layout/images/1598188155130.jpg)

- [作品原始碼](/practices/05_html_layout/homework/training5.html)
