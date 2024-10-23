import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../hooks/auth/firebase";
import internsImageBanner from "../assets/internspageimage.png";
import SingleIntern from "../components/singleIntern";

const Interns = () => {
  const [interns, setInterns] = useState([]);
  // Function to get users by role
  async function getUsersByRole(role) {
    const usersCollection = collection(db, "Users");
    const q = query(usersCollection, where("role", "==", role));

    try {
      const querySnapshot = await getDocs(q);
      const users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return users;
    } catch (error) {
      console.error("Error getting users by role:", error);
    }
  }

  useEffect(() => {
    getUsersByRole("talent").then((users) => {
      setInterns(users);
    });
  }, []);

  return (
    <section>
      <div className="flex flex-col md:flex-row px-5 py-14 gap-3 md:justify-around mx-auto w-full bg-background-color">
        <div>
          <h3 className="font-bold text-xl md:2xl lg:text-3xl max-w-[80%]">
            Get to know your interns in one view
          </h3>
          <p className="my-2 max-w-[80%]">
            Let&#39;s get you started on getting that intern you want.
          </p>
        </div>
        <div className="relative mx-auto max-w-xs lg:max-w-md rounded-2xl ">
          <div className="hidden md:block absolute -left-8 rounded-2xl w-full h-full bg-primaryColor -top-8"></div>
          <img
            src={internsImageBanner}
            alt="interns banner image"
            className="relative w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 border p-5 gap-4 gap-y-6">
        {interns &&
          interns.map((intern) => (
            <SingleIntern
              intern={intern}
              key={intern.id}
            />
          ))}
      </div>
    </section>
  );
};

export default Interns;
