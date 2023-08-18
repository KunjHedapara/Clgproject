import { Box, Button } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { ImageBackground, Text, StyleSheet, TextInput, } from 'react-native';


const SignUp = (props) => {


    return (
        <ImageBackground source={require('../assets/images/bgimage.jpg')} style={styles.backgroundStyle}>
            <Box style={styles.overley}></Box>
            <Box>
                <Text style={styles.maintxt}>Create your Account</Text>
            </Box>
            <Box >

                {/* <Image
                    style={styles.img}
                    source={require('../assets/icon/user.png')} /> */}
                <TextInput placeholder="First Name" placeholderTextColor="lightgray" style={styles.input} />
                <TextInput placeholder="Last Name" placeholderTextColor="lightgray" style={styles.input} />
                <TextInput placeholder="Mobile Number" placeholderTextColor="lightgray" style={styles.input} />
                <TextInput placeholder="E-mail Address" placeholderTextColor="lightgray" style={styles.input} />
                <TextInput placeholder="Password" placeholderTextColor="lightgray" style={styles.input} />
                <TextInput placeholder="Confirm password" placeholderTextColor="lightgray" style={styles.input} />
            </Box>
            <Button
                onPress={() => props.navigation.navigate('Login')}
                title='SignUp' style={styles.btn}>
                <Text style={styles.SignUp}>SignUp</Text>
            </Button>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 700
    },
    overley: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        top: 0, right: 0, left: 0, bottom: 0
    },
    maintxt: {
        color: '#fff',
        fontSize: 35,
        marginBottom: 25,
        top: -10
    },
    input: {
        fontSize: 25,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        width: 270,
        marginBottom: 20,
        top: -10,
        left: 10
    },
    btn: {
        marginTop: 5,
        backgroundColor: '#fff',
        alignContent: 'center',
        height: 40,
        borderRadius: 0,
        width: 200
    },
    SignUp: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    img: {
        height: 25,
        width: 25,
    }
})
export default SignUp;