import PicImg from "../assets/Rectangle 11.svg";
import PicImg1 from "../assets/Rectangle 12.svg";
import { SectionImage } from "../reuse";
import { list1, list2 } from "./list";

function ApplicationProcess() {
	const items = Object.values(list1);
const items2 = Object.values(list2)
	return (
		<section className="flex flex-col px-4 w-[90%] py-6 mx-auto space-y-6">
			<div className="">
				<SectionImage src={PicImg1} />
				<div className="grid grid-cols-1 text-left gap-y-4">
					<h1 className="text-[#FF5F15] text-2xl font-bold">
						Application Process
					</h1>
					<span className="">The application process is simple</span>
					{items.map((item, index) => (
						<ul key={index} className="list-disc">
							<li>{item.content}</li>
						</ul>
					))}
				</div>
			</div>

			<div className="">
				<SectionImage src={PicImg} />
				<div className="grid grid-cols-1 text-left gap-y-4">
					<h1 className="text-[#FF5F15] text-2xl font-bold">
						Program Duration
					</h1>
					{items2.map((item, index) => (
						<ul key={index} className="list-disc">
							<li>{item.content}</li>
						</ul>
					))}
				</div>
			</div>
		</section>
	);
}

export default ApplicationProcess;
