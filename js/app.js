$(function(){
  fillLine()
});





function fillLine(){
  $('ul .tallrow .narrowcolumn').one("click", function() {
    $(this).css("background", "black");
    console.log("boxes to be filled");
    console.log($(this).val());
    console.log($(this.id).selector);
    //console.log($(this).parent().attr("value"));
  });
  $('ul .shortrow .widecolumn').one("click", function() {
    $(this).css("background", "black");
    console.log("boxes to be filled");
    console.log($(this).val());
    console.log($(this.id).selector);
    //console.log($(this).parent().attr("value"));
  });



}

var player1;
var plater2;
var whosTurn = [];
var boxes= [0,0,0,0,0,0,0,0,0]
