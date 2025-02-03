import Cell from "./Cell";


const Board = ()=>{
    const handleCellClick = (id)=>{
        console.log('board is notified about clicked cell',id);
    }

    return (
        <div className='board'>
            <Cell id="0" onClick={handleCellClick} />
            <Cell id="1" onClick={handleCellClick} />
            <Cell id="2" onClick={handleCellClick} />

            <Cell id="3"  onClick={handleCellClick} />
            <Cell id="4"  onClick={handleCellClick} />
            <Cell id="5"  onClick={handleCellClick}/>
            
            <Cell id="6"  onClick={handleCellClick}/>
            <Cell id="7"  onClick={handleCellClick}/>
            <Cell id="8"  onClick={handleCellClick}/>

        </div>
    )
}

export default Board;