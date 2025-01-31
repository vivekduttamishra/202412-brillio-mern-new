import React from 'react'
import ReactDOM from 'react-dom/client';




let Header = function () {
    //some logic here.

    return (
        <div>
            <h1>Book's Web</h1>
            <hr />
        </div>
    );
}

class BookList extends React.Component {

    render() {
        return (
        <div>
            <h2>Book List</h2>
            <ul>
                <li>The Acursed God</li>
                <li>Manas</li>
                <li>The Count of Monte Cristo</li>
            </ul>
        </div>
        );
    }
}




let App = ()=>
    <div>
        <Header />
        <BookList />
    </div>


let root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App/>);