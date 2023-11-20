import axios from "axios"
import {useState} from "react"
import {Link} from "react-router-dom"
import { useAuth } from "../scripts/auth"
import {successToast, errorToast} from "../scripts/toasts"
import { useNavigate } from "react-router-dom"

function LoginPage(){
	const [loginTab, setLoginTab] = useState(true)
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [repassword, setRePassword] = useState("")

	const auth = useAuth()
	const navigate = useNavigate()

	const showLogin = () => {
		setLoginTab(true)
	}

	const showRegister = () => {
		setLoginTab(false)
	}

	const Register = async (username,password,repassword) => {
		if(username==="" || password==="" || repassword==""){
			errorToast("Fill all fields")
		}else if(password!==repassword){
			errorToast("Passwords do not match")
		}else{
			let resp
			try{
				resp = await axios.post("http://127.0.0.1:5000/newaccount",{"username": username, "password": password})
				successToast(resp.data)
			}catch(error){
				errorToast(error.response.data)
			}
		}
	}

	const handleRegister = (e) => {
		Register(username,password,repassword)
	}

	const handleRegisterEnter = (e) => {
		if(e.key === "Enter"){
			Register(username,password,repassword)
		}
	}

	const Login = async (username, password) => {
		if(username===""||password===""){
			errorToast("Fill all fields")
		}else{
			let resp
			try{
				resp = await axios.post("http://127.0.0.1:5000/login",{"username": username,"password": password})
				auth.login(username)
				navigate("/app")
			}catch(error){
				errorToast(error.response.data)
			}
		}
	}

	const handleLogin = (e) => {
		Login(username, password)
	}

	const handleLoginEnter = (e) => {
		if(e.key === "Enter"){
			Login(username,password)
		}
	}

	return(
		<div className="flex flex-col items-center justify-center h-screen font-jetbrains">
			<div className="navbar bg-base-100 absolute top-0">
				<Link className="btn btn-ghost" to="/"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 12H19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M12 5L5 12L12 19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>Go Back</Link>
			</div>
			<div className="flex flex-col items-center gap-4 w-4/12 p-8 bg-base-200 rounded-xl">
				{loginTab ? (
					<>
						<div className="tabs w-full">
							<button className="tab tab-bordered tab-lg bg-base-200 tab-active" id="tab1" onClick={showLogin}>Login</button>
							<button className="tab tab-bordered tab-lg bg-base-200" id="tab2" onClick={showRegister}>Register</button>
						</div>

						<div className="flex flex-col gap-6 w-full bg-base-200">
							<input type="text" autoFocus placeholder="Username" className="input input-bordered bg-base-200 w-full max-w-xs" onChange={e => setUsername(e.target.value)} onKeyDown={handleLoginEnter}/>	
							<input type="password" placeholder="Password" className="input input-bordered bg-base-200 w-full max-w-xs" onChange={e => setPassword(e.target.value)} onKeyDown={handleLoginEnter}/>	
							<button className="btn btn-primary w-32" onClick={handleLogin}>Login</button>
						</div>
					</>
				):(
					<>
						<div className="tabs w-full">
							<button className="tab tab-bordered tab-lg bg-base-200" id="tab1" onClick={showLogin}>Login</button>
							<button className="tab tab-bordered tab-lg bg-base-200 tab-active" id="tab2" onClick={showRegister}>Register</button>
						</div>

						<div className="flex flex-col gap-6 w-full bg-base-200">
							<input type="text" autoFocus placeholder="Username" name="username" className="input input-bordered bg-base-200 w-full max-w-xs" onChange={ (e) => {setUsername(e.target.value)}} onKeyDown={handleRegisterEnter}/>
							<input type="password" placeholder="Password" className="input input-bordered bg-base-200 w-full max-w-xs" onChange={e => setPassword(e.target.value)} onKeyDown={handleRegisterEnter}/>
							<input type="password" placeholder="Re-enter Password" className="input input-bordered bg-base-200 w-full max-w-xs" onChange={e => setRePassword(e.target.value)} onKeyDown={handleRegisterEnter}/>
							<button className="btn btn-primary w-32" onClick={handleRegister}>Sign Up</button>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default LoginPage
