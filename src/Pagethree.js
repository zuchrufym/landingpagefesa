import React, {useState} from 'react'
import ITest from '../src/ITest.png';
import GIITest from '../src/GIITest.png';
import PTest from '../src/PTest.png';
import N from '../src/next.png'
import P from '../src/previous.png'
import Popup from 'reactjs-popup'
import { Carousel } from 'react-bootstrap';

const Pagethree = () => {

    const [content, setContent]= useState(false)

    return (
        <div className="CN-Pagethree" id="Pagethree">
            <div className="CN-Pagethree-OP">OUR PRODUCTS</div>
            <div className="CN-Pagethree-OP-1">
                <p>Online psychological test that focuses on Human Resource Development
and strives to become your work partner in advancing your company</p></div>
            <div className="CN-Pagethree-1">

                {/* <Carousel className="CN-Pagethree-pict">
                    <Carousel.Item className="CN-Pagethree-pict" interval={2000}>
                    <img className="CN-Pagethree-pict" src={ITest} alt="Intellegence Test"></img>
                        <Carousel.Caption>
                        <p className="CN-Pagethree-Car">The intelligence test attempts to measure candidate’s intelligence. 
                            Results are presented in terms of general level of intelligence and specific factors assessed by the test. 
                            This test will help you hire candidates who have the right skills and mindset.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="CN-Pagethree-pict" interval={2000}>
                    <img className="CN-Pagethree-pict" src={PTest} alt="Personality Test"></img>
                        <Carousel.Caption>
                        <p>The intelligence test attempts to measure candidate’s intelligence. 
                            Results are presented in terms of general level of intelligence and specific factors assessed by the test. 
                            This test will help you hire candidates who have the right skills and mindset.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="CN-Pagethree-pict" interval={2000}>
                    <img className="CN-Pagethree-pict" src={GIITest} alt="General Interest Inventory Test"></img>
                        <Carousel.Caption>
                        <p>The intelligence test attempts to measure candidate’s intelligence. 
                            Results are presented in terms of general level of intelligence and specific factors assessed by the test. 
                            This test will help you hire candidates who have the right skills and mindset.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}
                
                {/* <div onClick={()=> setContent(false)} className="CN-Pagetwo-OT-icon"><img className="CN-Pagetwo-OT-icon" src={P} alt="Next"></img></div> */}
                <Popup trigger={<img className="CN-Pagethree-pict" src={ITest} alt="Intellegence Test"></img>} 
                modal nested>
                    {close => (
                        <div className="box">
                            <button className="close" onClick={close}>&times;</button>
                            <div className="header">Intelligence Test</div>
                            <div className="content">
                                The intelligence test attempts to measure candidate’s intelligence. 
                                Results are presented in terms of general level of intelligence and specific factors assessed by the test. 
                                This test will help you hire candidates who have the right skills and mindset.
                            </div>
                        </div>
                    )}
                </Popup>
                <Popup trigger={<img className="CN-Pagethree-pict" src={PTest} alt="Personality Test"></img>}
                modal nested>
                    {close => (
                        <div className="box">
                            <button className="close" onClick={close}>&times;</button>
                            <div className="header">Personality Test</div>
                            <div className="content">
                            The personality test provides a targeted insight regarding the candidate’s behavioral tendency in 
                        a work environment. Some specific personality traits may be needed to suit a certain role in the company. 
                        For example, some positions may need more extroverted or more introverted employees. 
                        The test offers predictions on how candidates might react in a certain situation, decision-making process, 
                        toughness and many more.
                            </div>
                        </div>
                    )}
                </Popup>
                <Popup trigger={<img className="CN-Pagethree-pict" src={GIITest} alt="General Interest Inventory Test" ></img>}
                modal nested>
                    {close => (
                        <div className="box">
                            <button className="close" onClick={close}>&times;</button>
                            <div className="header">General Interest Inventory Test</div>
                            <div className="content">
                            The general interest inventory test evaluates candidate’s preference for a variety of activities 
                        related to occupational areas. Aligning candidate’s work environment with their interests will 
                        enhance job performance and ultimately boost organizational effectiveness. 
                        The test will come handy for employers in the candidate classifying process.
                            </div>
                        </div>
                    )}
                </Popup>
                {/* <div onClick={()=> setContent(true)} className="CN-Pagetwo-OT-icon"><img className="CN-Pagetwo-OT-icon" src={N} alt="Previous"></img></div> */}
                </div>
            {/* <div className="CN-Pagethree-OP-2">
                <p>The personality test provides a targeted insight regarding the candidate’s behavioral tendency in a work environment. Some specific
personality traits may be needed to suit a certain role in the company. For example, some positions may need more extroverted or
more introverted employees. The test offers predictions on how candidates might react in a certain situation, decision-making
process, toughness and many more.</p></div> */}


        </div>
    )
}

export default Pagethree
