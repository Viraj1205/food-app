import { useState } from "react";
import ItemList from "./ItemList";
const RestCategory = ({data,setShowIndex,showItem}) => {
    const handleClick = () => {
        setShowIndex();
    }
    console.log(data);

    return (
        <div className=" w-6/12 mx-auto my-4 p-4 shadow-lg bg-gray-50">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            
            {showItem && <ItemList items={data.itemCards}/>}

        </div>
    )
}

export default RestCategory;