import React, {useState} from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import {Switch, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Typography} from '../../components/Typography';
import {UI} from '../../ui';
import {THEME} from '../../theme';
import {changeTheme} from '../../store/slices/themeSlice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import I18n from 'i18n-js';
import {useNavigation} from '@react-navigation/core';

export const Settings: React.FC = () => {
  const appTheme = useAppSelector(state => state.theme.theme);
  const token = useAppSelector(state => state.auth.token);
  const userData = useAppSelector(state => state.auth.userData);
  const [theme, setTheme] = useState<boolean>(appTheme);

  console.log(token, userData);

  const showProfile =
    token && userData && token === userData.token ? true : false;

  const navigation: any = useNavigation();

  const dispatch = useAppDispatch();

  return (
    <UI.Root>
      <UI.Block>
        <Typography.Title style={styles.title}>
          {I18n.t('account')}
        </Typography.Title>

        {!showProfile ? (
          <View style={styles.block}>
            <UI.TextButton
              title={I18n.t('sign')}
              type="clear"
              onPress={() => navigation.navigate('SignIn')}
            />
            <Avatar.Text
              size={35}
              label="?"
              style={{backgroundColor: THEME.COLOR_RED}}
            />
          </View>
        ) : (
          <View style={{alignItems: 'flex-start', width: '100%'}}>
            <Typography.H2>{userData.nickname}</Typography.H2>
            <Typography.Subtitle>{userData.email}</Typography.Subtitle>
          </View>
        )}
      </UI.Block>
      <UI.Block>
        <Typography.Title style={styles.title}>
          {I18n.t('common')}
        </Typography.Title>
        <View style={styles.block}>
          <Typography.Description>{I18n.t('darkMode')}</Typography.Description>

          <View>
            <Switch
              color={THEME.COLOR_RED}
              onValueChange={() => {
                setTheme(prev => !prev);
                dispatch(changeTheme());
              }}
              value={theme}
            />
          </View>
        </View>
      </UI.Block>

      <UI.Block>
        <Typography.Title style={styles.title}>
          {I18n.t('additional')}
        </Typography.Title>
        <View style={{...styles.block, marginBottom: 15}}>
          <Typography.Description>{I18n.t('import')}</Typography.Description>
          <View style={styles.logoView}>
            <Icon
              name="arrow-down-outline"
              color={THEME.COLOR_WHITE}
              size={25}
            />
          </View>
        </View>
        <View style={styles.block}>
          <Typography.Description>{I18n.t('export')}</Typography.Description>
          <View style={styles.logoView}>
            <Icon name="arrow-up-outline" color={THEME.COLOR_WHITE} size={25} />
          </View>
        </View>
      </UI.Block>
      <UI.Block>
        <Typography.Title style={styles.title}>
          {I18n.t('about')}
        </Typography.Title>
        <View style={{...styles.block, marginBottom: 15}}>
          <View style={styles.additional}>
            <Icon
              name="brush"
              size={23}
              style={{marginRight: 5}}
              color={THEME.COLOR_RED}
            />
            <Typography.H2>Progressio</Typography.H2>
          </View>
          <Typography.Description>
            {I18n.t('version')}: <Typography.H2>0.0.1</Typography.H2>
          </Typography.Description>
        </View>
        <Typography.Subtitle>Progressio app 2021</Typography.Subtitle>
      </UI.Block>
    </UI.Root>
  );
};
