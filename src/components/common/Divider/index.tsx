import React from 'react';
import styled from 'styled-components/native'
import { useSelector } from 'react-redux';
import { ColorsState } from '<states>/colors/types';

export interface DividerProps {
  /**
   * Makes the divider horizontal
   */
  horizontal?: boolean,
  /**
   * Makes the divider vertical
   */
  vertical?: boolean,
  colors?: ColorsState,
}

const StyledDivider: React.FC<DividerProps> = styled.View<DividerProps>`
  width: ${({ horizontal }) => horizontal ? '100%' : '1px'};
  height: ${({ horizontal }) =>  horizontal ? '1px' : '100%'};
  borderWidth: 1px;
  borderColor: ${({ colors }) => colors?.grey};
  marginVertical: 10px;
`;

export const Divider: React.FC<DividerProps> = (props) => {
  const colors = useSelector((state: any) => state.colors);

  return <StyledDivider colors={colors} {...props} />;
};

