import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	const history = useHistory()
	
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
				<img src="https://www.freelogovectors.net/wp-content/uploads/2018/04/starwars-logo.png"
					width="90"
				/>
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Favorites
                    </button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.map((favorite, index) => {
							return(
								<li key={index} className="d-flex justify-content-between">
									<a className="dropdown-item" onClick={() => {
										actions.getSingleCharacter(favorite.url)
                                        history.push("/singleCharacter")
									} }>
										{favorite.name}
									</a>
									<button className="btn" onClick={() => actions.deleteSingleCharacter(index)}><i className="fas fa-trash"></i></button>
								</li>
							)
						})}						                        
                    </ul>
                </div>									
			</div>
		</nav>
	);
};
