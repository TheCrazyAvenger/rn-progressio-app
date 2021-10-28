import React from 'react';
import {Text} from 'react-native-paper';
import {styles} from './styles';

type TitleProps = {
  style?: any;
};

export const H2: React.FC<TitleProps> = ({children, style}) => {
  return <Text style={{...styles.default, ...style}}>{children}</Text>;
};