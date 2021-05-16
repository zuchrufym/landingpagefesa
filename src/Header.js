import React from 'react'
import logolittera from '../src/littera.png';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="CN-Header">
            <Navbar fixed="top" style={{backgroundColor:'white'}}>
                <div className="CN-Header-2">
                <div><img className="CN-Header-logo" src={logolittera} alt="logo" /></div>
                <div className="CN-Header1">
                <Link to="Pageone" smooth={true} duration={1000}>
                Home</Link></div>
                <div><Link to="Pagetwo" smooth={true} duration={1000}>
                About Us</Link></div>
                <div><Link to="Pagethree" smooth={true} duration={1500}>
                Our Products</Link></div>
                <div><Link to="Pagefour" smooth={true} duration={2000}>
                Contact Us</Link></div>
                <div className="CN-Header2"><Link to="" smooth={true} duration={2000}>
                Login</Link></div>
                </div>
                
            </Navbar>
        </div>
    )
}

export default Header
