import Challenge from "./Challenge"
import { useEffect, useState } from "react"
import axios from "axios"
import { useAuth } from "../../scripts/auth"

function ChallengesSection(){
	const [challenges, setChallenges] = useState([])

	const auth  = useAuth()

	useEffect(() => {
		axios.get("http://127.0.0.1:5000/getchallenges").then((response) => {setChallenges(response.data)})
	},[challenges])

	return(
		<div className="flex flex-wrap items-center justify-center gap-8 py-20 px-0">
			{challenges.map((i, index) => {
				return <Challenge key={index} Title={i.title} Description={i.desc} id={i._id} Solved={i.solvedBy.includes(auth.user)} File={i.file}/>
			})}
		</div>
	)
}

export default ChallengesSection
