class Board {

    constructor(rows, columns, isDummyGame) {

        this.columns = columns - 1;

        this.rows = rows - 1;

        if (isDummyGame == undefined) { //checks if the game is a dummy game.

            this.dummyGame = false

        } 
        
        else {

            this.dummyGame = isDummyGame;

        }

        this.boardArray = [];

        this.buttonArray = [];

        this.playerWon = false;

        this.AIWon = false;

        this.hasAIPlayed = Boolean = true; //if the variable is declared true, without first being declared a boolean, it doesn't work... for some reason

    }

    setup() { //decleration of boardArray as multidimensionel array

        for (let i = 0; i <= this.columns; i++) {

            this.boardArray[i] = new Array(this.rows);

            for (let j = 0; j <= this.rows; j++) {

                this.boardArray[i][j] = [false, false]; //This declares the player piece as index 0 and the AI piece as index 1

            }

        }

    }
    
    checkTeam(team){

        if (team == 0) {

            this.playerWon = true;

        }

        else if (team == 1) {

            this.AIWon = true;

        }

    }

    checkWinState(team) { //checks if there's a valid win state for the AI

        for (let i = 0; i <= this.columns; i++) {

            for (let j = 0; j <= this.rows; j++) {

                if (j <= this.rows - 3 &&
                    this.boardArray[i][j][team] == true &&
                    this.boardArray[i][j + 1][team] == true &&
                    this.boardArray[i][j + 2][team] == true &&
                    this.boardArray[i][j + 3][team] == true) { //vertically 4 in a row

                    this.checkTeam(team);

                    this.gameEnd();

                    return true;

                }

                else if (i <= this.columns - 3 &&
                    this.boardArray[i][j][team] == true &&
                    this.boardArray[i + 1][j][team] == true &&
                    this.boardArray[i + 2][j][team] == true &&
                    this.boardArray[i + 3][j][team] == true) { //horizontally 4 in a row

                    this.checkTeam(team);

                    this.gameEnd();

                    return true;

                }

                else if (i <= this.columns - 3 && j <= this.rows - 3 &&
                    this.boardArray[i][j][team] == true &&
                    this.boardArray[i + 1][j + 1][team] == true &&
                    this.boardArray[i + 2][j + 2][team] == true &&
                    this.boardArray[i + 3][j + 3][team] == true) { //slanted up 4 in a row

                    this.checkTeam(team);

                    this.gameEnd();

                    return true;

                }

                else if (i < this.columns - 3 && j >= 3 &&
                    this.boardArray[i][j][team] == true &&
                    this.boardArray[i + 1][j - 1][team] == true &&
                    this.boardArray[i + 2][j - 2][team] == true &&
                    this.boardArray[i + 3][j - 3][team] == true) { //slanted down 4 in a row

                    this.checkTeam(team);

                    this.gameEnd();

                    return true;

                }

                else {
                }

            }

        }

    }

    gameEnd() {

        if (!this.dummyGame) { //if the game is not a dummy game, the game ends

            textSize(50);

            if (this.playerWon == true) {

                let posPlayerX = width / 2 - textWidth('PLAYER WON') / 2

                let posPlayerY = height / 2;

                text("PLAYER WON", posPlayerX, posPlayerY);

            }

            else if (this.AIWon == true) {

                let posAIX = width / 2 - textWidth('AI WON') / 2;

                let posAIY = height / 2;

                text("AI WON", posAIX, posAIY);

            }

            textSize(12);

        }

    }

    addPiece(columnNumber, piece) { //adds an 'piece' to a coloumn at its bottom

        for (var i = this.rows; i >= 0; i--) {

            if (this.boardArray[columnNumber][i][0] == false && //if there's not already a piece at at this position
                this.boardArray[columnNumber][i][1] == false){

                this.boardArray[columnNumber][i][piece] = true; //there's now a piece

                break;

            }

        }

    }

    drawBoard() {

        if (!this.dummyGame) {

            background(169, 205, 204); //draws new backround

            let red = [255, 0, 0]; //rgb values for colors

            let green = [0, 155, 15];

            let black = [0, 0, 0];

            let temp = [];

            for (let i = 0; i <= this.rows; i++) {

                temp = []; //resets array

                for (let j = 0; j <= this.columns; j++) {

                    if (this.boardArray[j][i][0] == true) {

                        temp.push(green); //if player piece is true assign green rgb value

                    }

                    else if (this.boardArray[j][i][1] == true) {

                        temp.push(red); //if ai piece is true assign red rgb value

                    }

                    else {

                        temp.push(black); //else piece is just black

                    }

                    fill(temp[j][0], temp[j][1], temp[j][2]); //apply rgb value for each piece

                    let startPosX = width / 2 - (textWidth(' o ') * this.columns) / 2;

                    let startPosY = height / 2 - (textWidth(' o ') * this.rows) / 2;

                    let posX = startPosX + textWidth(' o ') * j;

                    let posY = startPosY + textWidth(' o ') * i;

                    let rowNumberPosY = startPosY + textWidth(' o ') * (this.rows + 2); 

                    text('o', posX, posY); //draws pieces

                    fill(0, 0, 0); //Sets color to black

                    textSize(9);

                    text(j + 1, posX, rowNumberPosY); //draws row numbers under board

                    textSize(12);

                }   

            }

        }
        
    }

    createInputButtons() {

        for (let i = 0; i <= this.columns; i++) {

            this.buttonArray[i] = createButton((i + 1).toString());

            if(i == 0){

                this.buttonArray[i].position(0, 0); //start position

            }

            else {

                let nextPos = this.buttonArray[i - 1].position().x + this.buttonArray[i - 1].width;

                this.buttonArray[i].position(nextPos, 0); //sets next button at next position

            }

            this.buttonArray[i].mousePressed(() => {
    
                update(i);

            })
        
        }

    }

}