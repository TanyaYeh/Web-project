# 網頁前端工程入門：基礎 CSS 教學 By 彭彭

## 學習參考來源

[網頁前端工程入門：基礎 CSS 教學 By 彭彭](https://www.youtube.com/watch?v=Jr7lwHnTK68&list=PL-g0fdC5RMbpqZ0bmvJTgVTS4tS3txRVp&index=2)

[內文引用自:維基百科](https://zh.wikipedia.org/wiki/%E7%A9%B4%E7%8D%85)

## 學習筆記

### CSS是什麼

串接樣式表 (Cascading Stylesheets；CSS)是一種風格頁面語言（style sheet language）：它能讓你在 HTML 文件中的元素（element）上套用不同的頁面樣式（style）。

### 寫入css選擇器(class)

```html
<!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf8"/>
        <title></title>
        <style type:"text/css">
    </head>
```

### 使用class選擇器

```html
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
            width:400px; /*設定區塊的寬度為400px*/
            padding:10px;/*內部文字與邊框距離10px的空白*/
            border:1px solid blue;/*區塊邊框變成藍色單實線(虛線用dashed)*/
            margin-top:10px;margin-bottom:10px;/*使區塊上下距離10像素*/
        }
        .keyword{
           color:red;
        }
        .box{
            position:absolute;top:0px;right:0px;/*設定絕對位置使區塊固定於畫面中指定位置*/
        }
    </head>
    <body>
        <div class="title">今天天氣不錯</div>
        <div class="content">路上有很多<span class="keyword">鴿子</span></div>
        <div class="box"></box>
        <div class="title">公園裡有很多小朋友</div>
        <div class="content">小朋友在玩溜滑梯和盪鞦韆，還有幾隻貓貓狗狗。
        </div>
        <div class="content">還有幾位老公公<span style="position:relative;top:-5px;">2</span>在下棋。</div> <!--設定相對位置使區塊垂直上移-->
    </body>
```

***區塊高度一般不會設計高度，因為高度會隨內容變大變小***

***高度、寬度只能設計在區塊(會斷行的)標籤，而無法設計在行內標籤(如`span`)***

### 區塊絕對位置與相對位置差異

區塊|畫面|是否遮蓋其他內容|使用時機
---|---|---|---
絕對位置|不論插在哪一個區塊中，該區塊均不會留下空位，會呈現在設定的位置。|是|廣告、重要活動宣傳
相對位置|插入的區塊位置會受插入的位置影響，會佔據插入處的位置。|否|縮小的註解、平方、元素等使用

![絕對位置](/practices/02_css_basic/images/1598423740683.jpg)

![相對位置](/practices/02_css_basic/images/1598423505010.jpg)

## 實作

- 呈現如下

![作品](/practices/02_css_basic/images/1598238447971.jpg)

- [作品原始碼](/practices/02_css_basic/homework/training4.html)
