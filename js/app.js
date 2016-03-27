$(function(){
  fillLine()
});


var boxes           = [5,0,0,0,0,0,0,0,0,0];
var playerColour1   =  "red";
var playerColour2   =   "blue";
var moveCount       = 0;

function playerTurn(moveCount){
    if(moveCount%2 === 0){
        return("player1")
        console.log("player1")
    }
    else{
        return("player2")
        console.log("player1")
    }

}

function fillLine(){

  $('ul .tallrow .narrowcolumn').one("click", function() {

    $(this).css("background", "black");
    // console.log("boxes to be filled");


    // console.log($(this).val());
    // console.log($(this.id).selector);
    //console.log($(this).parent().attr("value"));


    var boxVertSelval = ($(this).val());
    // console.log("orignal value " + boxes[boxVertSelval]);

    var newvalueVal = (boxes[boxVertSelval] += 1)
    // console.log("new value of box " + boxVertSelval + '= ' + newvalueVal);

    var boxVertSelid = ($(this.id).selector);
    // console.log("original value "+ boxes[boxVertSelid]);

    var newvalueId = (boxes[boxVertSelid] += 1)
    // console.log("new value of box" + boxVertSelid + '= ' + newvalueId);

    if( newvalueId === 4){
            console.log("BOX " + boxVertSelid + " HAS BEEN FILLED BY " + playerTurn(moveCount))
            if(playerTurn(moveCount) === "player1"){
               document.body.style.backgroundColor = "red"; 
            }
            else{
                document.body.style.backgroundColor = "blue";
            }
        }
        else if( newvalueVal === 4){
            console.log("BOX " + boxVertSelval + " HAS BEEN FILLED BY " + playerTurn(moveCount))
            if(playerTurn(moveCount) === "player1"){
               document.body.style.backgroundColor = "red"; 
            }
            else{
                document.body.style.backgroundColor = "blue";
            }
        }
        else{
            moveCount+=1;
            console.log("movecount: " + moveCount + " player turn: " + playerTurn(moveCount));
        }
        


});
  $('ul .shortrow .widecolumn').one("click", function() {

    $(this).css("background", "black");


    // console.log("boxes to be filled");
    // console.log($(this).val());
    // console.log($(this.id).selector);
    //console.log($(this).parent().attr("value"));


    var boxHorSelval = ($(this).val());
    // console.log("orignal value of box" + boxHorSelval + '=' + boxes[boxHorSelval]);

    var newvalueVal = (boxes[boxHorSelval] += 1)
    // console.log("new value of box " + boxHorSelval + '= ' + newvalueVal);

    var boxHorSelid = ($(this.id).selector);
    // console.log("orignal value of box" +  boxHorSelid + '= ' + boxes[boxHorSelid]);

    var newvalueId = (boxes[boxHorSelid] += 1)
    // console.log("new value of box" + boxHorSelid + '= ' + newvalueId);

    if( newvalueVal === 4){
        console.log("BOX " + boxHorSelval +" HAS BEEN FILLED BY " + playerTurn(moveCount))
        if(playerTurn(moveCount) === "player1"){
            document.body.style.backgroundColor = "red";
        }
        else{
            document.body.style.backgroundColor = "blue";
        }

    }
    else if( newvalueId === 4){
        console.log("BOX " + boxHorSelid +" HAS BEEN FILLED BY " + playerTurn(moveCount))
        if(playerTurn(moveCount) === "player1"){
           document.body.style.backgroundColor = "red"; 
        }
        else{
            document.body.style.backgroundColor = "blue";
        }
    }
    else{
        moveCount+=1;
        console.log("movecount: " + moveCount + " player turn: " + playerTurn(moveCount));
    }
});




}


