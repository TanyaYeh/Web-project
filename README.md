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

基本架構(巢狀的標籤組成)如下:

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
    </head>
    <body>
        <div class="title">今天天氣不錯</div>
        <div class="content">路上有很多<span class="keyword">鴿子</span></div>
    </body>

***區塊高度一般不會設計高度，因為高度會隨內容變大變小***

***高度、寬度只能設計在區塊(會斷行的)標籤，而無法設計在行內標籤(如`span`)***

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
