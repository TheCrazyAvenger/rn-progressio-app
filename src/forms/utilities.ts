import ImagePicker from 'react-native-image-crop-picker';

export const clearFields = (values: any) => {
  Object.values(values).map(item => (item = ''));
};

export const launchCamera = (setFieldValue: any) => {
  ImagePicker.openCamera({
    width: 300,
    height: 200,
    cropping: true,
  })
    .then(image => {
      setFieldValue('path', image.path);
    })
    .catch(e => console.log(e));
};

export const openGallery = (setFieldValue: any) => {
  ImagePicker.openPicker({
    width: 300,
    height: 200,
    cropping: true,
  })
    .then(image => {
      setFieldValue('path', image.path);
    })
    .catch(e => console.log(e));
};
