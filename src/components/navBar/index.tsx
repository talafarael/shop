const NavBar = () => {
	const listPath = [
		{
			name: "home",
			path: "/",
		},
		{
			name: "profile",
			path: "/profile",
		},
		{
			name: "order",
			path: "/order",
		},
	]
	return (
		<div className="h-100 flex justify-around">
						{listPath.map((nav, index) => (
										<div key={index}>
														<a  className="text-2xl" href={nav.path}>{nav.name}</a>
										</div>
						))}
		</div>
);
}
export default NavBar
