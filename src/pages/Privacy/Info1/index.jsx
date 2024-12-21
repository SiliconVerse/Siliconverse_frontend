import React from 'react'
import './style.css'
import Infotwo from '../Info2'

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
                    <b>1.1</b> <span className="head_info1"> Personal Information: </span>
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
                {/* <li></li> */}

                <li>
                    <b>1.2</b> <span className="head_info1">Non-Personal Information: </span>
                    <p className="info-one-list-cont">
                        Non-personal information refers to data that cannot directly identify you as an individual. This type of information is collected automatically when 
                        you interact with our website, and it helps us to improve the overall functionality and performance
                        of Siliconmagazine.                     
                    </p>
                    <p className="info-two-list-cont-ul">Non-personal information includes:</p>
                    <ul className="info-one-list-cont-ul">
                        <li>
                        IP Address: This helps us understand your general location, identify unusual access patterns, and improve security. Additionally, knowing the region from which you're visiting enables us to recommend region-specific content.                        </li>
                        <li>
                        Browser Type and Version: Knowing what browser you're using helps us ensure compatibility with our site’s features and improve your overall experience.
                        </li>
                        <li>
                            Phone Number (Optional):This is used when direct communication is required, 
                            especially for clarifications on premium services, or for any urgent matters regarding your account.
                        </li>
                        <li>
                        Device Information (e.g., Operating System): This data assists in optimizing the user experience across different devices and platforms, ensuring that you have a smooth interaction whether you're accessing our site via desktop, tablet, or mobile.
                        </li>
                        <li>
                        Cookie Data: Cookies help us provide you with a more personalized experience, storing your preferences so that you don't have to reset them every time you visit. Cookies also allow us to remember you between visits and deliver more relevant ads.
                        </li>
                    </ul>
                </li>
            </ol>
            {/* <Infotwo /> */}

        </div>
        
    )
}

export default InfoOne
