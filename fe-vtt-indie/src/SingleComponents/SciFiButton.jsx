import "./SciFiButton.css"





const SciFiButton = ({singleResponseModal, currentFunction, genName}) => {


    return (
        <>
        <div onClick={e => singleResponseModal(currentFunction)} className="btn-wrapper">
			<div className="btn-tail"></div>
			<div className="btn-body">
				<p>{genName}</p>
			</div>
		</div>
        </>
    )
}

export default SciFiButton