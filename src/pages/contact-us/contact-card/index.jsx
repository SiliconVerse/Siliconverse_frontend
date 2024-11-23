import React from 'react'
import './style.css'


function  ContactCard ({iconPic, social, handle}){
    return(
        <div className='social__card__main'>
            <div className='social__card__info'>
                <div className="social__card__icon">
                    < img src= {iconPic}/>
                </div>
                <p className='social__card__text' style={{fontWeight: 600}}>{social}</p>
                <span className="social__card__handle">{handle}</span>
            </div>
        </div>

    )
}
export default ContactCard