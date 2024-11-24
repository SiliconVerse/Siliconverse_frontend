import React from 'react';
import './style.css';


function Card({img, name, role, reviews}) {
    return (
        <div className="card">
            <img className= 'card__img' src={img} alt={name} />
            <div className="card__content">
                <h2 className='card__user__name'>{name}</h2>
                <p className= 'card__user__role'>{role}</p>
                <hr />
                <p className='card__user__preview'style={{fontSize:'14px'}} >{reviews}</p>
            </div>
        </div>
        
    )
}

export default Card
