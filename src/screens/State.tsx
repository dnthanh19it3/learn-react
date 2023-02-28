import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

class StateScreen extends React.Component {
    constructor(props: any) {
        super(props);
        this.setName = this.setName.bind(this);
        this.propName = this.props.propName;
    }
   state = {
        name: 'Nguyen Van A',
        age: 20,
        address: 'Ha Noi',
   }
   props: Readonly<{
         propName: string;
   }>;
   render(): React.ReactNode {
        return (
             <View style={styles.container}>
                <Text>{ this.state.name }</Text>
                <Text>{ this.state.age }</Text>
                <Text>{ this.state.address }</Text>
                <Text>{ this.props.propName }</Text>
                <Pressable onPress={this.setName} style={styles.button}>
                    <Text>Change name</Text>
                </Pressable>
             </View>
        );
   }
   setName = (name: string) => {
        this.setState({name: "Thanh"});
   }
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#fff',
       alignItems: 'center',
       justifyContent: 'center',
    },
    button: {
        backgroundColor: 'red',
        color: 'white',
        padding: 8,
        borderRadius: 4
    }
 });

export default StateScreen;