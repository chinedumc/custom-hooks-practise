import { useState } from "react";

const ManyControlledInputs = () => {
	const [person, setPerson] = useState({ firstName: "", email: "", age: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("hello");
	};

	return (
		<section>
			<h2>Many Controlled Inputs</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name : </label>
					<input type="text" id="name" name="name" value={person.firstName} />
				</div>
				<div>
					<label htmlFor="email">Email : </label>
					<input type="text" id="email" name="email" value={person.email} />
				</div>
				<div>
					<label htmlFor="age">Age : </label>
					<input type="text" id="age" name="age" value={person.age} />
				</div>
				<button type="submit">Submit Details</button>
			</form>
		</section>
	);
};

export default ManyControlledInputs;
