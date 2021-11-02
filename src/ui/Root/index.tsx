import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';

type RootTypes = {
  style?: any;
  type?: 'View';
};

export const Root: React.FC<RootTypes> = ({style, children, type}) => {
  if (type === 'View') {
    return <View style={{...styles.root, ...style}}>{children}</View>;
  } else {
    return (
      <ScrollView style={{...styles.root, ...style}}>{children}</ScrollView>
    );
  }
};
