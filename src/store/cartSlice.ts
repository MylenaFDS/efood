// store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../modals/cardapio';

interface CartState {
  items: Product[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
        const preco = parseFloat(action.payload.preco.toString()); // Converta para número se necessário
        state.items.push(action.payload);
        state.totalAmount += preco; // Use o preço convertido
      },      
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
