import {FC} from "react"
import {IProducts} from "../type/shop"
import {postFetch} from "../../services/postServices"
interface ProductItemProps {
	Product: IProducts
}
const ProductItem: React.FC<ProductItemProps> = ({Product}) => {
	const createBasket = async () => {
		const token = localStorage.getItem("token")
		console.log(token)
		const body = {_id: Product._id, token: token}
		const data =await postFetch({url: "basket", body: body})
		console.log(data)
	}
	return (
		<div className=' ml-20 '>
			<h1 className='text-5xl'> {Product.title}</h1>
			<h1 className='text-3xl mt-6 '> {Product.desct}</h1>
			<button
				type='button'
				value='Button'
				onClick={createBasket}
				className='m-20  rounded-lg h-14 w-60 bg-cyan-900 text-white text-3xl'
			>
				Buy Item
			</button>
		</div>
	)
}
export default ProductItem
