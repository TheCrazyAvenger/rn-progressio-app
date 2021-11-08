import React, {useState} from 'react';
import {styles} from './styles';
import {ActivityIndicator, View} from 'react-native';
import {Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {Title, Subtitle, Description, H2} from '../../components/Typography';
import {Root, Block, Button, DeleteModal} from '../../ui';
import {Screens, THEME} from '../../constants';
import {changeTheme} from '../../store/slices/themeSlice';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import I18n from 'i18n-js';
import {useNavigation} from '@react-navigation/core';
import {logout} from '../../store/actions/auth';
import {
  useImportProjectsMutation,
  useExportProjectsMutation,
  useAuthMutation,
} from '../../store/api';
import {setProjects} from '../../store/slices/addSlice';

export const Settings: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [importProjects, {isLoading: isLoadingImport}] =
    useImportProjectsMutation();
  const [exportProjects, {isLoading}] = useExportProjectsMutation();
  const [_, {isLoading: isLoadingAuth}] = useAuthMutation();

  const projects = useAppSelector(state => state.projects.projects);
  const appTheme = useAppSelector(state => state.theme.theme);
  const token = useAppSelector(state => state.auth.token);
  const userEmail = useAppSelector(state => state.auth.userEmail);

  const [theme, setTheme] = useState<boolean>(appTheme);

  const dispatch = useAppDispatch();

  const handleImport = async () => {
    const response = await importProjects(userEmail).unwrap();
    dispatch(setProjects(response));
  };

  const handleExport = async () => {
    await exportProjects({userEmail, projects}).unwrap();
  };

  const navigation: any = useNavigation();

  return (
    <Root>
      <DeleteModal
        title={I18n.t('alertLogout')}
        message={I18n.t('logoutMessage')}
        onSubmit={() => {
          dispatch(logout());
          setModalVisible(false);
        }}
        onCancel={() => setModalVisible(false)}
        visible={modalVisible}
      />

      <Block>
        <Title style={styles.title}>{I18n.t('account')}</Title>

        <View style={styles.block}>
          {token ? (
            <H2>{userEmail}</H2>
          ) : (
            <Description>{I18n.t('sign')}</Description>
          )}
          <Button
            name={token ? 'log-out' : 'log-in'}
            disabled={isLoadingAuth}
            width={40}
            height={40}
            size={25}
            color={THEME.COLOR_WHITE}
            style={{
              backgroundColor: !isLoading ? THEME.COLOR_RED : THEME.COLOR_GRAY,
            }}
            callback={() =>
              token
                ? setModalVisible(true)
                : navigation.navigate(Screens.signin)
            }
          />
        </View>
      </Block>
      <Block>
        <Title style={styles.title}>{I18n.t('common')}</Title>
        <View style={styles.block}>
          <Description>{I18n.t('darkMode')}</Description>

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
      </Block>

      <Block>
        <Title style={styles.title}>{I18n.t('additional')}</Title>
        <View style={{...styles.block, marginBottom: 15}}>
          <Description>{I18n.t('import')}</Description>

          <Button
            loading={isLoadingImport}
            name="arrow-down-outline"
            disabled={isLoading || !token}
            width={40}
            height={40}
            size={25}
            style={{
              backgroundColor:
                !!token && !isLoadingImport
                  ? THEME.COLOR_RED
                  : THEME.COLOR_GRAY,
            }}
            color={THEME.COLOR_WHITE}
            callback={handleImport}
          />
        </View>
        <View style={styles.block}>
          <Description>{I18n.t('export')}</Description>

          <Button
            loading={isLoading}
            name="arrow-up-outline"
            disabled={isLoading || !token}
            width={40}
            height={40}
            size={25}
            style={{
              backgroundColor:
                !!token && !isLoading ? THEME.COLOR_RED : THEME.COLOR_GRAY,
            }}
            color={THEME.COLOR_WHITE}
            callback={handleExport}
          />
        </View>
      </Block>
      <Block>
        <Title style={styles.title}>{I18n.t('about')}</Title>
        <View style={{...styles.block, marginBottom: 15}}>
          <View style={styles.additional}>
            <Icon
              name="brush"
              size={23}
              style={{marginRight: 5}}
              color={THEME.COLOR_RED}
            />
            <H2>Progressio</H2>
          </View>
          <Description>
            {I18n.t('version')}: <H2>0.0.1</H2>
          </Description>
        </View>
        <Subtitle>Progressio app 2021</Subtitle>
      </Block>
    </Root>
  );
};
