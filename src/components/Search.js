import { useState } from "react";
const Search = ({ onFormSubmit }) => {
	const [term, setTerm] = useState("");
	const onSubmit = (e) => {
		e.preventDefault();
		onFormSubmit(term);
	};
	return (
		<div className="search-bar ui segment">
			<form className="ui form" onSubmit={onSubmit}>
				<div className="ui field">
					<label>Video Search</label>
					<input
						type="text"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
};

export default Search;
