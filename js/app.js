$(function(){
  fillLine()
});

var boxes           = [5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var playerColour1   =  "red";
var playerColour2   =  "blue";
var moveCount       =   0;
var player1Score    =   0;
var player2Score    =   0;
var lineTracker     =   0;

function playerTurn(moveCount){
    if(moveCount%2 === 0){
        return("player1")
    }
    else{
        return("player2")
    }
}

function endGame(lineTracker){
    if(lineTracker>85){
        if(player1Score>player2Score){
            alert("Player 1 wins with a score of " + player1Score);
        }
        else if(player2Score>player1Score){
            alert("Player 2 wins with a score of " + player2Score);
        }
        else{
            alert("It's a draw");
        }
    }
}

var sound       = new Audio("sounds/TearingPaper2.mp3");
var fillMeIn    = new Audio("sounds/fillmein3.mp3")

function fillLine(){

  $('ul .tallrow .narrowcolumn').one("click", function() {
    lineTracker+=1;
    $(this).addClass('backgroundAnimated');
    sound.play();

    var boxVertSelval   = ($(this).val());
    var newvalueVal     = (boxes[boxVertSelval] += 1)
    var boxVertSelid    = ($(this.id).selector);
    var newvalueId      = (boxes[boxVertSelid] += 1)
    var totalScore1     = document.querySelector(".totalScore1");
    var totalScore2     = document.querySelector(".totalScore2");
    var whosGo          = document.querySelector(".turn")
    var fillMeIn        = new Audio("sounds/fillmein3.mp3")

    if((newvalueId=== 4)&&(newvalueVal=== 4)){
        
        if(playerTurn(moveCount) === "player1"){

            boxVertSelid = parseInt(boxVertSelid)

            var boxClicked1 = $('#box'+boxVertSelid)

            boxClicked1.css("backgroundColor", playerColour1);

            boxVertSelval = parseInt(boxVertSelval)

            var boxClicked2 = $('#box'+boxVertSelval)

            boxClicked2.css("backgroundColor", playerColour1);
            player1Score+=2
            fillMeIn.play();

            totalScore1.innerHTML = ("Player 1 Score : "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score : "+player2Score);
            whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
            endGame(moveCount);
        }
        else{
            boxVertSelid = parseInt(boxVertSelid)

            var boxClicked1 = $('#box'+boxVertSelid)

            boxClicked1.css("backgroundColor", playerColour2);

            boxVertSelval = parseInt(boxVertSelval)

            var boxClicked2 = $('#box'+boxVertSelval)

            boxClicked2.css("backgroundColor", playerColour2);
            player2Score+=2;
            totalScore1.innerHTML = ("Player 1 Score : "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score : "+player2Score);
            whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
            endGame(moveCount);
        }
    }

    else if(newvalueId === 4){
        if(playerTurn(moveCount) === "player1"){

            boxVertSelid = parseInt(boxVertSelid)

            var boxClicked = $('#box'+boxVertSelid)

            boxClicked.css("backgroundColor", playerColour1);
            player1Score+=1;
            totalScore1.innerHTML = ("Player 1 Score : "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score : "+player2Score);
            whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
            endGame(moveCount);
        }
        else{
            boxVertSelid = parseInt(boxVertSelid)

            var boxClicked = $('#box'+boxVertSelid)

            boxClicked.css("backgroundColor", playerColour2);
            player2Score+=1
            totalScore1.innerHTML = ("Player 1 Score : "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score : "+player2Score);
            whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
            endGame(moveCount);
        }
    }
    else if(newvalueVal === 4){
        if(playerTurn(moveCount) === "player1"){

            boxVertSelval = parseInt(boxVertSelval)

            var boxClicked = $('#box'+boxVertSelval)

            boxClicked.css("backgroundColor", playerColour1);
            player1Score+=1
            totalScore1.innerHTML = ("Player 1 Score : "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score : "+player2Score);
            whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
            endGame(moveCount);
        }
        else{
            boxVertSelval = parseInt(boxVertSelval)

            var boxClicked = $('#box'+boxVertSelval)

            boxClicked.css("backgroundColor", playerColour2);
            player2Score+=1;
            totalScore1.innerHTML = ("Player 1 Score : "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score : "+player2Score);
            whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
            endGame(moveCount);
        }
    }
    else{
        moveCount+=1;
        whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
    }
});
  $('ul .shortrow .widecolumn').one("click", function() {
    lineTracker+=1;
    $(this).addClass('backgroundAnimated');
    sound.play();

    var boxHorSelval    = ($(this).val());
    var newvalueVal     = (boxes[boxHorSelval] += 1)
    var boxHorSelid     = ($(this.id).selector);
    var newvalueId      = (boxes[boxHorSelid] += 1)
    var totalScore1     = document.querySelector(".totalScore1");
    var totalScore2     = document.querySelector(".totalScore2");
    var whosGo          = document.querySelector(".turn")
    var fillMeIn        = new Audio("sounds/fillmein3.mp3")

    if((newvalueId=== 4)&&(newvalueVal=== 4)){
        if(playerTurn(moveCount) === "player1"){

            boxHorSelid     = parseInt(boxHorSelid)
            var boxClicked1 = $('#box'+boxHorSelid)
            
            boxClicked1.css("backgroundColor", playerColour1);

            boxHorSelval    = parseInt(boxHorSelval)
            var boxClicked2 = $('#box'+boxHorSelval)

            boxClicked2.css("backgroundColor", playerColour1);
            fillMeIn.play();
            player1Score+=2

            totalScore1.innerHTML = ("Player 1 Score : "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score : "+player2Score);
            whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
            endGame(moveCount);
        }
        else{
            boxHorSelid     = parseInt(boxHorSelid)
            var boxClicked1 = $('#box'+boxHorSelid)
            boxClicked1.css("backgroundColor", playerColour2);

            boxHorSelval    = parseInt(boxHorSelval)
            var boxClicked2 = $('#box'+boxHorSelval)
            boxClicked2.css("backgroundColor", playerColour2);
            player2Score+=2

            totalScore1.innerHTML = ("Player 1 Score : "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score : "+player2Score);
            whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
            endGame(moveCount);
        }
    }


    else if( newvalueVal === 4){
        if(playerTurn(moveCount) === "player1"){

            boxHorSelval    = parseInt(boxHorSelval)
            var boxClicked  = $('#box'+boxHorSelval);

            boxClicked.css("backgroundColor", playerColour1);
            player1Score+=1

            totalScore1.innerHTML = ("Player 1 Score : "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score : "+player2Score);
            whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
            endGame(moveCount);
        }
        else{
            boxHorSelval     = parseInt(boxHorSelval)
            var boxClicked   = $('#box'+boxHorSelval);

            boxClicked.css("backgroundColor", playerColour2);
            player2Score+=1

            totalScore1.innerHTML = ("Player 1 Score : "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score : "+player2Score);
            whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
            endGame(moveCount);
        }

    }
    else if( newvalueId === 4){
        if(playerTurn(moveCount) === "player1"){

            boxHorSelid     = parseInt(boxHorSelid)
            var boxClicked  = $('#box'+boxHorSelid);

            boxClicked.css("backgroundColor", playerColour1);
            player1Score+=1

            totalScore1.innerHTML = ("Player 1 Score : "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score : "+player2Score);
            whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
            endGame(moveCount);
        }
        else{

            boxHorSelid = parseInt(boxHorSelid)

            var boxClicked = $('#box'+boxHorSelid)

            boxClicked.css("backgroundColor", playerColour2);
            player2Score+=1

            totalScore1.innerHTML = ("Player 1 Score : "+player1Score);
            totalScore2.innerHTML = ("Player 2 Score : "+player2Score);
            whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
            endGame(moveCount);
        }
    }
    else{
        moveCount+=1;
        whosGo.innerHTML      = (playerTurn(moveCount)+" \'s turn");
        totalScore1.innerHTML = ("Player 1 Score : "+player1Score);
        totalScore2.innerHTML = ("Player 2 Score : "+player2Score);
    }
});
}