import React from 'react'
import './style.css'
import Swipper from './Swiper'
import {Link} from 'react-router-dom'
// import Card from './Card'

function SuccessStory() {
    return (
        <div className="success__story__main">
            <div className= "success__story__content">
                <div className= "success__story__text">
                    <h1 className= "success__story__text__head">
                        Success Stories
                    </h1>
                    <p className="success__story__subtext">
                        At TAP, we are committed to nurturing talents who go on to succeed in various tech fields. 
                        Hear from some of our previous participants who have transformed their careers through the program.
                    </p>                    
                </div>  

                 {/*Reviews  */}
                 <div className="success__story__reviews">
                    {/* <Card /> */}
                    <Swipper />

                 </div>
                 <div className="success__story__final">
                    <p className="success__story__final__text">To kickstart your journey with Siliconverse’s Talent Accelerator Program (TAP) and build the future. </p>
                    <Link
                        to="/signup"
                        className="success__text_button">
                        Apply Now
                    </Link>  
                 </div>
            </div>   
        </div>
        
    )
}

export default SuccessStory
