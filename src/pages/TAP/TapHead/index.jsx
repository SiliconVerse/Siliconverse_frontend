import { useEffect } from "react";
import { Link } from "react-router-dom";
import BgImage from '../assets/Frame 2147224585.svg'
import PersonImg from "../assets/Tell Me (1) 1.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function Taphead() {
	useEffect(() => {
		AOS.init({ duration: 1000 }); // Initialize AOS
	}, []);
	const applyForm = "https://forms.gle/zypfC74Lr53kC18K9";
	return (
		<section className="bg-[#FF5F15] px-4 py-6 text-white flex flex-col space-y-20">
			<div className="flex flex-col items-center space-y-12">
				<h1 className="text-2xl font-semibold text-center sm:text-6xl">
					Talent Accelerator Programme (TAP)
				</h1>
				<div className="grid grid-cols-1 divide-y-2 divide-gray-700 gap-y-8">
					<p className="text-sm font-normal leading-10 sm:text-2xl">
						The Talent Accelerator Program (TAP) is an innovative
						internship initiative by Siliconverse designed to equip
						emerging tech talents with the practical skills and
						experience needed to thrive in the ever-evolving tech
						industry.
					</p>
					<p className="text-sm font-normal leading-10 sm:text-2xl">
						{/* <h2 className="sub__text2"> */}
						TAP provides an immersive learning environment where
						talents can work on real-world projects, collaborate
						with Siliconverse team, and fast-track their career
						growth.
					</p>
				</div>
				{/* button */}
				<Link
					to={applyForm}
					className="text-[#FF5F15] bg-[#FFFF] border-[#FFFF] font-semibold text-lg w-[70%] sm:w-[30%] p-2 rounded-lg text-center ">
					Apply Now
				</Link>
			</div>

			{/* img */}
			<div
				className="mx-auto bg-no-repeat bg-cover "
				style={{backgroundImage: `url(${BgImage})`}}>
				<img src={PersonImg} alt="pi" />
			</div>
		</section>
	);
}

export default Taphead;
