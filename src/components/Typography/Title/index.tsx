import React from 'react';
import {Text} from 'react-native-paper';
import {TypographyProps} from '..';
import {useAppSelector} from '../../../store/hooks';
import {THEME} from '../../../theme';
import {styles} from './styles';

export const Title: React.FC<TypographyProps> = ({children, style}) => {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Text
      style={{
        ...styles.default,
        color: theme === 'dark' ? THEME.COLOR_WHITE : THEME.COLOR_GRAY,
        ...style,
      }}>
      {children}
    </Text>
  );
};
