import { RES_LOGO } from "../utils/urls";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {cloudinaryImageId,name,locality,cuisines,avgRating} = resData?.info
    return(
        <div className="res-card m-4 p-4 w-[250px] mb-4 content-baseline rounded-lg bg-slate-300 hover:bg-slate-400 hover:shadow-lg">
            <img className="res-logo rounded-lg" alt="res-logo" src={RES_LOGO + resData.info.cloudinaryImageId}></img>
            <h3 className="text-lg font-bold my-4">{name}</h3>
            <h4 className="my-2">{locality}</h4>
            <h4 className="my-2">{cuisines.join(", ")}</h4>
            <h4 className="my-2 rounded-md bg-zinc-400 px-16">{avgRating} stars</h4>
        </div>
    )
}

 export const withPromLabel = (RestaurantCard) => {
    return(props)=> {
        return(
            <div>
                <label className="absolute m-2 p-2 bg-blue-950 text-white rounded-full">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
} 

export default RestaurantCard;