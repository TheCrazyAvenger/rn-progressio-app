import React from 'react';
import {THEME} from '../../theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Screens} from '../../screens';
import {styles} from './styles';

const Tab = createBottomTabNavigator();

export const BottomTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: styles.headerStyle,
        headerTitleAlign: 'center',
        headerTitleStyle: styles.titleStyle,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabStyle,
      }}>
      <Tab.Screen
        name="Progressio"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Icon
                  name="home"
                  size={30}
                  color={focused ? THEME.COLOR_RED : THEME.COLOR_GRAY}
                />
              </View>
            );
          },
        }}
        component={Screens.Main}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Icon
                  name="search"
                  size={30}
                  color={focused ? THEME.COLOR_RED : THEME.COLOR_GRAY}
                />
              </View>
            );
          },
        }}
        component={Screens.Search}
      />
      <Tab.Screen
        name="Add"
        options={{
          tabBarIcon: () => {
            return (
              <View style={styles.addButton}>
                <Icon name="add" size={30} color={THEME.COLOR_WHITE} />
              </View>
            );
          },
        }}
        component={Screens.Add}
      />
      <Tab.Screen
        name="Analytics"
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Icon
                  name="analytics"
                  size={30}
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
                  size={30}
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
