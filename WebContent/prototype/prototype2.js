/**
 * 模拟一个类，创建一个对象，设置属性，并进行输出 
 */
function Student(){}

Student.prototype.setId = function(id)
{
    this.id = id;
};

Student.prototype.setName = function(name)
{
    this.name = name;
};

Student.prototype.getId = function()
{
    return this.id;
};

Student.prototype.getName = function()
{
    return this.name;
};

var s = new Student();
s.setId("1");
s.setName("zhangsan");

alert(s.getId());
alert(s.getName());