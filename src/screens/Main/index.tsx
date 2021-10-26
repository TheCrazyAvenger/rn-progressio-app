import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
import {THEME} from '../../theme';
import {styles} from './styles';

export const Main: React.FC = () => {
  return (
    <ScrollView style={styles.center}>
      <View style={styles.title}>
        <Text
          style={{
            borderBottomColor: THEME.COLOR_RED,
            borderBottomWidth: 2.5,
            fontSize: 30,
            fontFamily: 'Lato-Bold',
            color: THEME.COLOR_GRAY,
          }}>
          Art
        </Text>
      </View>
      <View style={styles.block}>
        <TouchableOpacity activeOpacity={0.7} style={styles.container}>
          <Image
            source={require('../../../assets/images/1.jpg')}
            resizeMode="stretch"
            style={styles.image}
          />
          <View style={styles.inner}>
            <Text style={{color: 'white'}}>Beach</Text>
            <Text style={{color: 'white'}}>14/08/2021</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text
          style={{
            borderBottomColor: THEME.COLOR_RED,
            borderBottomWidth: 2.5,
            fontSize: 30,
            fontFamily: 'Lato-Bold',
            color: THEME.COLOR_GRAY,
          }}>
          Buisness
        </Text>
      </View>
      <View style={styles.block}>
        <TouchableOpacity activeOpacity={0.7} style={styles.container}>
          <Image
            source={require('../../../assets/images/1.jpg')}
            resizeMode="stretch"
            style={styles.image}
          />
          <View style={styles.inner}>
            <Text style={{color: 'white'}}>Beach</Text>
            <Text style={{color: 'white'}}>14/08/2021</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
