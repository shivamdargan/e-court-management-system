import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {};

export const caseSlice = createSlice({
  name: "caseNumber",
  initialState: { value: initialStateValue },
  reducers: {
    setCaseNumber: (state, action) => {
      state.value = action.payload;
    },
    removeCaseNumber: (state) => {
        state.value = initialStateValue;
      },
  },
});

export const {setCaseNumber,removeCaseNumber} = caseSlice.actions

export default caseSlice.reducer;