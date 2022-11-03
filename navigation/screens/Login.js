import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';


//HANDLERS
///////////////////////////////////////////////////////////////////////////
export const handleLoginPress = () => {
    //TODO: Implement logic to process login based on Email/Password values.
}

export const handleForgotPassPress = () => {
    //TODO: Implement logic to process password reset
}

export const handleCreateAccPress = () => {
    //TODO: Implement logic to navigate to signup page.
}

export default class Login extends React.Component {
    state={
      email:"",
      password:""
    }
    
    render(){
      return (
        <View style={styles.container}>
          <Text style={styles.logo}>Welcome!</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Email..." 
              placeholderTextColor="white"
              onChangeText={text => this.setState({email:text})}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password..." 
              placeholderTextColor="white"
              onChangeText={text => this.setState({password:text})}/>
          </View>
          <TouchableOpacity onPress={handleLoginPress()} style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.helper}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.helper}>Or Create a New Account</Text>
          </TouchableOpacity>
          <View>
          <Image resizeMode={'contain'} style={styles.image} source={require("../../images/hydrip.png")} />
          </View>
          <Text style={styles.disclaimer}>Hydrip Wellness 2023©</Text>
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
    inputView:{
      width:"80%",
      backgroundColor:"#D4D4D4",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"white"
    },
    helper:{
      color:"black",
      fontSize:14
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#72d9e9",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    },
    loginText:{
      color:"white",
      fontSize: 20
    },
    image: {
      width: 180,
      height: 60,
      marginTop: 80
  },
    disclaimer:{
      color:"black",
      fontSize:10,
      marginTop: 5
    }
  });