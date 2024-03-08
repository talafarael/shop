import {FC, ReactNode} from "react"
import Head from "./header"
import NavBar from "./navBar"


interface ILayout {
	children: ReactNode
}

const Layout: FC<ILayout> = ({children}) => {
	return (
		<div className= 'bg-cyan-600 h-screen'>
			<Head />

			<NavBar/>
			<div>{children}</div>
		</div>
	)
}

export default Layout
