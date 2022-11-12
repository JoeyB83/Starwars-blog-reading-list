import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const SingleShip = () => {
    const {store, actions} = useContext(Context)
    console.log("detalle:",store.singleStarship)    
    return(
        <>
        {store.singleStarship.url ?         
        <div className="card mb-3" style={{maxwidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://via.placeholder.com/800x600" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title text-center">{store.singlePlanet.name}</h1>
                        <p className="card-text text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
                        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                        aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
                        </p>                        
                    </div>
                </div>
            </div>
            <div className="Container border-top border-danger mt-5">
                <div className="row mt-5">
                    <div className="col text-danger text-center">
                    Name<br></br>
                    {store.singleStarship.name}
                    </div>
                    <div className="col text-danger text-center">
                    Manufacturer<br></br>
                    {store.singleStarship.manufacturer}                   
                    </div>
                    <div className="col text-danger text-center">
                    Crew<br></br>
                    {store.singleStarship.crew}                   
                    </div>
                    <div className="col text-danger text-center">
                    Hyperdrive Rating<br></br>
                    {store.singleStarship.hyperdrive_rating}                   
                    </div>
                    <div className="col text-danger text-center">
                    Cargo Capacity<br></br>
                    {store.singleStarship.cargo_capacity}                   
                    </div>
                    <div className="col text-danger text-center">
                    Cost in Credits<br></br>
                    {store.singleStarship.cost_in_credits}                   
                    </div>
                </div>                
             </div>            
        </div>
        :
        <Link to="/">
            <p>Click here to go back to the first page</p> 
        </Link>
        }
        </>
    )
}