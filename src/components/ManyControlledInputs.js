import { useState } from "react";

const ManyControlledInputs = () => {
	const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
	const [people, setPeople] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log("hello");
		if (person.firstName && person.email && person.age) {
			const newPerson = { ...person, id: new Date().getTime().toString() };
			setPeople([...people, newPerson]);
			setPerson({ firstName: "", email: "", age: "" });
		}
	};
	// console.log(people, "people");

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPerson({ ...person, [name]: value });
	};

	return (
		<section>
			<h2>Many Controlled Inputs</h2>
			<form>
				<div>
					<label htmlFor="firstName">Name : </label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={person.firstName}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="email">Email : </label>
					<input
						type="text"
						id="email"
						name="email"
						value={person.email}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="age">Age : </label>
					<input
						type="text"
						id="age"
						name="age"
						value={person.age}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" onClick={handleSubmit}>
					Submit Details
				</button>
			</form>
		</section>
	);
};

export default ManyControlledInputs;
