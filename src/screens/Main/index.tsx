import React, {useEffect, useMemo} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {styles} from './styles';
import {Components} from '../../components';
import {UI} from '../../ui';
import {THEME} from '../../theme';
import {useNavigation} from '@react-navigation/core';
import {IProject, Screens} from '..';
import {getProjects} from '../../store/actions/projects';

export const Main: React.FC = () => {
  const projects = useAppSelector(state => state.projects.projects);
  const navigation: any = useNavigation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const openAdd = () => {
    navigation.navigate(Screens.Add);
  };

  const renderProjects = useMemo(() => {
    return projects.map((item: IProject) => (
      <Components.ProjectItem key={item.id} data={item} />
    ));
  }, [projects]);

  const renderScreen = () => {
    if (!!projects[0]) {
      return <UI.Root>{renderProjects}</UI.Root>;
    } else {
      return <Components.EmptyList />;
    }
  };

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
