/* eslint-disable */

interface UserState {
    users: Array<any>;
    loading: boolean;
    value: number;
  }
  
  export const initialState: UserState = {
    users: [],
    loading: false,
    value: 0,
  };