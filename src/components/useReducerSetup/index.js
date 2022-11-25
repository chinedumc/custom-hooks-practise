import { useReducer, useState } from "react";
import Modal from "./Modal";
import {reducer} from './reducer'


const defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: "",
};

const IndexJS = () => {
	const [name, setName] = useState("");
	const [state, dispatch] = useReducer(reducer, defaultState);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (name) {
      const newItem = {id: new Date().getTime().toString(), name}
      dispatch({type:"ADD_ITEM", payload:newItem})
      setName('')
		} else {
      dispatch({type: 'NO_VALUE'})
		}
	};

  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})
  }

	return (
		<>
			<h2>Use Reducer</h2>
			{state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
			<form onSubmit={handleSubmit}>
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
            <button onClick={()=> dispatch({type:'REMOVE_ITEM', payload:person.id})}>Remove Item</button>
					</div>
				);
			})}
		</>
	);
};

export default IndexJS;
