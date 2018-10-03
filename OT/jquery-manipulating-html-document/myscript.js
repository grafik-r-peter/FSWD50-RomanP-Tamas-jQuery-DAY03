$(document).ready(function(){

    $(".notebook .product-image").css("background-color", "red");
    $(".phone .product-image").css("background-color", "green");
    $(".tablet .product-image").css("background-color", "blue");


    $(".cat-phone").on("click", function(){

    	$(".notebook, .tablet").hide(1000);
    	$(".phone").show(1000);
    });


        $(".cat-notebook").on("click", function(){

    	$(".phone, .tablet").hide(1000);
    	$(".notebook").show(1000);    	

    });


        $(".cat-tablets").on("click", function(){

    	$(".notebook, .phone").hide(1000);
    	$(".tablet").show(1000);
    });


        $(".show-back").on("click", function(){

    	$(".tablet, .notebook, .phone").show(1000);
    });


});