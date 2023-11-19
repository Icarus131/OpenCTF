import ChallengeModal from "./ChallengeModal"

function Challenge({Title, Description, id}){
	return(
		<>
			<ChallengeModal title={Title} description={Description} id={id}/>
			<div className="card w-96 bg-base-200 shadow-xl font-jetbrains">
				<div className="card-body">
					<h2 className="card-title">{Title}</h2>
					<p>{Description}</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary" onClick={() => document.getElementById(id).showModal()}>Solve</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Challenge
