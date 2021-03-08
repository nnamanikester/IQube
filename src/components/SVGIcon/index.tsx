import React from "react";
import { View, ViewProps } from "react-native";
import * as UI from '<components>/common';
import { useSelector } from "react-redux";

export interface SVGIconProps extends ViewProps {
  name: string,
  size?: string | number,
  color?: string,
  width?: string | number,
  height?: string | number,
}
 
const SVGIcon: React.FC<SVGIconProps> = ({ name, size, color, style, width, height }) => {
  let Icon: React.ReactNode = <></>;

  const colors = useSelector((state: any) => state.colors);

  switch (name) {
    case "logo":
      Icon = require("./Logo").default;
      break;
    case "payment-1":
      Icon = require("./Payment1").default;
      break;
    case "payment-2":
      Icon = require("./Payment2").default;
      break;
    case "payment-3":
      Icon = require("./Payment3").default;
      break;
    case "apple":
      Icon = require("./Apple").default;
      break;
    case "facebook":
      Icon = require("./Facebook").default;
      break;
    case "google":
      Icon = require("./Google").default;
      break;
    default:
      Icon = () => <UI.Icon name="question" type="AntDesign" color={colors.danger} />;
      break;
  }

  return (
    <View style={style}>
      <Icon width={width || size} height={height || size} fill={color || colors.text} />
    </View>
  );
};

export default SVGIcon;
