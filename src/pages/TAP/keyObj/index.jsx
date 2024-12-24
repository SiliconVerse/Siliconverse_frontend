import { listItems } from "./list";

function KeyObj() {
	const items = Object.values(listItems);
	return (
		<section className="flex flex-col mx-auto w-[90%] px-4 py-6 space-y-4">
			<h1 className="text-[#FF5F15] text-2xl font-bold">
				Key Objectives
			</h1>
			<div className="grid grid-cols-1 text-left gap-y-4">
				{items.map((item, index) => (
					<ul key={index}>
						<li>
							<strong>{item.title}</strong>
							{item.content}
						</li>
					</ul>
				))}
			</div>
		</section>
	);
}

export default KeyObj;
