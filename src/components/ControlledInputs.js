import { useState } from "react";

const ControlledInputs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [people, setPeople] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("hello")
		if (name && email) {
			const person = { name, email };
			setPeople((people) => {
				return [...people, person];
			});
			setName('')
			setEmail('')
		}
		console.log(people);
	};

	return (
		<>
			<h2>Controlled Inputs</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name : </label>
					<input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="email">Email : </label>
					<input
						type="text"
						id="email"
						value={email}
						name="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<button type="submit">Add Details</button>
			</form>
		</>
	);
};

export default ControlledInputs;
