import {PayloadAction, createSlice} from "@reduxjs/toolkit"
import {IUser} from "../../model/IUsers"

interface userState {
	users: IUser[]
	isLoading: boolean
	error: string
	count: number
}

const initialState: userState = {
	users: [],
	isLoading: false,
	error: "",
	count: 0,
}
export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		increment(state, actions: PayloadAction<number>) {
			state.count += actions.payload
		},
	},
})

export default userSlice.reducer
