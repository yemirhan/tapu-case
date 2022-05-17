import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export interface CartState {
  items: Item[],
  selectedItems: Record<string, number>,
  loading: boolean,
  last_updated: number
}

export type Item = {
  createdAt: Date,
  description: string,
  distance: number,
  id: string,
  image: string,
  name: string,
  point: number,
  price: number,

}
const initialState: CartState = {
  items: [],
  selectedItems: {},
  loading: true,
  last_updated: 0,
}
export const fetchItemsFromServer = createAsyncThunk(
  'cart/fetchItemsFromServer',
  () =>
    axios
      .get('https://6283bc6f38279cef71dbab37.mockapi.io/items')
      .then((response) => response.data)
      .catch((error) => error)
)
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      state.selectedItems[action.payload.id] = state.selectedItems[action.payload.id] ? state.selectedItems[action.payload.id] + 1 : 1
    },
    removeFromCart: (state, action: PayloadAction<Item>) => {
      state.selectedItems[action.payload.id] = state.selectedItems[action.payload.id] ? state.selectedItems[action.payload.id] - 1 : 0
      if (state.selectedItems[action.payload.id] === 0) {
        delete state.selectedItems[action.payload.id]
      }
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchItemsFromServer.fulfilled, (state, action) => {
      // Add user to the state array
      state.items = action.payload
      state.loading = false
      state.last_updated = Date.now()
    })
  },
})


export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer