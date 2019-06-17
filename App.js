import React, {Component} from 'react';
import AppNavigator from "./AppNavigator"
import {createAppContainer} from "react-navigation";

type Props = {};
const AppContainer = createAppContainer(AppNavigator)


class App extends Component<Props> {
  render() {
    return (
        <AppContainer/>
    );
  }
}

export default App
