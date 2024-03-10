import axios from "axios"

type Ibody = {
	username: string
	password: string
}|{
	_id: string

}

interface PostFetchProps {
	url: string
	body: Ibody
}

export const postFetch = async(props: PostFetchProps): Promise<any>  => {
	const {url, body} = props

	
		const response = await fetch(`http://localhost:7000/auth/${url}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body), 
		})

		const data = await response.json()
		return data
	
	}