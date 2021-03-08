import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import LoginScreen from "<screens>/Authentication/LoginScreen";
import RegisterScreen from "<screens>/Authentication/RegisterScreen";
import EmailVerificationScreen from "<screens>/Authentication/EmailVerificationScreen";
import PhoneVerificationScreen from "<screens>/Authentication/PhoneVerificationScreen";
import ForgotPasswordScreen from "<screens>/Authentication/ForgotPasswordScreen";
import PasswordSentScreen from "<screens>/Authentication/PasswordSentScreen";
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
        <Stack.Screen name="EmailVerification" component={EmailVerificationScreen} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerificationScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="PasswordSent" component={PasswordSentScreen} />
      </Stack.Navigator>
    );
  }
}

export default AuthFlow;
