function Person()
{
    
}
alert(Person.constructor);  // 说明Person函数由Function产生的

function Student()
{
    
}

Person.b = Student;        // 给Person对象添加了一个属性b，值为Student对象