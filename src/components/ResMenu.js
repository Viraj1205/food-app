import { useEffect,useReducer,useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/urls";
import useResMenu from "../utils/useResMenu";
import RestCategory from "./RestCategory";


const ResMenu = () => {
    
    const { resId } = useParams();
    const resInfo = useResMenu(resId);
    const [showItem,setShowIndex] = useState(0);
    
   

    if (resInfo === null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    return (
        <div className="m-4 p-4 bg-slate-300 rounded-lg text-center">
            <h1 className="font-bold text-xl mb-4">{name}</h1>
            <h3 className="font-semibold text-md text-slate-600">{cuisines.join(",")}</h3>
            {categories.map((category,index) => 
            (<RestCategory 
            showItem={index === showItem ? true : false} 
            setShowIndex = {() => setShowIndex(index)}
            key={category.card.card.title} 
            data={category.card.card}/>))}
        </div>
        
    )

}

export default ResMenu;