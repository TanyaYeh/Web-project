# JavaScript ES5 Object Methods

## 學習參考來源

[w3schools-JavaScript ES5 Object Methods](https://www.w3schools.com/js/js_object_es5.asp)

[你懂 JavaScript 嗎？#18 （簡易版）物件導向概念](https://ithelp.ithome.com.tw/articles/10204974)

## 學習筆記

### 屬性描述器（Property Descriptor）

設定這些屬性特徵的函式稱為**屬性描述器**。

屬性描述器可用來檢視屬性的特徵(屬性的設定)，屬性特徵舉例如下:

值(value)、可否寫入（writable）、可否配置（configurable）、可否列舉（enumerable）、get、set

取得屬性特徵使用:

getOwnPropertyDescriptor(object, 'propertyName')

```javascript
const obj={
    name:'Apple',
}
Object.getOwnPropertyDescriptor(obj,'name'); /*{value: "Apple", writable: true, enumerable: true, configurable: true}*/
```

### 使用defineProperty

定義物件的屬性與特性，使用:

Object.defineProperty(object,property,descriptor)

目的:

1. 新增屬性，通常是為了修改預設特徵的值。

2. 若特性是 configurable:true 的話，則可用來修改屬性的特徵值。

```javascript
const obj={
    name:'Apple',
};
Object.defineProrerty(obj,'name',{
  value: 'Banana',
  writable: true,
  configurable: true,//可配置-->可以修改屬性特徵
  enumerable: true,
});
console.log(obj.name);//Banana
```

### Object.keys vs Object.getOwnPropertyNames

回傳物件的屬性有兩種方式:

1. `Object.keys(object)`:以陣列形式回傳所有可列舉（enumerable:true）的屬性。

2. `Object.getOwnPropertyNames(object)`:以陣列形式回傳所有屬性，不管是否可被列舉。

### Object.getPrototypeOf(object)

### 避免擴充（Prevent Extensions）

目的:為了防止物件被加入新屬性

使用:Object.preventExtensions(object)

```javascript

## 實作

- 呈現如下

![]()

- []()