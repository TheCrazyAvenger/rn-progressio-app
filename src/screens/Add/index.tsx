import React from 'react';
import {View} from 'react-native';
import {Forms} from '../../forms';

import {styles} from './styles';

export const Add: React.FC = () => {
  return (
    <View style={styles.root}>
      <Forms.Add />
    </View>
  );
};
