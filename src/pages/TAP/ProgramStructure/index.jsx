import React from 'react'
import './style.css'
import { Slider } from './slider'
// import Card from './Card'



function ProgramStructure() {

    return (
        <div className="programstructure__main">
            <div className="programstructure__main__content">
                <div className="programstructure__content__head">
                    <h1 className="content__header">
                        Program Structure
                    </h1>
                    <p className="content__sub_text">
                        <strong>TAP</strong> is structured into three phases, 
                        ensuring a step-by-step build-up of skills and responsibilities:
                    </p>
                </div>
                <div className="content__slder">           
                    <Slider />
                    

                </div>
            </div>            
        </div>
        
    )
}

export default ProgramStructure
