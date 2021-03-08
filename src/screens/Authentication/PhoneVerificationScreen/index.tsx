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
export interface PhoneVerificationScreenProps {
  colors: ColorsState,
  isDark: boolean,
  navigation: any,
}
 
export interface PhoneVerificationScreenState {
  pin: string,
  showPassword: boolean,
}
 
class PhoneVerificationScreen extends React.Component<PhoneVerificationScreenProps, PhoneVerificationScreenState> {
  constructor(props: PhoneVerificationScreenProps) {
    super(props);
    this.state = {
      pin: '',
      showPassword: false,
    };
  }
  render() {
    const { isDark, colors, navigation } = this.props;
    const { pin, showPassword } = this.state;

    return (
      <>
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor="#c0faf7"
        />

        <UI.Layout noScroll style={{ paddingHorizontal: wd('3%') }}>
          
          <UI.Block flex middle width={wd('90%')}>
            <SVGIcon name="lock-2" size={wd('60%')} />

            <UI.Spacer large />
            
            <UI.Block center width={wd('60%')}>
              <UI.Text h1 style={styles.center}>Verify your phone number</UI.Text>
            </UI.Block>

            <UI.Spacer />

            <UI.Block center width={wd('70%')}>
              <UI.Text style={styles.center}>We have sent an OTP PIN via SMS to the number you entered.</UI.Text>
            </UI.Block>

            <UI.Spacer medium />

            <UI.Block>
              <UI.TextInput
                iconLeft={<UI.Icon name="unlock" type="AntDesign" />}
                iconRight={(
                  <UI.Clickable onClick={() => this.setState({ showPassword: !showPassword })}>
                    {!showPassword ? (
                      <UI.Icon name={isIOS ? "ios-eye" : "md-eye"} />
                      ) : (
                      <UI.Icon name={isIOS ? "ios-eye-off" : "md-eye-off"} />
                    )}
                  </UI.Clickable>
                )}
                password={!showPassword}
                value={pin}
                placeholder="PIN"
                onChangeText={(val) => this.setState({ pin: val })}
              />
            </UI.Block>

            <UI.Spacer size={40} />

            <UI.Block>
              <UI.Button onClick={() => navigation.navigate('Login')}>
                <UI.Text color={colors.white}>Verify</UI.Text>
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

export default connect(mapStateToProps)(PhoneVerificationScreen);
