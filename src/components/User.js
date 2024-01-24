import React from "react";

class User extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
            name:"Dummy",
            company:"Dummy",
            location:"Dummy"},
            count:0,

        }
        console.log("Child constructor");
    }

    async componentDidMount(){

        console.log("Child did mount called");

        const data = await fetch("https://api.github.com/users/Neel8080");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,
        });
        
    }

    componentDidUpdate(){
        console.log("did Update is called");
    }

    componentWillUnmount(){
        console.log("Unmount is called");
    }
    render() {
        console.log("Child render");
        const { name, company, location } = this.state.userInfo;
        
        return (
            <div className="user-card">
            
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h3>Company:{company}</h3>
            </div>
        );
    
    }

    
}

export default User;