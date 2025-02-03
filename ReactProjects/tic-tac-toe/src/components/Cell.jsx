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

   

    render(){

        return (
            <button className='cell' 
                onClick={()=>this.props.onClick(this.props.id)}>
                {this.state.value }
            </button>
        )
    }
}

export default Cell;