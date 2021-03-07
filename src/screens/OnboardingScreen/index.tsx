import React from "react";
import { StatusBar } from "react-native";
import Swiper from "react-native-swiper";
import { connect } from "react-redux";
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import * as UI from "<components>/common";
import SVGIcon from '<components>/SVGIcon';
import styles from "./styles";
import { ColorsState } from "<root>/states/colors/types";
import { IRootState } from "<root>/states";

export interface OnboardingScreenProps {
  colors: ColorsState,
  isDark: boolean,
  onFinish: () => void,
  navigation: any,
}
 
export interface OnboardingScreenState {
  index: number,
  swiperCount: number,
}
 

class OnboardingScreen extends React.Component<OnboardingScreenProps, OnboardingScreenState> {
  swiper: any;

  constructor(props: OnboardingScreenProps) {
    super(props);
    this.state = {
      index: 0,
      swiperCount: 0,
    };
    this.swiper = React.createRef();
  }

  componentDidMount() {
    if (this.swiper && this.swiper.current) {
      if (Array.isArray(this.swiper.current.props.children)) {
        this.setState({
          swiperCount: this.swiper.current.props.children.length,
        });
      }
    }
  }

  goToNext = () => {
    const { swiperCount, index } = this.state;

    if (this.swiper && this.swiper.current) {
      if (swiperCount - 1 !== index) {
        return this.swiper.current.scrollBy(1, true);
      }
      return null;
    }
    return null;
  };

  render() {
    const { colors, isDark, navigation } = this.props;
    const { index, swiperCount } = this.state;

    return (
      <>
        <StatusBar
          barStyle={isDark ? "light-content" : "dark-content"}
          backgroundColor="#c0faf7"
        />

        <UI.Layout>
          <UI.Block center>
            <UI.Spacer large />
            <SVGIcon name="logo" width={110} height={60} />
            <UI.Text size={13}>make extra cash now</UI.Text>
          </UI.Block>

          <Swiper
            loop={false}
            bounces
            showsPagination={false}
            onIndexChanged={(i) => this.setState({ index: i })}
            ref={this.swiper}
            height={hd("70%")}
          >
            {/* Slide One */}
            <UI.Block center>
              <SVGIcon name="payment-1" size={wd('100%')} />
              <UI.Block center width={wd('50%')}>
                <UI.Text style={styles.center} h1>Make extra cash from your stuff</UI.Text>
              </UI.Block>
              <UI.Spacer />
              <UI.Block center width={wd('80%')}>
                <UI.Text style={styles.center}>
                  Do you have things other people need? Great!
                  Start making some cool cash by lending to other people.
                </UI.Text>
              </UI.Block>
            </UI.Block>

            {/* Slide Two */}
            <UI.Block center>
              <SVGIcon name="payment-2" size={wd('100%')} />
              <UI.Block center width={wd('50%')}>
                <UI.Text style={styles.center} h1>Build your dream now, no obstacles!</UI.Text>
              </UI.Block>
              <UI.Spacer />
              <UI.Block center width={wd('80%')}>
                <UI.Text style={styles.center}>
                  Do you have things other people need? Great!
                  Start making some cool cash by lending to other people.
                </UI.Text>
              </UI.Block>
            </UI.Block>

            {/* Slide Three */}
            <UI.Block center>
              <SVGIcon name="payment-3" size={wd('100%')} />
              <UI.Block center width={wd('60%')}>
                <UI.Text style={styles.center} h1>Help the community get better</UI.Text>
              </UI.Block>
              <UI.Spacer />
              <UI.Block center width={wd('80%')}>
                <UI.Text style={styles.center}>
                  Do you have things other people need? Great!
                  Start making some cool cash by lending to other people.
                </UI.Text>
              </UI.Block>
            </UI.Block>
          </Swiper>

          <UI.Block center>
            {swiperCount - 1 === index ? (
              <UI.Block width={wd('85%')}>
                <UI.Button onClick={() => navigation.navigate('Register')}>
                  <UI.Text color={colors.white}>Get Started</UI.Text>
                </UI.Button>
              </UI.Block>
            ) : (
              <UI.Block width={wd('85%')}>
                <UI.Button onClick={this.goToNext}>
                  <UI.Text color={colors.white}>Continue</UI.Text>
                </UI.Button>
              </UI.Block>
            )}
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

export default connect(mapStateToProps)(OnboardingScreen);
