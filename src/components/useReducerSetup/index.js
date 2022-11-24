import { useReducer, useState } from "react";
import Modal from "./Modal";

const reducer = (state, action) => {};

const defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: "Hello World",
};

const IndexJS = () => {
	const [name, setName] = useState("");
	const [state, dispatch] = useReducer(reducer, defaultState);

	return (
		<>
			{state.isModalOpen && <Modal />}
			<form>
				<div>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button type="submit">Add</button>
			</form>
			{state.people.map((person) => {
				return (
					<div key={person.id}>
						<h4>{person.name}</h4>
					</div>
				);
			})}
		</>
	);
};

export default IndexJS;
