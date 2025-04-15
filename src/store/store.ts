import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../reducer/cartSlice'
import { cartApi } from '../reducer/cartApi' // Certifique-se de que o caminho está correto

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [cartApi.reducerPath]: cartApi.reducer // Adiciona o reducer do RTK Query
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartApi.middleware), // Adiciona o middleware do RTK Query
  devTools: true // Habilita o Redux DevTools
})

// Definições de tipos para facilitar o uso no Redux
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
