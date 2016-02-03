function extend(json)
{
    function F(){};
    
    for(var i in json)
    {
        F.prototype[i] = json[i];
    }
    
    return F;
}

var Person = extend({
    aa:'aaa',
    bb:'bbb'
});

var p = new Person();
alert(p.aa);

