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

        this.checkPlayerWinstate = function(){ //checks if there's a valid win state

            for(var i = 0; i < rows - 3; i++){

                for(var j = 0; j < coloums - 3; j++){

                    if(boardArray[i][j].this.tile.playerPiece == true && 
                        boardArray[i][j + 1].this.tile.playerPiece == true && 
                        boardArray[i][j + 2].this.tile.playerPiece == true && 
                        boardArray[i][j + 3].this.tile.playerPiece == true){ //vertically 4 in a row

                        win

                    }

                    else if(boardArray[i][j].this.tile.playerPiece == true && 
                        boardArray[i + 1][j].this.tile.playerPiece == true && 
                        boardArray[i + 2][j].this.tile.playerPiece == true && 
                        boardArray[i + 3][j].this.tile.playerPiece == true){ //horizontally 4 in a row

                        win

                    }

                    else if(boardArray[i][j].this.tile.playerPiece == true && 
                        boardArray[i + 1][j + 1].this.tile.playerPiece == true && 
                        boardArray[i + 2][j + 2].this.tile.playerPiece == true && 
                        boardArray[i + 3][j + 3].this.tile.playerPiece == true){ //slanted up 4 in a row

                        win

                    }

                    else if(j >= 4 && 
                        boardArray[i][j].this.tile.playerPiece == true && 
                        boardArray[i + 1][j - 1].this.tile.playerPiece == true && 
                        boardArray[i + 2][j - 2].this.tile.playerPiece == true && 
                        boardArray[i + 3][j - 3].this.tile.playerPiece == true){ //slanted down 4 in a row

                        win

                    }

                    else {

                        return;

                    }

                }

            }

        }

        this.checkAIWinstate = function(){ //checks if there's a valid win state

            for(var i = 0; i < rows - 3; i++){

                for(var j = 0; j < coloums - 3; j++){

                    if(boardArray[i][j].this.tile.AIPiece == true && 
                        boardArray[i][j + 1].this.tile.AIPiece == true && 
                        boardArray[i][j + 2].this.tile.AIPiece == true && 
                        boardArray[i][j + 3].this.tile.AIPiece == true){ //vertically 4 in a row

                        win

                    }

                    else if(boardArray[i][j].this.tile.AIPiece == true && 
                        boardArray[i + 1][j].this.tile.AIPiece == true && 
                        boardArray[i + 2][j].this.tile.AIPiece == true && 
                        boardArray[i + 3][j].this.tile.AIPiece == true){ //horizontally 4 in a row

                        win

                    }

                    else if(boardArray[i][j].this.tile.AIPiece == true && 
                        boardArray[i + 1][j + 1].this.tile.AIPiece == true && 
                        boardArray[i + 2][j + 2].this.tile.AIPiece == true && 
                        boardArray[i + 3][j + 3].this.tile.AIPiece == true){ //slanted up 4 in a row

                        win

                    }

                    else if(j >= 4 && 
                        boardArray[i][j].this.tile.AIPiece == true && 
                        boardArray[i + 1][j - 1].this.tile.AIPiece == true && 
                        boardArray[i + 2][j - 2].this.tile.AIPiece == true && 
                        boardArray[i + 3][j - 3].this.tile.AIPiece == true){ //slanted down 4 in a row

                        win

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

                if(this.pieceCounter < 4){ //Only checks win state if 4 pieces has been added to the board.

                    this.pieceCounter ++

                }

                else {

                    this.checkWinstate();

                }

            }

        }

        this.drawBoard = function(){

        }

    }

}