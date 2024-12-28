import { useEffect } from "react";
import BgImage from "/bg1.svg";
import PersonImg from "/person.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeroImage, ApplyButton, applyForm } from "../reuse";

function Taphead() {
	useEffect(() => {
		AOS.init({ duration: 1000 }); // Initialize AOS
	}, []);
	return (
		<section className="bg-[#FF5F15] px-4 pt-32 sm:pt-16 pb-12 text-white space-y-20">
			<div className="flex flex-col items-center space-y-20">
				<div className="grid items-center justify-start grid-cols-1 text-start sm:grid-cols-2 gap-y-8">
					<HeroImage
						className="h-80 sm:h-96"
						bgImage={BgImage}
						alt={"person"}
						fgImage={PersonImg}
					/>
					<div className="sm:order-first grid items-center gap-y-6 grid-cols-1 divide-y-2 divide-gray-100 w-[100%]">
						<div className="w-[100%] flex flex-col space-y-12">
							<h1 className="text-4xl font-semibold text-center sm:text-left justify-evenly ">
								Talent Accelerator Programme (TAP)
							</h1>
							<p className="text-sm font-semibold leading-10 sm:text-base">
								The Talent Accelerator Program (TAP) is an
								innovative internship initiative by Siliconverse
								designed to equip emerging tech talents with the
								practical skills and experience needed to thrive
								in the ever-evolving tech industry.
							</p>
						</div>
						<p className="text-sm font-thin leading-10 sm:text-base">
							{/* <h2 className="sub__text2"> */}
							TAP provides an immersive learning environment where
							talents can work on real-world projects, collaborate
							with Siliconverse team, and fast-track their career
							growth.
						</p>{" "}
					</div>
				</div>
				{/* button */}
				<ApplyButton
					className={
						"text-[#fff] sm:bg-white sm:text-[#FF5F15] bg-transparent border-[1.5px] border-[#FFFF] font-semibold text-lg w-full sm:w-[30%] p-2 rounded-full text-center"
					}
					href={applyForm}>
					Apply Now!
				</ApplyButton>
			</div>
		</section>
	);
}

export default Taphead;
