import React, { useEffect, useState } from 'react';

const SimpleClick = () => {
  const [clicks, set_clicks] = useState(0);

  const increment = () => {
    set_clicks(prev => prev + 1);
  };
  const decrement = () => {
    set_clicks(prev => prev - 1);
  };

  const [is_even, set_is_even] = useState(clicks % 2 === 0);

  useEffect(() => {
    // console.log("click", clicks);
    set_is_even(clicks % 2 === 0);
    // fetch_data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicks]);
  return (
    <div>
      <div style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <div>
          {
            // Conditional Rendering - Role based access control
          }
          {
            is_even && "ADMIN"
          }
          {
            is_even ? "Admin" : "Viewer"
          }
        </div>
        <p>{clicks}</p>
        <div style={{ display: "flex", gap: "4px" }}>
          <button onClick={increment} >+</button>
          <button onClick={decrement} >-</button>
        </div>
      </div>
    </div>
  );
};

export default SimpleClick;