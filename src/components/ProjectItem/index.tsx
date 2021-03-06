import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {Image, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {toogleBookmarks} from '../../store/slices/addSlice';
import {Screens, THEME} from '../../constants';
import {Block} from '../../ui';
import {Title, Subtitle} from '../Typography';
import {styles} from './styles';
import {ProjectItemProps} from '..';
import i18n from 'i18n-js';
import {setColor} from '../../utilities/utilities';

export const ProjectItem: React.FC<ProjectItemProps> = ({data}) => {
  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.theme.theme);

  const openProject = () => {
    navigation.navigate(Screens.project, {
      data,
    });
  };

  return (
    <Block style={{padding: 0}}>
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
            <Title>{data.name}</Title>
            <Subtitle>
              {i18n.t('created')}: {data.date}
            </Subtitle>
          </View>
          <View>
            <Icon name="arrow-forward" size={30} color={setColor(theme)} />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(toogleBookmarks(data.id));
          }}
          style={styles.bookmark}>
          <Icon
            name={data.booked ? 'bookmark' : 'bookmark-outline'}
            size={25}
            color={THEME.COLOR_WHITE}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </Block>
  );
};
