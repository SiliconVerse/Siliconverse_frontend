import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Pic from "../assets/programmeimage.svg";
import { SectionImage } from "../reuse";

function ProgrammOverview() {
	useEffect(() => {
		AOS.init({
			duration: 1200, // Animation duration in milliseconds
			offset: 200, // Trigger animations when element is 200px in viewport
			easing: "ease-in-out", // Animation easing
			once: true,
		}); // Initialize AOS
	}, []);

	return (
		<section
			className="flex flex-col w-[90%] mx-auto px-4 py-6 space-y-6  "
			data-aos="fade-up">
			<h1 className="text-2xl font-bold text-[#FF5F15]">
				Program Overview
			</h1>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<SectionImage src={Pic} />

				<div className="flex flex-col space-y-4 ">
					<p className="">
						The Talent Accelerator Program (TAP) by Siliconverse is
						a specialized, hands-on internship that bridges the gap
						between education and real-world experience. Designed
						for aspiring tech professionals, TAP offers a unique
						opportunity to help techies gain experience, collaborate
						on cutting-edge projects and develop market-ready skills
						to become employable.
					</p>
					<p className="">
						The goal is simple: To accelerate your learning, enhance
						your resume, portfolio, and prepare you for a successful
						career in the tech industry.
					</p>
				</div>
			</div>
		</section>
	);
}

export default ProgrammOverview;
