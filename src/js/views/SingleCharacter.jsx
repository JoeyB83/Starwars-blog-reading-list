import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const SingleCharacter = () => {
    const {store, actions} = useContext(Context)
    console.log("detalle:",store.singleCharacter)    
    return(
        <>
        {store.singleCharacter.url ?         
        <div className="card mb-3" style={{maxwidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://via.placeholder.com/800x600" className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="card-title text-center">{store.singleCharacter.name}</h1>
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
                    {store.singleCharacter.name}
                    </div>
                    <div className="col text-danger text-center">
                    Birth Year<br></br>
                    {store.singleCharacter.birth_year}                   
                    </div>
                    <div className="col text-danger text-center">
                    Gender<br></br>
                    {store.singleCharacter.gender}                   
                    </div>
                    <div className="col text-danger text-center">
                    Height<br></br>
                    {store.singleCharacter.height}                   
                    </div>
                    <div className="col text-danger text-center">
                    Skin Color<br></br>
                    {store.singleCharacter.skin_color}                   
                    </div>
                    <div className="col text-danger text-center">
                    Eye Color<br></br>
                    {store.singleCharacter.eye_color}                   
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