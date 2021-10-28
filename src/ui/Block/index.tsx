import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

type BlockTypes = {
  style?: any;
};

export const Block: React.FC<BlockTypes> = ({style, children}) => {
  return <View style={{...styles.block, ...style}}>{children}</View>;
};
