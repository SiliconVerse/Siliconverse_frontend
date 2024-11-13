import React, { useState } from "react";





function TermsAndConditions() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

    const handleAcceptClick = () => {
      if (isChecked) {
        alert("You have accepted terms and conditions.");
      }
    };

    const handleCancelClick = () => {
      alert("Action cancelled.");
    };

  return (
    <div className="p-5 md:p-10 mx-auto">
      <h1 className="font-bold text-2xl md:text-3xl my-3">
        Welcome to SiliconVerse
      </h1>
      <p className="text-sm md:text-base">
      Effective from July 1st, 2024, please take a moment to review the terms governing your use of our Website(s), Products, Services, and Application, collectively referred to as the "Platform". These Terms of Service ("Terms") establish a binding agreement between Siliconverse and you, or the legal entity you represent upon signing up for any Service. 
      </p>
      <br/>
      <p>
      Applicable to all visitors and users of our Services, you must agree to and accept all these Terms to access Siliconverse Services. By utilizing any of the Siliconverse Services, you signify your agreement to these Terms, which shall remain in effect throughout your usage of our Services.
      </p>
      <br/>
      <p>
      These Terms encompass the provisions outlined in this document and are supplemented by our Privacy Policy. Should you have any questions, comments, or concerns about these Terms of Service, please reach out to us at siliconverse.io@gmail.com.
      </p>
      <br/>
      <p>
      These Terms are subject to updates at any time, with or without prior notice. We reserve the right to modify these Terms, and you agree to regularly review them. Changes may be communicated through notices on the Siliconverse Website, our social media channels, email, or other means.
      Continued use of any Siliconverse Services following changes to the Terms indicates your acceptance of those changes. 
     </p>
     <br/>
     <p>These terms and conditions govern the provision of services by Siliconverse to users.
     </p>
     <li className="font-semibold">We can't guarantee job placement, the final decision lies with the recruiting company.</li>
     <li className="font-semibold">Our Site contains verified information from third parties (Advertisers/Employers/Job Seekers)
     </li>
     <li className="font-semibold">We do not guarantee a specific number of job advertisements /information per month. Job advertisements/information are published based on availability of Jobs.
     </li>
     <li className="font-semibold">We are not responsible for any message undelivered due to network glitch by service  provider or other reason.</li>
     <li className="font-semibold">We do not way certify that users of this service are authentic and not responsible for any fraud that may arise from information obtained from this service.</li>
     <li className="font-semibold">Our service may include external links, we do not endorse or bear any responsibility to any of the links or information from these links.
     </li>
     <li className="font-semibold">We do not delete job postings placed on the website after expiry. We only disable the application process.
     </li>
     <li className="font-semibold">We shall not be liable for any claim arising out of the performance, non-performance, delay in delivery of or defect in the service nor for any special, indirect, economic or consequential loss or damage howsoever arising or howsoever caused (including loss of profit or loss of revenue) whether from negligence or otherwise in connection with the supply, functioning or use of the Service.
     </li>
     <br/>
      <p>
      At Siliconverse, we hold the privacy and security of our Users in high regard. By utilizing any Siliconverse Services, you acknowledge and consent to the collection, use, and disclosure of both personally-identifiable information and non-personally-identifiable information, as outlined in our Privacy Policy. 
     </p>
     <br/>
     <p>
     Our Privacy Policy forms an integral part of these Terms, and your understanding of and agreement to its contents are essential. We are committed to ensuring transparency and protecting your information to the best of our ability. If you have any questions or concerns regarding our privacy practices, please refer to our Privacy Policy or reach out to us directly.
     </p>

      

       {/* Checkbox and Buttons  */}
       <div className="flex items-center mt-5">
        <input 
        type="checkbox"
        id="terms-checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="mr-2" 
        />
        <label htmlFor="terms-checkbox" className="text-sm">
          I confirm that I have read and accept the terms and conditions and privacy policy. 
        </label>
        
        </div>   
        <div className="flex justify-end items-center mt-3 space-x">
          <button
          className="text-orange-600"
          onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
          className={`px-5 py-2 rounded-md text-white ${isChecked ? 'bg-orange-600' : 'bg-gray-400'}`}
          disabled={!isChecked}
          onClick={handleAcceptClick}
          >
            Accept
          </button>
        </div>

    </div>
  );
}

export default TermsAndConditions;
