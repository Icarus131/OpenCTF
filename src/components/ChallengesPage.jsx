import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import MainPageNavbar from "./SharedComponents/MainPageNavbar"
import ChallengesSection from "./ChallengesPageComponents/ChallengesSection"

function ChallengesPage(){
	return(
		<>
			<MainPageNavbar/>
			<ChallengesSection/>
		</>
	)
}

export default ChallengesPage
