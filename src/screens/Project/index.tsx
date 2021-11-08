import {useNavigation, useRoute} from '@react-navigation/core';
import I18n from 'i18n-js';
import React, {useMemo, useState} from 'react';
import {Image, View} from 'react-native';
import {IRengerInfo} from '..';
import {H2, Description, Title, Subtitle} from '../../components/Typography';
import {useAppDispatch} from '../../store/hooks';
import {removeProject} from '../../store/slices/addSlice';
import {Screens, THEME} from '../../constants';
import {Root, Block, Button, DeleteModal} from '../../ui';
import {styles} from './styles';

export const Project: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const route: any = useRoute();
  const navigation: any = useNavigation();
  const {data} = route.params;
  const dispatch = useAppDispatch();

  const editHandler = () => {
    navigation.navigate(Screens.edit, {
      data,
    });
  };

  const renderInfo = useMemo(() => {
    return data.info.map((item: IRengerInfo, i: number) => {
      return (
        <View style={styles.renderInfo} key={i}>
          <H2>{I18n.t(item.name)}</H2>
          <View style={styles.infoInner}>
            <Description>{item.value}</Description>
            {item.type ? <Description>{item.type}</Description> : null}
          </View>
        </View>
      );
    });
  }, [data]);

  return (
    <Root>
      <DeleteModal
        title={I18n.t('alertTitle')}
        message={I18n.t('alertMessage')}
        onSubmit={() => {
          dispatch(removeProject(data.id));
          setModalVisible(false);
          navigation.navigate(Screens.main);
        }}
        onCancel={() => setModalVisible(false)}
        visible={modalVisible}
      />

      <Block style={{padding: 0}}>
        <Image
          source={{uri: data.img}}
          resizeMode="stretch"
          style={styles.image}
        />
      </Block>

      <Block>
        <Title style={styles.title}>{data.name}</Title>
        <Description style={{marginBottom: 15}}>
          <Title style={{fontSize: 18}}>{I18n.t('description')}:</Title>{' '}
          {data.description}
        </Description>

        <Subtitle>
          {I18n.t('created')}: {data.date}
        </Subtitle>
      </Block>

      <Block>
        <Title style={styles.title}>{I18n.t('info')}</Title>
        <View style={styles.info}>{renderInfo}</View>
      </Block>

      <Block>
        <Title style={styles.title}>{I18n.t('actions')}</Title>
        <View style={styles.buttons}>
          <Button
            name="pencil-outline"
            color={THEME.COLOR_WHITE}
            style={{...styles.button, backgroundColor: THEME.COLOR_BLUE}}
            callback={editHandler}
          />
          <Button
            name="close-outline"
            color={THEME.COLOR_WHITE}
            style={styles.button}
            callback={() => setModalVisible(true)}
          />
        </View>
      </Block>
    </Root>
  );
};
