import {Formik} from 'formik';
import React, {useState} from 'react';
import * as yup from 'yup';
import {
  Alert,
  Button,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {THEME} from '../../theme';
import {Typography} from '../../components/Typography';
import {Picker} from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {UI} from '../../ui';

export const Add: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const addProject = (values: any) => {
    const project = {
      name: values.name,
      id: new Date().toLocaleString(),
      date: values.date,
      description: values.description,
      info: [
        {name: 'Rating', value: values.rating, type: '/10'},
        {name: 'Time', value: values.time, type: ' Min'},
        {name: 'Category', value: 'Art'},
      ],
    };
    console.log(project);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  let schema = yup.object().shape({
    name: yup
      .string()
      .required('Name is required')
      .min(3, 'At least 3 letters')
      .matches(/^[a-zA-Z]+$/, {message: 'Use only letters'}),
    description: yup
      .string()
      .required('Description is required')
      .min(3, 'At least 3 letters')
      .matches(/^[a-zA-Z]+$/, {message: 'Use only letters'}),
    rating: yup.number().required('Choose one'),
    time: yup.number().required('Time is required').max(999, `It's too much`),
    date: yup.string().required('Choose date'),
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        name: '',
        description: '',
        rating: '',
        time: '',
        date: '',
      }}
      onSubmit={values => console.log(values)}>
      {({
        values,
        handleChange,
        setFieldTouched,
        setFieldValue,
        errors,
        isValid,
        handleSubmit,
      }) => (
        <ScrollView style={styles.root}>
          <View style={styles.block}>
            <Typography.Title style={styles.title}>
              Tell about your project
            </Typography.Title>
            <View>
              <Typography.Description>Name:</Typography.Description>
              <View style={{position: 'relative'}}>
                <TextInput
                  style={{
                    ...styles.textInput,
                    borderBottomColor: errors.name
                      ? THEME.COLOR_RED
                      : THEME.COLOR_GRAY,
                  }}
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                  placeholder="Name your project"
                />
                {errors.name && (
                  <Text
                    style={{
                      position: 'absolute',
                      top: 55,
                      fontSize: 12,
                      color: '#FF0D10',
                    }}>
                    {errors.name}
                  </Text>
                )}
              </View>
            </View>
            <View>
              <Typography.Description>Description:</Typography.Description>
              <View style={{position: 'relative'}}>
                <TextInput
                  style={{
                    ...styles.textInput,
                    borderBottomColor: errors.description
                      ? THEME.COLOR_RED
                      : THEME.COLOR_GRAY,
                  }}
                  value={values.description}
                  onChangeText={handleChange('description')}
                  onBlur={() => setFieldTouched('description')}
                  placeholder="Add a description"
                />
                {errors.description && (
                  <Text
                    style={{
                      position: 'absolute',
                      top: 55,
                      fontSize: 12,
                      color: '#FF0D10',
                    }}>
                    {errors.description}
                  </Text>
                )}
              </View>
            </View>
          </View>
          <View style={styles.block}>
            <Typography.Title style={styles.title}>
              Add additional info
            </Typography.Title>
            <View>
              <Typography.Description>Rating:</Typography.Description>
              <View style={{position: 'relative'}}>
                <View
                  style={{
                    ...styles.textInput,
                    borderBottomColor: errors.rating
                      ? THEME.COLOR_RED
                      : THEME.COLOR_GRAY,
                  }}>
                  <Picker
                    style={{
                      width: '100%',
                    }}
                    selectedValue={selectedLanguage}
                    onValueChange={itemValue => {
                      setSelectedLanguage(itemValue);
                      setFieldValue('rating', itemValue);
                    }}>
                    <Picker.Item label="Choose one" value="" />
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="6" value={6} />
                    <Picker.Item label="7" value={7} />
                    <Picker.Item label="8" value={8} />
                    <Picker.Item label="9" value={9} />
                    <Picker.Item label="10" value={10} />
                  </Picker>
                </View>
                {errors.rating && (
                  <Text
                    style={{
                      position: 'absolute',
                      top: 55,
                      fontSize: 12,
                      color: '#FF0D10',
                    }}>
                    {errors.rating}
                  </Text>
                )}
              </View>
            </View>
            <View>
              <Typography.Description>Time:</Typography.Description>
              <View style={{position: 'relative'}}>
                <TextInput
                  style={{
                    ...styles.textInput,
                    borderBottomColor: errors.time
                      ? THEME.COLOR_RED
                      : THEME.COLOR_GRAY,
                  }}
                  value={values.time}
                  onChangeText={handleChange('time')}
                  onBlur={() => setFieldTouched('time')}
                  placeholder="How much time did you spend"
                />
                {errors.time && (
                  <Text
                    style={{
                      position: 'absolute',
                      top: 55,
                      fontSize: 12,
                      color: '#FF0D10',
                    }}>
                    {errors.time}
                  </Text>
                )}
              </View>
            </View>
            <View>
              <Typography.Description>Date of creation:</Typography.Description>
              <View style={{position: 'relative'}}>
                <View style={{width: 300}}>
                  <View style={styles.dateInput}>
                    <UI.Button
                      name="calendar-outline"
                      style={styles.calendar}
                      color={THEME.COLOR_WHITE}
                      callback={showDatePicker}
                    />
                    <Typography.Description style={styles.date}>
                      {values.date === '' ? 'Unknown' : values.date}
                    </Typography.Description>
                  </View>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={(date: any) => {
                      setFieldValue(
                        'date',
                        new Date(date).toLocaleDateString(),
                      );
                      hideDatePicker();
                    }}
                    onCancel={hideDatePicker}
                  />

                  {errors.date && (
                    <Text
                      style={{
                        position: 'absolute',
                        top: 55,
                        left: 75,
                        fontSize: 12,
                        color: '#FF0D10',
                      }}>
                      {errors.date}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          </View>
          <View style={styles.block}>
            <Typography.Title style={styles.title}>Ready?</Typography.Title>
            <UI.Button
              color={THEME.COLOR_WHITE}
              style={{backgroundColor: THEME.COLOR_BLUE}}
              name="checkmark-outline"
              disabled={!isValid}
              callback={handleSubmit}
            />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};
