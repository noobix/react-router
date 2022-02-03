import React from "react";
import { Link } from "react-router-dom";

class Products extends React.Component {

    render() {
        let products = ["Cassava", "Pepper", "Ginger","Carrot"]
        return(<React.Fragment>
            <h1>Products</h1>
            {products.map((product,index) =>
            {return<h1><Link to={`/products/${index}`}>{product}</Link></h1>})}
        </React.Fragment>)
    }
}
export default Products