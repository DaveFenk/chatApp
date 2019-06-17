import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from "firebase"
import {viewStyle, loginStyles} from "./Styles"

export default class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            errorMessage: null
        }
    }

   handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(()=>this.props.navigation.navigate("HomeScreen"))
            .catch(error=>this.setState({errorMessage: error.message}))
        console.log('handleSignUp')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                {this.state.errorMessage &&
                <Text style={{ color: 'red' }}>
                    {this.state.errorMessage}
                </Text>}
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                <View style={{marginBottom: 10}}>
                <Button title="Sign Up" onPress={this.handleSignUp} />
                </View>
                <Button
                    title="Already have an account? Login"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#2980b9",
        padding: 20
    },
    title: {
        color: "#FFF",
        flex: 0.1,
        backgroundColor: "#2980b9",
        fontSize: 35,
        textAlign: "center",
        fontWeight: "500",
        padding: 10
    },
    textInput: {
        height: 40,
        backgroundColor: "rgba(255,255,255,0.2)",
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    }
})