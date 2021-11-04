import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppSelector} from '../../store/hooks';
import {setColor} from '../../utilities/utilities';
import {styles} from './styles';

type TextButtonProps = {
  title: string;
  type: 'solid' | 'clear' | 'outline' | undefined;
  titleStyle?: any;
  style?: any;
  onPress?: any;
};

export const TextButton: React.FC<TextButtonProps> = ({
  title,
  type,
  titleStyle,
  style,
  onPress,
}) => {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <Button
      type={type}
      title={title}
      titleStyle={{...styles.textButton, color: setColor(theme), ...titleStyle}}
      style={{...style}}
      onPress={onPress}
    />
  );
};
