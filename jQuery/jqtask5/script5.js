$(document).ready(function(){
    $(".popup").hide();
    $(".footer").click(function () {
        $(".popup").show();
    });
    $(".close").click(function () {
        $(".popup").hide();
    });
});