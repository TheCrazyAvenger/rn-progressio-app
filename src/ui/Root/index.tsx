import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';

type RootTypes = {
  style?: any;
  type?: 'View';
};

export const Root: React.FC<RootTypes> = ({style, children, type}) =>
  type === 'View' ? (
    <View style={{...styles.root, ...style}}>{children}</View>
  ) : (
    <ScrollView style={{...styles.root, ...style}}>{children}</ScrollView>
  );
