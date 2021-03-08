import * as React from 'react';
import { StatusBar, Platform } from 'react-native';
import * as UI from '<components>/common'
import { connect } from "react-redux";
import { ColorsState } from "<root>/states/colors/types";
import { IRootState } from "<root>/states";
import SVGIcon from '<components>/SVGIcon';
import { widthPercentageToDP as wd } from 'react-native-responsive-screen';
import styles from './styles';


export interface PasswordSentScreenProps {
  colors: ColorsState,
  isDark: boolean,
  navigation: any,
}
 
export interface PasswordSentScreenState {
  
}
 
class PasswordSentScreen extends React.Component<PasswordSentScreenProps, PasswordSentScreenState> {
  constructor(props: PasswordSentScreenProps) {
    super(props);
    this.state = { };
  }
  render() {
    const { isDark, colors, navigation } = this.props;

    return (
      <>
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor="#c0faf7"
        />

        <UI.Layout noScroll style={{ paddingHorizontal: wd('3%') }}>
          
          <UI.Block flex middle width={wd('90%')}>
            <SVGIcon name="fan-box" size={wd('50%')} />

            <UI.Spacer large />
            
            <UI.Block center width={wd('60%')}>
              <UI.Text h1 style={styles.center}>We’ve got you</UI.Text>
            </UI.Block>

            <UI.Spacer large />

            <UI.Block center width={wd('50%')}>
              <UI.Text style={styles.center}>We sent you an email to reset your paasword.</UI.Text>
            </UI.Block>
          </UI.Block>


        </UI.Layout>
      </>
    );
  }
}
 
const mapStateToProps = (state: IRootState) => {
  return {
    colors: state.colors,
    isDark: state.isDark,
  };
};

export default connect(mapStateToProps)(PasswordSentScreen);
