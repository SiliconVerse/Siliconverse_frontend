import React from 'react'
import {useEffect} from 'react'
import './style.css'
import { Link } from "react-router-dom";
import Bg from '../assets/Frame 2147224585.svg'
import PersonImg from '../assets/Tell Me (1) 1.svg'
import AOS from "aos";
import "aos/dist/aos.css";



function Taphead() {

    
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

    return (
        <div className="tap__main">
            <div className="tap__first__section">
                <div className="tap__first__section__content"
                  
                >
                    <div className="tap__first__section__content__text">
                        <h1 className="main__text__content">
                            Talent Accelerator
                        Programme (TAP) 
                        </h1>                      
                        <h2 className="sub__text">
                        The Talent Accelerator Program (TAP) is an innovative internship initiative by Siliconverse designed to equip emerging tech talents with 
                        the practical skills and experience needed to thrive in the ever-evolving tech industry.
                        </h2>
                        <br />
                        <hr />
                        <br />
                        <p className="sub__text2">
                            {/* <h2 className="sub__text2"> */}
                            TAP provides an immersive learning environment where talents can work on real-world 
                            projects, collaborate with Siliconverse team, and fast-track their career growth.
                       
                        </p>
                        {/* button */}
                        <br />
                        <Link
                            to="/signup"
                            className="text_button">
                            Apply Now
                        </Link>                     
                    </div>
                    {/* img */}
                    <div className="tap__firtst__section__content__img">
                        <div className="content__img__bg">
                            <img src={Bg} alt="bg" />
                        </div>
                        <div className="content__main__img">
                            <img src={PersonImg} alt='pi' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Taphead
