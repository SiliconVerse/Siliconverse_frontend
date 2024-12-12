import React from 'react'
import './style.css'

function WhyShop() {
    return (
        <div className='whyshop__main'>
            <div className='whyshop__main__content'>
                <p className='whyshop__main__header'>Why Shop with Us?</p>
                <ul className='whyshop__main_content'>
                    <li>
                        <p className='whyshop__list'>Quality You Can Trust:</p>
                        <p className="whyshop__list__content">
                            Each product is carefully crafted to ensure it meets our high standards of quality and durability. You can feel good about sporting our merchandise knowing it’s made to last.
                        </p>
                    </li>

                    <li>
                        <p className='whyshop__list'>Support the Community:            </p>
                        <p className="whyshop__list__content">
                            Every purchase you make helps support Siliconverse’s mission to empower and engage the tech community. By wearing our branded merchandise, you’re not just showing your style; you’re also showing your support for a vibrant and innovative ecosystem.
                        </p>
                    </li>

                    <li>
                        <p className='whyshop__list'>Make a Statement:</p>
                        <p className="whyshop__list__content">
                            Wearing Siliconverse merchandise is a great way to express your identity as a tech enthusiast. Whether at events, meetups, or in your daily life, our products serve as a badge of honor in the tech community.
                        </p>
                    </li>

                    
                </ul>
            </div>
        </div>
        
    )
}

export default WhyShop
