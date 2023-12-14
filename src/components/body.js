import Resturantcard from "./Resturantcard";
import resobj from "../utils/constants";
const Body =() =>{
    return(
        <div className="body-container">
            <div className="search-bar">search</div>
            <div className="resturant-card">
            <Resturantcard restdata={resobj[0]}/>
            <Resturantcard restdata={resobj[1]}/>
            <Resturantcard restdata={resobj[2]}/>
            <Resturantcard restdata={resobj[3]}/>
            <Resturantcard restdata={resobj[4]}/>
            <Resturantcard restdata={resobj[5]}/>    
            <Resturantcard restdata={resobj[0]}/>
            <Resturantcard restdata={resobj[1]}/>
            <Resturantcard restdata={resobj[2]}/>
            <Resturantcard restdata={resobj[3]}/>
            <Resturantcard restdata={resobj[4]}/>
            <Resturantcard restdata={resobj[5]}/>
            </div>
        </div>

    );

};

export default Body;