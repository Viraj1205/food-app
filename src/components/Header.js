import { APP_LOGO } from "../utils/urls";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const [btnName,setbtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext)
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)
    return(
        <div className="flex justify-between bg-purple-200 shadow-md">
            <div className="logo-container">
                <img className="w-56" src= {APP_LOGO}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus ? "💚" : "❤️"}</li>
                    <li className="px-4"><Link to={"/"}>Home</Link></li>
                    <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
                    <li className="px-4"><Link to={"/about"}>About Us</Link></li>
                    <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
                    <li className="px-4 font-bold text-lg"><Link to={"/cart"}>Cart-({cartItems.length})</Link></li>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                    
                    <button className="px-4"
                    onClick={() => {
                        btnName === "Login"?
                        setbtnName("Logout"):
                        setbtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;