import React from "react";
import '../style/HeaderBar.css'
import { Link, useNavigate } from "react-router";

interface HeaderBarProps {
    setShowBuild: (showBuild:boolean)=>void;
}

export function HeaderBar({setShowBuild}:HeaderBarProps) {
    const navigate = useNavigate();

    return (
        <nav>
            <Link to='/' className='nav-logo'>
                <img src="/images/logo.png" alt="The Good Build"/>
                <div className="nav-logo-text">the<span>good</span>build</div>
            </Link> 

            <ul className="nav-links">
                <Link to="/">Builds</Link>
                <Link to="/how-it-works">How It Works</Link>
                <Link to="/about">About</Link>
                <Link to="/faq">FAQ</Link>
                <button onClick={() => {
                    setShowBuild(true);
                    navigate("/");
                }} className="nav-cta">SHOP NOW</button>
            </ul>
        </nav>
    );
}