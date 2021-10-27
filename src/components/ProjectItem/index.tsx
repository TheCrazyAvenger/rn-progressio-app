import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Screens} from '../../screens';
import {THEME} from '../../theme';
import {Typography} from '../Typography';

import {styles} from './styles';

type ProjectItemTypes = {
  data: any;
};

export const ProjectItem: React.FC<ProjectItemTypes> = ({data}) => {
  const navigation: any = useNavigation();

  const openProject = () => {
    navigation.navigate('Project', {
      data,
    });
  };

  return (
    <View style={styles.block}>
      <TouchableOpacity
        onPress={openProject}
        activeOpacity={0.7}
        style={styles.container}>
        <Image
          source={require('../../../assets/images/1.jpg')}
          resizeMode="stretch"
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
        <TouchableOpacity style={styles.bookmark}>
          <Icon name="bookmark-outline" size={25} color={THEME.COLOR_WHITE} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
