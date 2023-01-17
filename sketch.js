function setup() {

  createCanvas(400, 400);

  background(220);

  let rows = prompt("Brættets række:"); 

  let columns = prompt("Brættets kolonner:");

  board = new board(rows, columns); //Initializes input data

  board.setup();

  board.drawBoard();

  inputRække = createInput('række input'); //Creates text box

  inputRække.position(400,200);

  button = createButton("Indsæt");

  button.position(400, 220);

  button.mousePressed(update); //Updates game when button is pressed

}

function update() {

  board.addPiece(parseInt(inputRække.value()), 0);

  board.addPiece(3, 1);

  board.drawBoard();

  board.checkWinState();

}

function draw() {

}
