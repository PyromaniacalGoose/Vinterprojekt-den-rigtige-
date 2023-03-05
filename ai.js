class Ai {
  constructor(branchSearchDepth) {
    this.branchSearchDepth = branchSearchDepth;
    this.Isthinking = false;
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
    dummyBoard.boardArray = structuredClone(board.boardArray); //replicates the state of the current board to the dummyBoard
    let Aimoves = this.getAvailableMoves(dummyBoard);
    if (Aimoves.length > 0) {
      //checks if the games a stalemate
      this.branchOut(Aimoves, 1, tree, []);
    }
    //once tree is made it sorts the tree using a min max algorithm
    this.minMaxAlgorithm(tree);  
  }

  branchOut(moveset, team, tree, thisBranch) {
    let value = team == 1 ? 999 : -999; //sets value based on what team is playing
    let saveState = structuredClone(dummyBoard.boardArray); //saves current boardstate.
    let regress = true; //a simple bool for wheter it should regress further

    for (let i = 0; i < moveset.length; i++) {
      dummyBoard.boardArray = structuredClone(saveState); //resets board for new try
      dummyBoard.addPiece(moveset[i], team);

      if (dummyBoard.checkWinState(team)) {
        regress = false;
        if (thisBranch.length > 0) {
          //checks to see if prior branch should be added.
          tree.push(new Branch(concat(thisBranch, i), value));
        } else {
          tree.push(new Branch([i], value));
        }
        if (tree[tree.length - 1].branchPath.length > 1) {
          this.moveUp(tree[tree.length - 1], tree);
        } else {
          this.playPiece(tree[tree.length - 1].branchPath[0]);
        } // if it can win in 1 move, then no more regression is neccesary

        break;
      }
    }
    if (regress) {
      //if it doesn't win on this step it moves another step
      for (let i = 0; i < moveset.length; i++) {
        dummyBoard.boardArray = structuredClone(saveState); //resets board for new try
        dummyBoard.addPiece(moveset[i], team);
        if (thisBranch.length < this.branchSearchDepth) {
          this.branchOut(
            this.getAvailableMoves(dummyBoard),
            1 - team,
            tree,
            concat(thisBranch, i)
          );
        } else {
          tree.push(new Branch(thisBranch, dummyBoard.getBoardValue()));
          this.moveUp(tree[tree.length - 1], tree);
          break;
        }
      }
    }
  }

  moveUp(branch, tree) {
    if (branch.branchPath.length <= 1) {
      //if reached top of tree
      //finish tree
    } else {
      let tempBranch = structuredClone(branch);
      if (tempBranch.branchPath.pop() < board.columns) {
        // removes last element, to move 1 further up in branch
        this.setupBranch(tempBranch.branchPath, tree);
      } else {
        this.moveUp(tempBranch, tree);
      }
    }
  }

  //function for setting the dummyboard to a specific branch
  setupBranch(branchPath, tree) {
    dummyBoard.boardArray = structuredClone(board.boardArray); //resets dummyboard
    let team = 1; //always starts as ai
    for (let i = 0; i < branchPath.length - 1; i++) {
      dummyBoard.addPiece(branchPath[i], team);
      team = 1 - team; //switches teams
    }
    let moveset = this.getAvailableMoves(dummyBoard);
    for (let i = 0; moveset[i] <= branchPath[branchPath.length - 1]; i++) {
      moveset.splice(i);
    }

    this.branchOut(moveset, 1 - team, tree, branchPath); //restarts recurssion on new branch
  }

  playPiece(coloumn) {
    board.addPiece(coloumn, 1);
    board.hasAIPlayed = true;
    board.boardUpdate();
  }

  //min-max algorithm-----------

  minMaxAlgorithm(tree){
    let bestMove;
    while(tree.length > board.columns+1){
  
        tree.push(this.minMaxStep(tree,tree.shift()))
      
      }
      console.log(tree, board.columns+1); 
        bestMove = tree.shift();
      for (let i = 0; i < tree.length; i++) {
        if(bestMove.branchValue < tree[i].branchValue){
          bestMove = tree[i];
          console.log(bestMove.branchValue, tree[i].branchValue)
        }        
      }
      console.log(bestMove);

    this.playPiece(bestMove.branchPath[0]);
  }
  


  minMaxStep(tree, referenceBranch) {
    let recordBranch;
      recordBranch =
        referenceBranch.branchPath.length % 2 == 0
          ? this.min(this.findTrunk(referenceBranch, tree))
          : this.max(this.findTrunk(referenceBranch, tree));
  
   return recordBranch;
  }

   compareArrays = (a, b) =>
  a.length === b.length &&
  a.every((element, index) => element === b[index]);


  findTrunk(referenceBranch, tree) {
    //function for finding branches sharing 2nd 2 l ast joint
    let trunk = [referenceBranch];
    let refTempHold = referenceBranch.branchPath.pop()
    for (let i = tree.length - 1; i >= 0; i--) { //iterates backwards to stop it messing up due to mutating array
      let tempHold = tree[i].branchPath.pop();
      if(this.compareArrays(referenceBranch.branchPath,tree[i].branchPath)) 
         {
          tree[i].branchPath.push(tempHold);
        trunk.push(tree[i]);
        tree.splice(i, 1);
      } else{
      tree[i].branchPath.push(tempHold);
      }
    }
    referenceBranch.branchPath.push(refTempHold);
    // console.log(trunk);
    return trunk;  
  }

  min(trunk) {
      let tempRec = trunk[0];
      if(trunk.length > 1){
      for (let i = 0; i < trunk.length -1; i++) {
        if(tempRec.branchValue > trunk[i].branchValue){
          tempRec = trunk[i];
        }        
      }
    } 
    if(tempRec.branchPath.length > 1){tempRec.branchPath.pop();}
    return tempRec;
    
  }

  max(trunk) {
      let tempRec = trunk[0];
      if(trunk.length > 1){
      for (let i = 0; i < trunk.length -1; i++) {
        if(tempRec.branchValue < trunk[i].branchValue){
          tempRec = trunk[i];
        }        
      }
    } 
    if(tempRec.branchPath.length > 1){tempRec.branchPath.pop();}
    return tempRec;
  }
}
