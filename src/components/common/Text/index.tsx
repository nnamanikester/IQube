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
  title?: boolean,
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
  title=false,
  bold=false,
  note=false,
  size=24,
  children,
  color,
}) => {
  const colors = useSelector((state: any) => state.colors);

  const styles = StyleSheet.create({
    text: {
      color: colors.text,
      fontSize: 17,
      fontFamily: "Nunito-Regular",
    },
  });

  const textStyle: TextStyle = {};

  if (h1) {
    textStyle.fontSize = hd("3.5%");
    textStyle.fontFamily = "Lato-Black";
    textStyle.lineHeight = hd("5");
  } else if (h2) {
    textStyle.fontFamily = "Lato-Black";
    textStyle.fontSize = hd("3.2%");
    textStyle.lineHeight = hd("3.7%");
  } else if (h3) {
    textStyle.fontFamily = "Lato-Black";
    textStyle.fontSize = hd("2.3%");
    textStyle.lineHeight = hd("3%");
  } else if (title) {
    textStyle.fontFamily = "Lato-Black";
    textStyle.fontSize = hd("2.3%");
  } else if (note) {
    textStyle.color = colors.inactive;
    textStyle.fontSize = wd("2.5%");
    textStyle.lineHeight = wd("3%");
  } else if (size) {
    textStyle.fontSize = size;
    textStyle.lineHeight = size + 5;
  } else {
    textStyle.fontSize = 17;
    textStyle.lineHeight = wd("4.5%");
  }

  if (color) {
    textStyle.color = color;
  } else {
    textStyle.color = colors.text;
  }

  if (bold) {
    textStyle.fontFamily = "Nunito-Bold";
  }

  return (
    <TXT style={{ ...styles.text, ...textStyle }}>
      {children}
    </TXT>
  );
};
