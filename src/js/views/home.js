import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import { CharacterCards } from "../component/characterCards";

export const Home = () => {
	const{store, actions} = useContext(Context)	
	const history = useHistory()

	return(
		<div>
			<h1 className="text-danger">Characters</h1>
			<div>
				<CharacterCards />
		    </div>
		</div>
		

		 
		// <>
		// 	<h1>Characters</h1>
		// 	<div className="container-fluid">
		// 		<div className="row">
		// 			{/* <div className="col"> */}
		// 				{characters.map((character) => {
		// 					return(
		// 						<div id="charCard" className="card" key={character.uid}>
		// 							<img src={baseImgUrl + 'characters/' + character.uid + '.jpg'} className="card-img-top" alt="..."/>
		// 							<div className="card-body">
		// 						    <h5 className="card-title">{character.name}</h5>
		// 						    <p className="card-text">
		// 								Gender: {character.gender}
		// 							</p>
		// 							<div className="d-flex justify-content-between">
		// 								<button className="btn btn-secondary">Learn More!</button>
		// 								<button className="btn btn-warning"><i className="far fa-heart"></i></button>
		// 				            </div>						            
		// 			            </div>
        //                     </div>
		// 				    )
		// 			    })}						
		// 			{/* </div> */}
		// 		</div>
		// 	</div>
			
		// </>
		// <>
		// <h1 className="text-danger">Characters</h1>
		// <div className="card-group">
		// 	{store.characters.map((character) => {
		// 		return(
		// 			<div className="card" key={character.uid}>
		// 				<img src={store.baseImgUrl + 'characters/' + character.uid + '.jpg'} className="card-img-top" alt="..."/>
		// 				<div className="card-body">
		// 					<h5 className="card-title">{character.name}</h5>						     
		// 			    </div>
		// 				<div className="d-flex justify-content-between">
							
		// 						<button className="btn btn-outline-primary" onClick={() => {
		// 							actions.getSingleCharacter(character.url)
		// 							history.push("/singleCharacter")
		// 						}}>Learn More!</button>
						    
		// 				<button className="btn btn-warning" onClick={() => {
		// 					actions.addFavorites(character)
		// 				}}><i className="far fa-heart"></i></button>
		// 				</div>
        //             </div>
		// 		)
		// 	})}
        // </div>
		// </>
	)
}
