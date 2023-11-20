import ChallengeModal from "./ChallengeModal"

function Challenge({Title, Description, id, Solved, File}){
	return(
		<>
			<ChallengeModal title={Title} description={Description} id={id} Solved={Solved}/>
			<div className="card w-96 bg-base-200 shadow-xl font-jetbrains">
				<div className="card-body">
					<h2 className="card-title">{Title}</h2>
					<p>{Description}</p>
					{Solved && <div className="badge badge-success gap-2">Solved</div>}
					{!Solved && <div className="badge badge-error gap-2">Not Solved</div>}
					<div className="card-actions justify-end">
						<button className="btn btn-primary" onClick={() => document.getElementById(id).showModal()}>Solve</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Challenge
