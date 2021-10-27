import React, {useMemo} from 'react';
import {ScrollView} from 'react-native';
import {useAppSelector} from '../../store/hooks';

import {styles} from './styles';
import {Components} from '../../components';

export const Main: React.FC = () => {
  const projects = useAppSelector(state => state.add.projects);

  const renderProjects = useMemo(() => {
    return projects.map(item => (
      <Components.ProjectItem key={item.id} data={item} />
    ));
  }, [projects]);

  return <ScrollView style={styles.root}>{renderProjects}</ScrollView>;
};
