import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const Main: React.FC = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Progressio</Text>
    </View>
  );
};
