import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import WelcomeScreen from "<root>/screens/Authentication/WelcomeScreen";
import LoginScreen from "<root>/screens/Authentication/LoginScreen";

const Stack = createStackNavigator();

export interface AuthFlowProps {
  
}
 
export interface AuthFlowState {
  
}
 
class AuthFlow extends React.Component<AuthFlowProps, AuthFlowState> {
  constructor(props: AuthFlowProps) {
    super(props);
    this.state = {};
  }

  render() { 
    return (
      <Stack.Navigator
        screenOptions={{
          header: () => null,
          // gestureDirection: 'horizontal',
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  }
}

export default AuthFlow;
