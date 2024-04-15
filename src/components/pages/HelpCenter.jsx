import React from 'react'

const HelpCenter = () => {
  return (
    <div className='grid helpcenter'>
        <div className="helpcenter_content grid">
            <h3>How can we help you today?</h3>
            <div className="searchbar">
                <form action="">
                    <input type="text" placeholder='Search for help...' id='changeborder' />
                    <button className="btn">Search</button>
                </form>
            </div>
            <h3>Interns Help Page</h3>
            <form action="">
                <textarea name="" id="changeborder1" cols="30" rows="10" placeholder='Info and troubleshooting for posting opportunities'></textarea>
            </form>
        </div>
        <h3>Talk to SiliconVerse</h3>

    </div>
  )
}

export default HelpCenter