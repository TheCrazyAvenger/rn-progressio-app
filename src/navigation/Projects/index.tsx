import React from 'react';
import {Screens} from '../../screens';
import {styles} from './styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Main = createNativeStackNavigator();

export const Projects: React.FC = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerTitleStyle: styles.titleStyle,
        headerShadowVisible: false,
      }}>
      <Main.Screen name="Progressio" component={Screens.Main} />
      <Main.Screen name="Project" component={Screens.Project} />
      <Main.Screen name="Add" component={Screens.Add} />
    </Main.Navigator>
  );
};
