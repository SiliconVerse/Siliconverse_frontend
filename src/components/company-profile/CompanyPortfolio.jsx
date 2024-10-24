import React, { useState } from 'react';
import FolioCard from './companyPortfolioCard.jsx';
import Profile from '../../assets/Rectangle 101.svg';
import Chat from '../../assets/Vector (1).svg';
import Approve from '../../assets/Group.svg';
import Pending from '../../assets/Group (1).svg';
import Depprove from '../../assets/Vector (2).svg';
import './companyportfolio.css';

const CompanyPortfolio = () => {
  const [jobs, setJobs] = useState({}); 
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [availability, setAvailability] = useState(null);

  const handleKeyPress = (e, option, setState) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setState(option);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobs((prevJobs) => ({
      ...prevJobs,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(jobs);
  };
  return (
    <div className="company__postjobs__main">
      <div className="company__postjobs__container">
        <div className="company__postjobs__sub">
          {/* Portfolio Cards */}
          {['Approved', 'Pending...', 'Declined'].map((status, index) => (
            <div className="company-portfolio" key={index}>
              <FolioCard 
                image={Profile}
                head="We are a Tech Based Company..."
                description="Following the meetup event that took place today, the CEO of Silitech made it known that..."
                duration="Uploaded on 10 Mar 2024"
                approval={status}
                approveImg={status === 'Approved' ? Approve : status === 'Pending...' ? Pending : Depprove}
                time="9:30 am"
                share={status === 'Approved' && (
                  <button onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: 'Check this out',
                        url: window.location.href,
                      }).catch(console.error);
                    } else {
                      alert('Sharing is not supported in your browser');
                    }
                  }}>
                    Share
                  </button>
                )}
              />
              <div className="postjobs__engage">
                {/* Additional Engagements */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Post Job Section */}
      <div className="company_postjobs_main">
        <div className="company__postjobs">
          <div className="company__postjobs_head">
            <h1 className="postjobs_head1">Post Opening</h1>
            <input
              type="text"
              name="Job Posts"
              placeholder="Data Science"
              className="postjobs_head2"
              value={jobs['Job Posts'] || ''}
              onChange={handleChange}
              id="post_jobs"
            />
          </div>

          {/* Select Category */}
          <div className="jobscategory">
            <h1 className="jobscategory__head">Select Category</h1>
            <div className="radio-group">
              {['In Person', 'Hybrid', 'Remote'].map((option, index) => (
                <label
                  className={`custom-radio custom-radio${index + 1}`}
                  role="radio"
                  aria-checked={selectedCategory === `Option ${index + 1}`}
                  tabIndex={0}
                  onClick={() => setSelectedCategory(`Option ${index + 1}`)}
                  onKeyDown={(e) => handleKeyPress(e, `Option ${index + 1}`, setSelectedCategory)}
                  key={index}
                >
                  <input
                    type="radio"
                    name="category"
                    value={option}
                    checked={selectedCategory === `Option ${index + 1}`}
                    onChange={() => setSelectedCategory(`Option ${index + 1}`)}
                  />
                  <span className="radio-label"></span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Job Availability */}
        <div className="job__available">
          <div className="job__available__content">
            <h1 className="job__available_head">Availability</h1>
            <div className="job_work">
              <div className="available_radio_group">
                {['Full time', 'Part time'].map((type, index) => (
                  <label
                    className={`available_custom-radio available_custom-radio${index + 1}`}
                    role="radio"
                    aria-checked={availability === type}
                    tabIndex={0}
                    onClick={() => setAvailability(type)}
                    key={index}
                  >
                    <input
                      type="radio"
                      name="availability"
                      value={type}
                      checked={availability === type}
                      onChange={() => setAvailability(type)}
                    />
                    <span className="available_radio-label"></span>
                  </label>
                ))}
              </div>
              <div className="confirm_btns">
                <button className="confirm_bt">Description</button>
                <button className="cancel_btn">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPortfolio;
