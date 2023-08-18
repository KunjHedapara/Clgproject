import { useRoute } from '@react-navigation/native';
import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { Box, Button, Stack, View } from 'native-base';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { ImageBackground, Text, StyleSheet, TextInput, Alert, } from 'react-native';


const Varification = (props) => {
    const [code, setCode] = useState(0)
    const route = useRoute()

    // useEffect(() => {

    // }, [])


    const checkTheCode = () => {

        if (code == route.params.status) {
            props.navigation.navigate('Reset', { email: route.params.email })
        }
        else {
            Alert.alert("Error", 'Invalid Code');
        }
    }


    return (

        <Box style={{ top: 190 }}>
            <Stack space={3} alignItems="center">
                <Text style={styles.mainTxt}>Enter Varification code</Text>
                <Box style={{ flexDirection: "row", width: 300, justifyContent: 'space-between' }}>
                    <TextInput style={styles.input} onChangeText={text => setCode(text)}></TextInput>
                </Box>
                {/* <Text style={{ fontSize: 15, top: 30 }}>If you didn't receive code! Resend</Text> */}
                <Button onPress={checkTheCode} style={styles.btn}>
                    <Text style={{ fontSize: 20, color: 'black' }}>Verify</Text></Button>
            </Stack>
        </Box>
    )
};

const styles = StyleSheet.create({

    mainTxt: {
        fontSize: 25,
        marginBottom: 30
    },

    input: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        width: 300,
        fontSize: 25,
        textAlign: 'center'
    },
    btn: {
        width: 300,
        borderRadius: 0,
        marginTop: 50,
        backgroundColor: 'lightblue'
    },

})
export default Varification;