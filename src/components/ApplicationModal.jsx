import React from "react";
import { ReactPortal } from "../hooks/portal";

function ApplicationModal({ setState, message, isAccepted }) {
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
      <div className="bg-white w-5/6 md:w-3/5 flex flex-col justify-center items-center min-h-72 py-10 rounded-sl gap-12 max-w-screen-sm">
        <p className={`${isAccepted ? "text-[#34A853]" : ""} max-w-sm text-center font-semibold`}>
          {message}
        </p>

        <div className="flex items-center gap-7">
          {isAccepted ? (
            <>
              <button
                onClick={handleAccept}
                className="bg-primaryColor py-2 px-4 rounded-sl text-white hover:bg-opacity-80 transition-all duration-200 ease-linear"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="bg-[#E1E1E1] py-2 px-4 rounded-sl transition-all duration-200 ease-linear hover:text-primaryColor"
              >
                Decline
              </button>
            </>
          ) : (
            <button
              onClick={closeModal}
              className="transition-all duration-200 ease-linear bg-primaryColor py-2 px-4 rounded-sl text-white hover:bg-opacity-80"
            >
              close
            </button>
          )}
        </div>
      </div>
    </ReactPortal>
  );
}

export default ApplicationModal;
