import Game from "./components/Game";
import Header from "./components/Header";
import SeriesScoreBoard from "./components/SeriesScoreBoard";


const App =()=>{
    return <div className="app">
        <Header title="Tic Tac Toe" />
        <SeriesScoreBoard/>
        <Game/>
    </div>
}

export default App;