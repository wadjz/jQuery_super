/**匿名函数*/
(function(aa){
    console.info(aa);
})("zhangsan");

/*
 * 写4个函数：
 *      共有：setName,getName
 *      私有：aaa,bbb
 */
(function(window){
    function Person()
    {
        return {
            setName:setName,
            getName:getName
        };
    }
    
    function setName(name){
        this.name = name;
    }
    
    function getName(){
        return this.name;
    }
    
    function aaa(){}
    
    function bbb(){}
    
    // 给window对象动态的添加一个属性Person
    window.Person = Person;
})(window);

var Person = window.Person();
Person.setName("aa");
console.info(Person.getName());