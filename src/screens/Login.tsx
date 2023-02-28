import React, { useRef, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, StatusBar, ImageBackground, TextInput, Button, Alert, AppState } from 'react-native';
import { useDispatch, useSelector,connect } from 'react-redux';
import {login, logout} from '../app/reducers/auth.reducer';

// interface IProps {
//     dispatch: any;
// }

const state = {
    username: '',
    password: ''
}

interface ICredentials {
    username: string;
    password: string;
}

const Login: React.FC = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state: any) => state);
    const [username, setUsername] = useState('initial username');
    const [password, setPassword] = useState('initial password');
    const handleLogin = () => {
        if(!username && !password){
            Alert.alert('Please enter username and password');
        }
        console.log(username, password);
        if(username == 'admin' && password == '123456'){
            console.log('Login success');
            dispatch(login({username, password}));
            // this.props.dispatch(login(this.state));
        }else{
            Alert.alert("Wrong credentials");
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={ require('../resource/images/BG.png') } style={styles.image} imageStyle={ styles.imgBackground}>
                <View style={ styles.loginContainer }>
                    <View>
                    <Text style={ styles.inputLabel }>Username</Text>
                        <TextInput style={ styles.input } onChangeText={ setUsername }/>
                    </View>
                    <View>
                        <Text style={[styles.inputLabel, {marginTop: 10}]}>Password</Text>
                        <TextInput style={ styles.input } secureTextEntry={true} onChangeText={ setPassword }/>
                    </View>
                </View>
                <Text>Liên hệ admin nếu bạn quên mật khẩu</Text>
                <Button title='Đăng nhập' onPress={ handleLogin }/>
                <Button title='Check credentials' onPress={ () => console.log(selector) }/>
            </ImageBackground>
        </View>
    );
}

export default Login;

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

// const mapStateToProps = (state: any) => {
//     return {
//         state: state
//     }
// }

// export default connect(mapStateToProps)(Login);