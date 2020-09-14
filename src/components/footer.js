import React from 'react';
import { AiFillGithub  , AiOutlineLinkedin } from 'react-icons/ai';
import { ImTelegram } from 'react-icons/im';

const Footer = () => {
    return (  
        <React.Fragment>
            <div className="mt-3 footer-row">
            <div className="row">
                <div className="col-12 font-weight-bold text-white text-center d-flex justify-content-center align-items-center">
                            RPS Built With JS <br/> Aashiq Otp <br/>
            </div></div>
                        <div className="row mt-2 mb-2 text-center d-flex justify-content-between">
                            <div className="col ml-4 text-white footer-icon">
                                  <a href="https://github.com/Aashiq-Otp">  <AiFillGithub/>  </a>
                            </div>
                            <div className="col ml-4 text-white footer-icon">
                                  <a href="https://www.linkedin.com/in/aashiqotp/">  <AiOutlineLinkedin/> </a>
                            </div>
                            <div className="col ml-4 text-white footer-icon">
                              <a href="https://t.me/aashiqotp">      <ImTelegram/> </a>
                            </div>
                        </div>
                </div>
        </React.Fragment>
    );
}
 
export default Footer;