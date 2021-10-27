import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

type ButtonTypes = {
  name: string;
  color: string;
  callback?: any;
  style?: any;
  disabled?: boolean;
};

export const Button: React.FC<ButtonTypes> = ({
  name,
  color,
  callback,
  style,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={callback}
      disabled={disabled}
      activeOpacity={0.7}
      style={{...styles.button, ...style}}>
      <Icon name={name} size={30} color={color} />
    </TouchableOpacity>
  );
};
