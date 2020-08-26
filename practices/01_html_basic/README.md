# 網頁前端工程入門：基礎 HTML 教學 By 彭彭

## 學習參考來源

[網頁前端工程入門：基礎 HTML 教學 By 彭彭](https://www.youtube.com/watch?v=SRbewm2AUew&list=RDCMUCguZS-y7codLSt6vpkVdnKg&start_radio=1&t=1124)

## 學習筆記

### 什麼是HTML

HTML 是一種標記語言（markup language)，其包含了一系列的元素（elements），而元素包含了標籤（tags）與內容（content）。

![HTML元素的組成](/practices/01_html_basic/images/1598419854516.jpg)

標籤包含屬性，分為屬性名稱與值，屬性用於設定這個元素的色彩、對齊方式、圖表的格線等等。

![屬性與屬性名稱、值](/practices/01_html_basic/images/1598420547437.jpg)

### HTML基本架構(巢狀的標籤組成)

```html
<!DOCTYPE html>
    <html>
    <head>                    <!--網頁的描述-->
        <meta charst="utf8"/>
        <!--網頁按utf8編碼進行，使中文可以正確顯示-->
        <title></title>       <!--網頁的標題-->
        <style type:"text/css">
        <!--寫入css選擇器(class)-->
    </head>
    <body>
    </body>
    </html>
```

### HTML常用標籤與說明

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

### HTML常用標籤屬性與屬性名稱說明

屬性|屬性名稱說明
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

## 實作

- 呈現如下

![作品](/01_basic_html/images/1598166291446.jpg)

- [作品原始碼](/01_basic_html/homework/training1.html)
