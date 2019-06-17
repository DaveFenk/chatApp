import React, {Component} from "react"
import {Text, View, FlatList} from "react-native";
import {ListItem, Header, Button} from "react-native-elements"
import firebase from "firebase"

export default class HomeScreen extends Component{
    constructor(){
        super()
        this.state={
            currentUser: null
        }
    }
    componentDidMount() {
        const {currentUser} = firebase.auth()
        this.setState({currentUser})
    }

    handleLogout=()=>{
        firebase
            .auth()
            .signOut()
            .then(()=>this.props.navigation.navigate("Login"))
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem
            onPress={()=>this.props.navigation.push("ChatRoom")}
            title={item.name}
            subtitle={item.subtitle}
            badge={{ value: 3, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}

        />
    )
    render(){
        const { currentUser } = this.state

        return(
            <View>
                <Header
                    leftComponent={<Button onPress={this.handleLogout} title={"Logout"}/>}
                    centerComponent={{text: "ChatApp", style: {color: "#fff", fontWeight: "700", fontSize: 20}}}
                    rightComponent={{icon: "add", color: "#fff"}}/>
                <Text>
                    Hi {currentUser && currentUser.email}!
                </Text>
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={list}
                        renderItem={this.renderItem}
                    />
                <Button title="go to Chat" onPress={()=>this.props.navigation.push("ChatRoom")}/>

            </View>
        )
    }
}

const list = [
    {
        name: 'Amy Farha',
        subtitle: 'Vice President'
    },
    {
        name: 'Chris Jackson',
        subtitle: 'Vice Chairman'
    }]