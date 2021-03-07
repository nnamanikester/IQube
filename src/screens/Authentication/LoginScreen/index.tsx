import * as React from 'react';
import * as UI from '<common>/index';
import { connect } from "react-redux";
import { ColorsState } from "<root>/states/colors/types";
import { IRootState } from "<root>/states";

export interface LoginScreenProps {
  colors: ColorsState,
}
 
export interface LoginScreenState {
  
}
 
class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
  constructor(props: LoginScreenProps) {
    super(props);
    this.state = { };
  }
  render() { 
    return (
      <UI.Layout>
        <UI.Text h1>Login Screen</UI.Text>
      </UI.Layout>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    colors: state.colors,
    isDark: state.isDark,
  };
};

export default connect(mapStateToProps)(LoginScreen);
