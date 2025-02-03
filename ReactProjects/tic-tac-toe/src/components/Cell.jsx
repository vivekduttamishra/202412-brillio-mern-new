import { Component } from "react";

const Cell = (props) => {
    let value = props.value || "_"

    let style = {
        cursor: props.value ? "not-allowed" : "pointer"
    };

    if (!props.value)
        style.color = 'transparent';

    return (
        <button className='cell' style={style}
            onClick={() => props.onCellClick(props.id)}>
            {value}
        </button>
    )
}


export default Cell;