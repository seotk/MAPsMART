import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addCount(state, action) {
      console.log("a");
      let num = state.findIndex((a) => a._id === action.payload);
      state[num].count++;
    },
    minusCount(state, action) {
      console.log("a");
      let num = state.findIndex((a) => a._id === action.payload);
      state[num].count--;
    },
    addItem(state, action) {
      // let num = state.findIndex((a) => a._id === action.payload._id);

      // if (num === -1) state.push(action.payload);
      // if (num !== -1) state[num].count += Number(action.payload.count);
      state.push(action.payload);
    },
    deleteItem(state, action) {
      let num = state.findIndex((a) => a.title === action.payload);
      console.log(action.payload);
      state.splice(num, 1);
    },
  },
});
export const { addCount, minusCount, addItem, deleteItem } = cart.actions;
export default cart;
