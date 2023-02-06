function setup() {

  createCanvas(400, 400);

  background(169, 205, 204);

  let rows = prompt("Brættets rækker:"); 

  let columns = prompt("Brættets kolonner:");

  board = new Board(rows, columns); //Initializes input data
   
  i = new Ai(5);

  board.setup();

  board.drawBoard();

  board.createInputButtons();

}

function update(input) {
  
  board.addPiece(input, 0);

  board.addPiece(Math.floor(Math.random() * board.rows),1);

  board.drawBoard();

  board.checkWinState(0);

  board.checkWinState(1);

}

function draw() {


}