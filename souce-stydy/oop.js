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