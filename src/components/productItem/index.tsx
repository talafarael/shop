import {FC} from "react"
import {IProducts} from "../type/shop"
import {postFetch} from "../../services/postServices"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
interface ProductItemProps {
	Product: IProducts
}
const ProductItem: React.FC<ProductItemProps> = ({Product}) => {
	const createBasket = async () => {
		try {
		const token = localStorage.getItem("token")
		console.log(token)
		const body = {_id: Product._id, token: token}
		
		await postFetch({url: "basket", body: body}).then((data)=>{
			console.log(data)
			toast(() => data.message, {  // Зверніть увагу на () => data
            
           
        });
		})
        
    } catch (error:any) {
        toast.promise(() => error, {  // Зверніть увагу на () => error
            pending: "Promise is pending",
            success: "Promise Loaded",
            error: "Error",
        });
    }
		
		 
	
	
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
			<ToastContainer  />
		</div>
	)
}
export default ProductItem
