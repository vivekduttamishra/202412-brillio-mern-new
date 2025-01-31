import BookList from "./components/BookList";
import Header from "./components/Header";


let App = () => {
    let colors=["black","gray","orangered","darkred"];
    let fonts=["arial","sans-serif","courier","script","vardana"];
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    let randomFont = fonts[Math.floor(Math.random()*fonts.length)];

    let title="World Wide Books"
   
    return <div>
        <Header
            title={title}
            color= "white"
            background={randomColor}
            font={randomFont}

        />
        
        <BookList color={randomColor} />
    </div>
}


export default App;