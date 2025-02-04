import { Component } from "react";
import Board from "./Board";
import Reset from "./Reset";
import Status from "./Status";

class Game extends Component {

    constructor(props) {
        super(props);

        
        this.state = this.initialState() 
    }

    initialState=()=>{
        return  {
            current: "O",
            cells: [
                null, null, null,
                null, null, null,
                null, null, null
            ],
            status: `Next Move : "O"`,
            winner:null,
            moves:0
        }
    }
    

    checkWinner=(cells)=>{
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
                return cellValue;
        }
     
        return null; //no winner yet.
    }


    handleCellClick = (id) => {
        let cells = this.state.cells;
        let current = this.state.current;
        if(cells[id])
            return ;// cell has a valid value. can't update

        cells[id]= current;

        let moves = this.state.moves+1;

        //time to check if we got a result;
        let winner =this.checkWinner(cells);
        //console.log('winner',winner);
        if(winner){
            
            this.setState({winner})
            this.setState({status:`${winner} wins`});

        } else if(moves===9){
            this.setState({status:`Stalemate!`});
        
        }else{
            current = current==='O'?"X":"O";
            let status = `Next Move: "${current}"`;
            this.setState({status,current});
        }

        this.setState({cells,moves});   
        

    }

    handleReset=()=>{
        let state=this.initialState();
        this.setState(state);
    }

    render = () => {
        return (
            <div className='game'>
                <Status message={this.state.status} />
                <Board cells={this.state.cells} onCellClick={this.handleCellClick} />
                <Reset onReset={this.handleReset} />
            </div>
        )
    }
}

export default Game;