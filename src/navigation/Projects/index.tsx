import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Screens} from '../../screens';
import {styles} from './styles';
import {THEME} from '../../theme';

const Stack = createMaterialTopTabNavigator();

export const Projects: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: THEME.COLOR_RED,
          height: 3,
        },
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: THEME.COLOR_RED,
      }}>
      <Stack.Screen name="Art" component={Screens.Main} />
    </Stack.Navigator>
  );
};
