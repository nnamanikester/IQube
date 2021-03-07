import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import * as UI from "<common>/index";
import HomeScreen from "<screens>/Dashboard/HomeScreen";
import { IRootState } from "<root>/states";
import { ColorsState } from "<root>/states/colors/types";

const Tab = createBottomTabNavigator();

export interface BottomNavigationProps {
  colors: ColorsState,
}
 
export interface BottomNavigationState {
  
}
 
class BottomNavigation extends React.Component<BottomNavigationProps, BottomNavigationState> {
  constructor(props: BottomNavigationProps) {
    super(props);
    this.state = { };
  }
  
  render() { 
    const { colors } = this.props;

    return (
      <Tab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          style: {
            elevation: 1,
            borderTopWidth: 0,
          },
          showLabel: false,
        }}
        initialRouteName="HomeTab"
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            unmountOnBlur: true,
            tabBarIcon: ({ focused }) => (
              <UI.Icon
                name="ios-home"
                color={focused ? colors.primary : colors.grey}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
 
const mapStateToProps = (state: IRootState) => {
  return {
    colors: state.colors,
  };
};

export default connect(mapStateToProps)(BottomNavigation);
