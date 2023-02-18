function setup() {

  createCanvas(400, 400);

  background(169, 205, 204);

  let rows = prompt("Brættets rækker:"); 

  let columns = prompt("Brættets kolonner:");

  board = new Board(rows, columns); //Initializes input data
  dummyBoard = new Board(rows, columns, true); //creates a dummy board

  ai = new Ai(5);

  board.setup();

  board.drawBoard();

  board.createInputButtons();

}

function update(input) {
  
  if(board.hasAIPlayed == true){ //hasAIPlayed starts off as true

    board.addPiece(input, 0);

    board.hasAIPlayed = false;

  }

  if(board.hasAIPlayed == false){

    board.addPiece(Math.floor(Math.random() * board.rows),1);

    board.hasAIPlayed = true;

  }

  board.drawBoard();

  board.checkWinState(0); //check winstate for player

  board.checkWinState(1); //check winstate for AI

}