

const Cell = (props)=>{

    let value = "_"

    const handleCellClick= ()=>{
        console.log('cell clicked...', value);
        props.value = props.value==='X'?'O':'X'
    }

    return (
        <button className='cell' onClick={handleCellClick}>
            {props.value || "_"}
        </button>
    )
}

export default Cell;