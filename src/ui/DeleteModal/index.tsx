import React, {useState} from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {UI} from '..';
import {Typography} from '../../components/Typography';
import {THEME} from '../../constants/theme';
import {styles} from './styles';

type DeleteModalProps = {
  title: string;
  message: string;
  visible: boolean;
  onSubmit: any;
  onCancel: any;
};

export const DeleteModal: React.FC<DeleteModalProps> = ({
  title,
  message,
  visible,
  onSubmit,
  onCancel,
}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <UI.Root type="View" style={styles.modal}>
        <UI.Block>
          <Typography.Title>{title}</Typography.Title>
          <Typography.Description style={styles.message}>
            {message}
          </Typography.Description>
          <View style={styles.buttons}>
            <UI.Button
              name="checkmark-outline"
              color={THEME.COLOR_WHITE}
              style={{...styles.button, backgroundColor: THEME.COLOR_BLUE}}
              callback={onSubmit}
            />
            <UI.Button
              name="close-outline"
              color={THEME.COLOR_WHITE}
              style={styles.button}
              callback={onCancel}
            />
          </View>
        </UI.Block>
      </UI.Root>
    </Modal>
  );
};
