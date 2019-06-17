import React from "react"
import {View, Text, ActivityIndicator, StyleSheet} from "react-native"
import {viewStyle} from "./Styles"
import firebase from 'firebase'

export default class Loading extends React.Component{
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user=> {
            this.props.navigation.navigate(user ? "HomeScreen" : "Login")
        })
    }

    render(){
        return (
            <View style={viewStyle.container}>
                <Text>Loading</Text>
                <ActivityIndicator size={"large"}/>
            </View>
        )
    }
}
