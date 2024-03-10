import React, { useEffect, useState } from 'react';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const url = 'https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1';
    //         const options = {
    //             method: 'GET',
    //             headers: {
    //                 'X-RapidAPI-Key': 'ab11d6ea47mshaa5a1960c286d92p141310jsn20556f981e65',
    //                 'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    //             }
    //         };

    //         try {
    //             const response = await fetch(url, options);
    //             const result = await response.json();
    //             // Assuming the jobs are directly in the result object
    //             // Adjust this line based on the actual structure of the response
    //             setJobs(result.jobs); // Adjust according to the actual structure of the response
    //             console.log(result);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'ab11d6ea47mshaa5a1960c286d92p141310jsn20556f981e65',
                    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
                }
            };
    
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                // Check if result.jobs is an array before setting the state
                if (Array.isArray(result.jobs)) {
                    setJobs(result.jobs);
                } else {
                    // Handle the case where jobs is not in the expected format
                    // console.error('Jobs data is not an array:', result);
                    // setJobs([]); // Set to an empty array to avoid crashing
                }
                console.log(result);
            } catch (error) {
                console.error(error);
                setJobs([]); // Ensure jobs is still an array on error
            }
        };
    
        fetchData();
    }, []);
    

    return (
        <div>
           {jobs && jobs.length > 0 ? jobs.map((job, index) => (
                <div key={index}>
                    {/* Assuming employer_logo is a URL to an image */}
                    <img src={job.employer_logo} alt={job.company} style={{width: '50px', height: '50px'}} />
                    <span> - {job.employer_name}</span>
                </div>
            )) : <div>No jobs found</div>}
        </div>
    );
}

export default Jobs;
