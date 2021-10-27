import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Screens} from '../../screens';
import {styles} from './styles';
import {THEME} from '../../theme';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createMaterialTopTabNavigator();
const Main = createNativeStackNavigator();

export const Projects: React.FC = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerTitleStyle: styles.titleStyle,
      }}>
      <Main.Screen name="Progressio" component={Screens.Main} />
      <Main.Screen name="Project" component={Screens.Project} />
    </Main.Navigator>
  );
};
