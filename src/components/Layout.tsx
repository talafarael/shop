import {FC, ReactNode, useEffect} from "react"
import Head from "./header"
import NavBar from "./navBar"

import {useDispatch} from "react-redux"
import { getFetch } from "../services/getServices"
import { addProducts } from "../store/reducers/UserSlice"
interface ILayout {
	children: ReactNode
}

const Layout: FC<ILayout> = ({children}) => {
	const dispatch = useDispatch();
	
	const fetchData = async () => {
		const fetchedData = await getFetch()


		dispatch(addProducts(fetchedData.products))
	
	}
	useEffect(() => {
		fetchData()
	}, [])
	return (
		<div className= 'bg-cyan-600 h-screen'>
			<Head />

			<NavBar/>
			<div>{children}</div>
		</div>
	)
}

export default Layout
