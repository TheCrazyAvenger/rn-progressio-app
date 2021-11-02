import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Typography} from '../../components/Typography';
import {THEME} from '../../theme';
import {UI} from '../../ui';
import {Avatar} from 'react-native-elements';

import {styles} from './styles';
import {changeTheme} from '../../store/slices/themeSlice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setColor} from '../../utilities/utilities';

export const Settings: React.FC = () => {
  const appTheme = useAppSelector(state => state.theme.theme);
  const [theme, setTheme] = useState<string>(appTheme);

  const dispatch = useAppDispatch();

  return (
    <UI.Root>
      <UI.Block>
        <Typography.Title style={styles.title}>Account</Typography.Title>
        <View style={styles.block}>
          <Typography.Description>SignUp/SignIn</Typography.Description>
          <Avatar rounded source={require('../../../assets/images/1.jpg')} />
        </View>
      </UI.Block>
      <UI.Block>
        <Typography.Title style={styles.title}>Common</Typography.Title>
        <View style={styles.block}>
          <Typography.Description>Theme</Typography.Description>
          <View style={styles.picker}>
            <Picker
              style={{
                width: '100%',
              }}
              dropdownIconColor={setColor(theme)}
              mode="dropdown"
              selectedValue={theme}
              onValueChange={itemValue => {
                setTheme(itemValue);
                dispatch(changeTheme(itemValue));
              }}>
              <Picker.Item
                style={{color: setColor(theme, THEME.COLOR_RED)}}
                label="Light"
                value={'light'}
              />
              <Picker.Item
                style={{color: setColor(theme, THEME.COLOR_RED)}}
                label="Dark"
                value={'dark'}
              />
            </Picker>
          </View>
        </View>
        <View style={styles.block}>
          <Typography.Description>Language</Typography.Description>
          <View style={styles.picker}>
            <Picker
              style={{
                width: '100%',
              }}
              dropdownIconColor={setColor(theme)}
              mode="dropdown"
              selectedValue={theme}
              onValueChange={itemValue => {}}>
              <Picker.Item
                style={{color: setColor(theme, THEME.COLOR_RED)}}
                label="English"
                value={'en'}
              />
              <Picker.Item
                style={{color: setColor(theme, THEME.COLOR_RED)}}
                label="Russian"
                value={'ru'}
              />
            </Picker>
          </View>
        </View>
      </UI.Block>

      <UI.Block>
        <Typography.Title style={styles.title}>Additional</Typography.Title>
        <View style={{...styles.block, marginBottom: 15}}>
          <Typography.Description>Import data</Typography.Description>
          <View style={styles.logoView}>
            <Icon
              name="arrow-down-outline"
              color={THEME.COLOR_WHITE}
              size={25}
            />
          </View>
        </View>
        <View style={styles.block}>
          <Typography.Description>Export data</Typography.Description>
          <View style={styles.logoView}>
            <Icon name="arrow-up-outline" color={THEME.COLOR_WHITE} size={25} />
          </View>
        </View>
      </UI.Block>
      <UI.Block>
        <Typography.Title style={styles.title}>About</Typography.Title>
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
            Version: <Typography.H2>0.0.1</Typography.H2>
          </Typography.Description>
        </View>
        <Typography.Description>Progressio app 2021</Typography.Description>
      </UI.Block>
    </UI.Root>
  );
};
