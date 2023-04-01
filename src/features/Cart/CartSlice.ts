import { createSlice } from "@reduxjs/toolkit";
import Items from "../../Data/Items";
const initialState = {
  cartItems: [],
  items: Items,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    allItems: (state) => {
      state.items = Items;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems?.filter((item) => item?.id !== itemId);
    },
    addToCart: (state, action) => {
      //detecting dublication of items 
      const itemExists = state.cartItems.find(
        (pro) => pro.id == action.payload.id
      );
      if (!itemExists) state.cartItems.push(action.payload);
    },
  },
});

export const { clearCart, removeItem, allItems, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
