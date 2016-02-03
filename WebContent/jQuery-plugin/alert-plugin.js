(function($){
    $.alert=function(obj){
        alert(obj);
    };
    
    $.fn.alert = function(obj){
        alert(obj);
    };
})(jQuery);


$(function(){
    $.alert("zhangsan");
    
    $("#ss").alert("lisi");
});
