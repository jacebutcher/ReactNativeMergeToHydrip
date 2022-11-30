import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';


//HANDLERS
///////////////////////////////////////////////////////////////////////////
export const handleSignupPress = () => {
    //TODO: Implement logic to process login based on Email/Password values.
}

export const handleForgotPassPress = () => {
    //TODO: Implement logic to process password reset
}

export const handleSignInPress = () => {
    //TODO: Implement logic to navigate to signin page.
}

export default class Settings extends React.Component {
    state={
      email:"",
      password:"",
      username:"",
      key: "",
      code: 1,
      plan: "",
    }
    
    render(){
      return (
        <View style={styles.container}>
          <Text style={styles.logo}>Sign Up</Text>
          <View style={styles.inputView} >
            <TextInput  
              style={styles.inputText}
              placeholder="Email" 
              placeholderTextColor="white"
              onChangeText={text => this.setState({email:text})}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Username" 
              placeholderTextColor="white"
              onChangeText={text => this.setState({username:text})}/>
          </View>
          <View style={styles.inputView} >
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password" 
              placeholderTextColor="white"
              onChangeText={text => this.setState({password:text})}/>
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>SIGN UP</Text>
          </TouchableOpacity>
        <Text style={styles.forgot}>Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.create}>Sign in here.</Text>
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
      marginBottom:45
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
    forgot:{
      color:"black",
      fontSize:14
    },
    create:{
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