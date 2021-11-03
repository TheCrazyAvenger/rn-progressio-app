import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import React from 'react';
import {useAppSelector} from '../store/hooks';
import {BottomTabs} from './BottomTabs';

const defaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#101010',
  },
};

export const AppNavigator: React.FC = () => {
  const theme = useAppSelector(state => state.theme.theme);

  const myTheme = theme ? darkTheme : defaultTheme;

  return (
    <NavigationContainer theme={myTheme}>
      <BottomTabs />
    </NavigationContainer>
  );
};
