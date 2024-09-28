import React from 'react'
import BioTextBox from './UserBio.jsx';

function BioDisplay({bio}) {
    return (
        <div>
            <p className="capitalize">
            <span className="block font-semibold">Bio</span>
            {bio}
            </p>
        </div>
        
    )
}

export default BioDisplay
