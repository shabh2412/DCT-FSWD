import { legacy_createStore } from "redux";
import { FINISH_LOADING, START_LOADING, UPDATE_AGE, INCREMENT_AGE_ACTION, DECREMENT_AGE_ACTION } from "./type";
const initial_user_data = {
  user_data: {
    name: "rishabh",
    age: 50,
    email: "rishabh@gmail.com",
    designation: "frontend engineer",
    contact: "9876543210",
  },
  state: {
    loading: false,
  }
};

// 1. create reducer 

function user_reducer_function(state = initial_user_data, action) {
  const { type, payload } = action;
  // if(type === "UPDATE_AGE") {
  //   const updated_state = {...state};
  //   updated_state.age = payload;
  //   return updated_state;
  // } 
  // else {
  //   return state;
  // }
  switch (type) {
    case UPDATE_AGE: {
      const updated_state = { ...state };
      updated_state.user_data.age = payload;
      return updated_state;
    }
    case START_LOADING: {
      const updated_state = { ...state };
      updated_state.state.loading = true;
      console.log("started_loading");
      return updated_state;
    }
    case FINISH_LOADING: {
      console.log("finished loading");
      const updated_state = { ...state };
      updated_state.state.loading = false;
      return updated_state;
    }
    case INCREMENT_AGE_ACTION: {
      console.log("incrementing age");
      const updated_state = { ...state };
      updated_state.user_data.age++;
      return updated_state;
    }
    case DECREMENT_AGE_ACTION: {
      const updated_state = { ...state };
      updated_state.user_data.age--;
      return updated_state;
    }
    default:
      return state;
  }
}

// 2. create a store

// legacy_createStore
export const user_reducer = legacy_createStore(user_reducer_function);