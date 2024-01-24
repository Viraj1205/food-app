import User from "./User";
import React from "react";
import UserContext from "../utils/UserContext";

class Aboutus extends React.Component{
    constructor(props){
        super(props);

        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent did mount called");
    }
    render() {
        console.log("Parent render");
        return(
            <div>
                <h1>About us</h1>
                <h2>
                Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."
                </h2>
    
                <User name= {"Viraj Shinde"} location={"Satara"} contact={"virajshinde1298@gmail.com"} />
                //context

                <UserContext.Consumer>{({loggedInUser}) => (
                    <h1 className="text-lg font-bold">{loggedInUser}</h1>
                )}</UserContext.Consumer>

            </div>
            
        );
    }
}


export default Aboutus;