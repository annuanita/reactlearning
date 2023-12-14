import { IMG_URL } from "../utils/logo";

const Resturantcard =(props) =>{
    const {restdata} = props;

    return(
        <div className="rescard">
            <img className="rescard-image" 
            alt="res-image" 
            src={IMG_URL + restdata.data.cloudinaryImageId}/>
            <h3>{restdata.data.name}</h3>
            <h4>{restdata.data.costForTwo/100}</h4>
            <h4>{restdata.data.cuisines}</h4>
            <h4>{restdata.data.deliveryTime}minutes</h4>
            <h4>{restdata.data.avgRating}stars</h4>
        </div>
    );
};

export default Resturantcard;