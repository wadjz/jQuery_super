function Person(){console.info(this);}

Person();               // this就是window

function Student(){}
Student.a = Person;
Student.a();            // this就是Student

var json = {
  a: Person
};
json.a();               // this就是json

// 可以利用call或apply函数改变this的指向
Person.call(json);      // this就是json，相当于json.Person();
Person.apply(Student);  // this就是Student，相当于Student.Person();

function User(name)
{
    console.info(this);
}
User("lisi");
User.call(json,'wangwu');

