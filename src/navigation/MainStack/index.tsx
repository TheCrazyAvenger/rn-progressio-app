import React from 'react';
import {Edit, Project, Add, Main} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import I18n from 'i18n-js';
import {Screens} from '../../constants';

const Stack = createNativeStackNavigator();

export const MainStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.main}
        options={{headerShown: false}}
        component={Main}
      />
      <Stack.Screen
        name={Screens.project}
        options={{title: I18n.t('details')}}
        component={Project}
      />
      <Stack.Screen
        name={Screens.add}
        options={{title: I18n.t('add')}}
        component={Add}
      />
      <Stack.Screen
        name={Screens.edit}
        options={{title: I18n.t('edit')}}
        component={Edit}
      />
    </Stack.Navigator>
  );
};
