import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item, InitialItemsState } from '../../interfaces/Item'

const initialState: InitialItemsState = {
  data: [],
  isLoading: false,
  isError: false,
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
      addItems: (state, { payload }: PayloadAction<Item[]>) => {
        return { ...state, data: payload.map(i => ({ ...i, count: 1 })) }
      },
      setError: (state) => {
        return { ...state, isError: true }
      },
      setLoading: (state) => {
        return { ...state, isLoading: !state.isLoading }
      },
      addItem: (state, { payload }: PayloadAction<number>) => {
        return { ...state, data: state.data.map(i => i.id === payload ? { ...i, count: i.count + 1} : i) };
      },
      removeItem: (state, { payload }: PayloadAction<number>) => {
        return { ...state, data: state.data.map(i => i.id === payload ? { ...i, count: i.count - 1} : i) }
      },
      deleteItem:(state, { payload }: PayloadAction<number>) => {
        return {...state, data: state.data.filter(i => i.id !== payload)}
      },
    },
})

export const {  addItems, setError, setLoading, addItem, removeItem, deleteItem } = itemsSlice.actions

export default itemsSlice.reducer
