import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"

import {IProducts} from "../../components/type/shop"
import { getFetch } from "../../services/getServices"
export interface CounterState {
	value: IProducts[]
}

const initialState: CounterState = {
	value: [],
}

export const fetchUsers = createAsyncThunk(
	"products/fetchUsers",
	async function () {
    getFetch()
  }
)

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		addProducts: (state, action: PayloadAction<IProducts[]>) => {
			state.value = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const {addProducts} = productsSlice.actions

export default productsSlice.reducer
