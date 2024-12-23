import React from 'react'
import './style.css'


function UpcomingTechEvent() {
    const contents= [
        {
            id: 1,
            head: "Workshops and Seminars:",
            text: "Participate in hands-on workshops and seminars led by industry experts. These events cover a wide range of topics, from coding and design to project management and leadership skills. Enhance your knowledge and gain practical experience that you can apply in your career.",
        },
        {
            id: 2,
            head: "Conferences and Summits:",
            text: "Join us at major tech conferences and summits where thought leaders, innovators, and enthusiasts come together to share insights, showcase new technologies, and discuss the future of the industry. These events are perfect opportunities to learn about emerging trends, network with professionals, and hear from keynote speakers who are shaping the tech landscape.",
            // "text2": "This is a space where you can connect, share experiences, and support one another in your tech journeys.",
        },
        {
            id: 3,
            head: "Networking Events:",
            text: "Connect with like-minded individuals and expand your professional circle at networking events hosted by Siliconverse and partner organizations. Share ideas, collaborate on projects, and build relationships that could lead to future job opportunities or business partnerships.",
            // "text2": "This is a space where you can connect, share experiences, and support one another in your tech journeys.",
        },
        {
            id: 4,
            head: "Hackathons and Competitions:",
            text: "Challenge yourself by participating in hackathons and tech competitions that foster creativity and innovation. Work with teams to solve real-world problems, develop new solutions, and showcase your skills in a competitive environment.",
            // "text2": "This is a space where you can connect, share experiences, and support one another in your tech journeys.",
        },
        {
            id: 5,
            head: "",
            text: "",
            // "text2": "This is a space where you can connect, share experiences, and support one another in your tech journeys.",
        }

    ]
    // const conts = contents.reduce((content, value) =)

    // const mainContent = content.map(content.head)

    return (

        <div className="join-silicon-verse-main">
            <div className="join-silicon-verse-header">
                <h1 className="join-silicon-verse-head">Upcoming Tech Events</h1>
                <div className="join-silicon-verse-content">
                    <p className="join-content-head1">
                        Connect Learn and Grow
                    </p>
                    <p className="build-connect-content">
                        Staying engaged in the tech space is crucial for personal and professional growth, and we are committed to keeping you informed 
                        about the latest events that can help you enhance your skills, expand your network, and stay ahead in the ever-evolving tech landscape.                        {/* <br /> */}
                        {/* <br />
                        Here, you’ll discover a space where ideas flourish, skills are honed, and meaningful connections are made. */}
                    </p>
                </div>
                <div className="join-silicon-verse-2-content">
                    <p className="join-content-head1">
                        Discover Exciting Tech Events
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
                <div className="final__content">
                    <p className="final__content__text">
                        <b>Mark Your Calendar!</b>
                        <br/>
                        Don’t miss out on the chance to elevate your career and connect with others in the tech community. Stay tuned for announcements about upcoming tech events, including dates, locations, and registration details.
                        <br />
                        <br />
                        Check out the list of upcoming tech events and secure your spot today!
                    </p>
        
                </div>
            </div>

        </div>
        
    )
}

export default UpcomingTechEvent
