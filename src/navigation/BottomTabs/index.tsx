import React from 'react';
import {THEME} from '../../constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screens} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {Analytics} from '../../screens';
import {TopTabs} from '../TopTabs';
import {useAppSelector} from '../../store/hooks';
import {setColor} from '../../utilities/utilities';
import I18n from 'i18n-js';
import {SettingsStack} from '../SettingsStack';

const Tab = createBottomTabNavigator();

export const BottomTabs: React.FC = () => {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {height: 60},
        tabBarLabelStyle: {color: setColor(theme), marginBottom: 5},
        headerShown: false,
        tabBarActiveTintColor: THEME.COLOR_RED,
      }}>
      <Tab.Screen
        name={Screens.main}
        options={{
          title: 'Progressio',

          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'home' : 'home-outline';

            return (
              <Icon
                name={iconName}
                size={25}
                color={focused ? THEME.COLOR_RED : setColor(theme)}
              />
            );
          },
        }}
        component={TopTabs}
      />
      <Tab.Screen
        name={Screens.analytics}
        options={{
          title: I18n.t('analytics'),
          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'pie-chart' : 'pie-chart-outline';

            return (
              <Icon
                name={iconName}
                size={25}
                color={focused ? THEME.COLOR_RED : setColor(theme)}
              />
            );
          },
        }}
        component={Analytics}
      />
      <Tab.Screen
        name="Settings"
        options={{
          title: I18n.t('settings'),
          tabBarIcon: ({focused}) => {
            const iconName = focused ? 'settings' : 'settings-outline';

            return (
              <Icon
                name={iconName}
                size={25}
                color={focused ? THEME.COLOR_RED : setColor(theme)}
              />
            );
          },
        }}
        component={SettingsStack}
      />
    </Tab.Navigator>
  );
};
