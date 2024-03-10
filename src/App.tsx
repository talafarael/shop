import {FC, ReactNode, useEffect} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout"

import Main from "./components/hero/main"
import Product from "./components/hero/product"

import Register from "./components/hero/register"
import Login from "./components/hero/login/login"

const App: FC = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route path='/product/:productId' element={<Product />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}
export default App
