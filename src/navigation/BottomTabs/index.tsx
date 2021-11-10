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
        tabBarLabelStyle: {marginBottom: 7},
        headerShown: false,
        tabBarActiveTintColor: THEME.COLOR_RED,
        tabBarInactiveTintColor: setColor(theme),
      }}>
      <Tab.Screen
        name={Screens.main}
        options={{
          title: 'Progressio',

          tabBarIcon: ({focused, size, color}) => {
            const iconName = focused ? 'home' : 'home-outline';

            return <Icon name={iconName} size={size} color={color} />;
          },
        }}
        component={TopTabs}
      />
      <Tab.Screen
        name={Screens.analytics}
        options={{
          title: I18n.t('analytics'),
          tabBarIcon: ({focused, size, color}) => {
            const iconName = focused ? 'pie-chart' : 'pie-chart-outline';

            return <Icon name={iconName} size={size} color={color} />;
          },
        }}
        component={Analytics}
      />
      <Tab.Screen
        name={Screens.settings}
        options={{
          title: I18n.t('settings'),
          tabBarIcon: ({focused, size, color}) => {
            const iconName = focused ? 'settings' : 'settings-outline';

            return <Icon name={iconName} size={size} color={color} />;
          },
        }}
        component={SettingsStack}
      />
    </Tab.Navigator>
  );
};
