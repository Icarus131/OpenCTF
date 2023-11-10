function Challenge({Title, Description}){
	return(
		<div className="card w-96 bg-base-200 shadow-xl font-jetbrains">
			<div className="card-body">
				<h2 className="card-title">{Title}</h2>
				<p>{Description}</p>
				<div className="card-actions justify-end">
					<button className="btn btn-secondary">Solve</button>
				</div>
			</div>
		</div>

	)
}

export default Challenge
