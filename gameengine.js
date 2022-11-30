class board {
    constructor(coloums, rows){

        this.coloums = coloums;

        this.rows = rows;

        this.boardArray = [];

        this.boardSetup = function(){ //decleration of boardArray as 2D array

            for (var i = 0; i < rows; i++){ 

                boardArray[i] = [].length(coloums);
    
                for (var j = 0; j < coloums; j ++){
    
                    boardArray[i][j] = false;
    
                }
    
            }

        }

    }

}