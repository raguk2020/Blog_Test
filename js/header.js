$(".viewcart").click(function(e){
    $(".showme").show();
     e.stopPropagation();
});

$(".showme").click(function(e){
    e.stopPropagation();
});

$(document).click(function(){
    $(".showme").hide();
});
