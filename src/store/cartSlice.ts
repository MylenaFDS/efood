import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../modals/cardapio';

interface CartItem {
  id: number;
  nome: string;
  preco: number;
  foto: string;
}

interface CartState {
  items: CartItem[];
  totalAmount: number;
  errorMessage: string | null;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  errorMessage: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<CartItem>) {
      state.items.push(action.payload);
      state.totalAmount += action.payload.preco;
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.totalAmount -= state.items[index].preco;
        state.items.splice(index, 1);
      }
    },
    removeAllItemsFromCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    }
  },
});

export const { addItemToCart, removeItemFromCart, removeAllItemsFromCart } = cartSlice.actions;
export default cartSlice.reducer;



