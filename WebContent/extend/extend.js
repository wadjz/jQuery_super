function Student(){}

Student.prototype.setName = function(name)
{
    this.name = name;
};

Student.prototype.getName = function()
{
    return this.name;
};

function SuperStudent(){}

/**第1种*/
/*
SuperStudent.prototype = Student.prototype;
var superStudent = new SuperStudent();
superStudent.setName("zhangsan");
alert(superStudent.getName());
*/
/**第2种*/
SuperStudent.prototype = new Student();
var superStudent = new SuperStudent();
superStudent.setName("zhangsan");
alert(superStudent.getName());
