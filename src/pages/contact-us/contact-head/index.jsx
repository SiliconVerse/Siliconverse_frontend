import React from 'react'
// import contactCard from '../contact-card
import IconImg1 from '../assets/Vector (4).svg'
import './style.css'
import ContactCard from '../contact-card'

const Contact = () => {
    return(
        <div className='contact__main'>
            <div className='contact__head'>
                <div className='contact__head__content'>
                    <div className="background__frame"></div>
                    <h2 className='contact__head__first__content'>Contact us</h2>
                    <p className='contact__head__subtitle' style={{fontSize: '32px', color: '#fff'}}>We're at your reach, anytime anyday.</p>
                </div>
                <div className='contact__sub'>
                    <p className='contact__sub-cont' >Do well to reach out to our customer service for any inquiry, complaint, partnership, sponsorship with Siliconmagazine or any other related services.</p>               
                    {/* </div> */}
                </div>
                <div className="contact__info">
                    <p className="contact-cont">Contact us at</p>
                    <div className='contact__info__handle'>
                        <div className="contact__infor__handle_1">
                            <ContactCard 
                                iconPic={IconImg1}
                                social= 'On Whatsapp'
                                handle='+2349065962042'

                            />                            
                        </div>
                        <div className="contact__infor__handle_2">
                            <ContactCard 
                                // iconPic={IconImg1}
                                 social= 'Send us a mail'
                                handle='siliconmagazine.co@gmail.com'


                            />
                        </div>
                        
                    </div>
                </div>
            </div>
          
        </div>

    )

}

export default Contact