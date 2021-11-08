import React from 'react';
import {View} from 'react-native';
import {useAppSelector} from '../../store/hooks';
import {THEME} from '../../constants/theme';
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
        backgroundColor: theme ? '#191919' : THEME.COLOR_WHITE,
        ...style,
      }}>
      {children}
    </View>
  );
};
