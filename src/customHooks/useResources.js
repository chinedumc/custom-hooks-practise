import { useState, useEffect } from "react";
import axios from "axios";

const useResources = (resourceName) => {
	const [resources, setResources] = useState([]);

	const fetchResponse = async (resourceName) => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/${resourceName}`
		);
		setResources(response.data);
	};

	useEffect(() => {
		fetchResponse(resourceName);
	}, [resourceName]);

	return resources;
};

export default useResources