class board {

    constructor(coloums, rows){

        this.rows = rows;

        this.coloums = coloums;

        this.boardArray = [];

        this.tile = {playerPiece: false, AIPiece: false};

        this.playerWin = "You won..... finally";

        this.AIWin = "HAHAHAHAHAHAHAHAHAHAHAHAHA YOU LOST!";

        this.pieceCounter = 0;

        }
     
        boardSetup(){ //decleration of boardArray as 2D array

            for (var i = 0; i <= this.rows; i++){ 

                this.boardArray[i] = new Array(this.coloums);
    
                for (var j = 0; j <= this.coloums; j ++){
    
                    this.boardArray[i][j] = this.tile;
    
                }   
    
            }

        }

        checkPlayerWinstate(){ //checks if there's a valid win state for the player

            for(var i = 0; i < rows - 3; i++){

                for(var j = 0; j < coloums - 3; j++){

                    if(this.boardArray[i][j].PlayerPiece == true && 
                        this.boardArray[i][j + 1].PlayerPiece == true && 
                        this.boardArray[i][j + 2].PlayerPiece == true && 
                        this.boardArray[i][j + 3].PlayerPiece == true){ //vertically 4 in a row

                        console.log(this.playerWin)


                    }

                    else if(this.boardArray[i][j].PlayerPiece == true && 
                        this.boardArray[i + 1][j].PlayerPiece == true && 
                        this.boardArray[i + 2][j].PlayerPiece == true && 
                        this.boardArray[i + 3][j].PlayerPiece == true){ //horizontally 4 in a row

                        console.log(this.playerWin)


                    }

                    else if(this.boardArray[i][j].PlayerPiece == true && 
                        this.boardArray[i + 1][j + 1].PlayerPiece == true && 
                        this.boardArray[i + 2][j + 2].PlayerPiece == true && 
                        this.boardArray[i + 3][j + 3].PlayerPiece == true){ //slanted up 4 in a row

                        console.log(this.playerWin)


                    }

                    else if(j >= 4 && 
                        this.boardArray[i][j].PlayerPiece == true && 
                        this.boardArray[i + 1][j - 1].PlayerPiece == true && 
                        this.boardArray[i + 2][j - 2].PlayerPiece == true && 
                        this.boardArray[i + 3][j - 3].PlayerPiece == true){ //slanted down 4 in a row

                        console.log(this.playerWin)

                    }

                    else {

                        return;

                    }

                }

            }

        }

        checkAIWinstate(){ //checks if there's a valid win state for the AI

            for(var i = 0; i < rows - 3; i++){

                for(var j = 0; j < coloums - 3; j++){

                    if(this.boardArray[i][j].AIPiece == true && 
                        this.boardArray[i][j + 1].AIPiece == true && 
                        this.boardArray[i][j + 2].AIPiece == true && 
                        this.boardArray[i][j + 3].AIPiece == true){ //vertically 4 in a row

                        console.log(this.AIWin)

                    }

                    else if(this.boardArray[i][j].AIPiece == true && 
                        this.boardArray[i + 1][j].AIPiece == true && 
                        this.boardArray[i + 2][j].AIPiece == true && 
                        this.boardArray[i + 3][j].AIPiece == true){ //horizontally 4 in a row

                        console.log(this.AIWin)


                    }

                    else if(this.boardArray[i][j].AIPiece == true && 
                        this.boardArray[i + 1][j + 1].AIPiece == true && 
                        this.boardArray[i + 2][j + 2].AIPiece == true && 
                        this.boardArray[i + 3][j + 3].AIPiece == true){ //slanted up 4 in a row

                        console.log(this.AIWin)

                    }

                    else if(j >= 4 && 
                        this.boardArray[i][j].AIPiece == true && 
                        this.boardArray[i + 1][j - 1].AIPiece == true && 
                        this.boardArray[i + 2][j - 2].AIPiece == true && 
                        this.boardArray[i + 3][j - 3].AIPiece == true){ //slanted down 4 in a row

                        console.log(this.AIWin)

                    }

                    else {

                        return;

                    }

                }

            }

        }

        addPlayerPiece(rowNumber){ //adds a 'piece' to a coloumn at its bottom

            for (var i = this.coloums; i >= 0; i--){

                if (this.boardArray[rowNumber][i].playerPiece == false){

                    this.boardArray[rowNumber][i].playerPiece == true

                }

                else if(this.boardArray[rowNumber][i].AIPiece == false){

                    this.boardArray[rowNumber][i].playerPiece == true

                }

            }

        }

        addAIPiece(rowNumber){ //adds a 'piece' to a coloumn at its bottom

            for (var i = this.coloums; i >= 0; i--){

                if (this.boardArray[rowNumber][i].AIPiece == false){

                    this.boardArray[rowNumber][i].AIPiece == true

                }

                else if(this.boardArray[rowNumber][i].PlayerPiece == false){

                    this.boardArray[rowNumber][i].AIPiece == true

                }

            }

        }

        drawBoard(){

            let temp =   "";

            for(var i = 0; i < this.rows; i++){

                temp =   "";

                for(var j = 0; j < this.coloums; j++){

                    if(this.boardArray[i][j].playerPiece == true){

                        temp += " P ";

                    }

                    if(this.boardArray[i][j].AIPiece == true){

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