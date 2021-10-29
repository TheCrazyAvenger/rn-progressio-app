import React from 'react';
import {Screens} from '../../screens';
import {styles} from './styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Main = createNativeStackNavigator();
const Books = createNativeStackNavigator();

export const Bookmarks: React.FC = () => {
  return (
    <Books.Navigator
      screenOptions={{
        headerTitleStyle: styles.titleStyle,
        headerShadowVisible: false,
      }}>
      <Books.Screen name="Progressio" component={Screens.Bookmarks} />
      <Books.Screen
        name="Project"
        options={{title: 'Details'}}
        component={Screens.Project}
      />
    </Books.Navigator>
  );
};

export const Projects: React.FC = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerTitleStyle: styles.titleStyle,
        headerShadowVisible: false,
      }}>
      <Main.Screen name="Progressio" component={Screens.Main} />
      <Main.Screen
        name="Project"
        options={{title: 'Details'}}
        component={Screens.Project}
      />
      <Main.Screen name="Add" component={Screens.Add} />
    </Main.Navigator>
  );
};
