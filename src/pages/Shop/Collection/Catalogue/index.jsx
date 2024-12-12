import React from 'react'
import './style.css'

function Catalogue({image, title, price}) {
    return (
        <div className="catalogue__main">
            <img className='catalogue__image' src={image} alt={title} />
            <div className="catalogue__containter">
                <div className="catalogue__content">
                    <p className='catalogue_title'>{title} </p>
                    <p className='catalogue_price' style={{color: 'rgba(97, 97, 97, 1)' , fontWeight:'Bold'}}>{price}</p>
                </div>
                <div className="catalogue_btn">
                    <button className="catalogue__btn" style={{color: 'rgba(255, 95, 21, 1)', fontWeight:'Bold'}}>Shop</button>
                </div>
            </div>

        </div>
        
    )
}

export default Catalogue
