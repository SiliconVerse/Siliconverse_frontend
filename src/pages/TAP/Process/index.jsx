import React from 'react'
import PicImg from '../assets/Rectangle 11.svg'
import PicImg1 from '../assets/Rectangle 12.svg'
import './style.css'

function ApplicationProcess() {
    return (
        <div className="applicationprocess__main">
            <div className="applicationprocess__content">
                <div className="applicationprocess__first__content">
                    <div className="applicationprocess__first__content__img">
                        <img src={PicImg1} alt='pic'/>
                    </div>
                    <div className="applicationprocess__content__text">
                        <h1 className="applicationprocess__content__text__head">
                            Application Process
                        </h1>
                        <p className="applicationprocess__content__subtext">
                            The application process is simple
                        </p>
                        <ul className="applicationprocess__content__subtext__list">
                            <li>Click on the apply button.</li>
                            <li>Submit your resume and other required information.</li>
                            <li>Complete a brief assessment to gauge your skills and areas of interest.</li>
                            <li>Shortlisted candidates will be invited for a brief interview to assess fit and commitment.</li>
                        </ul>
                    </div>
                </div>

                <div className="applicationprocess__secondt__content">
                    <div className="applicationprocess__second__content__img">
                        <img src={PicImg} alt='pic'/>
                    </div>

                    <div className="applicationprocess__content__text">
                        <h1 className="applicationprocess__content__text__head">
                            Program Duration
                        </h1>
                       
                        <ul className="applicationprocess__content__subtext__list">
                            <li>The internship will run for 3-6 months.</li>
                            <li>Talents are expected to dedicate at least 20 hours per week during the program.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default ApplicationProcess
