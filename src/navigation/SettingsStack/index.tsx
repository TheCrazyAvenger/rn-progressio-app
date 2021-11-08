import React from 'react';
import {SignIn, Settings} from '../../screens';
import {styles} from './styles';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {setColor} from '../../utilities/utilities';
import {useAppSelector} from '../../store/hooks';
import I18n from 'i18n-js';
import {Screens} from '../../constants';

const Stack = createNativeStackNavigator();

export const SettingsStack: React.FC = () => {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {...styles.titleStyle, color: setColor(theme)},
      }}>
      <Stack.Screen
        name={Screens.settings}
        options={{
          headerShown: false,
        }}
        component={Settings}
      />
      <Stack.Screen
        name={Screens.signin}
        options={{title: I18n.t('signTitle')}}
        component={SignIn}
      />
    </Stack.Navigator>
  );
};
