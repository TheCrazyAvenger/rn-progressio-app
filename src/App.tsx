import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Progressio</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Lato-Bold',
    fontSize: 30,
  },
});

export default App;
