import PicImg from "../assets/Rectangle 11.svg";
import PicImg1 from "../assets/Rectangle 12.svg";
import { SectionImage } from "../reuse";
import { list1, list2 } from "./list";

function ApplicationProcess() {
	const items = Object.values(list1);
	const items2 = Object.values(list2);
	return (
		<section className=" px-4 w-[90%] py-6 mx-auto space-y-6 ">
			<div className="grid grid-cols-1 gap-6 sm:gap-x-20 sm:grid-cols-2">
				<div className="flex flex-col space-y-6">
					<h1 className="text-[#FF5F15] text-2xl font-bold">
						Application Process
					</h1>
					<SectionImage src={PicImg1} />
					<div className="flex flex-col text-left gap-y-4">
						{/* <span className="">The application process is simple</span> */}
						{items.map((item, index) => (
							<ul key={index} className="list-disc">
								<li>{item.content}</li>
							</ul>
						))}
					</div>
				</div>

				<div className="flex flex-col space-y-6">
					<h1 className="text-[#FF5F15] text-2xl font-bold">
						Program Duration
					</h1>
					<SectionImage src={PicImg} />
					<div className="flex flex-col text-left gap-y-4">
						{items2.map((item, index) => (
							<ul key={index} className="list-disc">
								<li>{item.content}</li>
							</ul>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ApplicationProcess;
