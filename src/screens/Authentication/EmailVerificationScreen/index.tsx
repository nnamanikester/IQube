import * as React from 'react';
import { StatusBar, Platform } from 'react-native';
import * as UI from '<components>/common'
import { connect } from "react-redux";
import { ColorsState } from "<root>/states/colors/types";
import { IRootState } from "<root>/states";
import SVGIcon from '<components>/SVGIcon';
import { widthPercentageToDP as wd } from 'react-native-responsive-screen';
import styles from './styles';

const isIOS = Platform.OS === 'ios';
export interface EmailVerificationScreenProps {
  colors: ColorsState,
  isDark: boolean,
  navigation: any,
}
 
export interface EmailVerificationScreenState {
  
}
 
class EmailVerificationScreen extends React.Component<EmailVerificationScreenProps, EmailVerificationScreenState> {
  constructor(props: EmailVerificationScreenProps) {
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
            <SVGIcon name="lock-1" size={wd('60%')} />

            <UI.Spacer large />
            
            <UI.Block center width={wd('60%')}>
              <UI.Text h1 style={styles.center}>Verify your email address</UI.Text>
            </UI.Block>

            <UI.Spacer />

            <UI.Block center width={wd('70%')}>
              <UI.Text style={styles.center}>We have sent you an email with a link to verify your email address.</UI.Text>
            </UI.Block>

            <UI.Spacer size={50} />

            <UI.Block>
              <UI.Button onClick={() => navigation.navigate('PhoneVerification')}>
                <UI.Text color={colors.white}>Continue</UI.Text>
              </UI.Button>
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

export default connect(mapStateToProps)(EmailVerificationScreen);
