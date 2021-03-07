import * as React from 'react';
import * as UI from '<common>/index';

export interface WelcomeScreenProps {
  
}
 
export interface WelcomeScreenState {
  
}
 
class WelcomeScreen extends React.Component<WelcomeScreenProps, WelcomeScreenState> {
  constructor(props: WelcomeScreenProps) {
    super(props);
    this.state = { };
  }
  render() { 
    return (
      <UI.Layout>
        <UI.Text note>Welcome Screen</UI.Text>
      </UI.Layout>
    );
  }
}
 
export default WelcomeScreen;