import React from 'react';
import {THEME} from '../../theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Screens} from '../../screens';
import {styles} from './styles';
import {Bookmarks, TopNavigator} from '../Projects';
import {useNavigation} from '@react-navigation/core';

const Tab = createBottomTabNavigator();

export const BottomTabs: React.FC = () => {
  const navigation: any = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.titleStyle,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabStyle,
      }}>
      <Tab.Screen
        name="MainScreen"
        options={{
          title: 'Prgressio',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('MainScreen')}>
                <Icon
                  name="home"
                  size={focused ? 30 : 25}
                  color={focused ? THEME.COLOR_RED : THEME.COLOR_GRAY}
                />
              </TouchableOpacity>
            );
          },
        }}
        component={TopNavigator}
      />
      <Tab.Screen
        name="Analytics"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Analytics')}>
                <Icon
                  name="analytics"
                  size={focused ? 30 : 25}
                  color={focused ? THEME.COLOR_RED : THEME.COLOR_GRAY}
                />
              </TouchableOpacity>
            );
          },
        }}
        component={Screens.Analytics}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Settings')}>
                <Icon
                  name="settings"
                  size={focused ? 30 : 25}
                  color={focused ? THEME.COLOR_RED : THEME.COLOR_GRAY}
                />
              </TouchableOpacity>
            );
          },
        }}
        component={Screens.Settings}
      />
    </Tab.Navigator>
  );
};
