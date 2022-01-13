/** @format */

import React, { useEffect, useState } from "react";

import Recipe from "./Recipe";
import sass from "./sass/Main.scss";

function App() {
	const APP_ID = "fd947bce";
	const APP_key = "f40de5c338c84fc4c185fa33da09198b";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");

	useEffect(() => {
		console.log("Effect has been run");
		getRecipes();
	}, [query]);

	//from state
	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_key}`
		);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};
	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	};

	return (
		<div className='App'>
			<form onSubmit={getSearch} className='Search-form'>
				<input
					type='text'
					className='search-bar'
					value={search}
					onChange={updateSearch}
				/>
				<button className='search-button' type='submit'>
					Search
				</button>
			</form>
			<div className='Results'>
				{recipes.map((recipe) => (
					<Recipe
						//to props
						key={recipe.recipe.label}
						title={recipe.recipe.label}
						dietLabels={
							recipe.recipe.dietLabels.length > 0
								? recipe.recipe.dietLabels
								: "No Data Found"
						}
						dishType={recipe.recipe.dishType}
						calories={recipe.recipe.calories.toFixed(2)}
						image={recipe.recipe.image}
					/>
				))}
			</div>
			{/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
		</div>
	);
}

export default App;
