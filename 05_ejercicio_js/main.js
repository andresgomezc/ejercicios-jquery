$("document").ready(function(){
    $("h1").show()
    $("#carrete").hide() 
});

$(document).on("click", function(){
    $("#carrete").show()
    $("h1").hide()
});

$("img").on("mouseover", function(){
    $(this).attr("width", 300)
});

$("img").on("mouseout", function(){
    $(this).attr("width", 250)
});