import { Link } from "react-router-dom"

function MainPageNavbar(){
	return(
		<div className="navbar bg-base-100 z-50 fixed">
			<div className="flex-1">
				<Link to="/app" className="btn btn-ghost normal-case text-3xl font-bungee">OPENCTF</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1 font-jetbrains text-lg">
					<li><Link to="/app">Challenges</Link></li>
					<li>
						<details>
							<summary>
								Profile
							</summary>
							<ul className="p-2 bg-base-200">
								<li><a>Profile</a></li>
								<li><Link to="/" className="text-error hover:text-error">Logout</Link></li>
							</ul>
						</details>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MainPageNavbar
