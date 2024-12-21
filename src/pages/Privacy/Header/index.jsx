import React from 'react'
import './style.css'
import { Link as ScrollLink } from 'react-scroll'

function PrivacyHead() {
    return (
        <div className="privacy__policy__container priv-container">
            <div className="privacy-container-title">
                <h1 className="privacy-header">Privacy Policy</h1>
                <p className="privacy-title">We care about you and your information.</p>
                <p className="privacy-title-content" style={{fontSize: '20px'}}>
                    Siliconmagazine is committed to safeguarding the privacy of its users. This privacy policy outlines the types of personal information we collect, how it is used, stored, and protected, and the rights you have regarding your data. By accessing or using our website, services, or products, you agree to the terms set out in this privacy policy. 
                    Please take a moment to read and understand how we handle your personal information.
                </p>
            </div>
            <div className="privacy_sub-main-line">
                <ol className="sub_list">
                    <li>
                        <ScrollLink                
                            to="one"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000}
                            className='scroll-link'>
                            1. Information We Collect.
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink                
                            to="two"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className='scroll-link'>
                           2. How We Use Your Information
                        </ScrollLink>                          
                    </li>
                    <li>
                        <ScrollLink                
                            to="three"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className='scroll-link'>
                            3. Cookies and Tracking Technologies
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink                
                            to="four"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className='scroll-link'>
                            4. How We Share Your Information
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink                
                            to="five"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className='scroll-link'>
                            5. Data Security
                        </ScrollLink>
                    </li>
                    <li>
                    <ScrollLink                
                            to="six"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className='scroll-link'>
                            6. Third-Party Links
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink                
                            to="seven"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className='scroll-link'>
                            7. Children’s Privacy
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink                
                            to="eight"
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={1000} 
                            className='scroll-link'>
                            8. Contact Us
                        </ScrollLink>
                    </li>
                </ol>
            </div>
        </div>
        
    )
}

export default PrivacyHead
