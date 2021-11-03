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

export const Settings: React.FC = () => {
  const appTheme = useAppSelector(state => state.theme.theme);
  const [theme, setTheme] = useState<boolean>(appTheme);

  const dispatch = useAppDispatch();

  return (
    <UI.Root>
      <UI.Block>
        <Typography.Title style={styles.title}>
          {I18n.t('account')}
        </Typography.Title>
        <View style={styles.block}>
          <Typography.Description>{I18n.t('sign')}</Typography.Description>
          <Avatar.Image
            size={35}
            source={require('../../../assets/images/1.jpg')}
          />
        </View>
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
