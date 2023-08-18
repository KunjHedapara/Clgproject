import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { Box, Button, Stack, View } from 'native-base';
import React, { useState } from 'react';
import { ImageBackground, Text, StyleSheet, TextInput, Alert, } from 'react-native';
import { resetPassword } from '../services/Services';
import store from '../redux/store';
import { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';


const Reset = (props) => {

    const route = useRoute()

    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")


    useEffect(() => {
        console.log(store.getState().login)
    }, [])

    const updatePassword = () => {
        if (password != cPassword) {
            Alert.alert("Error", "Password and Confirm Password is not same")
        }
        else {
            resetPassword({ email: route.params.email, pass: password }, success, failed)
        }
    }

    const success = (res) => {
        if (res == 1) {
            Alert.alert("Success", 'Password is updated.')
            props.navigation.navigate('Login')
        }
        else {
            Alert.alert("Error", 'Password can not be updated.')
        }
    }
    const failed = () => {

        Alert.alert("Error", 'Password can not be updated.')
    }

    return (

        <Box style={{ top: 190 }}>
            <Stack space={3} alignItems="center">
                <Box>
                    <Text style={styles.lable}>Enter new Password</Text>
                    <TextInput value={password} style={styles.input} onChangeText={text => { setPassword(text) }} inputMode='password' placeholder='Password'secureTextEntry={true}></TextInput>
                </Box>
                <Box style={{ marginVertical: 15 }}>
                    <Text style={styles.lable}>Confirm Password</Text>
                    <TextInput value={cPassword} style={styles.input} onChangeText={text => { setCPassword(text) }} inputMode='password' placeholder='*********'secureTextEntry={true}></TextInput>
                </Box>
                <Button onPress={() => updatePassword()} style={styles.btn}>
                    <Text style={{ color: 'black', fontSize: 20 }}>Reset</Text>
                </Button>
            </Stack>
        </Box>
    )
};

const styles = StyleSheet.create({

    lable: {
        fontSize: 25,
        color: '#000'
    },
    input: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'gray',
        width: 300,
        fontSize: 20,
        padding: 10,
        marginTop: 20
    },
    btn: {
        fontSize: 20,
        width: 200,
        borderRadius: 0,
        backgroundColor: 'lightblue',
        marginTop: 20,
        color: 'black',

    }

})
export default Reset;