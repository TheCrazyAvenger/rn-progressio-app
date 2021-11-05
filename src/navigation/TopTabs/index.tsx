import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {THEME} from '../../constants';
import {BooksStack} from '../BooksStack';
import {MainStack} from '../MainStack';

const TopTabsNavigator = createMaterialTopTabNavigator();

export const TopTabs: React.FC = () => {
  return (
    <TopTabsNavigator.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: THEME.COLOR_RED,
        },
      }}>
      <TopTabsNavigator.Screen name="Projects" component={MainStack} />
      <TopTabsNavigator.Screen name="Bookmarks" component={BooksStack} />
    </TopTabsNavigator.Navigator>
  );
};
