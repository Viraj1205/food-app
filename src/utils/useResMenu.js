import { useState,useEffect } from "react";
import { MENU_URL } from "./urls";

const useResMenu = (resId) => {

const[resInfo,setResInfo] = useState(null);
    
useEffect(()=>{
    fetchdata();
},[])

const fetchdata = async() => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json.data);

}

return resInfo;

}

export default useResMenu;