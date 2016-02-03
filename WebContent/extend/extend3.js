namespace("com.xiaotian");
com.xiaotian.extend = function(json)
{
    function F(){};
    
    for(var i in json)
    {
        F.prototype[i] = json[i];
    }
    
    return F;
};

var Person = com.xiaotian.extend({
    aa:'aaa',
    bb:'bbb'
});

var p = new Person();
alert(p.aa);

