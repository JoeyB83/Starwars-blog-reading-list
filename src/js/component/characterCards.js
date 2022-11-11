import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";


export const CharacterCards = () => {
	const{store, actions} = useContext(Context)	
	const history = useHistory()			
	console.log(store.characters)		

    return (
        <>
		<div className="d-flex flex-row">
			{store.characters.map((character, index) => {
				return(
					<div className="row" key={index}>
						<div className="col m-3">
							<div className="card" style={{width: "18rem"}}>
								<img src={store.baseImgUrl + 'characters/' + (index + 1) + '.jpg'} className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{character.name}</h5>
									<p className="card-text">
										Gender: {character.gender}
										Hair Color: {character.hair_color}
										Eye-Color: {character.eye_color}
									</p>
									<div className="d-flex justify-content-between">
										<button className="btn btn-outline-primary" onClick={() => {
											actions.getSingleCharacter(character.url)
											history.push("/singleCharacter")
											}}>Learn More!
										</button>
										<button className="btn btn-warning" onClick={() => {
											actions.addFavorites(character)
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