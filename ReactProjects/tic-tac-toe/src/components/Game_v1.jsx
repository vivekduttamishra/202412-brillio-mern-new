import Board from "./Board";
import Reset from "./Reset";
import Status from "./Status";

const Game = ()=>{
    return (
        <div className='game'>
            <Status/>
            <Board/>
            <Reset/>
        </div>
    )
}

export default Game;