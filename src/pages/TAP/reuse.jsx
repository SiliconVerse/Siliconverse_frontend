import { Link } from "react-router-dom";

export const applyForm = "https://forms.gle/zypfC74Lr53kC18K9";

export function HeroImage({ bgImage, fgImage, alt, className }) {
	return (
		<div
			className={`mx-auto bg-no-repeat bg-cover ${className} `}
			style={{ backgroundImage: `url(${bgImage})` }}>
			<img
				src={fgImage}
				alt={alt}
				className="h-[100%] w-[100%] aspect-auto"
			/>
		</div>
	);
}

export function ApplyButton({ href, children, className }) {
	return (
		<Link to={href} className={className}>
			{children}
		</Link>
	);
}

export function SectionImage({ src }) {
	return (
		<div className="w-fit h-fit ">
			<img src={src} alt="pic" className="object-cover aspect-video" />
		</div>
	);
}
