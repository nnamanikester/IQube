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
export interface RegisterScreenProps {
  colors: ColorsState,
  isDark: boolean,
  navigation: any,
}
 
export interface RegisterScreenState {
  name: string,
  email: string,
  phone: string,
  password: string,
  showPassword: boolean,
}
 
class RegisterScreen extends React.Component<RegisterScreenProps, RegisterScreenState> {
  constructor(props: RegisterScreenProps) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      password: '',
      showPassword: false,
     };
  }
  render() {
    const { isDark, colors, navigation } = this.props;
    const { name, email, phone, password, showPassword } = this.state;

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

          <UI.Text h2 bold>Sign up</UI.Text>
          <UI.Spacer />
          <UI.Text size={15}>Enter your credentials to continue</UI.Text>

          <UI.Spacer medium />
            
          <UI.Block>
            <UI.TextInput
              iconLeft={<UI.Icon name="user" type="AntDesign" />}
              value={name}
              placeholder="Name"
              onChangeText={(val) => this.setState({ name: val })}
            />

            <UI.Spacer medium />

            <UI.TextInput
              iconLeft={<UI.Icon name="mail" type="Feather" />}
              value={email}
              keyboardType="email-address"
              placeholder="Email"
              onChangeText={(val) => this.setState({ email: val })}
            />

            <UI.Spacer medium />

            <UI.TextInput
              iconLeft={<UI.Icon name="smartphone" type="Feather" />}
              value={phone}
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={(val) => this.setState({ phone: val })}
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

            <UI.Button onClick={() => navigation.navigate('EmailVerification')}>
              <UI.Text color={colors.white}>Sign up</UI.Text>
            </UI.Button>
          </UI.Block>

          <UI.Spacer medium />

          <UI.Text h3>Or sign up with</UI.Text>

          <UI.Spacer />

          <UI.Block row justify="space-between">
            <UI.Clickable>
              <UI.Block
                middle
                backgroundColor={colors.white}
                style={[
                  styles.socialBox,
                  { borderColor: colors.inactive },
                ]}
              >
                <SVGIcon name="google" size={30} />
              </UI.Block>
            </UI.Clickable>
            <UI.Clickable>
              <UI.Block
                middle
                backgroundColor={colors.white}
                style={[
                  styles.socialBox,
                  { borderColor: colors.inactive },
                ]}
              >
                <SVGIcon name="apple" size={30} />
              </UI.Block>
            </UI.Clickable>
            <UI.Clickable>
              <UI.Block
                middle
                backgroundColor={colors.white}
                style={[
                  styles.socialBox,
                  { borderColor: colors.inactive },
                ]}
              >
                <SVGIcon name="facebook" size={30} />
              </UI.Block>
            </UI.Clickable>
          </UI.Block>

          <UI.Spacer large />

          <UI.Block row middle>
            <UI.Text h3>Already have an account?</UI.Text>
            <UI.Spacer />
            <UI.Clickable onClick={() => navigation.navigate('Login')}>
              <UI.Block row center>
                <UI.Text color={colors.primary}>Log in</UI.Text>
                <UI.Icon
                  color={colors.primary}
                  size={14} name={isIOS ? "ios-caret-forward-outline" : "md-caret-forward-outline"}
                />
              </UI.Block>
            </UI.Clickable>
          </UI.Block>

          <UI.Spacer size={50} />
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

export default connect(mapStateToProps)(RegisterScreen);
