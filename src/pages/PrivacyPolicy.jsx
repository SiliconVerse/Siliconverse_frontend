import UploadResumeInput from '../components/upload-resume-input';
import './PrivacyPolicy.css'

const PrivacyPolicy = () => {
  return (
    <div className='p-5 md:p-10 flex flex-col justify-between space-y-20'>
      <div>
        <h1 className='text-[60px] font-bold'>Privacy Policy</h1>
        <br />
        <h3 className='text-[20px] font-bold'>Our privacy policy</h3>
        <p className='text-base my-2'>
          At Siliconverse, we are dedicated to protecting the privacy of our users and safeguarding the information they share with us. Our commitment to data protection is embedded throughout our Platform and Services, 
          ensuring effective privacy measures are in place.
          By accessing or using the Siliconverse website, online services, mobile applications, and social networking platforms (collectively referred to as the "Platform"), you agree to the practices and policies detailed in this Privacy Policy and our Terms and Conditions. Each time you use the Platform, you consent to the collection, use, and disclosure of your information as outlined in this policy.
          The terms "we," "us," "our," and "Siliconverse" refer to Siliconverse and its affiliates. "Users," "you," and "your" refer to both talents and businesses as defined in our Terms and Conditions.
          Siliconverse is committed to maintaining transparency and accountability in our data handling practices. We continuously strive to protect your data and ensure that your privacy is respected and upheld across all our services. Your trust is important to us, and we take every measure to ensure your information is secure and used responsibly.
        </p>
        {/* <br /> */}

        <h3 className='text-[20px] font-bold pt-f'>The Kind of Information That May Be Collected By Siliconverse.</h3>
        {/* <br /> */}
          <p>
          Siliconverse may gather information that can personally identify you (“Identifying Personal Information”), including your name and contact details (email address, physical address, and phone number). Additionally, we may collect Device-Specific Information, such as your hardware model, unique device identifiers, and mobile network information, including your phone number. Depending on the nature of your activities or inquiries on the Platform, we may also request other relevant information to enhance your experience and use of the Platform.
          </p>

          <p className='pt-5'>
          When you register with Siliconverse and create a User Profile and User Account, we collect various pieces of information about you. This includes your name, contact details (email address, mobile number, residence address), and financial information necessary for making or receiving payments for services obtained through the Platform. Additionally, we gather details about your education, skills, and work history.Businesses can also create a Company Profile on the Platform. Furthermore, we may collect information related to your usage of the Platform. This data, combined with information from other users, helps us enhance and improve our services for you.
          </p>

          <p className='pt-5'>
          When utilizing the Siliconverse Website and Platform, we collect information based on your activities, including job applications, projects worked on (for talents), or talents hired (for businesses). Additionally, we gather personal information shared through correspondence, chats, dispute resolution, or imported from other social media applications, services, or websites. We may request additional personal details to verify your identity for security purposes. Information regarding your interaction with our Website, Platform, services, content, and advertising is also collected. This includes device ID, type, location, geo-location, computer and connection details, page views, traffic statistics, ad data, IP address, and standard web log information. Furthermore, non-personal information from third-party service providers and partners may be received and recorded. This data, obtained through cookies, server logs, and similar technology from your browser or mobile device, aids in enhancing our services and user experience.
          </p>
          
          {/* <br /> */}
          <p className='pt-5'>
          We may gather additional types of information when you visit and use our Platform:
          </p>
          <ul>
            <li>Details of your Platform usage, including search queries.</li>
            <li>Our server logs automatically capture data like your IP address, browser type, and visit timestamp, aiding in tracking user activity and identifying trends.</li>
            <li>To enhance your experience, we may assign your computer one or more cookies, which can collect information to streamline access and personalize your online interactions.</li>
            <li>Cookies or similar technologies enable us to customize services and ads, analyze trends, monitor user movement on the website, desktop app, and mobile app, and gather demographic data.</li>
            <li>Third-party analytics tools, like Google Analytics, help collect and analyze user information and behavior. This includes demographic and interest details (e.g., age, gender, interests), used for internal business purposes in an aggregated and anonymous manner.</li>
            <li>We also collect certain information such as the URL of your last visited webpage before accessing our Platform, your preferences and settings (e.g., time zone), ads clicked or viewed, duration of visit, and utilized services and features.</li>
          </ul>

          {/* <br /> */}
          <p className='pt-5'>
          We do not knowingly collect personal information from individuals under the age of 18. If such information is obtained, we will adhere to the Children’s Online Privacy Protection Act. Users under 18 must use the Platform under the direct supervision and through the Account of a parent or guardian.
          </p>


          <p className='pt-5'>
          Additionally, we may gather other non-identifying information, such as zip codes, demographic data, and general project-related data. This information, whether obtained from registered or unregistered Users, may be combined for analysis. In certain instances, Identifying Personal Information (such as email addresses) may be converted into Non-Identifying Information for activity and interest identification purposes. However, Siliconverse will treat the combined information as Identifying Personal Information to maintain privacy standards.
          </p>
        </div>

      <div className='pt-0 space-y-10'>
        <div>
          <h3 className='text-[20px] font-bold'>How Siliconverse May Use The Collected Information</h3>
          <p className='text-base my-2'>
            Siliconverse holds a strict policy against sharing any of your Identifying Personal Information 
            or Transactional data with any external entity, except as explicitly outlined in this Privacy Policy. Your Identifying Personal Information and transactional data remain confidential and are not disclosed to third parties, 
            unless you opt to share it with parties beyond our control.
          </p>

          <p>
          Limited details about your physical location are 
          shared with third parties only when you initiate a search for local
          job opportunities on our Platform.
          </p>
          <p className='pt-5'>
          We utilize Identifying Personal Information and other collected data to facilitate your registration with Siliconverse. Furthermore, we may use this information to inform you about employment opportunities and provide requested services or information. 
          Periodically, we may also utilize your Personal Information to send automated email messages or 
          marketing materials regarding our Services.
          </p>
          <p className="pt-5">
          We may utilize information for various purposes including, but not limited to;
          </p>
          <ul className="pt-2">
            <li>Enhancing and tailoring our services to better suit your needs.</li>
            <li>Personalizing your search experience for optimized results.Sending communications, newsletters, marketing materials, and special offers, either directly from Siliconverse or on behalf of third parties.</li>
            <li>Assisting employers in finding candidates that match their requirements.</li>
            <li>Processing payments for services or products ordered via our Platform.</li>
            <li>Customizing advertising and content displayed on our Platform.</li>
            <li>
            Providing periodic updates on our services.</li>
            <li>Facilitating Platform usage, transactions, inquiries, registrations, and other business-related matters.</li>
            <li>Improving customer service by addressing requests efficiently.</li>
            <li>- Managing account preferences and details.</li>
            <li>
            Analyzing Platform usage to enhance our offerings.</li>
            <li>Identifying and preventing fraudulent activities or misuse of our Platform.</li>
            <li>Ensuring legal compliance and conducting investigations when necessary.</li>
            <li>Measuring interest and engagement in our Platform.</li>
            <li>- Short-term customization of ads for contextual relevance.</li>
            <li>Upgrading and enhancing our Platform and services.</li>
            <li>
            Developing new products and services.</li>
            <li>
            Authenticating individual identities and verifying information.</li>
            <li>
            Debugging to identify and rectify errors.</li>
            <li>Conducting audits related to interactions and transactions.
           </li>
            <li> Enforcing agreements and policies.</li>
            <li>Analyzing and improving our business operations.</li>
            <li>Addressing information security needs and protecting Users and Siliconverse.</li>
            <li>Managing legal issues as required by law.</li>

          </ul>
          <p className="pt-5">
          Additionally, your User Profile may be made accessible to all Siliconverse Users and the public. You will have the ability to edit specific details in your User Profile. We may also provide options 
          for you to restrict the visibility of certain content you post on your User Profile, allowing you to control who can view it. You may choose to limit access to your User Profile solely to Siliconverse Users if desired.
          </p>
        </div>

        <UploadResumeInput />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
