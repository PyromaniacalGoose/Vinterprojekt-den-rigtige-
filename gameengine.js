class board {
    constructor(coloums, rows){

        this.coloums = coloums;

        this.rows = rows;

        this.boardArray = [];

        this.boardSetup = function(){ //decleration of boardArray as 2D array

            for (var i = 0; i <= this.rows; i++){ 

                boardArray[i] = [].length = this.coloums;
    
                for (var j = 0; j <= this.coloums; j ++){
    
                    boardArray[i][j] = false;
    
                }
    
            }

        }

        this.checkWinstate = function(){ //checks if there's a valid win state

            for(var i = 0; i < rows - 3; i++){

                for(var j = 0; j < coloums - 3; j++){

                    if(boardArray[i][j] && boardArray[i][j + 1] && boardArray[i][j + 2] && boardArray[i][j + 3]){ //vertically 4 in a row

                        win

                    }

                    else if(boardArray[i][j] && boardArray[i + 1][j] && boardArray[i + 2][j] && boardArray[i + 3][j]){ //horizontally 4 in a row

                        win

                    }

                    else if(boardArray[i][j] && boardArray[i + 1][j + 1] && boardArray[i + 2][j + 2] && boardArray[i + 3][j + 3]){ //slanted up 4 in a row

                        win

                    }

                    else if(j >= 4 && boardArray[i][j] && boardArray[i + 1][j - 1] && boardArray[i + 2][j - 2] && boardArray[i + 3][j - 3]){ //slanted down 4 in a row

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

        this.addPiece = function(rowNumber){ //adds a 'piece' to a coloumn at its bottom

            for (var i = this.coloums; i >= 0; i--){

                if (boardArray[rowNumber][i] == false){

                    boardArray[rowNumber][i] == true

                }

                if(this.pieceCounter < 4){ //Only checks win state if 4 pieces has been added to the board.

                    this.pieceCounter ++

                }

                else {

                    this.checkWinstate();

                }

            }

        }

    }

}