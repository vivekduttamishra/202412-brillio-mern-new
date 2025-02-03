import { Component } from "react";

class Cell extends Component{

    constructor(props){
        super(props);
        this.value="_"
        //this.handleCellClick=this.handleCellClick.bind(this);
    }

    handleCellClick=()=>{
        console.log('cell clicked...', this.value);
        this.value = this.value==='X'?'O':'X'
    }

    render(){

        return (
            <button className='cell' onClick={this.handleCellClick}>
                {this.value || "_"}
            </button>
        )
    }
}

export default Cell;