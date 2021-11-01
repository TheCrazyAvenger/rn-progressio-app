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
      <Books.Screen
        name="Books"
        options={{title: 'Bookmarks'}}
        component={Screens.Bookmarks}
      />
      <Books.Screen
        name="Project"
        options={{title: 'Details'}}
        component={Screens.Project}
      />
      <Books.Screen
        name="Edit"
        options={{title: 'Edit project'}}
        component={Screens.Edit}
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
      <Main.Screen
        name="Edit"
        options={{title: 'Edit project'}}
        component={Screens.Edit}
      />
    </Main.Navigator>
  );
};
