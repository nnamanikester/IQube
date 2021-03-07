import React from 'react';
import { Switch as SW, ViewStyle, SwitchProps as SWProps } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export interface SwitchProps extends SWProps {
}

/**
 * Renders a boolean Input (switch button)
 *
 * This is a component that requires a `onChange`  callback prop to update the `value`
 * prop in order for the component to reflect user actions.If the `value` prop is not
 * updated, the component will continue to render the the supplied `value` prop instead
 * of the expected result of any user actions.
 */
export const Switch: React.FC<SwitchProps> = (props) => {
  const colors = useSelector((state: any) => state.colors);

  return (
    <SW
      trackColor={{ true: colors.primary, false: colors.inactive }}
      thumbColor={colors.primary}
      {...props}
    />
  );
};
