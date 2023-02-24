import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, } from 'react-native';
import Login  from './screens/Login';  

const App = () => {
  return (
    <SafeAreaView>
    <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Login/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#ffccc',
    padding: 18
  }
});

export default App;