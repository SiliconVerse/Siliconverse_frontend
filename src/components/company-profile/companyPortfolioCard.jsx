import React from 'react'
import './companyportfoliocard.css'
import Time from '../../assets/Vector.svg';

// import Image from './'

const FolioCard = ({image, head, description, duration, approval, time, share, date, chatBox, approveImg}) => {
    return(   
                <div className="postjobs__cont">
                    <div className="postjobs__img" >
                        {/* work */}
                        <img 
                            src={image}
                            alt="company_photo"
                        />
                    </div>
                    <div className="postjobs__content">
                        <div className="content__header">
                            <div className="sub_content">
                                <span className="text">{ head }</span>
                            </div>
                            <div className="content__time">
                                <img 
                                    className='content__time_icon'
                                    src= {Time}
                                    // alt="time_icon" 
                                />
                                {time}
                            </div>
                        </div>
                        <p className="content__desc">{description}</p>                       
                        <p className="content__duration"> {duration} </p>
                       
                        <div className="content__confirmatino">   
                            <div className="content_approve">
                                <img 
                                    src = {approveImg}
                                    // alt= 'approve_icon'
                                />
                                <p classNames="content__approval">{approval}</p>                            
                            </div>                  
                            <div className="content__share">
                                <div className="chat">
                                    {date}
                                    <img 
                                        className="chat__icon"
                                        src={chatBox}
                                        // alt="chat-icon"
                                    />
                                </div>
                                {/* <button className="share__btn"> {share} </button> */}
                                {share}
                            </div>
                        </div>
                        

                    </div>
                    
                </div>
    
  
);
}
export default FolioCard;