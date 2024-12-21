import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

function Footer() {
	return (
		<footer className="bg-[#ff5f15] grid grid-cols-1 divide-y-[1.4px] px-4 py-12 text-center space-y-12 text-white">
			<section className="grid grid-cols-1 space-y-3 text-left">
				<span>About</span>
				<span>Organisation</span>
				<span>Terms</span>
				<span>CV Review Services</span>
				<span>Talent Accelerator Program (TAP)</span>
			</section>
			<section className="flex flex-col space-y-2" >
				<p>Follow us on:</p>
				<p className="flex flex-row justify-between w-[70%] mx-auto">
					<Facebook /> <Instagram /> <Linkedin /> <Twitter />{" "}
					<Youtube />{" "}
				</p>
			</section>
			<section>
				<p>&copy; {new Date().getFullYear()} SiliconVerse</p>
			</section>
		</footer>
	);
}

export default Footer;
