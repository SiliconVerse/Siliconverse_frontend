import { useCallback, useEffect, useState } from "react";
import ApplicationRow from "./ApplicationRow";
import { handleRequest } from "../../requests/axios";
import { useAuth } from "../../hooks/userAuth";
import { auth } from "../../hooks/auth/firebase";
import ApplicationModal from "../ApplicationModal";
import Spinner from "../spinner";

export default function UserHistory() {
  const { user } = useAuth();
  const [usersApplication, setUsersApplication] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [isAccepted, setIsAccepted] = useState(false);

  const handleReadMore = useCallback((status, message) => {
    if (status === "accepted") {
      setIsAccepted(true);
    } else {
      setIsAccepted(false);
    }
    setModalMessage(message);
    setIsModalVisible(true);
  }, []);

  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    handleRequest("get", `/applications?page=${page}`, auth.currentUser?.accessToken)
      .then((res) => {
        setUsersApplication(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="max-w-screen-2xl py-2 md:px-3">
      {loading && (
        <div className="flex items-center justify-center h-[70vh]">
          <Spinner className={"!text-primaryColor !h-10 !w-10"} />
        </div>
      )}
      {!loading && (
        <div className="overflow-x-auto">
          {/* heading section */}
          <div className="capitalize border-y border-[#FF7F44] flex text-center gap-3 min-w-[45rem] lg:grid lg:grid-cols-7 py-4 md:text-xl text-lg font-semibold w-full">
            <p className="min-w-64 md:col-span-3 lg:text-left lg:px-20">job description</p>
            <p className="min-w-36">location</p>
            <p className="min-w-[4.7rem]">type</p>
            <p className="min-w-20">date</p>
            <p className="min-w-32">status</p>
          </div>

          {/* body section */}
          <div className="py-4 space-y-5">
            {usersApplication &&
              usersApplication.map((application) => (
                <ApplicationRow
                  key={application._id}
                  {...application}
                  handleReadMore={handleReadMore}
                />
              ))}

            {!usersApplication && <p>No Applications Yet</p>}
          </div>
        </div>
      )}
      {isModalVisible && (
        <ApplicationModal
          setState={setIsModalVisible}
          message={modalMessage}
          isAccepted={isAccepted}
        />
      )}
    </section>
  );
}
