import {Formik} from 'formik';
import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {AirbnbRating} from 'react-native-elements';
import {styles} from './styles';
import {THEME} from '../../theme';
import {Typography} from '../../components/Typography';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {UI} from '../../ui';
import {useNavigation} from '@react-navigation/core';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addProject} from '../../store/slices/addSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import {clearFields, launchCamera, openGallery, schema, IValues} from '..';
import {setColor} from '../../utilities/utilities';
import I18n from 'i18n-js';
import {Components} from '../../components';

export const Add: React.FC = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const theme = useAppSelector(state => state.theme.theme);

  const projects = useAppSelector(state => state.projects.projects);

  const navigation: any = useNavigation();

  const dispatch = useAppDispatch();

  const addNew = (values: IValues) => {
    const project = {
      name: values.name,
      id: [...projects].length + 1,
      date: values.date,
      booked: false,
      img: values.path,
      description: values.description,
      info: [
        {name: 'rating', value: values.rating, type: '/10'},
        {name: 'time', value: values.time, type: ' Min'},
        {name: 'category', value: values.category},
      ],
    };
    dispatch(addProject(project));
    navigation.navigate('Main');
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        name: '',
        description: '',
        category: '',
        rating: '',
        time: '',
        date: '',
        path: '',
      }}
      onSubmit={values => addNew(values)}>
      {({
        values,
        handleChange,
        setFieldTouched,
        setFieldValue,
        errors,
        touched,
        isValid,
        handleSubmit,
      }) => {
        return (
          <>
            <UI.Root>
              <UI.Block>
                <Typography.Title style={styles.title}>
                  {I18n.t('addTitle1')}
                </Typography.Title>

                <Components.FormItem
                  title={I18n.t('name')}
                  value={values.name}
                  onChange={handleChange('name')}
                  onBlur={() => setFieldTouched('name')}
                  placeholder={I18n.t('plName')}
                  isTouched={touched.name}
                  errorMessage={errors.name}
                />

                <Components.FormItem
                  title={I18n.t('description')}
                  value={values.description}
                  onChange={handleChange('description')}
                  onBlur={() => setFieldTouched('description')}
                  placeholder={I18n.t('plDescription')}
                  isTouched={touched.description}
                  errorMessage={errors.description}
                />

                <Components.FormItem
                  title={I18n.t('category')}
                  value={values.category}
                  onChange={handleChange('category')}
                  onBlur={() => setFieldTouched('category')}
                  placeholder={I18n.t('plCategory')}
                  isTouched={touched.category}
                  errorMessage={errors.category}
                />
              </UI.Block>

              <UI.Block>
                <Typography.Title style={styles.title}>
                  {I18n.t('addTitle2')}
                </Typography.Title>

                <Components.FormItem
                  title={I18n.t('rating')}
                  isTouched={touched.rating}
                  errorMessage={errors.rating}
                  errorStyle={{top: 45}}>
                  <View style={styles.rating}>
                    <AirbnbRating
                      count={10}
                      defaultRating={0}
                      showRating={false}
                      size={25}
                      onFinishRating={rating => {
                        setFieldValue('rating', rating);
                      }}
                    />
                  </View>
                </Components.FormItem>

                <Components.FormItem
                  title={I18n.t('time')}
                  value={values.time}
                  onChange={handleChange('time')}
                  onBlur={() => setFieldTouched('time')}
                  placeholder={I18n.t('plTime')}
                  isTouched={touched.time}
                  errorMessage={errors.time}
                />

                <Components.FormItem
                  title={I18n.t('creationDate')}
                  isTouched={touched.date}
                  errorMessage={errors.date}
                  errorStyle={{left: 75, top: 50}}>
                  <View style={styles.dateInput}>
                    <UI.Button
                      name="calendar-outline"
                      style={styles.calendar}
                      color={THEME.COLOR_WHITE}
                      callback={showDatePicker}
                    />
                    <Typography.Description style={styles.date}>
                      {values.date === '' ? I18n.t('plDate') : values.date}
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
                </Components.FormItem>
              </UI.Block>

              <UI.Block>
                <Typography.Title style={styles.title}>
                  {I18n.t('addTitle3')}
                </Typography.Title>

                <Components.FormItem
                  isTouched={touched.path}
                  errorMessage={errors.path}
                  errorStyle={{left: 40, top: 60}}>
                  <View style={styles.buttons}>
                    <UI.Button
                      name="camera-outline"
                      color={THEME.COLOR_WHITE}
                      style={{
                        ...styles.button,
                        backgroundColor: THEME.COLOR_BLUE,
                      }}
                      callback={() => launchCamera(setFieldValue)}
                    />
                    <UI.Button
                      name="images-outline"
                      color={THEME.COLOR_WHITE}
                      style={styles.button}
                      callback={() => openGallery(setFieldValue)}
                    />
                  </View>
                </Components.FormItem>
              </UI.Block>

              <UI.Block style={styles.imageBlock}>
                {values.path ? (
                  <Image style={styles.image} source={{uri: values.path}} />
                ) : (
                  <Icon
                    name="images-outline"
                    color={setColor(theme)}
                    size={100}
                  />
                )}
              </UI.Block>
            </UI.Root>
            <UI.Button
              color={THEME.COLOR_WHITE}
              style={{
                ...styles.markButton,
                backgroundColor:
                  isValid && values.name !== ''
                    ? THEME.COLOR_BLUE
                    : THEME.COLOR_GRAY,
              }}
              name="checkmark-outline"
              disabled={!isValid}
              callback={() => {
                handleSubmit();
                clearFields(values);
              }}
            />
          </>
        );
      }}
    </Formik>
  );
};
