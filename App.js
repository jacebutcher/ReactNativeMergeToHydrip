import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import MainTabNavigator from './navigation/MainTabNavigator';

function App() {
  return (
    <View style={styles.container}>
        <MainTabNavigator />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

export default App;