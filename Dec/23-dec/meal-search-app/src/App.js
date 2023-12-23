import React, { useContext, useEffect, useState } from 'react';
import MealsGrid from './components/MealsGrid';
import { ContextProvider } from './context/countContext';
import { ThemeContext } from './context/themeContext';

import "./App.css";

const App = () => {

  const { theme, toggle_theme } = useContext(ThemeContext);

  // const get_data = () => {
  //   fetch(`https://www.themealdb.com/api/json/kokoov1/1/search.php?s=`)
  //     .then(
  //       (res) => {
  //         return res.json();
  //       }
  //     ).then(
  //       (result) => {
  //         console.log(result);
  //       }
  //     ).catch(err => {
  //       console.log(`error occured`, err);
  //     });
  // };

  const [meal_data, set_meal_data] = useState([]);

  const get_data = async () => {
    /* try catch syntax */
    // try {}
    // catch (err) {}

    try {
      const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=cake');
      const result = await res.json();
      set_meal_data(result?.meals);
    }
    catch (err) {
      console.log(`Handling error!`);
      console.log(err);
    }
  };

  // get_data();

  useEffect(() => {
    get_data();
  }, []);

  useEffect(() => {
    console.log(meal_data);
  }, [meal_data]);

  return (
    <div className={`${theme}`} >
      <button onClick={toggle_theme} >{theme === "light" ? "dark" : theme}</button>
      <MealsGrid my_list={meal_data}
      // set_count={set_count}
      />
    </div>
  );
};

export default App;