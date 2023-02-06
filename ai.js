class Ai {
constructor(branchSearchDepth){
   this.branchSearchDepth = branchSearchDepth;
}
   update(){  

    }

     getBestMove(){
        let avaliableMoves = getAvailableMoves();
        if(avaliableMoves == 1) { //if there's only 1 move 

        }
        
     }




     getAvailableMoves(selectedBoard){
        let avaliableMoves = new Array();
      
        for (let i = 0; i <= selectedBoard.columns; i++) { 
         let tempTopRow = selectedBoard.boardArray[i][selectedBoard.boardArray[i].length-1] //for easier syntax
         if(tempTopRow[0] == false && tempTopRow[1] == false){ //checks if the top row of each coloum is empty, and therefore viable to play
           
            avaliableMoves.push(i); //if it is viable, the coloum is pushed into the avaliable moveset
         }
        }
        return avaliableMoves;   
     }

     simulateTree(){
      dummyBoard = new Board(columns,rows,true) //creates a dummy board

      let branches = this.getAvailableMoves(board);
      for (let i = 0; i < branches.length; o++) {
        this.evaluateBranch(branches[i]); //evaluates each of the available moves
         
      }
     }
   

     evaluateBranch(node){
      let movesets = [];

      dummyBoard.boardArray = board.boardArray //replicates the state of the current board to the dummyBoard
      dummyBoard.addPiece(node,1); //adds the ai piece at the node coloumn
      if(dummyBoard.checkWinState(1)){ //checks if the ai can win in 1 move
         movesets.push([[node],2])
      } else {
         this.recursion();

      }
    }
    
    recursionPlayer(){
      let stepAvailableMoves = this.getAvailableMoves(dummyBoard);
      let boardState = dummyBoard.boardArray; //saves the current state of the board for recall
      let tempMoveset = [];

         for (let i = 0; i <= stepAvailableMoves; i++) {
            dummyBoard.addPiece(stepAvailableMoves[i],0);
            if(dummyBoard.checkWinState(0)){
               tempMoveset[i] = [[node,i],-1];
            } else{
               this.recursionAI(tempMoveset[i]);
            }
            dummyBoard.boardArray = boardState;
         }
    }

    recursionAI(branch){
      let stepAvailableMoves = this.getAvailableMoves(dummyBoard);
      let boardState = dummyBoard.boardArray; //saves the current state of the board for recall
      let tempMoveset = []


         for (let i = 0; i <= stepAvailableMoves; i++) {
            dummyBoard.addPiece(stepAvailableMoves[i],1);
            if(dummyBoard.checkWinState(1)){
               branch[0].push(i); //pushes the path along with value of branch if ai wins
               branch.push(1);
            }

             
            dummyBoard.boardArray = boardState;
         }
      }


}


