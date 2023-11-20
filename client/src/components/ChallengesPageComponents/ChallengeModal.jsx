import {useState} from "react"
import { useAuth } from "../../scripts/auth"
import axios from "axios"
import {errorToast, successToast} from "../../scripts/toasts"

function ChallengeModal({title,description,id,file}){
	const [flag, setFlag] = useState("")
	const auth = useAuth()

	const Submit = async (title, username, flag) => {
		let resp
		console.log(title,username, flag)
		try{
			resp = await axios.put("http://127.0.0.1:5000/verifyflag",{"username": username, "title": title, "flag": flag} )
			successToast("Flag is correct")
		}catch(error){
			errorToast("Wrong flag")
		}
	}

	const handleSubmit = () => {
		Submit(title, auth.user, flag)
	}

	return(
		<dialog id={id} className="modal">
			<div className="modal-box">
				<form method="dialog">
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
				</form>
				<div className="flex flex-col items-left justify-center gap-4">
					<p className="font-bold text-lg">{title}</p>
					<p>{description}</p>
					<a className="link link-primary" href={"/"+file} target="_blank">{file}</a>
					<input className="input input-bordered bg-base-200 w-full" onChange={e => setFlag(e.target.value)}/>
					<button className="btn btn-primary w-20" onClick={handleSubmit}>Submit</button>
				</div>
			</div>
		</dialog>
	)	
}

export default ChallengeModal
