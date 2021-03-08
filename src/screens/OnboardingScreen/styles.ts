import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hd
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  dotContainer: {
    bottom: hd('5%'),
  },
  dot: {
    backgroundColor: '#000000',
    width: wd('2.5%'),
    height: wd('2.5%'),
    opacity: 0.4,
    borderRadius: 100,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000000',
    width: wd('6%'),
    height: wd('2.5%'),
    borderRadius: 100,
    marginHorizontal: 4,
  },
});
