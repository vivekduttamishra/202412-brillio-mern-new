import { Component } from "react";

const Cell = (props) => {
    let value = props.value || "_"
    //console.log('cell props',props);
    let style = {
        cursor: props.value || props.gameOver ? "not-allowed" : "pointer",
       
    };

    if (!props.value)
        style.color = 'transparent';

    if(props.winner && props.winner.includes(props.id))
        style.background='lime';

    if([0,3,6].includes(props.id))
        style.borderLeft="0px"
    
    if(props.id<3)
        style.borderTop="0px"

    if([2,5,8].includes(props.id))
        style.borderRight="0px";

    if(props.id>5)
        style.borderBottom="0px"



    return (
        <button className='cell' style={style}
            onClick={() => props.onCellClick(props.id)}>
            {value}
        </button>
    )
}


export default Cell;