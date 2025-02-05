import { useState } from "react";
import Board from "./Board";
import Reset from "./Reset";
import Status from "./Status";
import TicTacToe from "../services/TicTacToe";
import MovesTable from "./MovesTable";
import Clock from "./Clock";
import Timer from "./Timer";


const Game = () => {
    
    const [_game]= useState(new TicTacToe()); //JS object
    
    const [game,updateGame] = useState({..._game});
    const [status,setStatus] = useState(`Current Player ${game.currentPlayer}`);

    const newGame = () => {

        this.game = new TicTacToe();
        let state = {
            ...this.game,
            status: `Current Player: "${this.game.current}"`,
            //moveList: []
        }
        // console.log('state',state);
        return state;
    }


    const handleCellClick = (id) => {
        if (!_game.move(id))
            return;
       
        console.log('_game',_game);
        updateGame({ 
            ..._game            
        })

        

        if (!_game.gameOver)
            setStatus(`Current Player: "${_game.current}"` );
        else if (_game.winningPlayer)
            setStatus(`${_game.winningPlayer} Wins`);
        else
            setStatus( `Stalemate`);
    }


    const handleReset = () => {
        _game = new TickTackToe();
        updateGame({..._game})
        this.setStatus(`Next Move: "${_game.current}`)
    }

    return (
        <div className="game row" >
            <div className="col game_left">
                <div className="row">
                    <Timer hideControls running={game.current === "O" && game.gameOver} className="col" label="O" />
                    <Timer hideControls running={game.current === "X" && game.gameOver} className="col" label="X" />

                </div>
                <Status message={status} />
                <Board cells={game.cells}
                    gameOver={game.gameOver}
                    winner={game.winner}
                    onCellClick={handleCellClick} />
                {
                    game.gameOver &&
                    <Reset
                        onReset={handleReset} />
                }
            </div>
            <div className="col">
                <MovesTable moveList={game.moveList} />
            </div>


        </div>
    )
}

export default Game;