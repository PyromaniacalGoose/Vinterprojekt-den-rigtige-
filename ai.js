class Ai {
constructor(){

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
      
        for (let i = 0; i <= board.rows; i++) { //obs fix this to coloums when mikkel fixes his shit
         let tempTopRow = board.boardArray[i][board.boardArray[i].length-1] //for easier syntax
         if(tempTopRow[0] == false && tempTopRow[1] == false){ //checks if the top row of each coloum is empty, and therefore viable to play
           
            avaliableMoves.push(i); //if it is viable, the coloum is pushed into the avaliable moveset
         }
        }
        console.log(avaliableMoves);   
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


