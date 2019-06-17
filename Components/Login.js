import React, {Component} from "react"
import {Image, View, TextInput, KeyboardAvoidingView, BackHandler, Text} from "react-native";
import {Button} from "react-native-elements"
import {viewStyle, loginStyles} from "./Styles"
import firebase from "firebase"

class Login extends Component{

    constructor(){
        super()
        this.state={
            email: "",
            password: "",
            errorMessage: null
        }
    }
    //Deny going back to Login
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        return true;
    }

    handleLogin=()=>{
        const {email, password} = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(()=>this.props.navigation.navigate("HomeScreen"))
            .catch(error=>this.setState({errorMessage: error.message}))
        console.log("handleLogin")
    }

    render() {
        return (

            <KeyboardAvoidingView behavior="padding" style={viewStyle.container}>
                <View style={loginStyles.logoContainer}>
                    <Image source={require("../images/bicycle.png")} style={loginStyles.logo}/>
                </View>
                <View style={loginStyles.container}>
                    <TextInput
                        style={loginStyles.input}
                        placeholder={"email"}
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        autoCapitalize="none"
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                    />
                    <TextInput
                        style={loginStyles.input}
                        placeholder={"your password"}
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        />
                     <View style={{marginBottom:10}}>
                        <Button
                            title="LOGIN"
                            onPress={this.handleLogin}>
                        </Button>
                     </View>
                    <Button
                        title="Dont't have an account? Sign in"
                        onPress={()=>this.props.navigation.navigate("SignUp")}>
                    </Button>

                    {this.state.errorMessage && <Text style={{ color: 'red' }}> {this.state.errorMessage}</Text>}
                </View>

            </KeyboardAvoidingView>

        )
    }

}

export default Login


