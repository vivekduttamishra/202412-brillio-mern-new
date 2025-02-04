

const MovesTable = (props)=>{

    console.log('props',props);
    const moves=props.moveList;

    return (
        <div>
            <h2>Move's Table</h2>
            <table className='table table-success table-striped table-condensed table-hover'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Player</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        moves.map((move)=>(
                            <tr key={move.index}>
                                <td>{move.index}</td>
                                <td>{move.player}</td>
                                <td>{move.position}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
    )

}

export default MovesTable;