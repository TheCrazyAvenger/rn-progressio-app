import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';

type RootTypes = {
  style?: any;
};

export const Root: React.FC<RootTypes> = ({style, children}) => {
  return <ScrollView style={{...styles.root, ...style}}>{children}</ScrollView>;
};
