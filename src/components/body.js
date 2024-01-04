import Resturantcard from "./Resturantcard";
import resobj from "../utils/constants";
import { useState } from "react";



const Body =() =>{

    const [listres,setlistres] = useState(resobj);
    return(
        <div className="body-container">
            <div className="search-bar">
                <button className="button-filter"
                onClick={()=>{
                    const restfilter = listres.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setlistres(restfilter);
                } }> 
                Top rated resturants  
                </button>
              </div>
            <div className="resturant-card">
               { listres.map((resturant) =>(
                <Resturantcard key = {resturant.data.id} restdata={resturant}/>
                 ))}
            </div>
        </div>

    );

};

export default Body;