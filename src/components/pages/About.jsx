// import React from 'react'

import Aboutus from "../about/Aboutus";
import Team from "../about/Team";
import Values from "../about/Values";

const About = () => {
  return (
    <div>
      <div className="px-6 md:px-48 my-8">
        <Aboutus />
        <Team />
        <Values />

        <div className="mt-10">
          <h2 className="text-[#FF5F15] text-[19px] font-bold">
            Join the Siliconverse Community
          </h2>
          <p className="text-[17px] mt-2">
            Ready to explore new opportunities? Join Siliconverse today and
            unlock your potential!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
