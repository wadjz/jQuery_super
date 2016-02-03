namespace("com.xiaotian");
com.xiaotian.extend = function(json, obj)
{
    function F(){};
    
    if(typeof json == "object")
    {
        for(var i in json)
        {
            F.prototype[i] = json[i];
        }
    }
    
    if(typeof json == "function")
    {
        F.prototype = json.prototype;
        for(var i in obj)
        {
            F.prototype[i] = obj[i];
        }
    }
    return F;
};

var Person = com.xiaotian.extend({
    aa:'aaa',
    bb:'bbb'
});

var p = new Person();
console.info(p);
console.info(p.aa);

var Person2 = com.xiaotian.extend(Person,{
    cc:'ccc'
});

var p2 = new Person2();
console.info(p2.cc + "===" + p2.aa);