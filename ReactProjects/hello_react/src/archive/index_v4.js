import React from 'react'
import ReactDOM from 'react-dom/client';
import './app.css'

const headerStyle = {
    background: 'black',
    color: 'white',
    marginBottom: '10px',
    padding: 10
}



let App = () => {
    let colors=["black","gray","orangered","darkred"];
    let fonts=["arial","sans-serif","courier","script","vardana"];

    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    let randomFont = fonts[Math.floor(Math.random()*fonts.length)];

    //headerStyle.background = randomColor;
    //headerStyle.fontFamily = randomFont;

    return <div>
        <Header
            title="World Wide Books"
            color= "white"
            background={randomColor}
            font={randomFont}

        />
        
        <BookList color={randomColor} />
    </div>
}




let Header = function (props) {
    console.log('args', props);

    let style={
        ...headerStyle,
        backgroundColor: props.background,
        color: props.color,
        fontFamily: props.font
    }



    const siteTitle = "World of Book's"
    return (
        <div style={style} >
            <h1>{props.title.toUpperCase()}</h1>
            <hr />
        </div>
    );
}





class BookList extends React.Component {

    constructor(props){
        super(props) 
        // this.props=args
    }

    render() {
        let listStyle={
            color: this.props.color || 'black'
        }


        return (
            <div className='book_list' >
                <h2>Book List</h2>
                <ul style={listStyle}>
                    <li>The Acursed God</li>
                    <li>Manas</li>
                    <li>The Count of Monte Cristo</li>
                </ul>
            </div>
        );
    }
}

let root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);