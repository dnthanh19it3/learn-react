import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, ImageBackground, TextInput, Button } from 'react-native';

class Login extends React.Component {
    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <ImageBackground source={ require('../resource/images/BG.png') } style={styles.image} imageStyle={ styles.imgBackground}>
                    <View style={ styles.loginContainer }>
                        <View>
                            <Text style={[styles.inputLabel, {marginTop: 10}]}>Password</Text>
                            <TextInput style={ styles.input } secureTextEntry={true}/>
                        </View>
                        <View>
                        <Text style={ styles.inputLabel }>Username</Text>
                            <TextInput style={ styles.input }/>
                        </View>
                    </View>
                    <Text>Liên hệ admin nếu bạn quên mật khẩu</Text>
                    <Button title='Đăng nhập'/>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        background: "red",
        height: "100%",
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#ffffff",
        padding: 18,
        position: 'relative',
        width: "100%",
        height: "60%"
    },
    imgBackground: {
        resizeMode: 'cover',
        position: 'absolute',
        top: "-50%",
    },

    loginContainer: {
        display: 'flex',
        // width: "100%",
        // justifyContent: 'center',
        // alignItems: 'center',
        // position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 18,
        borderColor: '#BDC4CC',
        borderStyle: 'solid',
        borderWidth: 1,
        
        // top: '0%',
    }, 
    input: {
        borderColor: '#BDC4CC',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 12,
        marginTop: 8,
        fontSize: 16,
    }

    ,
    inputLabel: {
        color: 'black',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Montserrat'
    }
});

export default Login;