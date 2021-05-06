import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Navbar() {
    return (
        <Router>
       
        <nav>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Latest Titles</Link></li>
                <li><Link to="/">News</Link></li>
            </ul>
        </nav>
 
</Router>
    )
}