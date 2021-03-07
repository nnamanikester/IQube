import PropTypes from 'prop-types';
import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import styled from 'styled-components/native';

export interface RowProps extends ViewProps {

}

export const Row: React.FC<RowProps> = styled.View<RowProps>`
  width: 100%;
  flexWrap: wrap;
  flexDirection: row;
`;