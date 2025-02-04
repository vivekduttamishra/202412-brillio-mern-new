import { Component } from "react";

class Cell extends Component{

    constructor(props){
        super(props);

        //this.value="_"

        this.state={
            value:"_"
        }



    }
  

    render(){
        let value = this.props.value || "_"

        let style={
            cursor: this.props.value ? "not-allowed": "pointer"
        };

        if(!this.props.value)
            style.color='transparent';

        return (
            <button className='cell' style={style} 
                onClick={()=>this.props.onCellClick(this.props.id)}>
                {value }
            </button>
        )
    }
}

export default Cell;