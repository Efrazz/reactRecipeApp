/** @format */

import React, { useEffect, useState } from "react";
import SearchBtnSound from "../src/assets/Clicking-sound-effect.mp3";
import { FaSearch } from "react-icons/fa";

import Recipe from "./Recipe";
import sass from "./sass/Main.scss";

function App() {
	const API_ID = "fd947bce";
	const API_key = "f40de5c338c84fc4c185fa33da09198b";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");

	useEffect(() => {
		getRecipes();
	}, [query]);

	let BtnAudio = new Audio(SearchBtnSound);
	BtnAudio.volume = 0.4;

	const playSound = () => {
		BtnAudio.play();
	};

	//from state
	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_key}&from=0&to=41`
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
		playSound();
	};

	return (
		<div className='App'>
			<form onSubmit={getSearch} className='Search-form'>
				<div className='Search-formWrap'>
					<input
						placeholder='Search for Recipes...'
						type='text'
						className='search-bar'
						value={search}
						onChange={updateSearch}
					/>
					<button className='search-button' type='submit'>
						<FaSearch />
					</button>
				</div>
				<div className='ResultsText'>Your Search Results:</div>
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
						cusinType={
							recipe.recipe.cuisineType[0].charAt(0).toUpperCase() +
							recipe.recipe.cuisineType[0].slice(1)
						}
						dishType={recipe.recipe.dishType}
						calories={recipe.recipe.calories.toFixed(2)}
						image={recipe.recipe.image}
						viewBtn={recipe.recipe.url}
						source={recipe.recipe.source}
					/>
				))}
			</div>
			{/* <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1> */}
		</div>
	);
}

export default App;
