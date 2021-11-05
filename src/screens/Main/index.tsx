import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {styles} from './styles';
import {Components} from '../../components';
import {UI} from '../../ui';
import {THEME} from '../../theme';
import {useNavigation} from '@react-navigation/core';
import {IProject, Screens} from '..';
import {getGoal, getProjects} from '../../store/actions/projects';
import {getTheme} from '../../store/actions/theme';
import I18n from 'i18n-js';
import {getData} from '../../store/actions/auth';

export const Main: React.FC = () => {
  const projects = useAppSelector(state => state.projects.projects);
  const navigation: any = useNavigation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjects());
    dispatch(getGoal());
    dispatch(getTheme());
    dispatch(getData());
  }, []);

  const openAdd = () => {
    navigation.navigate(Screens.Add);
  };

  const renderProjects = useMemo(() => {
    return projects.map((item: IProject) => (
      <Components.ProjectItem key={item.id} data={item} />
    ));
  }, [projects]);

  const renderScreen = () =>
    projects[0] ? (
      <UI.Root>{renderProjects}</UI.Root>
    ) : (
      <Components.EmptyList title={I18n.t('empty')} />
    );

  return (
    <>
      {renderScreen()}

      <UI.Button
        name="add"
        color={THEME.COLOR_WHITE}
        style={styles.addButton}
        callback={openAdd}
      />
    </>
  );
};
