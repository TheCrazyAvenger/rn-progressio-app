import React from 'react';
import {Text, View} from 'react-native';
import {FormItemProps} from '..';
import {useAppSelector} from '../../store/hooks';
import {THEME} from '../../theme';
import {UI} from '../../ui';
import {setColor} from '../../utilities/utilities';
import {Typography} from '../Typography';

export const FormItem: React.FC<FormItemProps> = ({
  title,
  value,
  onChange,
  onBlur,
  placeholder,
  isTouched,
  errorMessage,
  children,
  errorStyle,
  style,
}) => {
  const theme = useAppSelector(state => state.theme.theme);
  return (
    <View>
      {title ? <Typography.Description>{title}:</Typography.Description> : null}
      <View style={{position: 'relative'}}>
        {children ? (
          children
        ) : (
          <UI.Textinput
            style={{
              ...style,
              borderBottomColor:
                errorMessage && isTouched ? THEME.COLOR_RED : setColor(theme),
            }}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
          />
        )}
        {errorMessage && isTouched && (
          <Text
            style={{
              position: 'absolute',
              top: 55,
              fontSize: 12,
              color: '#FF0D10',
              ...errorStyle,
            }}>
            {errorMessage}
          </Text>
        )}
      </View>
    </View>
  );
};
