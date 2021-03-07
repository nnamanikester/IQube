import React from "react";
import styled from 'styled-components/native';
import {
  heightPercentageToDP as hd,
  widthPercentageToDP as wd,
} from "react-native-responsive-screen";
import { Clickable, ClickableProps } from "../Clickable";
import { ColorsState } from "<root>/states/colors/types";
import { useSelector } from "react-redux";

interface StyledButtonProps extends ClickableProps {
  /**
   * Defines the type of button to render.
   */
  type?: 'normal' | 'outline' | 'disabled' | 'ghost',
  /**
   * Defines the size of the button
   * `small` or `large`
   */
  size?: 'small' | 'large',
  /**
   * An element to show at the left of the button component
   */
  iconLeft?: React.ReactNode,
  /**
   * An element to show at the right of the button component
   */
  iconRight?: React.ReactNode,
  /**
   * Shows or hides the a divider between the Icons if exists
   */
  showIconDivider?: boolean,
  /**
   * Colors from the IColors interface
   */
  colors: ColorsState,
}

export interface ButtonProps extends ClickableProps {
  /**
   * Defines the type of button to render.
   */
  type?: 'normal' | 'outline' | 'disabled' | 'ghost',
  /**
   * Defines the size of the button
   * `small` or `large`
   */
  size?: 'small' | 'large',
  /**
   * An element to show at the left of the button component
   */
  iconLeft?: React.ReactNode,
  /**
   * An element to show at the right of the button component
   */
  iconRight?: React.ReactNode,
  /**
   * Shows or hides the a divider between the Icons if exists
   */
  showIconDivider?: boolean,
}

export interface ButtonIconProps {
  colors: ColorsState,
  showIconDivider?: boolean,
}

const StyledButton: React.FC<StyledButtonProps> = styled(Clickable).attrs<StyledButtonProps>(({ onClick, type }) => ({
  // onClick: null,
  activeOpacity: type === 'disabled' ? 1 : 0.8,
}))<StyledButtonProps>`
  border-radius: 6px;
  height: ${hd("6%")}px;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background-color: ${({ colors, type }) => type === 'disabled'
    ? colors.lightPrimary : type === 'outline'
      ? colors.white : type === 'ghost'
        ? colors.background : colors.primary
  };
  elevation: ${({ type }) => type === 'outline' || type === 'normal' ? '2' : '0'};
  border-width: ${({ type }) => type === 'outline' ? '1px' : '0'};
  border-color: ${({ type, colors }) => type === 'outline' ? colors.primary : 'transparent'};
  width: ${({ size }) => size === 'small' ? `${wd('44%')}px` : '100%'};
`;

const IconLeft = styled.View.attrs<ButtonIconProps>((props) => ({
  showDividerIcon: props.showIconDivider || false,
}))<ButtonIconProps>`
  align-items: center;
  border-right-width: 1px;
  border-color: ${({ colors }) => colors.inactive};
  border-right-color: ${({ colors }) => colors.grey};
  border-right-width: ${(props) => props.showIconDivider ? '1px' : '0'};
  padding-left: 15px;
  padding-right: 15px;
`;

const IconRight = styled.View.attrs<ButtonIconProps>((props) => ({
  showDividerIcon: props.showIconDivider || false,
}))<ButtonIconProps>`
  align-items: center;
  border-left-width: 1px;
  border-color: ${({ colors }) => colors.inactive};
  border-left-color: ${({ colors }) => colors.grey};
  border-left-width: ${(props) => props.showIconDivider ? '1px' : '0'};
  padding-left: 15px;
  padding-right: 15px;
`;

export const Button: React.FC<ButtonProps> = (props) => {
  const color = useSelector((state: any) => state.colors);

  return (
    <StyledButton colors={color} {...props} onClick={props.type === 'disabled' ? null : props.onClick}>
      {props.iconLeft ? <IconLeft colors={color}>{props.iconLeft}</IconLeft> : null}
      {props.children}
      {props.iconRight ? <IconRight colors={color}>{props.iconRight}</IconRight> : null}
    </StyledButton>
  );
}

