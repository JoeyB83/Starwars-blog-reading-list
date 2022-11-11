import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useHistory, useParams } from "react-router-dom";

export const Details = (props) => {
	const{store, actions} = useContext(Context)	
	const history = useHistory()
    const {singleCharacter} = store			
	useEffect(() => {actions.getSingleCharacter(props.id)
        console.log("Detalle:", store.singleCharacter)
    },[])
    // console.log(store.singleCharacters)
	
	// const params = useParams();
	// useEffect(() => {
    // actions.getDetailsingleCharacter(params.uid);
    // }, []);
	// console.log("Detalle:",  actions.getDetailsingleCharacter)		

    return (
        <>
		<div className="card-group">								
					<div className="card">
						{/* <img src={store.baseImgUrl + 'singleCharacters/' + singleCharacter.uid + '.jpg'} className="card-img-top" alt="..."/> */}
						<div className="card-body">
							<h5 className="card-title">Titulo</h5>														
                            <p className="card-text">Gender: </p>                                 						     
					    </div>
						<div className="d-flex justify-content-between">							
								{/* <button className="btn btn-outline-primary" onClick={() => {
									actions.getSinglesingleCharacter(store.singleCharacter.url)
									history.push("/singlesingleCharacter")
								}}>Learn More!</button>						     */}
						{/* <button className="btn btn-warning" onClick={() => {
							actions.addFavorites(store.singleCharacter)
						}}><i className="far fa-heart"></i></button> */}
						</div>
                    </div>				
        </div>
		</>
    )
}