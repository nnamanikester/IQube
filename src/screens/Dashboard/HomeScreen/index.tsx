import * as React from 'react';
import * as UI from '<common>/index';

export interface HomeScreenProps {
  
}
 
export interface HomeScreenState {
  
}
 
class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  constructor(props: HomeScreenProps) {
    super(props);
    this.state = { };
  }
  render() { 
    return (
      <UI.Layout>
        <UI.Text h1>Home Screen</UI.Text>
      </UI.Layout>
    );
  }
}
 
export default HomeScreen;