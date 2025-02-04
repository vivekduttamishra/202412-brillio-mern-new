import { Component } from "react";
import Cell from "./Cell";


const Board = (props) => {
    return (
        <div className='board'>
            {
                props.cells.map((value, index) => {
                    return <Cell
                        key={index}
                        id={index}
                        value={value}
                        onCellClick={props.onCellClick} />
                })
            }

        </div>
    )
}

export default Board;