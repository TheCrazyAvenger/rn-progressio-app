import React from 'react';
import {Screens} from '../../screens';
import {styles} from './styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {THEME} from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {setColor} from '../../utilities/utilities';
import {useAppSelector} from '../../store/hooks';
import I18n from 'i18n-js';

const Setting = createNativeStackNavigator();

export const Settings: React.FC = () => {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Setting.Navigator
      screenOptions={{
        headerTitleStyle: {...styles.titleStyle, color: setColor(theme)},
      }}>
      <Setting.Screen
        name="Setting"
        options={{
          title: I18n.t('settings'),
          headerLeft: () => {
            return (
              <Icon
                name="settings"
                size={23}
                style={{marginRight: 8}}
                color={THEME.COLOR_RED}
              />
            );
          },
        }}
        component={Screens.Settings}
      />
      <Setting.Screen
        name="SignIn"
        options={{title: I18n.t('signTitle')}}
        component={Screens.SignIn}
      />
    </Setting.Navigator>
  );
};
