import { Link } from "react-router-dom";

function Navbar(){
	return(
		<div className="navbar bg-base-100 fixed">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-3xl font-bungee" href="#">OPENCTF</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1 font-jetbrains text-lg">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About Us</Link></li>
					<li><Link to="/login">Get Started</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar;
