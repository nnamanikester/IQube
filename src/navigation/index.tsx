import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import AppLoading from "expo-app-loading";
import MainFlow from "./MainFlow";
import AuthFlow from "./AuthFlow";
import { AuthState, IUserPayload } from "<root>/states/auth/types";
import { IRootState } from "<root>/states";
import AsyncStorage from "@react-native-community/async-storage";
import { STORAGE_USER } from "<root>/constants";
import { setUser } from "<root>/states/actions";

export interface NavigationFlowProps {
  auth: AuthState,
  setUser: (user: IUserPayload) => void,
}
 
export interface NavigationFlowState {
  isLoading: boolean,
}
 
class NavigationFlow extends React.Component<NavigationFlowProps, NavigationFlowState> {
  constructor(props: NavigationFlowProps) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    const { setUser } = this.props;

    const user: any = await AsyncStorage.getItem(STORAGE_USER);
    if (user) {
      setUser(JSON.parse(user));
    }
  }

  render() {
    const { isLoading } = this.state;
    const { auth } = this.props;

    if (isLoading) {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 500);
      return <AppLoading />;
    }
  
    return (
      <NavigationContainer>
        {auth.isLogged ? <MainFlow /> : <AuthFlow />}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { setUser })(NavigationFlow);
