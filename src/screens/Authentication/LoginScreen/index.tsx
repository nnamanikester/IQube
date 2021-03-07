import * as React from 'react';
import * as UI from '<common>/index';

export interface LoginScreenProps {
  
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
 
export default LoginScreen;