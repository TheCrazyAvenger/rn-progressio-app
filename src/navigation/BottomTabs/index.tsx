import React from 'react';
import {THEME} from '../../theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Screens} from '../../screens';
import {styles} from './styles';
import {Projects} from '../Projects';
import {useNavigation} from '@react-navigation/core';
import {UI} from '../../ui';

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
        name="Main"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('Progressio')}>
                <Icon
                  name="home"
                  size={focused ? 30 : 25}
                  color={focused ? THEME.COLOR_RED : THEME.COLOR_GRAY}
                />
              </TouchableOpacity>
            );
          },
        }}
        component={Projects}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Icon
                  name="bookmarks"
                  size={focused ? 30 : 25}
                  color={focused ? THEME.COLOR_RED : THEME.COLOR_GRAY}
                />
              </View>
            );
          },
        }}
        component={Screens.Bookmarks}
      />
      {/* <Tab.Screen
        name="Add"
        options={{
          tabBarIcon: () => {
            const openAdd = () => {
              navigation.navigate(Screens.Add);
            };
            return (
              <UI.Button
                name="add"
                color={THEME.COLOR_WHITE}
                style={styles.addButton}
                callback={openAdd}
              />
            );
          },
        }}
        component={Screens.Add}
      /> */}
      <Tab.Screen
        name="Analytics"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Icon
                  name="analytics"
                  size={focused ? 30 : 25}
                  color={focused ? THEME.COLOR_RED : THEME.COLOR_GRAY}
                />
              </View>
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
              <View>
                <Icon
                  name="settings"
                  size={focused ? 30 : 25}
                  color={focused ? THEME.COLOR_RED : THEME.COLOR_GRAY}
                />
              </View>
            );
          },
        }}
        component={Screens.Settings}
      />
    </Tab.Navigator>
  );
};
