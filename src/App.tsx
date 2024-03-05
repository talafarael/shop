import React from "react"

import "./App.css"

import {userSlice} from "./store/reducers/UserSlice"
import {useDispatch} from "react-redux"
import {useAppDispatch, useAppSelector} from "./hook/redux"

function App() {
	const {count} = useAppSelector((state) => state.useReducer)
	const {increment} = userSlice.actions
	const dispatch = useAppDispatch()
	console.log(increment(5))
	return (
		<div className='App'>
			<header className='App-header'>j</header>
		</div>
	)
}

export default App
