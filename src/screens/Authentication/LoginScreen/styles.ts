import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wd } from 'react-native-responsive-screen';

export default StyleSheet.create({
  bottomImage: {
    position: 'absolute',
    bottom: -wd('40%'),
  }
});
