import Inputfield from "./Inputfield";
// import ThumbNails from "./ThumbNails";
import UsePropsComp from "./UsePropsComp";
import UseStateBasic from "./useStateBasics";
import Users from "./Users";
import CreateRemove from "./CreateRemove";
import MainPosts from "./MainPosts";
import ComplexCounter from "./ComplexCounter";
import GitHubUsers from "./GitHubUsers";
import ShortCrctTernary from "./ShortCrct&Ternary";
import ControlledInputs from "./ControlledInputs";
import ManyControlledInputs from "./ManyControlledInputs";

const App = () => {
	return (
		<>
			<ManyControlledInputs />
			<ControlledInputs />
			<ShortCrctTernary />
			<GitHubUsers />
			<ComplexCounter />
			<CreateRemove />
			<UseStateBasic />
			<UsePropsComp />
			<Inputfield />
			{/* <ThumbNails /> */}
			<Users />
			<MainPosts />
		</>
	);
};

export default App;
