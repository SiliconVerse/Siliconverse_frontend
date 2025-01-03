import { ApplyButton } from "../reuse";
import SwiperSegment from "./Swiper";
import { applyForm } from "../reuse";

function SuccessStory() {
	return (
		<section className="flex flex-col mx-auto space-y-6 w-[90%] px-4 py-6">
			<div className="space-y-6 sm:text-center">
				<h1 className="text-[#FF5F15] text-2xl font-bold ">
					Success Stories
				</h1>
				<p className="">
					At TAP, we are committed to nurturing talents who go on to
					succeed in various tech fields. Hear from some of our
					previous participants who have transformed their careers
					through the program.
				</p>
			</div>

			{/*Reviews  */}
			<SwiperSegment />

			<div className="flex flex-col space-y-6 ">
				<p className="justify-center text-center ">
					To kickstart your journey with Siliconverse&apos;s Talent
					Accelerator Program (TAP) and build the future.
				</p>
				<ApplyButton
					className={
						"text-[#fff] bg-[#FF5F15] border-[#FF5F15] font-semibold text-lg w-full mx-auto sm:w-[30%] p-2 rounded-full text-center"
					}
					href={applyForm}>
					Apply now
				</ApplyButton>
			</div>
		</section>
	);
}

export default SuccessStory;
