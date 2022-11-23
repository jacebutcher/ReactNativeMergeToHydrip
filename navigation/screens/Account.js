import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';


//HANDLERS
///////////////////////////////////////////////////////////////////////////

export const handleCreateAccPress = () => {
    //TODO: Implement logic to navigate to signup page.
}

export default class Account extends React.Component {
    state={
    }
    
    render(){
      return (
        <View style={styles.container}>
          <Text>Hydrip Wellness 2023©</Text>
          <Text>Text 2</Text>
          <Text>Example 3</Text>
          <Text>Password</Text>
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
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"#72d9e9",
      marginBottom:80
    },
    style2:{
        fontWeight:"bold",
        fontSize:50,
        color:"#72d9e9",
        marginBottom:80
      }
  });