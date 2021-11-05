import React from 'react';
import {SignIn, Settings} from '../../screens';
import {styles} from './styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {THEME} from '../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {setColor} from '../../utilities/utilities';
import {useAppSelector} from '../../store/hooks';
import I18n from 'i18n-js';

const Stack = createNativeStackNavigator();

export const SettingsStack: React.FC = () => {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {...styles.titleStyle, color: setColor(theme)},
      }}>
      <Stack.Screen
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
        component={Settings}
      />
      <Stack.Screen
        name="SignIn"
        options={{title: I18n.t('signTitle')}}
        component={SignIn}
      />
    </Stack.Navigator>
  );
};
