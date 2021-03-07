import React from "react";
import SmoothPin from "react-native-smooth-pincode-input";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { widthPercentageToDP as wd } from "react-native-responsive-screen";
import { TextInputProps, ViewStyle } from "react-native";

export interface PinInputProps extends TextInputProps {
  /**
   * A callback function to be called when the input is filled.
   */
  onFinish?: () => void | undefined,
  /**
   * Determined if the input is hidden or not. Default is false.
   */
  password?: boolean,
  /**
   * The number of input boxes. Default is 4,
   */
  length?: number,
  /**
   * If true, focuses the input on screen render.
   */
  autoFocus?: boolean,
  /**
   * Restrict input to numbers only
   */
  numbersOnly?: boolean,
  /**
   * A required field. The value to show for the input.
   */
  value: string,
  /**
   * Callback function that's called when the text changes.
   */
  onChangeText: () => void,
  /**
   * shows danger design
   */
  error?: boolean,
  containerStyle?: ViewStyle,
  focusedStyle?: ViewStyle,
  cellStyle?: ViewStyle,
}

export const PinInput: React.FC<PinInputProps> = ({
  keyboardType,
  value,
  onChangeText,
  onFinish,
  password,
  length,
  autoFocus,
  numbersOnly,
  editable,
  placeholder,
  containerStyle,
  focusedStyle,
  cellStyle,
  error,
}) => {
  const colors = useSelector((state: any) => state.colors);

  return (
    <>
      <SmoothPin
        value={value}
        onTextChange={onChangeText}
        onFulfill={onFinish}
        textStyle={{
          fontSize: wd("8%"),
          color: error ? colors.danger : colors.success,
        }}
        cellStyle={{
          borderBottomWidth: 1,
          borderRadius: 5,
          borderColor: error ? colors.danger : colors.grey,
          ...cellStyle,
        }}
        cellStyleFocused={{
          borderColor: error ? colors.danger : colors.black,
          borderBottomWidth: 2,
          ...focusedStyle,
        }}
        containerStyle={{
          width: wd("90%"),
          ...containerStyle,
        }}
        password={password}
        codeLength={length}
        placeholder={placeholder}
        autoFocus={autoFocus}
        editable={editable}
        restrictToNumbers={numbersOnly}
        onBackspace={() => {}}
        keyboardType={keyboardType}
        cellSpacing={wd("5%")}
      />
    </>
  );
};

