// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Certifique-se de que o caminho está correto

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // outros reducers...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

