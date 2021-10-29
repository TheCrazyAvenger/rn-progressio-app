import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {saveProjects} from '../../store/actions/projects';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {toogleBookmarks} from '../../store/slices/addSlice';
import {THEME} from '../../theme';
import {UI} from '../../ui';
import {Typography} from '../Typography';

import {styles} from './styles';

type ProjectItemTypes = {
  data: any;
};

export const ProjectItem: React.FC<ProjectItemTypes> = ({data}) => {
  const navigation: any = useNavigation();
  const projects = useAppSelector(state => state.projects.projects);
  const dispatch = useAppDispatch();

  const openProject = () => {
    navigation.navigate('Project', {
      data,
    });
  };

  return (
    <UI.Shadow>
      <UI.Block style={{padding: 0}}>
        <TouchableOpacity
          onPress={openProject}
          activeOpacity={0.7}
          style={styles.container}>
          <Image
            source={{uri: data.img}}
            resizeMode="cover"
            style={styles.image}
          />
          <View style={styles.inner}>
            <View>
              <Typography.Title>{data.name}</Typography.Title>
              <Typography.Subtitle>Created: {data.date}</Typography.Subtitle>
            </View>
            <View>
              <Icon name="arrow-forward" size={30} color={THEME.COLOR_GRAY} />
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              dispatch(toogleBookmarks(data.id));

              // @ts-expect-error Expected 1 arguments, but got 0.ts(2554)
              dispatch(saveProjects(projects));
            }}
            style={styles.bookmark}>
            <Icon
              name={data.booked ? 'bookmark' : 'bookmark-outline'}
              size={25}
              color={THEME.COLOR_WHITE}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </UI.Block>
    </UI.Shadow>
  );
};
