import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {styles} from './styles';
import {ProjectItem, EmptyList} from '../../components';
import {Root, Button} from '../../ui';
import {Screens, THEME} from '../../constants';
import {useNavigation} from '@react-navigation/core';
import {IProject, Add} from '..';
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
    navigation.navigate(Screens.add);
  };

  const renderProjects = useMemo(() => {
    return projects.map((item: IProject) => (
      <ProjectItem key={item.id} data={item} />
    ));
  }, [projects]);

  const renderScreen = () =>
    projects[0] ? (
      <Root>{renderProjects}</Root>
    ) : (
      <EmptyList title={I18n.t('empty')} />
    );

  return (
    <>
      {renderScreen()}

      <Button
        name="add"
        color={THEME.COLOR_WHITE}
        style={styles.addButton}
        callback={openAdd}
      />
    </>
  );
};
