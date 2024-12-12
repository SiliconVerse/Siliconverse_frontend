import React from 'react'
import './style.css'


function JoinSiliconVerse() {
    const contents= [
        {
            id: 1,
            head: "Connect with Like-minded Individuals:",
            text: "You’ll meet fellow tech enthusiasts who share your interests and ambitions.  This is a space where you can connect, share experiences, and support one another in your tech journeys.",
        },
        {
            id: 2,
            head: "Collaborate on Projects:",
            text: "Collaboration is at the heart of innovation. Join forces with other community members to work on exciting projects, hackathons, and initiatives that challenge your creativity and problem-solving skills.",
            // "text2": "This is a space where you can connect, share experiences, and support one another in your tech journeys.",
        },
        {
            id: 3,
            head: "Access to Resources and Learning Opportunities:",
            text: "As a member of the Siliconverse Community, you gain access to a wealth of resources, including tutorials, workshops, webinars, and industry insights. Stay updated on the latest trends, technologies, and best practices that can enhance your skills and knowledge.",
            // "text2": "This is a space where you can connect, share experiences, and support one another in your tech journeys.",
        },
        {
            id: 4,
            head: "Networking and Career Growth:",
            text: "Expand your professional network by connecting with industry leaders, mentors, and potential employers. Attend networking events, participate in discussions, and showcase your skills to unlock new career opportunities. The Siliconverse Community is a supportive environment where you can build relationships that can shape your future.",
            // "text2": "This is a space where you can connect, share experiences, and support one another in your tech journeys.",
        },
        {
            id: 5,
            head: "Participate in Exclusive Events:",
            text: "As a community member, you’ll receive invitations to exclusive events, such as tech talks, panel discussions, and workshops featuring renowned speakers and experts. These events provide invaluable learning experiences and the chance to engage with thought leaders in the industry.",
            // "text2": "This is a space where you can connect, share experiences, and support one another in your tech journeys.",
        }

    ]
    // const conts = contents.reduce((content, value) =)

    // const mainContent = content.map(content.head)

    return (

        <div className="join-silicon-verse-main">
            <div className="join-silicon-verse-header">
                <h1 className="join-silicon-verse-head">Join Siliconverse Community</h1>
                <div className="join-silicon-verse-content">
                    <p className="join-content-head1">
                        Build connections and collaborate with others.
                    </p>
                    <p className="build-connect-content">
                        Our community is a vibrant hub for tech enthusiasts, professionals, and innovators who are passionate about technology and eager to collaborate, learn, and grow together. 
                        {/* <br /> */}
                        <br />
                        Here, you’ll discover a space where ideas flourish, skills are honed, and meaningful connections are made.
                    </p>
                </div>
                <div className="join-silicon-verse-2-content">
                    <p className="join-content-head1">
                        Why Join the Siliconverse Community?
                                {/* <p>{mainContent.head}</p> */}
                    </p>
                    {contents.map((content) => {
                        // console.log(content)
                        return(
                            <div key={content.id} className='Join_community__content'>
                                <p className="join__content__header_main"><strong><u>{content.head}</u></strong></p> 
                                <p className="join__sub_content">{content.text}</p>
                            </div>
                            // {/* // <p>{content.text}</p> */}
                        );

                    })}                         
                </div>
                <div className="final__content" style={{marginTop: '20px', fontSize: '20px'}}>
                    <p className="final__content__text">
                        Be Part of Something Bigger!
                        <br/>
                        We can’t wait to welcome you and see the incredible things we’ll accomplish together!
                        <br />
                        Join the Siliconverse  community today.
                    </p>
        
                </div>
            </div>

        </div>
        
    )
}

export default JoinSiliconVerse
