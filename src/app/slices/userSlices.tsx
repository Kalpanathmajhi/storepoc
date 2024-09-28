import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Example API call
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  }
);

interface UserState {
  users: Array<any>;
  loading: boolean;
  value: number;
}

const initialState: UserState = {
  users: [],
  loading: false,
  value: 0,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

export const { increment } = userSlice.actions;
export default userSlice.reducer;
