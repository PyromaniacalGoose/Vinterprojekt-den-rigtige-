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




     getAvailableMoves(){
        let avaliableMoves = new Array();
      
        for (let i = 0; i <= board.rows; i++) { //obs fix this to coloumns when mikkel fixes his shit
         let tempTopRow = board.boardArray[i][board.boardArray[i].length-1] //for easier syntax
         if(tempTopRow[0] == false && tempTopRow[1] == false){ //checks if the top row of each coloum is empty, and therefore viable to play
           
            avaliableMoves.push(i); //if it is viable, the coloum is pushed into the avaliable moveset
         }
        }
        return avaliableMoves;   
     }

     simulateTree(){
      dummyBoard = new Board(columns,rows,true) //creates a dummy board

      let branches = this.getAvailableMoves();
      for (let i = 0; i < branches.length; o++) {
        this.evaluateBranch(branches[i],this.branchSearchDepth); //evaluates each of the available moves
         
      }
     }
   

     evaluateBranch(node, searchhDepth){
      dummyBoard.boardArray = board.boardArray //replicates the state of the current board to the dummyBoard
      
      
    }

}


