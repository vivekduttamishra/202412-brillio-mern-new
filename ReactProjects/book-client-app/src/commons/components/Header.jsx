import Membership from "../../users/components/Membership";

const Header = ({ title}) => {

    return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active"  aria-current="page" href="/books">Books</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href="/authors">Authors</a>
                    </li>

                </ul>
                <Membership/>
            </div>
        </div>
    </nav>)
}

export default Header;