(function($){
    $.myeach=function(array, callback){
        for (var i=0; i < array.length; i++) 
        {
            callback.call($(array[i]), i, $(array[i]));
        };
    };
    
    $.fn.myeach = function(callback){
        var array = $(this);
        for (var i=0; i < array.length; i++) 
        {
            callback.call($(array[i]), i, $(array[i]));
        };
    };
})(jQuery);


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
