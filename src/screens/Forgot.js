import { Box, Button, Stack, View } from 'native-base';
import React from 'react';
import { useState } from 'react';
import { ImageBackground, Text, StyleSheet, TextInput, Alert, } from 'react-native';
import { sendOtp, verifyEmail } from '../services/Services';
import { useNavigation } from '@react-navigation/native';


const Forgot = (props) => {

    const [email, setEmail] = useState("")

    const navigation = useNavigation()

    const verifyEmailId = () => {

        verifyEmail({ emailId: email }, verified, failed)

    }

    const verified = (result) => {

        if (result == 1) {


            sendOtp({ emailId: email }, mailSent, sentFail)



        }
        else {
            Alert.alert("Error", "Please enter valid email id")
        }

    }

    const mailSent = (res) => {

        console.log('res', res)
        navigation.navigate('Varification', { status: res, email: email })

    }

    const sentFail = (res) => {

    }



    const failed = (result) => {


        Alert.alert("Error", "Error while sending the email")

    }


    return (
        <Box style={{ top: 150 }}>
            <Box><Text style={{ fontSize: 30, top: -110, textAlign: 'center', color: 'black' }}>Forgot Password</Text></Box>
            <Stack space={3} alignItems="center">
                <Text style={styles.emailText}>Enter Email Address</Text>
                <TextInput placeholder="Email" onChangeText={text => setEmail(text)} placeholderTextColor="gray" style={styles.input} />
                <Text style={{ fontSize: 20 }}
                    onPress={() => props.navigation.navigate('Login')}>Back to login</Text>
                <Button onPress={verifyEmailId} style={styles.btn}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Send</Text>
                </Button>
            </Stack>
        </Box>
    )
};

const styles = StyleSheet.create({

    emailText: {
        textAlign: 'center',
        color: '#000',
        fontSize: 25,
        marginBottom: 30
    },
    input: {
        fontSize: 20,
        borderBottomWidth: 2,
        color: 'gray',
        borderBottomColor: 'black',
        width: 300,
        marginVertical: 20
    },
    btn: {
        width: 300,
        borderRadius: 0,
        backgroundColor: 'lightblue',
        marginTop: 20
    },
})
export default Forgot;