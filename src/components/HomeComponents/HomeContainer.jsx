import { Link } from 'react-router-dom'

function HomeContainer(){
	return(
		<div className="hero min-h-screen" id="home">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-8xl font-bungee">OPENCTF</h1>
					<p className="py-6">A modular CTF platform</p>
					<Link to="/login" className="btn">Get Started</Link>
				</div>
			</div>
		</div>
	)
}

export default HomeContainer;
