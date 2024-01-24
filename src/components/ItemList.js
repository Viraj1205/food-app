import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    return(
        <div>
            {items.map((item) => (
                <div className="flex justify-between">
                    <div key={item.card.info.id} className="border-b-2 border-gray-400 my-2">
                        <div className="font-bold text-sm text-left">
                            <span>{item.card.info.name}</span>
                            <span> ₹- {item.card.info.price/100}</span>
                        </div>
                        <div className="text-left">
                            <p>{item.card.info.description}</p>
                        </div>
                    </div>        
                    <div>
                        <button onClick={()=>handleAddItem(item)}
                        className="font-bold text-lg border border-black rounded-lg">Add +</button>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default ItemList;
