import Taphead from "./TapHead";
import ProgrammOverview from "./ProgramOverview";
import KeyObj from "./keyObj";
import ProgramStructure from "./ProgramStructure";
import WhoCanApply from "./WCA";
import ApplicationProcess from "./Process";
import SuccessStory from "./SuccessStories";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function TalentAcceleratorProgram() {
	// const main__styles = () =>{
	//     backgroundColor: ''
	// }
	return (
		<section className="flex flex-col w-full p-0 m-0">
			<Navbar />
			<section className="space-y-20">
				<section className="" >
				<Taphead />	
				</section> 
				<ProgrammOverview />
				<KeyObj />
				<ProgramStructure />
				<WhoCanApply />
				<ApplicationProcess />
				<SuccessStory />
			</section>

			<Footer />
		</section>
	);
}

export default TalentAcceleratorProgram;
