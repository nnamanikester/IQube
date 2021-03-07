import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  StyleSheet,
  Platform,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import { useSelector } from 'react-redux';
import { Clickable } from '../Clickable';
import { Icon } from '../Icon';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export interface CheckBoxProps {
  /**
   * Invoked when a click event is performed.
   */
  onChange: Function | null,
  value: boolean,
  size?: number,
}

/**
 * A component for creating an area that can be
 */
const CheckBox: React.FC<CheckBoxProps> = ({ onChange, value, size = 22 }) => {
  const [anim, setAnim] = React.useState(false);
  const colors = useSelector((state: any) => state.colors);

  const styles = StyleSheet.create({
    unCheck: {
      borderWidth: 1.5,
      borderColor: '#B3B8BC',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
    },
    check: {
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 2,
    },
  });

  React.useEffect(() => {
    setAnim(true);
  }, [anim]);

  React.useMemo(() => {
    if (anim) {
      LayoutAnimation.easeInEaseOut();
    }
  }, [value]);

  return (
    <View>
      {value ? (
        <Clickable
          onClick={onChange}
          style={{ ...styles.check, width: size, height: size }}>
          <Icon size={22} name="md-checkmark" color="#fff" />
        </Clickable>
      ) : (
        <Clickable
          onClick={onChange}
          style={{ ...styles.unCheck, width: size, height: size }}>
          <View />
        </Clickable>
      )}
    </View>
  );
};

export { CheckBox };
