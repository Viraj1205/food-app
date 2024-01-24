import RestaurantCard,{withPromLabel} from "./RestaurantCard";
import { useState,useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Body = () => {
    const [listOfRestaurants,setlistOfRestaurnats] = useState([]);
    const [filteredRestaurant1,setfilteredRestaurant] = useState([]);
    const [searchText,setsearchText] = useState("");
    // const [listOfChineseres,setlistOfChineseres] = useState(ResList);
    const RestaurantcardProm = withPromLabel(RestaurantCard);

    const {loggedInUser,setUserName} = useContext(UserContext)

    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setlistOfRestaurnats(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurants);

    }

    onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>You are offline... Please check your internet connection..</h1>
        )
    }

    return(listOfRestaurants && listOfRestaurants.length === 0 ? <Shimmer/>:
        <div className="body">
            <div className="filter flex">
                <div className="search-div">
                    <input type="text" className="search-box px-4 m-4 border border-solid rounded-sm border-black" value={searchText}
                    onChange={(e) => {
                        setsearchText(e.target.value)}}></input>
                    <button className="px-4 m-4 bg-green-300 rounded-lg hover:shadow-md" onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )
                        setfilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="px-4 m-4 bg-green-300 rounded-lg hover:shadow-md" 
                onClick={() =>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    setlistOfRestaurnats(filteredList);
                }}
                >Top Rated Restaurants</button>
                <div className="m-4 ">
                    <label>Username : </label>
                    <input value={loggedInUser}
                    onChange={(e) => setUserName(e.target.value)}
                    className="border border-black rounded-lg px-2"></input>
                </div>

                {/* <button className="filter-btn"
                onClick={() => {
                    const chinese = listOfChineseres.filter(
                        (res) => res.info.cuisines[0] === "Chinese"
                    );
                    setlistOfChineseres(chinese);
                }}>Show me the places for chinese</button> */}
            </div>
            <div className="res-container flex flex-wrap m-4 p-4">
                {filteredRestaurant1 && filteredRestaurant1.map((restaurant) => (
                   <Link key={restaurant.info.id}
                   to={"/resmenu/"+ restaurant.info.id}
                   
                   >{restaurant.info.veg  ? (<RestaurantcardProm resData={restaurant}/>) :
                    (<RestaurantCard  resData={restaurant}/>) }
                    </Link> 
                ))}
            </div>
        </div>
    )
}

export default Body;