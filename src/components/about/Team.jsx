import { images } from "../..";

function Team() {
  return (
    <div>
      <div className="text-center mt-14 mb-10">
        <h1 className="text-[1.7rem] font-bold">Meet Our Team</h1>
      </div>
      <div>
        <div>
          <div className="bg-white">
            <div className="flex flex-col lg:flex-row justify-center items-start gap-6">
              <div className="flex-col shadow-xl rounded-lg w-[100%]">
                <img
                  src={images.team1}
                  className="w-full rounded-t-lg"
                  alt=""
                />
                <div className="p-5 py-6">
                  <h1 className="mt-3 text-[#FF5F15] font-semibold text-[18px]">
                    Luka David
                  </h1>
                  <p className="mt-1 font-normal">Founder and CEO</p>
                  <p className="mt-2 font-light text-[15px]">
                    Luka’s passion for technology and human potential aids
                    Siliconverse’s vision. With a background in software
                    engineering, he understands the nuances of matching talent
                    with the right roles.
                  </p>
                </div>
              </div>
              <div className="flex-col shadow-xl rounded-lg w-[100%]">
                <img
                  src={images.team2}
                  className="w-full rounded-t-lg"
                  alt=""
                />
                <div className="p-5 py-6">
                  <h1 className="mt-3 text-[#FF5F15] font-semibold text-[18px]">
                    Ishang Emmanuel
                  </h1>
                  <p className="mt-1 font-normal">Senior Designer</p>
                  <p className="mt-2 font-light text-[15px]">
                    Emmanuel’s expertise lies in designing intuitive platforms.
                    He’s the brain behind our user-friendly interface, making
                    job searches efficient and enjoyable dolorum laboriosam nam
                    perspiciatis recusandae!
                  </p>
                </div>
              </div>
              <div className="flex-col shadow-xl rounded-lg w-[100%]">
                <img
                  src={images.team3}
                  className="w-full rounded-t-lg"
                  alt=""
                />
                <div className="p-5 py-6">
                  <h1 className="mt-3 text-[#FF5F15] font-semibold text-[18px]">
                    Raji Hakeem
                  </h1>
                  <p className="mt-1 font-normal">Senior Developer</p>
                  <p className="mt-2 font-light text-[15px]">
                    With years of experience in web development, Kimball brings
                    creativity and precision to our projects. John is eager to
                    collaborate with this talented team and contribute to our
                    mission amet consectetur adipisicing.
                  </p>
                </div>
              </div>
              <div className="flex-col shadow-xl rounded-lg w-[100%]">
                <img
                  src={images.team4}
                  className="w-full rounded-t-lg"
                  alt=""
                />
                <div className="p-5 py-6">
                  <h1 className="mt-3 text-[#FF5F15] font-semibold text-[18px]">
                    Ogar Faith
                  </h1>
                  <p className="mt-1 font-normal">Human Resources</p>
                  <p className="mt-2 font-light text-[15px]">
                    Faith brings years of experience in recruitment. She’s
                    committed to creating a diverse and inclusive workforce,
                    ensuring that every candidate finds their dream job ipsum
                    dolor sit amet consectetur hic quas!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
