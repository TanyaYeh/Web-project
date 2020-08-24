# 基礎Web開發筆記

## 標準基礎架構

標籤|說明
---|---|
`<head>`|網頁的描述
`<title>`|網頁的標題
`<body>`|整份網頁的內容
`<div>`|區塊(會產生斷行效果)
`style`|設定 HTML 文件的樣式
`<span>`|行內標定修改處(不會產生斷行效果)
`<br>`|主動斷行
`<h3>`|3號標題，數字越大層級越高，字體越大
`<img>`|圖片
`<ul>`|列表
`<li>`|列表中的項目
`<a>`|超連結
`<table>`|建立表格
`<tr>`|表格列
`<td>`|表格欄
`<b>`|粗體
`<u>`|底線
`<meta>`|用來提供網頁內容的資訊給瀏覽器或是搜尋引擎


屬性|說明
---|---|
`style`|`width`給邊框設寬度
^|`padding`填色，使邊框與文字產生距離
^|`border`設定邊框的寬度、樣式、顏色
^|`margin`代表兩個區塊之間的距離
`img`|`src`圖片的來源位置
^|`al`圖片名稱
`<a>`|`href`超連結
`table`|`border`使格線(邊)出現
^|`width`表格寬
^|`cellpadding`表格內容與邊界增加多少像素
`<meta>`|`charset`設定網頁編碼
`style`|`font-weight`文字粗細
^|`font-size`文字大小
^|`position:relative`&`position:absolute`設定相對、絕對位置

### 基本架構(巢狀的標籤組成)如下

    <!DOCTYPE html>
    <html>
    <head>                            //網頁的描述
        <meta charst="utf8"/>        //網頁按utf8編碼進行，使中文可以正確顯示
        <title></title>              //網頁的標題
        <style type:"text/css">     //寫入css選擇器(class)
    </head>
    <body>
    </body>
    </html>

[實作01](/01_basic_html/README.md)

[參考資料:網頁前端工程入門：基礎 HTML 教學 By 彭彭](https://www.youtube.com/watch?v=SRbewm2AUew&list=PL-g0fdC5RMbpqZ0bmvJTgVTS4tS3txRVp&index=1)

### 基礎CSS:對版面進行美化與排版

寫入css選擇器(class)

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf8"/>
        <title></title>
        <style type:"text/css">
    </head>

#### 標籤名稱選擇器

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf8"/>
        <title></title>
        <style type="text/css">
        body{  //設定整份網頁的文字的基本大小(統一整份網頁的基本文字大小)與字體
            front-size:16px;font-family:”微軟正黑體”;
        }
        h3{   //控制所有h3標籤字的大小並加上底線
            font-size:24px;text-decoration:underline;
        }
        </style>
    </head>
    <body>
    <h3>自我介紹</h3>
    <div>大家好</div>
    <h3>連結</h3>
    <ul>
        <li><a href="http://...."></a></li>
        <li><a href="http://...."></a></li>
    </ul>
    <h3>作品集<h3>
    <ul>
        <li><a href="http://...."></a></li>
    </ul>
    </body>
    </html>

#### class選擇器

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf8"/>
        <title></title>
        <style type:"text/css">
        .title{
            font-weight:bold;font-size:20px;
        }
        .content{
            width:400px;//設定區塊的寬度為400px
            padding:10px;//內部文字與邊框距離10px的空白
            border:1px solid blue;//區塊邊框變成藍色單實線(虛線用dashed)
            margin-top:10px;margin-bottom:10px;//使區塊上下距離10像素
        }
        .keyword{
           color:red;
        }
        .box{
            position:absolute;top:0px;right:0px;//設定絕對位置使區塊固定於畫面中指定位置
        }
    </head>
    <body>
        <div class="title">今天天氣不錯</div>
        <div class="content">路上有很多<span class="keyword">鴿子</span></div>
        <div class="box"></box>
        <div class="title">公園裡有很多小朋友</div>
        <div class="content">小朋友在玩溜滑梯和盪鞦韆，還有幾隻貓貓狗狗。
        </div>
        <div class="content">還有幾位老公公<span style="position:relative;top:-5px;">2</span>在下棋。</div>
    </body>

***區塊高度一般不會設計高度，因為高度會隨內容變大變小***

***高度、寬度只能設計在區塊(會斷行的)標籤，而無法設計在行內標籤(如`span`)***

[實作04](/04_basic_html/homework/training4.html)

[參考資料:網頁前端工程入門：基礎 CSS 教學 By 彭彭](https://www.youtube.com/watch?v=Jr7lwHnTK68&list=PL-g0fdC5RMbpqZ0bmvJTgVTS4tS3txRVp&index=2)

#### 結合標籤選擇器+class選擇器

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf8"/>
        <title></title>
        <style type="text/css">
        body{  
            front-size:16px;font-family:”微軟正黑體”;
        }
        h3{
            font-size:24px;text-decoration:underline;
        }
        div.content{
            padding:10px;border:1px dashed #888888;
        }
    </head>
    <body>
    <h3>自我介紹</h3>
    <div class="content">大家好</div>
    <h3>連結</h3>
    <ul>
        <li><a href="http://...."></a></li>
        <li><a href="http://...."></a></li>
    </ul>
    <h3>作品集<h3>
    <ul>
        <li><a href="http://...."></a></li>
    </ul>
    </body>
    </html>

### id選擇器

## 基礎網頁排版

設定基礎網頁排版:適應最小寬度1024px

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8"></meta>
        <title>my home page</title>
        <style type="text/css">
        .head{
        background-coloe:#003344;color:white;font-weight:bold;font-size:30px;
        text-align:center;padding:10px; //文字放中間 //文字與邊框有距離
        }
        .content{
        width:1000px;margin-left:auto;margin-right:auto; //將左右區塊設為auto，使這個區塊在父區塊(head)的中間
        }
        .box{
        width:280px;padding:10px;margin:10px;//寬度280+邊線10+距離其他區塊10=box總共佔300px
        background-color:white;
        display:inline-block;vertical-align:top;//因為<div>會造成斷行效果，故須設定顯示模式，讓<div>區塊垂直隊齊上方
        text-align:center;height:150px;line-height:30px; //text-align代表<div>中文字要放中間
        }
        .title{
        font-weight:blod;
        }
        </style>
    </head>
    <body style="margin:0px"> //區塊與螢幕邊緣為0
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

[實作02](/02_basic_html/homework/training2.html)

[參考資料:網頁前端工程入門：網頁排版教學 By 彭彭](https://www.youtube.com/watch?v=YnSmOQF5Lwk&list=RDCMUCguZS-y7codLSt6vpkVdnKg&index=2
)

## CSS3 Flexbox排版

透過使用`flex`設定達到上一節先設定`margin-left/right:auto`，再設定`box:width`&`margin`&`padding`像素，最後再設定`display:inline-block`&`vertical-align:top`。
具體方法為以下

先處理***並排(切欄)*** :容器設定顯示模式`display:flex`；項目設`flex:none`並給寬度

再處理***水平對齊*** :容器設定`justify-content`

最後處理***垂直對齊*** :容器設定`align-items:stretch`

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8"/>
        <title>Lesson 3</title>
        <link href="style.css" rel="stylesheet" type="text/css" media="all"/>
    </head>
    <body >
        <nav>
        <div class="lego">Logo</div>
        <div class="menu">Menu</div>
        <div class="user">User</div>
        </nav>
        <main>       //容器裝三個項目(<div>)
        <div class="item">1<br/>happy</div>
        <div class="item">2</div>
        <div class="item">3</div>
        </main>
    </body>
    </html>

[實作03](/03_basic_html/homework/training3.html)

[參考資料:網頁前端工程入門：CSS3 Flexbox 排版基礎教學 By 彭彭](https://www.youtube.com/watch?v=CB-s9s1-r7Q&list=PL-g0fdC5RMbpqZ0bmvJTgVTS4tS3txRVp&index=7)

## Javascript基礎教學

標籤`<script>`可以放入`<head>`或`<body>`之中

`alert`使用`()`來框住要呼叫的命令，字串要用雙隱號`""`包裹，使用如下

    <head>
        <meta charset="utf-8"/>
        <title>Lesson 9</title>
        <script type="text/javascript"> //寫入屬性type"text/javascript"

            alert("Hello World");      //一個`;`代表一個命令
            alert("大家好") 
        </script>
    </head>

[實作09](/09_basic_html/homework/training9.html)

[參考資料:網頁前端工程入門：Javascript 簡介 By 彭彭](https://www.youtube.com/watch?v=LI4ADR4JKyA&list=PL-g0fdC5RMbpqZ0bmvJTgVTS4tS3txRVp&index=9)

## 變數與運算子

資料:數字、字串`string`(需用雙隱號包裹)、布林值`ture`&`false`、物件。

變數:可將資料存放進來，像一個儲存庫。一個變數只能裝一個資料。

[運算子](C:\Users\三重田馥甄\Desktop\overview\README.md):單元運算、比較運算子

使用者輸入:`prompt`(提示語,預設值)-->程式運算-->輸出`alert`(資料)

[實作10](/10_basic_html/homework/training10.html)

[參考資料:網頁前端工程入門：Javascript 變數與運算子 By 彭彭](https://www.youtube.com/watch?v=pVXPcl2jFvw&list=PL-g0fdC5RMbpqZ0bmvJTgVTS4tS3txRVp&index=10)
