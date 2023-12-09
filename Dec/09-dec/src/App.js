import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [clicks, set_clicks] = useState(0);

  const increment = () => {
    set_clicks(prev => prev + 1);
  };
  const decrement = () => {
    set_clicks(prev => prev - 1);
  };

  const [is_loading, set_is_loading] = useState(clicks % 2 === 0);

  // useEffect - without this, the is_even state won't update

  const fetch_data = async () => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await (res.json());
      console.log(data);
    } catch (error) {
      console.log({ error });
    }
    finally {
      set_is_loading(false);
    }
  };

  useEffect(() => {
    // console.log("click", clicks);
    set_is_loading(clicks % 2 === 0);
    // fetch_data();
  }, [clicks]);

  useEffect(() => {
    if (is_loading) {
      fetch_data();
    }
  }, [is_loading]);

  return <div style={{
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }}>
    <p>
      {clicks}
    </p>
    <div style={{ display: "flex", gap: "4px" }}>
      <button onClick={increment} >+</button>
      <button onClick={decrement} >-</button>
    </div>
    {/* <div>
      <p>Is it even?</p>
      <p>{is_loading ? "yes" : "no"}</p>
    </div> */}
    {
      is_loading ? <img alt="loading-gif" src="https://cdn.dribbble.com/users/24447/screenshots/1201310/inkling_spinner.gif" /> : ""
    }
  </div>;
}

export default App;