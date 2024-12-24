
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="bg-[#fdccb5ae]/20 fixed w-full z-20 backdrop-blur-md p-4">
			<p className="text-2xl font-bold text-black">
				<Link to={'/'} >
					Siliconverse
				</Link>
			</p>
		</header>
	);
}
