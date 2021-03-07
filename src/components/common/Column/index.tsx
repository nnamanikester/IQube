import PropTypes from 'prop-types';
import React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native'

export interface ColumnProps extends ViewProps {
  /**
   * Determines the width percentae of the column.
   */
  size: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12',
}

export const Column: React.FC<ColumnProps> = styled.View<ColumnProps>`
  width: ${({ size }) => size === '1'
    ? '8.333333333333333%' : size === '2'
      ? '16.66666666666667%' : size === '3'
        ? '25%' : size === '4'
          ? '33.33333333333333%' : size === '5'
            ? '41.66666666666667%' : size === '6'
              ? '50%' : size === '7'
                ? '58.33333333333333%' : size === '8'
                  ? '66.66666666666664%' : size === '9'
                    ? '75%' : size === '10'
                      ? '83.33333333333333%' : size === '11'
                        ? '91.66666666666666%' : size === '12'
                          ? '100%' : '100%'
  }
`;

