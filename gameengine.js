class board {
    constructor(coloums, rows){

        this.boardArray = new Array(rows);

        this.tile = {playerPiece: false, AIPiece: false};

        this.boardSetup = function(){ //decleration of boardArray as 2D array

            for (var i = 0; i <= rows; i++){ 

                boardArray[i] = new Array(coloums);
    
                for (var j = 0; j <= coloums; j ++){
    
                    boardArray[i][j] = this.tile;
    
                }
    
            }

        }

        var playerWin = "You won.... finally";

        var AIWin = "HAHAHAHAHAHAHAHAHAHAHAHAHA YOU LOST!";


        this.checkPlayerWinstate = function(){ //checks if there's a valid win state for the player

            for(var i = 0; i < rows - 3; i++){

                for(var j = 0; j < coloums - 3; j++){

                    if(boardArray[i][j].this.tile.playerPiece == true && 
                        boardArray[i][j + 1].this.tile.playerPiece == true && 
                        boardArray[i][j + 2].this.tile.playerPiece == true && 
                        boardArray[i][j + 3].this.tile.playerPiece == true){ //vertically 4 in a row

                        console.log(playerWin)


                    }

                    else if(boardArray[i][j].this.tile.playerPiece == true && 
                        boardArray[i + 1][j].this.tile.playerPiece == true && 
                        boardArray[i + 2][j].this.tile.playerPiece == true && 
                        boardArray[i + 3][j].this.tile.playerPiece == true){ //horizontally 4 in a row

                        console.log(playerWin)


                    }

                    else if(boardArray[i][j].this.tile.playerPiece == true && 
                        boardArray[i + 1][j + 1].this.tile.playerPiece == true && 
                        boardArray[i + 2][j + 2].this.tile.playerPiece == true && 
                        boardArray[i + 3][j + 3].this.tile.playerPiece == true){ //slanted up 4 in a row

                        console.log(playerWin)


                    }

                    else if(j >= 4 && 
                        boardArray[i][j].this.tile.playerPiece == true && 
                        boardArray[i + 1][j - 1].this.tile.playerPiece == true && 
                        boardArray[i + 2][j - 2].this.tile.playerPiece == true && 
                        boardArray[i + 3][j - 3].this.tile.playerPiece == true){ //slanted down 4 in a row

                        console.log(playerWin)

                    }

                    else {

                        return;

                    }

                }

            }

        }

        this.checkAIWinstate = function(){ //checks if there's a valid win state for the AI

            for(var i = 0; i < rows - 3; i++){

                for(var j = 0; j < coloums - 3; j++){

                    if(boardArray[i][j].this.tile.AIPiece == true && 
                        boardArray[i][j + 1].this.tile.AIPiece == true && 
                        boardArray[i][j + 2].this.tile.AIPiece == true && 
                        boardArray[i][j + 3].this.tile.AIPiece == true){ //vertically 4 in a row

                        console.log(AIWin)

                    }

                    else if(boardArray[i][j].this.tile.AIPiece == true && 
                        boardArray[i + 1][j].this.tile.AIPiece == true && 
                        boardArray[i + 2][j].this.tile.AIPiece == true && 
                        boardArray[i + 3][j].this.tile.AIPiece == true){ //horizontally 4 in a row

                        console.log(AIWin)


                    }

                    else if(boardArray[i][j].this.tile.AIPiece == true && 
                        boardArray[i + 1][j + 1].this.tile.AIPiece == true && 
                        boardArray[i + 2][j + 2].this.tile.AIPiece == true && 
                        boardArray[i + 3][j + 3].this.tile.AIPiece == true){ //slanted up 4 in a row

                        console.log(AIWin)

                    }

                    else if(j >= 4 && 
                        boardArray[i][j].this.tile.AIPiece == true && 
                        boardArray[i + 1][j - 1].this.tile.AIPiece == true && 
                        boardArray[i + 2][j - 2].this.tile.AIPiece == true && 
                        boardArray[i + 3][j - 3].this.tile.AIPiece == true){ //slanted down 4 in a row

                        console.log(AIWin)

                    }

                    else {

                        return;

                    }

                }

            }

        }


        this.pieceCounter = 0;

        this.rowNumber;

        this.addPlayerPiece = function(rowNumber){ //adds a 'piece' to a coloumn at its bottom

            for (var i = this.coloums; i >= 0; i--){

                if (boardArray[rowNumber][i].this.tile.playerPiece == false){

                    boardArray[rowNumber][i].this.tile.playerPiece == true

                }

                else if(boardArray[rowNumber][i].this.tile.AIPiece == false){

                    boardArray[rowNumber][i].this.tile.playerPiece == true

                }

                if(this.pieceCounter < 4){ //Only checks win state if 4 pieces has been added to the board.

                    this.pieceCounter ++

                }

                else {

                    this.checkWinstate();

                }

            }

        }

        this.addAIPiece = function(rowNumber){ //adds a 'piece' to a coloumn at its bottom

            for (var i = this.coloums; i >= 0; i--){

                if (boardArray[rowNumber][i].this.tile.AIPiece == false){

                    boardArray[rowNumber][i].this.tile.AIPiece == true

                }

                else if(boardArray[rowNumber][i].this.tile.playerPiece == false){

                    boardArray[rowNumber][i].this.tile.AIPiece == true

                }

                if(this.pieceCounter < 4){ //Only checks win state if 4 pieces has been added to the board.

                    this.pieceCounter ++

                }

                else {

                    this.checkWinstate();

                }

            }

        }

        this.drawBoard = function(){

            let temp =   "";

            for(var i = 0; i < rows; i++){

                temp =   "";

                for(var j = 0; j < coloums; j++){

                    if(boardArray[i][j].this.tile.playerPiece == true){

                        temp += " P ";

                    }

                    if(boardArray[i][j].this.tile.AIPiece == true){

                        temp += " A ";

                    }

                    else {

                        temp += " X ";
    
                    }

                }

                console.log(temp);

            }

        }

    }

}