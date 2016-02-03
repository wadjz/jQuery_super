jQuery.extend({
    myeach:function(array, callback){
        for (var i=0; i < array.length; i++) 
        {
            callback.call($(array[i]), i, $(array[i]));
        };
    }
});

jQuery.fn.extend({
    myeach:function(callback){
        var array = $(this);
        for (var i=0; i < array.length; i++) 
        {
            callback.call($(array[i]), i, $(array[i]));
        };
    }
});

$(function(){
    $.myeach($("div"), function(index, value){
        console.info(index);
        console.info(value.text());
        console.info(this);
    });
    console.info("=============================");
    $("div").myeach(function(index, value){
        console.info(index);
        console.info(value.text());
        console.info(this);
    });
    
});
