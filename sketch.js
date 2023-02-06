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
  
  board.addPiece(input, 0);

  board.addPiece(3, 1);

  board.drawBoard();

  board.checkWinState(0);

  board.checkWinState(1);

}

function draw() {


}