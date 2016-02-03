function Person(){}

alert(Person.prototype);    // Person对象有一个默认的属性prototype={}

Person.prototype.aa = function()
{
    alert("aa");
};

Person.prototype.bb = function()
{
    alert("bb");
};

var p = new Person();
alert(p.aa());

alert(p.prototype);

alert(Person.aa());     // 报错，TypeError: Person.aa is not a function