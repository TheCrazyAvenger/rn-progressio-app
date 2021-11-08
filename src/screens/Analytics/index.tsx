import React, {useState} from 'react';
import {Root, Block, Button, DeleteModal} from '../../ui';
import {LineChart, ProgressChart} from 'react-native-chart-kit';
import {styles} from './styles';
import {Modal, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {Goal} from '../../forms';
import {THEME} from '../../constants';
import {setGoal} from '../../store/slices/addSlice';
import I18n from 'i18n-js';
import {EmptyList} from '../../components/EmptyList';
import {Chart} from '../../components';

export const Analytics: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const projects = useAppSelector(state => state.projects.projects);
  const goal = useAppSelector(state => state.projects.goal);
  const dispatch = useAppDispatch();

  const currentMonth = new Date().getMonth();

  const lastProjects = projects.slice(-5);
  const namesArr: Array<string> = [];
  const timeArr: Array<number> = [];
  const ratingArr: Array<number> = [];
  let monthValue: number = 0;
  let prevMonthValue: number = 0;

  lastProjects.map((item: any) => {
    namesArr.push(item.name);
    timeArr.push(+item.info[1].value);
    ratingArr.push(item.info[0].value);
    const date = new Date(item.date).getMonth();
    if (date === currentMonth) {
      monthValue++;
    }
    if (date === currentMonth - 1) {
      prevMonthValue++;
    }
  });

  return projects.length < 2 ? (
    <EmptyList
      title={I18n.t('emptyTitle')}
      description={I18n.t('emptyDescription')}
    />
  ) : (
    <Root>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Root type="View" style={styles.modal}>
          <Goal
            placeholder={I18n.t('plEditGoal')}
            type="Modal"
            callback={() => setModalVisible(!modalVisible)}
          />
        </Root>
      </Modal>

      <DeleteModal
        title={I18n.t('alertAnalytics')}
        message={I18n.t('messageAnalytics')}
        onSubmit={() => {
          dispatch(setGoal(null));
          setDeleteModal(false);
        }}
        onCancel={() => setDeleteModal(false)}
        visible={deleteModal}
      />

      {goal ? (
        <>
          <Chart
            ChartType={ProgressChart}
            title={`${I18n.t('goal')} (${monthValue} / ${goal})`}
            data={{
              labels: [I18n.t('prev'), I18n.t('now')],

              data: [
                prevMonthValue > goal ? 1 : prevMonthValue / goal,
                monthValue > goal ? 1 : monthValue / goal,
              ],
            }}
            backgroundColor="#2711ed"
            backgroundGradientFrom="#3d30b8"
            backgroundGradientTo="#6a5fcf"
          />

          <Block>
            <View style={styles.buttons}>
              <Button
                name="pencil-outline"
                color={THEME.COLOR_WHITE}
                style={{...styles.button, backgroundColor: THEME.COLOR_BLUE}}
                callback={() => setModalVisible(true)}
              />
              <Button
                name="close-outline"
                color={THEME.COLOR_WHITE}
                style={styles.button}
                callback={() => setDeleteModal(true)}
              />
            </View>
          </Block>
        </>
      ) : (
        <Goal placeholder={I18n.t('plGoal')} />
      )}

      <Chart
        ChartType={LineChart}
        bezier={true}
        title={I18n.t('timeSpent')}
        data={{
          labels: namesArr,
          datasets: [
            {
              data: timeArr,
            },
          ],
        }}
        yLabel="min"
        backgroundColor="#e26a00"
        backgroundGradientFrom="#fb8c00"
        backgroundGradientTo="#ffa726"
        strokeColor="#ffa726"
      />

      <Chart
        ChartType={LineChart}
        bezier={true}
        title={I18n.t('rating')}
        data={{
          labels: namesArr,
          datasets: [
            {
              data: ratingArr,
            },
          ],
        }}
        yLabel="/10"
        backgroundColor="#a52af7"
        backgroundGradientFrom="#a238e8"
        backgroundGradientTo="#b160e6"
        strokeColor="#c28ce6"
      />

      <Chart
        ChartType={LineChart}
        title={I18n.t('uploads')}
        data={{
          labels: ['', I18n.t('prevMonth'), I18n.t('thisMonth')],
          datasets: [
            {
              data: [0, prevMonthValue, monthValue],
            },
          ],
        }}
        backgroundColor="#f52032"
        backgroundGradientFrom="#e34654"
        backgroundGradientTo="#e3646f"
        strokeColor="#ed9aa1"
      />
    </Root>
  );
};
