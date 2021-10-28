import {useRoute} from '@react-navigation/core';
import React, {useMemo} from 'react';
import {Image, View} from 'react-native';
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
        <View style={styles.renderInfo} key={i}>
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
    <UI.Root>
      <UI.Shadow>
        <UI.Block style={{padding: 0}}>
          <Image
            source={{uri: data.img}}
            resizeMode="stretch"
            style={styles.image}
          />
        </UI.Block>
      </UI.Shadow>
      <UI.Shadow>
        <UI.Block>
          <Typography.Title style={styles.title}>{data.name}</Typography.Title>
          <Typography.Description style={{marginBottom: 15}}>
            <Typography.Title style={{fontSize: 18}}>
              Description:
            </Typography.Title>{' '}
            {data.description}
          </Typography.Description>

          <Typography.Subtitle>Created: {data.date}</Typography.Subtitle>
        </UI.Block>
      </UI.Shadow>
      <UI.Shadow>
        <UI.Block>
          <Typography.Title style={styles.title}>Info</Typography.Title>
          <View style={styles.info}>{renderInfo}</View>
        </UI.Block>
      </UI.Shadow>
      <UI.Shadow>
        <UI.Block>
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
        </UI.Block>
      </UI.Shadow>
    </UI.Root>
  );
};
