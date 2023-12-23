import React, { useContext } from "react";
import MealCard from "./MealCard";
import { CountContext } from "../context/countContext";

const MealsGrid = ({ my_list = [], set_count }) => {

  const { count } = useContext(CountContext);

  console.log(count);

  return <div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>Meals for today</h1>
      <div>
        Count : {count}
      </div>
    </div>
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      alignItems: "center"
    }} >
      {
        my_list?.map((meal, idx) =>
          <MealCard
            meal={meal}
            key={meal?.idMeal}
          // set_count={set_count}
          />
        )
      }
    </div>
  </div>;
};

export default MealsGrid;