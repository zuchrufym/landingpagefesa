import React, {useState} from 'react'
import icon from '../src/icon3.png';

const Pageone = () => {
    const [content, setContent]= useState(false)    
    return (
        <div className="CN-Pageone" id="Pageone">
            <div className="CN-Pageone1">
            <div className="CN-Pageone2">
                <div>ONLINE</div>
                <div>PSYCHOLOGICAL</div>
                <div>TESTING</div>
                
                <div className="CN-Pageone3">
                    <div className="CN-Pageone4">
                        <div className="CN-Pageone6">CREDIBLE</div>
                        <div className="CN-Pageone5">
                    We work with senior and expert psychometricians and psychologists to provide a reliable
                    psychological test
                    </div>
                    </div>

                    <div className="CN-Pageone4">
                        <div className="CN-Pageone6">SECURE</div>
                        <div className="CN-Pageone5">
                    We integrate online-based human proctoring and screen recording into our system to provide a cheating-free online psychological test
                    </div>
                    </div>
                    
                </div>
                {/* <div className="CN-Pageone4">
                    <div className="CN-Pageone5">
                    We work with senior and expert psychometricians and psychologists to provide a reliable
                    psychological test
                    </div>
                    <div className="CN-Pageone5">
                    We integrate online-based human proctoring and screen recording into our to provide a cheating-free online psychological test
                    </div>
                
                </div> */}
            </div>
            <div>
            <img className="CN-Pageone-icon" src={icon} alt="icon" />
            </div>
            </div>
        </div>
    )
}

export default Pageone
