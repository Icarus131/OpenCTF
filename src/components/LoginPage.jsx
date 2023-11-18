import {useState} from "react"
import {Link} from "react-router-dom"

function LoginPage(){
	const [loginTab, setLoginTab]=useState(true)

	const showLogin = () => {
		setLoginTab(true)
	}

	const showRegister = () => {
		setLoginTab(false)
	}

	return(
		<div className="flex items-center justify-center h-screen">
			<Link to="/" className="absolute top-1 left-1">Go Back</Link>
			<div className="flex flex-col items-center gap-4 w-4/12 p-8 bg-base-200 rounded-xl">
				{loginTab ? (
					<>
						<div className="tabs w-full">
							<button className="tab tab-bordered tab-lg bg-base-200 tab-active" id="tab1" onClick={showLogin}>Login</button>
							<button className="tab tab-bordered tab-lg bg-base-200" id="tab2" onClick={showRegister}>Register</button>
						</div>

						<div className="flex flex-col gap-6 w-full bg-base-200">
							<input type="text" placeholder="Username" className="input input-bordered bg-base-200 w-full max-w-xs" />	
							<input type="password" placeholder="Password" className="input input-bordered bg-base-200 w-full max-w-xs" />	
							<Link to="/app" className="btn btn-secondary w-32">Login</Link>
						</div>
					</>
				):(
					<>
						<div className="tabs w-full">
							<button className="tab tab-bordered tab-lg bg-base-200" id="tab1" onClick={showLogin}>Login</button>
							<button className="tab tab-bordered tab-lg bg-base-200 tab-active" id="tab2" onClick={showRegister}>Register</button>
						</div>

						<div className="flex flex-col gap-6 w-full bg-base-200">
							<input type="text" placeholder="Username" className="input input-bordered bg-base-200 w-full max-w-xs" />	
							<input type="password" placeholder="Password" className="input input-bordered bg-base-200 w-full max-w-xs" />	
							<input type="password" placeholder="Re-enter Password" className="input input-bordered bg-base-200 w-full max-w-xs" />	
							<Link to="/app" className="btn btn-secondary w-32">Sign Up</Link>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default LoginPage
