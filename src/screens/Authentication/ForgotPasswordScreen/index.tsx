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

export interface ForgotPasswordScreenProps {
  colors: ColorsState,
  isDark: boolean,
  navigation: any,
}
 
export interface ForgotPasswordScreenState {
  email: string,
}
 
class ForgotPasswordScreen extends React.Component<ForgotPasswordScreenProps, ForgotPasswordScreenState> {
  constructor(props: ForgotPasswordScreenProps) {
    super(props);
    this.state = {
      email: '',
    };
  }
  render() {
    const { isDark, colors, navigation } = this.props;
    const { email } = this.state;

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
            
            <UI.Block center width={wd('65%')}>
              <UI.Text h1 style={styles.center}>Forgot your password? Oh no!</UI.Text>
            </UI.Block>

            <UI.Spacer />

            <UI.Block center width={wd('70%')}>
              <UI.Text style={styles.center}>Enter your email address below to reset your password.</UI.Text>
            </UI.Block>

            <UI.Spacer medium />

            <UI.Block>
              <UI.TextInput
                iconLeft={<UI.Icon name="mail" type="Feather" />}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={(val) => this.setState({ email: val })}
              />
            </UI.Block>

            <UI.Spacer size={40} />

            <UI.Block>
              <UI.Button onClick={() => navigation.navigate('PasswordSent')}>
                <UI.Text color={colors.white}>Reset password</UI.Text>
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

export default connect(mapStateToProps)(ForgotPasswordScreen);
