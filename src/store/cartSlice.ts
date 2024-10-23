import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../modals/cardapio';

interface CartState {
  items: Product[];
  totalAmount: number;
  errorMessage: string | null; // Adiciona um campo para a mensagem de erro
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  errorMessage: null, // Inicializa a mensagem de erro como null
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        state.errorMessage = 'Pedido já adicionado!'; // Define a mensagem de erro se o item já existir
      } else {
        const preco = parseFloat(action.payload.preco.toString()); // Converte para número se necessário
        state.items.push(action.payload);
        state.totalAmount += preco; // Usa o preço convertido
        state.errorMessage = null; // Limpa a mensagem de erro se um novo item foi adicionado
      }
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const itemToRemove = state.items.find(item => item.id === itemId);
      if (itemToRemove) {
        state.items = state.items.filter(item => item.id !== itemId);
        const preco = parseFloat(itemToRemove.preco.toString());
        state.totalAmount -= preco;
      }
    },
    clearErrorMessage: (state) => {
      state.errorMessage = null; // Reseta a mensagem de erro
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearErrorMessage } = cartSlice.actions;
export default cartSlice.reducer;


