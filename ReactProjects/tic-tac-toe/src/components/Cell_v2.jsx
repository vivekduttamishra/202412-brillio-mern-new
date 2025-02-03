import { Component } from "react";

class Cell extends Component{

    constructor(props){
        super(props);

        //this.value="_"

        this.state={
            value:"_"
        }


        //this.handleCellClick=this.handleCellClick.bind(this);
    }

    handleCellClick=()=>{
        console.log('cell clicked...', this.state.value);
        //this.state.value = this.state.value==='X'?'O':'X'
        
        if(this.state.value==="_"){
            let value = this.state.value==='X'?'O':'X'            
            this.setState({value:value}); //update ui
        }


    }

    render(){

        return (
            <button className='cell' onClick={this.handleCellClick}>
                {this.state.value }
            </button>
        )
    }
}

export default Cell;