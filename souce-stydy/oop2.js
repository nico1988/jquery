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