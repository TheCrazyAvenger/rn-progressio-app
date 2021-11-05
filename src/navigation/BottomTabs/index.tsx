import React from 'react';
import {THEME} from '../../theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Screens} from '../../screens';
import {styles} from './styles';
import {TopNavigator} from '../Projects';
import {useNavigation} from '@react-navigation/core';
import {useAppSelector} from '../../store/hooks';
import {setColor} from '../../utilities/utilities';
import I18n from 'i18n-js';
import {Settings} from '../Settings';

const Tab = createBottomTabNavigator();

export const BottomTabs: React.FC = () => {
  const navigation: any = useNavigation();
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleStyle: {...styles.titleStyle, color: setColor(theme)},
        tabBarShowLabel: false,
        tabBarStyle: styles.tabStyle,
      }}>
      <Tab.Screen
        name="MainScreen"
        options={{
          title: 'Prgressio',
          headerShown: false,
          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'home' : 'home-outline';

            return (
              <Icon
                onPress={() => navigation.navigate('Main')}
                name={iconName}
                size={focused ? 30 : 25}
                color={focused ? THEME.COLOR_RED : setColor(theme)}
              />
            );
          },
        }}
        component={TopNavigator}
      />
      <Tab.Screen
        name="Analytics"
        options={{
          title: I18n.t('analytics'),
          headerLeft: () => {
            return (
              <Icon
                name="pie-chart"
                size={25}
                style={{marginLeft: 20, marginRight: -10}}
                color={THEME.COLOR_RED}
              />
            );
          },
          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'pie-chart' : 'pie-chart-outline';

            return (
              <Icon
                onPress={() => navigation.navigate('Analytics')}
                name={iconName}
                size={focused ? 30 : 25}
                color={focused ? THEME.COLOR_RED : setColor(theme)}
              />
            );
          },
        }}
        component={Screens.Analytics}
      />
      <Tab.Screen
        name="Settings"
        options={{
          title: I18n.t('settings'),
          headerShown: false,
          headerLeft: () => {
            return (
              <Icon
                name="settings-outline"
                size={25}
                style={{marginLeft: 20, marginRight: -10}}
                color={THEME.COLOR_RED}
              />
            );
          },
          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'settings' : 'settings-outline';

            return (
              <Icon
                name={iconName}
                onPress={() => navigation.navigate('Settings')}
                size={focused ? 30 : 25}
                color={focused ? THEME.COLOR_RED : setColor(theme)}
              />
            );
          },
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};
