import React, {Component} from "react"
import { View, Text} from "react-native";
import Login from "../Components/Login";

class LoginContainer extends Component {
    constructor(){
        super()
        this.state={
            name: ""
        }
    }


    render() {
        return(
                <Login/>
        )
    }
    
}
export default LoginContainer