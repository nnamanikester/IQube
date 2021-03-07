import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet, ActivityIndicator, StatusBar, ViewProps } from 'react-native';
import { widthPercentageToDP as wd } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';

export interface LoadingProps extends ViewProps {
  show: boolean,
}

export const Loading: React.FC<LoadingProps> = ({ show = false }) => {
  if (!show) {
    return null;
  }

  const colors = useSelector((state: any) => state.colors);

  const styles = StyleSheet.create({
    background: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '100%',
      height: '100%',
      flex: 1,
      zIndex: 999999999999999,
      backgroundColor: colors.primary,
    },
  });

  return (
    <View style={[styles.background]}>
      <StatusBar backgroundColor={colors.primary} />
      <ActivityIndicator color={colors.white} size={wd('15%')} />
    </View>
  );
};
