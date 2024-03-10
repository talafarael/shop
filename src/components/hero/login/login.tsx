import {ChangeEvent, useState} from "react"
import {postFetch} from "../../../services/postServices"

const Login: React.FC = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handlerPost = async () => {
		const body = {username: username, password: password}
		const data = await postFetch({url: "login", body})
		localStorage.setItem("token", data.token)
		if (data.massage) {
			window.location.assign("/")
		}
	}
	const getPassword = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
	}
	const getUsername = (e: ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value)
	}
	return ( 
		<div className='flex flex-col justify-center items-center '>
			<h1 className='mt-40 text-2xl  mr-60'>username:</h1>
			<input
				value={username}
				type='text'
				onChange={getUsername}
				className='rounded-lg w-96 h-10 '
				placeholder='text'
			/>
			<h1 className='mt-5 text-2xl mr-60'>password:</h1>
			<input
				value={password}
				onChange={getPassword}
				className='w-96 h-10 rounded-lg'
				type='text'
				placeholder='text'
			/>
			<button
				onClick={() => {
					handlerPost()
				}}
				type='button'
				className='mt-10  rounded-lg h-12 w-60 bg-cyan-900 text-white text-3xl'
			>
				Create
			</button>
		</div>
	)
}
export default Login
