
import axios from "axios";

export const getFetch = async() => {
const response=await axios.get('http://localhost:7000/auth/getallproducts')
const data=response.data
return await data;
}

