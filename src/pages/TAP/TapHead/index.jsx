import { useEffect } from "react";
import BgImage from "../assets/Frame 2147224585.svg";
import PersonImg from "../assets/Tell Me (1) 1.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeroImage, ApplyButton, applyForm } from "../reuse";


function Taphead() {
	useEffect(() => {
		AOS.init({ duration: 1000 }); // Initialize AOS
	}, []);
	return (
		<section className="bg-[#FF5F15] px-4 py-6 text-white flex flex-col space-y-20">
			<div className="flex flex-col items-center space-y-12">
				<div className="grid items-center grid-cols-1 text-center divide-y-2 divide-gray-100 gap-y-8">
					<div className="grid items-center gap-y-6 grid-cols-1 sm:grid-cols-2 w-[100%]">
						<HeroImage
							className="h-80"
							bgImage={BgImage}
							alt={"person"}
							fgImage={PersonImg}
						/>
						<div  className="w-[100%] flex flex-col space-y-2">
							<h1 className="text-4xl font-semibold text-center justify-evenly sm:text-6xl">
								Talent Accelerator Programme (TAP)
							</h1>
							<p className="text-sm font-semibold leading-10 sm:text-2xl">
								The Talent Accelerator Program (TAP) is an
								innovative internship initiative by Siliconverse
								designed to equip emerging tech talents with the
								practical skills and experience needed to thrive
								in the ever-evolving tech industry.
							</p>
						</div>
						{/* img */}
					</div>
					<p className="text-sm font-normal leading-10 sm:text-2xl">
						{/* <h2 className="sub__text2"> */}
						TAP provides an immersive learning environment where
						talents can work on real-world projects, collaborate
						with Siliconverse team, and fast-track their career
						growth.
					</p>
				</div>
				{/* button */}
				<ApplyButton
					className={
						"text-[#fff] bg-transparent border-[1.5px] border-[#FFFF] font-semibold text-lg w-full sm:w-[30%] p-2 rounded-full text-center"
					}
					href={applyForm}>
					Apply Now!
				</ApplyButton>
			</div>
		</section>
	);
}

export default Taphead;
