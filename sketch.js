function setup() {

  createCanvas(400, 400);

  background(169, 205, 204);

  let rows = prompt("Brættets rækker:"); 

  let columns = prompt("Brættets kolonner:");

  let Seachdepth = prompt('Ai søge dybde (høj tal kan give performance problemer)')

  board = new Board(rows, columns); //Initializes input data
  dummyBoard = new Board(rows, columns, true); //creates a dummy board

  ai = new Ai(Seachdepth);

  board.setup();

  board.drawBoard();

  board.createInputButtons();

}

function update(input) {
  
  if(board.hasAIPlayed == true){ //hasAIPlayed starts off as true

    board.addPiece(input, 0);

    board.hasAIPlayed = false;

  }
  board.boardUpdate(); 

  if(board.hasAIPlayed == false){
    ai.simulateTree(); //the big function
    
  }

}