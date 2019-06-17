import React, {Component} from "react"
import {GiftedChat} from "react-native-gifted-chat"
import Fire from "../Containers/Fire"

export default class ChatRoom extends Component<Props>{
    constructor(){
        super()
        this.state={
            messages: [],
        }
    }

    get user(){
        return {
            _id: Fire.shared.uid
        }
    }

    componentDidMount() {
        Fire.shared.on(message =>
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, message),
            }))
        );
    }

    componentWillUnmount() {
        Fire.shared.off();
    }

    render(){
        return(
        <GiftedChat
            messages={this.state.messages}
            onSend={Fire.shared.send}
            user={this.user}
        />
        )
    }
}