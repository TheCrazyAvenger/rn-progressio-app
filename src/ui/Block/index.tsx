import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppSelector} from '../../store/hooks';
import {THEME} from '../../theme';
import {styles} from './styles';

type BlockTypes = {
  style?: any;
};

export const Block: React.FC<BlockTypes> = ({style, children}) => {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <View
      style={{
        ...styles.block,
        backgroundColor: theme === 'dark' ? '#191919' : THEME.COLOR_WHITE,
        ...style,
      }}>
      {children}
    </View>
  );
};
