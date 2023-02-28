import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
class Flex extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text>Box 1</Text>
        </View>
        <View style={styles.box2}>
          <Text>Box 2</Text>
        </View>
        <View style={styles.box3}>
          <Text>Box 3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'pink',
    justifyContent: 'space-between',
  },
  box1: {backgroundColor: 'red', width: '100%', height: 32},
  box2: {backgroundColor: 'green', flex: 1},
  box3: {backgroundColor: 'blue', width: '100%', height: 48},
});

export default Flex;
