import {Formik} from 'formik';
import React from 'react';
import * as yup from 'yup';
import {Alert, Button, Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {THEME} from '../../theme';

export const Add: React.FC = () => {
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
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        name: '',
        description: '',
      }}
      onSubmit={values => Alert.alert(JSON.stringify(values))}>
      {({
        values,
        handleChange,
        setFieldTouched,
        errors,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.root}>
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
          <View style={{position: 'relative'}}>
            <TextInput
              style={{
                ...styles.textInput,
                borderBottomColor: errors.name
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

          <Button
            color="#3740FE"
            title="Submit"
            disabled={!isValid}
            onPress={handleSubmit}
          />
        </View>
      )}
    </Formik>
  );
};
