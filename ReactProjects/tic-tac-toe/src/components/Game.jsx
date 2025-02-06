import { useState } from "react";
import Board from "./Board";
import Reset from "./Reset";
import Status from "./Status";
import TicTacToe, { GAME_STATE_INPROGRESS,GAME_STATE_END, GAME_STATE_NEW } from "../services/TicTacToe";
import MovesTable from "./MovesTable";
import Clock from "./Clock";
import Timer from "./Timer";


const Game = () => {
    
    const [_game,setGameService]= useState(new TicTacToe()); //JS object
    
    const [game,updateGame] = useState({..._game});
    const [status,setStatus] = useState(`Game Not Started Yet!`);

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
        if(_game.state===GAME_STATE_NEW)
            return; // NOT STATRED YET.
        if (!_game.move(id))
            return;
       
        //console.log('_game',_game);
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


    const handleStart = () => {
        let _newGame = new TicTacToe();
        setGameService(_newGame);

        _newGame.state= GAME_STATE_INPROGRESS; //START THE GAME
        updateGame({..._newGame})
        setStatus(`Next Move: "${_newGame.current}`)
    }
    

    return (
        <div className="game row" >
            <div className="col game_left">
                <div className="row">
                    <Timer hideControls running={game.current === "O" && game.state===GAME_STATE_INPROGRESS} className="col" label="O" />
                    <Timer hideControls running={game.current === "X" && game.state===GAME_STATE_INPROGRESS} className="col" label="X" />

                </div>
                <Status message={status} />
                <Board cells={game.cells}
                    gameOver={game.gameOver}
                    gameState={game.state}
                    winner={game.winner}
                    onCellClick={handleCellClick} />
                {
                    game.state!==GAME_STATE_INPROGRESS &&
                    <button className="btn btn-primary"
                        onClick={handleStart} >
                            Start
                    </button>
                }
            </div>
            <div className="col">
                <MovesTable moveList={game.moveList} />
            </div>


        </div>
    )
}

export default Game;