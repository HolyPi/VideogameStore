import React from 'react'
import './Header.css'
import logo from '../../static/images/logo.png'

export default function Header() {
    return (
        <div className="hero-section">
        <div className="hero-figure"></div>
        <div className="hero-img"><img src={logo} alt="Logo"></img></div>
        </div>
    )
}