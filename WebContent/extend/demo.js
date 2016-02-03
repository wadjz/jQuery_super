/**
 *  写一个函数，该函数的名称是extend,有两个参数：destination,source
 *      1、如果destination和source都是json对象，完成从source到destination的复制
 *      2、如果destination是一个函数，source是一个json对象，则把source中的每一个key,value对赋值给destination的prototype
 *      3、如果destination,source都是函数，则把source的prototype中的内容赋值给destination的prototype 
 */
namespace("com.xiaotian");
com.xiaotian.extend = function(destination, source)
{
    if(typeof destination == "object")
    {
        if(typeof source == "object")
        {
            for (var i in source){
                destination[i] = source[i];
            };
        }
    }
    
    if(typeof destination == "function")
    {
        if(typeof source == "object")
        {
            for (var i in source) 
            {
                destination.prototype[i] = source[i];
            };
        }
        
        if(typeof source == "function")
        {
            destination.prototype = source.prototype;
        }
    }
    return destination;
};

/**1、测试[如果destination和source都是json对象，完成从source到destination的复制]*/
var destination1 = {'aa1' : 'aaa1'};
var source1 = {'bb1' : 'bbb1'};

com.xiaotian.extend(destination1, source1);
console.info("destination1.bb1 : " + destination1.bb1);

/**2、测试[如果destination是一个函数，source是一个json对象，则把source中的每一个key,value对赋值给destination的prototype]*/
var destination2 = function(){};
var source2 = {'bb2' : 'bbb2'};

com.xiaotian.extend(destination2, source2);
var d2 = new destination2();
console.info("d2.bb2 : " + d2.bb2);

/**3、测试[如果destination,source都是函数，则把source的prototype中的内容赋值给destination的prototype ]*/
var destination3 = function(){};
var source3 = function(){};
source3.prototype.setName = function(name){this.name = name;};
source3.prototype.getName = function(){return this.name;};

com.xiaotian.extend(destination3, source3);
var d3 = new destination3();
d3.setName("zhangsan");
console.info("d3.getName() : " + d3.getName());


