import React from 'react'
import { useState } from 'react';
// import './style.css'

function BioTextBox() {
    const [bio, setBio] = useState('');
    const [charCount, setCharCount] = useState(0);
    const maxCharLimit=200

    const handleBioChange = (e)=>{
        const bioText = e.target.value;
        setBio(bioText);
        setCharCount(bioText.length);
    };

    return (
        <div className='bio_text_box'>
            <textarea
                value={bio}
                onChange={handleBioChange}
                placeholder="Tell us about yourself..."
                rows={10}
                cols={50}
                maxLength={maxCharLimit}
            />
                <div className='char-count'>
                    {charCount}/{maxCharLimit}
                </div>
         </div>

        
    )
}

export default BioTextBox
