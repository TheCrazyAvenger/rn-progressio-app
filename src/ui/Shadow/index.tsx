import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

export const Shadow: React.FC = ({children}) => {
  return <View style={styles.shadow}>{children}</View>;
};
