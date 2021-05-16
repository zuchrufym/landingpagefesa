import React from 'react'
import UP from '../src/UripPurwono.jpeg'
import UPF from '../src/UripPurwono.png'
import N from '../src/next.png'
import P from '../src/previous.png'
import { Scrollbars } from 'rc-scrollbars';
import { useState } from 'react'

const Pagetwo = () => {
    const [content, setContent]= useState(false)
    return (
        <div className="CN-Pagetwo" id="Pagetwo">
            <div className="CN-Pagetwo-AU">
                ABOUT US
            </div>
            <div className="CN-Pagetwo-AU-1"> 
            <p>FESA is a company that focuses on human resources development and strives to become your work partner
in advancing your company. We work with a team of psychometricians that have backgrounds as
a researcher, assessor, trainer and training developer, alongside with psychologists that are experts in
coaching and counseling that have experience in Human Resource Development.</p></div>
            <div className="CN-Pagetwo-OT">
                OUR TEAM
                <div className="CN-Pagetwo-OT-Profile">
                    <div className="CN-Pagetwo-OT-1">
                        <div className="CN-Pagetwo-OT-photo" ><img className="CN-Pagetwo-OT-photo" src={UP} alt="Urip Purwono"></img>
                        </div>
                        <div className="CN-Pagetwo-OT-2">
                            <div>Urip Purwono, M.Sc., Ph.D., Psi.</div>
                            <div className="CN-Pagetwo-OT-3">
                                <p>
                                    -	Doctoral (Ph.D) and Master in Psychology from University of Massachusetts, Amherst, USA.<br></br>
                                    -	Psychometrician graduated from University of Massachusetts, Amherst, USA. <br></br>
                                    -	Master in Education from Indiana University, Bloomington, USA.<br></br>
                                    -	Psychologist with primary certificate in “Rational Emotive Behavior Therapy” from The Albert Ellis Institute, New York, USA. <br></br>
                                    -	Senior Researcher and Test Developer of various surveys (Organizational Culture, Organizational Climate, Employee Engagement and Employee Satisfaction) in several private companies and Indonesian State-Owned Enterprises (BUMN). <br></br>
                                    -	Author of intelligence test, academic potential test, interest inventory test and personality test for recruitment, selection, promotion and mapping of employees at several universities, private companies and Indonesian State-Owned Enterprises (BUMN). <br></br>
                                    -	Senior assessor of assessment center for several Indonesian State-Owned Enterprises and government offices. <br></br>
                                    -	Senior evaluator and training designer for various training programs. <br></br>
                                    -	In country partner of Institute for Training and Development, Amherst, Massachusetts, USA.<br></br>
                                    -	Training consultant for World Health Organization SEARO offices, New Dehli India. <br></br>
                                    -	Monitoring consultant and evaluator for World Health Organization Headquarters, Geneva, Switzerland.<br></br>
                                </p>
                            </div>
                        </div>                    
                    </div>

                    <div className="CN-Pagetwo-OT-1">
                        <div className="CN-Pagetwo-OT-photo" ><img className="CN-Pagetwo-OT-photo" src={UPF} alt="Urip Purwono"></img>
                        </div>
                        <div className="CN-Pagetwo-OT-2">
                            <div>Dra. Febina Bartania, Psi.</div>
                            <div className="CN-Pagetwo-OT-3">
                                <p>
                                    -	Psychologist graduated from Universitas Padjadjaran Bandung.<br></br>
                                    -	Assessment Center Certified Assessor.<br></br>
                                    -	Assessor with extensive experience in conducting assessment at private companies and Indonesian State-Owned Enterprises.<br></br>
                                    -	Researcher in the development of measurement instrument design for various surveys (Corporate Culture Survey, Employee Engagement Survey and Employee Satisfaction Survey) in several private companies and Indonesian State-Owned Enterprises (BUMN).<br></br>
                                    -	Researcher of the development of intelligence test, interest inventory test and personality test for human resources development at several private companies and Indonesian State-Owned Enterprises (BUMN).<br></br>
                                    -	Expert in Coaching and Counseling particularly Career Change and Pre-retirement Counseling.<br></br>
                                    -	Trainer in employee self-development at private companies and Indonesian State-Owned Enterprises (BUMN).<br></br>
                                </p>
                            </div>
                        </div>                    
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Pagetwo
