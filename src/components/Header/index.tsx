import * as React from 'react';
import { View } from 'react-native';
import * as UI from '<common>/index';
import styles from './styles';
import { ColorsState } from '<root>/states/colors/types';
import { connect } from 'react-redux';
import { IRootState } from '<root>/states';

export interface HeaderProps {
  colors?: ColorsState,
  right?: React.ReactNode,
  left?: React.ReactNode,
  center?: React.ReactNode,
}
 
const Header: React.FC<HeaderProps> = ({ colors, right, left, center }) => {
  return (
    <>
      <UI.Block backgroundColor={colors?.white} style={styles.container}>
        {left && (
          <View style={styles.leftContainer}>{left}</View>
        )}
        <View style={styles.centerContainer}>{center}</View>
        {right && (
          <View style={styles.rightContainer}>{right}</View>
        )}
      </UI.Block>
    </>
  );
}
 
const mapStateToProps = (state: IRootState) => {
  return {
    colors: state.colors,
  }
};

export default connect(mapStateToProps)(Header);
