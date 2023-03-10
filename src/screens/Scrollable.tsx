import React, {Component} from 'react';
import {Text, Image, View, StyleSheet, ScrollView} from 'react-native';
import {getUsers} from '../app/bussiness/index';

class Scrollable extends Component {
  state = {
    names: [],
  };
  constructor(props) {
    super(props);
  }
  
  render() {
    let users = getUsers();
    this.setState({names: users.data});
    return (
      <View>
        <ScrollView>
          !{this.state.names ?? this.state.names.map((item, index) => (
            <View key={item.id} style={styles.item}>
              <Text>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
  },
});

export default Scrollable;
