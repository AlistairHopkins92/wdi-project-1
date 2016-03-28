$(function(){
  fillLine()
});

var boxes           = [5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var playerColour1   =  "red";
var playerColour2   =  "blue";
var moveCount       =   0;

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

    var boxVertSelval = ($(this).val());

    var newvalueVal = (boxes[boxVertSelval] += 1)

    var boxVertSelid = ($(this.id).selector);

    var newvalueId = (boxes[boxVertSelid] += 1)



    if((newvalueId=== 4)&&(newvalueVal=== 4)){
        console.log("BOX " + boxVertSelid + " HAS BEEN FILLED BY " + playerTurn(moveCount))
        if(playerTurn(moveCount) === "player1"){
            console.log("h"+boxVertSelid);

            boxVertSelid = parseInt(boxVertSelid)
            console.log("This is boxHorSelid: " + boxVertSelid) 

            var boxClicked1 = $('#box'+boxVertSelid)

            boxClicked1.css("backgroundColor", playerColour1);
            console.log("h"+boxVertSelval);

            boxVertSelval = parseInt(boxVertSelval)
            console.log("This is boxHorSelid: " + boxVertSelval) 

            var boxClicked2 = $('#box'+boxVertSelval)

            boxClicked2.css("backgroundColor", playerColour1);

        }
        else{
            console.log("h"+boxVertSelid);

            boxVertSelid = parseInt(boxVertSelid)
            console.log("This is boxHorSelid: " + boxVertSelid) 

            var boxClicked1 = $('#box'+boxVertSelid)

            boxClicked1.css("backgroundColor", playerColour2);

            console.log("h"+boxVertSelval);

            boxVertSelval = parseInt(boxVertSelval)
            console.log("This is boxHorSelid: " + boxVertSelval) 

            var boxClicked2 = $('#box'+boxVertSelval)

            boxClicked2.css("backgroundColor", playerColour2);


        }
    }

    else if(newvalueId === 4){
        // console.log("BOX " + boxVertSelid + " HAS BEEN FILLED BY " + playerTurn(moveCount))
        if(playerTurn(moveCount) === "player1"){
            console.log("h"+boxVertSelid);

            boxVertSelid = parseInt(boxVertSelid)
            console.log("This is boxHorSelid: " + boxVertSelid) 

            var boxClicked = $('#box'+boxVertSelid)

            boxClicked.css("backgroundColor", playerColour1);
        }
        else{
            console.log("h"+boxVertSelid);

            boxVertSelid = parseInt(boxVertSelid)
            console.log("This is boxHorSelid: " + boxVertSelid) 

            var boxClicked = $('#box'+boxVertSelid)

            boxClicked.css("backgroundColor", playerColour2);
        }
    }
    else if(newvalueVal === 4){
        // console.log("BOX " + boxVertSelval + " HAS BEEN FILLED BY " + playerTurn(moveCount))
        if(playerTurn(moveCount) === "player1"){
            console.log("h"+boxVertSelval);

            boxVertSelval = parseInt(boxVertSelval)
            console.log("This is boxHorSelid: " + boxVertSelval) 

            var boxClicked = $('#box'+boxVertSelval)

            boxClicked.css("backgroundColor", playerColour1);

        }
        else{
            console.log("h"+boxVertSelval);

            boxVertSelval = parseInt(boxVertSelval)
            console.log("This is boxHorSelid: " + boxVertSelval) 

            var boxClicked = $('#box'+boxVertSelval)

            boxClicked.css("backgroundColor", playerColour2);
        }
    }
    else{
        moveCount+=1;
        console.log("movecount: " + moveCount + " player turn: " + playerTurn(moveCount));
    }

});
  $('ul .shortrow .widecolumn').one("click", function() {

    $(this).css("background", "black");

    var boxHorSelval = ($(this).val());

    var newvalueVal = (boxes[boxHorSelval] += 1)

    var boxHorSelid = ($(this.id).selector);

    var newvalueId = (boxes[boxHorSelid] += 1)


    if((newvalueId=== 4)&&(newvalueVal=== 4)){
        console.log("BOX " + boxHorSelid + " HAS BEEN FILLED BY " + playerTurn(moveCount))
        if(playerTurn(moveCount) === "player1"){
            console.log("h"+boxHorSelid);

            boxHorSelid = parseInt(boxHorSelid)
            console.log("This is boxHorSelid: " + boxHorSelid) 

            var boxClicked1 = $('#box'+boxHorSelid)

            boxClicked1.css("backgroundColor", playerColour1);
            console.log("h"+boxHorSelval);

            boxHorSelval = parseInt(boxHorSelval)
            console.log("This is boxHorSelid: " + boxHorSelval) 

            var boxClicked2 = $('#box'+boxHorSelval)

            boxClicked2.css("backgroundColor", playerColour1);

        }
        else{
            console.log("h"+boxHorSelid);

            boxHorSelid = parseInt(boxHorSelid)
            console.log("This is boxHorSelid: " + boxHorSelid) 

            var boxClicked1 = $('#box'+boxHorSelid)

            boxClicked1.css("backgroundColor", playerColour2);

            console.log("h"+boxHorSelval);

            boxHorSelval = parseInt(boxHorSelval)
            console.log("This is boxHorSelid: " + boxHorSelval) 

            var boxClicked2 = $('#box'+boxHorSelval)

            boxClicked2.css("backgroundColor", playerColour2);


        }
    }


    else if( newvalueVal === 4){
        // console.log("BOX " + boxHorSelval +" HAS BEEN FILLED BY " + playerTurn(moveCount))
        if(playerTurn(moveCount) === "player1"){
            console.log("h"+boxHorSelval);

            boxHorSelval = parseInt(boxHorSelval)
            console.log("This is boxHorSelid: " + boxHorSelval) 

            var boxClicked = $('#box'+boxHorSelval);

            boxClicked.css("backgroundColor", playerColour1);
        }
        else{
            console.log("h"+boxHorSelval);

            boxHorSelval = parseInt(boxHorSelval)
            console.log("This is boxHorSelid: " + boxHorSelval) 

            var boxClicked = $('#box'+boxHorSelval);

            boxClicked.css("backgroundColor", playerColour2);
        }

    }
    else if( newvalueId === 4){
        // console.log("BOX " + boxHorSelid +" HAS BEEN FILLED BY " + playerTurn(moveCount))
        if(playerTurn(moveCount) === "player1"){
            console.log("H" + boxHorSelid);

            boxHorSelid = parseInt(boxHorSelid)
            console.log("This is boxHorSelid: " + boxHorSelid) 

            var boxClicked = $('#box'+boxHorSelid);

            boxClicked.css("backgroundColor", playerColour1);
        }
        else{
            console.log("h"+boxHorSelid);

            boxHorSelid = parseInt(boxHorSelid)
            console.log("This is boxHorSelid: " + boxHorSelid) 

            var boxClicked = $('#box'+boxHorSelid)

            boxClicked.css("backgroundColor", playerColour2);
        }
    }
    else{
        moveCount+=1;
        console.log("movecount: " + moveCount + " player turn: " + playerTurn(moveCount));
    }
});
}