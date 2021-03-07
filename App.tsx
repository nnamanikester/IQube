import React from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Thunk from "redux-thunk";
import Constants from "expo-constants";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";
import { listenOrientationChange as lor } from "react-native-responsive-screen";
import * as Font from "expo-font";
import reducers from "<root>/states";
import NavigationFlow from '<navigation>/index';


const customFonts = {
  "Lato-Regular": require("./assets/fonts/Lato/Lato-Regular.ttf"),
  "Lato-Bold": require("./assets/fonts/Lato/Lato-Bold.ttf"),
  "Lato-Black": require("./assets/fonts/Lato/Lato-Black.ttf"),
  "Nunito-Regular": require("./assets/fonts/Nunito/Nunito-Regular.ttf"),
  "Nunito-SemiBold": require("./assets/fonts/Nunito/Nunito-SemiBold.ttf"),
  "Nunito-Bold": require("./assets/fonts/Nunito/Nunito-Bold.ttf"),
  "Nunito-Black": require("./assets/fonts/Nunito/Nunito-Black.ttf"),
};

export interface AppProps {
  
}
 
export interface AppState {
  loaded: boolean,
}

class App extends React.Component<AppProps, AppState> {
  store = createStore(reducers, {}, applyMiddleware(Thunk));

  constructor(props: AppProps) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  
  componentDidMount(): void {
    this.loadFontsAsync();
    lor(this);
  }

  async loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ loaded: true });
  }

  render() {
    const { loaded } = this.state;

    if (!loaded) {
      return <AppLoading />;
    }

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Provider store={this.store}>
          <NavigationFlow />
        </Provider>
      </>
    );
  }
}
 
export default App;