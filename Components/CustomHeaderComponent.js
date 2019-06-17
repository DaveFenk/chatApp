import  React, { Component } from 'react';
import  { View, Text } from 'react-native';
import {headerStyles} from "./Styles"


class CustomHeaderComponent extends Component {
    render() {
        return (
            <View style={{backgroundColor: "black"}}>
                <Text>ChatApp</Text>
            </View>
        );
    }
}

export default CustomHeaderComponent;