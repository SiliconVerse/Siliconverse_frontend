import { Slider } from "./slider";

function ProgramStructure() {
	return (
		<section className="flex flex-col px-4 w-[90%] mx-auto py-6 space-y-6">
			<div className="space-y-4">
				<h1 className="text-[#FF5F15] text-2xl font-bold">
					Program Structure
				</h1>
				<p className="">
					<strong>TAP</strong> is structured into three phases,
					ensuring a step-by-step build-up of skills and
					responsibilities:
				</p>
			</div>
			<div className="w-auto h-auto">
				<Slider />
			</div>
		</section>
	);
}

export default ProgramStructure;
