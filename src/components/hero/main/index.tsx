import {getFetch} from "../../../services/getServices"
import ProductsList from "../../ProductsList"

import {useEffect, useState} from "react"
import {IProducts} from "../../type/shop"
import {useDispatch} from "react-redux"
import {addProducts} from "../../../store/reducers/UserSlice"

function Main() {
	return (
		<div className='App'>
			<div>
				<ProductsList />
			</div>
		</div>
	)
}

export default Main
