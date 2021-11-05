import React from 'react';
import {Text} from 'react-native-paper';
import {TypographyProps} from '..';
import {useAppSelector} from '../../../store/hooks';
import {setColor} from '../../../utilities/utilities';
import {styles} from './styles';

export const Subtitle: React.FC<TypographyProps> = ({children, style}) => {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Text
      style={{
        ...styles.default,
        color: setColor(theme),
        ...style,
      }}>
      {children}
    </Text>
  );
};
