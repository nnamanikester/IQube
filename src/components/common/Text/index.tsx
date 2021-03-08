import PropTypes from "prop-types";
import React from "react";
import { Text as TXT, StyleSheet, TextProps as TXTProps, TextStyle } from "react-native";
import {
  widthPercentageToDP as wd,
  heightPercentageToDP as hd,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";

export interface TextProps extends TXTProps {
  /**
   * Used to change the font size of the `Text`. Default is `16`.
   */
  size?: number,
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  bold?: boolean,
  color?: string,
  note?: boolean,
}

/**
 * A component for displaying texts which supports
 */
export const Text: React.FC<TextProps> = ({
  h1=false,
  h2=false,
  h3=false,
  bold=false,
  note = false,
  size,
  children,
  color,
  style,
}) => {
  const colors = useSelector((state: any) => state.colors);

  const styles = StyleSheet.create({
    text: {
      color: colors.text,
      fontSize: 17,
      lineHeight: 24,
      fontFamily: "Circle-Std",
    },
  });

  const textStyle: TextStyle = {};

  if (h1) {
    textStyle.fontSize = hd('2.7%');
    textStyle.color = colors.black;
    textStyle.lineHeight = hd('3.5%');
  } else if (h2) {
    textStyle.fontSize = hd("2.3%");
    textStyle.color = colors.black;
  } else if (h3) {
    textStyle.fontSize = hd("1.8%");
    textStyle.color = colors.black;
  } else if (note) {
    textStyle.color = colors.inactive;
    textStyle.fontSize = wd("2.5%");
    textStyle.lineHeight = wd("3%");
  } else if (size) {
    textStyle.fontSize = size;
    textStyle.lineHeight = size + 5;
  }

  if (color) {
    textStyle.color = color;
  }

  if (bold) {
    textStyle.fontWeight = '700';
  }

  return (
    <TXT style={[ styles.text, textStyle, style ]}>
      {children}
    </TXT>
  );
};
