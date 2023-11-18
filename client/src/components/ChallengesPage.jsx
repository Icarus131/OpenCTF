import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import MainPageNavbar from "./SharedComponents/MainPageNavbar"
import ChallengesSection from "./ChallengesPageComponents/ChallengesSection"
import { Navigate } from "react-router-dom"
import { useAuth } from "../scripts/auth"

function ChallengesPage(){
	const auth = useAuth()
	return(
		<>
			{!auth.user && <Navigate to="/login"/>}
			<MainPageNavbar/>
			<ChallengesSection/>
		</>
	)
}

export default ChallengesPage
