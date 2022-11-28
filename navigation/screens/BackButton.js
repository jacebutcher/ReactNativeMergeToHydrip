import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default class BackButton extends React.Component {
    state={
        clicked: false,
        initiated: false,
    }
    
    render(){
      return (
        <View style={styles.container}>
          <Text>Placeholder</Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });