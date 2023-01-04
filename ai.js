
class Ai {
    
    update(){

    }

     getBestMove(){
        let avaliableMoves = getAvailableMoves();
        if(avaliableMoves == 1) { //if there's only 1 move 

        }
        
     }




     getAvailableMoves(getNodeData){
        let avaliableMoves = new array;
       
        let boardData = new array = this.getNodeData(); //gets the board data from the board
        if (boardData[0][0]) { //checks if the player is in an immediate-close-win-state
            avaliableMoves.add(boardData[0][0]); 
        return(avaliableMoves); //returns only that move if AI is about to lose
        } else{

        }


     }


      getNodeData(node){

        let Check = new array; //array to return bool for immediate-close-win-state along with row
        


        return [Check, ];
     }


     evaluateBranch(node, searchhDepth){
        this.getAvailableMoves(node);
        if(AIturn){  //placeholder
            

         }
    }

}


