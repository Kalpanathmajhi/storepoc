/* eslint-disable */

// src/redux/actions.ts
import { INCREMENT, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "../actionTypes";

// Increment Action
export const increment = () => ({
  type: INCREMENT,
});

// Fetch Users Async Action
export const fetchUsers = () => async (dispatch: any, {
  
} ) => {
  // dispatch({ type: FETCH_USERS_PENDING });

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_USERS_FAILURE });
  }
};
