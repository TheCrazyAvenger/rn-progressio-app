import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {BottomTabs} from './BottomTabs';

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
};
