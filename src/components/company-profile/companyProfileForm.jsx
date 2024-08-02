import { useState } from "react";
import { ReactPortal } from "../../hooks/portal";
import CompanyModalUpdates from "../company-api-modal/companyModal";
import UploadResumeInput from "../upload-resume-input";

const CompanyProfileForm = () => {
  const [show, setShow] = useState(false);
  function handleSaveClick() {
    setShow(true);
  }
  return (
    <>
      <UploadResumeInput />
      {show && (
        // The Portal can receive the setShow state to close the modal also
        <ReactPortal setState={setShow}>
          {/* This should Recieve a state to rerun the post request when a user clicks on try Again */}
          <CompanyModalUpdates
            status={"loading"}
            setState={setShow}
          />
        </ReactPortal>
      )}
    </>
  );
};
export default CompanyProfileForm;
