/** @format */
import React from "react";

export const Recipe = ({
	title,
	calories,
	image,
	dishType,
	dietLabels,
	ingredients,
}) => {
	return (
		<div>
			<img src={image} alt='' />
			<h1>{title}</h1>
			<p>{calories}</p>
			<p>{dietLabels}</p>
			<p>{dishType}</p>
			<ol>
				{ingredients.map((ingredient) => (
					<li>{ingredient.text}</li>
				))}
			</ol>
		</div>
	);
};
export default Recipe;
