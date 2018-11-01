- jQuery在调用的时候，不用手动new，和我们一般做的构造函数不一样
- 
```javascript
function Student(name, sex) {
    // 构造函数默认返回this
    this.name = name;
    this.sex = sex;
    return this;
}
Student.prototype = {
    constructor:Student,
    study:function(){
        console.log(this.name + "是一个爱学习的好同学")
    }
}
// 使用构造函数必须要使用new
// jquery不用new run less do more
var stu = new Student("nico");
stu.study();
```

原因,都在这句话,
好处：让我们在构建jq的时候少写一个new
达到一个目的：降低程序员学习负担 
比如我们只用写一个$("body")，就会自动new一个jQuery对象

`return new jQuery.fn.init( selector, context ); // 返回的是jquery原型的init方法`
问题:
- 返回对象的原型是谁
- 返回对象是jQuery对象么，因为返回的是init

```
function Student(name,sex){
    return new stu(name,sex);
}
function stu(name,sex){
    this.name = name;
    this.sex = sex;
}
Student.prototype = {
    constructor: Student,
    study:function(){
        console.log(this.name + "是一个爱学习的好同学")
    }
}
var s = Student("nico", "男")
console.log(s)
console.log(s.__proto__)
s.study() // js引擎会在stu中查找study方法，如果找不到 ，在stu的原型对象上去查找，沿着原型链找到Object，找不到，抛出错误
```
- jq怎么解决这个问题呢?
解决init的原型和jq的原型是同一个对象
```
// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;
```