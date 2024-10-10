import React from "react";
import TalentSocials from "./talentSocials";

function SingleIntern({ intern }) {
  return (
    <div
      className="w-full flex gap-1 boxShadow max-w-sm lg:max-w-md mx-auto rounded-lg overflow-hidden"
      key={intern.id}>
      <aside className="flex-shrink-0">
        <div className="relative w-[160px] md:max-w-[220px] rounded-2xl aspect-square">
          <img
            src={intern.profilePicture}
            alt={intern.firstName}
            className="relative w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1 p-2">
          <p className="capitalize text-primaryColor font-semibold">
            {intern.firstName || intern?.lastName}
          </p>
          <p className="flex flex-col text-sm font-semibold">
            Intership status
            <span className="font-normal text-primaryColor">
              {intern.internship_status}
            </span>
          </p>
          <p className="text-sm">Date joined: {intern.date_joined}</p>
        </div>
      </aside>
      <aside className="w-full font-semibold text-sm flex flex-col items-start h-full gap-2 py-2">
        <TalentSocials userData={intern} />

        <p className="flex flex-col">
          Skillset
          <span className="font-normal text-primaryColor">
            {intern.skillset}
          </span>
        </p>

        <p className="flex flex-col">
          State of Residence
          <span className="font-normal text-primaryColor">
            {intern.stateOfResdidence}
          </span>
        </p>
        <p className="flex flex-col">
          University
          <span className="font-normal text-primaryColor">
            {intern.university}
          </span>
        </p>
        <p className="flex flex-col">
          Degree
          <span className="font-normal text-primaryColor">{intern.degree}</span>
        </p>
      </aside>
    </div>
  );
}

export default SingleIntern;
