import { useEffect } from "react";
import WCAImg from "../assets/Rectangle 2.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { SectionImage } from "../reuse";
import { textItems } from "./text";

function WhoCanApply() {
	useEffect(() => {
		AOS.init({
			duration: 1200, // Animation duration in milliseconds
			offset: 200, // Trigger animations when element is 200px in viewport
			easing: "ease-in-out", // Animation easing
			once: true,
		}); // Initialize AOS
	}, []);

	const items = Object.values(textItems);
	return (
		<section
			className="flex flex-col w-full space-y-6 bg-[#fdccb5ae]"
			data-aos="fade-up">
			<div  className="w-[90%] mx-auto flex flex-col px-4 py-6">
				<div className="grid grid-cols-1 space-y-4">
					<h1 className="text-[#FF5F15] text-2xl font-bold">
						Who Can Apply?
					</h1>
					{items.map((item, index) => (
						<p key={index} className="">
							<strong>{item.title}</strong>
							{item.content}
						</p>
					))}
				</div>
				<SectionImage src={WCAImg} />
			</div>
		</section>
	);
}

export default WhoCanApply;
