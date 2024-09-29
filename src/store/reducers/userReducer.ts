/* eslint-disable */

// src/redux/reducers/userReducer.ts
import {
    INCREMENT,
    FETCH_USERS_PENDING,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
  } from "../actionTypes";
  import { initialState } from "../initialState";
  
  // Traditional Reducer with Switch Case
  export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          value: state.value + 1,
        };
  
      case FETCH_USERS_PENDING:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload,
        };
  
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return state;
    }
  };
  