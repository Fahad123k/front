import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
};



const todosSlice = createSlice({
  name: "chartData",
  initialState,
  reducers: {
    storeChartData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { storeChartData } = todosSlice.actions;
export default todosSlice.reducer;

export const fetchChartData = () => async (dispatch) => {
  let response = await fetch("http://localhost:5000/fetchdata");
  let data = await response.json();
  console.log("inside data", data.data);
  dispatch(storeChartData(data.data));
};
