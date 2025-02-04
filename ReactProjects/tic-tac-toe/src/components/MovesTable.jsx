

const MovesTable = (props)=>{

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
                    <tr>
                        <td>1</td>
                        <td>O</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>X</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default MovesTable;