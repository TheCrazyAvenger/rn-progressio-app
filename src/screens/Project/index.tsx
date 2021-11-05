import {useNavigation, useRoute} from '@react-navigation/core';
import I18n from 'i18n-js';
import React, {useMemo, useState} from 'react';
import {Alert, Image, View} from 'react-native';
import {IRengerInfo} from '..';
import {Typography} from '../../components/Typography';
import {useAppDispatch} from '../../store/hooks';
import {removeProject} from '../../store/slices/addSlice';
import {THEME} from '../../theme';
import {UI} from '../../ui';

import {styles} from './styles';

export const Project: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const route: any = useRoute();
  const navigation: any = useNavigation();
  const {data} = route.params;
  const dispatch = useAppDispatch();

  const editHandler = () => {
    navigation.navigate('Edit', {
      data,
    });
  };

  const renderInfo = useMemo(() => {
    return data.info.map((item: IRengerInfo, i: number) => {
      return (
        <View style={styles.renderInfo} key={i}>
          <Typography.H2>{I18n.t(item.name)}</Typography.H2>
          <View style={styles.infoInner}>
            <Typography.Description>{item.value}</Typography.Description>
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
      <UI.DeleteModal
        title={I18n.t('alertTitle')}
        message={I18n.t('alertMessage')}
        onSubmit={() => {
          dispatch(removeProject(data.id));
          setModalVisible(false);
          navigation.navigate('Main');
        }}
        onCancel={() => setModalVisible(false)}
        visible={modalVisible}
      />

      <UI.Block style={{padding: 0}}>
        <Image
          source={{uri: data.img}}
          resizeMode="stretch"
          style={styles.image}
        />
      </UI.Block>

      <UI.Block>
        <Typography.Title style={styles.title}>{data.name}</Typography.Title>
        <Typography.Description style={{marginBottom: 15}}>
          <Typography.Title style={{fontSize: 18}}>
            {I18n.t('description')}:
          </Typography.Title>{' '}
          {data.description}
        </Typography.Description>

        <Typography.Subtitle>
          {I18n.t('created')}: {data.date}
        </Typography.Subtitle>
      </UI.Block>

      <UI.Block>
        <Typography.Title style={styles.title}>
          {I18n.t('info')}
        </Typography.Title>
        <View style={styles.info}>{renderInfo}</View>
      </UI.Block>

      <UI.Block>
        <Typography.Title style={styles.title}>
          {I18n.t('actions')}
        </Typography.Title>
        <View style={styles.buttons}>
          <UI.Button
            name="pencil-outline"
            color={THEME.COLOR_WHITE}
            style={{...styles.button, backgroundColor: THEME.COLOR_BLUE}}
            callback={editHandler}
          />
          <UI.Button
            name="close-outline"
            color={THEME.COLOR_WHITE}
            style={styles.button}
            callback={() => setModalVisible(true)}
          />
        </View>
      </UI.Block>
    </UI.Root>
  );
};
