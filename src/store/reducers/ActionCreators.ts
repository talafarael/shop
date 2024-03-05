import axios from "axios"
import {AppDispatch} from "../store"
import {userSlice} from "./UserSlice"
import { IUser } from "../../model/IUsers"

export const fetchUsers = () => async (dispatch: AppDispatch) => {
	try {
		// dispatch(userSlice.actions.usersFetching())
		const response = await axios.get<IUser[]>(
			"https://jsonplaceholder.typicode.com/users"
		)
		dispatch(userSlice.actions.usersFetchingSuccess(response.data))
	} catch (e) {
		dispatch(userSlice.actions.usersFetchingError(e.message))
	}
}
