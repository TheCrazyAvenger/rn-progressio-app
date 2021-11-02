import {Formik} from 'formik';
import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {THEME} from '../../theme';
import {Typography} from '../../components/Typography';
import {Picker} from '@react-native-picker/picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {UI} from '../../ui';
import {useNavigation} from '@react-navigation/core';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addProject} from '../../store/slices/addSlice';
import Icon from 'react-native-vector-icons/Ionicons';
import {clearFields, launchCamera, openGallery, schema, IValues} from '..';
import {setColor} from '../../utilities/utilities';

export const Add: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
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
        {name: 'Rating', value: values.rating, type: '/10'},
        {name: 'Time', value: values.time, type: ' Min'},
        {name: 'Category', value: values.category},
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
                  Tell about your project
                </Typography.Title>
                <View>
                  <Typography.Description>Name:</Typography.Description>
                  <View style={{position: 'relative'}}>
                    <TextInput
                      placeholderTextColor={setColor(theme)}
                      style={{
                        color: setColor(theme),
                        ...styles.textInput,

                        borderBottomColor:
                          errors.name && touched.name
                            ? THEME.COLOR_RED
                            : setColor(theme),
                      }}
                      value={values.name}
                      onChangeText={handleChange('name')}
                      onBlur={() => setFieldTouched('name')}
                      placeholder="Name your project"
                    />
                    {errors.name && touched.name && (
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
                      placeholderTextColor={setColor(theme)}
                      style={{
                        color: setColor(theme),
                        ...styles.textInput,
                        borderBottomColor:
                          errors.description && touched.description
                            ? THEME.COLOR_RED
                            : setColor(theme),
                      }}
                      value={values.description}
                      onChangeText={handleChange('description')}
                      onBlur={() => setFieldTouched('description')}
                      placeholder="Add a description"
                    />
                    {errors.description && touched.description && (
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
                <View>
                  <Typography.Description>Category:</Typography.Description>
                  <View style={{position: 'relative'}}>
                    <TextInput
                      placeholderTextColor={setColor(theme)}
                      style={{
                        color: setColor(theme),
                        ...styles.textInput,
                        borderBottomColor:
                          errors.category && touched.category
                            ? THEME.COLOR_RED
                            : setColor(theme),
                      }}
                      value={values.category}
                      onChangeText={handleChange('category')}
                      onBlur={() => setFieldTouched('category')}
                      placeholder="Add a category"
                    />
                    {errors.category && touched.category && (
                      <Text
                        style={{
                          position: 'absolute',
                          top: 55,
                          fontSize: 12,
                          color: '#FF0D10',
                        }}>
                        {errors.category}
                      </Text>
                    )}
                  </View>
                </View>
              </UI.Block>

              <UI.Block>
                <Typography.Title style={styles.title}>
                  Add additional info
                </Typography.Title>
                <View>
                  <Typography.Description>Rating:</Typography.Description>
                  <View style={{position: 'relative'}}>
                    <View
                      style={{
                        ...styles.textInput,
                        borderBottomColor:
                          errors.rating && touched.rating
                            ? THEME.COLOR_RED
                            : setColor(theme),
                      }}>
                      <Picker
                        style={{
                          width: '100%',
                        }}
                        dropdownIconColor={setColor(theme)}
                        mode="dropdown"
                        selectedValue={selectedLanguage}
                        onValueChange={itemValue => {
                          setSelectedLanguage(itemValue);
                          setFieldValue('rating', itemValue);
                        }}>
                        <Picker.Item
                          style={{color: setColor(theme, THEME.COLOR_RED)}}
                          label="Choose one"
                          value=""
                        />
                        <Picker.Item
                          style={{color: setColor(theme, THEME.COLOR_RED)}}
                          label="1"
                          value={1}
                        />
                        <Picker.Item
                          style={{color: setColor(theme, THEME.COLOR_RED)}}
                          label="2"
                          value={2}
                        />
                        <Picker.Item
                          style={{color: setColor(theme, THEME.COLOR_RED)}}
                          label="3"
                          value={3}
                        />
                        <Picker.Item
                          style={{color: setColor(theme, THEME.COLOR_RED)}}
                          label="4"
                          value={4}
                        />
                        <Picker.Item
                          style={{color: setColor(theme, THEME.COLOR_RED)}}
                          label="5"
                          value={5}
                        />
                      </Picker>
                    </View>
                    {errors.rating && touched.rating && (
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
                      placeholderTextColor={setColor(theme)}
                      style={{
                        ...styles.textInput,
                        color: setColor(theme),
                        borderBottomColor:
                          errors.time && touched.time
                            ? THEME.COLOR_RED
                            : setColor(theme),
                      }}
                      value={values.time}
                      onChangeText={handleChange('time')}
                      onBlur={() => setFieldTouched('time')}
                      placeholder="How much time did you spend"
                    />
                    {errors.time && touched.time && (
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
                  <Typography.Description>
                    Date of creation:
                  </Typography.Description>
                  <View style={{position: 'relative'}}>
                    <View style={{minWidth: '100%'}}>
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

                      {errors.date && touched.date && (
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
              </UI.Block>

              <UI.Block>
                <Typography.Title style={styles.title}>
                  Add a photo
                </Typography.Title>
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
                {errors.path && touched.path && (
                  <Text
                    style={{
                      position: 'absolute',
                      bottom: 10,
                      fontSize: 12,
                      color: '#FF0D10',
                    }}>
                    {errors.path}
                  </Text>
                )}
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
