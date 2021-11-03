import React from 'react';
import {TextInput} from 'react-native';
import {TextInputProps} from '..';
import {useAppSelector} from '../../store/hooks';
import {setColor} from '../../utilities/utilities';
import {styles} from './styles';

export const Textinput: React.FC<TextInputProps> = ({
  onChange,
  onBlur,
  value,
  style,
  placeholder,
}) => {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <TextInput
      placeholderTextColor={setColor(theme)}
      style={{
        color: setColor(theme),
        ...styles.textInput,
        ...style,
      }}
      value={value ? value : ''}
      onChangeText={onChange}
      onBlur={onBlur}
      placeholder={placeholder ? placeholder : ''}
    />
  );
};
