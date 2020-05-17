import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from './HomeScreen'
import ProductScreen from './ProductScreen'

function App() {
 const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add('open')
}
 const closeNev =() =>{
    document.querySelector('.sidebar').classList.remove('open')
}
  return (
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>&#9776;</button>
                <a href="index.html">amazon</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin">Sign In</a>
            </div>
        </header>
        <aside className="sidebar">
            
            <h3>Shopping Categories</h3>
            <button className="closeNev" onClick={closeNev}> x</button>
            <ul>
                <li><a href="index.html">Pants</a></li>
                <li><a href="index.html">Shirts</a></li>
            </ul>

        </aside>
      
        <main className="main">
            <div className="content">
            <BrowserRouter>
            <Route path="/" exact component={HomeScreen}/>
            <Route path="/products/:id" exact component={ProductScreen}/>
            </BrowserRouter>    
            </div>
            
        </main>
        <footer className="footer">
            All right reserved
        </footer>
    </div>
  );
}

export default App;
