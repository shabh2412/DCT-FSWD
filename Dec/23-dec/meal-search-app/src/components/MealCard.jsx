import React, { useContext, useState } from "react";
import { CountContext } from "../context/countContext";

const MealCard = ({ meal }) => {

  const [individual_meal, set_individual_meal] = useState(meal);

  // const count = useContext(CountContext);
  const { count, set_count } = useContext(CountContext);

  return <>
    <div key={`${individual_meal?.idMeal}`} style={{
      border: "0.5px solid black",
      margin: "10px",
      width: "250px",
      height: "350px",
      borderRadius: "16px"
    }} >
      {/* {individual_meal?.strMeal} */}
      <div style={{
        width: "100%"
      }} >
        <img src={individual_meal?.strMealThumb} alt={individual_meal?.strMeal} style={{
          width: "100%",
          borderTopLeftRadius: "16px",
          borderTopRightRadius: "16px",
        }} />
      </div>
      <div style={{
        padding: "8px",
        position: "relative"
      }} >
        <div style={{
          position: "absolute",
          top: "-33px",
          left: 0,
          backgroundColor: "rgb(0 0 0 / 61%)",
          color: "white",
          width: "100%",
          height: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center"
        }}>
          {individual_meal?.strMeal}
        </div>
        <div>
          {individual_meal?.strCategory}
        </div>
        <div>
          <button
            onClick={() => {
              set_count(prev => prev + 1);
            }} >Add to cart - {count}</button>
        </div>
      </div>
    </div>
  </>;
};

export default MealCard;