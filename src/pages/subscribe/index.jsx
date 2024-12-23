import React from 'react'
import './style.css'
import Icon from './assets/Vector (17).svg'

function Subscribe() {
    return (
        <div className="subscribe__main">
            <div className="subcribe__ball one"></div>
            <div className="subscribe__main__content">
                <div className="subscribe__space"></div>
                <div className="subscribe__content">
                    <div className="subscribe__text">
                        <h2 className='text__head'>Subscribe To Newsletter</h2>
                        <p className="sub__text__conte">Stay ahead of the curve with our informative and engaging Newsletter</p>
                        <p className="sub___sub_cont">
                            Get the latest innovations, exclusive insights, trends, expert analysis, and emerging technology delivered to your inbox. 
                            <br />
                            <br />
                            You will be the first to know of tech breaking news, trends,  job offers and more.  
                            <br />
                            <br />
                            Click the subscribe button below to subscribe now!
                        </p>
                    </div>
                    <div className="subscribe__searchbar">
                        <input type="email" placeholder="Email address" className="sub__searchbar" />
                        <button className="sub__searchbar__btn"><img src={Icon} alt="icon" className="icon__img" /></button>
                    </div>
                </div>
            </div>
            <div className="subcribe__ball two"></div>
        </div>

        
    )
}

export default Subscribe
