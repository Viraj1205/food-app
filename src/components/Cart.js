import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return(
        <div className="text-center w-6/12 mx-auto m-4 p-4">
            <h1 className="text-center text-lg font-bold pb-4">Cart</h1>
            
            <ItemList items={cartItem}></ItemList>
            <button onClick={handleClearCart}
            className="bg-blue-950 text-white rounded-full px-4">Clear Cart</button>
        </div>
    )
}

export default Cart;
