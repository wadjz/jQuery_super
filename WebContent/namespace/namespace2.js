function namespace(namespaceString)
{
    var temp = [];      // 声明一个空的数组
    var array = namespaceString.split(".");
    for(var i = 0; i < array.length; i++)
    {
        temp.push(array[i]);
        /**把多个json对象添加到window上*/
        eval("window." + temp.join(".") + "={}");
        /**把多个function对象添加到window上*/
        //eval("window." + temp.join(".") + "=function(){}");
    }
}

/*把A.B.C.D.E.F.G动态的添加到了window对象上*/
namespace("A.B.C.D.E.F.G");

A.B.C.D.E.F.G.H = function()
{
    alert('hh');
};

A.B.C.D.E.F.G.H();


