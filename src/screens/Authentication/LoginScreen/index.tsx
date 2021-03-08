import * as React from 'react';
import { StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import * as UI from '<common>/index';
import { connect } from "react-redux";
import { ColorsState } from "<root>/states/colors/types";
import { IRootState } from "<root>/states";
import { setUser } from '<states>/auth/actions';
import SVGIcon from '<components>/SVGIcon';
import {
  widthPercentageToDP as wd
} from 'react-native-responsive-screen';
import styles from './styles';
import { IUserPayload } from '<root>/states/auth/types';

const isIOS = Platform.OS === 'ios';
export interface LoginScreenProps {
  colors: ColorsState,
  isDark: boolean,
  navigation: any,
  setUser: (user: IUserPayload) => void,
}
 
export interface LoginScreenState {
  email: string,
  password: string,
  showPassword: boolean,
  remember: boolean,
}
 
class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {
  constructor(props: LoginScreenProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showPassword: false,
      remember: true,
    };
  }
  render() {
    const { isDark, colors, navigation, setUser } = this.props;
    const { email, password, showPassword, remember } = this.state;

    return (
      <>
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor="#c0faf7"
        />

        <UI.Layout style={{ paddingHorizontal: wd('3%') }}>
          <UI.Block center>
            <UI.Spacer large />
            <SVGIcon name="logo" width={110} height={60} />
            <UI.Text size={13}>make extra cash now</UI.Text>
          </UI.Block>

          <UI.Spacer medium />

          <UI.Text h2 bold>Login</UI.Text>
          <UI.Spacer />
          <UI.Text size={15}>Enter your email and password</UI.Text>

          <UI.Spacer medium />
            
          <UI.Block>
            <UI.TextInput
              iconLeft={<UI.Icon name="mail" type="Feather" />}
              value={email}
              keyboardType="email-address"
              placeholder="Email"
              onChangeText={(val) => this.setState({ email: val })}
            />

            <UI.Spacer medium />

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
              value={password}
              placeholder="Password"
              onChangeText={(val) => this.setState({ password: val })}
            />

            <UI.Spacer medium />

            <UI.Block row justify="space-between">
              <UI.Block row width="auto">
                <UI.Switch
                  value={remember}
                  onValueChange={() => this.setState({ remember: !remember })}
                />
                <UI.Spacer size={2} />
                <UI.Text color={colors.black}>Remember me</UI.Text>
              </UI.Block>
              <UI.Link
                onClick={() => navigation.navigate('ForgotPassword')}
                color={colors.danger}
              >
                Forgot password?
              </UI.Link>
            </UI.Block>

            <UI.Spacer medium />

            <UI.Button onClick={() => setUser({ email: 'user@email.com' })}>
              <UI.Text color={colors.white}>Login</UI.Text>
            </UI.Button>
          </UI.Block>

          <UI.Spacer medium />

          <UI.Block row middle>
            <UI.Text h3>Don’t have an account?</UI.Text>
            <UI.Spacer />
            <UI.Clickable onClick={() => navigation.navigate('Register')}>
              <UI.Block row center>
                <UI.Text color={colors.primary}>Sign up</UI.Text>
                <UI.Icon
                  color={colors.primary}
                  size={14} name={isIOS ? "ios-caret-forward-outline" : "md-caret-forward-outline"}
                />
              </UI.Block>
            </UI.Clickable>
          </UI.Block>
        </UI.Layout>
        
        <UI.Block style={styles.bottomImage}>
          <SVGIcon name="payment-1" size={wd('100%')} />
        </UI.Block>
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

export default connect(mapStateToProps, { setUser })(LoginScreen);
