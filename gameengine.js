class Board {

    constructor(rows, columns, isDummyGame){

        this.columns = columns - 1;

        this.rows = rows - 1;

        if(isDummyGame == undefined){ //checks if the game is a dummy game.
            this.dummyGame = false
        } else{
        this.dummyGame = isDummyGame;
        }

        this.boardArray = [];

        this.playerWon = false;

        this.AIWon = false;

        }

        setup(){ //decleration of boardArray as 2D array

            for (let i = 0; i <= this.columns; i++){ 

                this.boardArray[i] = new Array(this.rows);
    
                for (let j = 0; j <= this.rows; j ++){
    
                    this.boardArray[i][j] = [false, false]; //This declares the player piece as index 0 and the AI piece as index 1

                }   
    
            }

        }

        checkWinState(team){ //checks if there's a valid win state for the AI

            if(team == 0){

                this.playerWon = true;

            }

            else if(team == 1){

                this.AIWon = true;

            }

            for(let i = 0; i <= this.columns; i++){

                for(let j = 0; j <= this.rows; j++){

                    if(j <= this.rows - 3 && 
                        this.boardArray[i][j][team] == true && 
                        this.boardArray[i][j + 1][team] == true && 
                        this.boardArray[i][j + 2][team] == true && 
                        this.boardArray[i][j + 3][team] == true){ //vertically 4 in a row

                        this.gameEnd();

                        return true;
    
                    }
    
                    else if(i <= this.columns - 3 &&
                        this.boardArray[i][j][team] == true && 
                        this.boardArray[i + 1][j][team] == true && 
                        this.boardArray[i + 2][j][team] == true && 
                        this.boardArray[i + 3][j][team] == true){ //horizontally 4 in a row

                        this.gameEnd();

                        return true;
    
                    }
    
                    else if(i <= this.columns - 3 && j <= this.rows - 3 && 
                        this.boardArray[i][j][team] == true && 
                        this.boardArray[i + 1][j + 1][team] == true && 
                        this.boardArray[i + 2][j + 2][team] == true && 
                        this.boardArray[i + 3][j + 3][team] == true){ //slanted up 4 in a row

                        this.gameEnd();

                        return true;
    
                    }
    
                    else if(j <= 3 && i < this.columns - 3 && 
                        this.boardArray[i][j][team] == true && 
                        this.boardArray[i + 1][j - 1][team] == true && 
                        this.boardArray[i + 2][j - 2][team] == true && 
                        this.boardArray[i + 3][j - 3][team] == true){ //slanted down 4 in a row

                        this.gameEnd();

                        return true;
    
                    }
    
                    else {

                    }
    
                }

            }

        }

        gameEnd(){
            
            if(!this.dummyGame){ //if the game is not a dummy game, the game ends
            textSize(50);

            if(this.playerWon == true){

                text("PLAYER WON",150, 150);

            }

            else if(this.AIWon == true){

                text("AI WON",150, 150);

            }
    
            }
        }


        addPiece(columnNumber, piece){ //adds an 'piece' to a coloumn at its bottom

            for (var i = this.rows; i >= 0; i--){

                if (this.boardArray[columnNumber][i][0] == false && 
                    this.boardArray[columnNumber][i][1] == false){

                    this.boardArray[columnNumber][i][piece] = true;

                    break;  

                }

            }

        }

        drawBoard(){
            if(!this.dummyGame){
            background(220);

            let rød = [255, 0, 0];

            let grøn = [0, 255, 0];

            let sort = [0, 0, 0];

            let temp = [];

            for(let i = 0; i <= this.rows; i++){

                temp = [];

                for(let j = 0; j <= this.columns; j++){

                    if(this.boardArray[j][i][0] == true){

                        temp.push(grøn);  

                    }

                    else if(this.boardArray[j][i][1] == true){

                        temp.push(rød);

                    }

                    else {

                        temp.push(sort);
    
                    }

                    fill(temp[j][0], temp[j][1], temp[j][2]);

                    text('o', 150 + textWidth(' o ') * j, 150 + textWidth(' o ') * i);

                }

            }

        }}

    }