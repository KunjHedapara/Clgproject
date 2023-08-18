import { Box, Button, Stack, View } from 'native-base';
import React from 'react';
import { ImageBackground, Text, StyleSheet, TextInput, } from 'react-native';


const Forgot = (props) => {


    return (
        <Box style={{ top: 150 }}>
            <Box><Text style={{ fontSize: 30, top: -110, textAlign: 'center', color: 'black' }}>Forgot Password</Text></Box>
            <Stack space={3} alignItems="center">
                <Text style={styles.emailText}>Enter Email Address</Text>
                <TextInput placeholder="Email" placeholderTextColor="gray" style={styles.input} />
                <Text style={{ fontSize: 20 }}
                    onPress={() => props.navigation.navigate('Login')}>Back to login</Text>
                <Button onPress={() => props.navigation.navigate('Varification')} style={styles.btn}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Send</Text>
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
        borderBottomColor: 'gray',
        width: 300,
        marginVertical: 20
    },
    btn: {
        width: 300,
        borderRadius: 0,
        backgroundColor: 'orange',
        marginTop: 20
    },
})
export default Forgot;