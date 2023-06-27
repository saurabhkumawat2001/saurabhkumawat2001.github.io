$(document).ready(function(){
    $("button").click(function(){
        var inp1 = $('.input1').val();
        if(inp1 == 0){
            alert("Please fill all the fields")
        }
        var inp2 = $('.input2').val();
        if(inp2 == 0){
            alert("Please fill all the fields")
        }
    });
});