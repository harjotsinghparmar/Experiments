
$(".kerning").on("click",function(){
    $(".kerning").toggleClass("btn-outline-primary");
    $('.kerning').toggleClass("btn-primary")
    $(".f-header").hide("fast")
    $(".k-header").show("slow")
    $(".font").toggleClass("btn-outline-primary");
    $('.font').toggleClass("btn-primary")
})

$(".font").on("click",function(){
    $(".font").toggleClass("btn-outline-primary");
    $('.font').toggleClass("btn-primary")
    $(".f-header").show("slow")
    $(".k-header").hide("fast")
    $(".kerning").toggleClass("btn-outline-primary");
    $('.kerning').toggleClass("btn-primary")
})

$(".font-header").change(function () { 
var val = $(this).find(":selected").val() ;
$(".pheader").css("font-family", val);
    
});

$(".font-paragraph").change(function () { 
    var val = $(this).find(":selected").val() ;
    $(".para").css("font-family", val);
        
    });