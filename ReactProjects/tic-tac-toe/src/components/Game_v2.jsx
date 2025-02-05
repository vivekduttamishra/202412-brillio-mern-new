import { Component } from "react";
import Board from "./Board";
import Reset from "./Reset";
import Status from "./Status";
import TicTacToe from "../services/TicTacToe";
import MovesTable from "./MovesTable";
import Clock from "./Clock";
import Timer from "./Timer";

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = this.newGame()
    }

    newGame = () => {

        this.game = new TicTacToe();
        let state = {
            ...this.game,
            status: `Current Player: "${this.game.current}"`,
            //moveList: []
        }
        // console.log('state',state);
        return state;
    }


    handleCellClick = (id) => {
        if (!this.game.move(id))
            return;

        // let moveList= this.state.moveList;
        // let player = this.game.current==="O"?"X":"O";
        // moveList.push({
        //     index: this.game.moves,
        //     player,
        //     position:id
        // })
        // this.setState(moveList);

        this.setState({ ...this.game })

        if (!this.game.gameOver)
            this.setState({ status: `Current Player: "${this.game.current}"` });
        else if (this.game.winningPlayer)
            this.setState({ status: `${this.game.winningPlayer} Wins` });
        else
            this.setState({ status: `Stalemate` });
    }


    handleReset = () => {
        
        this.setState(this.newGame());
    }

    handleClockToggle=()=>{
        let hide= this.state.hideClock || false;

        hide=!hide;

        this.setState({hideClock:hide});
        
    }


    render = () => {

        

        return (
            <div className="game row" >
                <div className="col game_left">
                    <div className="row">
                        <Timer hideControls={true} running={this.state.current === "O" && !this.state.gameOver}  className="col" label="O"/>
                        <Timer hideControls={true} running={this.state.current === "X" && !this.state.gameOver}  className="col" label="X"/>

                    </div>
                    <Status message={this.state.status} />
                    <Board cells={this.state.cells}
                        gameOver={this.state.gameOver}
                        winner={this.state.winner}
                        onCellClick={this.handleCellClick} />
                    { 
                        this.state.gameOver && 
                        <Reset  
                        onReset={this.handleReset} />                         
                    }
                </div>
                <div className="col">
                    <MovesTable moveList={this.state.moveList} />
                </div>


            </div>
        )
    }
}

export default Game;