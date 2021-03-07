import React from 'react';
import { ImageProps } from 'react-native';
import styled from 'styled-components/native';


export interface AvatarProps extends ImageProps {
  /**
   * Makes the avatar to be circle in shape if true. defaut is false.
   */
  rounded?: boolean,
  /**
   * Makes the avatar to be small in size if true. default is true.
   */
  small?: boolean,
  /**
   * Accepts a number, Makes the avatar to take the size specified.
   */
  size?: number,
  /**
   * Makes the avatar to be large in size if true. default is false.
   */
  large?: boolean,
  /**
   * Makes the avatar to be medium in size if true. default is false.
   */
  medium?: boolean,
  /**
   * Custom style props for extending the prop
   */
  style?: Object,
}

const Avatar: React.FC<AvatarProps> =  styled.Image<AvatarProps>`
  width: ${
    (props: any) => props.small
      ? '35px' : props.medium
        ? '50px' : props.large
          ? '70px' : props.size
            ? `${props.size}px` : '35px'
    };
  height: ${
    (props: any) => props.small
      ? '35px' : props.medium
        ? '50px' : props.large
          ? '70px' : props.size
            ? `${props.size}px` : '35px'
    };
  border-radius: ${(props: any) => props.rounded ? '100px' : '5px'};
`;

export { Avatar };
