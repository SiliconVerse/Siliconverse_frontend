import React ,{useEffect} from 'react'
import WCAImg from '../assets/Rectangle 2.svg'
import './style.css'
import AOS from "aos";
import "aos/dist/aos.css";


function WhoCanApply() {
    useEffect(() => {
        AOS.init({ duration: 1200, // Animation duration in milliseconds
            offset: 200,    // Trigger animations when element is 200px in viewport
            easing: "ease-in-out", // Animation easing
            once: true, }); // Initialize AOS
      }, []);
    return(
        <div className="wca__main" data-aos="fade-up">
            <div className="wca__content">
                <div className="wca__content__text">
                    <h1 className="wca__head">
                        Who Can Apply?
                    </h1>
                    <p className="wca__subtext1">
                        <strong>Emerging Talents: </strong> 
                        Students, recent graduates, or anyone looking to switch careers into tech.
                    </p>
                    <p className='wca__subtext2'>
                        <strong>Tech Professionals: </strong> 
                        Open to those with foundational knowledge in coding, management, design, marketing, analytics and others. Expertise is not a requirement 
                        to join the Siliconverse Talent Accelerator Program(TAP), but if you want to improve your basic knowledge, you're welcome.
                    </p>
                    <p className='wca__subtext3'>
                        <strong>Talents Seeking Growth: </strong> 
                        Talents who are eager to learn, contribute, and take their skills to the next level.
                    </p>
                </div>
                <div className="wca__content__image">
                    <img src={WCAImg} alt="img" />
                </div>
            </div>
        </div>


    )
}

export default WhoCanApply