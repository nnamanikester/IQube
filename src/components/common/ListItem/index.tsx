import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { heightPercentageToDP as hd } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';
import { Clickable, ClickableProps } from '../Clickable';

export interface ListItemProps extends ClickableProps {
  marked?: boolean,
  left?: React.ReactNode,
  right?: React.ReactNode,
  body?: React.ReactNode,
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  left=null,
  right=null,
  body=false,
  marked=false,
  onClick=() => {}
}) => {
  const colors = useSelector((state: any) => state.colors);

  const styles = StyleSheet.create({
    container: {
      borderColor: colors.inactive,
      padding: 10,
      flexDirection: 'row',
      minHeight: hd('8%'),
      alignItems: 'center',
    },
    left: {
      marginHorizontal: 10,
    },
    body: {
      marginRight: 10,
      flex: 1,
    },
    right: {
      marginHorizontal: 10,
    },
  });

  let markedStyle: ViewStyle = {};

  if (marked) {
    markedStyle = {
      backgroundColor: colors.lightPrimary,
      borderRadius: 5,
    };
  }

  return (
    <Clickable
      onClick={onClick}
      style={{ ...styles.container, ...markedStyle }}>
      {left && <View style={styles.left}>{left}</View>}
      <View style={styles.body}>{body || children}</View>
      {right && <View style={styles.right}>{right}</View>}
    </Clickable>
  );
};
