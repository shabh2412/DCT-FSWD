import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [user_list, set_user_list] = useState([]);
  const [base_url] = useState(`http://127.0.0.1:3001/`);
  const axiosInstance = axios.create({
    baseURL: base_url
  });

  const get_user_data = async () => {
    try {
      const response = await axiosInstance?.get("/users/");
      const result = await response?.data;
      if (result) {
        set_user_list(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const delete_user_data = async (user_id) => {
    try {
      const result = await axiosInstance.delete(`/users/delete/${user_id}`);
      console.log(result);
      if (result.status === 204) {
        set_user_list(prev => prev?.filter(user => user?._id !== user_id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_user_data();
  }, []);

  return (
    <React.Fragment>
      {
        user_list?.map((user) =>
          <div key={user?._id} style={{
            display: "flex",
            justifyContent: "center",
            gap: "1em",
            padding: "8px",
            alignItems: "center"
          }} >
            {
              Object?.keys(user || {})?.map(key => <p key={`${user?._id}-${key}-${user[key]}`} >{user[key]}</p>)
            }
            <button onClick={() => {
              delete_user_data(user?._id);
            }}>Delete</button>
          </div>
        )
      }
    </React.Fragment>
  );
}

export default App;
