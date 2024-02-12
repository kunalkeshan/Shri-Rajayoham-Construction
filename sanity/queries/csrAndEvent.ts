// Dependencies
import { groq } from 'next-sanity';

const CSR_AND_EVENT = {
	getAll: groq`*[_type == "csrAndEvent"]{ ... } | order(dateOccurred desc)`,
};

export default CSR_AND_EVENT;
