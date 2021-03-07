import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { connect } from "react-redux";
import BottomNavigation from "./BottomNavigation";
import { IUserPayload } from "<states>/auth/types";
import { IRootState } from "<root>/states";

const Stack = createStackNavigator();

export interface MainFlowProps {
  user: IUserPayload,
}
 
export interface MainFlowState {
  
}
 
class MainFlow extends React.Component<MainFlowProps, MainFlowState> {
  constructor(props: MainFlowProps) {
    super(props);
    this.state = { };
  }

  render() {
    const { user } = this.props;

    return (
      <Stack.Navigator
        screenOptions={{
          header: () => null,
          // gestureDirection: "horizontal",
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Home" component={BottomNavigation} />
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(MainFlow);
