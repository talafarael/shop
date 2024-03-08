import {FC, ReactNode, useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout"
import {getFetch} from "./services/getServices"
import Main from "./components/hero/main"
import Product from "./components/hero/product"
import { useDispatch } from "react-redux"
import { addProducts } from "./store/reducers/UserSlice"
import Register from "./components/hero/register"
import Login from "./components/hero/login/login"


const App: FC = () => {
	const dispatch = useDispatch();
	
	const fetchData = async () => {
		const fetchedData = await getFetch()


		dispatch(addProducts(fetchedData.products))
	
	}
	useEffect(() => {
		fetchData()
	}, [])
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/register' element={<	Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/product/:productId' element={<Product />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}
export default App
