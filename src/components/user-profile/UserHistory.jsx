import { useCallback, useState } from 'react';
import { ReactPortal } from '../../hooks/portal';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { applicationHistory } from '../../utils/jobs';
import { getTimeAgo } from '../../utils/util-functions';
import { Icons } from '../Icons';

export default function UserHistory() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [modalMessage, setModalMessage] = useState('');

  const [isAccepted, setIsAccepted] = useState(false);

  const handleReadMore = useCallback((status, message) => {
    if (status === 'accepted') {
      setIsAccepted(true);
    } else {
      setIsAccepted(false);
    }
    setModalMessage(message);
    setIsModalVisible(true);
  }, []);

  return (
    <section className='max-w-screen-2xl py-2 md:px-3'>
      <div className='overflow-x-scroll'>
        {/* heading section */}
        <div className='capitalize border-y border-[#FF7F44] flex text-center gap-3 min-w-[45rem] lg:grid lg:grid-cols-7 py-4 md:text-xl text-lg font-semibold w-full'>
          <p className='min-w-64 md:col-span-3 lg:text-left lg:px-20'>
            job description
          </p>
          <p className='min-w-36'>location</p>
          <p className='min-w-[4.7rem]'>type</p>
          <p className='min-w-20'>date</p>
          <p className='min-w-32'>status</p>
        </div>

        {/* body section */}
        <div className='py-4 space-y-5'>
          {applicationHistory.map((application) => (
            <ApplicationRow
              key={application.id}
              {...application}
              handleReadMore={handleReadMore}
            />
          ))}
        </div>
      </div>

      {/* read more modal */}

      {isModalVisible ? (
        <ReadMoreModal
          setState={setIsModalVisible}
          message={modalMessage}
          isAccepted={isAccepted}
        />
      ) : null}
    </section>
  );
}

// modal that shows up when read more is clicked
function ReadMoreModal({ setState, message, isAccepted }) {
  const closeModal = () => {
    setState(false);
  };

  const handleDecline = () => {
    // handle decline

    // show toast message?

    // finally close modal
    closeModal();
  };

  const handleAccept = () => {
    // handle accept

    // show toast message?

    // finally close modal
    closeModal();
  };

  return (
    <ReactPortal setState={setState}>
      <div className='bg-white w-5/6 md:w-3/5 flex flex-col justify-center items-center min-h-72 py-10 rounded-sl gap-12 max-w-screen-sm'>
        <p
          className={`${isAccepted ? 'text-[#34A853]' : ''
            } max-w-sm text-center font-semibold`}
        >
          {message}
        </p>

        <div className='flex items-center gap-7'>
          {isAccepted ? (
            <>
              <button
                onClick={handleAccept}
                className='bg-primaryColor py-2 px-4 rounded-sl text-white hover:bg-opacity-80 transition-all duration-200 ease-linear'
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className='bg-[#E1E1E1] py-2 px-4 rounded-sl transition-all duration-200 ease-linear hover:text-primaryColor'
              >
                Decline
              </button>
            </>
          ) : (
            <button
              onClick={closeModal}
              className='transition-all duration-200 ease-linear bg-primaryColor py-2 px-4 rounded-sl text-white hover:bg-opacity-80'
            >
              close
            </button>
          )}
        </div>
      </div>
    </ReactPortal>
  );
}

function ApplicationRow({
  status,
  dateApplied,
  companyLogo,
  jobTitle,
  location,
  category,
  type,
  companyName,
  handleReadMore,
}) {
  // use format "2 days ago"
  const timeAgo = getTimeAgo(dateApplied);

  const modalMessages = {
    accepted: `You've been scheduled to have an interview with the CTO of ${companyName}`,
    pending: 'Your application is still pending',
    declined: 'Your application was declined',
  };

  // pick status design
  const statusDisplay = {
    pending: (
      <p className='bg-primaryColor text-white px-2 py-1 rounded-lg flex items-center gap-2 min-w-min max-w-fit'>
        <Icons.pendingAction />
        <span>Pending</span>
      </p>
    ),
    accepted: (
      <p className='bg-[#34A853] text-white px-2 py-1 rounded-lg min-w-min flex items-center gap-2'>
        <Icons.documentCheck />
        <span>Accepted</span>
      </p>
    ),
    declined: (
      <p className='bg-[#ED1F24] text-white px-2 py-1 rounded-lg min-w-min flex items-center gap-2'>
        <Icons.documentsDeclined />
        <span>Declined</span>
      </p>
    ),
  };

  return (
    <div className='flex gap-3 md:gap-5 lg:gap-7 min-w-[45rem] lg:grid lg:grid-cols-7 items-start'>
      {/* Job description */}
      <div className='flex items-center md:items-start min-w-64 md:col-span-3 gap-3'>
        <img
          src={companyLogo}
          alt={companyName}
          className='border-[0.5px] border-[#9A9A9A] rounded-full w-10 md:w-16'
          width={100}
          height={100}
        />

        <div className='flex flex-col gap-2 max-w-52 md:max-w-[calc(100%-5rem)]'>
          <h4 className='font-medium text-xl max-sm:text-lg truncate'>
            {jobTitle}
          </h4>
          <p className='truncate'>{companyName}</p>
        </div>
      </div>

      {/* Job location and category(remote,hybrid,onsite) */}
      <p className='min-w-36 flex flex-col items-center gap-2 text-center'>
        <span className='max-sm:truncate'>{location}</span>
        <span className='inline-block py-[3px] px-[6px] rounded-lg bg-black text-white capitalize text-sm text-nowrap'>
          {category}
        </span>
      </p>

      {/* Job type (full time/part time) */}
      <p className='min-w-20 text-center'>{type}</p>

      {/* Timeline (date) */}
      <p className='min-w-20 truncate text-center'>{timeAgo}</p>

      {/* Status */}
      <div className='flex items-center'>
        <p  className='text-sm'>{statusDisplay[status]}</p>
        <IoIosInformationCircleOutline size={28}
          className='text-nowrap flex-shrink-0 text-primaryColor underline text-sm transition-all duration-200 ease-in-out hover:opacity-85 hover:text-black'
          onClick={() => handleReadMore(status, modalMessages[status])}
        />
      </div>
    </div>
  );
}
