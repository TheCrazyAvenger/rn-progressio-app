import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

type ProjectItemTypes = {
  data: any;
};

export const ProjectItem: React.FC<ProjectItemTypes> = ({data}) => {
  return (
    <View style={styles.block}>
      <TouchableOpacity activeOpacity={0.7} style={styles.container}>
        <Image
          source={require('../../../assets/images/1.jpg')}
          resizeMode="stretch"
          style={styles.image}
        />
        <View style={styles.inner}>
          <Text style={{color: 'white'}}>{data.name}</Text>
          <Text style={{color: 'white'}}>{data.date}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
