import React from 'react';
import Cart from '../Cart/Cart';
import '../styles/navbar.css'
function NavBar() {
return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link" href="#">Features</a>
        <a className="nav-item nav-link" href="#">Pricing</a>
        <a className="nav-item nav-link " href="#">Disabled</a>
        </div>
        <Cart />
    </div>
    </nav>
)
}

export default NavBar