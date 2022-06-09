import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({greased, setGreased, sortValue, setSortValue}) => {

	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<select value={greased} onChange={setGreased}>
				<option value='All'>All</option>
				<option value='Greased'>Greased</option>
				<option value='Not Greased'>Not Greased</option>
			</select>
			<select value={sortValue} onChange={setSortValue}>
			<option value='ALL'>All</option>
				<option value='Weight'>Weight</option>
				<option value='Name'>Name</option>
			</select>
		</div>
	);
};

export default Nav;
