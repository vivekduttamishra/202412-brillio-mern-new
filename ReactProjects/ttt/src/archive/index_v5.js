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

let Header = function (props) {
   
    let style={
        ...headerStyle,
        backgroundColor: props.background,
        color: props.color,        
    }
  
    return (
        <div  style={style}>
            <Title value={props.title}  />
            <NavLink/>         
        </div>
    );
}

let Title = (props)=> <h1>{props.value}</h1>

let NavLink= ()=> {

    return (
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    );
}




class BookList extends React.Component {


    render() {
        let listStyle={
            color: this.props.color || 'black'
        }


        return (
            <div className='book_list' >
                <h2>List of Books</h2>
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