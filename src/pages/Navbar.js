import React from "react";
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return(<React.Fragment>
            <Link to="/">Home</Link>
            <Link to="/About">About Us</Link>
            <Link to="/Products">Products</Link>
            <Link to="/Cart">Cart</Link>
        </React.Fragment>)
    }
}
export default Navbar