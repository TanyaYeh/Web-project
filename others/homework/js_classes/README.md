# JavaScript Classes

## 學習參考來源

[w3schools-JavaScript Classes](https://www.w3schools.com/js/js_object_classes.asp)

[你懂 JavaScript 嗎？#17 物件（Object）](https://ithelp.ithome.com.tw/articles/10204736)

## 學習筆記

### ES6(2015)新增的函式形式`Class`

class 類名稱{
    constructor(參數){
        this.屬性=屬性值;
    };
}

```javascript
class Car{
    constructor(brand){  //classs的屬性
        this.carname=brand;
    };
    present(){  //class的方法
        return "I have a"+this.carname;
    }
};
mycar =new Car("Ford");
console.log(mycar.carname);//Ford
console.log(mycar.present());//I hava a Ford
```

***class必須先透過宣告才可使用(function因其會被hoisted，故可不需經過宣告再使用)***

### 使用類的方法(Methods)

通過`present()`呼叫方法並放入參數:

```javascript
class Car{
    constructor(brand){
        this.carname=brand;
    };
    present(x){
        return x+"I have a "+this.carname+".";
    };
};
mycar=new Car("Ford");
console.log(mycar.present("Hello,");)
```

### 類的靜態方法(Static Methods)

目的:可直接使用類+方法名稱來呼叫方法，而不用從物件呼叫方法。

使用:Static Methods，並透過將物件設至參數，使其可以代入建構子的值。

```javascript
class Car{
    constructor(brand){
        this.carname=brand;
    };
    static hello(x){
        return x;
    };
};
mycar=new Car("Ford");
console.log(Car.hello("Hi,"))//使用類來呼叫靜態方法
```

```javascript
class Car{
    constructor(brand){
        this.carname=brand;
    };
    static hello(x){
        return "I have a "+x.carname;
    };
};
mycar=new Car("Ford");
console.log(Car.hello(mycar))//將物件設至成參數，代入建構子的參數Ford
```

### 類的繼承

- 目的:創建新類時，可繼承所有父類的屬性和方法

- 使用:

1.`class 新class名稱 extends 舊class名稱{}` <!--extends為一keyword-->

2.`super()`引用父類方法，並靜態綁定父類函式

3.`show()`來新增子類的方法

```javascript
class Car{
    constructor(brand){
        this.carname=brand;
    };
    present(){
        return "I have a "+this.carname;
    };
};

class Model extends Car{
    constructor(brand,mod){
    super(brand);//讓super()去visit父類屬性&方法並綁定函式present()
    this.model=mod;//設第二個類Model的屬性model
    };
    show(){ //設第二個類Model的方法
        return this.present()+",it is a "+this.model;
    };
}
mycar = new Model("Ford","Mustang");
console.log(mycar.show());//呼叫父類的方法；I have a Ford, it is a Mustang
```

***`super()`只能在「物件方法」中使用，而不能使用於屬性的函式。**

### 在類中使用[取值器與設值器](../js_object_ECMAScript_5/README.md)***

```javascript
class Car{
    constructor(brand){
        this._carname_=brand;//方法名稱多以屬性名稱+_表示
    };
    get carname(){ //屬性name的函式
        return this._carname_;//getter的方法名稱不可與其屬性名稱相同
    };
    set carname(x){ //屬性name函式代入參數
        this._carname_=x;//setter的方法名稱不可與其屬性名稱相同
    }
}
mycar=new Car("Ford");
console.log(mycar.carname);//getter、setter在取得屬性值的時候不需要使用()來呼叫它
```

## 實作

- 呈現如下

![]()

![]()

- []()