import React from 'react';
import {Bookmarks, Edit, Project} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import I18n from 'i18n-js';

const Stack = createNativeStackNavigator();

export const BooksStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Books"
        component={Bookmarks}
      />
      <Stack.Screen
        name="Project"
        options={{title: I18n.t('details')}}
        component={Project}
      />
      <Stack.Screen
        name="Edit"
        options={{title: I18n.t('edit')}}
        component={Edit}
      />
    </Stack.Navigator>
  );
};
