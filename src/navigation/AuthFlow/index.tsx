import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import WelcomeScreen from "<screens>/Authentication/WelcomeScreen";
import LoginScreen from "<screens>/Authentication/LoginScreen";
import RegisterScreen from "<screens>/Authentication/RegisterScreen";
import OnboardingScreen from "<screens>/OnboardingScreen";

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
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    );
  }
}

export default AuthFlow;
