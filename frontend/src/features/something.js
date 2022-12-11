import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: "",
};

const somethingSlice = createSlice({
  name: "somthing",
  initialState,
  reducers: {
    sommthing: (state, action) => {},
  },
});

export default something.reducer;
export const {setSearchInput} = something.actions

