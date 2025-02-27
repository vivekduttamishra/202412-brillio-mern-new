import { Link } from "react-router-dom"
import IpAddress from "./IpAddress"


const Header = ({title='The Great Website'})=>{
    return (<div className="Header" data-testid='header' >
        <h1>{title}</h1>
        <nav>
            <ul>
                <li><Link to="/authors">Authors</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><IpAddress/></li>
            </ul>
        </nav>
    </div>)
}

export default Header