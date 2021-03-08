import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { connect } from "react-redux";
import * as UI from "<common>/index";
import HomeScreen from "<screens>/Dashboard/HomeScreen";
import { IRootState } from "<root>/states";
import { ColorsState } from "<root>/states/colors/types";
import { heightPercentageToDP as hd } from "react-native-responsive-screen";
import styles from "./styles";
import SVGIcon from "<components>/SVGIcon";

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
            height: hd('8%'),
          },
        }}
        initialRouteName="HomeTab"
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                <UI.Block
                  backgroundColor={focused ? colors.warning : colors.grey}
                  style={styles.topContent}
                />
                <UI.Icon
                  style={{ top: 3 }}
                  name="home"
                  type="Feather"
                  size={focused ? 30 : 28}
                  color={focused ? colors.warning : colors.grey}
                />
              </>
            ),
            tabBarLabel: ({ focused }) => (
              <UI.Text
                style={{ top: -5 }}
                size={focused ? 14 : 12}
                color={focused ? colors.warning : colors.grey}
              >
                Home
              </UI.Text>
            ),
          }}
        />
        <Tab.Screen
          name="ItemsTab"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <>
                <UI.Block
                  backgroundColor={focused ? colors.warning : colors.grey}
                  style={styles.topContent}
                />
                <UI.Icon
                  style={{ top: 3 }}
                  name="star"
                  type="Feather"
                  size={focused ? 30 : 28}
                  color={focused ? colors.warning : colors.grey}
                />
              </>
            ),
            tabBarLabel: ({ focused }) => (
              <UI.Text
                style={{ top: -5 }}
                size={focused ? 14 : 12}
                color={focused ? colors.warning : colors.grey}
              >
                My Items
              </UI.Text>
            ),
          }}
        />
        <Tab.Screen
          name="AddTab"
          component={HomeScreen}
          options={{
            tabBarLabel: () => null,
            tabBarIcon: ({ focused }) => (
              <UI.Block middle backgroundColor={colors.primary} style={styles.addTab}>
                <UI.Icon
                  name="plus"
                  type="Feather"
                  size={focused ? 34 : 28}
                  color={colors.white}
                />
              </UI.Block>
            ),
          }}
        />
        <Tab.Screen
          name="ChatTab"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <SVGIcon
                style={{ top: 3 }}
                name="chat"
                size={focused ? 30 : 28}
                color={focused ? colors.warning : colors.grey}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <UI.Text
                style={{ top: -5 }}
                size={focused ? 14 : 12}
                color={focused ? colors.warning : colors.grey}
              >
                Chat
              </UI.Text>
            ),
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <UI.Icon
                style={{ top: 3 }}
                name="user"
                type="Feather"
                size={focused ? 30 : 28}
                color={focused ? colors.warning : colors.grey}
              />
            ),
            tabBarLabel: ({ focused }) => (
              <UI.Text
                  style={{ top: -5 }}
                size={focused ? 14 : 12}
                color={focused ? colors.warning : colors.grey}
              >
                Profile
              </UI.Text>
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
