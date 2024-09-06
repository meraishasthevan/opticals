import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    selectedCard: null,
    items: [],
  },
  reducers: {
    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },
    addToCart: (state, action) => {
      state.items.push(action.payload); 
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { setSelectedCard, addToCart, removeFromCart, clearCart } = cardSlice.actions;
export default cardSlice.reducer;
