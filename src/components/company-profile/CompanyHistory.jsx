import { useSearchParams } from "react-router-dom";
import ApplicantsDetails from "./applicants-details";
import Applications from "./applications";
import { useEffect } from "react";
import { handleSubmit } from "../../requests/axios";

export default function CompanyHistory() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    handleSubmit("get", "/applications")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Load Error", err);
      });
  }, []);

  const applicantsId = searchParams.get("id");

  const viewApplicantsDetails = (id) => {
    setSearchParams({ tab: "applications", id });
  };

  return (
    <>
      {applicantsId ? (
        <ApplicantsDetails id={applicantsId} />
      ) : (
        <Applications
          handleViewApplicantDetails={viewApplicantsDetails}
        />
      )}
    </>
  );
}
