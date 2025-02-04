export default class TicTacToe{

    constructor(){
        this.cells=[
            null, null, null,
            null, null, null,
            null, null, null,
        ]
        this.current='O';
        this.winner=null; //null or winning cells.
        this.moves=0;
        this.gameOver=false;
        this.winningPlayer=null;
        this.moveList=[];
    }

    

    /**
     * 
     * @param {} position (0-8) where next move will come
     * @returns() boolean ---> move accepted or not 
     */
    move(position){
        //if game is over or current poisition is occupied.
        if( this.gameOver ||this.cells[position] )
            return false;

        //make the move
        this.cells[position]=this.current;
        this.moves++;

        this.moveList.push({
            index:this.moves, 
            player:this.current, 
            position
        });

        this.current = this.current==="O"?"X":"O";
        this.winner = this._checkWinner();
        this.gameOver = this.winner || this.moves===9
        this.winningPlayer = this.winner?this.cells[this.winner[0]]:null;
        return true;
    }

    
    _checkWinner=()=>{
        let winningCombos=[
            //Row Wins
            [0,1,2],
            [3,4,5],
            [6,7,8],
            //Column Wins
            [0,3,6],
            [1,4,7],
            [2,5,8],
            //Diagonal Wins
            [0,4,8],
            [2,4,6]        
        ]

        let cells= this.cells;
        for(let combo of winningCombos){
            //step 1: find the value in the first cell.
            let cellValue = cells[combo[0]];

            //step 2. first cell is null, we know this can't be a combo
            if(!cellValue)
                continue; //this combo has a non-empty cell.
    
            //step3. find out how many same values you have in this combo
            let result = combo.filter( i=> cells[i]===cellValue);
            //console.log('combo', combo, 'result',result)
            
            if(result.length===3)
                return combo;
        }
     
        return null; //no winner yet.
    }
}