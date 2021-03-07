import React from "react";
import { useSelector } from "react-redux";
import {
  TextInput as TI,
  View,
  StyleSheet,
  Platform,
  LayoutAnimation,
  UIManager,
  TextInputProps as TIProps,
  ViewStyle,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData
} from "react-native";
import { heightPercentageToDP as hd } from "react-native-responsive-screen";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export interface TextInputProps extends TIProps {
  password: boolean,
  iconRight: React.ReactNode,
  iconLeft: React.ReactNode,
  error: boolean,
  type: 'normal' | 'disabled' | 'outline' | 'ghost',
  shape: 'normal' | 'rounded',
  rows: number,
  containerStyle: ViewStyle,
}

export const TextInput: React.FC<TextInputProps> = (props) => {
  const colors = useSelector((state: any) => state.colors);
  const {
    onFocus,
    onBlur,
    onEndEditing,
    password,
    rows,
    iconRight,
    iconLeft,
    error,
    type,
    shape,
    containerStyle,
  } = props;
  
  let iconLeftStyle: ViewStyle = {
    paddingLeft: iconLeft ? 50 : 10
  };
  let iconRightStyle: ViewStyle = {
    paddingRight: iconRight ? 50 : 10
  };
  const errorStyle: TextStyle = error ? { color: colors.danger, borderColor: colors.danger } : {};
  let shapeStyle: ViewStyle = {
    borderRadius: shape === 'rounded' ? 50 : shape === 'normal' ? 5 : 5,
  }
  let typeStyle: TextStyle = {};
  let editable = true;

  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },
    input: {
      borderWidth: 1.5,
      borderColor: colors.inactive,
      borderRadius: 5,
      height: hd("6%"),
      color: colors.text,
      fontSize: hd("1.6"),
      fontFamily: "Nunito-Regular",
      paddingHorizontal: 10,
      flex: 1,
      backgroundColor: colors.white,
    },
    iconLeft: {
      alignItems: "center",
      paddingHorizontal: 10,
      position: "absolute",
      left: 5,
      zIndex: 10,
    },
    iconRight: {
      alignItems: "center",
      paddingHorizontal: 10,
      position: "absolute",
      right: 5,
      zIndex: 10,
    },
  });

  const [active, setActive] = React.useState(false);

  switch (type) {
    case "disabled":
      editable = false;
      break;
    case "outline":
      typeStyle = {
        borderWidth: 1,
        borderColor: colors.primary,
      };
      break;
    case "ghost":
      typeStyle = {
        elevation: 2,
      };
      break;
    default:
      typeStyle = {};
      break;
  }

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    LayoutAnimation.easeInEaseOut();
    if (onFocus) {
      onFocus(e);
    }
    return setActive(true);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    LayoutAnimation.easeInEaseOut();
    if (onBlur) {
      onBlur(e);
    }
    return setActive(false);
  };

  return (
    <View style={{ marginTop: active ? 5 : 0, ...containerStyle }}>
      <View style={{ ...styles.container }}>
        {iconLeft ? (
          <View style={{ ...styles.iconLeft }}>{iconLeft}</View>
        ) : null}
        <TI
          onEndEditing={onEndEditing}
          onFocus={handleFocus}
          onBlur={handleBlur}
          secureTextEntry={password}
          numberOfLines={rows}
          textBreakStrategy="highQuality"
          placeholderTextColor={colors.grey}
          editable={editable}
          style={{
            ...styles.input,
            ...iconLeftStyle,
            ...iconRightStyle,
            ...errorStyle,
            ...typeStyle,
            ...shapeStyle,
            borderColor: active
              ? colors.primary
              : error
              ? colors.danger
              : colors.inactive,
          }}
          {...props}
        />
        {iconRight ? (
          <View style={{ ...styles.iconRight }}>{iconRight}</View>
        ) : null}
      </View>
    </View>
  );
};
