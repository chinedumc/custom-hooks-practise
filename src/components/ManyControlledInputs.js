import { useState } from "react";

const ManyControlledInputs = () => {
	const [person, setPerson] = useState({ firstName: "", email: "", age: "" });

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("hello");
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name : </label>
					<input type="text" id="name" value={person.firstName} />
				</div>
				<div>
					<label htmlFor="email">Email : </label>
					<input type="text" id="email" value={person.email} />
				</div>
				<div>
					<label htmlFor="age">Age : </label>
					<input type="text" id="age" value={person.age} />
				</div>
				<button type="submit">Submit Details</button>
			</form>
		</section>
	);
};

export default ManyControlledInputs;
