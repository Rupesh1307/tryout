import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import GoogleMap from './src/map/googlemap';

function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
      <View style={styles.container}>
        <GoogleMap />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  SafeAreaViewStyle: {
    flex: 1,
  },
});
