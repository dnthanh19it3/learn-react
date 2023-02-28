import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert, Switch } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: '',
      rememberMe: false
   }
   handleEmail = (text) => {
      this.state.email = text
   }
   handlePassword = (text) => {
      this.state.password = text
   }
   login = () => {
      if(this.state.email && this.state.password){
         Alert.alert('Credentials', `${this.state.email} + ${this.state.password}`)
      }
      else{
         Alert.alert('Credentials', 'Please enter your credentials')
      }
   }

   render() {
      console.log("Mount it!");
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = { this.handlePassword }/>
            
            <Switch
            onValueChange = { this.state.rememberMe}
            value = { this.state.rememberMe }/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})