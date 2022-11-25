export const reducer = (state, action) => {
	// console.log(state.people, 'stat');
	if (action.type === "ADD_ITEM") {
		const newPeople = [...state.people, action.payload];
		return {
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: "testing modal",
		};
	}
	if (action.type === "NO_VALUE") {
		return {
			...state,
			isModalOpen: true,
			modalContent: "Please enter a value",
		};
	}
	if (action.type === "CLOSE_MODAL") {
		return { ...state, isModalOpen: false };
	}
	if (action.type === "REMOVE_ITEM") {
		const peopleLeft = state.people.filter(
			(person) => person.id !== action.payload
		);
		return {
			people: peopleLeft,
			isModalOpen: true,
			modalContent: "Item Removed",
		};
	}
	// return state
	throw new Error("no matching action type");
};

