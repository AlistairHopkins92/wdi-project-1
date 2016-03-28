$(function(){
  fillLine()
});

var boxes           = [5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var playerColour1   =  "red";
var playerColour2   =  "blue";
var moveCount       =   0;
var player1Score    =   0;
var player2Score    =   0;


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



    var boxVertSelval   = ($(this).val());

    var newvalueVal     = (boxes[boxVertSelval] += 1)

    var boxVertSelid    = ($(this.id).selector);

    var newvalueId      = (boxes[boxVertSelid] += 1)
    
    var totalScore1   = document.querySelector(".totalScore1");
    var totalScore2   = document.querySelector(".totalScore2");

    if((newvalueId=== 4)&&(newvalueVal=== 4)){
        console.log("BOX " + boxVertSelid + " HAS BEEN FILLED BY " + playerTurn(moveCount))
        if(playerTurn(moveCount) === "player1"){

            boxVertSelid = parseInt(boxVertSelid)

            var boxClicked1 = $('#box'+boxVertSelid)

            boxClicked1.css("backgroundColor", playerColour1);

            boxVertSelval = parseInt(boxVertSelval)

            var boxClicked2 = $('#box'+boxVertSelval)

            boxClicked2.css("backgroundColor", playerColour1);
            player1Score+=2

            totalScore1.innerHTML = ("Player 1 Score: "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score: "+player2Score);
        }
        else{
            boxVertSelid = parseInt(boxVertSelid)

            var boxClicked1 = $('#box'+boxVertSelid)

            boxClicked1.css("backgroundColor", playerColour2);

            boxVertSelval = parseInt(boxVertSelval)

            var boxClicked2 = $('#box'+boxVertSelval)

            boxClicked2.css("backgroundColor", playerColour2);
            player2Score+=2;

            totalScore1.innerHTML = ("Player 1 Score: "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score: "+player2Score);
        }
    }

    else if(newvalueId === 4){
        if(playerTurn(moveCount) === "player1"){

            boxVertSelid = parseInt(boxVertSelid)

            var boxClicked = $('#box'+boxVertSelid)

            boxClicked.css("backgroundColor", playerColour1);
            player1Score+=1;
            console.log("player1 score: "+player1Score+" player2 score: "+player2Score);
            totalScore1.innerHTML = ("Player 1 Score: "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score: "+player2Score);
        }
        else{
            boxVertSelid = parseInt(boxVertSelid)

            var boxClicked = $('#box'+boxVertSelid)

            boxClicked.css("backgroundColor", playerColour2);
            player2Score+=1

            totalScore1.innerHTML = ("Player 1 Score: "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score: "+player2Score);
        }
    }
    else if(newvalueVal === 4){
        if(playerTurn(moveCount) === "player1"){

            boxVertSelval = parseInt(boxVertSelval)

            var boxClicked = $('#box'+boxVertSelval)

            boxClicked.css("backgroundColor", playerColour1);
            player1Score+=1

            totalScore1.innerHTML = ("Player 1 Score: "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score: "+player2Score);

        }
        else{
            boxVertSelval = parseInt(boxVertSelval)

            var boxClicked = $('#box'+boxVertSelval)

            boxClicked.css("backgroundColor", playerColour2);
            player2Score+=1;

            totalScore1.innerHTML = ("Player 1 Score: "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score: "+player2Score);
        }
    }
    else{
        moveCount+=1;
        console.log("player1 score: "+player1Score+" player2 score: "+player2Score);
    }

});
  $('ul .shortrow .widecolumn').one("click", function() {

    $(this).css("background", "black");

    var boxHorSelval = ($(this).val());

    var newvalueVal = (boxes[boxHorSelval] += 1)

    var boxHorSelid = ($(this.id).selector);

    var newvalueId = (boxes[boxHorSelid] += 1)

    var totalScore1   = document.querySelector(".totalScore1");
    var totalScore2   = document.querySelector(".totalScore2");



    if((newvalueId=== 4)&&(newvalueVal=== 4)){
        console.log("BOX " + boxHorSelid + " HAS BEEN FILLED BY " + playerTurn(moveCount))
        if(playerTurn(moveCount) === "player1"){

            boxHorSelid = parseInt(boxHorSelid)

            var boxClicked1 = $('#box'+boxHorSelid)

            boxClicked1.css("backgroundColor", playerColour1);

            boxHorSelval = parseInt(boxHorSelval)

            var boxClicked2 = $('#box'+boxHorSelval)

            boxClicked2.css("backgroundColor", playerColour1);
            player1Score+=2
            console.log("player1 score: "+player1Score+" player2 score: "+player2Score)

            totalScore1.innerHTML = ("Player 1 Score: "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score: "+player2Score);
        }
        else{
            boxHorSelid = parseInt(boxHorSelid)

            var boxClicked1 = $('#box'+boxHorSelid)

            boxClicked1.css("backgroundColor", playerColour2);

            boxHorSelval = parseInt(boxHorSelval)

            var boxClicked2 = $('#box'+boxHorSelval)

            boxClicked2.css("backgroundColor", playerColour2);
            player2Score+=2
            console.log("player1 score: "+player1Score+" player2 score: "+player2Score)

            totalScore1.innerHTML = ("Player 1 Score: "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score: "+player2Score);

        }
    }


    else if( newvalueVal === 4){
        if(playerTurn(moveCount) === "player1"){

            boxHorSelval = parseInt(boxHorSelval)

            var boxClicked = $('#box'+boxHorSelval);

            boxClicked.css("backgroundColor", playerColour1);
            player1Score+=1
            console.log("player1 score: "+player1Score+" player2 score: "+player2Score)

            totalScore1.innerHTML = ("Player 1 Score: "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score: "+player2Score);
        }
        else{
            boxHorSelval = parseInt(boxHorSelval)

            var boxClicked = $('#box'+boxHorSelval);

            boxClicked.css("backgroundColor", playerColour2);
            player2Score+=1
            console.log("player1 score: "+player1Score+" player2 score: "+player2Score)

            totalScore1.innerHTML = ("Player 1 Score: "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score: "+player2Score);
        }

    }
    else if( newvalueId === 4){
        if(playerTurn(moveCount) === "player1"){

            boxHorSelid = parseInt(boxHorSelid)

            var boxClicked = $('#box'+boxHorSelid);

            boxClicked.css("backgroundColor", playerColour1);
            player1Score+=1
            console.log("player1 score: "+player1Score+" player2 score: "+player2Score)

            totalScore1.innerHTML = ("Player 1 Score: "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score: "+player2Score);
        }
        else{

            boxHorSelid = parseInt(boxHorSelid)

            var boxClicked = $('#box'+boxHorSelid)

            boxClicked.css("backgroundColor", playerColour2);
            player2Score+=1
            console.log("player1 score: "+player1Score+" player2 score: "+player2Score)

            totalScore1.innerHTML = ("Player 1 Score: "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score: "+player2Score);
        }
    }
    else{
        moveCount+=1;
        totalScore1.innerHTML = ("Player 1 Score: "+player1Score);
        totalScore2.innerHTML = ("Player 2 Score: "+player2Score);
    }
});
}