import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user_age_selector, user_data_selector, user_update_loading_selector } from '../redux/user_selectors';
import { useEffect } from 'react';
import { DECREMENT_AGE_ACTION, FINISH_LOADING, INCREMENT_AGE_ACTION, START_LOADING } from '../redux/type';

const UserData = () => {
  const user = useSelector(user_data_selector);

  const age = useSelector(user_age_selector);

  const loading = useSelector(user_update_loading_selector);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  const dispatch = useDispatch();

  const increment_dispatch = () => {
    dispatch({
      type: START_LOADING,
    });
    setTimeout(() => {
      dispatch({
        type: INCREMENT_AGE_ACTION
      });
    }, 2000);
    setTimeout(() => {
      dispatch({
        type: FINISH_LOADING
      });
    }, 4000);
  };
  const decrement_dispatch = () => {
    dispatch({
      type: DECREMENT_AGE_ACTION
    });
    // user.age = user.age - 1;
  };

  return (
    <div>
      <p>{user?.name}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={decrement_dispatch} >-</button>
        <p>{age}</p>
        <button onClick={increment_dispatch}>+</button>
      </div>
    </div>
  );
};

export default UserData;