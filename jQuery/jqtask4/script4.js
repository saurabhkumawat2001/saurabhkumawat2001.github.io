$(document).ready(function () {
    $(".header").click(function () {
        $(".header").css("background-color", "red");
    });
    $(".sidebar").click(function(){
        $(".sidebar").text("Leftbar")
    });
    $(".extra").click(function(){
        $(".content").fadeOut("slow")
    });
});