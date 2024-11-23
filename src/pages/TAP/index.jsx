import React from 'react'
import Taphead from './TapHead'
import ProgrammOverview from './ProgramOverview'
import KeyObj from './keyObj'
import ProgramStructure from './ProgramStructure'
import WhoCanApply from './WCA'
import ApplicationProcess from './Process'
import SuccessStory from './SuccessStories'

function TalentAcceleratorProgram() {
    // const main__styles = () =>{
    //     backgroundColor: ''
    // }
    return (
        <>
        <Taphead />  
        <ProgrammOverview />  
        <KeyObj /> 
        <ProgramStructure />   
        <WhoCanApply />
        <ApplicationProcess />
        <SuccessStory />
        </>
        

        
    )
}

export default TalentAcceleratorProgram
