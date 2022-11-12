import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";


export const ShipCards = () => {
	const{store, actions} = useContext(Context)	
	const history = useHistory()			
	console.log(store.starships)		

    return (
        <>
		<div className="d-flex flex-row overflow-auto">
			{store.starships.map((starship, index) => {				
				return(
					<div className="row" key={index}>
						<div className="col m-3">
							<div className="card" style={{width: "18rem"}}>
								<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{starship.name}</h5>
									<p className="card-text">
										Model: {starship.model}<br></br>
										Length: {starship.length}<br></br>
                                        Passengers: {starship.passengers}

									</p>
									<div className="d-flex justify-content-between">
										<button className="btn btn-outline-primary" onClick={() => {
											actions.getSingleShip(starship.url)
											history.push("/singleStarship")
											}}>Learn More!
										</button>
										<button className="btn btn-warning" onClick={() => {
											actions.addFavorites(starship)
						                    }}><i className="far fa-heart"></i>
										</button>
						            </div>							
                                </div>
                            </div>					
						</div>
					</div>					
				)}
			)}
		</div>
		</>
    )
}