import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type CartState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CartState = {
  itens: [],
  favoritos: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      if (!state.itens.some((p) => p.id === action.payload.id)) {
        state.itens = [...state.itens, action.payload] // Usa spread para evitar mutação direta
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((p) => p.id !== action.payload)
    },
    favoritar: (state, action: PayloadAction<Produto>) => {
      const index = state.favoritos.findIndex((p) => p.id === action.payload.id)
      if (index !== -1) {
        state.favoritos = state.favoritos.filter(
          (p) => p.id !== action.payload.id
        )
      } else {
        state.favoritos = [...state.favoritos, action.payload]
      }
    }
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho, favoritar } =
  cartSlice.actions
export default cartSlice.reducer
