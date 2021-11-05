import React from 'react';
import {Edit, Project, Add, Main} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import I18n from 'i18n-js';

const Stack = createNativeStackNavigator();

export const MainStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        options={{headerShown: false}}
        component={Main}
      />
      <Stack.Screen
        name="Project"
        options={{title: I18n.t('details')}}
        component={Project}
      />
      <Stack.Screen
        name="Add"
        options={{title: I18n.t('add')}}
        component={Add}
      />
      <Stack.Screen
        name="Edit"
        options={{title: I18n.t('edit')}}
        component={Edit}
      />
    </Stack.Navigator>
  );
};
