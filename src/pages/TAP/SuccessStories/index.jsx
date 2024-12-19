import { ApplyButton } from "../reuse";
import SwiperSegment from "./Swiper";

function SuccessStory() {
	const signUp = "/signup";
	return (
		<section className="flex flex-col mx-auto space-y-6 w-[90%]">
			<div>
				<div className="space-y-2">
					<h1 className="font-semibold text-2xl text-[#ff5f15]">
						Success Stories
					</h1>
					<p className="">
						At TAP, we are committed to nurturing talents who go on
						to succeed in various tech fields. Hear from some of our
						previous participants who have transformed their careers
						through the program.
					</p>
				</div>

				{/*Reviews  */}
				<SwiperSegment />
			</div>

			<div className="flex flex-col space-y-4 ">
				<p className="">
					To kickstart your journey with Siliconverse&apos;s Talent
					Accelerator Program (TAP) and build the future.
				</p>
				<ApplyButton
					className={
						"text-[#fff] bg-[#FF5F15] border-[#FF5F15] font-semibold text-lg w-full sm:w-[30%] p-2 rounded-full text-center mx-auto"
					}
					href={signUp}>
					Apply now
				</ApplyButton>
			</div>
		</section>
	);
}

export default SuccessStory;
