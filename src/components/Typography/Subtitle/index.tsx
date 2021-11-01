import React from 'react';
import {Text} from 'react-native-paper';
import {TypographyProps} from '..';
import {styles} from './styles';

export const Subtitle: React.FC<TypographyProps> = ({children, style}) => {
  return <Text style={{...styles.default, ...style}}>{children}</Text>;
};
