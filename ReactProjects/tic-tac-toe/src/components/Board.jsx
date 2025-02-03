import { Component } from "react";
import Cell from "./Cell";


class Board extends Component {


    constructor(props) {
        super(props);
        this.state = {

            current: "O",
            cells: [
                    null, null, null,
                    null, null, null,
                    null, null, null
            ]

        }
    }

    handleCellClick = (id) => {
        let cells = this.state.cells;
        let current = this.state.current;
        if(cells[id])
            return ;// cell has a valid value. can't update

        cells[id]= current;
        current = current==='O'?"X":"O";

        this.setState({cells, current});
    }

    render = () => {
        return (
            <div className='board'>
                {
                    this.state.cells.map((value, index)=>{
                        return <Cell 
                                     key={index}
                                     id={index} 
                                     value={value} 
                                     onCellClick={this.handleCellClick} />
                    })
                }

            </div>
        )
    }
}

export default Board;