import React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {THEME} from '../../constants';
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
  loading?: boolean;
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
  loading,
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
      {loading ? (
        <ActivityIndicator color={THEME.COLOR_WHITE} />
      ) : (
        <Icon name={name} size={size ? size : 30} color={color} />
      )}
    </TouchableOpacity>
  );
};
