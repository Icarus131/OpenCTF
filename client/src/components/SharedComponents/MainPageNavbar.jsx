import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../scripts/auth"

function MainPageNavbar(){
	const auth = useAuth()
	const navigate = useNavigate()

	const Logout = (e) => {
		auth.logout()
		navigate("/")
	}

	return(
		<div className="navbar bg-base-100 z-50 fixed">
			<div className="flex-1">
				<Link to="/app" className="btn btn-ghost normal-case text-3xl font-bungee">OPENCTF</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1 font-jetbrains text-lg">
					<li><Link to="/app">Challenges</Link></li>
					<li><button className="text-error hover:text-error" onClick={Logout}>Logout</button></li>
				</ul>
			</div>
		</div>
	)
}

export default MainPageNavbar
