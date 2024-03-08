import {useEffect, useState} from "react"
import {getFetch} from "../services/getServices"
import {IProducts} from "./type/shop"
import {useSelector} from "react-redux"
import {RootState} from "../store/store"
interface IProductsListProps {
	Products: IProducts[] // An array of IProduct
}
const ProductsList = () => {
	const Products = useSelector(
		(state: RootState) => state.productsReducer.value
	)

	return (
		<div className='ml-20 grid grid-cols-5 '>
			{Products.map((product) => (
				<a
					href={"product/" + product._id}
					key={product._id}
					className='mt-10  bg-cyan-200 rounded-lg h-200 w-60'
				>
					<img
						className='h-60 w-65 m-auto rounded-lg'
						src={product.img}
					/>
					<h1>{product.title}</h1>
					<h1>{product.price}</h1>
					
				</a>
			))}
		</div>
	)
}
export default ProductsList
