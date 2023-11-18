import { Link } from "react-router-dom";

function Navbar(){
	return(
		<div className="navbar bg-base-100 fixed">
			<div className="flex-1">
				<Link className="btn btn-ghost normal-case text-3xl font-bungee" to="/">OPENCTF</Link>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1 text-lg gap-2 font-jetbrains">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About Us</Link></li>
					<li><Link to="/login">Get Started</Link></li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar;
