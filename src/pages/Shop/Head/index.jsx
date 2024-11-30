import React from 'react';
import './style.css'

function Head() {
    return(
        <div className='shop__head__main'>
            <div className='shop__head__main__content'>
                <h1 className='head__header'>Shop</h1>
                <div className='head__sub-content'>
                    <p className='sub-content__header'>Elevate Your Style with Silicon Merchandise</p>

                    <div className="sub-cont-total">
                        <p className= 'sub-content-cont'> Welcome to our shop, your go-to destination for exclusive Siliconverse-branded merchandise! </p>
                        <p className= 'subcontent_1'>
                            Here, you’ll find an exciting range of stylish and high-quality products designed for you and other tech enthusiasts, innovators, and 
                            anyone who wants to showcase their passion for technology and the Siliconverse community. 
                        </p>
                    </div>
                    <p className='explore_intro'>Explore Our Collection</p>
                    
                </div>
            </div>
        </div>

    )
}
export default Head