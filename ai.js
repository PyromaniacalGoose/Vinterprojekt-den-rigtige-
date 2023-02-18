class Ai {
  constructor(branchSearchDepth) {
    this.branchSearchDepth = branchSearchDepth;
  }

  getAvailableMoves(selectedBoard) {
    let avaliableMoves = new Array();

    for (let i = 0; i <= selectedBoard.columns; i++) {
      let tempTopRow = selectedBoard.boardArray[i][0]; //for easier syntax
      if (tempTopRow[0] == false && tempTopRow[1] == false) {
        //checks if the top row of each coloum is empty, and therefore viable to play

        avaliableMoves.push(i); //if it is viable, the coloum is pushed into the avaliable moveset
      }
    }
    return avaliableMoves;
  }





  simulateTree() { 
    let tree = [];
    dummyBoard.setup();
    dummyBoard.boardArray = structuredClone(board.boardArray) //replicates the state of the current board to the dummyBoard
    let Aimoves = this.getAvailableMoves(dummyBoard);
    if(Aimoves.length > 0) { //checks if the games a stalemate
      this.branchOut(Aimoves, 1, tree)
    }

  }

  branchOut(moveset, team, tree, thisBranch){
    console.log('check2');
    let value = team == 1 ? 1 : -1; //sets value based on what team is playing
    let saveState = structuredClone(dummyBoard.boardArray); //saves current boardstate.

    for (let i = 0; i < moveset.length; i++) {
      dummyBoard.boardArray = structuredClone(saveState); //resets board for new try
      dummyBoard.addPiece(moveset[i], team);

      if(dummyBoard.checkWinState(team)){
        console.log('check3'); //temp

        if(!thisBranch == undefined) { //checks to see if prior branch should be added.
        tree.push(new Branch([thisBranch, i], value))} 
        else{ 
          tree.push(new Branch([i], value))
        }
        console.log(tree);
        this.moveUp(tree[tree.length - 1])
        break;
      }
    }
  }

    
  
  moveUp(branch){
    if(branch.branchPath.length == 1) { //if reached top of tree
      //finish tree
      this.playPiece()
    } else {
      let tempBranch = structuredClone(branch.branchPath);
      tempBranch.pop();
      this.setupBranch(tempBranch);
    }
  }

  setupBranch(branchPath){ //function for setting the dummyboard to a specific branch
    dummyBoard.boardArray = structuredClone(board.boardArray) //resets dummyboard
    let team = 1; //always starts as ai
    for (let i = 0; i < branchPath.length; i++) {
      dummyBoard.addPiece(branchPath[i],team);
      team = 1-team; //switches teams
    }
  }

  playPiece(coloumn){
    board.addPiece(coloumn, 1);
    
  }

 /*
  evaluateBranches(node) {
    let movesets = [];

    dummyBoard.boardArray = board.boardArray; //replicates the state of the current board to the dummyBoard
    dummyBoard.addPiece(node, 1); //adds the ai piece at the node coloumn
    if (dummyBoard.checkWinState(1)) {
      //checks if the ai can win in 1 move
      movesets.push([[node], 0, 2]);
    } else {
      this.recursionPlayer();
    }
  }

  recursionPlayer() {
    let stepAvailableMoves = this.getAvailableMoves(dummyBoard);
    let boardState = dummyBoard.boardArray; //saves the current state of the board for recall
    let tempMoveset = [];

    for (let i = 0; i <= stepAvailableMoves; i++) {
      dummyBoard.addPiece(stepAvailableMoves[i], 0);
      if (dummyBoard.checkWinState(0)) {
        tempMoveset[i] = [[node, i], -1]; 
      } else {
        this.recursionAI(tempMoveset[i]);
      }
      dummyBoard.boardArray = boardState;
    }
  }

  recursionAI(branch) {
    let stepAvailableMoves = this.getAvailableMoves(dummyBoard);
    let boardState = dummyBoard.boardArray; //saves the current state of the board for recall
    let tempMoveset = [];

    for (let i = 0; i <= stepAvailableMoves; i++) {
      dummyBoard.addPiece(stepAvailableMoves[i], 1);
      if (dummyBoard.checkWinState(1)) {
        branch[0].push(i); //pushes the path along with value of branch if ai wins
        branch.push(1);
      }

      dummyBoard.boardArray = boardState;
    } 
  }
  */
}
