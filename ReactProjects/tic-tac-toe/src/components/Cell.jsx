
const Cell = ({value, id, winner, gameOver, onCellClick}) => {
    value = value 
    //console.log('cell props',props);
    let style = {
        cursor: value || gameOver ? "not-allowed" : "pointer",
       
    };

    if (!value)
        style.color = 'transparent';

    if(winner && winner.includes(id))
        style.background='lime';

    if([0,3,6].includes(id))
        style.borderLeft="0px"
    
    if(id<3)
        style.borderTop="0px"

    if([2,5,8].includes(id))
        style.borderRight="0px";

    if(id>5)
        style.borderBottom="0px"



    return (
        <button className='cell' style={style}
            onClick={() => onCellClick(id)}>
            {value||"_"}
        </button>
    )
}


export default Cell;