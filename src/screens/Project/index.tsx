import {useRoute} from '@react-navigation/core';
import React, {useMemo} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Typography} from '../../components/Typography';
import {THEME} from '../../theme';
import {UI} from '../../ui';

import {styles} from './styles';

export const Project: React.FC = () => {
  const route: any = useRoute();
  const {data} = route.params;

  const renderInfo = useMemo(() => {
    return data.info.map((item: any, i: number) => {
      return (
        <View style={{marginHorizontal: 20, alignItems: 'center'}} key={i}>
          <Typography.H2 style={styles.infoText}>{item.name}</Typography.H2>
          <View style={styles.infoInner}>
            <Typography.Description style={styles.infoText}>
              {item.value}
            </Typography.Description>
            {item.type ? (
              <Typography.Description>{item.type}</Typography.Description>
            ) : null}
          </View>
        </View>
      );
    });
  }, [data]);

  return (
    <ScrollView style={styles.root}>
      <View style={{...styles.block, padding: 0}}>
        <Image
          source={require('../../../assets/images/1.jpg')}
          resizeMode="stretch"
          style={styles.image}
        />
      </View>
      <View style={styles.block}>
        <Typography.Title style={styles.title}>{data.name}</Typography.Title>
        <Typography.Description>
          <Typography.Title style={{fontSize: 18}}>
            Description:
          </Typography.Title>{' '}
          {data.description}
        </Typography.Description>
      </View>
      <View style={styles.block}>
        <Typography.Title style={styles.title}>Info</Typography.Title>
        <View style={styles.info}>{renderInfo}</View>
      </View>
      <View style={styles.block}>
        <Typography.Title style={styles.title}>Actions</Typography.Title>
        <View style={styles.buttons}>
          <UI.Button
            name="pencil-outline"
            color={THEME.COLOR_WHITE}
            style={{...styles.button, backgroundColor: THEME.COLOR_BLUE}}
          />
          <UI.Button
            name="close-outline"
            color={THEME.COLOR_WHITE}
            style={styles.button}
          />
        </View>
      </View>
    </ScrollView>
  );
};
