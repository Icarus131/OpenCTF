import Challenge from "./Challenge"
import { useEffect, useState } from "react"
import axios from "axios"

function ChallengesSection(){
	const [challenges, setChallenges] = useState([])

	useEffect(() => {
		axios.get("http://127.0.0.1:5000/getchallenges").then((response) => {setChallenges(response.data)})
	},[])

	return(
		<div className="flex flex-wrap items-center justify-center gap-8 py-20 px-0">
			{challenges.map((i, index) => {
				 return <Challenge key={index} Title={i.title} Description={i.desc} id={i._id}/>
			})}
		</div>
	)
}

export default ChallengesSection
