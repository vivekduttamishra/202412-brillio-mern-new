

const Membership = () => {
    return (<ul className="navbar-nav ms-auto ">
        <li className="nav-item dropdown d-flex">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Membership
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Login</a></li>
                <li><a className="dropdown-item" href="#">Register</a></li>
                <li><a className="dropdown-item" href="#">Pricing</a></li>
            </ul>
        </li>
    </ul>)
}

export default Membership;