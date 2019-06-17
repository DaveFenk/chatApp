import React, {Component} from 'react';
import {createStackNavigator} from "react-navigation";
import Login from "./Components/Login";
import HomeScreen from "./Components/HomeScreen";
import ChatRoom from "./Components/ChatRoom";
import Loading from "./Components/Loading";
import SignUp from "./Components/SignUp";


const AppNavigator = createStackNavigator({
    Loading:{
        screen: Loading,
        navigationOptions:{
            header:null
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions:{
            header:null
        }
    },
        Login: {
        screen: Login,
        navigationOptions:{
            header: null,
        }
    },
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions:{
            header: null,
        }
    },
    ChatRoom: {
        screen: ChatRoom,
        navigationOptions:{

            headerStyle: {
                backgroundColor: '#2980b9',
                borderBottomColor: 'white'
            }
        }
    }},
    {
    initialRouteName: "Loading",




})

export default AppNavigator