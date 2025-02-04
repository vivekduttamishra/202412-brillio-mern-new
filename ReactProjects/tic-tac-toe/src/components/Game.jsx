import { Component } from "react";
import Board from "./Board";
import Reset from "./Reset";
import Status from "./Status";
import TicTacToe from "../services/TicTacToe";
import MovesTable from "./MovesTable";

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = this.newGame()
    }

    newGame = () => {

        this.game = new TicTacToe();
        let state = {
            ...this.game,
            status: `Current Player: "${this.game.current}"`
        }
        // console.log('state',state);
        return state;
    }


    handleCellClick = (id) => {
        if (!this.game.move(id))
            return;

        this.setState({ ...this.game })

        if (!this.game.gameOver)
            this.setState({ status: `Current Player: "${this.game.current}"` });
        else if (this.game.winningPlayer)
            this.setState({ status: `${this.game.winningPlayer} Wins` });
        else
            this.setState({ status: `Stalemate` });
    }


    handleReset = () => {
        let state = this.newGame();
        this.setState(state);
    }

    render = () => {



        return (
            <div className="game row" >
                <div className="col game_left">
                    <Status message={this.state.status} />
                    <Board cells={this.state.cells}
                        gameOver={this.state.gameOver}
                        winner={this.state.winner}
                        onCellClick={this.handleCellClick} />
                    <Reset onReset={this.handleReset} />
                </div>
                <div className="col">
                    <MovesTable/>
                </div>


            </div>
        )
    }
}

export default Game;