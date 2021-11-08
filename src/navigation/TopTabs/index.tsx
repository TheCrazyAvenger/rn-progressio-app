import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {THEME} from '../../constants';
import {BooksStack} from '../BooksStack';
import {MainStack} from '../MainStack';
import i18n from 'i18n-js';

const TopTabsNavigator = createMaterialTopTabNavigator();

export const TopTabs: React.FC = () => {
  return (
    <TopTabsNavigator.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: THEME.COLOR_RED,
        },
      }}>
      <TopTabsNavigator.Screen
        name="Projects"
        options={{
          title: i18n.t('projects'),
        }}
        component={MainStack}
      />
      <TopTabsNavigator.Screen
        name="Bookmarks"
        options={{
          title: i18n.t('bookmarks'),
        }}
        component={BooksStack}
      />
    </TopTabsNavigator.Navigator>
  );
};
