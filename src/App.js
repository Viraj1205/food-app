import React,{lazy,Suspense, useEffect} from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Aboutus from "./components/Aboutus";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import ResMenu from "./components/ResMenu";
import UserContext from "./utils/UserContext";
import { useState,useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

  
const Grocery = lazy(() => import("./components/Grocery.js"));



const AppLayout = () => {
    const [userName,setUserName] = useState();
useEffect(() => {
    const data = {
        name: "Viraj Shinde"
    }
    setUserName(data.name)
},[])

    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
                <div className="app">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
        
    )
}

const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<AppLayout/>,

            children:[
                {
                    path:"/",
                    element:<Body/>,
                },
                {
                    path:"/grocery",
                    element:(
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery/>
                        </Suspense>
                        ),
                },
                {
                    path:"/about",
                    element:<Aboutus></Aboutus>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"/resmenu/:resId",
                    element:<ResMenu/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                },
            ],
            errorElement:<Error/>   
        },
        
    ])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
// root.render(<AppLayout/>);