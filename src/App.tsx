import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import Login from './screens/Login';
import StateScreen from './screens/State';
import Flex from './screens/Flex';
import List from './screens/List';
import Inputs from './screens/Inputs';
import Scrollable from './screens/Scrollable';
import {Provider} from 'react-redux';
import store from './app/services/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        {/* <Login /> */}
        </NavigationContainer>
        
        {/* <StateScreen propName='This is my prop name'/> */}
        {/* <Flex/> */}
        {/* <List/> */}
        {/* <Inputs/> */}
        {/* <Scrollable /> */}
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
