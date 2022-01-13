/** @format */
import React from "react";
import style from "./recipe.module.css";

const Recipe = ({
	title,
	calories,
	image,
	dishType,
	dietLabels,
	ingredients,
}) => {
	return (
		<div className={style.Recipe}>
			<img className={style.Image} src={image} alt='' />
			<div className={style.Text}>
				<div className={style.Title}>
					<h1>{title}</h1>
				</div>
				<div className={style.Details}>
					<p>
						{" "}
						<span className={style.detalTitle}>Calories</span>{" "}
						{calories.toLowerCase()}
					</p>
					<p>
						<span className={style.detalTitle}>Diet Labels</span>
						{dietLabels.toLowerCase()}
					</p>
					<p>
						<span className={style.detalTitle}>Dish Type</span>
						{dishType.toLowerCase()}
					</p>
				</div>
			</div>
		</div>
	);
};
export default Recipe;
