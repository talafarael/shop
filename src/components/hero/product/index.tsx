import {useParams} from "react-router-dom"
import {RootState} from "../../../store/store"
import {useSelector} from "react-redux"
import {IProducts} from "../../type/shop"
import ProductItem from "../../productItem"

const Product = () => {
	const {productId} = useParams()
	const Products: IProducts[] = useSelector(
		(state: RootState) => state.productsReducer.value
	)

	const product= Products.find(
		(product) => product._id === productId
	) || {_id: "", title: "", img: "", price: "",desct:""}
	return( <div className="flex justify-center items-center mr-20 mt-20 ">
		<img src={product.img} className="rounded-lg h-96 w-100" alt="" />
		<ProductItem Product={product}/>
	</div>)
}

export default Product
