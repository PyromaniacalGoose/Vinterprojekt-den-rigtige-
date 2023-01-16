class Board {

    constructor(coloums, rows){

        this.rows = rows;

        this.coloums = coloums;

        this.boardArray = [];

        }

        setup(){ //decleration of boardArray as 2D array

            for (var i = 0; i <= this.rows; i++){ 

                this.boardArray[i] = new Array(this.coloums);
    
                for (var j = 0; j <= this.coloums; j ++){
    
                    this.boardArray[i][j] = [false, false]; //This declares the player piece as index 0 and the AI piece as index 1

                }   
    
            }

        }

        checkWinState(){ //checks if there's a valid win state for the AI

            for(var i = 0; i <= this.rows; i++){

                for(var j = 0; j <= this.coloums; j++){

                    for(var x = 0; x <= 1; x ++){ //Checks both AI pieces and player pieces

                        if(j >= this.coloums - 3 && 
                            this.boardArray[i][j][x] == true && 
                            this.boardArray[i][j + 1][x] == true && 
                            this.boardArray[i][j + 2][x] == true && 
                            this.boardArray[i][j + 3][x] == true){ //vertically 4 in a row

                            textSize(50);
    
                            text("GAME OVER", 100, 100);
    
                        }
    
                        else if(i > this.rows - 3 &&
                            this.boardArray[i][j][x] == true && 
                            this.boardArray[i + 1][j][x] == true && 
                            this.boardArray[i + 2][j][x] == true && 
                            this.boardArray[i + 3][j][x] == true){ //horizontally 4 in a row

                            textSize(50);
    
                            text("GAME OVER", 200, 200);
    
                        }
    
                        else if(i > this.rows - 3 && j > this.coloums - 3 && 
                            this.boardArray[i][j][x] == true && 
                            this.boardArray[i + 1][j + 1][x] == true && 
                            this.boardArray[i + 2][j + 2][x] == true && 
                            this.boardArray[i + 3][j + 3][x] == true){ //slanted up 4 in a row

                            textSize(50);
    
                            text("GAME OVER", 200, 200);
    
                        }
    
                        else if(j >= 3 && i >= this.rows - 3 && 
                            this.boardArray[i][j][x] == true && 
                            this.boardArray[i + 1][j - 1][x] == true && 
                            this.boardArray[i + 2][j - 2][x] == true && 
                            this.boardArray[i + 3][j - 3][x] == true){ //slanted down 4 in a row

                            textSize(50);
    
                            text("GAME OVER",200, 200);
    
                        }
    
                        else {


    
                        }
    
                    }

                }

            }

        }

        addPiece(rowNumber, piece){ //adds an 'piece' to a coloumn at its bottom

            for (var i = this.coloums; i >= 0; i--){

                if (this.boardArray[rowNumber][i][piece] == false){

                    this.boardArray[rowNumber][i][piece] = true;

                    break;  

                }

                else if(this.boardArray[rowNumber][i][piece] == false){

                    this.boardArray[rowNumber][i][piece] = true;

                    break;

                }

            }

        }

        drawBoard(){

            background(220);

            let temp =   "";

            for(var i = 0; i <= this.coloums; i++){

                temp =   "";

                for(var j = 0; j <= this.rows; j++){

                    if(this.boardArray[j][i][0] == true){

                        temp += " P ";

                    }

                    else if(this.boardArray[j][i][1] == true){

                        temp += " A ";

                    }

                    else {

                        temp += " O ";
    
                    }

                }

                text(temp, 150, 150 + ( 15 * i)); 

            }

        }

    }