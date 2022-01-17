/** @format */
import React from "react";
import style from "./recipe.module.css";
import { GiRiceCooker } from "react-icons/gi";

const Recipe = ({
	title,
	calories,
	image,
	dishType,
	dietLabels,

	cusinType,
	viewBtn,
}) => {
	return (
		<div className={style.Recipe}>
			<img className={style.Image} src={image} alt='' />
			<div className={style.bgColor}></div>
			<div className={style.Title}>
				<h1>{title}</h1>
			</div>
			<div className={style.Text}>
				<div className={style.Details}>
					<p>
						{" "}
						<span className={style.detalTitle}>Cuisine Type</span> {cusinType}
					</p>
					<p>
						{" "}
						<span className={style.detalTitle}>Calories</span> {calories}
					</p>
					<p>
						<span className={style.detalTitle}>Diet Labels</span>
						{dietLabels}
					</p>
					<p>
						<span className={style.detalTitle}>Dish Type</span>
						{dishType}
					</p>
					<a className={style.viewbtn} href={viewBtn} target='_blank'>
						Let's Cook!{" "}
						<div className={style.cookBtn}>
							<GiRiceCooker />
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Recipe;
