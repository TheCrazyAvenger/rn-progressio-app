import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../screens';

const Stack = createNativeStackNavigator();

const StackNigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Screens.Main}
        options={{
          headerTitleAlign: 'center',
          title: 'Progressio',
        }}
      />
    </Stack.Navigator>
  );
};

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNigator />
    </NavigationContainer>
  );
};
