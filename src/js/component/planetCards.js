import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";


export const PlanetCards = () => {
	const{store, actions} = useContext(Context)	
	const history = useHistory()			
	console.log(store.planets)		

    return (
        <>
		<div className="d-flex flex-row overflow-auto">
			{store.planets.map((planet, index) => {				
				return(
					<div className="row" key={index}>
						<div className="col m-3">
							<div className="card" style={{width: "18rem"}}>
								<img src={store.baseImgUrl + 'planets/' + (index + 2) + '.jpg'} className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{planet.name}</h5>
									<p className="card-text">
										Population: {planet.population}<br></br>
										Terrain: {planet.terrain}										
									</p>
									<div className="d-flex justify-content-between">
										<button className="btn btn-outline-primary" onClick={() => {
											actions.getSinglePlanet(planet.url)
											history.push("/singlePlanet")
											}}>Learn More!
										</button>
										<button className="btn btn-warning" onClick={() => {
											actions.addFavorites(planet)
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