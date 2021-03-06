import React, { Component } from 'react';
import { View, } from 'react-native';
import SwitchNavigation from './modules/navigation/switchNavigator';
import { Provider } from 'react-redux';
import { store } from './modules/redux/store';
import PopupApp from './components/popupApp/popupApp';



export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <SwitchNavigation />
          <PopupApp />
        </View>
      </Provider>
    );
  }
};