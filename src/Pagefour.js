import React from 'react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Carousel from 'react-bootstrap/Carousel'
import { _ScrollView } from 'react-native';
import ReactAnime from 'react-animejs'
import icon1 from '../src/c1.png';
import icon2 from '../src/c2.png';
import icon3 from '../src/c3.png';
import icon4 from '../src/c4.png';
import icon5 from '../src/c5.png';
import icon6 from '../src/c6.png';

const {Anime} = ReactAnime
const Pagefour = () => {
    return (
        <div className="CN-Pagefour" id="Pagefour">
            <div className="CN-Pagefour-1">
                <div className="CN-Pagefour-OC">OUR CLIENTS</div>
                <div className="CN-Pagefour-11">
                    <Anime
                    initial={[
                        {
                        targets: ["#Icon"],
                        // translateX: 500,
                        opacity:{
                            value:1,
                        },
                        translateY:{
                            value:50,
                        },
                        easing: 'easeOutElastic(5, 2)',
                        opacity:0,
                        duration:5000,
                        loop:true,
                        }
                    ]}>
                    <div className="CN-Pagefour-OC-1">
                    <div id="Icon" >
                        <img className="Icon" src={icon1} alt="icon1"></img>
                    </div>
                    <div id="Icon" >
                        <img className="Icon" src={icon2} alt="icon2"></img>
                    </div>
                    <div id="Icon" >
                        <img className="Icon" src={icon3} alt="icon3"></img>
                    </div>
                    <div id="Icon" >
                        <img className="Icon" src={icon4} alt="icon4"></img>
                    </div>
                    <div id="Icon" >
                        <img className="Icon" src={icon5} alt="icon5"></img>
                    </div>
                    {/* <div id="Icon" >
                        <img className="Icon" src={icon6} alt="icon6"></img>
                    </div> */}
                    </div>
                    </Anime>
                </div>
            </div>

            <div className="CN-Pagefour-2">
                <div className="CN-Pagefour-2-1">
                <div className="CN-Pagefour-2-2">
                    <div className="CN-Pagefour-2-3">COMPANY</div>
                    <div><Link to="Pagetwo" smooth={true} duration={1000}>
                About Us</Link></div>
                    <div><Link to="Pagefour" smooth={true} duration={2000}>
                Contact Us</Link></div>
                </div>

                <div className="CN-Pagefour-2-2">
                    <div className="CN-Pagefour-2-3">PRODUCTS</div>
                    <div><Link to="Pagethree" smooth={true} duration={1500}>
                    Intelligence Test</Link></div>
                    <div><Link to="Pagethree" smooth={true} duration={1500}>
                    Personality Test</Link></div>
                    <div><Link to="Pagethree" smooth={true} duration={1500}>
                    General Interest Inventory Test</Link></div>
                </div>

                <div className="CN-Pagefour-2-4">
                <div className="CN-Pagefour-2-3">CONTACT US</div>
                    <div>+62-211-2234 phone</div>
                    <div>cs@persona.co.id email</div>
                </div>
                </div>

                <div className="CN-Pagefour-Copyright">2020 FESA Online Testing is supported by Littera | Online Psychological Testing | Indonesia</div>
            </div>
            
        </div>
    )
}

export default Pagefour
