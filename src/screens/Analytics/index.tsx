import React, {useState} from 'react';
import {UI} from '../../ui';
import {LineChart, ProgressChart} from 'react-native-chart-kit';
import {styles} from './styles';
import {Typography} from '../../components/Typography';
import {Dimensions} from 'react-native';
import {useAppSelector} from '../../store/hooks';
import {Forms} from '../../forms';

export const Analytics: React.FC = () => {
  const projects = useAppSelector(state => state.projects.projects);
  const goal = useAppSelector(state => state.projects.goal);

  const currentMonth = new Date('11/01/21').getMonth();

  const lastProjects = projects.slice(-5);
  const namesArr: Array<string> = [];
  const timeArr: Array<number> = [];
  const ratingArr: Array<number> = [];
  let monthValue: number = 0;
  let prevMonthValue: number = 0;

  lastProjects.map((item: any) => {
    namesArr.push(item.name);
    timeArr.push(item.info[1].value);
    ratingArr.push(item.info[0].value);
    const date = new Date(item.date).getMonth();
    if (date === currentMonth) {
      monthValue++;
    }
    if (date === currentMonth - 1) {
      prevMonthValue++;
    }
  });

  return (
    <UI.Root>
      <UI.Block>
        <Typography.Title>Goal this month</Typography.Title>
      </UI.Block>

      {goal ? (
        <UI.Block style={{padding: 0}}>
          <ProgressChart
            data={{
              labels: ['Prev', 'Now'],

              data: [prevMonthValue / goal, monthValue / goal],
            }}
            width={Dimensions.get('window').width}
            height={230}
            chartConfig={{
              backgroundColor: '#2711ed',
              backgroundGradientFrom: '#3d30b8',
              backgroundGradientTo: '#6a5fcf',
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            radius={40}
            style={styles.analytics}
          />
        </UI.Block>
      ) : (
        <Forms.Goal />
      )}

      <UI.Block>
        <Typography.Title>Time spent</Typography.Title>
      </UI.Block>

      <UI.Block style={{padding: 0}}>
        <LineChart
          data={{
            labels: namesArr,
            datasets: [
              {
                data: timeArr,
              },
            ],
          }}
          width={Dimensions.get('window').width}
          height={230}
          yAxisLabel=""
          yAxisSuffix="min"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {},
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={styles.analytics}
        />
      </UI.Block>

      <UI.Block>
        <Typography.Title>Rating</Typography.Title>
      </UI.Block>

      <UI.Block style={{padding: 0}}>
        <LineChart
          data={{
            labels: namesArr,
            datasets: [
              {
                data: ratingArr,
              },
            ],
          }}
          width={Dimensions.get('window').width}
          height={230}
          yAxisLabel=""
          yAxisSuffix="/5"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#a52af7',
            backgroundGradientFrom: '#a238e8',
            backgroundGradientTo: '#b160e6',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {},
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#c28ce6',
            },
          }}
          bezier
          style={styles.analytics}
        />
      </UI.Block>

      <UI.Block>
        <Typography.Title>Uploads</Typography.Title>
      </UI.Block>

      <UI.Block style={{padding: 0}}>
        <LineChart
          data={{
            labels: ['', 'Prev month', 'This month'],
            datasets: [
              {
                data: [0, prevMonthValue, monthValue],
              },
            ],
          }}
          width={Dimensions.get('window').width}
          height={230}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#f52032',
            backgroundGradientFrom: '#e34654',
            backgroundGradientTo: '#e3646f',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {},
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ed9aa1',
            },
          }}
          style={styles.analytics}
        />
      </UI.Block>
    </UI.Root>
  );
};
