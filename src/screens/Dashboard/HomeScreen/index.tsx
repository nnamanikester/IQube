import * as React from 'react';
import { StatusBar, Platform } from 'react-native';
import { connect } from 'react-redux';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from 'react-native-responsive-screen';
import * as UI from '<common>/index';
import SVGIcon from '<components>/SVGIcon';
import { ColorsState } from '<states>/colors/types';
import { logOut } from '<states>/auth/actions';
import { IRootState } from '<states>/index';
import Header from '<components>/Header';
import styles from './styles';

const isIOS = Platform.OS === 'ios';

export interface HomeScreenProps {
  colors: ColorsState,
  isDark: boolean,
  logOut: (mode: boolean) => void,
}
 
export interface HomeScreenState {
  
}
 
class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {
  constructor(props: HomeScreenProps) {
    super(props);
    this.state = { };
  }

  render() { 
    const { colors, isDark, logOut } = this.props;

    return (
      <>
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor={colors.white}
        />

        <Header
          left={<UI.Text h2>Welcome</UI.Text>}
          right={(
            <UI.Clickable>
              <UI.Icon name={isIOS ? "ios-notifications" : "md-notifications"} color={colors.grey} />
              <UI.Block middle style={styles.badgeContainer} backgroundColor={colors.white}>
                <UI.Block style={styles.badge} backgroundColor={colors.primary} />
              </UI.Block>
            </UI.Clickable>
          )}
        />

        <UI.Layout style={{ backgroundColor: colors.background }}>
          <UI.Block middle height={hd('80%')}>
            <SVGIcon name="welcome" size={wd('80%')} />
            
            <UI.Text size={24}>Welcome to the App</UI.Text>

            <UI.Spacer large />

            <UI.Button size="small" onClick={() => logOut(isDark)}>
              <UI.Text color={colors.white}>Logout</UI.Text>
            </UI.Button>
          </UI.Block>
        </UI.Layout>
      </>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    colors: state.colors,
  }
}
 
export default connect(mapStateToProps, { logOut })(HomeScreen);