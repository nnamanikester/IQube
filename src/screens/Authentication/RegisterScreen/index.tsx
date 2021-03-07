import * as React from 'react';
import * as UI from '<components>/common'
import { connect } from "react-redux";
import { ColorsState } from "<root>/states/colors/types";
import { IRootState } from "<root>/states";

export interface RegisterScreenProps {
  colors: ColorsState,
}
 
export interface RegisterScreenState {
  
}
 
class RegisterScreen extends React.Component<RegisterScreenProps, RegisterScreenState> {
  constructor(props: RegisterScreenProps) {
    super(props);
    this.state = { };
  }
  render() { 
    return (
      <UI.Layout>
        <UI.Text>Register Screen</UI.Text>
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

export default connect(mapStateToProps)(RegisterScreen);
