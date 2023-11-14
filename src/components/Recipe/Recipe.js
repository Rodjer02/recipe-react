import React from "react";

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div
      style={{
        position: "relative",
        "background-image": `url(${image})`,
        "background-size": "cover",
        width: "300px",
        height: "300px",
        overflow: "hidden",
        "box-shadow": "0px 2px 11px 6px",
      }}
    >
      <div className="recipe-text">
        <h1>{title}</h1>
        <ol>
          {ingredients.map((ingredient) => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
        <p>calories: {calories.toFixed()}</p>
      </div>

      {/* <img src={image} alt="" /> */}
    </div>
  );
}
