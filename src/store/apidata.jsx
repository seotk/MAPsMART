// import { createSlice } from "@reduxjs/toolkit";

// const cart = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     setCartData(state, action) {
//       return action.payload;
//     },
//     ...
//   },
// });

// export const { setCartData, ... } = cart.actions;

// export const fetchCartData = () => async (dispatch) => {
//   try {
//     const response = await fetch("http://example.com/cart");
//     const data = await response.json();
//     dispatch(setCartData(data));
//   } catch (error) {
//     console.error("Error fetching cart data:", error);
//   }
// };

// export default cart.reducer;
