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

const Main = createNativeStackNavigator();
const Books = createNativeStackNavigator();
const TopTabs = createMaterialTopTabNavigator();

export const Bookmarks: React.FC = () => {
  const theme = useAppSelector(state => state.theme.theme);

  return (
    <Books.Navigator
      screenOptions={{
        headerTitleStyle: {...styles.titleStyle, color: setColor(theme)},
        headerShadowVisible: false,
      }}>
      <Books.Screen
        name="Books"
        options={{
          title: I18n.t('bookmarks'),
          headerLeft: () => {
            return (
              <Icon
                name="bookmarks"
                size={23}
                style={{marginRight: 5}}
                color={THEME.COLOR_RED}
              />
            );
          },
        }}
        component={Screens.Bookmarks}
      />
      <Books.Screen
        name="Project"
        options={{title: I18n.t('details')}}
        component={Screens.Project}
      />
      <Books.Screen
        name="Edit"
        options={{title: I18n.t('edit')}}
        component={Screens.Edit}
      />
    </Books.Navigator>
  );
};

export const Projects: React.FC = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerTitleStyle: styles.titleStyle,
        headerShadowVisible: false,
      }}>
      <Main.Screen
        name="Main"
        options={{
          title: 'Progressio',
          headerLeft: () => {
            return (
              <Icon
                name="brush"
                size={23}
                style={{marginRight: 5}}
                color={THEME.COLOR_RED}
              />
            );
          },
        }}
        component={Screens.Main}
      />
      <Main.Screen
        name="Project"
        options={{title: I18n.t('details')}}
        component={Screens.Project}
      />
      <Main.Screen
        name="Add"
        options={{
          title: I18n.t('add'),
        }}
        component={Screens.Add}
      />
      <Main.Screen
        name="Edit"
        options={{title: I18n.t('edit')}}
        component={Screens.Edit}
      />
    </Main.Navigator>
  );
};

export const TopNavigator: React.FC = () => {
  return (
    <TopTabs.Navigator
      tabBarPosition={'bottom'}
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: THEME.COLOR_RED,
        },
      }}>
      <TopTabs.Screen
        name="Projects"
        options={{
          title: I18n.t('projects'),
        }}
        component={Projects}
      />
      <TopTabs.Screen
        name="Bookmarks"
        options={{
          title: I18n.t('bookmarks'),
        }}
        component={Bookmarks}
      />
    </TopTabs.Navigator>
  );
};
