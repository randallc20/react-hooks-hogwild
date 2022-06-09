import React, {useState} from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogs from "../porkers_data";

function App() {
	const [isGreased, setIsGreased] = useState("All")
	const [sortValue, setSortValue] = useState("All")

	function handleGreased(e){
		setIsGreased(e.target.value)
	}

	function handleSort(e){
		setSortValue(e.target.value)
	}

	return (
		<div className="App">
			<Nav greased={isGreased} setGreased={handleGreased} sortValue={sortValue} setSortValue={handleSort}/>
			<HogList hogs={hogs} greased={isGreased} sortValue={sortValue}/>
		</div>
	);
}

export default App;
