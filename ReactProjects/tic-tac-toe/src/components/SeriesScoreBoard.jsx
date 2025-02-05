

const SeriesScoreBoard=({})=>{

    return (<div className="seriesScoreBoard">
        <h2>Score Board</h2>
        <table className='table table-condensed table-hover table-success'>
            <thead>
                <tr>
                    <th>Games</th>
                    <th>O Wins</th>
                    <th>X Wins</th>
                    <th>Draw</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>11</td>
                    <td>4</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
            </tbody>
        </table>
    </div>)

}

export default SeriesScoreBoard;