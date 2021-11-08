import React from 'react';
import {Modal, View} from 'react-native';
import {Root, Block, Button} from '..';
import {Title, Description} from '../../components/Typography';
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
      <Root type="View" style={styles.modal}>
        <Block>
          <Title style={{textAlign: 'center'}}>{title}</Title>
          <Description style={styles.message}>{message}</Description>
          <View style={styles.buttons}>
            <Button
              name="checkmark-outline"
              color={THEME.COLOR_WHITE}
              style={{...styles.button, backgroundColor: THEME.COLOR_BLUE}}
              callback={onSubmit}
            />
            <Button
              name="close-outline"
              color={THEME.COLOR_WHITE}
              style={styles.button}
              callback={onCancel}
            />
          </View>
        </Block>
      </Root>
    </Modal>
  );
};
