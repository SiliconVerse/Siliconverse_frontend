import React from 'react'
import './style.css'

function InfoOne() {
    return (
        <div className="info__one__privacy priv-container" id='one'>
            <p className="info_one_title" >1. Information We Collect.</p>
            <p className="info_one_sub_title">
                We collect personal and non-personal information in several ways, including when you visit our website, subscribe to our newsletter, engage with our content, or interact with us directly. 
                The types of information we collect include:
            </p>
            <ol className="info_one_list">
                <li>
                    <b>1.1</b> <span className="head_info1" style={{color: ''}}> Personal Information: </span>
                    <p className="info-one-list-cont">
                        Personal information refers to any data that can be used to identify you as an individual. This information is collected directly from you when you interact with our website or services. 
                        Personal information is essential for providing tailored services and relevant content. 
                        The types of personal information we collect include, but are not limited to:
                    </p>
                    <ul className="info-one-list-cont-ul">
                        <li>
                            Name: This helps us personalize your experience and communicate with you more effectively.
                        </li>
                        <li>
                            Email Address: Used for essential communications, including subscription confirmations, newsletters, service updates, 
                            and promotional materials (when you opt-in). 
                            We also use this to recover account information or provide customer support.
                        </li>
                        <li>
                            Phone Number (Optional):This is used when direct communication is required, 
                            especially for clarifications on premium services, or for any urgent matters regarding your account.
                        </li>
                        <li>
                            Company/Organization Details (If Provided): Relevant for users interacting with siliconmagazine in a professional capacity, 
                            such as contributors, advertisers, or partners. 
                            This helps us offer business-related services like advertisements or collaborations.
                        </li>
                        <li>
                            Payment Information: Collected securely during transactions for any paid services or subscriptions. 
                            We ensure that your payment details are handled with the highest security standards, 
                            using encryption and secure third-party payment processors.
                        </li>
                    </ul>
                </li>
                <li></li>
            </ol>

        </div>
        
    )
}

export default InfoOne
