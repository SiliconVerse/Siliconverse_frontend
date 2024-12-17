import Taphead from "./TapHead";
import ProgrammOverview from "./ProgramOverview";
import KeyObj from "./keyObj";
import ProgramStructure from "./ProgramStructure";
import WhoCanApply from "./WCA";
import ApplicationProcess from "./Process";
import SuccessStory from "./SuccessStories";

function TalentAcceleratorProgram() {
	// const main__styles = () =>{
	//     backgroundColor: ''
	// }
	return (
		<section className="flex flex-col w-full p-0 m-0 mx-auto">
			<Taphead />
			<ProgrammOverview />
			<KeyObj />
			<ProgramStructure />
			<WhoCanApply />
			<ApplicationProcess />
			<SuccessStory />
		</section>
	);
}

export default TalentAcceleratorProgram;
