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
  size?: number;
  width?: number;
  height?: number;
};

export const Button: React.FC<ButtonTypes> = ({
  name,
  color,
  callback,
  style,
  disabled,
  size,
  width,
  height,
}) => {
  return (
    <TouchableOpacity
      onPress={callback}
      disabled={disabled}
      activeOpacity={0.7}
      style={{
        ...styles.button,
        width: width ? width : 55,
        height: height ? height : 55,
        ...style,
      }}>
      <Icon name={name} size={size ? size : 30} color={color} />
    </TouchableOpacity>
  );
};
