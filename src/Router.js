import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import About from './pages/About'
import Navbar from './pages/Navbar'
import Details from './pages/Details'

class Router extends React.Component {
    render(){
        return(<React.Fragment>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Products" element={<Products />}/>
                    <Route path="Products/:id" element={<Details />} />
                    <Route path="/Cart" element={<Cart />}/>
                    <Route path="/About" element={<About />}/>
                    <Route path="*" element={<><h1>Error 404: Page Not Found</h1></>}/>
                </Routes>
            </BrowserRouter>
        </React.Fragment>)
    }
}
export default Router